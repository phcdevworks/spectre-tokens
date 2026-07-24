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

## 9. Phase 9 — Contract Generation and Ecosystem Maturity — Delivered

All Phase 9 work is complete. The recurring "token exists but output is
missing" failure class is closed by construction, cross-output coverage is
exhaustive and manifest-derived, the DTCG export is spec-conformant with a
real consumer round-trip, and every release can be validated against the
actual downstream packages before publishing. New token families remain
demand-driven unless a downstream package demonstrates a concrete missing
contract.

### P0: Manifest-Driven CSS Generation — Delivered

`src/css.ts`'s hand-maintained semantic/component field-mapping arrays
(`BADGE_VARIANTS`, `ICON_BOX_FIELDS`, `NAV_FIELDS`, and twelve others) are
replaced by a recursive walker that derives every leaf path directly from
`tokens.modes.default.*`/`tokens.modes.dark.*`, unioned with the top-level
`surface`/`text`/`component` alias objects. A new field under any
`component.*`, `surface`, or `text` group now reaches generated CSS by
construction — no matching array to remember to update. `resolveSemanticValue`
throws with the precise token path on an unsupported value shape instead of
silently skipping it. Generated `dist/index.css` variable names and values
were confirmed byte-identical to the prior hand-maintained implementation
before/after the refactor.

### P1: Complete Cross-Output Parity — Delivered

`contract.manifest.json`'s new `outputParity` section and
`scripts/check-output-parity.ts` (`check:parity`) derive exhaustive leaf-path
coverage assertions from the token tree, replacing the curated path samples
`requiredOutputs.js.requiredPaths`/`requiredOutputs.css.requiredVariables`
relied on. Covers JS runtime (`tokens` vs. generated `coreTokens`), the
generated TypeScript declaration actually shipped in `dist/index.d.ts` (via
the TypeScript compiler API), DTCG (`$value` presence), and CSS — with a
`blockStrategy` per CSS group (`cascade-only`, `mode-scoped`, `duplicated`)
describing how each variable is expected to reach the dark-mode block, not
merely "the variable appears somewhere in the generated CSS." Running this
against the pre-fix codebase surfaced two real, previously undetected gaps —
`icons` and `aspectRatios` had zero CSS output, and `accessibility.forcedColors`
was never emitted — fixed as part of this work. Namespaces with genuinely
irregular per-field CSS naming are listed as documented
`outputParity.css.exceptions` rather than force-fit into the generic walker.

### P2: DTCG Conformance Hardening — Delivered

`scripts/build-dtcg.ts` now emits spec-conformant `$type`/`$value` pairs
throughout: `zIndex`/`opacity` as real JSON numbers (previously numeric
strings), `transitions.easing.*` as 4-number `cubicBezier` arrays (including
the `"linear"` keyword mapped to `[0, 0, 1, 1]`), `typography.families.*` as
`fontFamily` string arrays, `shadows.*`/`component.modal.shadow`/
`buttons.cta.shadow` as structured `shadow` objects, and `surface.hero` as a
`gradient` stop array per the DTCG Format Module's gradient type (stable as of
the 2025.10 draft — an initial pass incorrectly treated gradients as
unsupported; corrected before merge). Whole-value alias references resolve
`$type` from the alias target's real shape rather than falling back to
`string`. `scripts/check-dtcg-conformance.ts` (`check:dtcg`) validates every
leaf's `$value` against its declared `$type`'s structural shape on every
build. `scripts/check-dtcg-style-dictionary.ts` (`check:dtcg-roundtrip`, with
`style-dictionary` added as a devDependency) builds the real DTCG output with
a real consumer and asserts the rendered CSS is correct. `tests/build-dtcg.test.ts`
adds 50 fixture assertions across aliases, font families, shadows, gradients,
cubic-bezier values, unitless numbers, dimensions, typography values, and
array/composite values. `TOKEN_CONTRACT.md`'s "DTCG Design-Tool Export"
section documents every intentional transformation and the two genuinely
unsupported shapes (`shadows.none`, and gradient angle/direction — DTCG's
gradient type represents stops, not CSS geometry).

### P3: Live Downstream Compatibility — Delivered

