# @phcdevworks/spectre-tokens

[![GitHub issues](https://img.shields.io/github/issues/phcdevworks/spectre-tokens)](https://github.com/phcdevworks/spectre-tokens/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/phcdevworks/spectre-tokens)](https://github.com/phcdevworks/spectre-tokens/pulls)
[![License](https://img.shields.io/github/license/phcdevworks/spectre-tokens)](LICENSE)

`@phcdevworks/spectre-tokens` is the design-token package of the Spectre system
for downstream Spectre packages and compatible applications.

Maintained by PHCDevworks, it defines the visual language, semantic roles, and
token contracts consumed downstream. It keeps visual meaning centralized in
token data while downstream UI packages define structure and adapter packages
translate those contracts for specific frameworks and runtimes.

[Contributing](CONTRIBUTING.md) | [Changelog](CHANGELOG.md) |
[Security Policy](SECURITY.md)

## Key capabilities

- Uses `tokens/` as the source of truth for design-token data
- Generates JavaScript, TypeScript, CSS, and Tailwind theme exports from shared
  token sources
- Defines semantic token contracts for surfaces, text, components, buttons,
  forms, and modes
- Exposes primitives and semantic roles for downstream packages and compatible
  applications
- Keeps visual meaning centralized so downstream consumers do not redefine token
  contracts

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Quick start

### CSS import

Import the generated CSS variables:

```css
@import '@phcdevworks/spectre-tokens/index.css';
```

### Token usage

Load the token object in JavaScript or TypeScript:

```ts
import tokens from '@phcdevworks/spectre-tokens'

const card = {
  background: tokens.surface.page,
  color: tokens.text.onPage.default,
  padding: tokens.space['16'],
  borderRadius: tokens.radii.md
}
```

### Tailwind preset usage

Use the generated Tailwind preset when you want the package to populate theme
values from the token contract:

```ts
// tailwind.config.ts
import { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset]
}
```

Prefer semantic tokens such as `surface`, `text`, `component`, `buttons`, and
`forms` for application UI. Raw palette values remain available when fixed color
access is appropriate.

## What this package owns

- Visual language expressed as token data in `tokens/`
- Semantic roles and token contracts consumed downstream
- Generated token outputs for JavaScript, TypeScript, CSS variables, and
  Tailwind theme exports
- Theme and mode definitions used by downstream consumers

### Token model

The generated token object includes these namespaces:

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

### Themes and modes

The package includes mode-aware semantic tokens under `modes`, with `default`
and `dark` mode definitions in the generated output.

Raw palette tokens are stable values. Semantic tokens are the preferred
interface for theme-aware usage because they can map across modes without
changing consumer code.

## What this package does not own

- Component structure or composition That belongs in downstream UI packages such
  as [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui).
- Framework-specific delivery Adapter packages translate Spectre contracts for
  specific frameworks and runtimes.
- Local redefinition of token meaning Downstream consumers should consume these
  contracts rather than recreate them independently.

## Package exports / API surface

### Root package

`@phcdevworks/spectre-tokens` exports:

- `default` / `tokens`
- `tailwindTheme`
- `tailwindPreset`
- `generateCssVariables()`
- TypeScript types including `SpectreTokens`, `TailwindTheme`,
  `SpectreModeTokens`, and `SpectreModeName`

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

### CSS entry point

- `@phcdevworks/spectre-tokens/index.css`

## Relationship to the rest of Spectre

Spectre keeps responsibilities separate:

- [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens)
  defines visual language, semantic roles, and token contracts
- [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui) turns
  those contracts into reusable CSS, Tailwind tooling, and shared styling
  behavior
- Adapter packages translate Spectre contracts for framework-specific delivery

That separation keeps token meaning centralized while letting the package system
expand by responsibility.

## Development

Regenerate package outputs:

```bash
npm run build
```

Run the full validation and release gate:

```bash
npm run check
```

Key source areas:

- `tokens/` for source token data
- `src/generated/` for generated token output
- `src/` for package entry points, CSS generation, and types
- `scripts/` for build and validation scripts
- `example/` for usage examples

The files in `example/` are illustrative token demos only. They help explain
the token contract, but they are not the package contract itself and should not
be treated as downstream UI primitives.

## Contributing

PHCDevworks maintains this package as part of the Spectre system.

When contributing:

- treat `tokens/` as the source of truth
- keep generated outputs derived from source data
- avoid breaking token contracts without an intentional major-version change
- run `npm run build` to regenerate outputs when sources change
- run `npm run check` as the full validation gate before opening a pull request
- do not modify locked semantic color families without explicit approval

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## License

MIT © PHCDevworks. See [LICENSE](LICENSE).
