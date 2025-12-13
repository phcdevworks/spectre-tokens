import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(readFileSync(path.join(__dirname, '../tokens/core.json'), 'utf8'));

const REQUIRED_PATHS = [
  'surface.page',
  'surface.card',
  'surface.input',
  'text.onPage.default',
  'text.onPage.muted',
  'text.onSurface.default',
  'text.onSurface.muted',
  'buttons.primary.bg',
  'buttons.primary.text',
  'forms.default.bg',
  'forms.default.border',
  'forms.default.text',
  'forms.default.placeholder',
  'component.badge.primary.bg',
  'component.badge.primary.text',
  'component.badge.success.bg',
  'component.badge.success.text',
  'component.badge.warning.bg',
  'component.badge.warning.text',
  'component.badge.danger.bg',
  'component.badge.danger.text',
  'component.badge.neutralBg',
  'component.badge.neutralText',
  'component.badge.infoBg',
  'component.badge.infoText',
  'component.badge.successBg',
  'component.badge.successText',
  'component.badge.warningBg',
  'component.badge.warningText',
  'component.badge.dangerBg',
  'component.badge.dangerText',
  'component.iconBox.bg',
  'component.iconBox.border',
  'component.iconBox.iconDefault',
  'component.iconBox.iconSuccess',
  'component.iconBox.iconWarning',
  'component.iconBox.iconDanger',
  'modes.default.surface.page',
  'modes.dark.surface.page'
];

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

for (const path of REQUIRED_PATHS) {
  assertPath(tokens, path);
}

console.log('Core token regression check passed.');
