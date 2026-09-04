import { describe, it, expect } from 'vitest'
import { generateCssVariables, tokens } from '../src/index'

const toKebabSegment = (segment: string): string =>
  segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// `card` and `input` are legacy component groups that keep the
// `component-` CSS variable prefix (`--sp-component-card-text`); every
// later group drops it (`--sp-select-bg`, not `--sp-component-select-bg`).
const COMPONENT_PREFIX_GROUPS = new Set(['card', 'input'])

const assertDeclaration = (css: string, parts: string[]): void => {
  const name = `--sp-${parts.map(toKebabSegment).join('-')}`
  expect(css).toMatch(new RegExp(`(?:^|[;{])\\s*${name}\\s*:`))
}

const assertCssCoverage = (
  css: string,
  varPrefixParts: string[],
  node: unknown
): void => {
  if (typeof node === 'string') {
    assertDeclaration(css, varPrefixParts)
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
      assertDeclaration(css, ['link', key])
    })
  })

  it('emits a CSS variable for every key under tokens.modes.default.surface', () => {
    Object.keys(tokens.modes.default.surface).forEach((key) => {
      assertDeclaration(css, ['surface', key])
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

  it('rejects a missing declaration even when a longer variable name remains', () => {
    const incompleteCss = css.replace(
      /^\s*--sp-badge-neutral-bg:[^\n]*\n/gm,
      ''
    )
    expect(incompleteCss).toContain('--sp-badge-neutral-bg-hover:')
    expect(() =>
      assertCssCoverage(incompleteCss, ['badge'], tokens.component.badge)
    ).toThrow()
  })

  it('does not count a variable reference as a declaration', () => {
    expect(() =>
      assertCssCoverage(':root { color: var(--sp-link-default); }', ['link'], {
        default: '#000000'
      })
    ).toThrow()
  })
})
