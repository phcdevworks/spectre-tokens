import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { loadContractManifest } from './contract-utils'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
const changelogPath = join(repoRoot, 'CHANGELOG.md')
const packagePath = join(repoRoot, 'package.json')

export function extractClassification(
  unreleasedSection: string,
  requiredPrefix: string,
  allowed: string[]
): string {
  const pattern = new RegExp(`${requiredPrefix}\\s*(${allowed.join('|')})`, 'i')
  const match = unreleasedSection.match(pattern)
  if (!match) {
    throw new Error(
      [
        'Unreleased section has content but is missing a contract change classification.',
        `Expected: ${requiredPrefix} <${allowed.join(' | ')}>`,
        'Add a classification line to CHANGELOG.md [Unreleased] before proposing a version.'
      ].join('\n')
    )
  }
  return match[1].toLowerCase()
}

export function computeVersionBump(
  classification: string,
  current: string
): { proposed: string; bumpType: string } {
  const [majorStr, minorStr, patchStr] = current.split('.')
  const major = parseInt(majorStr ?? '0', 10)
  const minor = parseInt(minorStr ?? '0', 10)
  const patch = parseInt(patchStr ?? '0', 10)

  if (classification === 'breaking') {
    return { proposed: `${major + 1}.0.0`, bumpType: 'major' }
  }
  if (classification === 'additive' || classification === 'semantic change') {
    return { proposed: `${major}.${minor + 1}.0`, bumpType: 'minor' }
  }
  return { proposed: `${major}.${minor}.${patch + 1}`, bumpType: 'patch' }
}

if (process.argv[1] !== undefined && fileURLToPath(import.meta.url) === process.argv[1]) {
  const manifest = loadContractManifest()
  const { allowed, requiredPrefix } = manifest.changeClassification

  const changelog = readFileSync(changelogPath, 'utf8')
  const unreleasedSection = changelog.split('## [Unreleased]')[1]?.split('\n## [')[0] ?? ''
  const unreleasedWithoutClassification = unreleasedSection
    .replace(new RegExp(`${requiredPrefix}\\s*(${allowed.join('|')})`, 'i'), '')
    .trim()

  if (unreleasedWithoutClassification.length === 0) {
    console.log('No unreleased changes. No version bump needed.')
    process.exit(0)
  }

  const classification = extractClassification(unreleasedSection, requiredPrefix, allowed)
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8')) as { version: string }
  const { proposed, bumpType } = computeVersionBump(classification, pkg.version)

  console.log(`Current version : ${pkg.version}`)
  console.log(`Classification  : ${classification}`)
  console.log(`Bump type       : ${bumpType}`)
  console.log(`Proposed version: ${proposed}`)
}
