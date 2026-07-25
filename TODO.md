# Spectre Tokens Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to token contract integrity, downstream
consumption safety, release automation, and design-tool handoff.

## Phase 1 - Contract Foundation: Completed

All Phase 1 items have been delivered. The following were completed during the
v2.0.0 through v2.5.0 release cycle.

### P0: Contract Integrity

- [x] Lock machine-readable contract authority in `contract.manifest.json`
  - Public namespaces, required outputs, protected semantic groups, and change
    classification rules are declared in one place. Contract validation reads
    from it directly.

- [x] Make token source loading deterministic
  - Token files load in stable alphabetical order. Duplicate token-path
    ownership fails validation with a short, path-based error.

- [x] Enforce contract parity across runtime JS, generated TS, CSS, and Tailwind
  - `npm run check` fails on output drift across all public package surfaces.
    Missing or undocumented public outputs fail validation.

- [x] Enforce docs against the machine-readable contract
  - `README.md` and `TOKEN_CONTRACT.md` fail validation if they drift from the
    declared public contract.

- [x] Move `dist` sync and contract validation fully into the main CI gate
  - CI runs the full `npm run check` path. Stale `dist` artifacts fail before
    merge. Contract drift also fails before merge.

- [x] Add classified contract-change enforcement
  - Contract-authority changes require `additive`, `semantic change`, or
    `breaking` classification in the `CHANGELOG.md [Unreleased]` section.

- [x] Add a downstream smoke consumer fixture
  - Runtime token import, CSS import, Tailwind preset usage, semantic token
    usage, and mode-aware usage are all validated through the normal check path.

### P1: Maintainer and Consumer Clarity

- [x] Link contract and planning docs from `README.md`
  - `TOKEN_CONTRACT.md` and `ROADMAP.md` are linked from the package homepage
    header.

- [x] Add a maintainer-facing summary for contract-impacting changes
  - `CONTRIBUTING.md` contains a dedicated "Contract-Impacting Change Checklist"
    section covering the required steps for changes that touch `tokens/`,
    `contract.manifest.json`, `src/`, `README.md`, or `TOKEN_CONTRACT.md`.

- [x] Re-evaluate semantic expansion only for proven downstream demand
  - Standing policy, not a one-time deliverable. Documented in `AGENTS.md` and
    `TOKEN_CONTRACT.md`. No implementation required; policy is enforced through
    review.

### P2: Controlled Improvement

- [x] Improve release-note clarity for contract changes
  - Added `Contract change type:` classification lines to all 2.x entries that
    were missing them. Normalized changelog formatting across the completed
    release history.

- [x] Review validation message clarity
  - Reduced noisy passing logs from validation scripts and kept success/failure
    output short enough to make CI failures easier to scan.

---

## Phase 2 - Mature Contract Operations

All items below are forward-looking. This phase starts from the stable v2.5.0
contract foundation and focuses on real downstream use, release consistency,
design synchronization, and safe retirement paths.

### P0: Downstream Integration Hardening

- [x] Replace or augment the smoke fixture with a real `spectre-ui` integration
      fixture
  - Validate that the package works the way downstream packages actually consume
    it, not just that the token shape is correct in isolation.
  - Delivered via `example/integration-fixture/components.ts` — nav, alert, and
    badge component styles exercise the `surface`, `text`, `accessibility`, and
    `component.badge` namespaces the way a downstream UI library would.
    Validated by six additional assertion blocks in `check:integration`.

- [x] Validate Tailwind preset composition against a downstream config
  - Confirm the preset composes correctly with a consumer Tailwind config that
    has its own theme extensions. Catch namespace collisions and merge
    conflicts.
  - Delivered via `example/integration-fixture/` validated by
    `check:integration`.

- [x] Validate CSS variable output in a real integration context
  - Confirm variables do not collide with or shadow downstream CSS when the
    package is used alongside `spectre-ui`.
  - Delivered via `example/integration-fixture/layer.css` and
    `check:integration` namespace-collision checks.

- [x] Document any integration constraints as explicit contract rules
  - Add integration-level requirements to `TOKEN_CONTRACT.md` so they are part
    of the declared public contract.

### P1: Versioning Automation

