import type {
  ComponentBadgeTokens,
  ComponentIconBoxTokens,
  CssVariableMap,
  CssVariableOptions,
  SpectreTokens,
  Tokens,
  TypographyScaleEntry
} from './types'

const DEFAULT_PREFIX = 'sp'
export const DEFAULT_SELECTOR = ':root'

const formatKey = (segment: string): string =>
  segment
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

const toVariableName = (prefix: string, ...parts: string[]): string => {
  const filtered = parts.filter(Boolean).map(formatKey)
  return `--${prefix}-${filtered.join('-')}`
}

const BADGE_VARIANTS: Array<{ variant: string; bgKey: keyof ComponentBadgeTokens; textKey: keyof ComponentBadgeTokens }> = [
  { variant: 'neutral', bgKey: 'neutralBg', textKey: 'neutralText' },
  { variant: 'info', bgKey: 'infoBg', textKey: 'infoText' },
  { variant: 'success', bgKey: 'successBg', textKey: 'successText' },
  { variant: 'warning', bgKey: 'warningBg', textKey: 'warningText' },
  { variant: 'danger', bgKey: 'dangerBg', textKey: 'dangerText' }
]

const ICON_BOX_FIELDS: Array<{ name: string; tokenKey: keyof ComponentIconBoxTokens }> = [
  { name: 'bg', tokenKey: 'bg' },
  { name: 'border', tokenKey: 'border' },
  { name: 'icon-default', tokenKey: 'iconDefault' },
  { name: 'icon-success', tokenKey: 'iconSuccess' },
  { name: 'icon-warning', tokenKey: 'iconWarning' },
  { name: 'icon-danger', tokenKey: 'iconDanger' }
]

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

