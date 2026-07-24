import type {
  AnimationEntry,
  CssVariableMap,
  CssVariableOptions,
  SpectreTokens,
  Tokens,
  TypographyRoleEntry,
  TypographyScaleEntry
} from './types'

const DEFAULT_PREFIX = 'sp'
export const DEFAULT_SELECTOR = ':root'

// component groups that keep the legacy `--sp-component-*` prefix; every
// group added after Phase 4 P2 drops it (`--sp-select-bg`, not
// `--sp-component-select-bg`)
const LEGACY_COMPONENT_PREFIX_GROUPS = new Set(['card', 'input'])

const formatKey = (segment: string): string =>
  segment
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

const toVariableName = (prefix: string, ...parts: string[]): string => {
  const filtered = parts.filter(Boolean).map(formatKey)
  return `--${prefix}-${filtered.join('-')}`
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const resolveTokenReference = (tokens: SpectreTokens, reference: string): string => {
  const path = reference.slice(1, -1).split('.')
  let current: unknown = tokens
  for (const part of path) {
    if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return reference
    }
  }
  return typeof current === 'string' || typeof current === 'number' ? String(current) : reference
}

const hexToRgba = (hex: string, opacity: string): string => {
  const cleanHex = hex.replace('#', '')
  let r = 0, g = 0, b = 0
  if (cleanHex.length === 3) {
    const rh = cleanHex.charAt(0)
    const gh = cleanHex.charAt(1)
    const bh = cleanHex.charAt(2)
    r = parseInt(rh + rh, 16)
    g = parseInt(gh + gh, 16)
    b = parseInt(bh + bh, 16)
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16)
    g = parseInt(cleanHex.substring(2, 4), 16)
    b = parseInt(cleanHex.substring(4, 6), 16)
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const resolveValue = (tokens: SpectreTokens, value: unknown): string => {
  let str = String(value)
  const regex = /\{([^}]+)\}/g

  str = str.replace(regex, (match) => resolveTokenReference(tokens, match))

  const opacityRegex = /(#[0-9a-fA-F]{3,6})\s*\/\s*([0-9.]+)/g
  str = str.replace(opacityRegex, (match, hex, opacity) => hexToRgba(hex, opacity))

  return str
}

const resolveSemanticValue = (value: unknown, tokens: SpectreTokens, path?: string): string | undefined => {
  if (value === undefined) return undefined
  if (typeof value === 'string' || typeof value === 'number') {
    return resolveValue(tokens, value)
  }
  if (isPlainObject(value)) {
    if ('value' in value) {
      return resolveValue(tokens, value.value)
    }
    if ('metadata' in value || 'description' in value) {
      throw new Error(`Unsupported token value shape at "${path ?? '(unknown path)'}": expected a string, number, or { value } wrapper.`)
    }
    return undefined
  }
  throw new Error(`Unsupported token value shape at "${path ?? '(unknown path)'}": ${JSON.stringify(value)}`)
}

const getPath = (source: unknown, path: string[]): unknown =>
  path.reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), source)

const pickSemantic = (tokens: SpectreTokens, ...candidates: unknown[]): string | undefined => {
  for (const candidate of candidates) {
    const resolved = resolveSemanticValue(candidate, tokens)
    if (resolved !== undefined) return resolved
  }
  return undefined
}

