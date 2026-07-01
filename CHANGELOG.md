# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

## [3.3.1] - 2026-06-30

**Release Title:** Phase 8 — Component CSS Generation Coverage Fix

Contract change type: additive

### Fixed

- `generateCssVariables` in `src/css.ts` builds component CSS variables from
  hand-maintained field-mapping arrays (e.g. `SELECT_FIELDS`,
  `TEXTAREA_FIELDS`, `BADGE_VARIANTS`) instead of iterating the token JSON
  directly, so adding a field to `tokens/components.json` does not
  automatically reach generated CSS or `src/types.ts`. This bug recurred
  three times, all fixed in this release:
  - `component.select`/`component.textarea`: the `3.3.0` token additions
    (`borderInvalid`, `bgInvalid`, `borderSuccess`, `bgSuccess`) were never
    added to `SELECT_FIELDS`/`TEXTAREA_FIELDS`, so
    `--sp-select-border-invalid`, `--sp-select-bg-invalid`,
    `--sp-select-border-success`, `--sp-select-bg-success`, and the
    `--sp-textarea-*` equivalents were silently missing from
    `dist/index.css` in `3.3.0` despite that release's changelog claiming
    they were emitted. `ComponentSelectTokens`/`ComponentTextareaTokens` in
    `src/types.ts` were also missing the four new fields.
  - `component.badge`: the `*BgHover` fields (`neutralBgHover`,
    `infoBgHover`, `successBgHover`, `warningBgHover`, `dangerBgHover`) had
    no corresponding CSS variable at all — `BADGE_VARIANTS` only ever mapped
    a `bg`/`text` pair per variant, never the hover key.
  - `component.testimonial`, `component.pricingCard`, `component.rating`:
    entirely absent from `generateCssVariables` — no field-mapping arrays
    existed for these groups despite the tokens and TypeScript types being
    fully defined, so none of their 19 combined fields ever reached CSS in
    any prior release.
  - Same class of bug as the `3.1.0` CSS generation fix (Phase 5), which
    only covered `tokens.link`/`tokens.surface` drift and so didn't catch
    any of the above.
- Added the missing fields/groups to `src/css.ts` (`SELECT_FIELDS`,
  `TEXTAREA_FIELDS`, `BADGE_VARIANTS`, and new `TESTIMONIAL_FIELDS`,
  `PRICING_CARD_FIELDS`, `RATING_FIELDS` arrays) and to `src/types.ts`
  (`ComponentSelectTokens`, `ComponentTextareaTokens`). `dist/index.css` now
  emits all of the above in both light and dark blocks.
- Extended `tests/css-semantic-coverage.test.ts` to assert every key under
  every `tokens.component.*` group (not just `link`/`surface`) has a
  matching CSS variable in `generateCssVariables` output, closing the gap
  that let this bug class recur three times across `3.1.0`–`3.3.0`.

## [3.3.0] - 2026-06-30

**Release Title:** Phase 8 — Form Validation State Tokens

Contract change type: additive

### Added

- Added `borderInvalid`, `bgInvalid`, `borderSuccess`, and `bgSuccess` roles to
  `component.select` and `component.textarea`, mirroring the `forms.invalid`/
  `forms.valid` border/bg pair already used by `component.input`. Emits
  `--sp-select-border-invalid`, `--sp-select-bg-invalid`,
  `--sp-select-border-success`, `--sp-select-bg-success`, and the
  `--sp-textarea-*` equivalents. Unblocks `spectre-ui`'s deferred
  `invalid`/`success` state options on `getSelectClasses`/`getTextareaClasses`
  (see `spectre-ui/TODO.md` Phase 5 P0). `loading` state remains
  structural-only (opacity/cursor) with no dedicated color role, matching
  `getInputClasses`'s existing handling.

## [3.2.0] - 2026-06-26

**Release Title:** Phase 7 — Form Field Component Tokens

Contract change type: additive

### Added

