import { describe, it, expect } from 'vitest'
import { flattenTokenTree, getTokenSourceFiles, loadMergedTokens } from '../scripts/token-utils'

describe('flattenTokenTree', () => {
  it('returns primitives unchanged', () => {
    expect(flattenTokenTree('red')).toBe('red')
    expect(flattenTokenTree(42)).toBe(42)
    expect(flattenTokenTree(null)).toBeNull()
  })

  it('extracts value from a wrapped token object', () => {
    expect(flattenTokenTree({ value: '#fff' })).toBe('#fff')
  })

  it('flattens nested wrapped tokens', () => {
    expect(flattenTokenTree({ value: { value: 'inner' } })).toBe('inner')
  })

  it('flattens a tree of wrapped token objects', () => {
    const tree = {
      primary: { value: '#336df4' },
      secondary: { value: '#1f57db' },
    }
    expect(flattenTokenTree(tree)).toEqual({
      primary: '#336df4',
      secondary: '#1f57db',
    })
  })

  it('handles arrays by recursing into elements', () => {
    expect(flattenTokenTree([{ value: 'a' }, { value: 'b' }])).toEqual(['a', 'b'])
  })

  it('handles nested objects without a value key', () => {
    const tree = {
      colors: {
        primary: { value: '#336df4' },
        secondary: { value: '#1f57db' },
      },
    }
    expect(flattenTokenTree(tree)).toEqual({
      colors: {
        primary: '#336df4',
        secondary: '#1f57db',
      },
    })
  })

  it('returns an empty object unchanged', () => {
    expect(flattenTokenTree({})).toEqual({})
  })
})

describe('getTokenSourceFiles', () => {
  it('returns only .json files', () => {
    const files = getTokenSourceFiles()
    expect(files.every((f) => f.endsWith('.json'))).toBe(true)
  })

  it('returns files in alphabetical order', () => {
    const files = getTokenSourceFiles()
    const sorted = [...files].sort((a, b) => a.localeCompare(b))
    expect(files).toEqual(sorted)
  })

  it('returns at least one file', () => {
    expect(getTokenSourceFiles().length).toBeGreaterThan(0)
  })
})

describe('loadMergedTokens', () => {
  it('returns a non-null object', () => {
    const tokens = loadMergedTokens()
    expect(typeof tokens).toBe('object')
    expect(tokens).not.toBeNull()
  })

  it('includes expected top-level namespaces', () => {
    const tokens = loadMergedTokens()
    for (const ns of ['colors', 'space', 'typography', 'border']) {
      expect(tokens).toHaveProperty(ns)
    }
  })
})
