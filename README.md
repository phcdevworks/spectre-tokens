# @phcdevworks/spectre-tokens

### **The DNA (Layer 1 of the Spectre 8-Layer Arsenal)**

`@phcdevworks/spectre-tokens` is the Single Source of Truth for the entire Spectre ecosystem. It defines the visual language—colors, typography, space, and semantic roles—that all other layers consume.

🤝 **[Contributing Guide](CONTRIBUTING.md)** | 📝 **[Changelog](CHANGELOG.md)** | 🏛️ **[Spectre Arsenal](https://github.com/phcdevworks)**

---

## 🏗️ Core Architecture

This package is the foundation. It follows a strict **JSON-First** policy—authoritative values live in `tokens/` and are transformed into multiple consumption modes (CSS, JS/TS, Tailwind).

- 🧬 **Authoritative JSON**: Domain-specific token storage for better maintainability.
- 🧪 **Type-Safe DNA**: 100% strict TypeScript interfaces derived directly from JSON.
- 🌪️ **Multi-Format Output**: Generates CSS Variables, Tailwind Presets, and ESM/CJS exports.
- ♿ **Accessibility First**: Encodes WCAG constraints (contrast, touch targets) at the token level.

---

**Single source of truth:** JSON is the source. Everything else is generated.

- ✅ **Modular Architecture**: domain-specific token storage for better maintainability
- ✅ **AI-Ready DNA**: Zero `any` types and 100% strict TypeScript build process
- ✅ **Auto-Generated Typings**: Strictly-typed TS interfaces derived directly from JSON
- ✅ **Multi-File Merging**: Type-safe merging of cross-domain token references
- ✅ **JS/TS objects**, Tailwind theme + preset, and CSS variable outputs
- ✅ **CRO-focused surfaces** (buttons, forms, states) and accessibility-first tokens
- ✅ **Type-safe outputs** with bundled `.d.ts` files

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Quick Start

### Option 1: CSS Variables (fastest)

**Recommended (bundlers):**

If you’re not using a bundler, copy `dist/index.css` into your app and link it.

```css
@import "@phcdevworks/spectre-tokens/dist/index.css";
```

or:

```ts
import "@phcdevworks/spectre-tokens/dist/index.css";
```

**Use semantic tokens (recommended):**

```css
.my-button {
  background: var(--sp-button-primary-bg);
  color: var(--sp-button-primary-text);
  padding: var(--sp-space-12) var(--sp-space-24);
  border-radius: var(--sp-radius-md);
}
```

> Note: Raw palette tokens like `--sp-color-brand-500` are stable utilities, but they do not adapt across modes by themselves. Prefer semantic tokens (`surface.*`, `text.*`, `component.*`, `buttons.*`, `forms.*`) for theme-aware UI.

### Option 2: JavaScript/TypeScript

```ts
import tokens from "@phcdevworks/spectre-tokens";

const styles = {
  color: tokens.colors.brand["500"],
  padding: `${tokens.space["12"]} ${tokens.space["24"]}`,
  borderRadius: tokens.radii.md,
};
```

### Option 3: Tailwind CSS

```ts
// tailwind.config.ts
import { tailwindPreset } from "@phcdevworks/spectre-tokens";

export default {
  presets: [tailwindPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
```

```html
<!-- Use Spectre tokens via Tailwind utilities -->
<button class="bg-brand-500 text-white px-6 py-3 rounded-md shadow-md">
  Click me
</button>
```

> Tip: Tailwind palette utilities like `bg-brand-500` are stable, but they won’t automatically adapt across modes. For theme-aware UI, prefer semantic CSS variables (`surface.*`, `text.*`, `component.*`) or Spectre UI recipes.

## Usage

### 1. Import tokens (JS/TS)

```ts
import tokens, {
  tailwindTheme,
  tailwindPreset,
  generateCssVariables,
} from "@phcdevworks/spectre-tokens";

console.log(tokens.colors.brand["500"]); // "#8652ff"
console.log(tokens.space["16"]); // "1rem"
console.log(tokens.buttons.primary.bg); // "#8652ff"
```

**Exports:**

- `tokens` (default export): Complete token object with flattened structure for easy access
- `tailwindTheme`: Ready-to-use Tailwind theme object
- `tailwindPreset`: Preset for Tailwind config (includes theme)
- `generateCssVariables()`: Generate custom `--sp-*` CSS variable strings with scoped selectors or prefixes

`generateCssVariables()` returns a CSS **string** (e.g. `:root { --sp-... }`) you can write to a file or inject into a page.

**Token Structure (high-level namespaces):**

The `tokens` object includes:

- `colors`: Color palettes (brand, neutral, accent, success, warning, error, info, focus)
- `space`: Spacing scale (0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96)
- `layout`: Semantic layout tokens (section, stack, container padding/gaps)
- `radii`: Border radius values (none, sm, md, lg, pill)
- `typography`: Font families and complete typography scale with metadata
- `font`: Simplified font size/lineHeight/weight tokens for quick access
- `shadows`: Box shadow tokens (none, sm, md, lg)
- `breakpoints`: Responsive breakpoints (sm, md, lg, xl, 2xl)
- `zIndex`: Z-index scale (base, dropdown, sticky, fixed, overlay, modal, popover, tooltip)
- `transitions`: Duration and easing tokens
- `animations`: Animation presets with duration, easing, and keyframe references
- `buttons`: Button state tokens (primary, secondary, ghost, danger, success)
- `forms`: Form state tokens (default, hover, focus, valid, invalid, disabled)
- `accessibility`: WCAG compliance tokens (focus ring, touch targets, min text size)
- `opacity`: Opacity scale (hover, active, disabled, focus, overlay, tooltip)
- `borders`: Border color tokens
- `surface`: Semantic surface backgrounds (page, card, input, overlay)
- `text`: Semantic text colors (onPage, onSurface with default/muted/subtle/meta/**brand**)
- `component`: Component-specific tokens (card, input, button, badge, iconBox)
- `modes`: Theme mode definitions (default/light and dark)

> Tokens may exist before UI primitives land in `@phcdevworks/spectre-ui`. Tokens define meaning; UI defines structure.

### 2. CSS variables

```css
@import "@phcdevworks/spectre-tokens/dist/index.css";

.button {
  color: var(--sp-text-on-page-default);
  padding-inline: var(--sp-space-16);
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
  outline: var(--sp-focus-ring-width) var(--sp-focus-ring-style)
    var(--sp-form-focus-ring);
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
  animation: fade-in var(--sp-animation-fade-in-duration)
    var(--sp-animation-fade-in-easing);
}
```

### Opacity scale

```ts
tokens.opacity.hover; // "0.92"
tokens.opacity.active; // "0.84"
tokens.opacity.disabled; // "0.38"
tokens.opacity.overlay; // "0.5"
tokens.opacity.focus; // "1"
tokens.opacity.tooltip; // "0.95"
```

### Typography: Font vs Typography

Spectre provides **two ways** to access typography tokens:

#### 1. `tokens.font.*` - Simplified Quick Access

For simple use cases, use the `font` object which provides direct access to size, line height, and weight:

```ts
tokens.font.xs; // { size: "0.75rem", lineHeight: "1.25rem", weight: 400 }
tokens.font.sm; // { size: "0.875rem", lineHeight: "1.5rem", weight: 400 }
tokens.font.md; // { size: "1rem", lineHeight: "1.75rem", weight: 500 }
tokens.font.lg; // { size: "1.25rem", lineHeight: "2rem", weight: 500 }
tokens.font.xl; // { size: "1.5rem", lineHeight: "2.125rem", weight: 600 }
tokens.font["2xl"]; // { size: "1.875rem", lineHeight: "2.5rem", weight: 600 }
```

#### 2. `tokens.typography.*` - Complete Typography System

For advanced typography with font families and additional properties like letter spacing:

```ts
// Font families
tokens.typography.families.sans; // "'Inter', 'Helvetica Neue', Arial, sans-serif"
tokens.typography.families.serif; // "'Spectre Serif', 'Georgia', serif"
tokens.typography.families.mono; // "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"

// Typography scale (includes all font properties plus letter spacing)
tokens.typography.scale.xs; // { fontSize: "0.75rem", lineHeight: "1.25rem", fontWeight: 400, letterSpacing: "0.02em" }
tokens.typography.scale.sm; // { fontSize: "0.875rem", lineHeight: "1.5rem", fontWeight: 400 }
tokens.typography.scale.md; // { fontSize: "1rem", lineHeight: "1.75rem", fontWeight: 500 }
tokens.typography.scale.lg; // { fontSize: "1.25rem", lineHeight: "2rem", fontWeight: 600 }
tokens.typography.scale.xl; // { fontSize: "1.5rem", lineHeight: "2.125rem", fontWeight: 600 }
tokens.typography.scale["2xl"]; // { fontSize: "1.875rem", lineHeight: "2.5rem", fontWeight: 700 }
tokens.typography.scale["3xl"]; // { fontSize: "2.25rem", lineHeight: "2.75rem", fontWeight: 700 }
```

**When to use which:**

- Use `tokens.font.*` for quick, simple typography applications
- Use `tokens.typography.*` when you need font families or letter spacing
- Use `tokens.typography.scale.*` for complete typographic control

### Typography CSS Variables

All typography tokens are available as CSS variables:

```css
.heading {
  font-family: var(--sp-typography-family-sans);
  font-size: var(--sp-font-xl-size);
  line-height: var(--sp-font-xl-line-height);
  font-weight: var(--sp-font-xl-weight);
}

.body-text {
  font-size: var(--sp-font-md-size);
  line-height: var(--sp-font-md-line-height);
  font-weight: var(--sp-font-md-weight);
}

.code-block {
  font-family: var(--sp-typography-family-mono);
  font-size: var(--sp-font-sm-size);
}
```

### Badge tokens

Badges have background and text colors for five semantic variants:

```ts
// Access via component namespace
tokens.component.badge.neutralBg; // "#f1f5f9" (light) / "#334155" (dark)
tokens.component.badge.neutralText; // "#334155" (light) / "#f1f5f9" (dark)
tokens.component.badge.infoBg; // "#dbeafe" (light) / "#1e40af" (dark)
tokens.component.badge.infoText; // "#1d4ed8" (light) / "#dbeafe" (dark)
tokens.component.badge.successBg; // "#dcfce7" (light) / "#166534" (dark)
tokens.component.badge.successText; // "#15803d" (light) / "#dcfce7" (dark)
tokens.component.badge.warningBg; // "#fef3c7" (light) / "#92400e" (dark)
tokens.component.badge.warningText; // "#b45309" (light) / "#fef3c7" (dark)
tokens.component.badge.dangerBg; // "#fee2e2" (light) / "#991b1b" (dark)
tokens.component.badge.dangerText; // "#b91c1c" (light) / "#fee2e2" (dark)
```

**CSS Variables:**

```css
.badge {
  background: var(--sp-badge-neutral-bg);
  color: var(--sp-badge-neutral-text);
  padding: 0.25rem 0.5rem;
  border-radius: var(--sp-radius-sm);
  font-size: var(--sp-font-xs-size);
  font-weight: var(--sp-font-xs-weight);
}

.badge--info {
  background: var(--sp-badge-info-bg);
  color: var(--sp-badge-info-text);
}

.badge--success {
  background: var(--sp-badge-success-bg);
  color: var(--sp-badge-success-text);
}

.badge--warning {
  background: var(--sp-badge-warning-bg);
  color: var(--sp-badge-warning-text);
}

.badge--danger {
  background: var(--sp-badge-danger-bg);
  color: var(--sp-badge-danger-text);
}
```

### Icon Box tokens

Icon boxes are decorative containers for icons with semantic color states:

```ts
// Background and border
tokens.component.iconBox.bg; // "#ffffff" (light) / "#1e293b" (dark)
tokens.component.iconBox.border; // "#e2e8f0" (light) / "#334155" (dark)

// Icon colors for different states
tokens.component.iconBox.iconDefault; // "#6c32e6" (light) / "#a37aff" (dark)
tokens.component.iconBox.iconSuccess; // "#16a34a" (light) / "#4ade80" (dark)
tokens.component.iconBox.iconWarning; // "#d97706" (light) / "#fbbf24" (dark)
tokens.component.iconBox.iconDanger; // "#dc2626" (light) / "#ef4444" (dark)
```

**CSS Variables:**

```css
.icon-box {
  background: var(--sp-icon-box-bg);
  border: 1px solid var(--sp-icon-box-border);
  border-radius: var(--sp-radius-md);
  padding: var(--sp-space-12);
}

.icon-box__icon {
  color: var(--sp-icon-box-icon-default);
}

.icon-box--success .icon-box__icon {
  color: var(--sp-icon-box-icon-success);
}

.icon-box--warning .icon-box__icon {
  color: var(--sp-icon-box-icon-warning);
}

.icon-box--danger .icon-box__icon {
  color: var(--sp-icon-box-icon-danger);
}
```

### Meta text

For secondary/metadata text styling:

```ts
tokens.text.onPage.meta; // Metadata text on page backgrounds
tokens.text.onSurface.meta; // Metadata text on card/surface backgrounds
tokens.text.onPage.brand; // Brand accent text on page canvas
```

```css
.timestamp,
.byline {
  color: var(--sp-text-on-page-meta);
  font-size: var(--sp-font-sm-size);
}
```

### WCAG targets

Spectre encodes accessibility constraints (focus rings, touch targets, and contrast-minded semantic roles) at the token level. Always validate final UI implementations with tools like the WebAIM Contrast Checker.

Always re-run final UI implementations through tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Spacing & Layout Tokens

- **8px grid**: `space.*` follows an 8px rhythm with a single 4px micro step for fine-grain alignment. Scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96 (all in px, emitted as rem).
- **Semantic layout**: `layout.section.padding.{sm,md,lg}` → `space.24/32/48`; `layout.section.gap.{sm,md,lg}` → `space.16/24/32`; `layout.stack.gap.{sm,md,lg}` → `space.8/12/16`; `layout.container.paddingInline.{sm,md,lg}` → `space.16/24/32`.
- **Outputs**: CSS vars like `--sp-space-24` and `--sp-layout-section-padding-md`; Tailwind `theme.spacing` is sourced from `space.*`.
- **Usage**: Use `layout.*` for consistent gutters/padding rather than ad-hoc numbers. Example: `gap: var(--sp-layout-stack-gap-md);` or `padding-inline: var(--sp-layout-container-padding-inline-lg);`.
- **Responsiveness lives in Spectre UI**: apply breakpoint logic and component behavior in `@phcdevworks/spectre-ui` or consumers; keep tokens meaning-only.

## Surface & Typography Roles

- `surface.page`, `surface.card`, `surface.input`, `surface.overlay`: semantic backgrounds for the app canvas, containers/tiles, form fields, and modal/dropdown layers.
- `text.onPage.*` vs `text.onSurface.*`: use `onPage` for copy sitting directly on the page canvas; use `onSurface` for text inside cards, tiles, inputs, overlays, and other elevated surfaces.
  - `text.onPage.default`, `text.onPage.muted`, `text.onPage.subtle`, `text.onPage.meta`
  - `text.onSurface.default`, `text.onSurface.muted`, `text.onSurface.subtle`, `text.onSurface.meta`
- `component.card.text`/`textMuted`, `component.input.text`/`placeholder`, `component.button.textDefault`/`textOnPrimary`, and `component.badge.*` alias the underlying semantic roles to keep component defaults aligned.

## Modes & Theme Switching

Spectre tokens ship with a comprehensive `modes` system for theme support:

```ts
tokens.modes.default; // Light theme semantic tokens
tokens.modes.dark; // Dark theme semantic tokens
```

### Mode Structure

Each mode contains semantic tokens that adapt to the theme:

```ts
// Light mode (tokens.modes.default)
{
  surface: {
    page: { value: "#f8fafc" },
    card: { value: "#ffffff" },
    input: { value: "#ffffff" },
    overlay: { value: "rgba(15,23,42,0.6)" }
  },
  text: {
    onPage: {
      default: { value: "#0f172a" },
      muted: { value: "#475569" },
      subtle: { value: "#94a3b8" },
      meta: { value: "#94a3b8" }
    },
    onSurface: { /* ... */ }
  },
  component: {
    card: { text: { value: "#0f172a" }, textMuted: { value: "#6b7280" } },
    input: { text: { value: "#0f172a" }, placeholder: { value: "#94a3b8" } },
    button: { textDefault: { value: "#0f172a" }, textOnPrimary: { value: "#ffffff" } },
    badge: { /* ... */ },
    iconBox: { /* ... */ }
  }
}