- [x] Add a semver proposal script
  - `scripts/propose-version.ts` reads the `Contract change type:` line from
    `CHANGELOG.md [Unreleased]` and proposes the version bump: `additive` →
    minor, `semantic change` → minor, `breaking` → major. Run via
    `npm run release:propose`.

- [x] Wire the script into the release procedure in `CLAUDE.md` and `CODEX.md`
  - `CLAUDE.md` Release Procedure lists `npm run release:propose` as step 1.
    `CODEX.md` Release Review Checklist includes the script and its output in
    the handoff summary. Bradley Potts retains final version authority.

### P2: Design Tool Synchronization

- [x] Decide on the synchronization target: Tokens Studio or Style Dictionary
  - W3C DTCG format (no external dependency). Tokens Studio and Style Dictionary
    v4 both consume DTCG natively. Fits the existing custom-script build
    pattern.

- [x] Add a design-tool output to the build pipeline
  - `scripts/build-dtcg.ts` generates `dist/tokens.dtcg.json` (W3C DTCG format).
    Wired into `npm run build` via the `build:design` script.

- [x] Wire the new output into dist sync validation
  - `build:design` is part of `npm run build`, which `check:dist` reruns before
    checking `git status -- dist`. Stale DTCG output fails the check gate.
  - `check:manifest` validates the DTCG file exists, has required top-level
    keys, and contains `$value` tokens.

- [x] Document the design handoff workflow in `CONTRIBUTING.md`
  - Added "Design Tool Handoff" section covering Tokens Studio setup and the
    sync workflow (build → commit → Figma pull).

### P3: Deprecation Policy

- [x] Define the deprecation lifecycle in `TOKEN_CONTRACT.md`
  - Document `active` → `deprecated` → `removed`, including the expected
    migration window before removal.

- [x] Add a `deprecated` marker to the token source schema
  - Deprecated tokens should be flagged at the source level, not only in release
    notes.

- [x] Add validation for deprecated and removed tokens
  - Warn when deprecated tokens are present. Fail when a token marked for
    removal is still in the public export.

- [x] Define the deprecation notice format for `CHANGELOG.md`
  - Consumers should see exactly which token is deprecated, what replaces it,
    and in which version it will be removed.

---

## Phase 3 - Validation Integrity

Harden the validation layer itself. The `check` scripts are only tested on the
happy path today — a bug in a validator silently passes bad tokens through to
consumers.

### P0: Test Harness Setup

- [x] Add vitest as a dev dependency and wire `npm test` to run it
  - The existing `npm run check` alias should stay; `npm test` should run the
    vitest suite alongside it, or be updated to run both.
  - Delivered: `vitest@4.1.8` installed, `vitest.config.ts` wired to
    `tests/**/*.test.ts`, `test:unit` runs vitest, `test` runs both `test:unit`
    then `check`.

### P1: Unit Tests for Pure Utility Functions

- [x] Unit-test `scripts/token-utils.ts`
  - Cover all exported helpers. These are used by multiple validation scripts so
    a bug here propagates silently across the entire check gate.
  - Delivered: `tests/token-utils.test.ts` — 15 assertions across
    `flattenTokenTree`, `getTokenSourceFiles`, and `loadMergedTokens`.

- [x] Unit-test `scripts/propose-version.ts`
  - Cover `additive` → minor, `semantic change` → minor, `breaking` → major, and
    the no-classification error case.
  - Delivered: `tests/propose-version.test.ts` — extracted `computeVersionBump`
    and `extractClassification` as exports; 10 assertions cover all cases
    including the missing-classification throw.

### P2: Negative-Path Tests for Critical Validators

- [x] Negative-path test for `check:contrast`
  - Confirm the script exits non-zero when a paired token fails WCAG AA.
    Currently only tested on passing data.
  - Delivered: `tests/check-contrast.test.ts` — exported `computeContrast`; 5
    assertions confirm failing pairs score < 4.5 and passing pairs score ≥ 4.5.

- [x] Negative-path test for `check:locked`
  - Confirm the script catches a mutation to a protected color family value.
  - Delivered: `tests/check-locked.test.ts` — exported `stableStringify`; 7
    assertions confirm mutated values, added/removed keys, and type handling.

- [x] Negative-path test for `check:regression`
  - Confirm the script exits non-zero when a token value drifts from baseline.
  - Delivered: `tests/check-regression.test.ts` — added `findWrappedEntry`
    export to `contract-utils.ts`; 10 assertions cover missing paths via
    `getPathValue` and wrapped-entry detection via `findWrappedEntry`.

