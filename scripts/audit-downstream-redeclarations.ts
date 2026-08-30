import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siblingsRoot = resolve(__dirname, '..', '..')

// The four downstream design-layer repos audited by ROADMAP.md Phase 12 P1.
// Read-only: this script never writes to, installs into, or otherwise
// mutates a sibling repo. It is not part of `npm run check` and does not
// make any consumer-specific file part of this package's public contract —
// it is a reporting tool for finding new evidence of token-vocabulary gaps,
// per TOKEN_CONTRACT.md "Contract Expansion Policy".
const DOWNSTREAM_REPOS = ['spectre-ui', 'spectre-ui-astro', 'spectre-components', 'spectre-base']

const SCAN_EXTENSIONS = new Set(['.css', '.scss', '.ts', '.tsx', '.astro', '.php'])
const SKIP_DIR_NAMES = new Set(['node_modules', 'dist', 'build', '.astro', '.git'])

type Finding = {
  repo: string
  file: string
  line: number
  kind: 'raw-redeclaration' | 'hardcoded-hex' | 'hardcoded-length' | 'workaround-comment'
  text: string
}

const RAW_REDECLARATION = /^\s*--sp-[a-z0-9-]+\s*:\s*(?!var\()\S/i
const HARDCODED_HEX = /(?<!&)#[0-9a-fA-F]{3,8}\b(?!;)/
const HARDCODED_LENGTH = /\b[0-9]+(\.[0-9]+)?(px|rem|em)\b/
const WORKAROUND_COMMENT =
  /workaround|temporary|temp fix|hand-?roll|hand-?paint|hand-?compos|until (spectre|tokens|upstream)|upstream (gap|limitation)|hardcod|!important/i

function walk(dir: string, out: string[]): void {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIR_NAMES.has(entry)) continue
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      walk(full, out)
    } else if (SCAN_EXTENSIONS.has(entry.slice(entry.lastIndexOf('.')))) {
      out.push(full)
    }
  }
}

function scanFile(repo: string, file: string, findings: Finding[]): void {
  const lines = readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, index) => {
    const lineNumber = index + 1
    if (RAW_REDECLARATION.test(line)) {
      findings.push({ repo, file, line: lineNumber, kind: 'raw-redeclaration', text: line.trim() })
    }
    if (HARDCODED_HEX.test(line)) {
      findings.push({ repo, file, line: lineNumber, kind: 'hardcoded-hex', text: line.trim() })
    }
    if (HARDCODED_LENGTH.test(line) && !line.includes('var(--sp-') && !line.trim().startsWith('@media')) {
      findings.push({ repo, file, line: lineNumber, kind: 'hardcoded-length', text: line.trim() })
    }
    if (WORKAROUND_COMMENT.test(line)) {
      findings.push({ repo, file, line: lineNumber, kind: 'workaround-comment', text: line.trim() })
    }
  })
}

const findings: Finding[] = []
const skipped: string[] = []

for (const repo of DOWNSTREAM_REPOS) {
  const repoPath = join(siblingsRoot, repo)
  const srcPath = join(repoPath, 'src')
  if (!existsSync(srcPath)) {
    skipped.push(repo)
    continue
  }
  const files: string[] = []
  walk(srcPath, files)
  for (const file of files) {
    scanFile(repo, file, findings)
  }
}

console.log('=== Downstream redeclaration/workaround audit ===\n')

if (skipped.length > 0) {
  console.log(`Skipped (not present on disk): ${skipped.join(', ')}\n`)
}

if (findings.length === 0) {
  console.log('No raw --sp-* redeclarations, hardcoded visual values, or workaround comments found.')
} else {
  const byRepo = new Map<string, Finding[]>()
  for (const finding of findings) {
    const list = byRepo.get(finding.repo) ?? []
    list.push(finding)
    byRepo.set(finding.repo, list)
  }
  for (const [repo, repoFindings] of byRepo) {
    console.log(`--- ${repo} (${repoFindings.length}) ---`)
    for (const finding of repoFindings) {
      const relFile = finding.file.slice(finding.file.indexOf(repo))
      console.log(`  [${finding.kind}] ${relFile}:${finding.line}: ${finding.text}`)
    }
    console.log('')
  }
  console.log(
    `${findings.length} finding(s) across ${byRepo.size} repo(s). Each one needs a human read: classify as a ` +
      'real token-vocabulary gap (file under this repo\'s TODO.md "Requested by Downstream"), a UI/component ' +
      'delivery gap (belongs in spectre-ui), or legitimate consumer-owned geometry (no action). This script ' +
      'reports; it does not judge or fail the build.',
  )
}
