import { describe, it, expect } from 'vitest'
import { computeVersionBump, extractClassification } from '../scripts/propose-version'

describe('computeVersionBump', () => {
  it('additive → minor bump', () => {
    expect(computeVersionBump('additive', '2.7.0')).toEqual({ proposed: '2.8.0', bumpType: 'minor' })
  })

  it('semantic change → minor bump', () => {
    expect(computeVersionBump('semantic change', '2.7.0')).toEqual({ proposed: '2.8.0', bumpType: 'minor' })
  })

  it('breaking → major bump, resets minor and patch', () => {
    expect(computeVersionBump('breaking', '2.7.3')).toEqual({ proposed: '3.0.0', bumpType: 'major' })
  })

  it('minor bump resets patch', () => {
    expect(computeVersionBump('additive', '1.5.3')).toEqual({ proposed: '1.6.0', bumpType: 'minor' })
  })

  it('breaking increments major from any version', () => {
    expect(computeVersionBump('breaking', '1.0.0')).toEqual({ proposed: '2.0.0', bumpType: 'major' })
  })
})

describe('extractClassification', () => {
  const prefix = 'Contract change type:'
  const allowed = ['additive', 'semantic change', 'breaking']

  it('extracts additive classification', () => {
    expect(extractClassification('Contract change type: additive', prefix, allowed)).toBe('additive')
  })

  it('extracts breaking classification', () => {
    expect(extractClassification('\nContract change type: breaking\n', prefix, allowed)).toBe('breaking')
  })

  it('extracts semantic change classification', () => {
    expect(extractClassification('Contract change type: semantic change', prefix, allowed)).toBe('semantic change')
  })

  it('is case-insensitive', () => {
    expect(extractClassification('Contract change type: ADDITIVE', prefix, allowed)).toBe('additive')
  })

  it('throws when no classification line is present', () => {
    expect(() =>
      extractClassification('Some unreleased content without classification', prefix, allowed)
    ).toThrow('missing a contract change classification')
  })
})