---

## Phase 4 - Token Surface Completion

The contract foundation and validation infrastructure are solid. This phase
completes the token vocabulary so `spectre-ui` and any downstream consumer has
everything they need to build a full UI without falling back on raw palette
values or inventing local token contracts.

### P0: Correctness Fixes

- [x] Fix `colors.focus.*` — replace raw hex with palette references
  - `focus.primary`, `focus.error`, and `focus.info` are hardcoded hex that
    duplicate palette values. Replace with `{colors.brand.500}`,
    `{colors.error.500}`, and `{colors.info.600}` to eliminate silent drift risk
    when the palette is updated.
  - Delivered in `9aa5d59` ("Add focusVisible tokens and unify focus colors").

- [x] Complete `focusVisible` across all interactive button variants
  - `buttons.danger` and `buttons.success` are missing `focusVisible`. Every
    interactive button variant needs it for consistent keyboard-navigation
    behavior. Additive only — no existing paths change.
  - Delivered in `9aa5d59` ("Add focusVisible tokens and unify focus colors").

### P1: Interactive UI Semantic Tokens

- [x] Add `link` semantic namespace
  - `link.default`, `link.hover`, `link.active`, `link.visited`. Consumers
    currently fall back to raw brand palette colors for inline links. Sealing
    this here prevents downstream packages from diverging on link appearance.
  - Delivered: added to `tokens/semantic-roles.json` (brand 600/700/800 plus
    `accent.700` for `visited`), registered in `contract.manifest.json`
    `publicNamespaces`, and documented in `README.md`/`TOKEN_CONTRACT.md`.

- [x] Add interactive surface state tokens
  - `surface.hover`, `surface.selected`, `surface.active`. Without these,
    clickable list items, table rows, and menu items must compose backgrounds
    from raw palette values or guess at semantic equivalents.
  - Delivered: added to `tokens/semantic-roles.json` with `default`/`dark`
    variants in `tokens/modes.json` and corresponding `SpectreModeTokens` fields
    in `src/types.ts`.

- [x] Add semantic divider token
  - `surface.divider` (or `border.color.default` and `border.color.subtle`).
    Currently there is no semantic token for `<hr>`, table borders, or section
    separators — a gap that every UI component library hits immediately.
  - Delivered as `surface.divider` alongside the interactive surface state
    tokens above, with mode-aware variants.

### P2: Component Token Expansion (Done)

`spectre-ui` Phase 4 (Nav, Toast, Tooltip, Dropdown, Modal recipes) and
`spectre-ui-astro` Phase 4 are both gated on these five groups publishing.

- [x] Add `component.nav` token group
  - `bg`, `text`, `link`, `linkHover`, `linkActive`, `border`. Nav is the most
    common component that spans multiple namespaces; first-class tokens prevent
    raw palette references in `spectre-ui`.
  - Delivered with `default`/`dark` mode variants in `tokens/modes.json`,
    `ComponentNavTokens` in `src/types.ts`, and `--sp-nav-*` CSS variables.

- [x] Add `component.modal` token group
  - `bg`, `shadow`, `border`, `overlay`. Modals have a distinct visual treatment
    from cards and need dedicated tokens rather than surface.card overrides.
  - Delivered with `default`/`dark` mode variants, `ComponentModalTokens` in
    `src/types.ts`, and `--sp-modal-*` CSS variables.

- [x] Add `component.toast` token group
  - Success, warning, danger, and info variants each with `bg`, `text`,
    `border`, `icon` tokens. Toast/notification is a common pattern currently
    without a dedicated group.
  - Delivered with `default`/`dark` mode variants, `ComponentToastTokens` in
    `src/types.ts`, and `--sp-toast-*` CSS variables.

- [x] Add `component.tooltip` token group
  - `bg`, `text`, `border`. Tooltips invert the standard surface/text contrast;
    they need their own tokens rather than ad-hoc inverted values.
  - Delivered with `default`/`dark` mode variants, `ComponentTooltipTokens` in
    `src/types.ts`, and `--sp-tooltip-*` CSS variables.