export const createCssVariableMap = (tokens: SpectreTokens, options: CssVariableOptions = {}): CssVariableMap => {
  const prefix = options.prefix ?? DEFAULT_PREFIX
  const map: CssVariableMap = {}
  const baseTokens = tokens as unknown as Tokens

  const assign = (name: string, value: unknown) => {
    const resolved = resolveSemanticValue(value, tokens)
    if (resolved !== undefined) {
      map[name] = resolved
      return
    }
    if (value === undefined) return
    map[name] = resolveValue(tokens, value)
  }

  const assignColorGroup = (parts: string[], value: unknown): void => {
    if (typeof value === 'string' || typeof value === 'number') {
      assign(toVariableName(prefix, 'color', ...parts), value)
      return
    }

    Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
      assignColorGroup([...parts, key], nested)
    })
  }

  Object.entries(baseTokens.colors).forEach(([group, scale]) => {
    assignColorGroup([group], scale)
  })

  if (baseTokens.space) {
    Object.entries(baseTokens.space).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'space', key), value)
    })
  }

  if (baseTokens.layout) {
    const layout = baseTokens.layout as unknown as Record<string, Record<string, Record<string, string>>>

    if (layout.section?.padding) {
      Object.entries(layout.section.padding).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'section', 'padding', key), value)
      })
    }

    if (layout.section?.gap) {
      Object.entries(layout.section.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'section', 'gap', key), value)
      })
    }

    if (layout.stack?.gap) {
      Object.entries(layout.stack.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'stack', 'gap', key), value)
      })
    }

    if (layout.container?.paddingInline) {
      Object.entries(layout.container.paddingInline).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'container', 'padding-inline', key), value)
      })
    }

    const container = layout.container as Record<string, unknown> | undefined
    if (container?.maxWidth) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width'), container.maxWidth)
    }
    if (container?.maxWidthProse) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width-prose'), container.maxWidthProse)
    }

    const sidebar = layout.sidebar as Record<string, unknown> | undefined
    if (sidebar?.width) {
      assign(toVariableName(prefix, 'layout', 'sidebar', 'width'), sidebar.width)
    }
  }

  const border = (baseTokens as unknown as Record<string, unknown>).border as Record<string, Record<string, string>> | undefined
  if (border?.width) {
    Object.entries(border.width).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'border', 'width', key), value)
    })
  }

  if (border?.style) {
    Object.entries(border.style).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'border', 'style', key), value)
    })
  }

  Object.entries(baseTokens.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'radius', key), value)
  })

  const icons = (baseTokens as unknown as Record<string, unknown>).icons as Record<string, string> | undefined
  if (icons) {
    Object.entries(icons).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'icon', key), value)
    })
  }

  const aspectRatios = (baseTokens as unknown as Record<string, unknown>).aspectRatios as Record<string, string> | undefined
  if (aspectRatios) {
    Object.entries(aspectRatios).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'aspect-ratio', key), value)
    })
  }

  Object.entries(baseTokens.typography.families).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'font-family', key), value)
  })

  const typographyScale = baseTokens.typography?.scale ?? {}
  const fontScale = baseTokens.font

  if (fontScale && Object.keys(fontScale).length > 0) {
    Object.entries(fontScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, 'font', key, 'size'), entry.size)
      assign(toVariableName(prefix, 'font', key, 'line-height'), entry.lineHeight)
      assign(toVariableName(prefix, 'font', key, 'weight'), entry.weight)
    })
  } else {
    Object.entries(typographyScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, 'font', key, 'size'), entry.fontSize)
      assign(toVariableName(prefix, 'font', key, 'line-height'), entry.lineHeight)
      assign(toVariableName(prefix, 'font', key, 'weight'), entry.fontWeight)
    })
  }

  Object.entries(typographyScale).forEach(([key, entry]) => {
    const scaleEntry = entry as unknown as TypographyScaleEntry
    assign(toVariableName(prefix, 'font', key, 'letter-spacing'), scaleEntry.letterSpacing)
  })

  const assignRole = (rolePrefixParts: string[], entry: TypographyRoleEntry) => {
    assign(toVariableName(prefix, ...rolePrefixParts, 'family'), entry.fontFamily)
    assign(toVariableName(prefix, ...rolePrefixParts, 'size'), entry.fontSize)
    assign(toVariableName(prefix, ...rolePrefixParts, 'line-height'), entry.lineHeight)
    assign(toVariableName(prefix, ...rolePrefixParts, 'weight'), entry.fontWeight)
    assign(toVariableName(prefix, ...rolePrefixParts, 'letter-spacing'), entry.letterSpacing)
  }

  const heading = baseTokens.typography?.heading
  if (heading) {
    Object.entries(heading).forEach(([level, entry]) => {
      assignRole(['heading', level], entry)
    })
  }

  const body = baseTokens.typography?.body
  if (body) {
    assignRole(['body'], body)
  }

  Object.entries(baseTokens.shadows).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'shadow', key), value)
  })

  Object.entries(baseTokens.breakpoints).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'breakpoint', key), value)
  })

  Object.entries(baseTokens.zIndex).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'z-index', key), value)
  })

  Object.entries(baseTokens.transitions.duration).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'duration', key), value)
  })

  Object.entries(baseTokens.transitions.easing).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'easing', key), value)
  })

  Object.entries(baseTokens.opacity).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'opacity', key), value)
  })

  assign(toVariableName(prefix, 'focus-ring-width'), baseTokens.accessibility.focusRing.width)
  assign(toVariableName(prefix, 'focus-ring-offset'), baseTokens.accessibility.focusRing.offset)
  assign(toVariableName(prefix, 'focus-ring-style'), baseTokens.accessibility.focusRing.style)
  assign(toVariableName(prefix, 'min-touch-target'), baseTokens.accessibility.minTouchTarget)
  assign(toVariableName(prefix, 'min-text-size'), baseTokens.accessibility.minTextSize)
  assign(toVariableName(prefix, 'reduced-motion'), baseTokens.accessibility.reducedMotion)
  assign(toVariableName(prefix, 'forced-colors'), (baseTokens.accessibility as unknown as Record<string, unknown>).forcedColors)

  Object.entries(baseTokens.buttons).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, value]) => {
      assign(toVariableName(prefix, 'button', variant, state), value)
    })
  })

  Object.entries(baseTokens.forms).forEach(([state, properties]) => {
    Object.entries(properties).forEach(([prop, value]) => {
      if (value) assign(toVariableName(prefix, 'form', state, prop), value)
    })
  })

  if (baseTokens.animations) {
    Object.entries(baseTokens.animations as unknown as Record<string, AnimationEntry | Record<string, AnimationEntry>>).forEach(
      ([name, animation]) => {
        if (name === 'reducedMotion') {
          Object.entries(animation as Record<string, AnimationEntry>).forEach(([subName, subAnimation]) => {
            assign(toVariableName(prefix, 'animation', 'reduced-motion', subName, 'duration'), subAnimation.duration)
            assign(toVariableName(prefix, 'animation', 'reduced-motion', subName, 'easing'), subAnimation.easing)
            assign(toVariableName(prefix, 'animation', 'reduced-motion', subName, 'keyframes'), subAnimation.keyframes)
          })
        } else {
          const entry = animation as AnimationEntry
          assign(toVariableName(prefix, 'animation', name, 'duration'), entry.duration)
          assign(toVariableName(prefix, 'animation', name, 'easing'), entry.easing)
          assign(toVariableName(prefix, 'animation', name, 'keyframes'), entry.keyframes)
        }
      }
    )
  }

  return map
}

