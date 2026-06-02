import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import jitiFactory from 'jiti'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
const fixtureDir = join(repoRoot, 'example/integration-fixture')

const tailwindConfigPath = join(fixtureDir, 'tailwind.config.ts')
const layerCssPath = join(fixtureDir, 'layer.css')
const componentsPath = join(fixtureDir, 'components.ts')

const packageEsm = await import('@phcdevworks/spectre-tokens')
const tokens = packageEsm.default

const fail = (message: string): never => {
  throw new Error(`Integration fixture failed: ${message}`)
}

// ─── 1. Tailwind preset composition ──────────────────────────────────────────

const jiti = jitiFactory(import.meta.url, { moduleCache: false })
const rawConfig = jiti(tailwindConfigPath)
const config = rawConfig.default ?? rawConfig

if (!Array.isArray(config.presets) || config.presets.length === 0) {
  fail('Integration Tailwind config must declare presets.')
}

const preset = config.presets[0]
const presetColors = preset?.theme?.colors as Record<string, unknown> | undefined

if (!presetColors?.brand || typeof presetColors.brand !== 'object') {
  fail('Preset brand color scale is missing from the integration Tailwind config presets.')
}

if (typeof (presetColors.brand as Record<string, unknown>)['500'] !== 'string') {
  fail('Preset brand.500 is not a string — preset theme may not have loaded correctly.')
}

if (!presetColors?.neutral || !presetColors?.info) {
  fail('Preset neutral and info color scales must be present alongside consumer extensions.')
}

const consumerExtend = config.theme?.extend as Record<string, unknown> | undefined

if (!consumerExtend?.colors || typeof consumerExtend.colors !== 'object') {
  fail('Consumer Tailwind extend.colors is missing.')
}

const consumerColors = consumerExtend.colors as Record<string, unknown>

if (typeof consumerColors['ui-primary'] !== 'string') {
  fail('Consumer ui-primary color is missing from extend.colors.')
}

if (typeof consumerColors['ui-surface'] !== 'string') {
  fail('Consumer ui-surface color is missing from extend.colors.')
}

// Consumer extend must not shadow any top-level preset color group
const presetColorKeys = new Set(Object.keys(presetColors))
const consumerColorKeys = Object.keys(consumerColors)
const collisions = consumerColorKeys.filter((k) => presetColorKeys.has(k))
if (collisions.length > 0) {
  fail(`Consumer extend.colors shadows preset color keys: ${collisions.join(', ')}. Use unique consumer-namespaced keys (e.g. ui-*).`)
}

// Consumer extend must not shadow preset spacing keys
const presetSpacing = preset?.theme?.spacing as Record<string, unknown> | undefined
const consumerSpacing = (consumerExtend?.spacing ?? {}) as Record<string, unknown>
if (presetSpacing) {
  const spacingCollisions = Object.keys(consumerSpacing).filter((k) => k in presetSpacing)
  if (spacingCollisions.length > 0) {
    fail(`Consumer extend.spacing shadows preset spacing keys: ${spacingCollisions.join(', ')}. Use unique consumer-namespaced keys (e.g. ui-*).`)
  }
}

// Consumer extend must not shadow preset borderRadius keys
const presetRadii = preset?.theme?.borderRadius as Record<string, unknown> | undefined
const consumerRadii = (consumerExtend?.borderRadius ?? {}) as Record<string, unknown>
if (presetRadii) {
  const radiiCollisions = Object.keys(consumerRadii).filter((k) => k in presetRadii)
  if (radiiCollisions.length > 0) {
    fail(`Consumer extend.borderRadius shadows preset keys: ${radiiCollisions.join(', ')}. Use unique consumer-namespaced keys (e.g. ui-*).`)
  }
}

// ─── 2. CSS variable co-existence ────────────────────────────────────────────

const css = readFileSync(layerCssPath, 'utf8')

if (!css.includes(`@import '@phcdevworks/spectre-tokens/index.css'`)) {
  fail("CSS layer must import the package via @import '@phcdevworks/spectre-tokens/index.css'.")
}