// Dark mode (tokens.modes.dark) - same structure with dark-adapted values
```

### Accessing Semantic Tokens

The TypeScript library flattens mode tokens to the root level for convenient access:

> Note: The JS `tokens.*` values resolve to the default mode. Theme switching happens in CSS via `:root[data-spectre-theme="dark"]` and semantic CSS variables.

```ts
// These are automatically resolved from modes.default
tokens.surface.page; // "#f8fafc" in light mode
tokens.text.onPage.default; // "#0f172a" in light mode
tokens.component.card.text; // "#0f172a" in light mode
```

### CSS Variable Output

The CSS generator outputs mode-specific variables:

```css
/* Default (light) theme */
:root {
  --sp-surface-page: #f8fafc;
  --sp-surface-card: #ffffff;
  --sp-text-on-page-default: #0f172a;
  /* ... */
}

/* Dark theme */
:root[data-spectre-theme="dark"] {
  --sp-surface-page: #0f172a;
  --sp-surface-card: #1e293b;
  --sp-text-on-page-default: #f8fafc;
  /* ... */
}
```

### Enabling Dark Mode

Toggle themes by setting the `data-spectre-theme` attribute:

```html
<!-- Light mode (default) -->
<html>
  <!-- Your content -->
</html>

<!-- Dark mode -->
<html data-spectre-theme="dark">
  <!-- Your content -->
