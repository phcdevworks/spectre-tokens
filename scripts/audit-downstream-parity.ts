import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { collectCssFamilies, SECTION_ORDER } from './css-families'
import type { CssFamily } from './css-families'

// Read-only, like audit:downstream: reports which published CSS variable
// families a sibling repo consumes. Never writes to the sibling repo and is
// not part of `npm run check`.

const __dirname = dirname(fileURLToPath(import.meta.url))
const siblingsRoot = resolve(__dirname, '..', '..')

const repo = process.argv[2] ?? 'spectre-ui'
const srcPath = join(siblingsRoot, repo, 'src')

const SCAN_EXTENSIONS = new Set(['.css', '.scss', '.ts', '.tsx', '.astro', '.php'])
const SKIP_DIR_NAMES = new Set(['node_modules', 'dist', 'build', '.astro', '.git'])

const walk = (dir: string, out: string[]): void => {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIR_NAMES.has(entry)) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full, out)
    } else if (SCAN_EXTENSIONS.has(entry.slice(entry.lastIndexOf('.')))) {
      out.push(full)
    }
  }
}

if (!existsSync(srcPath)) {
  console.error(`${repo}/src not found beside spectre-tokens (looked in ${srcPath}).`)
  process.exit(1)
}

const files: string[] = []
walk(srcPath, files)

const consumers = new Map<string, Set<string>>()
const sources = files.map((file) => ({ file: relative(join(siblingsRoot, repo), file), text: readFileSync(file, 'utf8') }))
sources.forEach(({ file, text }) => {
  for (const match of text.matchAll(/--sp-[a-z0-9-]+/g)) {
    const users = consumers.get(match[0]) ?? new Set<string>()
    users.add(file)
    consumers.set(match[0], users)
  }
})

const consumedByValue = (family: CssFamily, name: string): boolean => {
  if (family.id !== 'breakpoint') return false
  const value = family.values.get(name)
  return value !== undefined && sources.some(({ text }) => text.includes(`@media (min-width: ${value})`))
}

const families = collectCssFamilies()
let complete = 0
let untouched = 0
const lines: string[] = [`# Downstream parity: ${repo}`, '']

SECTION_ORDER.forEach((section) => {
  lines.push(`## ${section}`, '')
  families
    .filter((family) => family.section === section)
    .forEach((family) => {
      const missing = family.variables.filter((name) => !consumers.has(name) && !consumedByValue(family, name))
      const used = family.variables.length - missing.length
      const files = new Set(family.variables.flatMap((name) => [...(consumers.get(name) ?? [])]))

      if (missing.length === 0) complete += 1
      if (used === 0) untouched += 1

      const status = missing.length === 0 ? 'x' : ' '
      const counts = missing.length === 0 ? `${used}` : `${used}/${family.variables.length}`
      const where = files.size > 0 ? ` — ${[...files].sort().join(', ')}` : ' — no consumer'
      lines.push(`- [${status}] \`${family.id}\` (${counts})${where}`)
      missing.forEach((name) => lines.push(`  - missing \`${name}\``))
    })
  lines.push('')
})

lines.push(
  `${complete} of ${families.length} families fully consumed; ${untouched} with no consumer at all.`,
  'A variable consumed intentionally by some other route (and listed as an',
  `exception in ${repo}'s own parity test) still shows as missing here.`
)

console.log(lines.join('\n'))
