# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

Contract change type: semantic change

### Changed

- Standardized non-protected semantic text roles in `tokens/semantic-roles.json`
  by converting them to the `{ value, metadata }` object structure and adding
  explicit `pair` metadata to enable automated contrast validation for core UI
  surfaces.

### Added

- Added explicit contrast-pair metadata to the `pricingCard` featured text and
  badge tokens in `tokens/components.json` and `tokens/modes.json` to enable
  consistent automated contrast validation against their respective backgrounds
  across the base contract and theme modes.

## [2.5.0] - 2026-05-04

**Release Title:** Badge Contrast Metadata and Contract Change Guidance

Contract change type: semantic change

### Added

- Added explicit contrast-pair metadata to the base `infoText` badge foreground
  token in `tokens/components.json` to enable automated contrast validation
  against its interactive hover background at the source level.
- Added a maintainer-facing contract-impacting change checklist to
  `CONTRIBUTING.md` covering required source, manifest, build, validation,
  documentation, and changelog classification steps.
- Linked `TOKEN_CONTRACT.md` and `ROADMAP.md` from the README navigation so
  contract and planning docs are easier to find from the package homepage.

### Changed

- Synchronized base `neutralText` and `infoText` badge contrast metadata with
  interactive background states to ensure the core contract is validated
  consistently across all themes.
- Synchronized `infoText` badge contrast metadata in both default and dark modes
  to ensure foreground contrast is validated against the stricter hover state.
- Deepened accent button background, hover, and active tokens to improve text
  contrast while preserving the existing accent button contract.
- Updated CI to validate against Node.js 22 explicitly.
- Refreshed the execution TODO to mark delivered contract-integrity work as
  complete and keep remaining planning focused on maintainer clarity and
  release-note quality.
- Bumped ESLint and TypeScript ESLint tooling to current compatible patch
  releases.

### Fixed

- Added explicit contrast-pair metadata to neutral and info badge foreground
  tokens in both modes to ensure they are validated against their stricter hover
  state.
- Improved accent button accessibility by moving interactive backgrounds to a
  stronger accent ramp.

## [2.4.0] - 2026-04-25

**Release Title:** Surface Parity and Elevation Stabilization

Contract change type: semantic change

### Changed

- Standardized dark-mode `surface.overlay` on true black with opacity so overlay
  treatment has consistent parity with the default mode.
- Strengthened muted foreground tokens for cards, testimonials, and pricing
  cards to improve readability while preserving their semantic roles.
- Standardized shadow primitives on `colors.black` so elevation behaves
  consistently across color modes.
- Refactored CSS variable generation around shared semantic entry mappings to
  reduce drift risk between default and dark mode output.
- Removed the unused `chroma-js` dependency and refreshed Rollup and
  TypeScript ESLint tooling.

### Fixed

- Updated testimonial and pricing-card contrast metadata to validate against
  hover backgrounds where those components are most constrained.
- Reused the shared `getPathValue` utility in validation scripts to keep
  contract path checks consistent.

## [2.3.0] - 2026-04-18

**Release Title:** Contract Authority and CSS Output Hardening

Contract change type: semantic change

### Added

- Added `contract.manifest.json` as the machine-readable contract authority for
  public namespaces, required outputs, protected semantic groups, and change
  classification rules.
- Added `TOKEN_CONTRACT.md` and stronger doc validation so README, token
  contract docs, runtime exports, and generated outputs are checked together.
- Added smoke-consumer fixtures and a consumer contract check to verify the
  package shape from a downstream integration path.
- Added roadmap and TODO planning documents to make the contract-led direction
  of the package more explicit.

### Changed

- Tightened the publish gate to run the full validation suite before verifying
  `dist` sync to prevent releases without contract checks.
- Aligned `font.xs` with `typography.scale.xs` to keep the font scale consistent
  with the canonical typography sizing.
- Added contract-authority enforcement through `contract.manifest.json`,
  fail-fast namespace/output/doc validation, and downstream change
  classification checks.
- Clarified package ownership, consumer guidance, and documentation boundaries
  so token meaning remains centralized in this package rather than drifting into
  examples or downstream UI structure.
- Refined contract manifest validation coverage, synchronized supporting docs,
  and refreshed development dependencies for the current toolchain.

### Fixed

- Fixed CSS variable resolution for nested token references so generated CSS
  resolves the intended token values consistently.
- Aligned dark-mode hero gradient flow with the default-mode direction to keep
  hero treatment visually consistent across themes.
