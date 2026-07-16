# Spectre Tokens Roadmap

`@phcdevworks/spectre-tokens` is the authoritative contract layer for token
meaning across the Spectre system. It owns token definitions, semantic token
contracts, modes and themes, and the generated outputs consumed by downstream
packages. Its job is to keep token meaning stable, enforceable, and safe to
consume — not to model component structure or framework behavior.

---

## 1. Phase 1 — Contract Foundation — Delivered

All contract foundation work is complete as of v2.5.0. The package is mature at
the contract layer.

### What is in place

- `tokens/` is the single source of truth. Token loading is deterministic and
  fails hard on duplicate path ownership.
- `contract.manifest.json` is the machine-readable contract authority for public
  namespaces, required outputs, protected semantic groups, and change
  classification rules.
- A 16-gate `npm run check` validation chain covers: build, manifest, structure,
  locked color, contrast, regression, docs, exports, CSS, Tailwind, consumer
  smoke, integration, ecosystem, classification, deprecation, dist sync, and
  lint. All gates must pass before merge.
- Runtime JS, generated TypeScript, CSS variables, and Tailwind exports are
  validated for parity against the declared contract.
- `README.md` and `TOKEN_CONTRACT.md` are validated against the manifest —
  documentation drift fails the check gate.
- Contract-impacting changes require explicit classification (`additive`,
  `semantic change`, `breaking`) in `CHANGELOG.md [Unreleased]` before merge.
- A downstream smoke and integration fixture validates runtime token import, CSS
  import, Tailwind preset usage, semantic token usage, mode-aware usage,
  namespace collision checks, and component-style fixture patterns.
- CI runs the full validation chain on Node 22 and 24 for every push and pull
  request.
- A multi-agent team (Claude Code, Codex, Copilot, Jules) operates with
  documented authority boundaries, PR creation requirements, and CodeRabbit
  review integration.

### What will not change

- `tokens/` remains the only source of truth. No hand-editing generated files.
- The 16-gate chain is the release standard. No gate is optional.
- Protected semantic color families (`success`, `warning`, `danger`,
  CTA/brand-action) require explicit Bradley Potts approval to change.
- This package does not own component structure, framework behavior, or adapter
  concerns.

---

## 2. Phase 2 — Mature Contract Operations — Delivered

All Phase 2 work is complete. The contract is hardened against real downstream
consumption, release steps are automated, design tooling is wired in, and the
deprecation lifecycle is formally enforced.

### P0: Downstream Integration Hardening — Delivered

- Integration fixture in `example/integration-fixture/` exercises nav, alert,
  and badge component styles against the `surface`, `text`, `accessibility`, and
  `component.badge` namespaces the way a downstream UI library would.
- Tailwind preset composition validated against a downstream config with its own
  theme extensions.
- CSS variable namespace collision checks confirm no `--sp-*` shadowing risk.
- Integration constraints documented as explicit contract rules in
  `TOKEN_CONTRACT.md`.

### P1: Versioning Automation — Delivered

- `scripts/propose-version.ts` reads the `Contract change type:` line from
  `CHANGELOG.md [Unreleased]` and proposes the correct semver bump: `additive` →
  minor, `semantic change` → minor, `breaking` → major.
- Wired into the release procedure in `CLAUDE.md` and `CODEX.md` as step 1.
  Bradley Potts retains final version authority.

### P2: Design Tool Synchronization — Delivered

- `scripts/build-dtcg.ts` generates `dist/tokens.dtcg.json` in W3C DTCG format
  (no external dependency). Tokens Studio and Style Dictionary v4 both consume
  DTCG natively. 546 tokens across all public namespaces with inferred `$type`,
  `$value`, and `$description`.
- Wired into `npm run build` via `build:design`. `check:dist` automatically
  catches stale output. `check:manifest` validates the file exists and contains
  valid DTCG tokens.
- `CONTRIBUTING.md` documents the Tokens Studio setup and sync workflow.
- `contract.manifest.json` declares the `design` output with required top-level
  keys.

### P3: Deprecation Policy — Delivered

