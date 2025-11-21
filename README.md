# Spectre Tokens

**Spectre Tokens** is the foundational design layer of the **Spectre Suite** — a token-driven design system that powers consistent styling across all Spectre projects.

It defines Spectre's visual identity through design tokens (colors, typography, spacing, radii, shadows, breakpoints, z-index, transitions) consumed by **Spectre UI**, **Spectre Blocks** (WordPress), **Spectre Astro**, **Spectre 11ty**, and future Spectre tools.

> One token system. Many frameworks. Full consistency.

---

## Overview

Spectre Tokens provides a centralized source of truth for design decisions across the entire Spectre ecosystem. Whether you're building WordPress blocks, static sites with Astro or 11ty, or future Spectre integrations, Spectre Tokens ensures your design language remains consistent and maintainable.

## Features

- **Token-Driven Design**: Centralized design tokens for colors, typography, spacing, and more
- **Cross-Platform**: Powers styling across WordPress, Astro, 11ty, and beyond
- **Multiple Formats**: Export tokens as CSS variables, JSON, JavaScript, and more
- **Type-Safe**: TypeScript definitions for all design tokens
- **Themeable**: Easy customization and theming support
- **Semantic Colors**: Built-in success, warning, error, and info color scales
- **Responsive Design**: Consistent breakpoint tokens for all screen sizes
- **Motion Design**: Transition duration and easing tokens for animations
- **Z-Index Scale**: Organized layering system for consistent stacking
- **CRO-Optimized**: Button variants, form states, and micro-interactions for higher conversions
- **Accessibility First**: WCAG-compliant focus states and touch target guidelines
- **Interaction States**: Opacity and state tokens for hover, active, disabled, and more

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Usage

Import Spectre Tokens into your project:

```javascript
import tokens from "@phcdevworks/spectre-tokens";
```

Or use CSS variables directly:

```css
@import "@phcdevworks/spectre-tokens/css/tokens.css";

.my-component {
  color: var(--spectre-color-primary);
  padding: var(--spectre-spacing-4);
  border-radius: var(--spectre-radius-md);
}
```

## CRO & Accessibility Features

### Button Variants (Conversion-Optimized)

Spectre Tokens includes pre-designed button variants optimized for conversion rate optimization:

```javascript
// Available button variants
tokens.buttons.primary; // High-contrast primary CTA
tokens.buttons.secondary; // Outlined secondary action
tokens.buttons.ghost; // Minimal tertiary action
tokens.buttons.danger; // Destructive actions
tokens.buttons.success; // Positive confirmation
```

Each variant includes full state coverage:

- `bg`, `bgHover`, `bgActive`, `bgDisabled`
- `text`, `textDisabled`
- `border`, `borderDisabled` (for outlined variants)

**CSS Usage:**

```css
.cta-button {
  background: var(--sp-button-primary-bg);
  color: var(--sp-button-primary-text);
}
.cta-button:hover {
  background: var(--sp-button-primary-bg-hover);
}
```

### Form States (Validation & Feedback)

Complete form state tokens for clear user feedback:

```javascript
tokens.forms.default; // Initial state
tokens.forms.hover; // Mouse hover
tokens.forms.focus; // Keyboard focus
tokens.forms.valid; // Successful validation
tokens.forms.invalid; // Error state
tokens.forms.disabled; // Non-interactive
```

**CSS Usage:**

```css
.input {
  background: var(--sp-form-default-bg);
  border: 1px solid var(--sp-form-default-border);
}
.input:focus {
  border-color: var(--sp-form-focus-border);
  outline: var(--sp-focus-ring-width) var(--sp-focus-ring-style) var(--sp-form-focus-ring);
}
.input.error {
  border-color: var(--sp-form-invalid-border);
  background: var(--sp-form-invalid-bg);
}
```

### Accessibility Standards

Built-in WCAG compliance helpers:

```javascript
tokens.accessibility.focusRing.width; // 2px
tokens.accessibility.focusRing.offset; // 2px
tokens.accessibility.minTouchTarget; // 44px (WCAG 2.5.5)
tokens.accessibility.minTextSize; // 16px
```

**Focus Colors:**

```javascript
tokens.colors.focus.primary; // Brand-aligned focus ring
tokens.colors.focus.error; // Error state focus
tokens.colors.focus.info; // Info state focus
```

### Micro-Interactions & Animations

Pre-configured animations for engagement:

```javascript
tokens.animations.fadeIn; // Subtle entrance
tokens.animations.slideDown; // Dropdown reveal
tokens.animations.scaleIn; // Modal/tooltip appearance
tokens.animations.bounce; // Success feedback
tokens.animations.shake; // Error feedback
tokens.animations.pulse; // Loading state
```

