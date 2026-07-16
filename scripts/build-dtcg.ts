import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { loadMergedTokens } from './token-utils.js'

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, '../dist/tokens.dtcg.json')

const isObject = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v)

const WHOLE_ALIAS_PATTERN = /^\{([a-zA-Z0-9_.]+)\}$/

// Standalone (non-alias) leaf shapes that get a structural DTCG transform
// instead of a plain $type inference. Path-scoped rather than shape-detected
// so composite alpha-colors like surface.overlay ("{colors.black} / 0.6")
// are never mistaken for a shadow.
const SHADOW_PATH_PREFIXES = ['shadows.']
const SHADOW_LEAF_PATHS = new Set(['component.modal.shadow', 'buttons.cta.shadow'])

export function isShadowPath(keyPath: string): boolean {
  const withoutModePrefix = keyPath.replace(/^modes\.(default|dark)\./, '')
  if (SHADOW_LEAF_PATHS.has(withoutModePrefix)) return true
  return SHADOW_PATH_PREFIXES.some((prefix) => withoutModePrefix.startsWith(prefix))
}

function getAtPath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (isObject(acc)) return acc[key]
    return undefined
  }, source)
}

// Resolves a raw source path (e.g. "transitions.easing.out") to its
// underlying value, unwrapping `{ value: ... }` source nodes and following
// alias chains. Used only to look up the TYPE of a whole-value alias target —
// the DTCG $value keeps the original `{path}` reference string.
function resolveSourceValue(merged: unknown, path: string, seen = new Set<string>()): unknown {
  if (seen.has(path)) return undefined // guard against reference cycles
  seen.add(path)

  let node = getAtPath(merged, path)
  if (isObject(node) && 'value' in node) node = node.value

  if (typeof node === 'string') {
    const wholeMatch = node.match(WHOLE_ALIAS_PATTERN)
    if (wholeMatch) return resolveSourceValue(merged, wholeMatch[1], seen)
  }

  return node
}

const CUBIC_BEZIER_KEYWORDS: Record<string, [number, number, number, number]> = {
  linear: [0, 0, 1, 1]
}

export function parseCubicBezier(value: string): [number, number, number, number] | undefined {
  if (value in CUBIC_BEZIER_KEYWORDS) return CUBIC_BEZIER_KEYWORDS[value]
  const match = value.match(/^cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)$/)
  if (!match) return undefined
  return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])]
}

export function parseFontFamily(value: string): string[] {
  return value
    .split(',')
    .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
}

export interface DtcgShadow {
  color: string
  offsetX: string
  offsetY: string
  blur: string
  spread: string
}

const SHADOW_LAYER_PATTERN =
  /^(-?[\d.]+\w*)\s+(-?[\d.]+\w*)\s+(-?[\d.]+\w*)\s+(-?[\d.]+\w*)\s+(.+)$/

function parseShadowLayer(layer: string): DtcgShadow | undefined {
  const match = layer.trim().match(SHADOW_LAYER_PATTERN)
  if (!match) return undefined
  const [, offsetX, offsetY, blur, spread, color] = match
  return { color, offsetX, offsetY, blur, spread }
}

// `shadows.none` and any other unparsable single-keyword shadow value has no
// structural DTCG shadow representation; it is left as a plain string rather
// than forced into a shadow shape it doesn't have.
export function parseShadowValue(value: string): DtcgShadow | DtcgShadow[] | undefined {
  const layers = value.split(/,(?![^(]*\))/).map((layer) => parseShadowLayer(layer))
  if (layers.some((layer) => layer === undefined)) return undefined
  const parsed = layers as DtcgShadow[]
  return parsed.length === 1 ? parsed[0] : parsed
}