- Added `component.checkbox`, `component.radio`, `component.select`,
  `component.textarea`, `component.fieldset`, and `component.label` token
  groups, backing the `sp-checkbox`, `sp-radio`, `sp-select`, `sp-textarea`,
  `sp-fieldset`, and `sp-label` components already shipped in
  `spectre-components` since Phase 1 with no token contract behind them.
  `checkbox` and `radio` share the same shape (`bg`, `border`, `checkedBg`,
  `checkedBorder`, `text`, `disabledBg`, `disabledBorder`); `select` and
  `textarea` add `focusBorder`; `fieldset` covers `border` and `legendText`;
  `label` covers `text`, `disabledText`, and `requiredIndicatorText`. Emits
  `--sp-checkbox-*`, `--sp-radio-*`, `--sp-select-*`, `--sp-textarea-*`,
  `--sp-fieldset-*`, and `--sp-label-*` CSS variables in both light and dark
  mode. Unblocks the corresponding `spectre-ui` recipes (`getCheckboxClasses`,
  `getRadioClasses`, `getSelectClasses`, `getTextareaClasses`,
  `getFieldsetClasses`, `getLabelClasses`).

## [3.1.0] - 2026-06-19

**Release Title:** Phase 5/6 — Layout Width Tokens and CSS Variable Parity

Contract change type: additive

### Fixed

- Fixed `generateCssVariables` in `src/css.ts` silently dropping `link.*`
  and `surface.hover/selected/active/divider` from `dist/index.css`. These
  tokens existed in the runtime JS/TS export since `2.9.0`/`3.0.0` but had no
  corresponding entry in the hand-maintained `semanticEntries` array, so they
  never reached the generated CSS. Now emits `--sp-link-default`,
  `--sp-link-hover`, `--sp-link-active`, `--sp-link-visited`,
  `--sp-surface-hover`, `--sp-surface-selected`, `--sp-surface-active`, and
  `--sp-surface-divider`.

### Added

- Added `layout.container.maxWidthProse` (`65ch`) for readable prose-width
  containers, and a new `layout.sidebar.width` (`16rem`) for app shell
  sidebar layouts. Both are fixed single values, matching the existing
  `layout.container.maxWidth` precedent, not multi-step scales. Emits
  `--sp-layout-container-max-width-prose` and `--sp-layout-sidebar-width` in
  `dist/index.css`, and `maxWidth.prose` / `width.sidebar` in the Tailwind
  theme export. Unblocks `spectre-ui` Phase 4d (Sidebar recipe, Container
  prose variant).
- Updated README consumer examples to document the new runtime, CSS variable,
  and Tailwind layout width mappings for prose containers and sidebars.

## [3.0.0] - 2026-06-17

**Release Title:** Phase 4 P3 — Surface Subtle Contract Rename

Contract change type: breaking

### Changed

- Standardized repository guidance around current public namespaces, Phase 4
  roadmap status, package-manager expectations, and the full validation gate.
- Renamed `surface.alternate` to `surface.subtle` in `tokens/modes.json`,
  `src/types.ts`, and `src/css.ts`. "alternate" was too vague for a public
  contract token; "subtle" precisely describes a one-step-recessed background
  used for zebra rows, section bands, and inset panels. CSS variable renamed
  from `--sp-surface-alternate` to `--sp-surface-subtle`. **Breaking** —
  consumers using `surface.alternate` or `--sp-surface-alternate` must update
  to `surface.subtle` / `--sp-surface-subtle`.
- Added explicit `description` to `surface.hero` in `tokens/modes.json`
  (both default and dark modes) documenting it as a gradient surface for
  hero and marketing sections only, not a general-purpose surface role.
  No value change — semantic change only.

## [2.9.0] - 2026-06-10

**Release Title:** Phase 4 P2 — Motion Accessibility and UI Component Tokens

Contract change type: additive

### Added

- Added `reduced` (0.01ms) duration to `transitions.duration` and
  `reducedMotion` semantic token to `accessibility` in `tokens/primitives.json`.
- Added `animations.reducedMotion` variants for all 8 named animations
  (`fadeIn`, `fadeOut`, `slideUp`, `slideDown`, `scaleIn`, `bounce`, `shake`,
  `pulse`) to provide near-zero duration alternatives for reduced-motion
  accessibility.
