import { readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_DIR = join(__dirname, '../tokens');

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

const collectLeafPaths = (value: unknown, path: string[] = []): string[] => {
  if (Array.isArray(value)) {
    return path.length > 0 ? [path.join('.')] : [];
  }

  if (!isObject(value)) {
    return path.length > 0 ? [path.join('.')] : [];
  }

  return Object.entries(value).flatMap(([key, entry]) => collectLeafPaths(entry, [...path, key]));
};

export function getTokenSourceFiles(): string[] {
  return readdirSync(TOKENS_DIR)
    .filter((file) => extname(file) === '.json')
    .sort((a, b) => a.localeCompare(b));
}

function assertNoDuplicateTokenPaths(files: string[]): void {
  const owners = new Map<string, string>();
  const duplicates: string[] = [];

  for (const file of files) {
    const fullPath = join(TOKENS_DIR, file);
    const content = JSON.parse(readFileSync(fullPath, 'utf8')) as Record<string, unknown>;

    for (const tokenPath of collectLeafPaths(content)) {
      const existingOwner = owners.get(tokenPath);
      if (existingOwner && existingOwner !== file) {
        duplicates.push(`${tokenPath} (${existingOwner}, ${file})`);
        continue;
      }
      owners.set(tokenPath, file);
    }
  }

  if (duplicates.length > 0) {
    throw new Error(
      [
        'Duplicate token ownership detected across tokens/*.json.',
        'Each public token path should be owned by exactly one source file.',
        ...duplicates.sort().map((entry) => `- ${entry}`)
      ].join('\n')
    );
  }
}

function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = target[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = sourceValue;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }
  return target;
}

export function loadMergedTokens(): Record<string, unknown> {
  let merged: Record<string, unknown> = {};

  // Load JSON files in deterministic order so generated outputs stay stable.
  const files = getTokenSourceFiles();
  assertNoDuplicateTokenPaths(files);

  for (const file of files) {
    const content = JSON.parse(readFileSync(join(TOKENS_DIR, file), 'utf8')) as Record<string, unknown>;
    merged = deepMerge(merged, content);
  }

  return merged;
}

export function collectRuntimeLeafPaths(value: unknown, path: string[] = []): string[] {
  if (!isObject(value) || Array.isArray(value)) {
    return path.length > 0 ? [path.join('.')] : [];
  }

  return Object.entries(value).flatMap(([key, entry]) => collectRuntimeLeafPaths(entry, [...path, key]));
}

const REFERENCE_PATTERN = /^\{([^}]+)\}$/;

function getAtPath(root: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (isObject(acc)) return acc[key];
    return undefined;
  }, root);
}

export function resolveReferences(tree: unknown, root: unknown): unknown {
  if (Array.isArray(tree)) {
    return tree.map((entry) => resolveReferences(entry, root));
  }

  if (isObject(tree)) {
    return Object.fromEntries(
      Object.entries(tree).map(([key, entry]) => [key, resolveReferences(entry, root)])
    );
  }

  if (typeof tree === 'string') {
    const match = tree.match(REFERENCE_PATTERN);
    if (match) {
      const resolved = getAtPath(root, match[1]);
      if (typeof resolved === 'string' || typeof resolved === 'number') {
        return resolved;
      }
    }
  }

  return tree;
}

export interface TokenLeafDetail {
  path: string;
  value: unknown;
  description?: string;
  pair?: string;
}

export function collectLeafDetails(tree: unknown, path: string[] = []): TokenLeafDetail[] {
  if (Array.isArray(tree)) {
    return path.length > 0 ? [{ path: path.join('.'), value: tree }] : [];
  }

  if (!isObject(tree)) {
    return path.length > 0 ? [{ path: path.join('.'), value: tree }] : [];
  }

  if ('value' in tree) {
    const metadata = isObject(tree.metadata) ? tree.metadata : undefined;
    const detail: TokenLeafDetail = { path: path.join('.'), value: tree.value };
    if (typeof tree.description === 'string') detail.description = tree.description;
    if (typeof metadata?.pair === 'string') detail.pair = metadata.pair;
    return [detail];
  }

  return Object.entries(tree).flatMap(([key, entry]) => collectLeafDetails(entry, [...path, key]));
}

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
