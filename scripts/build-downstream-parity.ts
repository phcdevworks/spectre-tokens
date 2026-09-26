import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { collectCssFamilies, SECTION_ORDER } from './css-families'
import type { CssFamily } from './css-families'

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, '../DOWNSTREAM_PARITY.md')

const families = collectCssFamilies()
const totalVariables = families.reduce((sum, family) => sum + family.variables.length, 0)

const code = (value: string): string => `\`${value}\``

const darkModeCell = (family: CssFamily): string => {
  if (family.modeAware.size === 0) return 'no'
  if (family.modeAware.size === family.variables.length) return 'yes'
  return `${family.modeAware.size} of ${family.variables.length}`
}

const renderSection = (section: string): string => {
  const members = families.filter((family) => family.section === section)
  const rows = members.map((family) =>
    [
      `| ${code(family.id)}`,
      family.prefixes
        .map((prefix) => code(family.variables.includes(`--sp-${prefix}`) ? `--sp-${prefix}` : `--sp-${prefix}-*`))
        .join(', '),
      String(family.variables.length),
      darkModeCell(family),
      `${family.sources.map(code).join(', ')}${family.note ? ` — ${family.note}` : ''} |`
    ].join(' | ')
  )
  const details = members.map((family) =>
    [
      `<details>`,
      `<summary><code>${family.id}</code> (${family.variables.length})</summary>`,
      '',
      ...family.variables.map((name) => `- ${code(name)}${family.modeAware.has(name) ? ' (dark mode)' : ''}`),
      '',
      `</details>`
    ].join('\n')
  )

  return [
    `## ${section}`,
    '',
    '| Family | Variables | Count | Dark mode | Source |',
    '| ------ | --------- | ----- | --------- | ------ |',
    ...rows,
    '',
    ...details,
    ''
  ].join('\n')
}

const content = [
  '# Downstream Parity Checklist',
  '',
  'Generated from the published CSS output by `npm run build`',
  '(`scripts/build-downstream-parity.ts`). Do not hand-edit — regenerate instead.',
  'This file is a derived artifact, not contract authority; `tokens/` and',
  '`contract.manifest.json` remain the source of truth.',
  '',
  `Every CSS custom property in \`dist/index.css\` (${totalVariables} total) belongs`,
  `to exactly one of ${families.length} families. A family is the unit a downstream`,
  'recipe or stylesheet consumes: each one needs a consumer in `spectre-ui`',
  'before its `tests/token-parity.test.ts` passes. The build fails if a new',
  'variable does not fit an existing family, so a token group cannot ship',
  'without appearing here.',
  '',
  'Which recipe consumes a family, and how, is decided downstream. This package',
  'defines what each token means, not how a component is built from it.',
  '',
  '"Dark mode" means the variable is redeclared in the',
  '`[data-spectre-theme="dark"]` block. The others are declared once in `:root`.',
  '',
  '## Checklist with live status',
  '',
  'This file lists what exists. To see what a downstream repo checked out',
  'beside this one still has to build, run from `spectre-tokens`:',
  '',
  '```bash',
  'npm run audit:parity                      # spectre-ui (default)',
  'npm run audit:parity -- spectre-components',
  '```',
  '',
  'It prints these families as a Markdown checklist: `[x]` when every variable',
  'is referenced, `[ ]` with each missing variable listed otherwise, and the',
  'files that already consume each family. A family marked "no consumer" is a',
  'recipe or stylesheet that has not been built yet. The script reads the',
  'sibling repo and never modifies it; redirect its output to a file to keep a',
  'copy.',
  '',
  ...SECTION_ORDER.map(renderSection)
].join('\n')

writeFileSync(outPath, content)
console.log('DOWNSTREAM_PARITY.md written')
