import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import StyleDictionary from 'style-dictionary';

import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();
const dtcgPath = resolve(__dirname, '..', manifest.requiredOutputs.design.requiredFile);

const fail = (message: string): never => {
  throw new Error(`Style Dictionary round-trip check failed: ${message}`);
};

const buildDir = await mkdtemp(join(tmpdir(), 'spectre-tokens-sd-'));

try {
  const sd = new StyleDictionary({
    source: [dtcgPath],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${buildDir}/`,
        files: [{ destination: 'variables.css', format: 'css/variables' }]
      }
    }
  });

  await sd.buildAllPlatforms();

  const css = await readFile(join(buildDir, 'variables.css'), 'utf8');

  // Spot-checks this repo's DTCG structural transforms against a real DTCG
  // consumer's actual rendered output, not merely "the file parsed without
  // throwing." Most of these discriminate a correctly-typed value from a
  // mistyped one (e.g. Style Dictionary renders a shadow object whose $type
  // was wrongly "string" as the literal text "[object Object]" — verified by
  // deliberately breaking that field and re-running this fixture). The
  // zIndex/color/gradient checks are weaker in that specific sense — Style
  // Dictionary's built-in css/variables format has no gradient-to-CSS
  // transform yet (as of v5.5.0), so a $type: gradient stop array and a
  // $type: string array both stringify to the same "[object Object],
  // [object Object]" text; a $type: number JS number and a numeric-looking
  // string likewise render identical CSS text. Those checks still confirm
  // real ingestion (parsing, alias resolution) succeeds without erroring;
  // check-dtcg-conformance.ts is what rejects a gradient/zIndex value with
  // the wrong JS shape.
  const checks: Array<[RegExp, string]> = [
    [/--colors-brand-500:\s*#336df4;/, 'alias-resolved color value ($type: color)'],
    [/--z-index-modal:\s*1400;/, 'numeric $type: number value (zIndex, stored as a JS number, not a string)'],
    [/--transitions-easing-linear:\s*cubic-bezier\(0,\s*0,\s*1,\s*1\);/, 'the "linear" keyword re-serialized from its [0,0,1,1] $type: cubicBezier array'],
    [/--transitions-easing-out:\s*cubic-bezier\(0,\s*0,\s*0\.2,\s*1\);/, 'a $type: cubicBezier array re-serialized to CSS cubic-bezier() syntax'],
    [/--typography-families-sans:\s*system-ui,/, 'a $type: fontFamily array re-serialized to a CSS font stack'],
    [/--shadows-sm:\s*0 1px 2px 0 #000000 \/ 0\.06;/, 'a $type: shadow object re-serialized to CSS box-shadow syntax (a wrongly-string-typed shadow renders as the literal text "[object Object]")'],
    [/--animations-fade-in-easing:\s*cubic-bezier\(0,\s*0,\s*0\.2,\s*1\);/, 'a whole-value alias ({transitions.easing.out}) resolved through to its cubicBezier target'],
    [/--modes-default-surface-hero:/, 'a $type: gradient stop array (surface.hero) ingested and built without error by a real DTCG consumer']
  ];

  for (const [pattern, label] of checks) {
    if (!pattern.test(css)) {
      fail(`Built CSS is missing expected output for ${label}. Pattern: ${pattern}`);
    }
  }

  console.log('Style Dictionary round-trip check passed.');
} finally {
  await rm(buildDir, { recursive: true, force: true });
}