if (!css.includes('@layer')) {
  fail('CSS layer must use @layer to declare cascade order.')
}

const spVarUsages = (css.match(/var\(--sp-/g) ?? []).length
if (spVarUsages < 5) {
  fail(`CSS layer must reference at least 5 --sp-* variables (found ${spVarUsages}). The fixture must exercise real integration.`)
}

if (!css.includes('--ui-')) {
  fail('CSS layer must define consumer --ui-* custom properties to demonstrate namespace co-existence.')
}

// Consumer CSS layer must not redefine --sp-* properties (only use them as values)
const spPropertyDefs = [...css.matchAll(/--sp-[\w-]+\s*:/g)]
if (spPropertyDefs.length > 0) {
  fail(`CSS layer must not redefine --sp-* variables. Found: ${spPropertyDefs.map((m) => m[0]).join(', ')}`)
}

// Verify --ui-* and --sp-* namespaces share no names
const uiVarNames = new Set([...css.matchAll(/--ui-([\w-]+)\s*:/g)].map((m) => m[1]))
const spVarNames = new Set([...css.matchAll(/var\(--sp-([\w-]+)/g)].map((m) => m[1]))
const namespaceCollisions = [...uiVarNames].filter((n) => spVarNames.has(n))
if (namespaceCollisions.length > 0) {
  fail(`--ui-* and --sp-* namespaces share names: ${namespaceCollisions.join(', ')}. Consumer vars must not duplicate package var names.`)
}

// ─── 3. Component fixture — multi-namespace token consumption ─────────────────

const components = await import(pathToFileURL(componentsPath).href)

if (typeof components.buttonStyles?.primary?.backgroundColor !== 'string') {
  fail('buttonStyles.primary.backgroundColor is missing or not a string.')
}

if (components.buttonStyles.primary.backgroundColor !== tokens.buttons.primary.bg) {
  fail('buttonStyles.primary.backgroundColor drifted from tokens.buttons.primary.bg.')
}

if (components.buttonStyles.primary.color !== tokens.buttons.primary.text) {
  fail('buttonStyles.primary.color drifted from tokens.buttons.primary.text.')
}

if (components.buttonStyles.secondary.borderColor !== tokens.buttons.secondary.border) {
  fail('buttonStyles.secondary.borderColor drifted from tokens.buttons.secondary.border.')
}

if (components.inputStyles.default.backgroundColor !== tokens.surface.input) {
  fail('inputStyles.default.backgroundColor drifted from tokens.surface.input.')
}

if (components.inputStyles.default.borderColor !== tokens.forms.default.border) {
  fail('inputStyles.default.borderColor drifted from tokens.forms.default.border.')
}

if (components.cardStyles.base.backgroundColor !== tokens.surface.card) {
  fail('cardStyles.base.backgroundColor drifted from tokens.surface.card.')
}

if (components.cardStyles.base.color !== tokens.component.card.text) {
  fail('cardStyles.base.color drifted from tokens.component.card.text.')
}

// Multi-namespace coverage: card must use surface, component, radii, space, shadows
const cardBaseKeys = Object.keys(components.cardStyles.base)
const requiredCardKeys = ['backgroundColor', 'color', 'borderRadius', 'padding', 'boxShadow']
for (const key of requiredCardKeys) {
  if (!cardBaseKeys.includes(key)) {
    fail(`cardStyles.base is missing '${key}' — multi-namespace token coverage is incomplete.`)
  }
}

// Mode-aware component styles must differ between default and dark
const defaultCard = components.themedCardStyles('default')
const darkCard = components.themedCardStyles('dark')

if (defaultCard.backgroundColor === darkCard.backgroundColor) {
  fail('themedCardStyles must produce different backgroundColor for default vs dark mode.')
}

if (defaultCard.color === darkCard.color) {
  fail('themedCardStyles must produce different color for default vs dark mode.')
}

// Typed reference must satisfy SpectreTokens
if (components.typedRef !== tokens) {
  fail('typedRef must be the same tokens object (SpectreTokens type reference check).')
}

console.log('Integration fixture passed.')
