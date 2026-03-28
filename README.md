# @phcdevworks/spectre-tokens

[![GitHub issues](https://img.shields.io/github/issues/phcdevworks/spectre-tokens)](https://github.com/phcdevworks/spectre-tokens/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/phcdevworks/spectre-tokens)](https://github.com/phcdevworks/spectre-tokens/pulls)
[![License](https://img.shields.io/github/license/phcdevworks/spectre-tokens)](LICENSE)

`@phcdevworks/spectre-tokens` is the design-token package of the Spectre system, maintained by PHCDevworks. It defines the visual language, semantic roles, and token contracts consumed by downstream Spectre packages and compatible applications.

Spectre is organized as an expandable package system by responsibility. This package defines meaning, downstream UI packages define structure, and adapter packages translate those contracts for specific frameworks and runtimes.

`tokens/` is the source of truth. Build outputs for JavaScript, TypeScript, Tailwind, and CSS are generated from those token sources.

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Quick Start

Import the generated CSS variables:

```css
@import '@phcdevworks/spectre-tokens/index.css';
```

Or load the token object in JavaScript or TypeScript:

```ts
import tokens from '@phcdevworks/spectre-tokens'

const card = {
  background: tokens.surface.page,
  color: tokens.text.onPage.default,
  padding: tokens.space['16'],
  borderRadius: tokens.radii.md
}
```

Use the Tailwind preset when you want the package to populate your theme values:

```ts
// tailwind.config.ts
import { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset]
}
```

Prefer semantic tokens such as `surface`, `text`, `component`, `buttons`, and `forms` for application UI. Raw palette values remain available for cases where fixed color access is appropriate.

## Exports

Package exports:

- `@phcdevworks/spectre-tokens`
- `@phcdevworks/spectre-tokens/index.css`

JavaScript and TypeScript exports:

- `default` / `tokens`: complete token object
- `tailwindTheme`: generated Tailwind theme object
- `tailwindPreset`: Tailwind preset wrapper around `tailwindTheme`
- `generateCssVariables()`: CSS custom property generator
- exported TypeScript types from `src/types.ts`

Example:

```ts
import tokens, {
  generateCssVariables,
  tailwindPreset,
  tailwindTheme
} from '@phcdevworks/spectre-tokens'

const css = generateCssVariables(tokens, {
  selector: ':root',
  prefix: 'sp'
})
```

## Token Model

The generated token object includes semantic and primitive namespaces used across downstream consumers:

- `colors`
- `space`
- `layout`
- `radii`
- `typography`
- `font`
- `shadows`
- `breakpoints`
- `zIndex`
- `transitions`
- `animations`
- `opacity`
- `border`
- `accessibility`
- `buttons`
- `forms`
- `surface`
- `text`
- `component`
- `modes`

These contracts define visual meaning. They do not define component structure, rendering patterns, or framework behavior.

## Themes and Modes

The package includes mode-aware semantic tokens under `modes`, with `default` and `dark` mode definitions in the generated output.

Raw palette tokens are stable values. Semantic tokens are the preferred interface for theme-aware usage because they can map across modes without changing consumer code.

## Repository Layout

```text
tokens/            Source token data
src/generated/     Generated token output
src/               Package entry points, CSS generation, and types
scripts/           Build and validation scripts
example/           Usage examples
```

Package boundaries:

- `@phcdevworks/spectre-tokens` defines token meaning and contracts.
- Downstream UI packages define component structure and composition.
- Adapter packages translate Spectre contracts for framework-specific delivery.

## Build

Regenerate package outputs:

```bash
npm run build
```

Run validation checks:

```bash
npm run check
```

The standard workflow is to update token sources in `tokens/`, rebuild outputs, and then run checks.

## TypeScript Support

The package ships typed JavaScript exports and generated declaration files.

Token types are available directly from the package exports, including:

- `SpectreTokens`
- `TailwindTheme`
- `SpectreModeTokens`
- `SpectreModeName`

Example:

```ts
import tokens, { type SpectreTokens } from '@phcdevworks/spectre-tokens'

const theme: SpectreTokens = tokens
```

## License

[MIT](LICENSE)