export const generateCssVariables = (tokens: SpectreTokens, options: CssVariableOptions = {}): string => {
  const selector = options.selector ?? DEFAULT_SELECTOR
  const prefix = options.prefix ?? DEFAULT_PREFIX
  const declarations = createCssVariableMap(tokens, { ...options, prefix })
  const mapLines = Object.entries(declarations).map(([name, value]) => `  ${name}: ${value};`)

  const defaultMode = tokens.modes?.default ?? {}
  const darkMode = tokens.modes?.dark ?? {}
  const surfaceAliases = tokens.surface ?? {}
  const textAliases = tokens.text ?? {}
  const componentAliases = tokens.component ?? {}
  const linkTokens = tokens.link ?? {}

  // `component.card`/`component.input` predate the Phase 4 P2 component
  // groups and keep the legacy `component-` segment in their variable name;
  // every group added since drops it (`--sp-select-bg`, not
  // `--sp-component-select-bg`).
  const componentVarParts = (group: string, kebabGroup: string, path: string[]): string[] =>
    LEGACY_COMPONENT_PREFIX_GROUPS.has(group) ? ['component', kebabGroup, ...path] : [kebabGroup, ...path]

  const baseLines: string[] = []
  const darkLines: string[] = []
  const addBase = (name: string, value?: string) => { if (value !== undefined) baseLines.push(`  ${name}: ${value};`) }
  const addDark = (name: string, value?: string) => { if (value !== undefined) darkLines.push(`  ${name}: ${value};`) }

  // Recursively derives every leaf path under `tokens.modes.default.<namespace>`
  // and `tokens.modes.dark.<namespace>`, unioned so a leaf present in only one
  // mode is still emitted. Each leaf resolves its base/dark CSS value from the
  // matching mode node, falling back to the opposite mode then the top-level
  // `tokens.<namespace>` alias — replacing what used to be a hand-maintained
  // per-component field list.
  const walkSemanticGroup = (
    namespace: 'surface' | 'text' | 'component',
    varPartsFor: (path: string[]) => string[],
    aliasSrc: unknown
  ): void => {
    const defaultNode = (defaultMode as Record<string, unknown>)[namespace]
    const darkNode = (darkMode as Record<string, unknown>)[namespace]
    const paths = new Set<string>()
    const collectPaths = (node: unknown, path: string[]): void => {
      if (node === undefined) return
      const leaf = resolveSemanticValue(node, tokens, [namespace, ...path].join('.'))
      if (leaf !== undefined) {
        paths.add(path.join('.'))
        return
      }
      if (isPlainObject(node)) {
        Object.keys(node).forEach((key) => collectPaths((node as Record<string, unknown>)[key], [...path, key]))
      }
    }
    collectPaths(defaultNode, [])
    collectPaths(darkNode, [])
    collectPaths(aliasSrc, [])

    paths.forEach((joinedPath) => {
      const path = joinedPath.split('.')
      const varName = toVariableName(prefix, ...varPartsFor(path))
      const aliasCandidate = getPath(aliasSrc, path)
      const baseValue = pickSemantic(tokens, getPath(defaultNode, path), aliasCandidate)
      const darkValue = pickSemantic(tokens, getPath(darkNode, path), getPath(defaultNode, path), aliasCandidate)
      addBase(varName, baseValue)
      addDark(varName, darkValue)
    })
  }

  const kebabPathSegment = (segment: string): string =>
    formatKey(segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2'))

  walkSemanticGroup(
    'surface',
    (path) => ['surface', ...path.map(kebabPathSegment)],
    surfaceAliases
  )

  walkSemanticGroup(
    'text',
    (path) => {
      const [scope, ...rest] = path as [string, ...string[]]
      return ['text', ...kebabPathSegment(scope).split('-'), ...rest.map(kebabPathSegment)]
    },
    textAliases
  )

  walkSemanticGroup(
    'component',
    (path) => {
      const [group, ...rest] = path as [string, ...string[]]
      return componentVarParts(group, kebabPathSegment(group), rest.map(kebabPathSegment))
    },
    componentAliases
  )

  Object.entries(linkTokens).forEach(([key, value]) => {
    const varName = toVariableName(prefix, 'link', key)
    const resolved = pickSemantic(tokens, value)
    addBase(varName, resolved)
    addDark(varName, resolved)
  })

  const rootBlock = `${selector} {\n${[...baseLines, ...mapLines].join('\n')}\n}`
  const darkBlock = `${selector}[data-spectre-theme="dark"] {\n${darkLines.join('\n')}\n}`

  return `${rootBlock}\n${darkBlock}\n`
}
