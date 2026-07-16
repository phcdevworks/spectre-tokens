import { describe, it, expect } from 'vitest'
import {
  inferType,
  inferTypeWithAliasResolution,
  parseCubicBezier,
  parseFontFamily,
  parseShadowValue,
  isShadowPath,
  toDTCG
} from '../scripts/build-dtcg'

describe('inferType — path and shape heuristics', () => {
  it('infers color from a colors.* path', () => {
    expect(inferType('colors.brand.500', '#336df4')).toBe('color')
  })

  it('infers color from a whole-value color alias regardless of path', () => {
    expect(inferType('component.card.text', '{colors.neutral.900}')).toBe('color')
  })

  it('infers color from a raw hex value', () => {
    expect(inferType('anything', '#fff')).toBe('color')
  })

  it('infers color from rgb()/hsl() values', () => {
    expect(inferType('anything', 'rgb(0, 0, 0)')).toBe('color')
    expect(inferType('anything', 'hsl(0, 0%, 0%)')).toBe('color')
  })

  it('infers dimension from space/radii/breakpoints paths', () => {
    expect(inferType('space.16', '1rem')).toBe('dimension')
    expect(inferType('radii.md', '4px')).toBe('dimension')
    expect(inferType('breakpoints.lg', '1024px')).toBe('dimension')
  })

  it('infers dimension from a unit-suffixed value regardless of path', () => {
    expect(inferType('anything', '1.5rem')).toBe('dimension')
    expect(inferType('anything', '2px')).toBe('dimension')
  })

  it('infers number from zIndex/opacity paths', () => {
    expect(inferType('zIndex.modal', '1400')).toBe('number')
    expect(inferType('opacity.disabled', '0.38')).toBe('number')
  })

  it('infers number from an actual JS number value', () => {
    expect(inferType('anything', 42)).toBe('number')
  })

  it('infers duration from transitions.duration path and ms-suffixed values', () => {
    expect(inferType('transitions.duration.base', '200ms')).toBe('duration')
    expect(inferType('anything', '150ms')).toBe('duration')
  })

  it('infers cubicBezier from transitions.easing path and cubic-bezier() values', () => {
    expect(inferType('transitions.easing.out', 'cubic-bezier(0, 0, 0.2, 1)')).toBe('cubicBezier')
    expect(inferType('anything', 'cubic-bezier(0.4, 0, 1, 1)')).toBe('cubicBezier')
  })

  it('infers fontFamily from typography.families path', () => {
    expect(inferType('typography.families.sans', 'system-ui, sans-serif')).toBe('fontFamily')
  })

  it('infers fontWeight from weight/fontWeight-suffixed paths', () => {
    expect(inferType('font.md.weight', 500)).toBe('fontWeight')
    expect(inferType('typography.scale.md.fontWeight', 500)).toBe('fontWeight')
  })

  it('falls back to string for values with no recognized shape', () => {
    expect(inferType('component.modal.overlay', 'transparent')).toBe('string')
    expect(inferType('animations.fadeIn.keyframes', 'fade-in')).toBe('string')
  })
})

describe('inferTypeWithAliasResolution — whole-value alias target typing', () => {
  const merged = {
    transitions: {
      duration: { base: '200ms' },
      easing: { out: 'cubic-bezier(0, 0, 0.2, 1)', linear: 'linear' }
    },
    colors: { brand: { 500: '#336df4' } }
  }

  it('resolves a duration alias to the duration type of its target', () => {
    expect(inferTypeWithAliasResolution('animations.fadeIn.duration', '{transitions.duration.base}', merged)).toBe(
      'duration'
    )
  })

  it('resolves a cubicBezier alias to the cubicBezier type of its target', () => {
    expect(inferTypeWithAliasResolution('animations.fadeIn.easing', '{transitions.easing.out}', merged)).toBe(
      'cubicBezier'
    )
  })

  it('resolves a color alias to the color type of its target', () => {
    expect(inferTypeWithAliasResolution('component.card.text', '{colors.brand.500}', merged)).toBe('color')
  })

  it('falls back to path/shape inference for a partial (composite) alias reference', () => {
    // "{colors.black} / 0.6" is not a WHOLE alias match (extra trailing text),
    // so it must not attempt alias-target resolution and instead fall back to
    // the ordinary color-prefix heuristic.
    expect(inferTypeWithAliasResolution('surface.overlay', '{colors.black} / 0.6', merged)).toBe('color')
  })

  it('falls back to string when the alias target cannot be resolved', () => {
    expect(inferTypeWithAliasResolution('anything', '{nonexistent.path}', merged)).toBe('string')
  })
})

describe('parseCubicBezier', () => {
  it('parses a standard cubic-bezier() function into a 4-number array', () => {
    expect(parseCubicBezier('cubic-bezier(0.4, 0, 0.2, 1)')).toEqual([0.4, 0, 0.2, 1])
  })

  it('parses negative and decimal control points', () => {
    expect(parseCubicBezier('cubic-bezier(0.34, 1.56, 0.64, 1)')).toEqual([0.34, 1.56, 0.64, 1])
  })

  it('maps the "linear" keyword to its equivalent linear bezier', () => {
    expect(parseCubicBezier('linear')).toEqual([0, 0, 1, 1])
  })

  it('returns undefined for an unparsable easing value', () => {
    expect(parseCubicBezier('ease-in-out')).toBeUndefined()
  })
})

