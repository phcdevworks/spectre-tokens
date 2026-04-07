import { readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_DIR = join(__dirname, '../tokens');

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

/**
 * Deep merges two objects.
 */
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = sourceValue;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

/**
 * Loads and merges all JSON files in the tokens directory.
 */
export function loadMergedTokens(): Record<string, unknown> {
  let merged: Record<string, unknown> = {};

  // Load all JSON files and merge them
  const files = readdirSync(TOKENS_DIR);
  for (const file of files) {
    if (extname(file) !== '.json') continue;

    const content = JSON.parse(readFileSync(join(TOKENS_DIR, file), 'utf8')) as Record<string, unknown>;
    merged = deepMerge(merged, content);
  }

  return merged;
}

/**
 * Flattens source token leaf records like { value, metadata } into their public
 * runtime value while preserving the surrounding token tree shape.
 */
export function flattenTokenTree(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((entry) => flattenTokenTree(entry));
  }

  if (!isObject(value)) {
    return value;
  }

  if ('value' in value) {
    return flattenTokenTree(value.value);
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, flattenTokenTree(entry)])
  );
}
