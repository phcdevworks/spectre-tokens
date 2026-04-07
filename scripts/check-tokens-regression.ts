import tokens from '../src/index';
import type { SpectreTokens } from '../src/types';

const REQUIRED_PATHS = [
  'colors.brand',
  'surface.page',
  'text.onPage.default',
  'text.onSurface.default'
];

const REQUIRED_STRING_PATHS = [
  'surface.page',
  'component.card.text',
  'buttons.primary.bg',
  'forms.default.border',
  'modes.default.surface.page'
];

const BANNED_PATHS = [
  'borders'
];

const getPathValue = (obj: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);

const missing: string[] = [];
const publicTokens = tokens as SpectreTokens;

for (const path of REQUIRED_PATHS) {
  const value = getPathValue(publicTokens, path);
  if (value === undefined) {
    missing.push(path);
  }
}

if (missing.length > 0) {
  console.error('Token regression detected. Missing paths:', missing.join(', '));
  process.exit(1);
}

if ('spacing' in (publicTokens as unknown as Record<string, unknown>)) {
  console.error('Token regression detected. Do not reintroduce tokens.spacing; use tokens.space and tokens.layout only.');
  process.exit(1);
}

for (const path of BANNED_PATHS) {
  if (getPathValue(publicTokens, path) !== undefined) {
    console.error(`Token regression detected. Do not reintroduce tokens.${path}; use tokens.border only.`);
    process.exit(1);
  }
}

for (const path of REQUIRED_STRING_PATHS) {
  const value = getPathValue(publicTokens, path);
  if (typeof value !== 'string') {
    console.error(`Token regression detected. ${path} must be a flattened string in the public token contract.`);
    process.exit(1);
  }
}

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

const getPathValueArray = (obj: unknown, path: string[]): unknown =>
  path.reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);

const ensureLayoutValue = (path: string[]) => {
  const value = getPathValueArray(publicTokens, path);
  const name = path.join('.');
  if (typeof value !== 'string') {
    console.error(`Token regression detected. ${name} must be a string that maps to tokens.space values.`);
    process.exit(1);
  }
  if (!allowedSpaceValues.includes(value)) {
    const hint = nearestSpaceValue(value);
    const hintMsg = hint ? ` Closest space value: ${hint}` : '';
    console.error(`Token regression detected. ${name} -> ${value} is not in tokens.space.${hintMsg}`);
    process.exit(1);
  }
};

[
  ['layout', 'section', 'padding', 'sm'],
  ['layout', 'section', 'padding', 'md'],
  ['layout', 'section', 'padding', 'lg'],
  ['layout', 'section', 'gap', 'sm'],
  ['layout', 'section', 'gap', 'md'],
  ['layout', 'section', 'gap', 'lg'],
  ['layout', 'stack', 'gap', 'sm'],
  ['layout', 'stack', 'gap', 'md'],
  ['layout', 'stack', 'gap', 'lg'],
  ['layout', 'container', 'paddingInline', 'sm'],
  ['layout', 'container', 'paddingInline', 'md'],
  ['layout', 'container', 'paddingInline', 'lg']
].forEach(ensureLayoutValue);

console.log('Token regression check passed for paths:', REQUIRED_PATHS.join(', '));
