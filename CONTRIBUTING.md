# Contributing to @phcdevworks/spectre-tokens

Thanks for helping improve Spectre Tokens! This package is the single source of truth for every Spectre design token and is consumed by Spectre UI, Spectre Blocks, Spectre Astro, Spectre 11ty, and future projects. Keeping the token definitions clean, typed, and well-documented ensures every downstream experience stays consistent.

## Spectre Design System Non-Negotiables (Authoritative)

Spectre is a specification-driven design system with three strict layers. Keep these in mind for any contribution so responsibilities never blur.

### 1. @phcdevworks/spectre-tokens (Foundation, Source of Truth)

- Purpose: single source of truth for design values (colors, surfaces, text roles, space, radii, shadows, etc.).
- Exports: CSS variables (`--sp-*`), TypeScript token object, Tailwind-compatible theme mappings.
- Rules: tokens define meaning, not UI behavior; UI must never invent new colors; tokens may provide fallbacks but semantics live here.
- Status: v0.1.0 released with stable semantic roles (surface.*, text.*, component.*) and considered correct/locked.

### 2. @phcdevworks/spectre-ui (Framework-Agnostic UI Layer)

- Purpose: converts tokens into real CSS and class recipes.
- Ships: `index.css` (canonical CSS bundle: tokens + base + components + utilities), `base.css` (resets + globals), `components.css` (.sp-btn, .sp-card, .sp-input, etc.), `utilities.css` (.sp-stack, .sp-container, etc.).
- Provides recipes: `getButtonClasses`, `getCardClasses`, `getInputClasses`.
- Rules: UI must consume tokens, not redefine design values; literal values in CSS are fallbacks only; every CSS selector has a matching recipe where applicable; Tailwind preset is optional and non-authoritative.
- Status: v0.1.0 released, hardened and aligned to tokens (no badge or iconbox primitives yet).

### 3. @phcdevworks/spectre-ui-astro (Adapter/Wrapper Only)

- Purpose: thin Astro wrapper around spectre-ui; imports class recipes and outputs correct HTML + classes; exposes a single CSS entry constant.
- Canonical CSS entry: `export const SPECTRE_UI_CSS = "@phcdevworks/spectre-ui/index.css";`
- Astro layout usage: `<link rel="stylesheet" href={SPECTRE_UI_CSS} />`
- Rules: Astro never loads tokens directly, never defines styles, never duplicates CSS; Astro components are HTML + classes only.
- Status: v0.1.0 released with `<SpButton />`, `<SpCard />`, `<SpInput />`; packaging bugs fixed (dist paths, exports).

### Known Gaps (Not Done Yet)

- Badge primitive and IconBox primitive (and their recipes/CSS/Astro wrappers) were intentionally not part of v0.1.0.

### What Needs to Happen Next

- Spectre UI: add CSS primitives (`.sp-badge`, `.sp-iconbox`), variants/sizes, class recipes (`getBadgeClasses()`, `getIconBoxClasses()`), exports (`src/recipes/index.ts`, `src/index.ts`), and tests (class string correctness, CSS selector existence).
- Spectre UI Astro: add wrappers (`<SpBadge />`, `<SpIconBox />`), ensure components copy to `dist`, exports resolve cleanly, and no CSS logic is added.

### Golden Rule (Non-Negotiable)

Tokens define meaning. UI defines structure. Adapters only translate. If a value looks like design, it belongs in tokens. If it is a class, it belongs in spectre-ui. If it is markup, it belongs in Astro.

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/phcdevworks/spectre-tokens.git
cd spectre-tokens
```

2. Install dependencies:

```bash
npm install
```

3. Build the package (one-off or in watch mode) to verify changes:

```bash
npm run build
# or: npm run build:ts -- --watch
```

## Project Structure

- `tokens/` – Raw JSON token definitions owned by design (`core.json` and any future scoped files)
- `src/` – TypeScript utilities that transform JSON tokens into JS/TS exports, Tailwind themes, and CSS helpers
- `scripts/` – Build utilities (e.g., `build-css.js`) that turn compiled outputs into CSS bundles
- `dist/` – Generated JS, CJS, type declarations, and CSS artifacts (never edit by hand)

Design can safely edit only the JSON in `tokens/`. Engineering owns `src/` + `scripts/` when structure or formats need to evolve.

## Guidelines

### Tokens and Generation

1. **Tokens first** – Add or adjust tokens in `tokens/`. Scripts and TypeScript helpers should derive all values from those JSON files.
2. **No manual `dist/` edits** – Always run `npm run build` after token or source changes so generated files stay in sync.
3. **Stable naming** – Use semantic names (`color.brand.500`, `space.16`, etc.) and avoid framework-specific wording in the raw tokens.
4. **Consistent outputs** – When adding new token categories, ensure corresponding JS exports, Tailwind entries, and CSS variables exist so consumers receive the same surface area everywhere.

### TypeScript & Code Style

- This project is `"type": "module"`—use ES modules and modern TypeScript syntax.
- Keep helpers composable and documented only when behavior is non-obvious.
- Update type definitions (`src/index.ts` exports) when introducing new public helpers.
- Run `npm run build` before opening a PR to ensure tsup, TypeScript, and CSS generation succeed.

### Documentation

- Update `README.md` (and any other docs) whenever public APIs, token categories, or usage guidance changes.
- If tokens impact CRO/accessibility messaging, revise those sections to match the new behavior.
- Add or update inline JSDoc when you introduce complex helper functions.

## Pull Request Process

1. Branch from `main`.
2. Make your changes along with tests/builds passing (`npm run build`).
3. Commit regenerated artifacts in `dist/` whenever token or source changes require them.
4. Update documentation or code comments to reflect behavior changes.
5. Open a PR describing the motivation, changes, and follow-up considerations.

## Questions?

Please open an issue or discussion on GitHub if you're unsure about the best approach for a change. Coordinating early avoids diverging token definitions across the Spectre Suite.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
