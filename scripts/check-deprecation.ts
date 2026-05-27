import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadMergedTokens } from './token-utils'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8')) as { version: string }
const currentVersion = pkg.version

const tokens = loadMergedTokens()

interface DeprecatedMarker {
  since: string
  replacedBy?: string
  removeIn?: string
}

interface DeprecationEntry {
  path: string
  marker: DeprecatedMarker
}

const semverLte = (a: string, b: string): boolean => {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if ((pa[i] ?? 0) < (pb[i] ?? 0)) return true
    if ((pa[i] ?? 0) > (pb[i] ?? 0)) return false
  }
  return true
}

const deprecated: DeprecationEntry[] = []

function walk(obj: unknown, path: string): void {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return

  const record = obj as Record<string, unknown>

  if ('value' in record) {
    const meta = record.metadata as Record<string, unknown> | undefined
    if (meta && typeof meta.deprecated === 'object' && meta.deprecated !== null) {
      deprecated.push({ path, marker: meta.deprecated as DeprecatedMarker })
    }
    return
  }

  for (const [key, value] of Object.entries(record)) {
    walk(value, path ? `${path}.${key}` : key)
  }
}

walk(tokens, '')

if (deprecated.length > 0) {
  deprecated.forEach(({ path, marker }) => {
    const hint = marker.replacedBy ? ` Use ${marker.replacedBy} instead.` : ''
    const removal = marker.removeIn ? ` Planned removal in v${marker.removeIn}.` : ''
    console.warn(`[DEPRECATED] ${path} (since v${marker.since}).${hint}${removal}`)
  })
}

const overdue = deprecated.filter(
  ({ marker }) => marker.removeIn && semverLte(marker.removeIn, currentVersion)
)

if (overdue.length > 0) {
  console.error('Deprecated tokens past their removal version are still in the source:')
  overdue.forEach(({ path, marker }) => {
    console.error(`  ${path} (removeIn: v${marker.removeIn}, current: v${currentVersion})`)
  })
  process.exit(1)
}

const summary = deprecated.length > 0
  ? `${deprecated.length} deprecated token(s) in flight.`
  : 'No deprecated tokens.'
console.log(`Deprecation check passed. ${summary}`)
