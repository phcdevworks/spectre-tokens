import { describe, it, expect } from 'vitest'
import { generateCssVariables, tokens } from '../src/index'

const toKebabSegment = (segment: string): string =>
  segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// `card` and `input` are legacy component groups that keep the
// `component-` CSS variable prefix (`--sp-component-card-text`); every
// later group drops it (`--sp-select-bg`, not `--sp-component-select-bg`).
const COMPONENT_PREFIX_GROUPS = new Set(['card', 'input'])

const assertCssCoverage = (
  css: string,
  varPrefixParts: string[],
  node: unknown
): void => {
  if (typeof node === 'string') {
    expect(css).toContain(`--sp-${varPrefixParts.map(toKebabSegment).join('-')}`)
    return
  }
  if (node && typeof node === 'object') {
    Object.entries(node as Record<string, unknown>).forEach(([key, value]) => {
      assertCssCoverage(css, [...varPrefixParts, key], value)
    })
  }
}

describe('generateCssVariables — semantic namespace coverage', () => {
  const css = generateCssVariables(tokens)

  it('emits a CSS variable for every key under tokens.link', () => {
    Object.keys(tokens.link).forEach((key) => {
      expect(css).toContain(`--sp-link-${toKebabSegment(key)}`)
    })
  })

  it('emits a CSS variable for every key under tokens.modes.default.surface', () => {
    Object.keys(tokens.modes.default.surface).forEach((key) => {
      expect(css).toContain(`--sp-surface-${key}`)
    })
  })

  it('emits a CSS variable for every key under every tokens.component.* group', () => {
    Object.entries(tokens.component).forEach(([group, fields]) => {
      const varPrefixParts = COMPONENT_PREFIX_GROUPS.has(group)
        ? ['component', group]
        : [group]
      assertCssCoverage(css, varPrefixParts, fields)
    })
  })
})