- Deprecation lifecycle (`active` → `deprecated` → `removed`) defined in
  `TOKEN_CONTRACT.md`.
- `deprecated` marker added to the token source schema via `metadata.deprecated`
  with `since`, `replacedBy`, and `removeIn` fields.
- `scripts/check-deprecation.ts` warns on deprecated tokens and fails when a
  token has passed its `removeIn` version. Wired into `npm run check`.
- Deprecation notice format documented in `TOKEN_CONTRACT.md` and `CHANGELOG.md`
  convention.

---

## 3. Phase 3 — Validation Integrity — Delivered

The validation layer is hardened. Unit tests cover pure utilities and all
critical validators are tested on negative paths.

### What was delivered

- `vitest` installed and wired. `npm test` runs the unit suite alongside the
  check gate.
- `tests/token-utils.test.ts` — 15 assertions across `flattenTokenTree`,
  `getTokenSourceFiles`, and `loadMergedTokens`.
- `tests/propose-version.test.ts` — `computeVersionBump` and
  `extractClassification` extracted and tested; 10 assertions.
- `tests/check-contrast.test.ts` — `computeContrast` exported; 5 assertions
  confirming failing pairs < 4.5 and passing pairs ≥ 4.5.
- `tests/check-locked.test.ts` — `stableStringify` exported; 7 assertions
  covering mutated values, added/removed keys, and type handling.
- `tests/check-regression.test.ts` — `findWrappedEntry` exported from
  `contract-utils.ts`; 10 assertions covering missing paths and wrapped-entry
  detection.

---

## 4. Phase 4 — Token Surface Completion

### P0: Correctness Fixes — Delivered

- `colors.focus.primary`, `colors.focus.error`, `colors.focus.info` replaced
  with palette references — no more hardcoded hex.
- `focusVisible` added to `buttons.danger` and `buttons.success`, matching all
  other button variants.

---

### P1: Interactive UI Semantic Tokens — Delivered

- `link` namespace published: `default`, `hover`, `active`, `visited`.
- Interactive surface states published: `surface.hover`, `surface.selected`,
  `surface.active` with mode-aware variants.
- Semantic divider published: `surface.divider` with mode-aware variants.

---

### P2: Component Token Expansion — Delivered

`spectre-ui` Phase 4 recipes and `spectre-ui-astro` Phase 4 were gated on these
five groups. They are now published in the token contract.

- `component.nav` — `bg`, `text`, `link`, `linkHover`, `linkActive`, `border`.
- `component.modal` — `bg`, `shadow`, `border`, `overlay`.
- `component.toast` — success, warning, danger, info variants each with `bg`,
  `text`, `border`, `icon`.
- `component.tooltip` — `bg`, `text`, `border`.
- `component.dropdown` — `bg`, `border`, `item.default`, `item.hover`,
  `item.active`, `item.text`.

---

### P3: Motion and Surface Polish — Delivered

- Reduced-motion variants shipped in 2.9.0.
- `surface.hero` resolved: retained in the `surface` namespace, documented
  with explicit hero/marketing-only usage constraints.
- `surface.alternate` renamed to `surface.subtle` (`--sp-surface-subtle`).
  Breaking change, logged.

---

## 5. Phase 5 — CSS Generation Bug: Dropped Semantic Variables — Delivered

`generateCssVariables` in `src/css.ts` built `dist/index.css` from a
hand-maintained `semanticEntries` array, not by iterating the full `tokens`
object. `link.*` and `surface.hover/selected/active/divider` existed in
`tokens/semantic-roles.json` and in the compiled `tokens` export, but had no
corresponding entries in `semanticEntries`, so they were silently omitted
from `dist/index.css` in every release through `3.0.0`.

- `--sp-link-default/hover/active/visited` and
  `--sp-surface-hover/selected/active/divider` now emit correctly in
  `dist/index.css` (light and dark blocks).
- `tests/css-semantic-coverage.test.ts` asserts every top-level key under
  `tokens.link` and `tokens.modes.default.surface` has a matching CSS
  variable in `generateCssVariables` output, guarding against recurrence.
- Published in `3.1.0`, unblocking `spectre-ui` Phase 3 P2 (Link,
  interactive surface states, Divider styling).

