import { describe, it, expect } from 'vitest'
import { computeContrast } from '../scripts/check-contrast'

describe('computeContrast — WCAG AA threshold (4.5:1)', () => {
  it('passes for black on white', () => {
    expect(computeContrast('#ffffff', '#000000')).toBeGreaterThanOrEqual(4.5)
  })

  it('passes for dark text on light background', () => {
    expect(computeContrast('#f8f9fa', '#212529')).toBeGreaterThanOrEqual(4.5)
  })

  it('fails for white on white', () => {
    expect(computeContrast('#ffffff', '#ffffff')).toBeLessThan(4.5)
  })

  it('fails for similar light colors', () => {
    expect(computeContrast('#ffffff', '#eeeeee')).toBeLessThan(4.5)
  })

  it('fails for mid-gray on white', () => {
    expect(computeContrast('#ffffff', '#999999')).toBeLessThan(4.5)
  })
})
