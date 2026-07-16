import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();

const dtcgPath = resolve(__dirname, '..', manifest.requiredOutputs.design.requiredFile);

let dtcg: unknown;
try {
  dtcg = JSON.parse(readFileSync(dtcgPath, 'utf8'));
} catch {
  throw new Error(`Design output file is missing or invalid: ${manifest.requiredOutputs.design.requiredFile}. Run \`npm run build\`.`);
}

const fail = (message: string): never => {
  throw new Error(`DTCG conformance check failed: ${message}`);
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

const isFiniteNumberArray = (value: unknown): value is number[] =>
  Array.isArray(value) && value.every((entry) => typeof entry === 'number' && Number.isFinite(entry));

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((entry) => typeof entry === 'string');

const isShadowObject = (value: unknown): boolean =>
  isObject(value) &&
  ['color', 'offsetX', 'offsetY', 'blur', 'spread'].every((key) => typeof value[key] === 'string');

// Per-$type structural conformance rules. Each validator receives the $value
// and returns true if its shape matches what that $type requires — this is
// the "validate inferred $type against actual source value shapes"
// requirement from Phase 9 P2, run against the real generated output rather
// than only the pure-function unit fixtures.
const TYPE_VALIDATORS: Record<string, (value: unknown) => boolean> = {
  color: (v) => typeof v === 'string',
  dimension: (v) => typeof v === 'string',
  fontWeight: (v) => typeof v === 'number' || (typeof v === 'string' && /^[a-z-]+$/.test(v)),
  duration: (v) => typeof v === 'string',
  number: (v) => typeof v === 'number',
  cubicBezier: (v) => isFiniteNumberArray(v) && (v as number[]).length === 4,
  fontFamily: (v) => isStringArray(v) && v.length > 0,
  shadow: (v) => isShadowObject(v) || (Array.isArray(v) && v.length > 0 && v.every(isShadowObject)),
  string: (v) => typeof v === 'string' || Array.isArray(v)
};

const WHOLE_ALIAS_PATTERN = /^\{[a-zA-Z0-9_.]+\}$/;

let checkedLeaves = 0;

const walk = (node: unknown, path: string): void => {
  if (!isObject(node)) return;

  if ('$value' in node) {
    checkedLeaves += 1;
    const type = node.$type;
    if (typeof type !== 'string') {
      fail(`${path} has a $value but no string $type.`);
    }

    // A whole-value alias reference (e.g. "{transitions.easing.out}") is
    // valid DTCG $value syntax for ANY $type — the referenced token carries
    // the real shape, not this leaf. inferTypeWithAliasResolution already
    // resolves $type to the alias TARGET's type at generation time; this
    // check only needs to skip shape validation for the reference itself.
    if (typeof node.$value === 'string' && WHOLE_ALIAS_PATTERN.test(node.$value)) {
      return;
    }

    const validator = TYPE_VALIDATORS[type];
    if (!validator) {
      fail(`${path} declares unrecognized $type "${type}". Add a validator to TYPE_VALIDATORS in check-dtcg-conformance.ts.`);
    }
    if (!validator(node.$value)) {
      fail(`${path} declares $type "${type}" but $value does not match that type's expected shape: ${JSON.stringify(node.$value)}`);
    }
    return;
  }

  Object.entries(node).forEach(([key, value]) => walk(value, path ? `${path}.${key}` : key));
};

walk(dtcg, '');

if (checkedLeaves === 0) {
  fail('No $value leaves were found in the DTCG output — the file may be empty or malformed.');
}

console.log(`DTCG conformance check passed (${checkedLeaves} leaves validated).`);