---

## 6. Phase 4 P4 — Layout Width Scale — Delivered

Real downstream need: `spectre-ui` Phase 4d (app shell layout — Sidebar
recipe, Container `maxWidth` prose variant) needed fixed-width values that
did not exist anywhere in the published token object. Confirmed by reading
the live package directly — `layout` only had `section`, `stack` (gap only),
and `container` (`paddingInline` + one fixed `maxWidth`).

- `layout.sidebar.width` added as a single fixed value (`16rem`), matching
  the existing `container.maxWidth` precedent rather than introducing a
  multi-step scale.
- `layout.container.maxWidthProse` (`65ch`) added as a sibling key to the
  existing `container.maxWidth`, keeping that contract non-breaking.
- Published in `3.1.0`, unblocking `spectre-ui` Phase 4d.

---

## 7. Phase 7 — Form-Field Component Token Groups — Delivered

Cross-repo audit found `sp-checkbox`, `sp-fieldset`, `sp-label`, `sp-radio`,
`sp-select`, and `sp-textarea` shipped in `spectre-components` with no
backing `component.*` token group here and no recipe in `spectre-ui` — the
same gating pattern Phase 4 P2 used for Nav/Toast/Tooltip/Dropdown/Modal.

- `component.checkbox` and `component.radio` — `bg`, `border`, `checkedBg`,
  `checkedBorder`, `text`, `disabledBg`, `disabledBorder`.
- `component.select` — `bg`, `border`, `text`, `placeholderText`,
  `disabledBg`, `disabledBorder`, `focusBorder`.
- `component.textarea` — `bg`, `border`, `text`, `placeholder`,
  `disabledBg`, `disabledBorder`, `focusBorder`.
- `component.fieldset` — `border`, `legendText`.
- `component.label` — `text`, `disabledText`, `requiredIndicatorText`.
- Published in `3.2.0`, unblocking the corresponding `spectre-ui` form-field
  recipes (`getCheckboxClasses`, `getRadioClasses`, `getSelectClasses`,
  `getTextareaClasses`, `getFieldsetClasses`, `getLabelClasses`).

---

## 8. Phase 8 — Select/Textarea Invalid and Success State Roles — Delivered

`spectre-ui` audited `component.select`/`component.textarea` while adding
`size`/`fullWidth`/`pill` options and found both groups missing
`invalid`/`success` color roles, unlike `component.input`'s existing
`error`/`success` border-bg pairs — blocking `spectre-ui` Phase 5 P0.

- Added `borderInvalid`/`bgInvalid` and `borderSuccess`/`bgSuccess` to
  `component.select` and `component.textarea`, mirroring `forms.invalid`/
  `forms.valid`. Published in `3.3.0`.
- `3.3.0`'s new fields never reached generated CSS/types due to a
  hand-maintained field-mapping array bug in `src/css.ts` (same class as the
  `3.1.0` Phase 5 fix). Generalizing the regression test to cover all of
  `tokens.component.*` also surfaced two more pre-existing instances:
  `component.badge`'s `*BgHover` fields, and `component.testimonial`/
  `component.pricingCard`/`component.rating` being entirely absent from CSS
  generation. All fixed and published in `3.3.1` — `spectre-ui` must depend
  on `^3.3.1`, not `^3.3.0`.

---

## 9. Phase 9 — Contract Generation and Ecosystem Maturity

The contract surface is mature. Future work should reduce maintenance risk,
prove compatibility, and make downstream adoption safer. New token families
remain demand-driven unless a downstream package demonstrates a concrete
missing contract.

### P0: Manifest-Driven CSS Generation

`src/css.ts` still uses hand-maintained field maps for several semantic and
component groups. This caused missing generated CSS variables in `3.1.0`,
`3.3.0`, and `3.3.1`. Coverage tests now detect more omissions, but the
architecture still requires additive contract changes in multiple places.

- Replace hand-maintained semantic/component field arrays with recursive or
  manifest-driven CSS generation.
- Preserve existing public CSS variable names through an explicit compatibility
  map where generated path names differ from legacy names.
