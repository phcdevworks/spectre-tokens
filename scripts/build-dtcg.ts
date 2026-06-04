import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { loadMergedTokens } from './token-utils.js'

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, '../dist/tokens.dtcg.json')

const isObject = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v)

function inferType(keyPath: string, value: unknown): string {
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

function toDTCG(node: unknown, keyPath = ''): unknown {
  if (Array.isArray(node)) {
    return { $value: node, $type: 'string' }
  }

  if (!isObject(node)) {
    return { $value: node, $type: inferType(keyPath, node) }
  }

  if ('value' in node) {
    const result: Record<string, unknown> = {
      $value: node.value,
      $type: inferType(keyPath, node.value),
    }
    if (typeof node.description === 'string') {
      result.$description = node.description
    }
    return result
  }

  return Object.fromEntries(
    Object.entries(node)
      .filter(([key]) => key !== 'metadata')
      .map(([key, val]) => [key, toDTCG(val, keyPath ? `${keyPath}.${key}` : key)])
  )
}

const merged = loadMergedTokens()
const dtcg = toDTCG(merged)

await mkdir(resolve(here, '../dist'), { recursive: true })
await writeFile(outPath, JSON.stringify(dtcg, null, 2) + '\n', 'utf8')
console.log('dist/tokens.dtcg.json written')
