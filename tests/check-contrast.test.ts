import { describe, it, expect } from 'vitest'
import { computeContrast, requiredContrast } from '../scripts/check-contrast'

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

describe('requiredContrast — per-mode and non-text thresholds', () => {
  it('holds text pairs to AA outside high-contrast mode', () => {
    expect(requiredContrast('modes.default.text.onPage.muted')).toBe(4.5)
    expect(requiredContrast('component.card.text')).toBe(4.5)
  })

  it('holds text pairs to AAA in high-contrast mode', () => {
    expect(requiredContrast('modes.highContrast.text.onPage.muted')).toBe(7)
  })

  it('uses minContrast for non-text pairs in every mode', () => {
    expect(requiredContrast('modes.default.component.chart.series.1', 3)).toBe(3)
    expect(requiredContrast('modes.highContrast.component.chart.series.1', 3)).toBe(3)
  })
})
