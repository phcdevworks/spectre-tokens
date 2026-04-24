import lockedColorBaseline from './locked-color-baseline.json';
import { getPathValue } from './contract-utils';
import { loadMergedTokens } from './token-utils';

const tokens = loadMergedTokens();

const stableStringify = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(',')}]`;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, nestedValue]) => `${JSON.stringify(key)}:${stableStringify(nestedValue)}`);
    return `{${entries.join(',')}}`;
  }
  return JSON.stringify(value);
};

const failures: string[] = [];

Object.entries(lockedColorBaseline).forEach(([path, expectedValue]) => {
  const actualValue = getPathValue(tokens, path);
  if (stableStringify(actualValue) !== stableStringify(expectedValue)) {
    failures.push(path);
  }
});

if (failures.length > 0) {
  console.error('Locked color contract changed without approval.');
  failures.forEach((path) => {
    const actualValue = getPathValue(tokens, path);
    const expectedValue = (lockedColorBaseline as Record<string, unknown>)[path];
    console.error(`- ${path}`);
    console.error(`  expected: ${stableStringify(expectedValue)}`);
    console.error(`  received: ${stableStringify(actualValue)}`);
  });
  process.exit(1);
}

console.log('Locked color contract check passed.');