- Corrected CSS generation for scalar color groups so single-value palette
  entries such as `white` and `black` emit stable CSS variables instead of
  fragmented indexed artifacts.
- Expanded emitted semantic CSS variables to include brand text aliases and the
  mode-aware `surface.alternate` contract for better alignment with runtime
  token semantics.
- Tightened CSS contract validation and refreshed exported helper typings so
  generated outputs, public TypeScript helpers, and runtime tokens stay in sync
  more reliably.

## [2.2.0] - 2026-04-11

**Release Title:** Contract Alignment and Interaction Coverage

### Added

- Added `focusVisible` token aliases for supported button variants plus a
  top-level `forms.focusVisible` block to keep focus styling consistent across
  the token contract.
- Added `bgHover` interaction-state tokens for `pricingCard` and
  `testimonial`, including mode-aware overrides and contrast-pair metadata for
  validation coverage.
- Added a Buildkite verification pipeline for repository validation alongside
  the existing GitHub Actions workflow.

### Changed

- Flattened the generated public token tree to string values so the generated
  TypeScript contract now matches the runtime export and keeps internal
  `{ value, metadata }` wrappers private to source generation.
- Synchronized the derived `font` scale with `typography.scale`, including the
  missing larger size entries and corrected font weights.
- Preserved the built `dist/index.css` artifact in published outputs and
  clarified packaging behavior with `sideEffects`.
- Clarified token contract rules, release hygiene, and validation expectations
  across repository documentation and agent guidance.
- Refined dependency-management automation and bumped development tooling to
  current compatible versions.

### Fixed

- Aligned `component.card.textMuted` with the muted semantic role in default
  mode.
- Aligned dark-mode `iconBox.iconDefault` tokens more consistently with the
  rest of the icon-box color system.
- Improved testimonial `quoteMark` contrast and expanded contrast-validation
  coverage for that component.

## [2.1.2] - 2026-04-05

**Release Title:** Validation Guardrails and CI

### Added

- Added a locked color contract regression check and baseline covering the
  protected success, warning, danger, and CTA/brand-action families.
- Added a GitHub Actions CI workflow that runs `npm run build` and
  `npm run check` on pushes to `main` and on pull requests.
- Added `metadata.pair` mappings across inputs, badges, cards, ratings, and
  icon box tokens to expand automated contrast validation coverage.
- Added missing `neutralBgHover` and `infoBgHover` badge tokens in default mode
  to improve hover-state parity across semantic variants.

### Changed

- Changed the validation flow so `npm run build` regenerates outputs only while
  `npm run check` acts as the full validation gate for structure, locked
  colors, contrast, regression, and linting.
- Clarified repository guidance around release hygiene, locked color families,
  Tailwind theme exports, and the role of `example/` as illustrative token
  documentation rather than downstream UI ownership.
- Refined dark-mode neutral text hierarchy and related component text tokens to
  improve separation and readability while preserving semantic clarity.
- Silenced the TypeScript 6 deprecation gate during DTS generation so
  `npm run build` completes cleanly under the current toolchain.
- Bumped the TypeScript, ESLint, and Node type tooling to current compatible
  versions.

### Fixed

- Improved placeholder contrast for input and form tokens to meet WCAG AA and
  wired those surfaces into automated contrast checks.
- Standardized info badge dark-mode backgrounds and hover behavior to align
  semantic badge ramps more consistently across modes.

## [2.1.1] - 2026-03-29

**Release Title:** Semantic Color Refinement

### Added

- Added `metadata.pair` mappings across token definitions to make contrast
  validation more explicit and easier to maintain across buttons, badges, and
  semantic surfaces.

### Changed

- Refined the color system with clearer semantic separation between `brand`,
  `info`, `success`, `warning`, `error`, and `accent` palettes.
- Reworked CTA button tokens to use the brand ramp instead of the warning ramp
  so primary conversion actions no longer read as cautionary.
- Renamed the HTML examples hub from `index.html` to `examples.html` to better
  reflect its purpose as a demo index rather than a site homepage.
- Updated generated TypeScript and CSS outputs to reflect the revised token
  source data.
- Refreshed the main example pages and markdown references so the published
  examples match the current token contract.

### Fixed

- Improved badge hover contrast and dark-mode badge pairings so warning and
  status variants remain WCAG AA compliant.
- Corrected stale example colors and back-navigation links in the example
  documentation set.

## [2.1.0] - 2026-03-22

**Release Title:** Accessibility and Workflow Expansion

### Added

- **Interactive Accessibility**: Added `focusRing` tokens to all button variants
  (Primary, Secondary, Success, Danger) and established a top-level
  `accessibility.focusRing` accessibility token group.
