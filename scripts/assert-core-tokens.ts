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
  'text.onSurface.default',
  'buttons.primary.bg',
  'buttons.primary.text',
  'forms.default.bg',
  'forms.default.border',
  'forms.default.text',
  'forms.default.placeholder',
  'modes.default.surface.page',
  'modes.dark.surface.page'
];

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
