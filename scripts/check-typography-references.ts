import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateCssVariables, tokens } from '../src/index';

const __dirname = dirname(fileURLToPath(import.meta.url));
const typographyPath = join(__dirname, '../tokens/typography.json');
const typography = JSON.parse(readFileSync(typographyPath, 'utf8'));

const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

const REFERENCE_PATTERN = /^\{([^}]+)\}$/;

const REQUIRED_REFERENCE_FIELDS = ['fontFamily', 'fontSize', 'lineHeight', 'letterSpacing'] as const;

const resolvePath = (root: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, root);

const errors: string[] = [];

const checkRole = (role: Record<string, unknown>, path: string) => {
  REQUIRED_REFERENCE_FIELDS.forEach((field) => {
    const value = role[field];
    if (typeof value !== 'string') {
      errors.push(`${path}.${field} must be a "{typography...}" reference string, got: ${JSON.stringify(value)}`);
      return;
    }
    const match = value.match(REFERENCE_PATTERN);
    if (!match) {
      errors.push(`${path}.${field} is a bare string "${value}", not a "{typography...}" reference. Roles must never hold a bare scale/family key.`);
      return;
    }
    const target = resolvePath(typography, match[1]);
    if (typeof target !== 'string' && typeof target !== 'number') {
      errors.push(`${path}.${field} references "${value}" which does not resolve to a value in typography.json`);
    }
  });

  if (typeof role.fontWeight !== 'number') {
    errors.push(`${path}.fontWeight must be a number, got: ${JSON.stringify(role.fontWeight)}`);
  }
};

const heading = typography.typography?.heading ?? {};
Object.entries(heading).forEach(([level, role]) => {
  checkRole(role as Record<string, unknown>, `typography.heading.${level}`);
});

const body = typography.typography?.body;
if (body) {
  checkRole(body as Record<string, unknown>, 'typography.body');
}

const resolveReference = (value: string): string => {
  const match = value.match(REFERENCE_PATTERN);
  if (!match) return value;
  const resolved = resolvePath(typography, match[1]);
  return String(resolved);
};

const assertResolvedCss = (css: string, prefixParts: string[], entry: Record<string, unknown>) => {
  const varBase = `--sp-${prefixParts.join('-')}`;
  const expectations: Array<[string, string]> = [
    [`${varBase}-family`, resolveReference(entry.fontFamily as string)],
    [`${varBase}-size`, resolveReference(entry.fontSize as string)],
    [`${varBase}-line-height`, resolveReference(entry.lineHeight as string)],
    [`${varBase}-weight`, String(entry.fontWeight)],
    [`${varBase}-letter-spacing`, resolveReference(entry.letterSpacing as string)]
  ];

  expectations.forEach(([varName, expectedValue]) => {
    const declarationPattern = new RegExp(`${varName}:\\s*${expectedValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')};`);
    if (!declarationPattern.test(css)) {
      errors.push(`Generated CSS is missing expected resolved declaration: ${varName}: ${expectedValue};`);
    }
  });
};

const css = generateCssVariables(tokens);
const roleLines = css.split('\n').filter((line) => /--sp-(heading|body)-/.test(line));

roleLines.forEach((line) => {
  if (line.includes('{') || line.includes('}')) {
    errors.push(`Generated CSS leaks an unresolved token reference: ${line.trim()}`);
  }
  if (line.includes('var(--sp-font-')) {
    errors.push(`Generated CSS derives a heading/body variable via var() indirection instead of a resolved literal: ${line.trim()}`);
  }
});

HEADING_LEVELS.forEach((level) => {
  assertResolvedCss(css, ['heading', level], tokens.typography.heading[level] as unknown as Record<string, unknown>);
});
assertResolvedCss(css, ['body'], tokens.typography.body as unknown as Record<string, unknown>);

if (errors.length > 0) {
  console.error('Typography reference check failed:');
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log('Typography reference check passed (heading, body roles validated; CSS output fully resolved).');
