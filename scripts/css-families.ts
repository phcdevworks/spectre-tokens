import { DEFAULT_SELECTOR } from '../src/css'
import { generateCssVariables, tokens } from '../src/index'

// A family is the unit a downstream recipe or stylesheet consumes: every
// published `--sp-*` variable belongs to exactly one, so DOWNSTREAM_PARITY.md
// and `audit:parity` can say which token groups still have no consumer.

export type FamilySection = 'Foundations' | 'Semantic roles' | 'Typography roles' | 'Controls' | 'Components'

export const SECTION_ORDER: FamilySection[] = [
  'Foundations',
  'Semantic roles',
  'Typography roles',
  'Controls',
  'Components'
]

type FamilyDefinition = {
  id: string
  section: FamilySection
  prefixes: string[]
  sources: string[]
  note?: string
}

export type CssFamily = FamilyDefinition & {
  variables: string[]
  modeAware: Set<string>
  values: Map<string, string>
}

// Mirrors src/css.ts: card/input keep the legacy `component-` segment.
const LEGACY_COMPONENT_PREFIX_GROUPS = new Set(['card', 'input'])

const kebab = (segment: string): string => segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const STATIC_FAMILIES: FamilyDefinition[] = [
  { id: 'color', section: 'Foundations', prefixes: ['color'], sources: ['colors'] },
  { id: 'space', section: 'Foundations', prefixes: ['space'], sources: ['space'] },
  { id: 'layout-container', section: 'Foundations', prefixes: ['layout-container'], sources: ['layout.container'] },
  { id: 'layout-section', section: 'Foundations', prefixes: ['layout-section'], sources: ['layout.section'] },
  { id: 'layout-stack', section: 'Foundations', prefixes: ['layout-stack'], sources: ['layout.stack'] },
  { id: 'layout-sidebar', section: 'Foundations', prefixes: ['layout-sidebar'], sources: ['layout.sidebar'] },
  { id: 'radius', section: 'Foundations', prefixes: ['radius'], sources: ['radii'] },
  { id: 'border', section: 'Foundations', prefixes: ['border'], sources: ['border'] },
  { id: 'shadow', section: 'Foundations', prefixes: ['shadow'], sources: ['shadows'] },
  { id: 'opacity', section: 'Foundations', prefixes: ['opacity'], sources: ['opacity'] },
  { id: 'z-index', section: 'Foundations', prefixes: ['z-index'], sources: ['zIndex'] },
  {
    id: 'breakpoint',
    section: 'Foundations',
    prefixes: ['breakpoint'],
    sources: ['breakpoints'],
    note: 'CSS does not allow `var()` in `@media` queries; consume these by value.'
  },
  {
    id: 'motion',
    section: 'Foundations',
    prefixes: ['duration', 'easing', 'animation'],
    sources: ['transitions', 'animations']
  },
  { id: 'tracking', section: 'Foundations', prefixes: ['tracking'], sources: ['tracking'] },
  { id: 'icon', section: 'Foundations', prefixes: ['icon'], sources: ['icons'] },
  { id: 'aspect-ratio', section: 'Foundations', prefixes: ['aspect-ratio'], sources: ['aspectRatios'] },
  { id: 'font-family', section: 'Foundations', prefixes: ['font-family'], sources: ['typography.families'] },
  { id: 'font-scale', section: 'Foundations', prefixes: ['font'], sources: ['font', 'typography.scale'] },
  {
    id: 'accessibility',
    section: 'Foundations',
    prefixes: ['focus-ring', 'min-touch-target', 'min-text-size', 'reduced-motion', 'forced-colors'],
    sources: ['accessibility']
  },
  { id: 'surface', section: 'Semantic roles', prefixes: ['surface'], sources: ['surface', 'modes.*.surface'] },
  { id: 'text', section: 'Semantic roles', prefixes: ['text'], sources: ['text', 'modes.*.text'] },
  { id: 'link', section: 'Semantic roles', prefixes: ['link'], sources: ['link'] },
  { id: 'heading', section: 'Typography roles', prefixes: ['heading'], sources: ['typography.heading'] },
  { id: 'body', section: 'Typography roles', prefixes: ['body'], sources: ['typography.body'] },
  { id: 'display', section: 'Typography roles', prefixes: ['display'], sources: ['typography.display'] },
  { id: 'lead', section: 'Typography roles', prefixes: ['lead'], sources: ['typography.lead'] },
  {
    id: 'button',
    section: 'Controls',
    prefixes: ['button'],
    sources: ['buttons', 'component.button', 'modes.*.component.button']
  },
  { id: 'form', section: 'Controls', prefixes: ['form'], sources: ['forms', 'modes.*.forms'] }
]

const componentFamilies = (): FamilyDefinition[] =>
  Object.keys(tokens.component)
    .filter((group) => group !== 'button')
    .map((group) => ({
      id: kebab(group),
      section: 'Components' as const,
      prefixes: [LEGACY_COMPONENT_PREFIX_GROUPS.has(group) ? `component-${kebab(group)}` : kebab(group)],
      sources: [`component.${group}`, `modes.*.component.${group}`]
    }))

const declarations = (block: string): Map<string, string> =>
  new Map(Array.from(block.matchAll(/(--sp-[a-z0-9-]+):\s*([^;]+);/g), (match) => [match[1]!, match[2]!.trim()]))

export const collectCssFamilies = (): CssFamily[] => {
  const css = generateCssVariables(tokens)
  const darkSelector = `${DEFAULT_SELECTOR}[data-spectre-theme="dark"] {`
  const darkStart = css.indexOf(darkSelector)
  const rootVars = declarations(css.slice(0, darkStart))
  const darkVars = declarations(css.slice(darkStart))

  const families: CssFamily[] = [...STATIC_FAMILIES, ...componentFamilies()].map((definition) => ({
    ...definition,
    variables: [],
    modeAware: new Set<string>(),
    values: new Map<string, string>()
  }))

  const unclassified: string[] = []
  rootVars.forEach((value, name) => {
    const bare = name.slice('--sp-'.length)
    let best: { family: CssFamily; length: number } | undefined
    families.forEach((family) => {
      family.prefixes.forEach((prefix) => {
        const matches = bare === prefix || bare.startsWith(`${prefix}-`)
        if (matches && (!best || prefix.length > best.length)) best = { family, length: prefix.length }
      })
    })
    if (!best) {
      unclassified.push(name)
      return
    }
    best.family.variables.push(name)
    best.family.values.set(name, value)
    if (darkVars.has(name)) best.family.modeAware.add(name)
  })

  if (unclassified.length > 0) {
    throw new Error(
      `Published CSS variables with no downstream parity family (add one in scripts/css-families.ts):\n${unclassified.join('\n')}`
    )
  }

  const empty = families.filter((family) => family.variables.length === 0)
  if (empty.length > 0) {
    throw new Error(`Downstream parity families that match no published variable: ${empty.map((f) => f.id).join(', ')}`)
  }

  return families
}