- [x] Add `component.dropdown` token group
  - `bg`, `border`, `item.default`, `item.hover`, `item.active`, `item.text`.
  - Delivered with `default`/`dark` mode variants, `ComponentDropdownTokens` in
    `src/types.ts`, and `--sp-dropdown-*` CSS variables.

### P3: Motion and Surface Polish (Active)

- [x] Add reduced-motion token variants
  - Near-zero duration alternatives under `animations.reducedMotion.*` for each
    named animation, so consumers can respect `prefers-reduced-motion` without
    per-component overrides.
  - Delivered in 2.9.0 with `animations.reducedMotion` variants for all named
    animations plus `transitions.duration.reduced` and
    `accessibility.reducedMotion`.

- [x] Audit and resolve `surface.hero`
  - A gradient string in the `surface` namespace is unusual and breaks theme
    adaptability. Evaluate moving it to a `gradients` namespace or documenting
    it as explicitly intentional with usage constraints.
  - Resolved: retained in `surface` namespace (no other gradients exist to
    warrant a new namespace); added explicit description to both default and
    dark mode entries documenting it as a hero/marketing-only gradient surface
    with a note to pair it with light text tokens explicitly.

- [x] Clarify or rename `surface.alternate`
  - "Alternate" is too vague for a public contract token. Rename to something
    with explicit semantic intent (e.g., `surface.subtle` or `surface.raised`)
    or improve the description significantly.
  - Resolved: renamed to `surface.subtle` in `tokens/modes.json`,
    `src/types.ts`, and `src/css.ts`. CSS variable updated from
    `--sp-surface-alternate` to `--sp-surface-subtle`. Breaking change logged.

---

## Phase 5 - CSS Generation Bug: Dropped Semantic Variables

`generateCssVariables` in `src/css.ts` builds `dist/index.css` from a
hand-maintained `semanticEntries` array (around line 346), not by iterating the
full `tokens` object. `link.*` and `surface.hover/selected/active/divider` exist
in `tokens/semantic-roles.json` and in the compiled `tokens` export (confirmed
via `dist/index.js`), but have no corresponding entries in `semanticEntries`, so
they are silently omitted from `dist/index.css` in every release, including
`2.9.0` and `3.0.0`. TODO.md Phase 4 P1 incorrectly marked these as fully
"Delivered" — they shipped to JS/TS/types but never to CSS.

### P0: Fix Missing CSS Variable Output

- [x] Add `link.default/hover/active/visited` to `semanticEntries` in
      `src/css.ts`
  - Delivered: `link.*` is mode-independent (not nested under `tokens.modes`),
    so it is emitted via a dedicated loop over `tokens.link` rather than the
    `modePath`-based `semanticEntries` shape used by mode-aware tokens. Emits
    `--sp-link-default`, `--sp-link-hover`, `--sp-link-active`,
    `--sp-link-visited` in `dist/index.css` (identical value in both the base
    and `[data-spectre-theme="dark"]` blocks, since the token has no dark
    variant).

- [x] Add `surface.hover/selected/active/divider` to `semanticEntries` in
      `src/css.ts`
  - Delivered: added as four new mode-aware `semanticEntries` rows following the
    existing `surface.*` pattern. Emits `--sp-surface-hover`,
    `--sp-surface-selected`, `--sp-surface-active`, `--sp-surface-divider` in
    both light and dark blocks of `dist/index.css`.

- [x] Add a regression test asserting every top-level key under `tokens.link`
      and `tokens.surface` has a corresponding CSS variable in
      `generateCssVariables` output
  - Delivered: `tests/css-semantic-coverage.test.ts` iterates
    `Object.keys(tokens.link)` and `Object.keys(tokens.modes.default.surface)`
    and asserts each has a matching `--sp-link-*` / `--sp-surface-*` variable in
    the generated CSS string.

- [x] Republish a patch/minor release once fixed and update `spectre-ui`'s
      `TODO.md` Phase 3 P2 to unblock Link, interactive surface state, and
      Divider styling work.
  - Delivered in `3.1.0`, which is published on npm as the current latest
    version. Release authority and the `spectre-ui` TODO update belong to
    Bradley Potts per the Release Procedure in `CLAUDE.md`.

---

## Phase 6 - Layout Width Scale

