import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import tokens from '../src/index';
import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const readmePath = join(__dirname, '../README.md');
const tokenContractPath = join(__dirname, '../TOKEN_CONTRACT.md');
const indexPath = join(__dirname, '../src/index.ts');
const packageJsonPath = join(__dirname, '../package.json');
const readme = readFileSync(readmePath, 'utf8');
const tokenContract = readFileSync(tokenContractPath, 'utf8');
const indexSource = readFileSync(indexPath, 'utf8');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const manifest = loadContractManifest();

const versionMatch = readme.match(/\|\s*Current version\/status\s*\|\s*([^\s|]+)\s*\|/i);
if (!versionMatch) {
  throw new Error('README is missing the "Current version/status" row in the Repository Snapshot table.');
}
if (versionMatch[1] !== packageJson.version) {
  throw new Error(
    `README "Current version/status" is "${versionMatch[1]}" but package.json version is "${packageJson.version}". Update README.md to match.`
  );
}

manifest.docContract.requiredFiles.forEach((filePath) => {
  const fullPath = join(__dirname, '..', filePath);
  readFileSync(fullPath, 'utf8');
});

const tokenNamespaces = Object.keys(tokens).sort();
const manifestNamespaces = [...manifest.publicNamespaces].sort();

if (JSON.stringify(tokenNamespaces) !== JSON.stringify(manifestNamespaces)) {
  throw new Error(
    [
      'Contract manifest publicNamespaces do not match the generated public token object.',
      `Manifest: ${manifestNamespaces.join(', ')}`,
      `Tokens: ${tokenNamespaces.join(', ')}`
    ].join('\n')
  );
}

manifest.docContract.requiredSectionMarkers.forEach((marker) => {
  if (!readme.includes(marker)) {
    throw new Error(`README missing required contract section marker: ${marker}`);
  }
});

manifest.publicNamespaces.forEach((namespace) => {
  const bullet = `- \`${namespace}\``;
  if (!readme.includes(bullet)) {
    throw new Error(`README token model is missing manifest namespace: ${namespace}`);
  }
});

manifest.requiredOutputs.js.rootExports.forEach((exportName) => {
  const bullet = exportName === 'default' || exportName === 'tokens'
    ? '- `default` / `tokens`'
    : `- \`${exportName}\``;
  if (!readme.includes(bullet)) {
    throw new Error(`README root package section is missing manifest export: ${exportName}`);
  }
});

manifest.requiredOutputs.js.rootTypeExports.forEach((typeName) => {
  if (!readme.includes(`\`${typeName}\``)) {
    throw new Error(`README is missing public type from manifest: ${typeName}`);
  }
});

manifest.requiredOutputs.js.rootExports
  .filter((exportName) => exportName !== 'default')
  .forEach((exportName) => {
    const pattern = new RegExp(`\\b${exportName}\\b`);
    if (!pattern.test(indexSource)) {
      throw new Error(`src/index.ts does not expose expected root export: ${exportName}`);
    }
  });

manifest.docContract.tokenContractRequiredHeadings.forEach((heading) => {
  if (!tokenContract.includes(heading)) {
    throw new Error(`TOKEN_CONTRACT.md is missing required heading: ${heading}`);
  }
});

manifest.publicNamespaces.forEach((namespace) => {
  if (!tokenContract.includes(`- \`${namespace}\``)) {
    throw new Error(`TOKEN_CONTRACT.md is missing public namespace: ${namespace}`);
  }
});

console.log('README and TOKEN_CONTRACT contract checks passed.');