- Added `forcedColors` token with value `"auto"` to the `accessibility` family
  in `tokens/primitives.json` to address a Priority 1 gap in the accessibility
  contract.
- Added `link` semantic namespace (`link.default`, `link.hover`, `link.active`,
  `link.visited`) to `tokens/semantic-roles.json` so consumers no longer need to
  fall back to raw `colors.brand`/`colors.accent` palette values for inline
  links. Registered in `contract.manifest.json` `publicNamespaces` and
  `SpectreModeTokens` is unaffected since `link` is not mode-scoped.
- Added interactive surface state tokens `surface.hover`, `surface.selected`,
  `surface.active`, and a semantic divider token `surface.divider` to
  `tokens/semantic-roles.json`, with `default`/`dark` mode variants in
  `tokens/modes.json` and corresponding fields on `SpectreModeTokens` in
  `src/types.ts`. These cover clickable list items, table rows, menu items, and
  `<hr>`/section-separator styling without composing from raw palette values.
- Added `component.nav`, `component.modal`, `component.toast`,
  `component.tooltip`, and `component.dropdown` token groups to
  `tokens/components.json`, with `default`/`dark` mode variants in
  `tokens/modes.json`, corresponding `ComponentNavTokens`,
  `ComponentModalTokens`, `ComponentToastTokens`, `ComponentTooltipTokens`, and
  `ComponentDropdownTokens` interfaces in `src/types.ts`, and mode-aware CSS
  variables (`--sp-nav-*`, `--sp-modal-*`, `--sp-toast-*`, `--sp-tooltip-*`,
  `--sp-dropdown-*`) in `src/css.ts`. Registered new required paths and CSS
  variables in `contract.manifest.json`. This unblocks `spectre-ui` and
  `spectre-ui-astro` Phase 4 recipes (Nav, Toast, Tooltip, Dropdown, Modal) that
  previously had to compose these from raw palette values.

## [2.8.0] - 2026-06-06

**Release Title:** Phase 4 P1 — Focus Token Parity and Color Reference Consistency

Contract change type: additive

### Added

- Added `@phcdevworks/spectre-manifest` as a devDependency and wired ecosystem
  validation into the check pipeline via `check:ecosystem`. The new
  `spectre.manifest.json` at the repo root records this package's role, layer
  membership (`foundation`), declared exports, allowed dependency targets, and
  AI guidance in a schema-validated format. `check:ecosystem` runs
  `spectre-manifest-validate` (schema check) followed by
  `spectre-manifest-check` (package registration check) and is placed in the
  gate after `check:integration`.
- Added `3xl` (24px) and `4xl` (32px) radius tokens to the `radii` primitive
  family in `tokens/primitives.json` to fill the scale gap between `2xl` and
  `pill`, providing more options for larger rounded UI elements like cards and
  modals.
- Added `none` (0) to `border.width` and `dashed`, `dotted` to `border.style` in
  `tokens/primitives.json` to complete the core border primitive scale and
  provide more options for decorative and conditional borders.
- Added W3C DTCG design-tool output at `dist/tokens.dtcg.json`, generated by
  `npm run build:design` (wired into the main `npm run build`). Tokens Studio
  and Style Dictionary v4 can consume this file directly for Figma sync.
- Added `design` output declaration to `contract.manifest.json` with required
  top-level keys and DTCG structure validation in `check:manifest`.
- Added Design Tool Handoff section to `CONTRIBUTING.md` documenting the Tokens
  Studio workflow for pulling updated tokens into Figma.
- Added missing scale steps to the `space` primitive family in
  `tokens/primitives.json`: `1` (1px), `2` (2px), `6` (6px), `10` (10px), `14`
  (14px), `28` (28px), and `72` (72px). These additions bridge gaps and provide
  finer increments (down to 2px in key ranges) at both the low and high ends of
  the spacing scale to support more precise layout control.
