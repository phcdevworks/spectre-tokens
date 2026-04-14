import { loadContractManifest } from './contract-utils';
import { loadMergedTokens } from './token-utils';

const tokens = loadMergedTokens();
const manifest = loadContractManifest();

const requiredPaths = manifest.requiredOutputs.js.requiredPaths;
const namespacePaths = manifest.publicNamespaces;
const layoutPaths = manifest.requiredOutputs.js.spaceLinkedLayoutPaths;

const badge = tokens.component?.badge as Record<string, unknown> | undefined;
if (badge && typeof badge === 'object') {
  const ensureVariantObject = (variant: string, bgKey: string, textKey: string) => {
    const variantValue = badge[variant];
    const hasVariant =
      variantValue &&
      typeof variantValue === 'object' &&
      'bg' in (variantValue as Record<string, unknown>) &&
      'text' in (variantValue as Record<string, unknown>);

    if (hasVariant) return;

    const bg = badge[bgKey];
    const text = badge[textKey];

    if (bg !== undefined && text !== undefined) {
      badge[variant] = { bg, text };
    }
  };

  ensureVariantObject('primary', 'neutralBg', 'neutralText');
  ensureVariantObject('success', 'successBg', 'successText');
  ensureVariantObject('warning', 'warningBg', 'warningText');
  ensureVariantObject('danger', 'dangerBg', 'dangerText');
}

function assertPath(obj: unknown, path: string): void {
  const parts = path.split('.');
  let cur: unknown = obj;

  for (const part of parts) {
    if (cur == null || typeof cur !== 'object' || !(part in (cur as Record<string, unknown>))) {
      throw new Error(`Missing token path: ${path}`);
    }
    cur = (cur as Record<string, unknown>)[part];
  }
}

[...requiredPaths, ...namespacePaths].forEach((path) => assertPath(tokens, path));

if ('spacing' in tokens) {
  throw new Error('Do not reintroduce tokens.spacing; use tokens.space and tokens.layout only');
}

const space = tokens.space as Record<string, unknown> | undefined;
if (!space || Object.keys(space).length === 0) {
  throw new Error('Missing token scale: space');
}

const spaceValues = new Set<string>();
Object.entries(space).forEach(([key, value]) => {
  if (typeof value !== 'string') {
    throw new Error(`space.${key} must be a string value`);
  }
  spaceValues.add(value);
});

const ensureInSpace = (value: unknown, path: string): void => {
  if (typeof value !== 'string') {
    throw new Error(`Expected string value at ${path}`);
  }
  if (!spaceValues.has(value)) {
    throw new Error(`Spacing/layout value not in space scale: ${path} -> ${value}`);
  }
};

layoutPaths.forEach((path) => {
  const value = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, tokens);

  ensureInSpace(value, path);
});

console.log('Core token contract check passed.');
