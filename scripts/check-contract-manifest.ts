import tokens from '../src/index';
import { getPathValue, loadContractManifest } from './contract-utils';

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

manifest.publicNamespaces.forEach((namespace) => {
  if (getPathValue(tokens, namespace) === undefined) {
    throw new Error(`Contract manifest references undocumented namespace: ${namespace}`);
  }
});

manifest.requiredOutputs.js.requiredPaths.forEach((path) => {
  if (getPathValue(tokens, path) === undefined) {
    throw new Error(`Contract manifest references missing JS contract path: ${path}`);
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

const allowedClassifications = new Set(['additive', 'semantic change', 'breaking']);
manifest.changeClassification.allowed.forEach((entry) => {
  if (!allowedClassifications.has(entry)) {
    throw new Error(`Unsupported contract change classification: ${entry}`);
  }
});

console.log('Contract manifest check passed.');