- Make unsupported value shapes fail with a precise token path instead of being
  silently skipped.
- Treat completion as removal of the recurring “token exists but CSS output is
  missing” failure class, not merely additional regression assertions.

### P1: Complete Cross-Output Parity

- Derive parity assertions from `contract.manifest.json` for every declared
  public namespace.
- Verify every applicable public token reaches runtime JavaScript, generated
  TypeScript, CSS, DTCG, and Tailwind output.
- Validate complete default and dark mode output rather than selected required
  variables.
- Keep intentional output exceptions machine-readable.

### P2: DTCG Conformance Hardening

- Add fixture tests for aliases, font families, shadows, gradients,
  cubic-bezier values, unitless numbers, dimensions, typography values, and
  array/composite values.
- Validate inferred `$type` values against actual source value shapes.
- Add one real downstream round-trip test with a supported DTCG consumer such
  as Style Dictionary.
- Document intentional DTCG transformations and unsupported source shapes.

### P3: Live Downstream Compatibility

- Add a release-candidate or scheduled compatibility matrix covering
  `spectre-ui`, `spectre-ui-astro`, and `spectre-components`.
- Validate supported downstream versions against the packed candidate artifact
  before release.
- Retain repository-local fixtures for fast checks while using live downstream
  validation as the ecosystem contract authority.
- Convert concrete downstream gaps into demand-backed token proposals rather
  than speculative namespace expansion.

---

## 10. Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.

---

## 11. Recommended Execution Order

1. **Phase 1** — done.
2. **Phase 2** — done.
3. **Phase 3** — done.
4. **Phase 4 P0** — done.
5. **Phase 4 P1** — done.
6. **Phase 4 P2** — done. Component token expansion unblocked spectre-ui Phase 4
   and spectre-ui-astro Phase 4.
7. **Phase 4 P3** — done. `surface.hero`/`surface.alternate` resolved.
8. **Phase 5** — done, published in `3.1.0`. `link.*` and
   `surface.hover/selected/active/divider` now emit correctly in
   `dist/index.css`, unblocking `spectre-ui` Phase 3 P2.
9. **Phase 4 P4** — done, published in `3.1.0`. Added `layout.sidebar.width`
   and `layout.container.maxWidthProse`, unblocking `spectre-ui` Phase 4d.
10. **Phase 7** — done, published in `3.2.0`. Added `component.checkbox`,
    `component.radio`, `component.select`, `component.textarea`,
    `component.fieldset`, and `component.label`, unblocking the
    corresponding `spectre-ui` form-field recipes.
11. **Phase 8** — done, published in `3.3.0`. Added `borderInvalid`,
    `bgInvalid`, `borderSuccess`, and `bgSuccess` to `component.select` and
    `component.textarea`, mirroring `forms.invalid`/`forms.valid`. Unblocks
    `spectre-ui` Phase 5 P0's deferred `invalid`/`success` options on
    `getSelectClasses`/`getTextareaClasses` — adoption still pending there.
12. **3.3.1 fix (ready, pending release)** — `3.3.0`'s new select/textarea
    fields never reached generated CSS/types due to a hand-maintained
    field-mapping array bug in `src/css.ts` (same class as the `3.1.0` Phase
    5 fix). Generalizing the regression test to cover all of
    `tokens.component.*` also surfaced two more pre-existing instances of the
    same bug: `component.badge`'s `*BgHover` fields, and
    `component.testimonial`/`component.pricingCard`/`component.rating` being
    entirely absent from CSS generation. All fixed; full `npm run check` gate
    and `vitest run` pass clean. `spectre-ui` should depend on `^3.3.1`, not
    `^3.3.0`, once published.
13. **Phase 9 P0** — next. Replace hand-maintained CSS field maps with
    manifest-driven generation while preserving existing variable names.
14. **Phase 9 P1** — generalize cross-output parity across every
    manifest-declared public namespace and both modes.
15. **Phase 9 P2** — harden DTCG inference with fixture coverage and one real
    consumer round-trip.
16. **Phase 9 P3** — add live downstream compatibility checks for the three
    consuming Spectre packages.
