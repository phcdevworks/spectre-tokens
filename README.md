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

## What this package owns

- Visual language expressed as token data in `tokens/`
- Semantic roles and token contracts consumed downstream
- Generated token outputs for JavaScript, TypeScript, CSS variables, and
  Tailwind theme exports
- Theme and mode definitions used by downstream consumers

This package is the correct place to define token meaning.

## What this package does not own

- Component structure or composition
  That belongs in downstream UI packages such as
  [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui).
- Framework-specific delivery
  Adapter packages translate Spectre contracts for specific frameworks and
  runtimes.
- Local redefinition of token meaning
  Downstream consumers should consume these contracts rather than recreate them
  independently.
- Example app architecture
  The `example/` directory documents token usage; it is not the contract source
  and should not become a downstream UI layer.

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

## Consumer usage

### Source of truth

- Change token data in `tokens/`.
- Treat generated outputs as derived artifacts.
- Treat `contract.manifest.json` as the machine-readable contract authority for
  public namespaces and required outputs.

### JavaScript and TypeScript tokens

Use the runtime token object when a consumer needs token values directly in
code.

```ts
import tokens from '@phcdevworks/spectre-tokens'

const card = {
  background: tokens.surface.card,
  color: tokens.text.onSurface.default,
  borderColor: tokens.component.iconBox.border,
  padding: tokens.space['16']
}
```

Use named exports when you need generated helpers or Tailwind integration:

```ts
import tokens, {
  generateCssVariables,
  tailwindPreset,
  tailwindTheme
} from '@phcdevworks/spectre-tokens'

const css = generateCssVariables(tokens)
```

### Generated CSS variables

Import `index.css` when a downstream package or app wants the generated Spectre
CSS variable contract.

```css
@import '@phcdevworks/spectre-tokens/index.css';

.card {
  background: var(--sp-surface-card);
  color: var(--sp-text-on-surface-default);
}
```

The CSS entry point is intended for consumers that want the token contract as
variables rather than reading values in JavaScript.

### Tailwind preset

Use the Tailwind preset when a consumer wants Tailwind theme values derived from
the same token contract.

```ts
import { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset]
}
```

Use `tailwindTheme` directly only when a consumer needs the generated theme
object outside the preset shape.

### Semantic tokens first

Prefer semantic namespaces for downstream UI work:

- `surface`
- `text`
- `component`
- `buttons`
- `forms`
- `modes`

These namespaces are the main consumer-facing contract because they express UI
meaning rather than raw color selection.

### When raw palette access is acceptable

Raw palette access through `colors` is acceptable when a consumer deliberately
needs fixed palette values.

Typical cases:

- data visualization or non-semantic decorative use
- compatibility layers that need a specific raw ramp
- tooling that inspects or serializes palette data directly

Raw palette access should not replace semantic token usage for normal UI
surfaces, text, buttons, forms, or mode-aware styling.

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
- `aspectRatios`
- `icons`
- `border`
- `accessibility`
- `buttons`
- `forms`
- `surface`
- `text`
- `component`
- `modes`

The exported runtime token object is a flattened string-based tree generated
from `tokens/`. Source-only wrapper fields such as `value` and `metadata` are
internal generation details and are not part of the public package contract.

## Public contract guarantees

`contract.manifest.json` is the machine-readable contract authority for this
package.

It defines:

- public namespaces
- required output surfaces for JavaScript, CSS, and Tailwind
- protected semantic groups

Every contract-facing surface in this repository must match that manifest.
Validation fails fast on token overwrite across files, undocumented namespaces,
output drift, and README mismatch with the contract authority.

### Themes and modes

The package includes mode-aware semantic tokens under `modes`, with `default`
and `dark` mode definitions in the generated output.

Use semantic mode-aware values when the consumer needs light/dark or
mode-specific behavior without branching on raw palette values.

```ts
import tokens from '@phcdevworks/spectre-tokens'

const darkPage = tokens.modes.dark.surface.page
const darkText = tokens.modes.dark.text.onPage.default
```

Guidance:

- Prefer semantic tokens for theme-aware UI.
- Prefer `modes` when a consumer explicitly needs mode-specific values.
- Do not invent local light/dark token contracts when this package already
  provides the semantic path.

## Downstream boundaries

Downstream packages should never redefine locally:

- the meaning of `surface`, `text`, `component`, `buttons`, `forms`, or
  `modes`
- protected semantic groups such as `success`, `warning`, `danger`, or CTA /
  brand-action semantics
- public namespace shape that this package already exports

Downstream packages may:

- compose UI structure on top of this contract
- map these tokens into framework-specific delivery
- use raw palette values when the usage is intentionally non-semantic

## Upgrade expectations for consumers

Consumers should treat this package as a SemVer-governed contract.

Practical guidance:

- additive token paths are intended to be safe for existing consumers
- semantic shifts may keep the same path but still affect visual meaning
- renames and removals are breaking
- generated JS, TS, CSS, and Tailwind outputs are expected to stay aligned

If a downstream package depends on specific token paths or semantic meaning:

- read `CHANGELOG.md` for contract change classification
- read `TOKEN_CONTRACT.md` for contract rules
- prefer documented public namespaces over undocumented internal assumptions

## Package exports / API surface

### Root package

`@phcdevworks/spectre-tokens` exports:

- `default` / `tokens`
- `tailwindTheme`
- `tailwindPreset`
- `generateCssVariables`
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

## Consumer checklist

For downstream packages and compatible apps:

- import tokens from the package root when you need runtime values
- import `index.css` when you need generated CSS variables
- use `tailwindPreset` when you need Tailwind theme integration
- prefer semantic namespaces for UI behavior
- use raw palette values only when fixed palette access is intentional
- treat `tokens/` as source of truth and generated outputs as derived
- do not redefine Spectre semantic contracts locally

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
- keep `README.md`, generated outputs, and `contract.manifest.json` aligned

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## License

MIT © PHCDevworks. See [LICENSE](LICENSE).
