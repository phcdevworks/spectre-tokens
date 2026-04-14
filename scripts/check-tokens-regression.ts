import tokens from '../src/index';
import type { SpectreTokens } from '../src/types';
import { getPathValue, loadContractManifest } from './contract-utils';

const manifest = loadContractManifest();
const publicTokens = tokens as SpectreTokens;
const missing: string[] = [];

[
  ...manifest.publicNamespaces,
  ...manifest.requiredOutputs.js.requiredPaths
].forEach((path) => {
  const value = getPathValue(publicTokens, path);
  if (value === undefined) {
    missing.push(path);
  }
});

if (missing.length > 0) {
  console.error('Token regression detected. Missing paths:', missing.join(', '));
  process.exit(1);
}

if ('spacing' in (publicTokens as unknown as Record<string, unknown>)) {
  console.error('Token regression detected. Do not reintroduce tokens.spacing; use tokens.space and tokens.layout only.');
  process.exit(1);
}

manifest.requiredOutputs.js.bannedPaths.forEach((path) => {
  if (getPathValue(publicTokens, path) !== undefined) {
    console.error(`Token regression detected. Do not reintroduce tokens.${path}; use tokens.border only.`);
    process.exit(1);
  }
});

manifest.requiredOutputs.js.requiredStringPaths.forEach((path) => {
  const value = getPathValue(publicTokens, path);
  if (typeof value !== 'string') {
    console.error(`Token regression detected. ${path} must be a flattened string in the public token contract.`);
    process.exit(1);
  }
});

const assertNoWrappedEntries = (value: unknown, path: string[] = []): void => {
  if (!value || typeof value !== 'object') return;

  const record = value as Record<string, unknown>;
  if ('value' in record || 'metadata' in record) {
    const label = path.length > 0 ? path.join('.') : '<root>';
    console.error(`Token regression detected. Public tokens must not expose wrapped token entries at ${label}.`);
    process.exit(1);
  }

  Object.entries(record).forEach(([key, entry]) => {
    assertNoWrappedEntries(entry, [...path, key]);
  });
};

assertNoWrappedEntries(publicTokens);

const spaceEntries = publicTokens.space as unknown as Record<string, unknown> | undefined;
if (!spaceEntries || Object.keys(spaceEntries).length === 0) {
  console.error('Token regression detected. Missing tokens.space scale.');
  process.exit(1);
}

const allowedSpaceValues = Object.values(spaceEntries);

const nearestSpaceValue = (value: string): string | undefined => {
  const parse = (val: string): number | undefined => {
    const parsed = parseFloat(val);
    return Number.isNaN(parsed) ? undefined : parsed;
  };

  const target = parse(value);
  if (target === undefined) return undefined;

  let best: { val: string; delta: number } | undefined;
  allowedSpaceValues.forEach((candidate) => {
    if (typeof candidate !== 'string') return;
    const parsedCandidate = parse(candidate);
    if (parsedCandidate === undefined) return;
    const delta = Math.abs(parsedCandidate - target);
    if (!best || delta < best.delta) {
      best = { val: candidate, delta };
    }
  });
  return best?.val;
};

manifest.requiredOutputs.js.spaceLinkedLayoutPaths.forEach((path) => {
  const value = getPathValue(publicTokens, path);
  if (typeof value !== 'string') {
    console.error(`Token regression detected. ${path} must be a string that maps to tokens.space values.`);
    process.exit(1);
  }
  if (!allowedSpaceValues.includes(value)) {
    const hint = nearestSpaceValue(value);
    const hintMsg = hint ? ` Closest space value: ${hint}` : '';
    console.error(`Token regression detected. ${path} -> ${value} is not in tokens.space.${hintMsg}`);
    process.exit(1);
  }
});

console.log('Token regression check passed for paths:', manifest.requiredOutputs.js.requiredPaths.join(', '));