- Added `focusVisible` token to `buttons.danger` (`{colors.error.500} / 0.4`)
  and `buttons.success` (`{colors.success.500} / 0.4`) to match the parity
  already present on `primary`, `secondary`, `ghost`, and `accent` variants.
  Updated `locked-color-baseline.json` to record the approved new state. Closes
  the gap identified in spectre-ui Phase 3 P1 token sync audit.
- Converted `colors.focus.primary`, `colors.focus.error`, and
  `colors.focus.info` from raw hex literals to token references
  (`{colors.brand.500}`, `{colors.error.500}`, `{colors.info.600}`) for
  consistency with the rest of the token system.

## [2.7.0] - 2026-06-03

**Release Title:** Phase 2/3 — Token Vocabulary and Integration Hardening

Contract change type: additive

### Added

- Added integration fixture coverage for downstream-style component usage,
  Tailwind preset composition, and CSS variable namespace collision checks.
- Added `scripts/check-integration.ts` and wired the integration check into the
  main validation gate.
- Added deprecation policy documentation, source-level deprecation metadata
  support, and `scripts/check-deprecation.ts` validation.
- Added `npm run release:propose` to derive an advisory version bump from the
  `CHANGELOG.md [Unreleased]` contract classification.
- Standardized `letterSpacing` across the entire typography scale in
  `tokens/typography.json`, adding explicit `0em` values to all sizes from `sm`
  through `6xl` to complete the typographic contract.
- Added `classic` (3:2) aspect ratio to the `aspectRatios` primitive family in
  `tokens/primitives.json` to fill the gap in common photographic ratios.
- Added `style` tokens (`solid` and `none`) to the `border` primitive family in
  `tokens/primitives.json` to complete the core border contract.
- Added `xl` (12px) and `2xl` (16px) radius tokens to the `radii` primitive
  family in `tokens/primitives.json` to address the scale gap between `lg` and
  `pill`.
- Added `xl` and `2xl` shadow elevation tokens to complete the shadow scale.
- Added `toast` to the z-index scale for application notification layering.
- Added `loading` to the opacity scale for semantic loading and disabled-like
  pending states.
- Added `relaxed` (250ms), `long` (1000ms), and `slowest` (1200ms) duration
  tokens and `overshoot` easing token to the `transitions` primitive family in
  `tokens/primitives.json` to complete the motion scale.

### Changed

- Refactored all `animations` in `tokens/primitives.json` to use semantic
  `transitions` token references instead of hardcoded literal values, ensuring
  contract integrity.
- Refreshed repository guidance, roadmap, TODO, README badges, and release
  documentation so maintenance procedures reflect the current validation and
  release workflow.
- Bumped the npm package manager declaration to `npm@11.16.0` and refreshed
  compatible lint/build dependency versions.
- Refactored token utility loops for clearer validation internals without
  changing the public token contract.

### Fixed

- Improved WCAG AA contrast for the neutral badge in dark mode by updating
  `modes.dark.component.badge.neutralText` to `{colors.neutral.50}`. This
  resolves a contrast failure (4.41:1 -> 4.79:1) against the interactive
  `neutralBgHover` background.
- Fixed duplicate CSS variable declarations in `generateCssVariables` output.
  The `text`, `badge`, and `iconBox` semantic tokens were emitted twice per
  `:root` block — once via `semanticEntries` (mode-resolved) and once via
  `createCssVariableMap` (base-only). The base-only block was winning via CSS
  cascade, silently applying wrong badge text colors (e.g. `successText`
  resolved to `colors.success.800` instead of the mode override `.700`). Removed
  the redundant assignments from `createCssVariableMap`; the `semanticEntries`
  path in `generateCssVariables` is now the sole emitter for these tokens.

## [2.6.0] - 2026-05-21

**Release Title:** Phase 2 — Contrast Metadata and Overlay Stabilization

Contract change type: additive

### Added

- Added explicit contrast-pair metadata to the `buttons` text tokens for
  `primary`, `secondary`, and `ghost` variants in `tokens/components.json` to
  enable automated reverse contrast validation against their respective
  backgrounds.