`scripts/check-downstream-compat.ts` (`check:downstream`) packs this repo
into a real npm tarball and, for each of `spectre-ui`, `spectre-ui-astro`,
and `spectre-components` present as a sibling checkout, installs that tarball
and runs the sibling's own `npm run check` — the same gate each repo runs on
its own changes, proving compatibility against real downstream builds/lint/
types/tests rather than a repository-local guess. A sibling with a dirty
working tree is skipped rather than risked; every sibling's
`package.json`/`package-lock.json` is restored via `git checkout` + `npm
install` regardless of outcome. Verified end-to-end against the real sibling
repos: all three passed against the current candidate and were confirmed
clean afterward. Deliberately not part of `npm run check` — it requires
sibling repos on disk and runs three full downstream suites — so it's wired
as a separate pre-release gate (`CLAUDE.md`'s Release Procedure, step 6).
`TOKEN_CONTRACT.md`'s "Live Downstream Compatibility" section documents the
mechanism and the demand-driven policy: a concrete failure here is what
justifies a token proposal, not speculative namespace expansion.

---

## 10. Phase 10 — Utility-Engine Token Foundation

This phase is a deliberate, stated exception to Phase 9's demand-driven-only
closing policy: `spectre-ui`'s Phase 7 needs a broader, generator-ready raw
color and scale surface to expand its own utility-class coverage. That is
the concrete downstream requirement Phase 9 P3's `check:downstream`
mechanism was built to detect. It is not speculative namespace expansion.

`colors.palette.<hue>.<step>` — a broad raw color ramp (26 hues including
`mauve`/`olive`/`mist`/`taupe`, steps 50-950) — was added as a new,
additive namespace ahead of this phase being formally opened; it is the raw
material this phase's utility-engine work in `spectre-ui` consumes. It sits
alongside, not in place of, the existing
`colors.brand`/`neutral`/`accent`/`success`/`warning`/`error`/`info` ramps.

The escape-hatch question — whether the resulting utility layer allows
arbitrary values outside the token scale — is resolved as token-only, no
escape hatch. No raw hex/px/rem values are introduced downstream as a
result of this phase; a design need outside the existing scale is a token
proposal, not an arbitrary value in markup.

### What will not change

- `success`, `warning`, `danger` semantic roles, and CTA/brand-action remain
  locked. No changes to these families under this phase.
- `tokens/` remains the only source of design values. The utility engine
  this phase feeds is token-only by design — no arbitrary-value support is
  introduced anywhere in the Spectre stack as a result of this phase.

### P0: Gap Closure

- Confirm `src/css.ts`'s recursive color walker (deepened to support
  `colors.palette.<hue>.<step>`) reaches every new leaf per `check:parity`'s
  `outputParity` section — already verified clean; this is a
  re-confirmation at phase start, not new work.
- Add a `containerQueries` breakpoint namespace only if `spectre-ui` Phase
  7's responsive-variant design ends up needing `@container` support. Do
  not add it speculatively ahead of that decision.

### P1: Utility-Contract Manifest Surface

Default position: no new `contract.manifest.json` section is needed. The
utility engine consumes published CSS variables through the same contract
every recipe already uses — a Layer 2 concern. Only add manifest surface
here if `spectre-ui` Phase 7 P0 surfaces a token-shape guarantee that
`outputParity` doesn't already provide.

### P2: Tailwind Export Deprecation

- Mark `tailwindTheme`/`tailwindPreset` root exports and the
  `tailwind.expectations` section of `contract.manifest.json` `deprecated`,
  using the existing `metadata.deprecated` (`since`/`replacedBy`/`removeIn`)
  lifecycle documented in `TOKEN_CONTRACT.md`. Do not remove anything this
  phase — `removeIn` stays open/TBD until downstream migration is confirmed
  complete across every consuming repo.
- `check:tailwind` stays green and running unchanged through this phase.
- Paired with the equivalent deprecation in `spectre-ui` Phase 7 P2; both
  repos' deprecation notices should reference each other.

**Unblocks:** `spectre-ui` Phase 7 P0/P1 — the generator cannot consume
`colors.palette` or any new container-query tokens until they are published
here first.

---

## 11. Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.

---

## 12. Recommended Execution Order

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
12. **3.3.1 fix (done and published)** — `3.3.0`'s new select/textarea
    fields never reached generated CSS/types due to a hand-maintained
    field-mapping array bug in `src/css.ts` (same class as the `3.1.0` Phase
    5 fix). Generalizing the regression test to cover all of
    `tokens.component.*` also surfaced two more pre-existing instances of the
    same bug: `component.badge`'s `*BgHover` fields, and
    `component.testimonial`/`component.pricingCard`/`component.rating` being
    entirely absent from CSS generation. All fixed; full `npm run check` gate
    and `vitest run` pass clean. `spectre-ui` now depends on `^3.3.1`, not
    `^3.3.0`.
13. **Phase 9 P0** — done. Replaced hand-maintained CSS field maps with a
    recursive, manifest-shape-driven walker; generated CSS confirmed
    byte-identical to the prior implementation.
14. **Phase 9 P1** — done. Exhaustive, manifest-derived cross-output parity
    (JS, generated TypeScript, CSS with per-group dark-mode block strategy,
    DTCG) surfaced and fixed two real pre-existing CSS gaps (`icons`,
    `aspectRatios`) and one accessibility gap (`forcedColors`).
15. **Phase 9 P2** — done. DTCG `$type`/`$value` conformance hardened
    (numbers, cubicBezier arrays, fontFamily arrays, structured shadows,
    gradient stop arrays, alias type resolution); real Style Dictionary
    round-trip test added; 50 fixture assertions; intentional transformations
    and the true gradient-geometry limitation documented in
    `TOKEN_CONTRACT.md`.
16. **Phase 9 P3** — done. Live downstream compatibility check
    (`check:downstream`) packs the tarball and runs `spectre-ui`,
    `spectre-ui-astro`, and `spectre-components`'s own check gates against
    it; verified end-to-end against the real sibling repos, all passing and
    left clean. Wired as a separate pre-release gate, not part of the fast
    `npm run check` loop.
17. **Phase 10 P0** — gap closure: reconfirm `colors.palette` CSS-output
    parity; add `containerQueries` only if `spectre-ui` Phase 7 needs it.
18. **Phase 10 P1** — utility-contract manifest surface, only if `spectre-ui`
    Phase 7 P0 reveals a real gap in `outputParity`.
19. **Phase 10 P2** — deprecate `tailwindTheme`/`tailwindPreset`, paired
    with `spectre-ui` Phase 7 P2.

**Phase 9 is complete.** Phase 10 is the first phase since to reopen new
namespace/contract work, explicitly justified by `spectre-ui` Phase 7's
utility-engine coverage need — not a return to speculative expansion.
Future work beyond Phase 10 remains demand-driven.
