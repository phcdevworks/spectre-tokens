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

const kebabCase = (segment: string): string =>
  formatKey(segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2'))

// spacing scales that `layout.responsive.<breakpoint>` may override
const LAYOUT_SCALES: Array<{ path: [string, string]; varParts: string[] }> = [
  { path: ['section', 'padding'], varParts: ['section', 'padding'] },
  { path: ['section', 'gap'], varParts: ['section', 'gap'] },
  { path: ['stack', 'gap'], varParts: ['stack', 'gap'] },
  { path: ['container', 'paddingInline'], varParts: ['container', 'padding-inline'] }
]

const layoutScale = (node: unknown, [group, scale]: [string, string]): Record<string, string> => {
  const groupNode = isPlainObject(node) ? node[group] : undefined
  const scaleNode = isPlainObject(groupNode) ? groupNode[scale] : undefined
  return isPlainObject(scaleNode) ? (scaleNode as Record<string, string>) : {}
}

const layoutResponsive = (layout: unknown): Record<string, unknown> => {
  const responsive = isPlainObject(layout) ? layout.responsive : undefined
  return isPlainObject(responsive) ? responsive : {}
}

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

    LAYOUT_SCALES.forEach(({ path, varParts }) => {
      Object.entries(layoutScale(layout, path)).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', ...varParts, key), value)
      })
    })

    // hero steps alias section padding steps; emitting var() instead of the
    // resolved literal keeps them following the responsive @media override
    const hero = layout.hero
    if (hero) {
      Object.entries(hero).forEach(([edge, steps]) => {
        Object.entries(steps).forEach(([key, value]) => {
          const step = value.match(/^\{layout\.section\.padding\.([^}]+)\}$/)?.[1]
          assign(
            toVariableName(prefix, 'layout', 'hero', kebabCase(edge), key),
            step ? `var(${toVariableName(prefix, 'layout', 'section', 'padding', step)})` : value
          )
        })
      })
    }

    Object.entries(layoutResponsive(layout)).forEach(([breakpoint, scales]) => {
      LAYOUT_SCALES.forEach(({ path, varParts }) => {
        Object.entries(layoutScale(scales, path)).forEach(([key, value]) => {
          assign(toVariableName(prefix, 'layout', 'responsive', breakpoint, ...varParts, key), value)
        })
      })
    })

    const container = layout.container as Record<string, unknown> | undefined
    if (container?.maxWidth) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width'), container.maxWidth)
    }
    if (container?.maxWidthProse) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width-prose'), container.maxWidthProse)
    }
    if (container?.maxWidthWide) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width-wide'), container.maxWidthWide)
    }

    const sidebar = layout.sidebar as Record<string, unknown> | undefined
    if (sidebar?.width) {
      assign(toVariableName(prefix, 'layout', 'sidebar', 'width'), sidebar.width)
    }
  }

  const control = (baseTokens as unknown as Record<string, unknown>).control
  if (isPlainObject(control)) {
    const assignControlSizes = (sizes: Record<string, unknown>, parts: string[]) => {
      Object.entries(sizes).forEach(([size, fields]) => {
        if (size === 'compact' || !isPlainObject(fields)) return
        Object.entries(fields).forEach(([field, value]) => {
          assign(toVariableName(prefix, 'control', ...parts, size, kebabCase(field)), value)
        })
      })
    }
    assignControlSizes(control, [])
    if (isPlainObject(control.compact)) assignControlSizes(control.compact, ['compact'])
  }

  // elevation levels point at the shadow, surface, and z-index variables they
  // pair, so the surface keeps following the active color mode
  const elevation = (baseTokens as unknown as Record<string, unknown>).elevation
  if (isPlainObject(elevation)) {
    const elevationVarParts: Record<string, string[]> = { shadows: ['shadow'], surface: ['surface'], zIndex: ['z-index'] }
    Object.entries(elevation).forEach(([level, fields]) => {
      Object.entries(fields as Record<string, string>).forEach(([field, value]) => {
        const [namespace, ...rest] = value.match(/^\{([^}]+)\}$/)?.[1]?.split('.') ?? []
        const varParts = namespace ? elevationVarParts[namespace] : undefined
        assign(
          toVariableName(prefix, 'elevation', level, kebabCase(field)),
          varParts ? `var(${toVariableName(prefix, ...varParts, ...rest.map(kebabCase))})` : value
        )
      })
    })
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

  const tracking = (baseTokens as unknown as Record<string, unknown>).tracking as Record<string, string> | undefined
  if (tracking) {
    Object.entries(tracking).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'tracking', key), value)
    })
  }

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

  const display = baseTokens.typography?.display
  if (display) {
    Object.entries(display).forEach(([level, entry]) => {
      assignRole(['display', level], entry)
    })
  }

  const lead = baseTokens.typography?.lead
  if (lead) {
    assignRole(['lead'], lead)
  }

  Object.entries(baseTokens.shadows).forEach(([key, value]) => {
    if (typeof value === 'string') {
      assign(toVariableName(prefix, 'shadow', key), value)
      return
    }
    Object.entries(value as Record<string, string>).forEach(([nestedKey, nestedValue]) => {
      assign(toVariableName(prefix, 'shadow', key, nestedKey), nestedValue)
    })
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

  const defaultMode = tokens.modes?.default ?? {}
  const darkMode = tokens.modes?.dark ?? {}
  const highContrastMode = (tokens.modes as Record<string, unknown> | undefined)?.highContrast ?? {}
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
  const highContrastLines: string[] = []
  const modeScopedNames = new Set<string>()
  const addBase = (name: string, value?: string) => {
    if (value === undefined) return
    modeScopedNames.add(name)
    baseLines.push(`  ${name}: ${value};`)
  }
  const addDark = (name: string, value?: string) => { if (value !== undefined) darkLines.push(`  ${name}: ${value};`) }
  const addHighContrast = (name: string, value?: string) => {
    if (value !== undefined) highContrastLines.push(`  ${name}: ${value};`)
  }

  // Recursively derives every leaf path under `tokens.modes.<mode>.<namespace>`
  // for default, dark, and highContrast, unioned so a leaf present in only one
  // mode is still emitted. Each leaf resolves its CSS value per mode from the
  // matching mode node, falling back to the default mode then the top-level
  // `tokens.<namespace>` alias — replacing what used to be a hand-maintained
  // per-component field list.
  const walkSemanticGroup = (
    namespace: 'surface' | 'text' | 'component' | 'forms',
    varPartsFor: (path: string[]) => string[],
    aliasSrc: unknown
  ): void => {
    const defaultNode = (defaultMode as Record<string, unknown>)[namespace]
    const darkNode = (darkMode as Record<string, unknown>)[namespace]
    const highContrastNode = (highContrastMode as Record<string, unknown>)[namespace]
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
    collectPaths(highContrastNode, [])
    collectPaths(aliasSrc, [])

    paths.forEach((joinedPath) => {
      const path = joinedPath.split('.')
      const varName = toVariableName(prefix, ...varPartsFor(path))
      const aliasCandidate = getPath(aliasSrc, path)
      const baseValue = pickSemantic(tokens, getPath(defaultNode, path), aliasCandidate)
      const darkValue = pickSemantic(tokens, getPath(darkNode, path), getPath(defaultNode, path), aliasCandidate)
      const highContrastValue = pickSemantic(tokens, getPath(highContrastNode, path), getPath(defaultNode, path), aliasCandidate)
      addBase(varName, baseValue)
      addDark(varName, darkValue)
      addHighContrast(varName, highContrastValue)
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

  // only the mode-aware subset of `forms` lives under `modes.*.forms`
  // (default.* in every mode, valid/invalid in highContrast only); the rest
  // (border, hover, focus, ...) stays cascade-only in :root
  walkSemanticGroup(
    'forms',
    (path) => ['form', ...path.map(kebabPathSegment)],
    undefined
  )

  const highContrastLink = getPath(highContrastMode, ['link'])
  Object.entries(linkTokens).forEach(([key, value]) => {
    const varName = toVariableName(prefix, 'link', kebabPathSegment(key))
    const resolved = pickSemantic(tokens, value)
    addBase(varName, resolved)
    addDark(varName, resolved)
    addHighContrast(varName, pickSemantic(tokens, getPath(highContrastLink, [key]), value))
  })

  // `buttons` stays cascade-only in :root and dark; high-contrast mode alone
  // overrides it, to lift every button text pair to 7:1
  const highContrastButtons = getPath(highContrastMode, ['buttons'])
  if (isPlainObject(highContrastButtons)) {
    Object.entries(highContrastButtons).forEach(([variant, states]) => {
      Object.entries(states as Record<string, unknown>).forEach(([state, value]) => {
        addHighContrast(toVariableName(prefix, 'button', variant, state), pickSemantic(tokens, value))
      })
    })
  }

  const mapLines = Object.entries(declarations)
    .filter(([name]) => !modeScopedNames.has(name))
    .map(([name, value]) => `  ${name}: ${value};`)
  const rootBlock = `${selector} {\n${[...baseLines, ...mapLines].join('\n')}\n}`

  const toEntries = (lines: string[]): Map<string, string> =>
    new Map(
      lines.map((line) => {
        const separator = line.indexOf(':')
        return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/;$/, '')]
      })
    )
  const baseEntries = toEntries(baseLines)
  const darkEntries = toEntries(darkLines)
  const highContrastEntries = toEntries(highContrastLines)
  const rootValues = new Map([...Object.entries(declarations), ...baseEntries])

  // A mode block can apply to any element, not just the root, so each one
  // declares every variable that varies by mode — a light section nested in a
  // dark or high-contrast page must reset all of them, including the
  // high-contrast-only button/link/form overrides.
  const modeVarying = [...new Set([...baseEntries.keys(), ...darkEntries.keys(), ...highContrastEntries.keys()])]
  const modeVaryingSet = new Set(modeVarying)
  // A var() in a custom property resolves on the element that declares it, so
  // :root values that read a mode-varying variable (the elevation surfaces)
  // are re-declared in each mode block to re-resolve inside a scoped section.
  const dependentLines = [...rootValues]
    .filter(
      ([name, value]) =>
        !modeVaryingSet.has(name) &&
        Array.from(value.matchAll(/var\((--[a-z0-9-]+)/g)).some((match) => modeVaryingSet.has(match[1]!))
    )
    .map(([name, value]) => `${name}: ${value};`)
  const modeLines = (entries: Map<string, string>): string[] => [
    ...modeVarying.flatMap((name) => {
      const value = entries.get(name) ?? rootValues.get(name)
      return value === undefined ? [] : [`${name}: ${value};`]
    }),
    ...dependentLines
  ]

  const themeSelectors = (theme: string): string[] => [
    `${selector}[data-spectre-theme="${theme}"]`,
    `${selector} [data-spectre-theme="${theme}"]`
  ]
  const modeBlock = (selectors: string[], lines: string[], indent = ''): string =>
    `${indent}${selectors.join(`,\n${indent}`)} {\n${lines.map((line) => `${indent}  ${line}`).join('\n')}\n${indent}}`

  const darkBlock = modeBlock(themeSelectors('dark'), modeLines(darkEntries))
  const highContrastBlock = modeBlock(themeSelectors('high-contrast'), modeLines(highContrastEntries))
  // `light` restores the default values inside a dark or high-contrast
  // ancestor; `system` takes them too, until the media query below applies
  const lightBlock = modeBlock([...themeSelectors('light'), ...themeSelectors('system')], modeLines(baseEntries))
  const systemDarkBlock = `@media (prefers-color-scheme: dark) {\n${modeBlock(themeSelectors('system'), modeLines(darkEntries), '  ')}\n}`

  // compact density swaps every default control size for its compact
  // counterpart on any element carrying the attribute, not only the root
  const control = (tokens as unknown as Record<string, unknown>).control
  const compact = isPlainObject(control) && isPlainObject(control.compact) ? control.compact : {}
  const densityLines = Object.entries(compact).flatMap(([size, fields]) =>
    Object.keys(fields as Record<string, unknown>).map((field) => {
      const name = toVariableName(prefix, 'control', size, kebabCase(field))
      return `  ${name}: var(${toVariableName(prefix, 'control', 'compact', size, kebabCase(field))});`
    })
  )
  const densityBlocks = densityLines.length > 0 ? [`[data-spectre-density="compact"] {\n${densityLines.join('\n')}\n}`] : []

  const breakpoints = tokens.breakpoints as unknown as Record<string, string>
  const responsiveBlocks = Object.entries(layoutResponsive(tokens.layout)).map(([breakpoint, scales]) => {
    const minWidth = breakpoints[breakpoint]
    if (minWidth === undefined) {
      throw new Error(`layout.responsive.${breakpoint} does not name a breakpoints entry`)
    }
    const lines = LAYOUT_SCALES.flatMap(({ path, varParts }) =>
      Object.keys(layoutScale(scales, path)).map((key) => {
        const name = toVariableName(prefix, 'layout', ...varParts, key)
        const source = toVariableName(prefix, 'layout', 'responsive', breakpoint, ...varParts, key)
        return `    ${name}: var(${source});`
      })
    )
    return `@media (min-width: ${resolveValue(tokens, minWidth)}) {\n  ${selector} {\n${lines.join('\n')}\n  }\n}`
  })

  return (
    [rootBlock, darkBlock, highContrastBlock, lightBlock, systemDarkBlock, ...densityBlocks, ...responsiveBlocks].join(
      '\n'
    ) + '\n'
  )
}