Real downstream need: `spectre-ui` Phase 4d (app shell layout — Sidebar recipe,
Container `maxWidth` prose variant) needs fixed-width values that do not exist
anywhere in the published token object today. Confirmed by reading the live
package directly (`require('@phcdevworks/spectre-tokens').tokens`) — `layout`
only has `section`, `stack` (gap only), and `container` (`paddingInline` + one
fixed `maxWidth`). There is no `width` or `sizing` namespace at all.

### P0: Add Missing Width Tokens

- [x] Add `layout.sidebar.width` — a single fixed value (matching how
      `container.maxWidth` is a single value, not a multi-step scale), not a
      multi-size scale unless a second real consumer need shows up.
  - Delivered: `layout.sidebar.width` = `16rem` in `tokens/semantic-roles.json`,
    typed in `src/types.ts`, emitted as `--sp-layout-sidebar-width` in
    `src/css.ts`, and mapped to `width.sidebar` in the Tailwind theme export in
    `src/index.ts`.

- [x] Add a second `container.maxWidth` value for readable prose width (e.g.
      nested under `layout.container.maxWidth` as a named variant alongside the
      existing default) — coordinate exact naming with `spectre-ui`'s Phase 4d
      before finalizing, since it consumes this directly.
  - Delivered as a sibling key, `layout.container.maxWidthProse` = `65ch`,
    rather than nesting `maxWidth` into an object — keeps the existing
    `layout.container.maxWidth` string contract non-breaking. Emitted as
    `--sp-layout-container-max-width-prose` and mapped to `maxWidth.prose` in
    the Tailwind theme export. Naming/shape not yet confirmed against
    `spectre-ui`'s actual Phase 4d consumption — flag for adjustment if it
    expects a different path.

- [x] Publish and version-bump. This was a hard blocker for `spectre-ui` Phase
      4d, not a parallel-track item.
  - Delivered in `3.1.0` (published on npm as the current latest version):
    layout width tokens are available to unblock `spectre-ui` Phase 4d. Release
    authority remains with Bradley Potts per the Release Procedure in
    `CLAUDE.md`.

---

## Phase 7 - Form-Field Component Token Groups

Cross-repo audit (`spectre-components` vs. `spectre-ui-astro`) found
`sp-checkbox`, `sp-fieldset`, `sp-label`, `sp-radio`, `sp-select`, and
`sp-textarea` shipped in `spectre-components` since Phase 1 with no backing
`component.*` token group here and no recipe in `spectre-ui` — the same gating
pattern Phase 4 used for Nav/Toast/Tooltip/Dropdown/Modal. `spectre-ui`'s own
`TODO.md` confirms these are unblocked-but-missing, not deferred by design.

### P0: Add Missing Form-Field Token Groups

- [x] Add `component.checkbox` token group
  - Delivered with roles `bg`, `border`, `checkedBg`, `checkedBorder`, `text`,
    `disabledBg`, `disabledBorder` in `tokens/components.json` and
    `tokens/modes.json` (default + dark), typed in `src/types.ts`
    (`ComponentSelectionControlTokens`), and emitted as `--sp-checkbox-*` in
    `src/css.ts`.

- [x] Add `component.radio` token group
  - Delivered mirroring `component.checkbox` shape exactly (shares the
    `ComponentSelectionControlTokens` type), emitted as `--sp-radio-*`.

- [x] Add `component.select` token group
  - Delivered with roles `bg`, `border`, `text`, `placeholderText`,
    `disabledBg`, `disabledBorder`, `focusBorder`, emitted as `--sp-select-*`.

- [x] Add `component.textarea` token group
  - Delivered as its own group (not merged with `component.input`, which remains
    the minimal `text`/`placeholder` pair it already was) with roles `bg`,
    `border`, `text`, `placeholder`, `disabledBg`, `disabledBorder`,
    `focusBorder`, emitted as `--sp-textarea-*`.

- [x] Add `component.fieldset` token group
  - Delivered with roles `border`, `legendText`, emitted as `--sp-fieldset-*`.

- [x] Add `component.label` token group
  - Delivered with roles `text`, `disabledText`, `requiredIndicatorText`,
    emitted as `--sp-label-*`.

- [x] Publish once all six groups land. This is a hard blocker for the
      corresponding `spectre-ui` recipes (`getCheckboxClasses`,
      `getRadioClasses`, `getSelectClasses`, `getTextareaClasses`,
      `getFieldsetClasses`, `getLabelClasses`).
  - Delivered: `3.2.0` published on npm (`package.json` version matches).
    Unblocks the corresponding `spectre-ui` form-field recipes. The `v3.2.0` git
    tag has since been created (tags now run through `v3.3.1`).

