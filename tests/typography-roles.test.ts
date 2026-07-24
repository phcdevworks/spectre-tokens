import { describe, it, expect } from 'vitest'
import { generateCssVariables, tokens } from '../src/index'
import type { TypographyRoleEntry } from '../src/types'

const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

const REFERENCE_PATTERN = /^\{([^}]+)\}$/

const resolveReference = (value: string): string => {
  const match = value.match(REFERENCE_PATTERN)
  if (!match) return value
  const resolved = match[1]
    .split('.')
    .reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), tokens)
  expect(resolved).not.toBeUndefined()
  return String(resolved)
}

const resolveRole = (entry: TypographyRoleEntry) => ({
  fontFamily: resolveReference(entry.fontFamily),
  fontSize: resolveReference(entry.fontSize),
  lineHeight: resolveReference(entry.lineHeight),
  fontWeight: entry.fontWeight,
  letterSpacing: resolveReference(entry.letterSpacing)
})

describe('typography.heading / typography.body roles', () => {
  const css = generateCssVariables(tokens)

  it('emits fully resolved family/size/line-height/weight/letter-spacing for every heading level', () => {
    HEADING_LEVELS.forEach((level) => {
      const entry = resolveRole(tokens.typography.heading[level])
      expect(css).toContain(`--sp-heading-${level}-family: ${entry.fontFamily}`)
      expect(css).toContain(`--sp-heading-${level}-size: ${entry.fontSize}`)
      expect(css).toContain(`--sp-heading-${level}-line-height: ${entry.lineHeight}`)
      expect(css).toContain(`--sp-heading-${level}-weight: ${entry.fontWeight}`)
      expect(css).toContain(`--sp-heading-${level}-letter-spacing: ${entry.letterSpacing}`)
    })
  })

  it('emits fully resolved family/size/line-height/weight/letter-spacing for body', () => {
    const entry = resolveRole(tokens.typography.body)
    expect(css).toContain(`--sp-body-family: ${entry.fontFamily}`)
    expect(css).toContain(`--sp-body-size: ${entry.fontSize}`)
    expect(css).toContain(`--sp-body-line-height: ${entry.lineHeight}`)
    expect(css).toContain(`--sp-body-weight: ${entry.fontWeight}`)
    expect(css).toContain(`--sp-body-letter-spacing: ${entry.letterSpacing}`)
  })

  it('never leaks an unresolved token reference into heading/body CSS variables', () => {
    const roleLines = css
      .split('\n')
      .filter((line) => /--sp-(heading|body)-/.test(line))

    roleLines.forEach((line) => {
      expect(line).not.toContain('{')
      expect(line).not.toContain('}')
    })
  })

  it('never derives a heading/body variable from a var() indirection to another --sp-font-* variable', () => {
    const roleLines = css
      .split('\n')
      .filter((line) => /--sp-(heading|body)-/.test(line))

    roleLines.forEach((line) => {
      expect(line).not.toContain('var(--sp-font-')
    })
  })
})