</html>
```

```js
function setTheme(theme) {
  const html = document.documentElement;
  if (!theme || theme === "default") html.removeAttribute("data-spectre-theme");
  else html.setAttribute("data-spectre-theme", theme);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-spectre-theme");
  setTheme(currentTheme === "dark" ? "default" : "dark");
}

// Set based on user preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
}
```

### Semantic Token Benefits

- **Automatic theme adaptation**: All semantic tokens (surface, text, component) automatically adapt when switching themes
- **No manual color management**: Reference semantic tokens instead of raw colors
- **Consistent UX**: Components using semantic tokens maintain proper contrast in both themes
- **Type-safe**: TypeScript definitions ensure you only use valid semantic token paths

### Key CSS variables

These variables are the contract consumed by `@phcdevworks/spectre-ui`; removing or renaming them will break downstream UI packages.

- **Surface**: `--sp-surface-page`, `--sp-surface-card`, `--sp-surface-input`, `--sp-surface-overlay`
- **Text**: `--sp-text-on-page-default`, `--sp-text-on-page-muted`, `--sp-text-on-page-subtle`, `--sp-text-on-page-meta`, `--sp-text-on-surface-default`, `--sp-text-on-surface-muted`, `--sp-text-on-surface-subtle`, `--sp-text-on-surface-meta`
- **Components**: `--sp-component-card-text`, `--sp-component-card-text-muted`, `--sp-component-input-text`, `--sp-component-input-placeholder`, `--sp-badge-neutral-bg`, `--sp-badge-neutral-text`
- **Buttons**: `--sp-button-primary-bg`, `--sp-button-primary-text`, `--sp-button-secondary-bg`, `--sp-button-secondary-text`, `--sp-button-ghost-bg`, `--sp-button-ghost-text`
- **Typography**: `--sp-font-{xs,sm,md,lg,xl}-size`, `--sp-font-{xs,sm,md,lg,xl}-line-height`, `--sp-font-{xs,sm,md,lg,xl}-weight`

## Complete Token Reference

### Color Tokens

```ts
// Brand colors (purple)
tokens.colors.brand["50"]; // "#f5f0ff"
tokens.colors.brand["500"]; // "#8652ff"
tokens.colors.brand["900"]; // "#241147"

