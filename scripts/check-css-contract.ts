import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import tokens, { generateCssVariables } from '../src/index';
import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();
const distCssPath = join(__dirname, '../dist/index.css');

const generatedCss = generateCssVariables(tokens);
const builtCss = readFileSync(distCssPath, 'utf8');

const ensureIncludes = (source: string, needle: string, label: string) => {
  if (!source.includes(needle)) {
    throw new Error(`${label} is missing required CSS variable: ${needle}`);
  }
};

if (!generatedCss.includes(':root {') || !generatedCss.includes(':root[data-spectre-theme="dark"] {')) {
  throw new Error('Generated CSS is missing the expected root or dark-mode block.');
}

if (!builtCss.includes(':root {') || !builtCss.includes(':root[data-spectre-theme="dark"] {')) {
  throw new Error('Built CSS is missing the expected root or dark-mode block.');
}

manifest.requiredOutputs.css.requiredVariables.forEach((variableName) => {
  ensureIncludes(generatedCss, `${variableName}:`, 'Generated CSS');
  ensureIncludes(builtCss, `${variableName}:`, 'Built CSS');
});

const builtDarkBlock = builtCss.split(':root[data-spectre-theme="dark"] {')[1] ?? '';
manifest.requiredOutputs.css.requiredDarkModeVariables.forEach((variableName) => {
  ensureIncludes(builtDarkBlock, `${variableName}:`, 'Built dark-mode CSS');
});

console.log('CSS contract check passed.');
