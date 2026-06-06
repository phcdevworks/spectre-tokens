import { describe, it, expect } from 'vitest'
import { stableStringify } from '../scripts/check-locked-color-contracts'

describe('stableStringify — mutation detection', () => {
  it('produces identical output regardless of key insertion order', () => {
    const a = { '50': '#fff', '100': '#eee' }
    const b = { '100': '#eee', '50': '#fff' }
    expect(stableStringify(a)).toBe(stableStringify(b))
  })

  it('detects a mutated color value', () => {
    const original = { '500': '#336df4' }
    const mutated = { '500': '#ff0000' }
    expect(stableStringify(original)).not.toBe(stableStringify(mutated))
  })

  it('detects an added key', () => {
    const original = { '500': '#336df4' }
    const extended = { '500': '#336df4', '600': '#1f57db' }
    expect(stableStringify(original)).not.toBe(stableStringify(extended))
  })

  it('detects a removed key', () => {
    const full = { '500': '#336df4', '600': '#1f57db' }
    const partial = { '500': '#336df4' }
    expect(stableStringify(full)).not.toBe(stableStringify(partial))
  })

  it('handles arrays', () => {
    expect(stableStringify(['a', 'b'])).toBe('["a","b"]')
  })

  it('handles string primitives', () => {
    expect(stableStringify('#fff')).toBe('"#fff"')
  })

  it('handles numeric primitives', () => {
    expect(stableStringify(42)).toBe('42')
  })
})