// Neutral grays
tokens.colors.neutral["50"]; // "#f8fafc"
tokens.colors.neutral["500"]; // "#64748b"
tokens.colors.neutral["900"]; // "#0f172a"

// Accent (teal/cyan)
tokens.colors.accent["500"]; // "#03e6b3"

// Semantic colors
tokens.colors.success["500"]; // "#22c55e"
tokens.colors.warning["500"]; // "#f59e0b"
tokens.colors.error["500"]; // "#ef4444"
tokens.colors.info["500"]; // "#3b82f6"

// Focus colors
tokens.colors.focus.primary; // "#8652ff"
tokens.colors.focus.error; // "#ef4444"
tokens.colors.focus.info; // "#3b82f6"
```

### Spacing Tokens

```ts
tokens.space["0"]; // "0rem"
tokens.space["4"]; // "0.25rem" (4px)
tokens.space["8"]; // "0.5rem"  (8px)
tokens.space["16"]; // "1rem"    (16px)
tokens.space["24"]; // "1.5rem"  (24px)
tokens.space["32"]; // "2rem"    (32px)
tokens.space["48"]; // "3rem"    (48px)
tokens.space["64"]; // "4rem"    (64px)
tokens.space["96"]; // "6rem"    (96px)
```

### Layout Tokens

```ts
// Section padding
tokens.layout.section.padding.sm; // "1.5rem"
tokens.layout.section.padding.md; // "2rem"
tokens.layout.section.padding.lg; // "3rem"

// Section gaps
tokens.layout.section.gap.sm; // "1rem"
tokens.layout.section.gap.md; // "1.5rem"
tokens.layout.section.gap.lg; // "2rem"

// Stack gaps (tighter spacing for related elements)
tokens.layout.stack.gap.sm; // "0.5rem"
tokens.layout.stack.gap.md; // "0.75rem"
tokens.layout.stack.gap.lg; // "1rem"

// Container inline padding
tokens.layout.container.paddingInline.sm; // "1rem"
tokens.layout.container.paddingInline.md; // "1.5rem"
tokens.layout.container.paddingInline.lg; // "2rem"
```

### Border Radius Tokens

```ts
tokens.radii.none; // "0"
tokens.radii.sm; // "2px"
tokens.radii.md; // "4px"
tokens.radii.lg; // "8px"
tokens.radii.pill; // "999px"
```

### Shadow Tokens

```ts
tokens.shadows.none; // "none"
tokens.shadows.sm; // "0 1px 2px 0 rgba(15, 23, 42, 0.08)"
tokens.shadows.md; // "0 3px 8px -1px rgba(15, 23, 42, 0.1)"
tokens.shadows.lg; // "0 8px 20px -4px rgba(15, 23, 42, 0.18)"
```

### Breakpoint Tokens

```ts
tokens.breakpoints.sm; // "640px"
tokens.breakpoints.md; // "768px"
tokens.breakpoints.lg; // "1024px"
tokens.breakpoints.xl; // "1280px"
tokens.breakpoints["2xl"]; // "1536px"
```

### Z-Index Tokens

```ts
tokens.zIndex.base; // "0"
tokens.zIndex.dropdown; // "1000"
tokens.zIndex.sticky; // "1100"
tokens.zIndex.fixed; // "1200"
tokens.zIndex.overlay; // "1300"
tokens.zIndex.modal; // "1400"
tokens.zIndex.popover; // "1500"
tokens.zIndex.tooltip; // "1600"
```

### Transition Tokens

```ts
// Duration
tokens.transitions.duration.instant; // "75ms"
tokens.transitions.duration.fast; // "150ms"
tokens.transitions.duration.base; // "200ms"
tokens.transitions.duration.moderate; // "300ms"
tokens.transitions.duration.slow; // "500ms"
tokens.transitions.duration.slower; // "700ms"

