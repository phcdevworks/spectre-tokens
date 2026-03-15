import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_DIR = join(__dirname, '../tokens');

/**
 * Deep merges two objects.
 */
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const isObject = (obj: unknown): obj is Record<string, unknown> => 
    !!obj && typeof obj === 'object' && !Array.isArray(obj);

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
