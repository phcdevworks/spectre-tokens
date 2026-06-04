import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as indexModule from '../src/index';
import { coreTokens } from '../src/generated/tokens';
import {
  compareStringSets,
  getPathValue,
  loadContractManifest
} from './contract-utils';

const {
  default: defaultTokens,
  generateCssVariables,
  tailwindTheme,
  tokens
} = indexModule;

const __dirname = dirname(fileURLToPath(import.meta.url));
const typesSource = readFileSync(join(__dirname, '../src/types.ts'), 'utf8');
const manifest = loadContractManifest();

if (manifest.version !== 1) {
  throw new Error(`Unsupported contract manifest version: ${manifest.version}`);
}

if (manifest.publicNamespaces.length === 0) {
  throw new Error('Contract manifest must declare at least one public namespace.');
}

if (manifest.requiredOutputs.js.rootExports.length === 0) {
  throw new Error('Contract manifest must declare required JS root exports.');
}

if (manifest.requiredOutputs.css.requiredVariables.length === 0) {
  throw new Error('Contract manifest must declare required CSS variables.');
}

if (manifest.requiredOutputs.tailwind.expectations.length === 0) {
  throw new Error('Contract manifest must declare required Tailwind expectations.');
}

if (!manifest.docContract.requiredFiles || manifest.docContract.requiredFiles.length === 0) {
  throw new Error('Contract manifest must declare required contract documentation files.');
}

if (!manifest.docContract.tokenContractRequiredHeadings || manifest.docContract.tokenContractRequiredHeadings.length === 0) {
  throw new Error('Contract manifest must declare required TOKEN_CONTRACT.md headings.');
}

const manifestNamespaces = [...manifest.publicNamespaces].sort();
compareStringSets(manifestNamespaces, Object.keys(tokens).sort(), 'Public namespaces');
compareStringSets(manifestNamespaces, Object.keys(coreTokens).sort(), 'Generated token namespaces');

const runtimeExports = [...Object.keys(indexModule), 'default'].sort();
compareStringSets(
  [...manifest.requiredOutputs.js.rootExports].sort(),
  runtimeExports,
  'Runtime root exports'
);

if (defaultTokens !== tokens) {
  throw new Error('Default export must match the named tokens export.');
}

manifest.requiredOutputs.js.requiredPaths.forEach((path) => {
  const runtimeValue = getPathValue(tokens, path);
  const generatedValue = getPathValue(coreTokens, path);

  if (runtimeValue === undefined) {
    throw new Error(`Runtime tokens are missing JS contract path declared in manifest: ${path}`);
  }
  if (generatedValue === undefined) {
    throw new Error(`Generated tokens are missing JS contract path declared in manifest: ${path}`);
  }
  if (JSON.stringify(runtimeValue) !== JSON.stringify(generatedValue)) {
    throw new Error(`Runtime and generated tokens disagree for manifest path: ${path}`);
  }
});

manifest.requiredOutputs.js.requiredStringPaths.forEach((path) => {
  const runtimeValue = getPathValue(tokens, path);
  const generatedValue = getPathValue(coreTokens, path);

  if (typeof runtimeValue !== 'string') {
    throw new Error(`Runtime tokens must expose a flattened string at manifest path: ${path}`);
  }

  if (typeof generatedValue !== 'string') {
    throw new Error(`Generated tokens must expose a flattened string at manifest path: ${path}`);
  }
});

manifest.requiredOutputs.js.rootTypeExports.forEach((typeName) => {
  if (!typesSource.includes(`export type ${typeName}`) && !typesSource.includes(`export interface ${typeName}`)) {
    throw new Error(`Type contract declared in manifest is missing from src/types.ts: ${typeName}`);
  }
});

manifest.requiredOutputs.js.bannedPaths.forEach((path) => {
  if (getPathValue(tokens, path) !== undefined) {
    throw new Error(`Runtime tokens expose banned manifest path: ${path}`);
  }
  if (getPathValue(coreTokens, path) !== undefined) {
    throw new Error(`Generated tokens expose banned manifest path: ${path}`);
  }
});

const allowedTransforms = new Set(['firstFontFamily']);
manifest.requiredOutputs.tailwind.expectations.forEach(({ themePath, tokenPath, transform }) => {
  if (!themePath || !tokenPath) {
    throw new Error('Each Tailwind expectation must define themePath and tokenPath.');
  }
  if (transform && !allowedTransforms.has(transform)) {
    throw new Error(`Unsupported Tailwind expectation transform: ${transform}`);
  }
});

const generatedCss = generateCssVariables(tokens);
if (!generatedCss.includes(':root {') || !generatedCss.includes(':root[data-spectre-theme="dark"] {')) {
  throw new Error('Generated CSS is missing the expected root or dark-mode block.');
}

manifest.requiredOutputs.css.requiredVariables.forEach((variableName) => {
  if (!generatedCss.includes(`${variableName}:`)) {
    throw new Error(`Generated CSS is missing manifest variable: ${variableName}`);
  }
});

const generatedDarkBlock = generatedCss.split(':root[data-spectre-theme="dark"] {')[1] ?? '';
manifest.requiredOutputs.css.requiredDarkModeVariables.forEach((variableName) => {
  if (!generatedDarkBlock.includes(`${variableName}:`)) {
    throw new Error(`Generated dark-mode CSS is missing manifest variable: ${variableName}`);
  }
});

manifest.requiredOutputs.tailwind.expectations.forEach(({ themePath, tokenPath, transform }) => {
  const themeValue = getPathValue(tailwindTheme, themePath);
  let tokenValue = getPathValue(tokens, tokenPath);

  if (themeValue === undefined) {
    throw new Error(`Tailwind theme is missing expected path declared in manifest: ${themePath}`);
  }

  if (tokenValue === undefined) {
    throw new Error(`Tokens are missing Tailwind backing path declared in manifest: ${tokenPath}`);
  }

  if (transform === 'firstFontFamily') {
    tokenValue = String(tokenValue)
      .split(',')
      .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean)[0];
  }

  if (themeValue !== tokenValue) {
    throw new Error(
      `Tailwind expectation mismatch for ${themePath}. Expected ${tokenValue}, received ${themeValue}`
    );
  }
});

const allowedClassifications = new Set(['additive', 'semantic change', 'breaking']);
manifest.changeClassification.allowed.forEach((entry) => {
  if (!allowedClassifications.has(entry)) {
    throw new Error(`Unsupported contract change classification: ${entry}`);
  }
});

const designOutput = manifest.requiredOutputs.design;
const dtcgPath = resolve(__dirname, '..', designOutput.requiredFile);

let dtcg: Record<string, unknown>;
try {
  dtcg = JSON.parse(readFileSync(dtcgPath, 'utf8')) as Record<string, unknown>;
} catch {
  throw new Error(
    `Design output file is missing or invalid: ${designOutput.requiredFile}. Run \`npm run build\`.`
  );
}

for (const key of designOutput.requiredTopLevelKeys) {
  if (!(key in dtcg)) {
    throw new Error(`Design output is missing required top-level key: ${key}`);
  }
}

const isObj = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v);

const hasDtcgValues = Object.values(dtcg).some(
  (ns) => isObj(ns) && Object.values(ns).some((v) => isObj(v) && '$value' in v)
);

if (!hasDtcgValues) {
  throw new Error('Design output does not contain valid DTCG $value tokens.');
}

console.log('Contract manifest check passed.');
