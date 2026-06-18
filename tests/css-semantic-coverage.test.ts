import { describe, it, expect } from 'vitest'
import { generateCssVariables, tokens } from '../src/index'

describe('generateCssVariables — semantic namespace coverage', () => {
  const css = generateCssVariables(tokens)

  it('emits a CSS variable for every key under tokens.link', () => {
    Object.keys(tokens.link).forEach((key) => {
      expect(css).toContain(`--sp-link-${key}`)
    })
  })

  it('emits a CSS variable for every key under tokens.modes.default.surface', () => {
    Object.keys(tokens.modes.default.surface).forEach((key) => {
      expect(css).toContain(`--sp-surface-${key}`)
    })
  })
})
