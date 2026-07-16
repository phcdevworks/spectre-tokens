import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { coreTokens } from '../src/generated/tokens';
import { generateCssVariables, tokens } from '../src/index';
import { getPathValue, loadContractManifest } from './contract-utils';
import { collectRuntimeLeafPaths } from './token-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();
const parity = manifest.outputParity;

const fail = (message: string): never => {
  throw new Error(`Output parity check failed: ${message}`);
};

// ─── JS: runtime tokens vs generated tokens ──────────────────────────────────

parity.js.namespaces.forEach((namespace) => {
  const runtimeNode = (tokens as unknown as Record<string, unknown>)[namespace];
  const generatedNode = (coreTokens as unknown as Record<string, unknown>)[namespace];

  if (runtimeNode === undefined) fail(`Runtime tokens are missing declared JS parity namespace: ${namespace}`);
  if (generatedNode === undefined) fail(`Generated tokens are missing declared JS parity namespace: ${namespace}`);

  const paths = new Set([
    ...collectRuntimeLeafPaths(runtimeNode).map((path) => `${namespace}.${path}`),
    ...collectRuntimeLeafPaths(generatedNode).map((path) => `${namespace}.${path}`)
  ]);

  paths.forEach((path) => {
    const runtimeValue = getPathValue(tokens, path);
    const generatedValue = getPathValue(coreTokens, path);

    if (runtimeValue === undefined) fail(`Runtime tokens are missing leaf reachable via generated tokens: ${path}`);
    if (generatedValue === undefined) fail(`Generated tokens are missing leaf reachable via runtime tokens: ${path}`);
    if (JSON.stringify(runtimeValue) !== JSON.stringify(generatedValue)) {
      fail(`Runtime and generated tokens disagree at: ${path}`);
    }
  });
});

// ─── DTCG: every leaf has a $value ────────────────────────────────────────────

const dtcgPath = resolve(__dirname, '..', manifest.requiredOutputs.design.requiredFile);
let dtcg: Record<string, unknown>;
try {
  dtcg = JSON.parse(readFileSync(dtcgPath, 'utf8')) as Record<string, unknown>;
} catch {
  fail(`Design output file is missing or invalid: ${manifest.requiredOutputs.design.requiredFile}. Run \`npm run build\`.`);
}

const isDtcgLeaf = (node: unknown): boolean =>
  !!node && typeof node === 'object' && !Array.isArray(node) && '$value' in (node as Record<string, unknown>);

parity.dtcg.namespaces.forEach((namespace) => {
  const runtimeNode = (tokens as unknown as Record<string, unknown>)[namespace];
  if (runtimeNode === undefined) fail(`Runtime tokens are missing declared DTCG parity namespace: ${namespace}`);

  collectRuntimeLeafPaths(runtimeNode).forEach((leafPath) => {
    const path = `${namespace}.${leafPath}`;
    const dtcgNode = getPathValue(dtcg, path);
    if (!isDtcgLeaf(dtcgNode)) {
      fail(`DTCG output is missing a $value leaf reachable from runtime tokens: ${path}`);
    }
  });
});

// ─── CSS: declarative per-group prefix coverage ──────────────────────────────

const css = generateCssVariables(tokens);
const darkBlockMarker = ':root[data-spectre-theme="dark"] {';
const darkBlockIndex = css.indexOf(darkBlockMarker);
if (darkBlockIndex === -1) fail('Generated CSS is missing the dark-mode block.');
const rootBlock = css.slice(0, darkBlockIndex);
const darkBlock = css.slice(darkBlockIndex + darkBlockMarker.length);

// Matches `formatKey` in src/css.ts, which createCssVariableMap uses for the
// flat (non-mode-scoped) namespaces below: lowercased, non-alphanumeric runs
// collapsed to a hyphen, no camelCase splitting.
const formatKeyLikeCss = (segment: string): string =>
  segment
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

// Matches `kebabPathSegment` in src/css.ts, used only by the mode-scoped
// surface/text/component semantic walker: same as above but splits camelCase
// boundaries first (`onPage` -> `on-page`).
const kebabPathSegmentLikeCss = (segment: string): string =>
  formatKeyLikeCss(segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2'));

parity.css.groups.forEach(({ sourcePath, prefixParts, hasModes }) => {
  const node = getPathValue(tokens, sourcePath);
  if (node === undefined) fail(`Runtime tokens are missing declared CSS parity source path: ${sourcePath}`);

  const segmentFormatter = hasModes ? kebabPathSegmentLikeCss : formatKeyLikeCss;

  collectRuntimeLeafPaths(node).forEach((leafPath) => {
    const leafParts = leafPath.length > 0 ? leafPath.split('.').map(segmentFormatter) : [];
    const varName = `--sp-${[...prefixParts, ...leafParts].join('-')}`;

    if (!rootBlock.includes(`${varName}:`)) {
      fail(`Generated CSS is missing variable for ${sourcePath}${leafPath ? `.${leafPath}` : ''}: ${varName}`);
    }
    if (hasModes && !darkBlock.includes(`${varName}:`)) {
      fail(`Generated dark-mode CSS is missing variable for ${sourcePath}${leafPath ? `.${leafPath}` : ''}: ${varName}`);
    }
  });
});

console.log('Output parity check passed.');