const resolveSemanticValue = (value: unknown, tokens: SpectreTokens): string | undefined => {
  if (typeof value === 'string' || typeof value === 'number') {
    return resolveValue(tokens, value)
  }
  if (value && typeof value === 'object' && 'value' in (value as Record<string, unknown>)) {
    return resolveValue(tokens, (value as Record<string, unknown>).value)
  }
  return undefined
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

  Object.entries(baseTokens.colors).forEach(([group, scale]) => {
    if (typeof scale === 'string' || typeof scale === 'number') {
      assign(toVariableName(prefix, 'color', group), scale)
      return
    }

    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, 'color', group, step), value)
    })
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
  }

  const border = (baseTokens as unknown as Record<string, unknown>).border as Record<string, Record<string, string>> | undefined
  if (border?.width) {
    Object.entries(border.width).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'border', 'width', key), value)
    })
  }

  Object.entries(baseTokens.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'radius', key), value)
  })

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

  assign(toVariableName(prefix, 'text', 'on', 'page', 'default'), tokens.text.onPage.default)
  assign(toVariableName(prefix, 'text', 'on', 'page', 'muted'), tokens.text.onPage.muted)
  assign(toVariableName(prefix, 'text', 'on', 'page', 'subtle'), tokens.text.onPage.subtle)
  assign(toVariableName(prefix, 'text', 'on', 'page', 'meta'), tokens.text.onPage.meta)
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'default'), tokens.text.onSurface.default)
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'muted'), tokens.text.onSurface.muted)
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'subtle'), tokens.text.onSurface.subtle)
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'meta'), tokens.text.onSurface.meta)

  const badge = tokens.component?.badge
  if (badge) {
    BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
      assign(toVariableName(prefix, 'badge', variant, 'bg'), badge[bgKey])
      assign(toVariableName(prefix, 'badge', variant, 'text'), badge[textKey])
    })
  }

  const iconBox = tokens.component?.iconBox
  if (iconBox) {
    ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
      assign(toVariableName(prefix, 'icon-box', name), iconBox[tokenKey])
    })
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
    Object.entries(baseTokens.animations as unknown as Record<string, { duration: string; easing: string; keyframes: string }>).forEach(([name, animation]) => {
      assign(toVariableName(prefix, 'animation', name, 'duration'), animation.duration)
      assign(toVariableName(prefix, 'animation', name, 'easing'), animation.easing)
      assign(toVariableName(prefix, 'animation', name, 'keyframes'), animation.keyframes)
    })
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

  type SemanticEntry = {
    varParts: string[]
    modePath: string[]
    aliasSrc?: unknown
    aliasPath?: string[]
  }

  const semanticEntries: SemanticEntry[] = [
    { varParts: ['surface', 'page'],      modePath: ['surface', 'page'],      aliasSrc: surfaceAliases, aliasPath: ['page'] },
    { varParts: ['surface', 'card'],      modePath: ['surface', 'card'],      aliasSrc: surfaceAliases, aliasPath: ['card'] },
    { varParts: ['surface', 'input'],     modePath: ['surface', 'input'],     aliasSrc: surfaceAliases, aliasPath: ['input'] },
    { varParts: ['surface', 'overlay'],   modePath: ['surface', 'overlay'],   aliasSrc: surfaceAliases, aliasPath: ['overlay'] },
    { varParts: ['surface', 'alternate'], modePath: ['surface', 'alternate'] },
    { varParts: ['surface', 'hero'],      modePath: ['surface', 'hero'],      aliasSrc: surfaceAliases, aliasPath: ['hero'] },
    { varParts: ['text', 'on', 'page', 'default'], modePath: ['text', 'onPage', 'default'], aliasSrc: textAliases, aliasPath: ['onPage', 'default'] },
    { varParts: ['text', 'on', 'page', 'muted'],   modePath: ['text', 'onPage', 'muted'],   aliasSrc: textAliases, aliasPath: ['onPage', 'muted'] },
    { varParts: ['text', 'on', 'page', 'subtle'],  modePath: ['text', 'onPage', 'subtle'],  aliasSrc: textAliases, aliasPath: ['onPage', 'subtle'] },
    { varParts: ['text', 'on', 'page', 'meta'],    modePath: ['text', 'onPage', 'meta'],    aliasSrc: textAliases, aliasPath: ['onPage', 'meta'] },
    { varParts: ['text', 'on', 'page', 'brand'],   modePath: ['text', 'onPage', 'brand'],   aliasSrc: textAliases, aliasPath: ['onPage', 'brand'] },
    { varParts: ['text', 'on', 'surface', 'default'], modePath: ['text', 'onSurface', 'default'], aliasSrc: textAliases, aliasPath: ['onSurface', 'default'] },
    { varParts: ['text', 'on', 'surface', 'muted'],   modePath: ['text', 'onSurface', 'muted'],   aliasSrc: textAliases, aliasPath: ['onSurface', 'muted'] },
    { varParts: ['text', 'on', 'surface', 'subtle'],  modePath: ['text', 'onSurface', 'subtle'],  aliasSrc: textAliases, aliasPath: ['onSurface', 'subtle'] },
    { varParts: ['text', 'on', 'surface', 'meta'],    modePath: ['text', 'onSurface', 'meta'],    aliasSrc: textAliases, aliasPath: ['onSurface', 'meta'] },
    { varParts: ['text', 'on', 'surface', 'brand'],   modePath: ['text', 'onSurface', 'brand'],   aliasSrc: textAliases, aliasPath: ['onSurface', 'brand'] },
    { varParts: ['component', 'card', 'text'],         modePath: ['component', 'card', 'text'],         aliasSrc: componentAliases, aliasPath: ['card', 'text'] },
    { varParts: ['component', 'card', 'text-muted'],   modePath: ['component', 'card', 'textMuted'],    aliasSrc: componentAliases, aliasPath: ['card', 'textMuted'] },
    { varParts: ['component', 'input', 'text'],        modePath: ['component', 'input', 'text'],        aliasSrc: componentAliases, aliasPath: ['input', 'text'] },
    { varParts: ['component', 'input', 'placeholder'], modePath: ['component', 'input', 'placeholder'], aliasSrc: componentAliases, aliasPath: ['input', 'placeholder'] },
    { varParts: ['button', 'text', 'default'],        modePath: ['component', 'button', 'textDefault'],    aliasSrc: componentAliases, aliasPath: ['button', 'textDefault'] },
    { varParts: ['button', 'text', 'on', 'primary'],  modePath: ['component', 'button', 'textOnPrimary'],  aliasSrc: componentAliases, aliasPath: ['button', 'textOnPrimary'] },
    ...BADGE_VARIANTS.flatMap(({ variant, bgKey, textKey }) => [
      { varParts: ['badge', variant, 'bg'],   modePath: ['component', 'badge', bgKey],   aliasSrc: componentAliases, aliasPath: ['badge', bgKey] },
      { varParts: ['badge', variant, 'text'], modePath: ['component', 'badge', textKey], aliasSrc: componentAliases, aliasPath: ['badge', textKey] },
    ]),
    ...ICON_BOX_FIELDS.map(({ name, tokenKey }) => ({
      varParts: ['icon-box', name], modePath: ['component', 'iconBox', tokenKey], aliasSrc: componentAliases, aliasPath: ['iconBox', tokenKey],
    })),
  ]

  const baseLines: string[] = []
  const darkLines: string[] = []
  const addBase = (name: string, value?: string) => { if (value !== undefined) baseLines.push(`  ${name}: ${value};`) }
  const addDark = (name: string, value?: string) => { if (value !== undefined) darkLines.push(`  ${name}: ${value};`) }

  semanticEntries.forEach(({ varParts, modePath, aliasSrc, aliasPath }) => {
    const varName = toVariableName(prefix, ...varParts)
    const aliasCandidate = aliasSrc && aliasPath ? [getPath(aliasSrc, aliasPath)] : []
    addBase(varName, pickSemantic(tokens, getPath(defaultMode, modePath), ...aliasCandidate))
    addDark(varName, pickSemantic(tokens, getPath(darkMode, modePath), getPath(defaultMode, modePath), ...aliasCandidate))
  })

  const rootBlock = `${selector} {\n${[...baseLines, ...mapLines].join('\n')}\n}`
  const darkBlock = `${selector}[data-spectre-theme="dark"] {\n${darkLines.join('\n')}\n}`

  return `${rootBlock}\n${darkBlock}\n`
}