- Added explicit contrast-pair metadata to the `pricingCard` featured text and
  badge tokens in `tokens/components.json` and `tokens/modes.json` to enable
  consistent automated contrast validation against their respective backgrounds
  across the base contract and theme modes.

### Changed

- Standardized the `surface.overlay` token in `tokens/semantic-roles.json` to
  `{colors.black} / 0.6`, achieving consistency with the mode-specific
  definitions and ensuring stable overlay treatment across themes.
- Standardized the `surface.overlay` token in the default mode within
  `tokens/modes.json` to `{colors.black} / 0.6`, achieving parity with the dark
  mode definition and ensuring consistent overlay treatment across themes.
- Standardized non-protected semantic text roles (`default`, `muted`, `subtle`,
  `meta`) in `tokens/semantic-roles.json` to the object-based structure to
  enable automated contrast validation for the base semantic contract and
  achieve structural parity with surface roles.

## [2.5.0] - 2026-05-04

**Release Title:** Phase 2 — Badge Contrast Metadata and Contract Change Guidance

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

**Release Title:** Phase 2 — Surface Parity and Elevation Stabilization

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
- Removed the unused `chroma-js` dependency and refreshed Rollup and TypeScript
  ESLint tooling.

### Fixed

- Updated testimonial and pricing-card contrast metadata to validate against
  hover backgrounds where those components are most constrained.
- Reused the shared `getPathValue` utility in validation scripts to keep
  contract path checks consistent.

## [2.3.0] - 2026-04-18

**Release Title:** Phase 2 — Contract Authority and CSS Output Hardening

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

**Release Title:** Phase 2 — Contract Alignment and Interaction Coverage

Contract change type: semantic change

### Added

- Added `focusVisible` token aliases for supported button variants plus a
  top-level `forms.focusVisible` block to keep focus styling consistent across
  the token contract.
- Added `bgHover` interaction-state tokens for `pricingCard` and `testimonial`,
  including mode-aware overrides and contrast-pair metadata for validation
  coverage.
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
- Aligned dark-mode `iconBox.iconDefault` tokens more consistently with the rest
  of the icon-box color system.
- Improved testimonial `quoteMark` contrast and expanded contrast-validation
  coverage for that component.

## [2.1.2] - 2026-04-05

**Release Title:** Phase 2 — Validation Guardrails and CI

Contract change type: additive

### Added

- Added a locked color contract regression check and baseline covering the
  protected success, warning, danger, and CTA/brand-action families.
- Added a GitHub Actions CI workflow that runs `npm run build` and
  `npm run check` on pushes to `main` and on pull requests.
- Added `metadata.pair` mappings across inputs, badges, cards, ratings, and icon
  box tokens to expand automated contrast validation coverage.
- Added missing `neutralBgHover` and `infoBgHover` badge tokens in default mode
  to improve hover-state parity across semantic variants.

### Changed

- Changed the validation flow so `npm run build` regenerates outputs only while
  `npm run check` acts as the full validation gate for structure, locked colors,
  contrast, regression, and linting.
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

**Release Title:** Phase 2 — Semantic Color Refinement

Contract change type: additive

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

**Release Title:** Phase 2 — Accessibility and Workflow Expansion

Contract change type: additive

### Added

- Added `focusRing` tokens to all button variants (Primary, Secondary, Success,
  Danger) and established a top-level `accessibility.focusRing` token group.
- Introduced `BgHover` overrides for dark mode badges to ensure consistent
  hover-state coverage across themes.
- Added `borderWidth` tokens with Tailwind mapping and new `maxWidth` container
  tokens.
- Integrated ESLint and Prettier into `devDependencies` for automated code
  health.
- Standardized `npm run lint` and `npm run format` scripts for consistent
  development workflows.

### Changed

- Harmonized the `accent` color palette for better visual consistency across the
  ecosystem.
- Replaced legacy `.vscode` settings with a centralized `phcdevworks.workspace`
  configuration.
- Revised `README.md` and `CONTRIBUTING.md` to emphasize the Layer 1 hierarchy
  and modular token structure.