---

## Phase 8 - Select/Textarea Invalid and Success State Roles (done in 3.3.0; CSS generation fix in 3.3.1)

`spectre-ui` audited `component.select`/`component.textarea` while adding
`size`/`fullWidth`/`pill` options to `getSelectClasses`/`getTextareaClasses`
(2026-06-30) and found both groups only carry
`bg`/`border`/`text`/`placeholder`/`disabledBg`/`disabledBorder`/ `focusBorder`
roles — no `invalid`/`success` (or `loading`) color roles, unlike
`component.input`'s `bg`/`border` pairs for `error` and `success` states
(emitted as `--sp-component-input-role-border-error` / `-bg-error` /
`-border-success` / `-bg-success`). This blocks `spectre-ui`'s Phase 5 P0 from
adding `invalid`/`success`/`loading` options to
`getSelectClasses`/`getTextareaClasses` without either reusing
`component.input`'s role tokens (blurs the per-component namespace boundary) or
inventing local color values (violates the zero-raw-value rule) — see
`spectre-ui/TODO.md` Phase 5 P0.

### P0: Add Missing State Roles

- [x] Add `borderInvalid`, `bgInvalid` to `component.select` and
      `component.textarea`, mirroring `forms.invalid`'s border/bg pair
      (`colors.error.500` / `colors.error.50`). `bgInvalid` pairs with the
      component's existing `text` role for contrast (passes AA at 2026-06-30
      audit).
- [x] Add `borderSuccess`, `bgSuccess` to `component.select` and
      `component.textarea`, mirroring `forms.valid`'s border/bg pair
      (`colors.success.500` / `colors.success.50`), paired with `text` the same
      way.
- [x] Decided `loading` stays structural-only (opacity/cursor, no new token),
      matching `getInputClasses`'s existing `sp-input--loading` handling in
      `spectre-ui` (`src/styles/components.css`) — no color role added.
- [x] Published in `3.3.0`, with the CSS/types sync bug fixed in `3.3.1` (see
      below). `spectre-ui` now declares `^3.3.1` and can adopt the
      `invalid`/`success` options on `getSelectClasses`/`getTextareaClasses`
      tracked in its Phase 5 P0 TODO.

### P0: Fix 3.3.0 — Component CSS Generation Coverage Gaps (published in 3.3.1)

`src/css.ts` builds component CSS variables from hand-maintained field-mapping
arrays (`SELECT_FIELDS`, `TEXTAREA_FIELDS`, `BADGE_VARIANTS`, etc.) instead of
iterating the token JSON directly, so a field added to `tokens/components.json`
does not automatically reach generated CSS or `src/types.ts`. The regression
test added below (generalizing the Phase 5 fix to cover all of
`tokens.component.*`, not just `link`/`surface`) surfaced three separate,
previously-undetected instances of this bug:

- `component.select`/`component.textarea`: the `3.3.0` token-source change
  (`borderInvalid`, `bgInvalid`, `borderSuccess`, `bgSuccess`) was never added
  to `SELECT_FIELDS`/`TEXTAREA_FIELDS`, so `dist/index.css` (light and dark) and
  `ComponentSelectTokens`/`ComponentTextareaTokens` in `src/types.ts` shipped
  without the new `--sp-select-border-invalid` / `-bg-invalid` /
  `-border-success` / `-bg-success` variables (and `--sp-textarea-*`
  equivalents) despite the `3.3.0` changelog claiming they were emitted.
- `component.badge`: the `*BgHover` fields (`neutralBgHover`, `infoBgHover`,
  `successBgHover`, `warningBgHover`, `dangerBgHover`) had no CSS variable in
  any prior release — `BADGE_VARIANTS` only ever mapped a `bg`/`text` pair per
  variant.
- `component.testimonial`, `component.pricingCard`, `component.rating`: no
  field-mapping arrays existed for these groups at all, despite the tokens and
  TypeScript types being fully defined — none of their 19 combined fields ever
  reached CSS in any prior release.

