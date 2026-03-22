import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import type { SpectreTokens } from '../src/types';
import { loadMergedTokens } from './token-utils';

extend([a11yPlugin]);

const tokens = loadMergedTokens();

/**
 * Resolves a token reference like "{colors.info.600}" to its value.
 * Supports nested references and composite values.
 */
function resolveToken(pathStr: string, allTokens: SpectreTokens): string {
  if (!pathStr || typeof pathStr !== 'string' || !pathStr.includes('{')) {
    if (typeof pathStr === 'string' && pathStr.includes(' / ')) {
      return pathStr.split(' / ')[0].trim();
    }
    return pathStr;
  }

  const regex = /\{([^}]+)\}/;
  const match = pathStr.match(regex);
  if (!match) return pathStr;

  const fullMatch = match[0];
  const cleanPath = match[1];
  const parts = cleanPath.split('.');
  let current: unknown = allTokens;
  for (const part of parts) {
    if (!current || typeof current !== 'object' || (current as Record<string, unknown>)[part] === undefined) {
      throw new Error(`Token reference not found: ${fullMatch} at part "${part}"`);
    }
    current = (current as Record<string, unknown>)[part];
  }

  const value = (current !== null && typeof current === 'object' && 'value' in (current as Record<string, unknown>))
    ? (current as unknown as { value: unknown }).value
    : current;

  if (typeof value !== 'string') {
    if (typeof value === 'number') return String(value);
    throw new Error(`Resolved value for ${fullMatch} is not a string or number: ${typeof value}`);
  }

  if (value === fullMatch) {
    throw new Error(`Circular reference detected: ${fullMatch}`);
  }

  const resolvedString = pathStr.replace(fullMatch, value);
  return resolveToken(resolvedString, allTokens);
}

const failures: string[] = [];

function checkTokensRecursively(obj: Record<string, unknown> | SpectreTokens, currentPath: string) {
  const records = obj as Record<string, unknown>;
  for (const key in records) {
    if (key === 'metadata' || key === 'value') continue;

    const value = records[key];
    const fullPath = currentPath ? `${currentPath}.${key}` : key;

    try {
      if (value && typeof value === 'object') {
        const valObj = value as { value?: unknown; metadata?: { pair?: string } };

        if (typeof valObj.value === 'string' && valObj.metadata?.pair) {
          const bgValue = resolveToken(valObj.value, tokens);
          const pairPath = valObj.metadata.pair;
          const textValue = resolveToken(`{${pairPath}}`, tokens);

          const contrast = colord(bgValue).contrast(textValue);
          console.log(`[CHECK] ${fullPath} vs ${pairPath}: ${contrast.toFixed(2)}:1`);

          if (contrast < 4.5) {
            failures.push(`Contrast failure: ${fullPath} (${bgValue}) vs ${pairPath} (${textValue}) = ${contrast.toFixed(2)}:1`);
          }
        } else {
          checkTokensRecursively(value as Record<string, unknown>, fullPath);
        }
      }
    } catch (err: unknown) {
      console.error(`[ERROR] ${fullPath}: ${(err as Error).message}`);
      process.exit(1);
    }
  }
}

console.log('--- Spectre Token Contrast Validation ---');
checkTokensRecursively(tokens, '');

if (failures.length > 0) {
  console.error('\nCONTRAST VALIDATION FAILED:');
  failures.forEach(f => console.error(` [FAIL] ${f}`));
  process.exit(1);
} else {
  console.log('\nCONTRAST VALIDATION PASSED! All pairs meet WCAG AA (4.5:1).');
}