// Easing
tokens.transitions.easing.linear; // "linear"
tokens.transitions.easing.in; // "cubic-bezier(0.4, 0, 1, 1)"
tokens.transitions.easing.out; // "cubic-bezier(0, 0, 0.2, 1)"
tokens.transitions.easing.inOut; // "cubic-bezier(0.4, 0, 0.2, 1)"
tokens.transitions.easing.spring; // "cubic-bezier(0.34, 1.56, 0.64, 1)"
```

### Animation Tokens

```ts
tokens.animations.fadeIn; // { duration: "200ms", easing: "...", keyframes: "fade-in" }
tokens.animations.fadeOut; // { duration: "150ms", easing: "...", keyframes: "fade-out" }
tokens.animations.slideUp; // { duration: "300ms", easing: "...", keyframes: "slide-up" }
tokens.animations.slideDown; // { duration: "300ms", easing: "...", keyframes: "slide-down" }
tokens.animations.scaleIn; // { duration: "200ms", easing: "...", keyframes: "scale-in" }
tokens.animations.bounce; // { duration: "500ms", easing: "...", keyframes: "bounce" }
tokens.animations.shake; // { duration: "400ms", easing: "...", keyframes: "shake" }
tokens.animations.pulse; // { duration: "1500ms", easing: "...", keyframes: "pulse" }
```

### Border Tokens

```ts
tokens.borders.card; // "#334155"
tokens.borders.input; // "#cbd5f5"
```

## Repository Layout

| Folder     | Responsibility                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| `tokens/`  | Raw JSON token files (modularized as `palette.json`, `typography.json`, `components.json`, etc.).             |
| `src/`     | TypeScript source that turns JSON into reusable formats (JS/TS exports, Tailwind theme, CSS helpers).         |
| `scripts/` | Build utilities and strictly-typed token merging engines.                                                     |
| `dist/`    | Generated artifacts: `index.js`, `index.cjs`, `index.d.ts`, and `index.css`. Regenerated via `npm run build`. |

Designers only touch the JSON under `tokens/`. Engineering evolves `src/` + `scripts/` when structure or transforms change.

## Build & Release

```bash
npm run build
```

`tsup` compiles the TypeScript library (ESM, CJS, `.d.ts`) and `scripts/build-css.js` emits `dist/index.css`. Because `dist/` is generated, releases are reproducible from `tokens/` + `src/`.

> Do not hand-edit `dist/`. Always regenerate it via the build.

For release history and version notes, see the **[Changelog](CHANGELOG.md)**.

## Migration & Comparison Guide

### Migrating from Other Token Systems

#### From Style Dictionary / Design Tokens Format

```js
// Old: Style Dictionary format
{
  "color": {
    "brand": {
      "primary": { "value": "#8652ff" }
    }
  }
}

// New: Spectre Tokens
tokens.colors.brand["500"] // "#8652ff"
```

#### From Tailwind Default Theme

```js
// Old: Tailwind's theme
colors.purple[500]; // "#a855f7"
spacing[4]; // "1rem"

// New: Spectre Tokens
tokens.colors.brand["500"]; // "#8652ff" (custom brand purple)
tokens.space["16"]; // "1rem"
```

#### From CSS Custom Properties Only

```css
/* Old: Manual CSS variables */
:root {
  --primary-color: #8652ff;
  --spacing-4: 1rem;
}

