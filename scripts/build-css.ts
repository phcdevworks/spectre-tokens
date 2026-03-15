import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateCssVariables, tokens } from '../dist/index.js';

const here = dirname(fileURLToPath(import.meta.url));
const cssOutput = resolve(here, '../dist/index.css');

const css = generateCssVariables(tokens);
await writeFile(cssOutput, css, 'utf8');
