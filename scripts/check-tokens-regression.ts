import tokens from '../src/index';

const REQUIRED_PATHS = [
  'colors.brand',
  'surface.page',
  'text.onPage.default',
  'text.onSurface.default'
];

const getPathValue = (obj: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);

const missing: string[] = [];

for (const path of REQUIRED_PATHS) {
  const value = getPathValue(tokens, path);
  if (value === undefined) {
    missing.push(path);
  }
}

if (missing.length > 0) {
  console.error('Token regression detected. Missing paths:', missing.join(', '));
  process.exit(1);
}

if ('spacing' in (tokens as Record<string, unknown>)) {
  console.error('Token regression detected. Deprecated top-level "spacing" key present.');
  process.exit(1);
}

console.log('Token regression check passed for paths:', REQUIRED_PATHS.join(', '));
