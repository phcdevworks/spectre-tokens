import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

extend([a11yPlugin]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CORE_TOKENS_PATH = path.join(__dirname, '../tokens/core.json');

const tokens = JSON.parse(readFileSync(CORE_TOKENS_PATH, 'utf8'));

/**
 * Resolves a token reference like "{colors.info.600}" to its value.
 * Supports nested references and composite values.
 */
function resolveToken(pathStr: string, allTokens: any): string {
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
  let current = allTokens;

  for (const part of parts) {
    if (!current || typeof current !== 'object' || current[part] === undefined) {
      throw new Error(`Token reference not found: ${fullMatch} at part "${part}"`);
    }
    current = current[part];
  }

  const value = (current !== null && typeof current === 'object' && 'value' in current)
    ? (current as any).value
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

function checkTokensRecursively(obj: any, currentPath: string) {
  for (const key in obj) {
    const value = obj[key];
    const fullPath = currentPath ? `${currentPath}.${key}` : key;

    try {
      if (typeof value === 'object' && value !== null) {
        if ('value' in value && value.metadata?.pair) {
          const bgValue = resolveToken(value.value, tokens);
          const pairPath = value.metadata.pair;
          const textValue = resolveToken(`{${pairPath}}`, tokens);

          const contrast = colord(bgValue).contrast(textValue);
          console.log(`[CHECK] ${fullPath} vs ${pairPath}: ${contrast.toFixed(2)}:1`);

          if (contrast < 4.5) {
            failures.push(`Contrast failure: ${fullPath} (${bgValue}) vs ${pairPath} (${textValue}) = ${contrast.toFixed(2)}:1`);
          }
        } else {
          checkTokensRecursively(value, fullPath);
        }
      }
    } catch (err: any) {
      console.error(`[ERROR] ${fullPath}: ${err.message}`);
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