/* New: Spectre auto-generated */
:root {
  --sp-color-brand-500: #8652ff;
  --sp-space-16: 1rem;
  /* Plus 300+ more tokens */
}
```

### Key Differences from Other Systems

| Feature                 | Spectre Tokens            | Tailwind            | Material UI         | Chakra UI         |
| ----------------------- | ------------------------- | ------------------- | ------------------- | ----------------- |
| **Format**              | JSON → JS/TS/CSS          | JS Config           | Theme Object        | Theme Object      |
| **CSS Variables**       | ✅ Auto-generated         | ⚠️ Opt-in (v4+)     | ✅ Built-in         | ✅ Built-in       |
| **Dark Mode**           | ✅ Via `modes`            | ✅ Via classes      | ✅ Via palette mode | ✅ Via color mode |
| **Type Safety**         | ✅ Full TypeScript        | ⚠️ Partial          | ✅ Full             | ✅ Full           |
| **Framework Agnostic**  | ✅ Yes                    | ⚠️ Tailwind-focused | ❌ React-only       | ❌ React-only     |
| **Semantic Tokens**     | ✅ surface/text/component | ❌ Utility-first    | ✅ Built-in         | ✅ Built-in       |
| **Button States**       | ✅ CRO-optimized          | ❌ DIY              | ✅ Built-in         | ✅ Built-in       |
| **Form States**         | ✅ Validation-aware       | ❌ DIY              | ✅ Built-in         | ✅ Built-in       |
| **Tailwind Compatible** | ✅ Preset provided        | N/A                 | ⚠️ Via plugin       | ⚠️ Via plugin     |

### Why Choose Spectre Tokens?

1. **True Single Source of Truth**: JSON tokens drive everything - JS, CSS, Tailwind, documentation
2. **CRO-First Design**: Button and form states optimized for conversion and UX
3. **Framework Agnostic**: Use with React, Vue, Svelte, WordPress, Astro, 11ty, or vanilla JS
4. **Semantic + Utility**: Get both semantic tokens (surface, text) and utility tokens (colors, space)
5. **WCAG Built-In**: Accessibility constraints enforced at the token level
6. **No Lock-In**: Export to CSS variables and use anywhere, or integrate deeply with Tailwind
7. **Type-Safe**: Complete TypeScript definitions with autocomplete

## Spectre Design Philosophy

Spectre is a **specification-driven design system** built on three strict layers:

### 1. @phcdevworks/spectre-tokens (Foundation)

**Purpose**: Single source of truth for design values (colors, surfaces, text roles, space, radii, shadows, etc.)

**Exports**: CSS variables (`--sp-*`), TypeScript token object, Tailwind-compatible theme mappings

**Rules**:

- Tokens define semantic meaning, not UI behavior
- UI must never invent new colors or values
- Designers own `tokens/*.json`; engineers maintain `src/` transforms
- Contrast targets and accessibility constraints are encoded at the token level

**Status**: v2.0.0 released. Transitioned to modular JSON storage and full AI-readiness.

### 2. @phcdevworks/spectre-ui (Framework-Agnostic UI Layer)

**Purpose**: Converts tokens into real CSS and class recipes

**Ships**:

- `index.css` (canonical CSS bundle: tokens + base + components + utilities)
- `base.css` (resets + globals)
- `components.css` (`.sp-btn`, `.sp-card`, `.sp-input`, etc.)
- `utilities.css` (`.sp-stack`, `.sp-container`, etc.)
- Type-safe recipes: `getButtonClasses`, `getCardClasses`, `getInputClasses`

**Rules**:

- UI must consume tokens, not redefine design values
- Literal values in CSS are fallbacks only
- Every CSS selector has a matching recipe where applicable
- Tailwind preset is optional and non-authoritative

**Status**: v1.0.0 hardened and aligned to tokens. v2.0.0 compatibility ready.

### 3. Adapters (WordPress, Astro, etc.)

**Purpose**: Thin framework wrappers around spectre-ui; automatically sync and load the Spectre UI CSS bundle

**Rules**:

- Adapters never define styles, never duplicate CSS, never load tokens directly
- All design values come from tokens, all CSS comes from spectre-ui
- Adapters only translate and integrate

### Golden Rule (Non-Negotiable)

**Tokens define meaning. UI defines structure. Adapters only translate.**

- If it's a design token → belongs in `@phcdevworks/spectre-tokens`
- If it's a CSS class or style → belongs in `@phcdevworks/spectre-ui`
- If it's framework integration → belongs in an adapter

## Design Principles

1. **Single source of truth** – Tokens originate in JSON and flow into every runtime surface.
2. **Format-agnostic** – Consumers choose JS objects, CSS variables, Tailwind presets, or generated strings.
3. **Framework-neutral** – Works in WordPress, Astro, 11ty, React, or any environment that can ingest CSS/JS.
4. **Accessibility-first** – Focus rings, touch targets, and contrast targets are encoded directly in tokens.
5. **CRO-aware** – Buttons, forms, and state tokens are tuned for real-world conversion funnels.

## TypeScript Support

Type definitions are bundled automatically with comprehensive interfaces for all token types:

```ts
import type {
  Tokens,
  SpectreTokens,
  TailwindTheme,
  ColorScale,
  TokenScale,
  ButtonStateTokens,
  FormStateTokens,
  TypographyTokens,
  TypographyScaleEntry,
  FontScaleEntry,
  TransitionTokens,
  AnimationEntry,
  AccessibilityTokens,
  ComponentTokens,
  ComponentBadgeTokens,
  ComponentIconBoxTokens,
  LayoutTokens,
  SpectreModeTokens,
  SpectreModeName,
  SemanticTokenValue,
  CssVariableOptions,
  CssVariableMap,
} from "@phcdevworks/spectre-tokens";

const allTokens: SpectreTokens = tokens;
```

### Key Type Interfaces

**Core Token Types:**

```ts
// Color and token scales
type ColorScale = Record<string, string>;
type TokenScale = Record<string, string>;

// Typography
interface TypographyScaleEntry {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  letterSpacing?: string;
}

interface FontScaleEntry {
  size: string;
  lineHeight: string;
  weight: number;
}

// Component states
interface ButtonStateTokens {
  bg: string;
  bgHover: string;
  bgActive: string;
  bgDisabled: string;
  text: string;
  textDisabled: string;
  border?: string;
  borderDisabled?: string;
}

interface FormStateTokens {
  bg?: string;
  border: string;
  text?: string;
  placeholder?: string;
  ring?: string;
}

// Component tokens
interface ComponentBadgeTokens<Value = string> {
  neutralBg: Value;
  neutralText: Value;
  infoBg: Value;
  infoText: Value;
  successBg: Value;
  successText: Value;
  warningBg: Value;
  warningText: Value;
  dangerBg: Value;
  dangerText: Value;
}

interface ComponentIconBoxTokens<Value = string> {
  bg: Value;
  border: Value;
  iconDefault: Value;
  iconSuccess: Value;
  iconWarning: Value;
  iconDanger: Value;
}
```

**Semantic Token Types:**

```ts
// Semantic token values can be strings or objects with metadata
type SemanticTokenValue = string | { value: string; [key: string]: any };

// Mode names
type SpectreModeName = "default" | "dark";

// Mode structure
interface SpectreModeTokens {
  surface: {
    page: SemanticTokenValue;
    card: SemanticTokenValue;
    input: SemanticTokenValue;
    overlay: SemanticTokenValue;
  };
  text: {
    onPage: {
      default: SemanticTokenValue;
      muted: SemanticTokenValue;
      subtle: SemanticTokenValue;
      meta: SemanticTokenValue;
    };
    onSurface: {
      /* same as onPage */
    };
  };
  component: ComponentTokens<SemanticTokenValue>;
}
```

**CSS Variable Generation:**

```ts
interface CssVariableOptions {
  prefix?: string; // Default: "sp"
  selector?: string; // Default: ":root"
}

type CssVariableMap = Record<string, string>;

