import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { tokens } from '../src/index'
import {
  HTML_ELEMENTS,
  PSEUDO_ELEMENTS,
  findCoverageProblems
} from './element-coverage'
import type { ElementCoverage } from './element-coverage'

const here = dirname(fileURLToPath(import.meta.url))
const coverage = JSON.parse(
  readFileSync(resolve(here, '../element-coverage.json'), 'utf8')
) as ElementCoverage

const problems = findCoverageProblems(coverage, tokens)
if (problems.length > 0) {
  console.error(
    `Element coverage check failed:\n${problems.map((problem) => `- ${problem}`).join('\n')}`
  )
  process.exit(1)
}

console.log(
  `Element coverage check passed (${HTML_ELEMENTS.length} elements, ${PSEUDO_ELEMENTS.length} pseudo-elements mapped).`
)