- **Badge Evolution**: Introduced `BgHover` overrides for dark mode badges to
  ensure CRO consistency across themes.
- **Layout & Borders**: Added `borderWidth` tokens with Tailwind mapping and new
  `maxWidth` container tokens.
- **Tooling**: Integrated **ESLint** and **Prettier** into `devDependencies` for
  automated code health.
- **Auto-Sync**: Standardized `npm run lint` and `npm run format` scripts for
  standardized development workflows.

### Changed

- **Palette Harmonization**: Harmonized the `accent` color palette for better
  visual consistency across the ecosystem.
- **Workspace Modernization**: Replaced legacy `.vscode` settings with a
  centralized `phcdevworks.workspace` configuration.
- **Documentation Refresh**: Revised `README.md` and `CONTRIBUTING.md` to
  emphasize the **DNA (Layer 1)** layer hierarchy and modular token structure.
- **Project Hygiene**: Standardized ESM import ordering and reformatted the
  entire codebase for better "grep-ability."
- **Architecture Purge**: Removed all legacy Astro dependencies and associated
  associations to the internal `tsup` build pipeline.

### Removed

- Removed legacy `.vscode` folder and Astro-specific configurations.
- Temporary AI skill references (preparing for future integration).

### Fixed

- **Circular Reference Protection**: Implemented robust detection in
  `check-contrast.ts` via visited set tracking to prevent infinite recursion.
- **Type Safety**: Eradicated remaining `any` type-casts in `src/css.ts` in
  favor of strict `Record<string, unknown>` validation.

## [2.0.0] - 2026-03-15

**Release Title:** Modular Token Architecture

### Added

- Associated semantic brand text roles (`text.onPage.brand`,
  `text.onSurface.brand`) for theme-aware brand typography.
- Associated interactive state tokens (`hoverBg`) to component badge
  definitions.

### Changed

- **Major Architectural Refactor**: Modularized token storage by splitting the
  monolithic `core.json` into domain-specific files (`palette.json`,
  `primitives.json`, `semantic-roles.json`, `components.json`,
  `typography.json`, `modes.json`).
- Re-engineered the build pipeline to use a type-safe deep-merge engine
  (`token-utils.ts`) for multi-file token resolution.
- Updated `generate-types.ts` to export both strict interfaces and the internal
  `coreTokens` data constant, decoupling the runtime from JSON file system
  dependencies.
- Decoupled `src/index.ts` from direct JSON imports in favor of strictly-typed
  generated data.
- Optimized `check-contrast.ts` for performance and added protection against
  circular token references.

### Fixed

- Enforced strict typing by eliminating the `any` keyword across all project
  scripts and utilities.
- Resolved performance bottlenecks and potential hangs in recursive token
  validation.

## [1.1.0] - 2026-03-11

**Release Title:** Generated Types and Strict Typing

### Added

- Added automated TypeScript definition generation script (`generate-types.ts`)
  derived verbatim from `core.json`.
- Enforced 100% strict adherence against "any" typings within core token
  consumption.

### Changed

- Refactored `src/types.ts` to strictly derive `Tokens` and `TailwindTheme`
  interfaces from auto-generated typings.
- Updated `package.json` with `generate` and `prebuild` scripts to execute TS
  generation automatically on build.
- Revised formatting, exports, and rewritten directives for `AGENTS.md` to
  optimize for downstream LLM framework parsing boundaries.
- Bumped `esbuild` and `rollup` to match lockfile definitions.

### Fixed

- Fixed unhandled typecast and variable declaration conflicts in
  `check-tokens-regression.ts`.
- Resolved TypeScript errors regarding optional `letterSpacing` access within
  index styling logic.

## [1.0.0] - 2026-02-01

**Release Title:** Stable Documentation and Component Coverage

### Added

- Added comprehensive visual documentation with 13 HTML example pages
  demonstrating all token categories.
- Added 12 GitHub-browsable markdown documentation files with detailed tables,
  usage guidelines, and best practices.
- Added `icons` token group with 7 size scales for consistent iconography across
  all surfaces.
- Added `aspectRatios` token group with 6 ratio definitions for media and image
  containers.
- Added `testimonial` component tokens with dark mode support.
- Added `pricingCard` component tokens for pricing tiers.
- Added `rating` component tokens for star ratings and review scores.
- Added enhanced color contrast documentation to `accessibility.md` with
  WCAG-verified examples.
- Added `examples.md` as central documentation hub linked from main README.

