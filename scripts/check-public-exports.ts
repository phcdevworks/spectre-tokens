import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

interface ContractManifest {
  requiredOutputs: {
    js: {
      rootExports: string[];
      rootTypeExports: string[];
    };
  };
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(join(__dirname, '../contract.manifest.json'), 'utf8')) as ContractManifest;
const distDir = join(__dirname, '../dist');
const esmEntry = join(distDir, 'index.js');
const cjsEntry = join(distDir, 'index.cjs');
const cssEntry = join(distDir, 'index.css');
const dtsEntry = join(distDir, 'index.d.ts');

[esmEntry, cjsEntry, cssEntry, dtsEntry].forEach((filePath) => {
  if (!existsSync(filePath)) {
    throw new Error(`Missing built artifact: ${filePath}`);
  }
});

const esmModule = (await import(pathToFileURL(esmEntry).href)) as Record<string, unknown>;
const require = createRequire(import.meta.url);
const cjsModule = require(cjsEntry) as Record<string, unknown>;
const cssOutput = readFileSync(cssEntry, 'utf8');
const dtsOutput = readFileSync(dtsEntry, 'utf8');

manifest.requiredOutputs.js.rootExports
  .filter((exportName) => exportName !== 'default')
  .forEach((exportName) => {
    if (!(exportName in esmModule)) {
      throw new Error(`ESM build is missing export: ${exportName}`);
    }
    if (!(exportName in cjsModule)) {
      throw new Error(`CJS build is missing export: ${exportName}`);
    }
  });

if (!('default' in esmModule) || !('default' in cjsModule)) {
  throw new Error('Both ESM and CJS builds must expose a default export.');
}

if (esmModule['default'] !== esmModule['tokens']) {
  throw new Error('ESM default export must match the named tokens export.');
}

if (cjsModule['default'] !== cjsModule['tokens']) {
  throw new Error('CJS default export must match the named tokens export.');
}

manifest.requiredOutputs.js.rootTypeExports.forEach((typeName) => {
  if (!dtsOutput.includes(typeName)) {
    throw new Error(`Built type declarations are missing public type: ${typeName}`);
  }
});

if (!cssOutput.includes(':root {') || !cssOutput.includes(':root[data-spectre-theme="dark"] {')) {
  throw new Error('Built CSS output is missing the expected root or dark-mode block.');
}

console.log('Built package export check passed.');
