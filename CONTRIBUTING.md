# Contributing to @phcdevworks/spectre-tokens

Thanks for helping improve Spectre Tokens! This package is the single source of truth for every Spectre design token and is consumed by Spectre UI, Spectre Blocks, Spectre Astro, Spectre 11ty, and future projects. Keeping the token definitions clean, typed, and well-documented ensures every downstream experience stays consistent.

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

**Status**: v0.1.0 released with stable semantic roles (`surface.*`, `text.*`, `component.*`) and considered correct/locked

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

**Status**: v0.1.0 released, hardened and aligned to tokens

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

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
