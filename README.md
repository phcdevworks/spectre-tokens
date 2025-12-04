# @phcdevworks/spectre-tokens

Design-token source of truth that powers Spectre UI, Spectre Blocks, Spectre Astro, Spectre 11ty, and every future Spectre surface.

## Overview

`@phcdevworks/spectre-tokens` defines Spectre's visual language—colors, typography, spacing, radii, shadows, breakpoints, z-index scales, transitions, and CRO-focused interaction states. The package turns the raw JSON tokens in `tokens/` into multiple consumption modes (JS, TS, Tailwind, CSS variables) so that teams can stay in sync regardless of framework. One token system runs the entire Spectre Suite; every other package simply consumes these values.

- ✅ Centralized token definitions and semantic naming
- ✅ JS/TS objects, Tailwind theme + preset, and CSS variable outputs
- ✅ CRO-focused surfaces (buttons, forms, states) and WCAG-first accessibility tokens
- ✅ Format-agnostic helpers for scoped CSS variable generation
- ✅ Type-safe outputs with bundled `.d.ts` files

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Usage

### 1. Import tokens (JS/TS)

```ts
import tokens, {
  tailwindTheme,
  tailwindPreset,
  generateCssVariables,
} from "@phcdevworks/spectre-tokens";

console.log(tokens.colors.brand["500"]); // Brand palette swatches
```

- `tokens`: Raw structured tokens (colors, spacing, radii, typography, shadows, z-index, transitions, buttons, forms, accessibility, animations, opacity).
- `tailwindTheme`: Ready-to-use Tailwind theme object.
- `tailwindPreset`: Preset for Tailwind config (includes theme).
- `generateCssVariables()`: Generate custom `--sp-*` CSS variable strings with scoped selectors or prefixes.

### 2. CSS variables

```css
@import "@phcdevworks/spectre-tokens/dist/index.css";

.button {
  color: var(--sp-color-brand-500);
  padding-inline: var(--sp-space-md);
  border-radius: var(--sp-radius-pill);
  box-shadow: var(--sp-shadow-md);
}
```

To scope or re-prefix variables:

```ts
const css = generateCssVariables(tokens, {
  selector: ".spectre-scope",
  prefix: "sp",
});
```

### 3. Tailwind integration

```ts
// tailwind.config.ts
import { tailwindPreset } from "@phcdevworks/spectre-tokens";

export default {
  presets: [tailwindPreset],
};
```

Works with Tailwind 3.x and 4.x through the classic config API; no Oxide lock-in required.

## Token Surfaces

### Conversion-ready button variants

```ts
tokens.buttons.primary; // CTA baseline
tokens.buttons.secondary; // Outlined
tokens.buttons.ghost; // Low-emphasis
tokens.buttons.danger; // Destructive
tokens.buttons.success; // Confirmations
```

Each variant ships with `bg`, `bgHover`, `bgActive`, `bgDisabled`, `text`, `textDisabled`, `border`, and `borderDisabled`, ensuring consistent CRO states.

```css
.cta-button {
  background: var(--sp-button-primary-bg);
  color: var(--sp-button-primary-text);
}
.cta-button:hover {
  background: var(--sp-button-primary-bg-hover);
}
```

### Form states (validation + UX)

```ts
tokens.forms.default;
tokens.forms.hover;
tokens.forms.focus;
tokens.forms.valid;
tokens.forms.invalid;
tokens.forms.disabled;
```

```css
.input:focus {
  border-color: var(--sp-form-focus-border);
  outline: var(--sp-focus-ring-width) var(--sp-focus-ring-style) var(--sp-form-focus-ring);
}
.input.error {
  border-color: var(--sp-form-invalid-border);
  background: var(--sp-form-invalid-bg);
}
```

### Accessibility helpers

```ts
tokens.accessibility.focusRing.width; // 2px
tokens.accessibility.focusRing.offset; // 2px
tokens.accessibility.minTouchTarget; // 44px (WCAG 2.5.5)
tokens.accessibility.minTextSize; // 16px
tokens.colors.focus.primary; // Brand-aligned focus
tokens.colors.focus.error; // Error state focus
tokens.colors.focus.info; // Info state focus
```

### Motion & micro-interactions

```ts
tokens.animations.fadeIn;
tokens.animations.slideDown;
tokens.animations.scaleIn;
tokens.animations.bounce;
tokens.animations.shake;
tokens.animations.pulse;
```

```css
.modal {
  animation: fade-in var(--sp-animation-fade-in-duration) var(
      --sp-animation-fade-in-easing
    );
}
```

### Opacity scale

```ts
tokens.opacity.hover; // 0.92
tokens.opacity.active; // 0.84
tokens.opacity.disabled; // 0.38
tokens.opacity.overlay; // 0.5
```

### WCAG targets

- Brand 500 on white → ✅ AAA (4.8:1)
- Success 600 on white → ✅ AAA (4.7:1)
- Error 600 on white → ✅ AAA (5.2:1)
- Neutral 900 on white → ✅ AAA (16.1:1)
- Neutral 700 on white → ✅ AA (8.4:1)
- Focus rings meet WCAG 2.4.7 (2px solid, high contrast)

Always re-run final UI implementations through tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Repository Layout

| Folder     | Responsibility                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| `tokens/`  | Raw JSON tokens owned by design. `core.json` holds colors, spacing, radii, typography scales, and shadows.    |
| `src/`     | TypeScript source that turns JSON into reusable formats (JS/TS exports, Tailwind theme, CSS helpers).         |
| `scripts/` | Build utilities. `build-css.js` consumes the compiled library and writes `dist/index.css`.                    |
| `dist/`    | Generated artifacts: `index.js`, `index.cjs`, `index.d.ts`, and `index.css`. Regenerated via `npm run build`. |

Designers only touch the JSON under `tokens/`. Engineering evolves `src/` + `scripts/` when structure changes.

## Build & Release

```bash
npm run build
```

`tsup` compiles the TypeScript library (ESM, CJS, `.d.ts`) and `scripts/build-css.js` emits `dist/index.css`. Because `dist/` is generated, releases are reproducible from `tokens/` + `src/`.

## Design Principles

1. **Single source of truth** – Tokens originate in JSON and flow into every runtime surface.
2. **Format-agnostic** – Consumers choose JS objects, CSS variables, Tailwind presets, or generated strings.
3. **Framework-neutral** – Works in WordPress, Astro, 11ty, React, or any environment that can ingest CSS/JS.
4. **Accessibility-first** – Focus rings, touch targets, and contrast targets are encoded directly in tokens.
5. **CRO-aware** – Buttons, forms, and state tokens are tuned for real-world conversion funnels.

## TypeScript Support

Type definitions are bundled automatically:

```ts
import type {
  Tokens,
  SpectreTokens,
  TailwindTheme,
  ColorScale,
  ButtonStateTokens,
  FormStateTokens,
} from "@phcdevworks/spectre-tokens";

const allTokens: SpectreTokens = tokens;
```

## Part of the Spectre Suite

- **Spectre Tokens** – Design-token foundation (this package)
- **Spectre UI** – Core styling layer
- **Spectre Blocks** – WordPress block library
- **Spectre Astro** – Astro integration
- **Spectre 11ty** – Eleventy integration

## Contributing

Issues and pull requests are welcome. If you are proposing token changes, update `tokens/` and include regenerated builds.

## License

MIT © PHCDevworks
