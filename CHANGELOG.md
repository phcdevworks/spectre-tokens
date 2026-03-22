# Changelog

All notable changes to this project will be documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning reflects package releases published to npm.

## [2.1.0] - 2026-03-22

### Added
- Integrated **ESLint** and **Prettier** into `devDependencies` for automated code health.
- Added `npm run lint` and `npm run format` scripts for standardized development workflows.

### Changed
- **Workspace Cleanup**: Purged all legacy Astro configurations from the VS Code workspace.
- **Task Synchronization**: Aligned VS Code tasks with `package.json` scripts (`build`, `generate`, `lint`, `format`, `check`).
- **Standardized Ignored Files**: Updated `.gitignore` with common build and OS-level exclusions.

### Removed
- Removed broken `check:ai` script and references to missing `skills/` directory (incoming in future release).

## [2.0.0] - 2026-03-15

### Added
- Added semantic brand text roles (`text.onPage.brand`, `text.onSurface.brand`) for theme-aware brand typography.
- Added interactive state tokens (`hoverBg`) to component badge definitions.

### Changed
- **Major Architectural Refactor**: Modularized token storage by splitting the monolithic `core.json` into domain-specific files (`palette.json`, `primitives.json`, `semantic-roles.json`, `components.json`, `typography.json`, `modes.json`).
- Re-engineered the build pipeline to use a type-safe deep-merge engine (`token-utils.ts`) for multi-file token resolution.
- Updated `generate-types.ts` to export both strict interfaces and the internal `coreTokens` data constant, decoupling the runtime from JSON file system dependencies.
- Decoupled `src/index.ts` from direct JSON imports in favor of strictly-typed generated data.
- Optimized `check-contrast.ts` for performance and added protection against circular token references.

### Fixed
- Enforced strict typing by eliminating the `any` keyword across all project scripts and utilities.
- Resolved performance bottlenecks and potential hangs in recursive token validation.

## [1.1.0] - 2026-03-11

### Added
- Added automated TypeScript definition generation script (`generate-types.ts`) derived verbatim from `core.json`.
- Enforced 100% strict adherence against "any" typings within core token consumption.

### Changed
- Refactored `src/types.ts` to strictly derive `Tokens` and `TailwindTheme` interfaces from auto-generated typings.
- Updated `package.json` with `generate` and `prebuild` scripts to execute TS generation automatically on build.
- Revised formatting, exports, and rewritten directives for `AGENTS.md` to optimize for downstream LLM framework parsing boundaries.
- Bumped `esbuild` and `rollup` to match lockfile definitions.

### Fixed
- Fixed unhandled typecast and variable declaration conflicts in `check-tokens-regression.ts`.
- Resolved TypeScript errors regarding optional `letterSpacing` access within index styling logic.

## [1.0.0] - 2026-02-01

### Added
- Added comprehensive visual documentation with 13 HTML example pages demonstrating all token categories.
- Added 12 GitHub-browsable markdown documentation files with detailed tables, usage guidelines, and best practices.
- Added `icons` token group with 7 size scales for consistent iconography across all surfaces.
- Added `aspectRatios` token group with 6 ratio definitions for media and image containers.
- Added `testimonial` component tokens with dark mode support.
- Added `pricingCard` component tokens for pricing tiers.
- Added `rating` component tokens for star ratings and review scores.
- Added enhanced color contrast documentation to `accessibility.md` with WCAG-verified examples.
- Added `examples.md` as central documentation hub linked from main README.

### Changed
- **Major version bump to 1.0.0** - Stable API with comprehensive documentation and production-ready outputs.
- Reorganized example documentation structure with `examples.md` as central hub.
- Updated `package.json` version to 1.0.0 reflecting stable, production-ready status.
- Improved formatting and exports consistency across TypeScript files.

### Fixed
- Fixed TypeScript type errors by adding missing component tokens to top-level component object.
- Fixed broken back navigation links in markdown documentation after renaming.
- Enhanced build output with updated source maps for better debugging.

## [0.2.1] - 2026-01-14

### Added
- Added comprehensive Quick Start section representing integration approaches for CSS variables, JS/TS, and Tailwind.
- Added complete Token Reference section documenting all available tokens with examples.
- Added detailed Typography section explaining typographic scales and usage guidelines.
- Added Icon Box component tokens documentation.
- Added comprehensive Modes & Theme Switching section explaining the semantic token system.
- Added Practical Examples section with real-world implementations for buttons, cards, and forms.
- Added Troubleshooting & FAQ section and Migration & Comparison Guide.
- Added `subtle` text color tokens for improved typographic hierarchy.

### Changed
- Expanded README documentation with comprehensive token reference and examples.
- Improved documentation structure with detailed explanations of token access patterns.

### Fixed
- Enhanced documentation accuracy by aligning token access examples with actual implementation.
- Corrected badge token access paths and added missing iconBox documentation.

## [0.2.0] - 2025-12-20

### Added
- Added `layout.*` token group for semantic spacing patterns.
- Added `space.*` token group following an 8px grid system.
- Added comprehensive documentation for Spectre design system non-negotiables.

### Changed
- Revised spacing token structure and documentation for improved clarity.
- Enforced stricter validation checks for token spacing and layout properties.

### Deprecated
- Deprecated `spacing.*` tokens in favor of `space.*` tokens for clearer semantic naming.

## [0.1.0] - 2025-12-08

### Added
- Added `font` tokens with size, line-height, and weight properties for typography scale.
- Introduced `meta` text token for secondary/metadata text styling.
- Added `badge` component tokens for status indicators.
- Extended CSS variable generation to support new token groups.
- Integrated new tokens into Tailwind theme system.

## [0.0.4] - 2025-12-07

### Added
- Implemented dark mode CSS variable generation with `.dark` class selector support.
- Added core token assertion script to validate token structure integrity.
- Added documentation for theme modes and CSS variable usage patterns.

### Changed
- Updated color tokens in `modes.default` for improved light mode contrast.
- Populated `modes.dark` with complete dark mode color definitions.

## [0.0.3] - 2025-12-06

### Added
- Introduced `surface.*` roles for page, card, input, and overlay backgrounds.
- Added `text.onPage.*` and `text.onSurface.*` roles for contextual typography.
- Added `component.*` semantic aliases mapping to underlying text roles.
- Added `borders.*` token group for card and input definitions.
- Reserved `modes.default` and `modes.dark` structures for theming support.
- Added token regression check script to protect against breaking changes.

## [0.0.2] - 2025-12-04

### Changed
- Refactored TypeScript types for improved strictness and flexibility.
- Updated README with corrected API usage examples and type documentation.

### Fixed
- Resolved TypeScript type mismatches when importing JSON tokens.
- Corrected CSS import path in README.

## [0.0.1] - 2025-11-21

### Added
- Initial Spectre Tokens package scaffolding with TypeScript build pipeline.
- CRO-focused button, form, accessibility, animation, and opacity token sets.
- Semantic color scales, breakpoint definitions, and transition tokens.
- Standardized documentation and contributing guidelines.

[unreleased]: https://github.com/phcdevworks/spectre-tokens/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/phcdevworks/spectre-tokens/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.2.1...v1.1.0
[0.2.1]: https://github.com/phcdevworks/spectre-tokens/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-tokens/tree/v0.0.1
