import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { collectLeafDetails, loadMergedTokens } from './token-utils.js'
import type { TokenLeafDetail } from './token-utils.js'

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, '../TOKEN_REFERENCE.md')

const NAMESPACES = [
  'colors', 'space', 'layout', 'radii', 'typography', 'font', 'shadows',
  'breakpoints', 'zIndex', 'transitions', 'animations', 'opacity',
  'aspectRatios', 'icons', 'border', 'accessibility', 'buttons', 'forms',
  'link', 'surface', 'text', 'component', 'modes'
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
  sections
].join('\n')

writeFileSync(outPath, content.trimEnd() + '\n', 'utf8')
console.log('TOKEN_REFERENCE.md written')
