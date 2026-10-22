import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { collectLeafDetails, loadMergedTokens } from './token-utils.js'
import type { TokenLeafDetail } from './token-utils.js'
import type { CoverageEntry, ElementCoverage } from './element-coverage.js'

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, '../TOKEN_REFERENCE.md')

const NAMESPACES = [
  'colors', 'space', 'layout', 'radii', 'typography', 'font', 'shadows',
  'breakpoints', 'zIndex', 'transitions', 'animations', 'opacity',
  'aspectRatios', 'icons', 'border', 'accessibility', 'buttons', 'forms',
  'link', 'surface', 'text', 'action', 'component', 'modes', 'control', 'elevation',
  'tracking', 'leading', 'textDecoration', 'fontWeight', 'fontSize'
]

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return `\`${JSON.stringify(value)}\``
  return `\`${String(value)}\``
}

function usageNote(detail: TokenLeafDetail, namespace: string): string {
  if (detail.description) return detail.description
  if (detail.pair) return `Pairs with \`${detail.pair}\` for contrast.`

  const segments = detail.path.split('.')
  if (namespace === 'colors' && segments[0] === 'palette' && segments.length === 3) {
    return `Raw palette color — hue \`${segments[1]}\`, step \`${segments[2]}\`.`
  }

  return `${namespace} token.`
}

function renderSection(namespace: string, details: TokenLeafDetail[]): string {
  const rows = details
    .map((detail) => {
      const fullPath = detail.path ? `${namespace}.${detail.path}` : namespace
      return `| \`${fullPath}\` | ${formatValue(detail.value)} | ${usageNote(detail, namespace)} |`
    })
    .join('\n')

  return [
    `## ${namespace}`,
    '',
    '| Path | Value | Usage |',
    '| ---- | ----- | ----- |',
    rows,
    ''
  ].join('\n')
}

const merged = loadMergedTokens()

const sections = NAMESPACES.map((namespace) => {
  const details = collectLeafDetails(merged[namespace])
  return renderSection(namespace, details)
}).join('\n')

const totalLeaves = NAMESPACES.reduce(
  (sum, namespace) => sum + collectLeafDetails(merged[namespace]).length,
  0
)

const coverage = JSON.parse(
  readFileSync(resolve(here, '../element-coverage.json'), 'utf8')
) as ElementCoverage

const coverageRows = (entries: Record<string, CoverageEntry>, wrap: (name: string) => string): string =>
  Object.entries(entries)
    .map(([name, entry]) => {
      const roles = 'styling' in entry ? 'No visual styling' : entry.tokens.map((path) => `\`${path}\``).join(', ')
      return `| ${wrap(name)} | ${roles} | ${entry.note ?? ''} |`
    })
    .join('\n')

const coverageSection = [
  '## HTML element coverage',
  '',
  'Generated from `element-coverage.json` and validated by `npm run check:elements`.',
  'Every standard HTML element and styleable pseudo-element maps to the token',
  'roles that style it, or is marked as having no visual styling of its own.',
  '',
  '| Element | Token roles | Note |',
  '| ------- | ----------- | ---- |',
  coverageRows(coverage.elements, (name) => `\`<${name}>\``),
  coverageRows(coverage.pseudoElements, (name) => `\`${name}\``),
  ''
].join('\n')

const content = [
  '# Token Reference',
  '',
  'Generated from `tokens/*.json` by `npm run build` (`scripts/build-token-reference.ts`).',
  'Do not hand-edit — regenerate instead. This file is a derived artifact, not',
  'contract authority; `tokens/` and `contract.manifest.json` remain the source',
  'of truth (see `TOKEN_CONTRACT.md`).',
  '',
  `Every leaf token path across all ${NAMESPACES.length} public namespaces`,
  `(${totalLeaves} total), with its resolved source value and a usage note.`,
  'Values shown here are pre-CSS-resolution source values — `{path.to.token}`',
  'references are shown as-written, not resolved (see `src/css.ts` for',
  'resolved CSS output).',
  '',
  sections,
  coverageSection
].join('\n')

writeFileSync(outPath, content.trimEnd() + '\n', 'utf8')
console.log('TOKEN_REFERENCE.md written')
