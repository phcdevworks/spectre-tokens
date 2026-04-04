# Contributing to @phcdevworks/spectre-tokens

Thanks for helping improve Spectre. This package is maintained by PHCDevworks as
Layer 1 of the Spectre suite. It is the source of truth for the design language
consumed by the rest of the ecosystem.

## Spectre Suite Model

Spectre is organized as a strict layered system:

### Layer 1: `@phcdevworks/spectre-tokens`

- Purpose: define semantic design values and token contracts
- Scope: token JSON, transforms, typed exports, CSS variables, Tailwind theme
  exports, and validation tooling

### Layer 2: `@phcdevworks/spectre-ui`

- Purpose: turn tokens into reusable CSS, utilities, and recipes
- Scope: structure and implementation, never new design values

### Layer 3: adapters such as `@phcdevworks/spectre-ui-astro`

- Purpose: expose Spectre UI through framework-native components
- Scope: delivery for a platform, never duplicate tokens or CSS logic

The rule across the suite is simple: tokens define meaning, UI defines
structure, adapters define delivery.

## Development Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `npm run build` to regenerate outputs.
4. Run `npm run check` as the full validation gate before opening a pull request.

## Project Structure

- `tokens/`: canonical JSON token sources
- `src/`: typed transforms and public exports
- `scripts/`: generation and validation utilities
- `dist/`: generated release artifacts

## Contribution Guidelines

### Token changes

1. Make token changes in `tokens/`, not `dist/`.
2. Keep names semantic and reusable across the suite.
3. Treat deletions and renames as breaking changes unless they are part of a
   planned major release.
4. Ensure new token categories are reflected in generated TypeScript, CSS, and
   Tailwind outputs when applicable.
5. Do not modify locked `success`, `warning`, `danger`, or CTA/brand-action
   color contracts unless explicitly approved.

### Code and tooling

- This package uses ES modules and strict TypeScript.
- Avoid `any` and prefer explicit, readable types.
- Keep helpers composable and easy to trace.
- Do not hand-edit generated files.

### Documentation

- Update [README.md](README.md) when public token surfaces or usage patterns
  change.
- Keep wording aligned with the rest of the Spectre suite and with PHCDevworks
  ownership.
- Keep examples framed as documentation for token usage, not as canonical UI
  components owned by this package.
- Document contract changes clearly so downstream packages can stay in sync.

## Pull Request Checklist

1. Keep the change focused.
2. Run `npm run build` if you changed token sources and need regenerated outputs locally.
3. Run `npm run check` as the final validation gate.
4. Update docs if public behavior or guidance changed.
5. Include regenerated artifacts when the release surface changed.

## Questions

Open an issue or discussion in this repository if you need direction before
making a larger change.

## Code of Conduct

By participating in this project, you agree to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.