- Standardized ESM import ordering and reformatted the codebase.
- Removed all legacy Astro dependencies from the `tsup` build pipeline.

### Removed

- Removed legacy `.vscode` folder and Astro-specific configurations.

### Fixed

- Implemented circular reference detection in `check-contrast.ts` via a visited
  set to prevent infinite recursion.
- Removed remaining `any` type-casts in `src/css.ts` in favor of strict
  `Record<string, unknown>` validation.

## [2.0.0] - 2026-03-15

**Release Title:** Phase 2 — Modular Token Architecture

Contract change type: breaking

### Added

- Added semantic brand text roles (`text.onPage.brand`, `text.onSurface.brand`)
  for theme-aware brand typography.
- Added interactive state tokens (`hoverBg`) to component badge definitions.

### Changed

- Split the monolithic `core.json` into domain-specific source files
  (`palette.json`, `primitives.json`, `semantic-roles.json`, `components.json`,
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

- Eliminated the `any` keyword across all project scripts and utilities.
- Resolved performance bottlenecks and potential hangs in recursive token
  validation.

## [1.1.0] - 2026-03-11

**Release Title:** Phase 1 — Generated Types and Strict Typing

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

**Release Title:** Phase 1 — Stable Documentation and Component Coverage

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

**Release Title:** Phase 0 — Documentation Expansion and Text Hierarchy

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

**Release Title:** Phase 0 — Spacing System Standardization

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

**Release Title:** Phase 0 — Typography and Badge Foundations

### Added

- Added `font` tokens with size, line-height, and weight properties for
  typography scale.
- Introduced `meta` text token for secondary/metadata text styling.
- Added `badge` component tokens for status indicators.
- Extended CSS variable generation to support new token groups.
- Integrated new tokens into Tailwind theme system.

## [0.0.4] - 2025-12-07

**Release Title:** Phase 0 — Dark Mode and Token Validation

### Added

- Implemented dark mode CSS variable generation with `.dark` class selector
  support.
- Added core token assertion script to validate token structure integrity.
- Added documentation for theme modes and CSS variable usage patterns.

### Changed

- Updated color tokens in `modes.default` for improved light mode contrast.
- Populated `modes.dark` with complete dark mode color definitions.

## [0.0.3] - 2025-12-06

**Release Title:** Phase 0 — Semantic Surfaces and Regression Protection

### Added

- Introduced `surface.*` roles for page, card, input, and overlay backgrounds.
- Added `text.onPage.*` and `text.onSurface.*` roles for contextual typography.
- Added `component.*` semantic aliases mapping to underlying text roles.
- Added `borders.*` token group for card and input definitions.
- Reserved `modes.default` and `modes.dark` structures for theming support.
- Added token regression check script to protect against breaking changes.

## [0.0.2] - 2025-12-04

**Release Title:** Phase 0 — Type Safety and Documentation Corrections

### Changed

- Refactored TypeScript types for improved strictness and flexibility.
- Updated README with corrected API usage examples and type documentation.

### Fixed

- Resolved TypeScript type mismatches when importing JSON tokens.
- Corrected CSS import path in README.

## [0.0.1] - 2025-11-21

**Release Title:** Phase 0 — Initial Spectre Tokens Foundation

### Added

- Initial Spectre Tokens package scaffolding with TypeScript build pipeline.
- CRO-focused button, form, accessibility, animation, and opacity token sets.
- Semantic color scales, breakpoint definitions, and transition tokens.
- Standardized documentation and contributing guidelines.

[unreleased]:
  https://github.com/phcdevworks/spectre-tokens/compare/v3.3.1...HEAD
[3.3.1]: https://github.com/phcdevworks/spectre-tokens/compare/v3.3.0...v3.3.1
[3.3.0]: https://github.com/phcdevworks/spectre-tokens/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/phcdevworks/spectre-tokens/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.9.0...v3.0.0
[2.9.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.8.0...v2.9.0
[2.8.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/phcdevworks/spectre-tokens/compare/v2.4.0...v2.5.0
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
