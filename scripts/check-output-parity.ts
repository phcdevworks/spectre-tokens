import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as ts from 'typescript';

import { coreTokens } from '../src/generated/tokens';
import { generateCssVariables, tokens } from '../src/index';
import { getPathValue, loadContractManifest } from './contract-utils';
import { collectRuntimeLeafPaths } from './token-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = loadContractManifest();
const parity = manifest.outputParity;

const fail = (message: string): never => {
  throw new Error(`Output parity check failed: ${message}`);
};

// ─── JS: runtime tokens vs generated tokens ──────────────────────────────────

parity.js.namespaces.forEach((namespace) => {
  const runtimeNode = (tokens as unknown as Record<string, unknown>)[namespace];
  const generatedNode = (coreTokens as unknown as Record<string, unknown>)[namespace];

  if (runtimeNode === undefined) fail(`Runtime tokens are missing declared JS parity namespace: ${namespace}`);
  if (generatedNode === undefined) fail(`Generated tokens are missing declared JS parity namespace: ${namespace}`);

  const paths = new Set([
    ...collectRuntimeLeafPaths(runtimeNode).map((path) => `${namespace}.${path}`),
    ...collectRuntimeLeafPaths(generatedNode).map((path) => `${namespace}.${path}`)
  ]);

  paths.forEach((path) => {
    const runtimeValue = getPathValue(tokens, path);
    const generatedValue = getPathValue(coreTokens, path);

    if (runtimeValue === undefined) fail(`Runtime tokens are missing leaf reachable via generated tokens: ${path}`);
    if (generatedValue === undefined) fail(`Generated tokens are missing leaf reachable via runtime tokens: ${path}`);
    if (JSON.stringify(runtimeValue) !== JSON.stringify(generatedValue)) {
      fail(`Runtime and generated tokens disagree at: ${path}`);
    }
  });
});

// ─── Generated TypeScript: every leaf has a concrete field in the shipped .d.ts ──

// `SpectreTokens` (the type consumers import) is a direct alias of
// `SpectreGeneratedTokens`, and both `SpectreGeneratedTokens` and `coreTokens`
// are generated from the same object literal in generate-types.ts, so they
// cannot structurally drift from each other at generation time — and any
// mismatch between `coreTokens`'s shape and its own declared type would
// already fail `tsc` during `build:ts`, before this script ever runs. What
// this section actually verifies is the thing `tsc` does NOT check: that the
// interface bundled into the *shipped* `dist/index.d.ts` — the real contract
// surface downstream packages type-check against — still has a concrete
// (non-`unknown`, non-`any`, non-index-signature) field for every leaf
// reachable on the runtime `tokens` export, so a hand-edit to src/types.ts or
// a tsup bundling change can't silently widen the public type.

const dtsPath = resolve(__dirname, '..', 'dist/index.d.ts');
let dtsSource: string;
try {
  dtsSource = readFileSync(dtsPath, 'utf8');
} catch {
  fail('dist/index.d.ts is missing. Run `npm run build`.');
}

const dtsSourceFile = ts.createSourceFile('index.d.ts', dtsSource, ts.ScriptTarget.Latest, true);

let generatedTokensInterface: ts.InterfaceDeclaration | undefined;
const visit = (node: ts.Node): void => {
  if (ts.isInterfaceDeclaration(node) && node.name.text === 'SpectreGeneratedTokens') {
    generatedTokensInterface = node;
  }
  ts.forEachChild(node, visit);
};
visit(dtsSourceFile);

if (!generatedTokensInterface) {
  fail('dist/index.d.ts does not declare the SpectreGeneratedTokens interface.');
}

const memberName = (member: ts.TypeElement): string | undefined => {
  if (!ts.isPropertySignature(member) || !member.name) return undefined;
  if (ts.isIdentifier(member.name) || ts.isStringLiteral(member.name)) return member.name.text;
  return undefined;
};

