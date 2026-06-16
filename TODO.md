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
    `CHANGELOG.md [Unreleased]` and proposes the version bump: `additive` ->
    minor, `semantic change` -> minor, `breaking` -> major. Run via
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
  - Document `active` -> `deprecated` -> `removed`, including the expected
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
hand-maintained `semanticEntries` array (around line 346), not by iterating
the full `tokens` object. `link.*` and `surface.hover/selected/active/divider`
exist in `tokens/semantic-roles.json` and in the compiled `tokens` export
(confirmed via `dist/index.js`), but have no corresponding entries in
`semanticEntries`, so they are silently omitted from `dist/index.css` in every
release, including `2.9.0` and `3.0.0`. TODO.md Phase 4 P1 incorrectly marked
these as fully "Delivered" — they shipped to JS/TS/types but never to CSS.

### P0: Fix Missing CSS Variable Output

- [ ] Add `link.default/hover/active/visited` to `semanticEntries` in
      `src/css.ts`
  - Should emit `--sp-link-default`, `--sp-link-hover`, `--sp-link-active`,
    `--sp-link-visited` in `dist/index.css`.

- [ ] Add `surface.hover/selected/active/divider` to `semanticEntries` in
      `src/css.ts`
  - Should emit `--sp-surface-hover`, `--sp-surface-selected`,
    `--sp-surface-active`, `--sp-surface-divider` in `dist/index.css`.

- [ ] Add a regression test asserting every top-level key under
      `tokens.link` and `tokens.surface` has a corresponding CSS variable in
      `generateCssVariables` output
  - Prevents this class of silent drop from recurring when new semantic roles
    are added without a matching `semanticEntries` entry.

- [ ] Republish a patch/minor release once fixed and update
      `spectre-ui`'s `TODO.md` Phase 3 P2 to unblock Link, interactive surface
      state, and Divider styling work.

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

## Explicitly Out of Scope

- Do not add component structure ownership here.
- Do not add framework-specific token behavior here.
- Do not expand raw token families without clear downstream demand.
- Do not move recipe, component anatomy, or adapter concerns into this package.
