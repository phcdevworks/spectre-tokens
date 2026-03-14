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
  if (!pathStr.includes('{')) {
    return pathStr; // It's a literal or doesn't contain references
  }

  // Handle color with opacity alias like "{colors.neutral.900} / 0.6"
  // or composite like "0 4px 14px 0 {colors.warning.500} / 0.39"
  // We want to find the first {path} and resolve it if we are checking contrast.
  // For contrast checks, we usually expect a single color reference.
  
  const regex = /\{([^}]+)\}/;
  const match = pathStr.match(regex);
  
  if (!match) return pathStr;

  const fullMatch = match[0];
  const cleanPath = match[1];
  const parts = cleanPath.split('.');
  let current = allTokens;

  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Token reference not found: ${fullMatch}`);
    }
    current = current[part];
  }

  const value = typeof current === 'object' && current !== null && 'value' in current 
    ? current.value 
    : current;

  if (typeof value !== 'string') {
    throw new Error(`Resolved value for ${fullMatch} is not a string`);
  }

  // Replace the reference with its resolved value
  const resolvedString = pathStr.replace(fullMatch, value);

  // If there are still references, recurse
  if (resolvedString.includes('{')) {
    return resolveToken(resolvedString, allTokens);
  }

  // After resolving all references, if it has an opacity suffix, strip it for contrast math if it's a solid hex
  // e.g. "#000000 / 0.6" -> "#000000"
  if (resolvedString.includes(' / ')) {
    return resolvedString.split(' / ')[0].trim();
  }

  return resolvedString;
}

function getContrast(color1: string, color2: string): number {
  return colord(color1).contrast(color2);
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

          const contrast = getContrast(bgValue, textValue);
          console.log(` [CHECK] ${fullPath} vs ${pairPath}: ${contrast.toFixed(2)}:1`);

          if (contrast < 4.5) {
            failures.push(`Contrast failure: ${fullPath} (${bgValue}) vs ${pairPath} (${textValue}) = ${contrast.toFixed(2)}:1 (Required: 4.5:1)`);
          }
        } else {
          checkTokensRecursively(value, fullPath);
        }
      }
    } catch (err: any) {
      console.error(` [ERROR] Failed to process ${fullPath}: ${err.message}`);
      process.exit(1);
    }
  }
}

console.log('--- Starting Contrast Validation ---');
checkTokensRecursively(tokens, '');

if (failures.length > 0) {
  console.error('\nContrast Validation Failed:');
  failures.forEach(f => console.error(` [FAIL] ${f}`));
  process.exit(1);
} else {
  console.log('\nContrast Validation Passed! All pairs meet WCAG AA (4.5:1).');
}