// Usage
const css: string = generateCssVariables(tokens, {
  prefix: "spectre",
  selector: ".my-theme",
});
```

### Type-Safe Token Access

TypeScript provides full autocomplete and type checking:

```ts
import tokens from "@phcdevworks/spectre-tokens";

// Autocomplete for all color palettes and shades
const brandColor = tokens.colors.brand["500"]; // ✅ Type: string

// Autocomplete for button states
const primaryBg = tokens.buttons.primary.bg; // ✅ Type: string
const primaryHover = tokens.buttons.primary.bgHover; // ✅ Type: string

// Type checking prevents invalid access
// tokens.colors.invalid["500"]; // ❌ TypeScript error
// tokens.buttons.primary.invalidProp; // ❌ TypeScript error

// Full type support for component tokens
const badgeBg: string = tokens.component.badge.successBg;
const iconColor: string = tokens.component.iconBox.iconDanger;
```

## Part of the Spectre Suite

- **Spectre Tokens** – Design-token foundation (this package)
- **Spectre UI** – Core styling layer
- **Spectre Blocks** – WordPress block library
- **Spectre Astro** – Astro integration
- **Spectre 11ty** – Eleventy integration

## Practical Examples

### Building a Button Component

```ts
import tokens from "@phcdevworks/spectre-tokens";

// Create a type-safe button configuration
const buttonStyles = {
  primary: {
    background: tokens.buttons.primary.bg,
    color: tokens.buttons.primary.text,
    borderRadius: tokens.radii.md,
    padding: `${tokens.space["12"]} ${tokens.space["24"]}`,
    fontSize: tokens.font.md.size,
    fontWeight: tokens.font.md.weight,
    transition: `all ${tokens.transitions.duration.fast} ${tokens.transitions.easing.out}`,
    "&:hover": {
      background: tokens.buttons.primary.bgHover,
    },
    "&:active": {
      background: tokens.buttons.primary.bgActive,
    },
    "&:disabled": {
      background: tokens.buttons.primary.bgDisabled,
      color: tokens.buttons.primary.textDisabled,
    },
  },
};
```

### Creating a Card Layout

```css
.card {
  background: var(--sp-surface-card);
  border: 1px solid var(--sp-borders-card);
  border-radius: var(--sp-radius-lg);
  padding: var(--sp-space-24);
  box-shadow: var(--sp-shadow-md);

  /* Semantic layout spacing */
  display: flex;
  flex-direction: column;
  gap: var(--sp-layout-stack-gap-md);
}

.card__title {
  color: var(--sp-text-on-surface-default);
  font-size: var(--sp-font-lg-size);
  line-height: var(--sp-font-lg-line-height);
  font-weight: var(--sp-font-lg-weight);
}

.card__description {
  color: var(--sp-text-on-surface-muted);
  font-size: var(--sp-font-md-size);
  line-height: var(--sp-font-md-line-height);
}

.card__meta {
  color: var(--sp-text-on-surface-meta);
  font-size: var(--sp-font-sm-size);
}
```

### Form with Validation States

```html
<!-- HTML structure -->
<div class="form-field">
  <label class="form-label">Email Address</label>
  <input type="email" class="form-input" />
  <span class="form-hint">We'll never share your email.</span>
</div>

<div class="form-field form-field--error">
  <label class="form-label">Password</label>
  <input type="password" class="form-input" />
  <span class="form-error">Password must be at least 8 characters.</span>
</div>
```

```css
/* CSS using Spectre tokens */
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--sp-layout-stack-gap-sm);
}

.form-label {
  color: var(--sp-text-on-page-default);
  font-size: var(--sp-font-sm-size);
  font-weight: var(--sp-font-md-weight);
}

.form-input {
  background: var(--sp-form-default-bg);
  border: 1px solid var(--sp-form-default-border);
  border-radius: var(--sp-radius-md);
  padding: var(--sp-space-12) var(--sp-space-16);
  font-size: var(--sp-font-md-size);
  color: var(--sp-form-default-text);
  transition: border-color var(--sp-transition-duration-fast)
    var(--sp-transition-easing-out);
  min-height: var(--sp-accessibility-min-touch-target);
}

.form-input::placeholder {
  color: var(--sp-form-default-placeholder);
}

.form-input:hover {
  border-color: var(--sp-form-hover-border);
}

.form-input:focus {
  outline: none;
  border-color: var(--sp-form-focus-border);
  box-shadow: 0 0 0 var(--sp-accessibility-focus-ring-width)
    var(--sp-form-focus-ring);
}

.form-field--error .form-input {
  border-color: var(--sp-form-invalid-border);
  background: var(--sp-form-invalid-bg);
}

.form-hint {
  color: var(--sp-text-on-page-subtle);
  font-size: var(--sp-font-xs-size);
}

.form-error {
  color: var(--sp-form-invalid-text);
  font-size: var(--sp-font-xs-size);
}
```

### Responsive Layout with Breakpoints

```ts
import { tailwindTheme } from "@phcdevworks/spectre-tokens";

// Use in CSS-in-JS or styled-components
const Container = styled.div`
  padding-inline: ${tokens.layout.container.paddingInline.sm};

  @media (min-width: ${tokens.breakpoints.md}) {
    padding-inline: ${tokens.layout.container.paddingInline.md};
  }

  @media (min-width: ${tokens.breakpoints.lg}) {
    padding-inline: ${tokens.layout.container.paddingInline.lg};
  }
`;
```

### Animated Modal

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: var(--sp-z-index-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sp-surface-overlay);
  animation: fade-in var(--sp-animation-fade-in-duration)
    var(--sp-animation-fade-in-easing);
}

.modal__content {
  background: var(--sp-surface-card);
  border-radius: var(--sp-radius-lg);
  padding: var(--sp-space-32);
  box-shadow: var(--sp-shadow-lg);
  max-width: 32rem;
  animation: scale-in var(--sp-animation-scale-in-duration)
    var(--sp-animation-scale-in-easing);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Badge Component System

```tsx
// React/TypeScript example
import tokens from "@phcdevworks/spectre-tokens";

