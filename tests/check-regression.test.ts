import { describe, it, expect } from 'vitest'
import { getPathValue, findWrappedEntry } from '../scripts/contract-utils'

describe('getPathValue — missing path detection', () => {
  const tokens = {
    colors: { brand: { '500': '#336df4' } },
    space: { '4': '1rem' },
  }

  it('resolves a nested path', () => {
    expect(getPathValue(tokens, 'colors.brand.500')).toBe('#336df4')
  })

  it('returns undefined for a missing top-level namespace', () => {
    expect(getPathValue(tokens, 'typography')).toBeUndefined()
  })

  it('returns undefined for a missing nested path', () => {
    expect(getPathValue(tokens, 'colors.missing.500')).toBeUndefined()
  })

  it('returns undefined when traversing past a primitive', () => {
    expect(getPathValue(tokens, 'colors.brand.500.nested')).toBeUndefined()
  })
})

describe('findWrappedEntry — wrapped token detection', () => {
  it('returns null for a clean flattened token tree', () => {
    expect(findWrappedEntry({ colors: { brand: '#336df4' } })).toBeNull()
  })

  it('detects a wrapped token at the root level', () => {
    expect(findWrappedEntry({ value: '#336df4' })).toBe('<root>')
  })

  it('detects a wrapped token nested in the tree', () => {
    const result = findWrappedEntry({
      colors: { primary: { value: '#336df4' } },
    })
    expect(result).toBe('colors.primary')
  })

  it('detects a metadata field as a wrapped entry indicator', () => {
    const result = findWrappedEntry({
      surface: { card: { metadata: { pair: 'colors.text.body' } } },
    })
    expect(result).toBe('surface.card')
  })

  it('returns null for an empty object', () => {
    expect(findWrappedEntry({})).toBeNull()
  })

  it('returns null for primitives', () => {
    expect(findWrappedEntry(null)).toBeNull()
    expect(findWrappedEntry('string')).toBeNull()
  })
})