**CSS Usage:**

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal {
  animation: fade-in var(--sp-animation-fade-in-duration) var(
      --sp-animation-fade-in-easing
    );
}
```

### Opacity Tokens

Consistent interaction opacity:

```javascript
tokens.opacity.hover; // 0.92 - Subtle hover
tokens.opacity.active; // 0.84 - Active press
tokens.opacity.disabled; // 0.38 - Disabled state (WCAG compliant)
tokens.opacity.overlay; // 0.5  - Modal overlays
```

### WCAG Contrast Guidelines

**Primary Colors:**

- Brand 500 on white: ✅ AAA (contrast ratio 4.8:1)
- Success 600 on white: ✅ AAA (contrast ratio 4.7:1)
- Error 600 on white: ✅ AAA (contrast ratio 5.2:1)

**Text Colors:**

- Neutral 900 on white: ✅ AAA (contrast ratio 16.1:1)
- Neutral 700 on white: ✅ AA (contrast ratio 8.4:1)

**Focus Indicators:**

- All focus rings meet WCAG 2.4.7 (2px solid, high contrast)

> **Note:** Always test final implementations with contrast checking tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## Part of the Spectre Suite

- **Spectre Tokens**: Design token foundation (this package)
- **Spectre UI**: Core styling layer
- **Spectre Blocks**: WordPress block library
- **Spectre Astro**: Astro integration
- **Spectre 11ty**: Eleventy integration

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## Repository layout

| Folder     | Responsibility                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| `tokens/`  | Raw JSON tokens owned by design. `core.json` holds colors, spacing, radii, typography scale, and shadows.     |
| `src/`     | TypeScript source that turns JSON into reusable formats (JS/TS objects, Tailwind theme, CSS helpers).         |
| `scripts/` | Build utilities. `build-css.js` consumes the compiled library and writes `dist/index.css`.                    |
| `dist/`    | Generated artifacts: `index.js`, `index.cjs`, `index.d.ts`, and `index.css`. Regenerated via `npm run build`. |

Designers only edit `tokens/`. Engineering evolves `src/` + `scripts/` when structure changes.

---

## Consuming the tokens

### Programmatic access (JS/TS)

```ts
import tokens, {
  tailwindTheme,
  tailwindPreset,
  generateCssVariables,
} from "@phcdevworks/spectre-tokens";

// Raw structured tokens (colors, spacing, radii, typography, shadows)
console.log(tokens.colors.brand["500"]);

// Tailwind-ready theme or preset drop-in
export default {
  theme: tailwindTheme,
  presets: [tailwindPreset],
};

// Generic CSS variable string if you want custom selectors or prefixes
const css = generateCssVariables(tokens, {
  selector: ".spectre-scope",
  prefix: "sp",
});
```

### CSS variables

Include the generated CSS file to get `--sp-*` variables anywhere:

```css
@import "@phcdevworks/spectre-tokens/index.css";

.button {
  color: var(--sp-color-brand-500);
  padding-inline: var(--sp-space-md);
  border-radius: var(--sp-radius-pill);
  box-shadow: var(--sp-shadow-md);
}
```

---

## Tailwind compatibility

This package exposes a Tailwind-style theme object and a preset wrapper built with the classic Tailwind config shape (`theme.extend` with colors, spacing, font families, etc.). Tailwind CSS v4 introduces the Oxide engine and optional token-centric workflows, but it still supports the traditional `tailwind.config.(js|cjs|mjs|ts)` file, theme configuration, and presets. You can continue to consume `tailwindPreset` or spread `tailwindTheme` in both Tailwind 3 and Tailwind 4 projects without changes.

When Tailwind’s new token-first features stabilize, we may add an additional export that serializes `tokens/core.json` into whatever public token schema Tailwind ships. Until then, treat this library as a conventional Tailwind theme/preset provider that uses the stable config-based API.

Engineering guidance:

- Primary integration: keep exporting `tailwindTheme` (Spectre theme contents) and `tailwindPreset` (for `presets: []`).
- Support Tailwind 3.x and 4.x via the classic config API; avoid depending on v4-specific internals or JSON token formats.
- Future (optional): layer on a token-native export once Tailwind’s token workflows are documented and stable, without removing the preset interface.

Public messaging across Spectre projects should stay simple: “Works with Tailwind 3 and 4 via the standard config-based API. We export a theme and preset; plug it in like any other Tailwind preset. When Tailwind’s token workflow is ready, we’ll offer an additional integration.”

---

## Build & release

```
npm run build
```

This command bundles the TypeScript library with `tsup` (ESM + CJS + `.d.ts`) and then calls `scripts/build-css.js` to emit `dist/index.css`. Because `dist/` is fully generated, publishing is reproducible from `tokens/` + `src/`.