export function inferType(keyPath: string, value: unknown): string {
  const v = typeof value === 'string' ? value : ''

  if (/^colors\./.test(keyPath)) return 'color'
  if (/^space\./.test(keyPath)) return 'dimension'
  if (/^radii\./.test(keyPath)) return 'dimension'
  if (/^breakpoints\./.test(keyPath)) return 'dimension'
  if (/^zIndex\./.test(keyPath)) return 'number'
  if (/^opacity\./.test(keyPath)) return 'number'
  if (/^transitions\.duration\./.test(keyPath)) return 'duration'
  if (/^transitions\.easing\./.test(keyPath)) return 'cubicBezier'
  if (/^typography\.families\./.test(keyPath)) return 'fontFamily'
  if (/^border\.width\./.test(keyPath)) return 'dimension'
  if (/\.(size|fontSize|lineHeight|letterSpacing)$/.test(keyPath)) return 'dimension'
  if (/\.(weight|fontWeight)$/.test(keyPath)) return 'fontWeight'

  if (v.startsWith('{colors.')) return 'color'
  if (/^#[0-9a-fA-F]{3,8}$/.test(v)) return 'color'
  if (/^rgb/.test(v) || /^hsl/.test(v)) return 'color'
  if (/^\d+(\.\d+)?(px|rem|em|vh|vw|%)$/.test(v)) return 'dimension'
  if (/^\d+ms$/.test(v)) return 'duration'
  if (/^cubic-bezier/.test(v)) return 'cubicBezier'
  if (typeof value === 'number') return 'number'

  return 'string'
}

// Resolves the DTCG $type for a leaf, following whole-value alias references
// to the type of the token they point at (e.g. animations.fadeIn.easing is
// "{transitions.easing.out}", which must be typed cubicBezier — the type its
// target actually has — not "string").
export function inferTypeWithAliasResolution(keyPath: string, value: unknown, merged: unknown): string {
  if (typeof value === 'string') {
    const wholeMatch = value.match(WHOLE_ALIAS_PATTERN)
    if (wholeMatch) {
      const resolved = resolveSourceValue(merged, wholeMatch[1])
      if (resolved !== undefined) return inferType(wholeMatch[1], resolved)
    }
  }
  return inferType(keyPath, value)
}

export function toDTCG(node: unknown, merged: unknown, keyPath = ''): unknown {
  if (Array.isArray(node)) {
    return { $value: node, $type: 'string' }
  }

  if (!isObject(node)) {
    return buildLeaf(node, keyPath, merged)
  }

  if ('value' in node) {
    const result: Record<string, unknown> = buildLeaf(node.value, keyPath, merged) as Record<string, unknown>
    if (typeof node.description === 'string') {
      result.$description = node.description
    }
    return result
  }

  return Object.fromEntries(
    Object.entries(node)
      .filter(([key]) => key !== 'metadata')
      .map(([key, val]) => [key, toDTCG(val, merged, keyPath ? `${keyPath}.${key}` : key)])
  )
}

function buildLeaf(value: unknown, keyPath: string, merged: unknown): unknown {
  if (typeof value === 'string') {
    if (/^zIndex\./.test(keyPath) || /^opacity\./.test(keyPath)) {
      const numeric = Number(value)
      if (!Number.isNaN(numeric)) return { $value: numeric, $type: 'number' }
    }

    if (/^typography\.families\./.test(keyPath)) {
      return { $value: parseFontFamily(value), $type: 'fontFamily' }
    }

    if (/^transitions\.easing\./.test(keyPath)) {
      const bezier = parseCubicBezier(value)
      if (bezier) return { $value: bezier, $type: 'cubicBezier' }
    }

    if (isShadowPath(keyPath) && value !== 'none') {
      const shadow = parseShadowValue(value)
      if (shadow) return { $value: shadow, $type: 'shadow' }
    }
  }

  return { $value: value, $type: inferTypeWithAliasResolution(keyPath, value, merged) }
}

const merged = loadMergedTokens()
const dtcg = toDTCG(merged, merged)

await mkdir(resolve(here, '../dist'), { recursive: true })
await writeFile(outPath, JSON.stringify(dtcg, null, 2) + '\n', 'utf8')
console.log('dist/tokens.dtcg.json written')