type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'neutral', children }) => {
  const styles = {
    background: tokens.component.badge[`${variant}Bg` as keyof typeof tokens.component.badge],
    color: tokens.component.badge[`${variant}Text` as keyof typeof tokens.component.badge],
    padding: `${tokens.space["4"]} ${tokens.space["8"]}`,
    borderRadius: tokens.radii.sm,
    fontSize: tokens.font.xs.size,
    fontWeight: tokens.font.xs.weight,
    display: 'inline-flex',
    alignItems: 'center',
  };

  return <span style={styles}>{children}</span>;
};

// Usage
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>
```

### Custom Theme Scope

```ts
import { generateCssVariables } from "@phcdevworks/spectre-tokens";

// Generate scoped CSS variables for a specific component
const customThemeCSS = generateCssVariables(tokens, {
  selector: ".custom-widget",
  prefix: "widget",
});

// Output: Variables scoped to .custom-widget with --widget-* prefix
// .custom-widget {
//   --widget-color-brand-500: #8652ff;
//   --widget-space-16: 1rem;
//   ...
// }
```

## Troubleshooting & FAQ

### CSS Variables Not Working

**Problem:** CSS variables like `var(--sp-color-brand-500)` are not applying.

**Solution:**

1. Ensure you've imported the CSS file:
   ```css
   @import "@phcdevworks/spectre-tokens/dist/index.css";
   ```
2. Check that the file is being served correctly from `node_modules/`
3. Verify CSS import order - token CSS should come before your custom styles

### TypeScript Types Not Found

**Problem:** TypeScript can't find type definitions.

**Solution:**

1. Check that `@phcdevworks/spectre-tokens` is in your dependencies (not devDependencies)
2. Verify `dist/index.d.ts` exists in your `node_modules`
3. Try clearing TypeScript cache: `rm -rf node_modules/.cache`
4. Restart your TypeScript server/IDE

### Dark Mode Not Switching

**Problem:** Setting `data-spectre-theme="dark"` doesn't change colors.

**Solution:**

1. Apply the attribute to the `:root` or `<html>` element:
   ```js
   document.documentElement.setAttribute("data-spectre-theme", "dark");
   ```
2. Ensure you're using semantic tokens (surface, text, component) not raw colors
3. Raw color tokens (e.g., `tokens.colors.brand[500]`) don't change with themes - use semantic tokens instead

### Tailwind Integration Issues

**Problem:** Tailwind utilities not using Spectre tokens.

**Solution:**

1. Verify preset is added to your config:

   ```ts
   import { tailwindPreset } from "@phcdevworks/spectre-tokens";

   export default {
     presets: [tailwindPreset], // Must be in presets, not theme.extend
   };
   ```

2. Clear Tailwind cache: `rm -rf .next/cache` or `rm -rf node_modules/.cache`
3. Rebuild: `npm run build`

### Difference Between `font` and `typography`?

**Question:** When should I use `tokens.font.*` vs `tokens.typography.*`?

**Answer:**

- **Use `tokens.font.*`** for quick access to size, line-height, and weight:
  ```ts
  tokens.font.md.size; // "1rem"
  tokens.font.md.lineHeight; // "1.75rem"
  tokens.font.md.weight; // 500
  ```
- **Use `tokens.typography.*`** when you need:
  - Font families: `tokens.typography.families.sans`
  - Letter spacing: `tokens.typography.scale.xs.letterSpacing`
  - Complete typographic object: `tokens.typography.scale.md`

### How to Create Custom Modes?

**Question:** Can I add my own theme modes beyond default/dark?

**Answer:**
Yes! Extend the `modes` object in your `tokens/modes.json`:

```json
{
  "modes": {
    "default": {
      /* ... */
    },
    "dark": {
      /* ... */
    },
    "highContrast": {
      "surface": {
        "page": { "value": "#ffffff" }
      }
    }
  }
}
```

Then generate CSS with:

```css
:root[data-spectre-theme="highContrast"] {
  /* Custom mode variables */
}
```

### Can I Override Specific Tokens?

**Question:** How do I override just a few tokens without forking?

**Answer:**
Two approaches:

1. **CSS Override** (simplest):

   ```css
   :root {
     --sp-color-brand-500: #your-color !important;
   }
   ```

2. **JavaScript Override**:

   ```ts
   import tokens from "@phcdevworks/spectre-tokens";

   const customTokens = {
     ...tokens,
     colors: {
       ...tokens.colors,
       brand: {
         ...tokens.colors.brand,
         "500": "#your-color",
       },
     },
   };
   ```

### Accessing Nested Token Values

**Question:** Some tokens return `{ value: "..." }` instead of strings. Why?

**Answer:**
Semantic tokens in `modes` use the `{ value: "..." }` format for metadata. The TypeScript library automatically resolves these:

```ts
// In tokens/*.json: { "value": "#f8fafc" }
tokens.surface.page; // Returns "#f8fafc" (string)

// The library handles resolution automatically
```

If you're working with raw JSON, extract the value:

```ts
const rawValue = tokens.modes.default.surface.page.value;
```

## Contributing

Issues and pull requests are welcome. If you are proposing token changes, update `tokens/` and include regenerated builds.

For detailed contribution guidelines, see **[CONTRIBUTING.md](CONTRIBUTING.md)**.

---

## 🏛️ The Spectre Suite Hierarchy

Spectre is built on a non-negotiable hierarchy to prevent style leakage and duplication:

1.  **Layer 1: DNA (This Package)** – The source of truth for all design values.
2.  **Layer 2: Blueprint (UI)** ([@phcdevworks/spectre-ui](https://github.com/phcdevworks/spectre-ui)) – Translates tokens into CSS structure and recipes.
3.  **Layer 3: Adapters** (WordPress, Astro, etc.) – Thin bridges that map Layer 2 to specific frameworks.

> **The Golden Rule**: Tokens define *meaning*. UI defines *structure*. Adapters define *delivery*.

---