Same class of bug as the `3.1.0` `generateCssVariables` fix (Phase 5) — that
fix's regression test only covered `tokens.link`/`tokens.surface`, not
`tokens.component.*`, so it didn't catch any of the above until generalized.

- [x] Added the four missing entries to `SELECT_FIELDS`/`TEXTAREA_FIELDS` in
      `src/css.ts` and to `ComponentSelectTokens`/`ComponentTextareaTokens` in
      `src/types.ts`.
- [x] Added the missing `bgHoverKey` mapping to `BADGE_VARIANTS` in `src/css.ts`
      so `--sp-badge-<variant>-bg-hover` is emitted for all five variants.
- [x] Added new `TESTIMONIAL_FIELDS`, `PRICING_CARD_FIELDS`, `RATING_FIELDS`
      arrays in `src/css.ts` and wired them into `generateCssVariables`, so
      `component.testimonial`/`component.pricingCard`/`component.rating` now
      emit CSS variables for the first time. Rebuilt — `dist/index.css` now
      emits all of the above in both light and dark blocks.
- [x] Extended `tests/css-semantic-coverage.test.ts` to assert every key under
      every `tokens.component.*` group has a matching CSS variable in
      `generateCssVariables` output, generalizing the Phase 5 regression test so
      this bug class can't silently recur on any component group.
- [x] Full `npm run check` gate passes clean, including `check:dist`, plus full
      `vitest run` (47/47 tests passing).
- [x] Hand off to Bradley Potts to publish as `3.3.1` — patch fix, `### Fixed`
      changelog entry distinct from the `3.3.0` `### Added` entry.
- [x] `spectre-ui` should bump its declared `spectre-tokens` range to `^3.3.1`
      (not `^3.3.0`) before starting Phase 5 P0 adoption, since `3.3.0` is
      missing the variables it needs.

---

## Phase 9 - Semantic Typography and Color Palette Expansion (included in 4.0.0)

- [x] Add `colors.palette` — the full Tailwind CSS v4.3 raw color ramp (red
      through stone plus mauve/olive/mist/taupe, steps 50-950), ported to hex,
      as a new sub-namespace alongside the existing brand/neutral/
      accent/success/warning/error/info ramps in `colors`.
- [x] Add `typography.heading` (h1-h6) and `typography.body` role tokens
      expressed via `{typography.scale.*}` / `{typography.families.*}`
      references, giving downstream consumers a semantic heading/body contract
      instead of hand-picking raw `typography.scale` steps.
- [x] Add `check:typography-refs` validation gate (part of `npm run check`)
      confirming every heading/body role resolves to a valid scale/family
      reference.
- [x] Included in the `4.0.0` release candidate after `3.6.0` was not published.

---

## Recommended Execution Order

1. Phase 1 — done.
2. Phase 2 — done.
3. Phase 3 — done.
4. Phase 4 P0 — done.
5. Phase 4 P1 — done.
6. Phase 4 P2 — done. Added component.nav, component.modal, component.toast,
   component.tooltip, component.dropdown token groups. This unblocks spectre-ui
   Phase 4 recipes and spectre-ui-astro Phase 4.
7. **Phase 4 P3 — done.** `surface.alternate` renamed to `surface.subtle`;
   `surface.hero` documented with explicit usage constraints.
8. **Phase 5 — done and published in `3.1.0`.** `link.*` and
   `surface.hover/selected/active/divider` now emit correctly in
   `dist/index.css`, with a regression test guarding against recurrence. This
   unblocks the `spectre-ui` Phase 3 P2 token dependency.
9. **Phase 6 — done and published in `3.1.0`.** Added `layout.sidebar.width`
   (`16rem`) and `layout.container.maxWidthProse` (`65ch`) to unblock
   `spectre-ui` Phase 4d.
10. **Phase 7 — done and published in `3.2.0`.** Added `component.checkbox`,
    `component.radio`, `component.select`, `component.textarea`,
    `component.fieldset`, and `component.label` token groups. Unblocks the
    corresponding `spectre-ui` form-field recipes.
11. **Phase 8 — done and published in `3.3.0`, CSS generation fix in `3.3.1`.**
    Added `borderInvalid`/`bgInvalid`/`borderSuccess`/`bgSuccess` to
    `component.select`/`component.textarea`; fixed a class of hand-
    maintained-array CSS generation gaps affecting select, textarea, badge,
    testimonial, pricingCard, and rating token groups.