describe('parseFontFamily', () => {
  it('splits a comma-separated font stack into an array', () => {
    expect(parseFontFamily('system-ui, -apple-system, sans-serif')).toEqual([
      'system-ui',
      '-apple-system',
      'sans-serif'
    ])
  })

  it('strips quotes from quoted family names', () => {
    expect(parseFontFamily("'Times New Roman', Times, serif")).toEqual(['Times New Roman', 'Times', 'serif'])
  })

  it('handles a single unquoted family with no commas', () => {
    expect(parseFontFamily('monospace')).toEqual(['monospace'])
  })
})

describe('isShadowPath', () => {
  it('matches the shadows scale namespace', () => {
    expect(isShadowPath('shadows.sm')).toBe(true)
    expect(isShadowPath('shadows.2xl')).toBe(true)
  })

  it('matches known component shadow leaf paths', () => {
    expect(isShadowPath('component.modal.shadow')).toBe(true)
    expect(isShadowPath('buttons.cta.shadow')).toBe(true)
  })

  it('matches mode-scoped duplicates of a shadow leaf path', () => {
    expect(isShadowPath('modes.default.component.modal.shadow')).toBe(true)
    expect(isShadowPath('modes.dark.component.modal.shadow')).toBe(true)
  })

  it('does not match composite alpha-color paths that are not shadows', () => {
    expect(isShadowPath('surface.overlay')).toBe(false)
    expect(isShadowPath('component.modal.overlay')).toBe(false)
    expect(isShadowPath('buttons.primary.focusRing')).toBe(false)
  })
})

describe('parseShadowValue', () => {
  it('parses a single-layer box-shadow string into a structured shadow', () => {
    expect(parseShadowValue('0 2px 6px -1px {colors.black} / 0.08')).toEqual({
      offsetX: '0',
      offsetY: '2px',
      blur: '6px',
      spread: '-1px',
      color: '{colors.black} / 0.08'
    })
  })

  it('parses a comma-separated multi-layer shadow into an array, ignoring commas inside color functions', () => {
    const result = parseShadowValue('0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.2)')
    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(2)
  })

  it('returns undefined for a value with no parseable shadow layers', () => {
    expect(parseShadowValue('none')).toBeUndefined()
  })
})

describe('toDTCG — structural transforms and composite/array handling', () => {
  it('converts a zIndex string leaf to a numeric $value', () => {
    const result = toDTCG('1400', {}, 'zIndex.modal') as { $value: unknown; $type: string }
    expect(result.$value).toBe(1400)
    expect(result.$type).toBe('number')
  })

  it('converts an opacity string leaf to a numeric $value', () => {
    const result = toDTCG('0.38', {}, 'opacity.disabled') as { $value: unknown; $type: string }
    expect(result.$value).toBe(0.38)
    expect(result.$type).toBe('number')
  })

  it('converts a fontFamily leaf to an array $value', () => {
    const result = toDTCG('system-ui, sans-serif', {}, 'typography.families.sans') as {
      $value: unknown
      $type: string
    }
    expect(result.$value).toEqual(['system-ui', 'sans-serif'])
    expect(result.$type).toBe('fontFamily')
  })

  it('converts a cubicBezier leaf to a 4-number array $value', () => {
    const result = toDTCG('cubic-bezier(0.4, 0, 0.2, 1)', {}, 'transitions.easing.inOut') as {
      $value: unknown
      $type: string
    }
    expect(result.$value).toEqual([0.4, 0, 0.2, 1])
    expect(result.$type).toBe('cubicBezier')
  })

  it('converts a shadow leaf to a structured object $value', () => {
    const result = toDTCG('0 1px 2px 0 {colors.black} / 0.06', {}, 'shadows.sm') as {
      $value: unknown
      $type: string
    }
    expect(result.$type).toBe('shadow')
    expect(result.$value).toMatchObject({ offsetX: '0', offsetY: '1px', blur: '2px', spread: '0' })
  })

  it('leaves a gradient value as a plain string (no DTCG gradient $type exists)', () => {
    const result = toDTCG('linear-gradient(135deg, {colors.indigo.500} 0%, {colors.violet.600} 100%)', {}, 'surface.hero') as {
      $value: unknown
      $type: string
    }
    expect(result.$value).toBe('linear-gradient(135deg, {colors.indigo.500} 0%, {colors.violet.600} 100%)')
    expect(result.$type).toBe('string')
  })

  it('preserves an already-array node as a string-typed array $value', () => {
    const result = toDTCG(['a', 'b'], {}, 'anything') as { $value: unknown; $type: string }
    expect(result.$value).toEqual(['a', 'b'])
    expect(result.$type).toBe('string')
  })

  it('unwraps a { value, description } source node and carries the description through', () => {
    const merged = { surface: { page: { value: '{colors.neutral.50}', description: 'primary app background' } } }
    const result = toDTCG(merged.surface.page, merged, 'surface.page') as {
      $value: unknown
      $type: string
      $description?: string
    }
    expect(result.$value).toBe('{colors.neutral.50}')
    expect(result.$type).toBe('color')
    expect(result.$description).toBe('primary app background')
  })

  it('recursively converts a nested object tree, filtering out metadata', () => {
    const merged = {
      component: {
        badge: {
          neutralBg: { value: '{colors.neutral.100}', metadata: { pair: 'component.badge.neutralText' } }
        }
      }
    }
    const result = toDTCG(merged.component, merged, 'component') as Record<string, unknown>
    const badge = result.badge as Record<string, unknown>
    expect(badge).not.toHaveProperty('metadata')
    expect((badge.neutralBg as { $value: unknown }).$value).toBe('{colors.neutral.100}')
  })
})
