import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const fixtureDir = join(repoRoot, 'example/smoke-consumer');

const packageName = '@phcdevworks/spectre-tokens';
const tsFixturePath = join(fixtureDir, 'consumer.ts');
const jsFixturePath = join(fixtureDir, 'consumer.mjs');
const cssFixturePath = join(fixtureDir, 'app.css');

const packageEsm = await import(packageName);
const require = createRequire(import.meta.url);
const packageCjs = require(packageName);

const tsFixture = await import(pathToFileURL(tsFixturePath).href);
const jsFixture = await import(pathToFileURL(jsFixturePath).href);
const cssFixture = readFileSync(cssFixturePath, 'utf8');

const fail = (message: string): never => {
  throw new Error(`Consumer smoke fixture failed: ${message}`);
};

if (packageEsm.default !== packageEsm.tokens) {
  fail('ESM default export does not match named tokens export.');
}

if (packageCjs.default !== packageCjs.tokens) {
  fail('CJS default export does not match named tokens export.');
}

if (tsFixture.semanticCard.background !== packageEsm.tokens.surface.card) {
  fail('TS fixture semantic token usage drifted from runtime tokens.');
}

if (tsFixture.themedSurface('dark').page !== packageEsm.tokens.modes.dark.surface.page) {
  fail('TS fixture dark-mode token usage drifted from mode-aware runtime tokens.');
}

if (jsFixture.jsConsumerSample.darkModePage !== packageEsm.tokens.modes.dark.surface.page) {
  fail('JS fixture mode-aware token usage drifted from runtime tokens.');
}

if (!cssFixture.includes(`@import '${packageName}/index.css';`)) {
  fail('CSS fixture is missing the package CSS import path.');
}

if (!cssFixture.includes('var(--sp-surface-card)') || !cssFixture.includes('data-spectre-theme')) {
  fail('CSS fixture must demonstrate semantic and theme-aware variable usage.');
}

console.log('Consumer smoke fixture passed.');
