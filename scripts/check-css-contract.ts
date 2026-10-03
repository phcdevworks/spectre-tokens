import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import tokens, { generateCssVariables } from '../src/index';
import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();
const distCssPath = join(__dirname, '../dist/index.css');

const generatedCss = generateCssVariables(tokens);
const builtCss = readFileSync(distCssPath, 'utf8');

const ensureIncludes = (source: string, needle: string, label: string) => {
  if (!source.includes(needle)) {
    throw new Error(`${label} is missing required CSS variable: ${needle}`);
  }
};

const ensureExcludes = (source: string, needle: string, label: string) => {
  if (source.includes(needle)) {
    throw new Error(`${label} contains an unexpected CSS variable: ${needle}`);
  }
};

if (!generatedCss.includes(':root {') || !generatedCss.includes(':root[data-spectre-theme="dark"]')) {
  throw new Error('Generated CSS is missing the expected root or dark-mode block.');
}

if (!builtCss.includes(':root {') || !builtCss.includes(':root[data-spectre-theme="dark"]')) {
  throw new Error('Built CSS is missing the expected root or dark-mode block.');
}

manifest.requiredOutputs.css.requiredVariables.forEach((variableName) => {
  ensureIncludes(generatedCss, `${variableName}:`, 'Generated CSS');
  ensureIncludes(builtCss, `${variableName}:`, 'Built CSS');
});

['--sp-color-white', '--sp-color-black', '--sp-text-on-page-brand', '--sp-text-on-surface-brand']
  .forEach((variableName) => {
    ensureIncludes(generatedCss, `${variableName}:`, 'Generated CSS');
    ensureIncludes(builtCss, `${variableName}:`, 'Built CSS');
  });

['--sp-color-white-0', '--sp-color-black-0']
  .forEach((variableName) => {
    ensureExcludes(generatedCss, `${variableName}:`, 'Generated CSS');
    ensureExcludes(builtCss, `${variableName}:`, 'Built CSS');
  });

const builtDarkBlock = (builtCss.split(':root[data-spectre-theme="dark"]')[1] ?? '').split('\n}')[0] ?? '';
manifest.requiredOutputs.css.requiredDarkModeVariables.forEach((variableName) => {
  ensureIncludes(builtDarkBlock, `${variableName}:`, 'Built dark-mode CSS');
});

['--sp-text-on-page-brand', '--sp-text-on-surface-brand']
  .forEach((variableName) => {
    ensureIncludes(builtDarkBlock, `${variableName}:`, 'Built dark-mode CSS');
  });

// buttons.* and link.* are not mode-aware in :root or dark; high-contrast mode
// alone overrides them, so every override must reach its own block
const blockOf = (css: string, marker: string): string => (css.split(marker)[1] ?? '').split('\n}')[0] ?? '';
const builtRootBlock = builtCss.split(':root[data-spectre-theme="dark"]')[0] ?? '';
const builtHighContrastBlock = blockOf(builtCss, ':root[data-spectre-theme="high-contrast"]');
const highContrast = (tokens.modes as unknown as Record<string, Record<string, unknown>>).highContrast ?? {};
const declared = (block: string, name: string): string | undefined =>
  block.match(new RegExp(`\\s${name}:\\s*([^;]+);`))?.[1];

const overrides: Array<[string, string]> = [];
Object.entries((highContrast.buttons ?? {}) as Record<string, Record<string, unknown>>).forEach(([variant, states]) => {
  Object.keys(states).forEach((state) => overrides.push([`--sp-button-${variant}-${state}`.toLowerCase(), `buttons.${variant}.${state}`]));
});
Object.keys((highContrast.link ?? {}) as Record<string, unknown>).forEach((key) => {
  overrides.push([`--sp-link-${key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`, `link.${key}`]);
});

overrides.forEach(([name, path]) => {
  if (declared(builtHighContrastBlock, name) === undefined) {
    throw new Error(`Built high-contrast CSS is missing the modes.highContrast.${path} override: ${name}`);
  }
  if (declared(builtRootBlock, name) === undefined) {
    throw new Error(`Built CSS :root is missing ${name}, which modes.highContrast.${path} overrides`);
  }
});

// Element-scoped and system modes: each mode block also matches any element
// carrying the attribute, declares the same variable set (so a nested section
// fully resets), and `system` follows prefers-color-scheme.
const ruleBody = (css: string, header: string): string | undefined => {
  const start = css.indexOf(header);
  if (start === -1) return undefined;
  const open = start + header.length;
  return css.slice(open, css.indexOf('\n}', open));
};
const declarations = (block: string): Map<string, string> =>
  new Map(Array.from(block.matchAll(/(--sp-[a-z0-9-]+):\s*([^;]+);/g), (match) => [match[1]!, match[2]!.trim()]));
const scopedHeader = (themes: string[], indent = ''): string =>
  themes
    .flatMap((theme) => [`:root[data-spectre-theme="${theme}"]`, `:root [data-spectre-theme="${theme}"]`])
    .map((selector) => `${indent}${selector}`)
    .join(',\n') + ' {';

const modeBlocks: Array<[string, string]> = [
  ['dark', scopedHeader(['dark'])],
  ['high-contrast', scopedHeader(['high-contrast'])],
  ['light/system', scopedHeader(['light', 'system'])],
  ['system (prefers-color-scheme: dark)', `@media (prefers-color-scheme: dark) {\n${scopedHeader(['system'], '  ')}`]
];
const modeDeclarations = modeBlocks.map(([label, header]) => {
  const body = ruleBody(builtCss, header);
  if (body === undefined) {
    throw new Error(`Built CSS is missing the element-scoped ${label} block:\n${header}`);
  }
  return [label, declarations(body)] as const;
});

const rootDeclarations = declarations(builtRootBlock);
const modeVariableNames = new Set(modeDeclarations.flatMap(([, entries]) => [...entries.keys()]));
modeDeclarations.forEach(([label, entries]) => {
  modeVariableNames.forEach((name) => {
    if (!entries.has(name)) {
      throw new Error(`Built ${label} block does not declare ${name}, so a nested ${label} section would inherit it from its ancestor`);
    }
  });
});

const [, darkDeclarations] = modeDeclarations[0]!;
const [, lightDeclarations] = modeDeclarations[2]!;
const [, systemDarkDeclarations] = modeDeclarations[3]!;
modeVariableNames.forEach((name) => {
  if (lightDeclarations.get(name) !== rootDeclarations.get(name)) {
    throw new Error(`Built light block value for ${name} differs from :root (light="${lightDeclarations.get(name)}", root="${rootDeclarations.get(name)}")`);
  }
  if (systemDarkDeclarations.get(name) !== darkDeclarations.get(name)) {
    throw new Error(`Built system dark value for ${name} differs from the dark block`);
  }
});

console.log('CSS contract check passed.');
