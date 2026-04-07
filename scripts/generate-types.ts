import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { flattenTokenTree, loadMergedTokens } from './token-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));

const outputDir = join(__dirname, '../src/generated');
const outputPath = join(outputDir, 'tokens.ts');

const sourceJson = loadMergedTokens();
const publicJson = flattenTokenTree(sourceJson);

function generateType(obj: unknown, indent = ''): string {
  if (typeof obj === 'string') return 'string';
  if (typeof obj === 'number') return 'number';
  if (typeof obj === 'boolean') return 'boolean';
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'unknown[]';
    return generateType(obj[0], indent) + '[]';
  }
  if (typeof obj === 'object' && obj !== null) {
    let out = '{\n';
    const nextIndent = indent + '  ';
    for (const [key, value] of Object.entries(obj)) {
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
      out += `${nextIndent}${safeKey}: ${generateType(value, nextIndent)};\n`;
    }
    out += `${indent}}`;
    return out;
  }
  return 'unknown';
}

const sourceTypeString = generateType(sourceJson);
const publicTypeString = generateType(publicJson);

const fileContent = `// This file is auto-generated. Do not edit directly.
// Source: tokens/*.json

export interface SpectreSourceTokens ${sourceTypeString}

export interface SpectreGeneratedTokens ${publicTypeString}

export const coreTokens: SpectreGeneratedTokens = ${JSON.stringify(publicJson, null, 2)} as const;
`;

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, fileContent, 'utf8');
console.log('Types generated successfully at src/generated/tokens.ts');
