import { loadContractManifest, getPathValue } from './contract-utils';
import { loadMergedTokens, resolveReferences } from './token-utils';

const rawTokens = loadMergedTokens();
const tokens = { ...rawTokens, font: resolveReferences(rawTokens.font, rawTokens) };
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

function normalizeFontToken(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null;
  }

  const entry = value as Record<string, unknown>;
  return {
    fontSize: entry.size,
    lineHeight: entry.lineHeight,
    fontWeight: entry.weight,
    letterSpacing: entry.letterSpacing
  };
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
  ensureInSpace(getPathValue(tokens, path), path);
});

// Layout spacing sits on one 8px grid; 4px and finer steps are reserved for
// spacing inside a component, never between layout blocks.
const LAYOUT_GRID_PX = 8;
const toPx = (value: string): number | undefined => {
  const match = value.match(/^(\d+(?:\.\d+)?)(rem|px)$/);
  if (!match) return undefined;
  return match[2] === 'rem' ? Number(match[1]) * 16 : Number(match[1]);
};

const layout = tokens.layout as Record<string, unknown>;
const layoutScaleNodes: Array<[string, unknown]> = [
  ['layout.section.padding', getPathValue(tokens, 'layout.section.padding')],
  ['layout.section.gap', getPathValue(tokens, 'layout.section.gap')],
  ['layout.stack.gap', getPathValue(tokens, 'layout.stack.gap')],
  ['layout.container.paddingInline', getPathValue(tokens, 'layout.container.paddingInline')]
];
Object.entries((layout.responsive ?? {}) as Record<string, Record<string, Record<string, unknown>>>).forEach(
  ([breakpoint, scales]) => {
    if (!(breakpoint in (tokens.breakpoints as Record<string, unknown>))) {
      throw new Error(`layout.responsive.${breakpoint} does not name a breakpoints entry`);
    }
    Object.entries(scales).forEach(([group, groupScales]) => {
      Object.entries(groupScales).forEach(([scale, node]) => {
        layoutScaleNodes.push([`layout.responsive.${breakpoint}.${group}.${scale}`, node]);
      });
    });
  }
);

layoutScaleNodes.forEach(([scalePath, node]) => {
  Object.entries(node as Record<string, unknown>).forEach(([step, value]) => {
    const path = `${scalePath}.${step}`;
    const px = typeof value === 'string' ? toPx(value) : undefined;
    if (px === undefined || px % LAYOUT_GRID_PX !== 0) {
      throw new Error(`Layout spacing is off the ${LAYOUT_GRID_PX}px grid: ${path} -> ${String(value)}`);
    }
    const responsiveMatch = scalePath.match(/^layout\.responsive\.[^.]+\.(.+)$/);
    if (responsiveMatch) {
      const basePath = `layout.${responsiveMatch[1]}.${step}`;
      const base = getPathValue(tokens, basePath);
      if (typeof base !== 'string') {
        throw new Error(`Responsive layout step has no base value: ${path} (expected ${basePath})`);
      }
      if ((toPx(base) ?? 0) > px) {
        throw new Error(`Responsive layout step shrinks at a wider breakpoint: ${path} -> ${String(value)} < ${basePath} -> ${base}`);
      }
    }
  });
});

const hero = (layout.hero ?? {}) as Record<string, Record<string, unknown>>;
Object.entries(hero).forEach(([edge, steps]) => {
  Object.entries(steps).forEach(([step, value]) => {
    const path = `layout.hero.${edge}.${step}`;
    const reference = typeof value === 'string' ? value.match(/^\{(layout\.section\.padding\.[^}]+)\}$/)?.[1] : undefined;
    if (!reference || getPathValue(tokens, reference) === undefined) {
      throw new Error(`Hero padding must reference a layout.section.padding step: ${path} -> ${String(value)}`);
    }
  });
});

const fontXs = getPathValue(tokens, 'font.xs');
const typographyScaleXs = getPathValue(tokens, 'typography.scale.xs');
const normalizedFontXs = normalizeFontToken(fontXs);

if (
  !normalizedFontXs ||
  !typographyScaleXs ||
  typeof typographyScaleXs !== 'object' ||
  Array.isArray(typographyScaleXs)
) {
  throw new Error('Expected token objects at font.xs and typography.scale.xs');
}

if (JSON.stringify(normalizedFontXs) !== JSON.stringify(typographyScaleXs)) {
  throw new Error(
    [
      'font.xs must match typography.scale.xs.',
      `font.xs: ${JSON.stringify(fontXs)}`,
      `typography.scale.xs: ${JSON.stringify(typographyScaleXs)}`
    ].join('\n')
  );
}

console.log('Core token contract check passed.');