// Walks the declared type for a dotted path; returns the leaf TypeNode if the
// full path resolves through nested type literals, or undefined if any
// segment is missing.
const resolveDeclaredType = (members: ts.NodeArray<ts.TypeElement>, path: string[]): ts.TypeNode | undefined => {
  let currentMembers = members;
  let currentType: ts.TypeNode | undefined;

  for (const key of path) {
    const member = currentMembers.find((candidate) => memberName(candidate) === key);
    if (!member || !ts.isPropertySignature(member) || !member.type) return undefined;
    currentType = member.type;
    currentMembers = ts.isTypeLiteralNode(currentType) ? currentType.members : ts.factory.createNodeArray([]);
  }

  return currentType;
};

const isConcreteLeafType = (type: ts.TypeNode): boolean =>
  type.kind === ts.SyntaxKind.StringKeyword ||
  type.kind === ts.SyntaxKind.NumberKeyword ||
  type.kind === ts.SyntaxKind.BooleanKeyword ||
  ts.isLiteralTypeNode(type) ||
  ts.isArrayTypeNode(type);

parity.js.namespaces.forEach((namespace) => {
  if (namespace === 'modes') return; // modes is JS/DTCG-only; not part of SpectreGeneratedTokens's public leaf shape.

  const runtimeNode = (tokens as unknown as Record<string, unknown>)[namespace];
  if (runtimeNode === undefined) return; // already asserted above

  collectRuntimeLeafPaths(runtimeNode).forEach((leafPath) => {
    const path = [namespace, ...(leafPath ? leafPath.split('.') : [])];
    const declaredType = resolveDeclaredType(generatedTokensInterface!.members, path);

    if (!declaredType) {
      fail(`dist/index.d.ts's SpectreGeneratedTokens is missing a declared field for: ${path.join('.')}`);
    }
    if (!isConcreteLeafType(declaredType)) {
      fail(
        `dist/index.d.ts's SpectreGeneratedTokens declares ${path.join('.')} as a non-concrete type (kind ${ts.SyntaxKind[declaredType.kind]}); expected string/number/boolean/literal/array.`
      );
    }
  });
});

// ─── DTCG: every leaf has a $value ────────────────────────────────────────────

const dtcgPath = resolve(__dirname, '..', manifest.requiredOutputs.design.requiredFile);
let dtcg: Record<string, unknown>;
try {
  dtcg = JSON.parse(readFileSync(dtcgPath, 'utf8')) as Record<string, unknown>;
} catch {
  fail(`Design output file is missing or invalid: ${manifest.requiredOutputs.design.requiredFile}. Run \`npm run build\`.`);
}

const isDtcgLeaf = (node: unknown): boolean =>
  !!node && typeof node === 'object' && !Array.isArray(node) && '$value' in (node as Record<string, unknown>);

parity.dtcg.namespaces.forEach((namespace) => {
  const runtimeNode = (tokens as unknown as Record<string, unknown>)[namespace];
  if (runtimeNode === undefined) fail(`Runtime tokens are missing declared DTCG parity namespace: ${namespace}`);

  collectRuntimeLeafPaths(runtimeNode).forEach((leafPath) => {
    const path = `${namespace}.${leafPath}`;
    const dtcgNode = getPathValue(dtcg, path);
    if (!isDtcgLeaf(dtcgNode)) {
      fail(`DTCG output is missing a $value leaf reachable from runtime tokens: ${path}`);
    }
  });
});

// ─── CSS: declarative per-group prefix coverage ──────────────────────────────

const css = generateCssVariables(tokens);
const darkBlockMarker = ':root[data-spectre-theme="dark"] {';
const darkBlockIndex = css.indexOf(darkBlockMarker);
if (darkBlockIndex === -1) fail('Generated CSS is missing the dark-mode block.');
const rootBlock = css.slice(0, darkBlockIndex);
const darkBlock = css.slice(darkBlockIndex + darkBlockMarker.length);

