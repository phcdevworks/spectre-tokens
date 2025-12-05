# Spectre Tokens – Roadmap

Design-token engine powering Spectre UI, Spectre Blocks, Spectre Astro, Spectre 11ty, and all future Spectre surfaces.

This roadmap tracks upcoming improvements to token architecture, semantic depth, accessibility roles, and theme contract stability.

---

## Current Version

**0.0.2** — Refined Foundations
Stabilized exports, introduced `SpectreTokens` type, fixed JSON/type mismatches, and improved documentation.

---

## Roadmap Overview

Spectre Tokens evolves in three layers:

1. **Foundations** – raw tokens & internal consistency
2. **Semantics** – surface/text/component roles
3. **Theming** – light/dark modes & future extensibility

This document covers all three layers in order of priority.

---

## Milestone 1 — Semantic Surfaces (v0.0.3)

Introduce first-class surface & text roles for UI clarity and predictable contrast.

### Goals

- Add semantic surface tokens
- Add contextual text tokens
- Add component-level semantic aliases
- Begin expanding the Spectre design contract

### Planned Work

**`surface.*` roles**

- `surface.page`
- `surface.card`
- `surface.input`
- `surface.overlay`

**`text.*` roles**

- `text.onPage.default`
- `text.onPage.muted`
- `text.onPage.subtle`
- `text.onSurface.default`
- `text.onSurface.muted`
- `text.onSurface.subtle`

**`component.*` aliases**

- `component.card.text`
- `component.input.text`
- `component.input.placeholder`
- `component.button.textDefault`
- `component.button.textOnPrimary`

### Deliverables

- Updated JSON token structure
- Updated `SpectreTokens` interface
- Docs describing surface & text semantics
- Patch/Minor release: `0.0.3` or `0.1.0`

---

## Milestone 2 — Typography & Elevation Robustness

Normalize foundational scales for consistent UI building.

### Goals

- Normalize text scales for dark vs light usage
- Introduce elevation, shadow, and radius scales
- Provide component-level semantic borders

### Planned Additions

- `shadow.sm`, `shadow.md`, `shadow.lg`
- `radii.sm`, `radii.md`, `radii.lg`
- `borders.card`, `borders.input`

### Contrast Requirements

WCAG AA/AAA targets enforced for:

- Body text
- Muted/subtle text
- Button contrast
- Surface overlays

### Deliverables

- Updated foundational scales
- README documentation
- Regression checks to prevent breaking UI

---

## Milestone 3 — Theme Contract & Modes (v0.2.0)

Add theme mode structure even if dark mode is not fully shipped yet.

### Goals

- Introduce a basic theme contract for multi-mode support
- Add a future-proof structure for dark mode tokens
- Maintain backward compatibility

### Planned Structure

```json
{
  "modes": {
    "default": {
      "surface": { ... },
      "text": { ... }
    },
    "dark": {
      "surface": {},
      "text": {}
    }
  }
}
```

### Deliverables

- Updated JSON
- Updated `SpectreTokens` (with `modes?: any`)
- Documentation of theme modes
- Minor version bump: `0.2.0`

---

## Milestone 4 — Token Regression & Stability Tooling

Protect consumers like Spectre UI and Astro from accidental token drift.

### Goals

- Ensure token keys never disappear unexpectedly
- Provide a script developers can run locally or in CI
- Help track evolving token structures over time

### Planned Tools

**`scripts/check-tokens-regression.ts`**

Validates key paths:

- `colors.brand`
- `surface.page`
- `text.onSurface.default`
- `component.card.text`

Fails if keys go missing.

### Deliverables

- Regression tooling
- CI script option
- Optional GitHub Action template

---

## Milestone 5 — Documentation Depth

Make Spectre Tokens self-explanatory to all consuming packages.

### Goals

- Clearly explain semantic roles
- Provide examples for UI components
- Establish a consistent vocabulary for Spectre Suite

### Planned Docs

- Surface & text usage guide
- Component alias guidelines
- Contrast rationale (WCAG AA/AAA)
- Mode usage & future-proofing

---

## Long-Term Ideas (Not Scheduled Yet)

- Token-driven motion specs (spring physics, easing curves)
- Density modes (comfortable/compact)
- Theme packages for Spectre Suite consumers
- Token transformation API (export JSON → CSS → SCSS → Figma Plugin JSON)

---

## Versioning Strategy

- **Patch (0.0.x)** → small additions, fixes, safe updates
- **Minor (0.x.0)** → new semantic groups or new theme structures
- **Major (1.0.0)** → stable contract across all Spectre surfaces

---

## Contributing

Any PR modifying JSON under `tokens/` must regenerate `dist/` via `npm run build`.

Documentation updates should accompany any new semantic groups or theme structures.
