import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import { fileURLToPath } from 'node:url';
import { actionFamilies } from '../src/css';
import type { SpectreSourceTokens } from '../src/generated/tokens';
import type { SpectreTokens } from '../src/types';
import { loadMergedTokens } from './token-utils';

extend([a11yPlugin]);

const TOKEN_REF_REGEX = /\{([^}]+)\}/;

export function computeContrast(bg: string, text: string): number {
  return colord(bg).contrast(text)
}

// `metadata.minContrast` marks a non-text pair (chart series, axis lines),
// which WCAG holds to 3:1 in every mode; text pairs need AA (4.5:1), or AAA
// (7:1) in high-contrast mode
export function requiredContrast(path: string, minContrast?: number): number {
  if (minContrast !== undefined) return minContrast
  return path.startsWith('modes.highContrast.') ? 7 : 4.5
}

function resolveToken(pathStr: string, allTokens: SpectreSourceTokens): string {
  if (!pathStr || typeof pathStr !== 'string' || !pathStr.includes('{')) {
    if (typeof pathStr === 'string' && pathStr.includes(' / ')) {
      return pathStr.split(' / ')[0].trim();
    }
    return pathStr;
  }

  const match = pathStr.match(TOKEN_REF_REGEX);
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

if (process.argv[1] !== undefined && fileURLToPath(import.meta.url) === process.argv[1]) {
  const tokens = loadMergedTokens() as SpectreSourceTokens;
  const failures: string[] = [];

  function checkTokensRecursively(
    obj: Record<string, unknown> | SpectreSourceTokens,
    currentPath: string,
    source: SpectreSourceTokens = tokens
  ) {
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key === 'metadata' || key === 'value') continue;

      const fullPath = currentPath ? `${currentPath}.${key}` : key;

      try {
        if (value && typeof value === 'object') {
          const valObj = value as { value?: unknown; metadata?: { pair?: string; minContrast?: number } };

          if (typeof valObj.value === 'string' && valObj.metadata?.pair) {
            const bgValue = resolveToken(valObj.value, source);
            const pairPath = valObj.metadata.pair;
            const textValue = resolveToken(`{${pairPath}}`, source);

            const contrast = computeContrast(bgValue, textValue);

            const required = requiredContrast(fullPath, valObj.metadata.minContrast);
            if (contrast < required) {
              failures.push(`${fullPath} vs ${pairPath}: ${contrast.toFixed(2)}:1 (need ${required}:1)`);
            }
          } else {
            checkTokensRecursively(value as Record<string, unknown>, fullPath, source);
          }
        }
      } catch (err: unknown) {
        console.error(`[ERROR] ${fullPath}: ${(err as Error).message}`);
        process.exit(1);
      }
    }
  }

  checkTokensRecursively(tokens, '');

  // every family a theme can pick with data-spectre-action must hold the same
  // pairs the brand default does, so re-run the action roles with brand swapped
  const families = actionFamilies(tokens as unknown as SpectreTokens);
  const modes = tokens.modes as unknown as Record<string, Record<string, unknown>>;
  Object.entries(families).forEach(([family, scale]) => {
    const swapped = {
      ...tokens,
      colors: { ...tokens.colors, brand: scale }
    } as unknown as SpectreSourceTokens;
    const before = failures.length;
    checkTokensRecursively({ action: (tokens as unknown as Record<string, unknown>).action }, '', swapped);
    Object.entries(modes).forEach(([mode, node]) => {
      if (node.action) checkTokensRecursively({ action: node.action }, `modes.${mode}`, swapped);
    });
    failures.slice(before).forEach((failure, index) => {
      failures[before + index] = `[data-spectre-action="${family}"] ${failure}`;
    });
  });

  if (failures.length > 0) {
    console.error('Contrast check failed:');
    failures.forEach(f => console.error(` [FAIL] ${f}`));
    process.exit(1);
  } else {
    console.log('Contrast check passed. Text pairs meet WCAG AA (4.5:1), high-contrast mode text pairs meet AAA (7:1), and non-text pairs meet their minContrast.');
  }
}