// Matches `formatKey` in src/css.ts, which createCssVariableMap uses for the
// flat cascade-only namespaces below: lowercased, non-alphanumeric runs
// collapsed to a hyphen, no camelCase splitting.
const formatKeyLikeCss = (segment: string): string =>
  segment
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

// Matches `kebabPathSegment` in src/css.ts, used by the mode-scoped
// surface/text/component semantic walker and by the `link` group's loop:
// same as above but splits camelCase boundaries first (`onPage` -> `on-page`,
// `onInverse` -> `on-inverse`).
const kebabPathSegmentLikeCss = (segment: string): string =>
  formatKeyLikeCss(segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2'));

const extractDeclaredValue = (block: string, varName: string): string | undefined => {
  const match = block.match(new RegExp(`${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*([^;]+);`));
  return match?.[1];
};

// Every leaf is checked against the default (:root) block unconditionally.
// What's checked in the dark block depends on blockStrategy:
//   - 'cascade-only': declared once, in :root only. MUST be absent from the
//     dark block — reaches dark mode purely via CSS cascade inheritance.
//     Presence there would mean generateCssVariables started redeclaring a
//     namespace that's supposed to inherit.
//   - 'mode-scoped': explicitly redeclared in both blocks, values
//     independently sourced from modes.default.*/modes.dark.*. Checked for
//     presence in both blocks. Values are legitimately allowed to be equal
//     (some tokens, e.g. surface.overlay, use the same value in both modes by
//     design) so presence — not inequality — is the correctness signal here;
//     value tracing back through token-reference resolution would require
//     duplicating css.ts's private resolver, which is exactly the
//     drift-prone duplication Phase 9 P0 removed.
//   - 'duplicated': explicitly redeclared in both blocks with the same value
//     in each, no modes.* backing (e.g. link). Checked for presence and
//     value equality in both blocks.
parity.css.groups.forEach(({ sourcePath, prefixParts, blockStrategy }) => {
  const node = getPathValue(tokens, sourcePath);
  if (node === undefined) fail(`Runtime tokens are missing declared CSS parity source path: ${sourcePath}`);

  // 'duplicated' currently has one member (`link`), whose generator
  // (src/css.ts's `linkTokens` loop) kebab-splits camelCase keys the same way
  // the mode-scoped semantic walker does (`onInverse` -> `on-inverse`).
  const usesKebabSplitting = blockStrategy === 'mode-scoped' || blockStrategy === 'duplicated';
  const segmentFormatter = usesKebabSplitting ? kebabPathSegmentLikeCss : formatKeyLikeCss;

  collectRuntimeLeafPaths(node).forEach((leafPath) => {
    const leafParts = leafPath.length > 0 ? leafPath.split('.').map(segmentFormatter) : [];
    const varName = `--sp-${[...prefixParts, ...leafParts].join('-')}`;
    const describedPath = `${sourcePath}${leafPath ? `.${leafPath}` : ''}`;

    const rootValue = extractDeclaredValue(rootBlock, varName);
    if (rootValue === undefined) {
      fail(`Generated CSS is missing variable in the default block for ${describedPath}: ${varName}`);
    }

    const darkValue = extractDeclaredValue(darkBlock, varName);

    if (blockStrategy === 'cascade-only') {
      if (darkValue !== undefined) {
        fail(
          `${describedPath} is declared 'cascade-only' (reaches dark mode via CSS inheritance) but ${varName} is explicitly redeclared in the dark-mode block (default="${rootValue}", dark="${darkValue}"). Either the token has legitimately gone mode-aware (move it to a mode-scoped or duplicated group) or generateCssVariables regressed.`
        );
      }
      return;
    }

    if (darkValue === undefined) {
      fail(`Generated CSS is missing variable in the dark-mode block for ${describedPath}: ${varName}`);
    }

    if (blockStrategy === 'duplicated' && darkValue !== rootValue) {
      fail(
        `${describedPath} is declared 'duplicated' (same value expected in both blocks) but ${varName} differs: default="${rootValue}", dark="${darkValue}".`
      );
    }
  });
});

console.log('Output parity check passed.');