12. **Phase 9 — done and included in the `4.0.0` release candidate.** Added
    `colors.palette` (full Tailwind v4.3 raw ramp) and
    `typography.heading`/`typography.body` semantic role tokens.
13. **Phase 10 — active.** Utility-engine token foundation for `spectre-ui`
    Phase 7. See below.

---

## Phase 10 - Utility-Engine Token Foundation (Tailwind Replacement, Active)

PHCDevworks is replacing TailwindCSS across the Spectre design system with a
first-party, token-driven utility-class engine owned by `spectre-ui`. This phase
is a deliberate exception to Phase 9's demand-driven-only closing policy:
`spectre-ui`'s Phase 7 needs a broader, generator-ready raw color and scale
surface to expand its own utility-class coverage ahead of building that engine —
the concrete downstream requirement Phase 9 P3's `check:downstream` mechanism
was built to detect, not speculative namespace expansion. The utility-class
engine itself is entirely `spectre-ui` Phase 7 scope; this package's role is
publishing the raw token surface it consumes and retiring the Tailwind exports.

`colors.palette.<hue>.<step>` (26 hues, steps 50-950) is included in the `4.0.0`
release candidate; it is the raw material this phase's `spectre-ui`
utility-engine work consumes, additive alongside the existing
`colors.brand`/`neutral`/`accent`/`success`/`warning`/`error`/`info` ramps.

Resolved: the resulting utility layer is token-only, no escape hatch. No raw
hex/px/rem values are introduced downstream as a result of this phase; a design
need outside the existing scale is a token proposal, not an arbitrary value in
markup. `success`/`warning`/`danger`/CTA-brand-action remain locked — no changes
to these families under this phase.

### P0: Gap Closure

- [ ] Reconfirm `src/css.ts`'s recursive color walker reaches every
      `colors.palette.<hue>.<step>` leaf per `check:parity`'s `outputParity`
      section. Already verified clean once; this is a re-confirmation at phase
      start, not new work.
- [ ] Add a `containerQueries` breakpoint namespace only if `spectre-ui` Phase
      7's responsive-variant design ends up needing `@container` support. Do not
      add speculatively ahead of that decision.

### P1: Utility-Contract Manifest Surface

- [ ] Default position: no new `contract.manifest.json` section needed. The
      utility engine consumes published CSS variables through the same contract
      every recipe already uses (a Layer 2 concern). Only add manifest surface
      here if `spectre-ui` Phase 7 P0 surfaces a token-shape guarantee
      `outputParity` doesn't already provide.

### P2: Tailwind Export Removal — Done

- [x] Removed `tailwindTheme`/`tailwindPreset` root exports and the
      `TailwindTheme` type from `src/index.ts`/`src/types.ts`, rather than
      deprecating first — a direct breaking removal ahead of `spectre-ui`'s
      generator landing, since this package no longer treats a Tailwind preset
      as part of its public contract.
- [x] Removed `contract.manifest.json`'s `requiredOutputs.tailwind` section and
      its entries from `rootExports`/`rootTypeExports`.
- [x] Deleted `check:tailwind` (`scripts/check-tailwind-contract.ts`) and the
      Tailwind-specific assertions in `check-contract-manifest.ts`,
      `check-consumer-smoke.ts`, `check-integration.ts`, and
      `contract-utils.ts`.
- [x] Removed `tailwind.config.ts` from `example/smoke-consumer/` and
      `example/integration-fixture/`; updated `consumer.ts`/`consumer.mjs` to
      drop Tailwind-derived assertions.
- [x] Classified `Contract change type: breaking` in the `CHANGELOG.md` `4.0.0`
      release entry.
- [ ] Coordinate with the equivalent removal/migration in `spectre-ui` Phase 7
      P2 — any downstream repo still importing `tailwindTheme`/ `tailwindPreset`
      will break on upgrade to the version publishing this change.

**Unblocks:** `spectre-ui` Phase 7 P0/P1 — the generator cannot consume
`colors.palette` or any new container-query tokens until they are published here
first.

---

## Explicitly Out of Scope

- Do not add component structure ownership here.
- Do not add framework-specific token behavior here.
- Do not expand raw token families without clear downstream demand.
- Do not move recipe, component anatomy, or adapter concerns into this package.
