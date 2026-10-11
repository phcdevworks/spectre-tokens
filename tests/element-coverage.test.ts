import { readFileSync } from 'node:fs'
import { describe, it, expect } from 'vitest'
import { tokens } from '../src/index'
import { findCoverageProblems } from '../scripts/element-coverage'
import type { ElementCoverage } from '../scripts/element-coverage'

const load = (): ElementCoverage =>
  JSON.parse(
    readFileSync(new URL('../element-coverage.json', import.meta.url), 'utf8')
  ) as ElementCoverage

describe('findCoverageProblems', () => {
  it('passes for the committed coverage map', () => {
    expect(findCoverageProblems(load(), tokens)).toEqual([])
  })

  it('fails when a mapping is removed', () => {
    const coverage = load()
    delete coverage.elements.meter
    expect(findCoverageProblems(coverage, tokens)).toContain(
      'Element meter is not mapped'
    )
  })

  it('fails when a mapping names a token path that does not exist', () => {
    const coverage = load()
    coverage.elements.mark = { tokens: ['component.prose.highlighter'] }
    expect(findCoverageProblems(coverage, tokens)).toContain(
      'Element mark maps to component.prose.highlighter, which does not exist'
    )
  })

  it('fails on an element outside the canonical list', () => {
    const coverage = load()
    coverage.elements.blink = { styling: 'none', note: 'obsolete' }
    expect(findCoverageProblems(coverage, tokens)).toContain(
      'Element blink is not in the canonical list'
    )
  })

  it('fails on a missing pseudo-element', () => {
    const coverage = load()
    delete coverage.pseudoElements['::marker']
    expect(findCoverageProblems(coverage, tokens)).toContain(
      'Pseudo-element ::marker is not mapped'
    )
  })
})