### Changed

- **Major version bump to 1.0.0** - Stable API with comprehensive documentation
  and production-ready outputs.
- Reorganized example documentation structure with `examples.md` as central hub.
- Updated `package.json` version to 1.0.0 reflecting stable, production-ready
  status.
- Improved formatting and exports consistency across TypeScript files.

### Fixed

- Fixed TypeScript type errors by adding missing component tokens to top-level
  component object.
- Fixed broken back navigation links in markdown documentation after renaming.
- Enhanced build output with updated source maps for better debugging.

## [0.2.1] - 2026-01-14

**Release Title:** Documentation Expansion and Text Hierarchy

### Added

- Added comprehensive Quick Start section representing integration approaches
  for CSS variables, JS/TS, and Tailwind.
- Added complete Token Reference section documenting all available tokens with
  examples.
- Added detailed Typography section explaining typographic scales and usage
  guidelines.
- Added Icon Box component tokens documentation.
- Added comprehensive Modes & Theme Switching section explaining the semantic
  token system.
- Added Practical Examples section with real-world implementations for buttons,
  cards, and forms.
- Added Troubleshooting & FAQ section and Migration & Comparison Guide.
- Added `subtle` text color tokens for improved typographic hierarchy.

### Changed

- Expanded README documentation with comprehensive token reference and examples.
- Improved documentation structure with detailed explanations of token access
  patterns.

### Fixed

- Enhanced documentation accuracy by aligning token access examples with actual
  implementation.
- Corrected badge token access paths and added missing iconBox documentation.

## [0.2.0] - 2025-12-20

**Release Title:** Spacing System Standardization

### Added

- Added `layout.*` token group for semantic spacing patterns.
- Added `space.*` token group following an 8px grid system.
- Added comprehensive documentation for Spectre design system non-negotiables.

### Changed

- Revised spacing token structure and documentation for improved clarity.
- Enforced stricter validation checks for token spacing and layout properties.

### Deprecated

- Deprecated `spacing.*` tokens in favor of `space.*` tokens for clearer
  semantic naming.

## [0.1.0] - 2025-12-08

**Release Title:** Typography and Badge Foundations

### Added

- Added `font` tokens with size, line-height, and weight properties for
  typography scale.
- Introduced `meta` text token for secondary/metadata text styling.
- Added `badge` component tokens for status indicators.
- Extended CSS variable generation to support new token groups.
- Integrated new tokens into Tailwind theme system.

## [0.0.4] - 2025-12-07

**Release Title:** Dark Mode and Token Validation

### Added

- Implemented dark mode CSS variable generation with `.dark` class selector
  support.
- Added core token assertion script to validate token structure integrity.
- Added documentation for theme modes and CSS variable usage patterns.

### Changed

- Updated color tokens in `modes.default` for improved light mode contrast.
- Populated `modes.dark` with complete dark mode color definitions.

## [0.0.3] - 2025-12-06

**Release Title:** Semantic Surfaces and Regression Protection

### Added

- Introduced `surface.*` roles for page, card, input, and overlay backgrounds.
- Added `text.onPage.*` and `text.onSurface.*` roles for contextual typography.
- Added `component.*` semantic aliases mapping to underlying text roles.
- Added `borders.*` token group for card and input definitions.
- Reserved `modes.default` and `modes.dark` structures for theming support.
- Added token regression check script to protect against breaking changes.

## [0.0.2] - 2025-12-04

**Release Title:** Type Safety and Documentation Corrections

### Changed

- Refactored TypeScript types for improved strictness and flexibility.
- Updated README with corrected API usage examples and type documentation.

### Fixed

- Resolved TypeScript type mismatches when importing JSON tokens.
- Corrected CSS import path in README.

## [0.0.1] - 2025-11-21

**Release Title:** Initial Spectre Tokens Foundation

### Added

- Initial Spectre Tokens package scaffolding with TypeScript build pipeline.
- CRO-focused button, form, accessibility, animation, and opacity token sets.
- Semantic color scales, breakpoint definitions, and transition tokens.
- Standardized documentation and contributing guidelines.

[unreleased]:
  https://github.com/phcdevworks/spectre-tokens/compare/v2.4.0...HEAD
[2.4.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.1.2...v2.2.0
[2.1.2]: https://github.com/phcdevworks/spectre-tokens/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/phcdevworks/spectre-tokens/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/phcdevworks/spectre-tokens/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.2.1...v1.1.0
[0.2.1]: https://github.com/phcdevworks/spectre-tokens/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-tokens/tree/v0.0.1
