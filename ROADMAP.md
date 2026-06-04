# ROADMAP.md

# Spectre Tokens Roadmap

`@phcdevworks/spectre-tokens` is the authoritative contract layer for token
meaning across the Spectre system. It owns token definitions, semantic token
contracts, modes and themes, and the generated outputs consumed by downstream
packages. Its job is to keep token meaning stable, enforceable, and safe to
consume — not to model component structure or framework behavior.

---

## 1. Phase 1 — Contract Foundation — Delivered

All contract foundation work is complete as of v2.5.0. The package is mature
at the contract layer.

### What is in place

- `tokens/` is the single source of truth. Token loading is deterministic and
  fails hard on duplicate path ownership.
- `contract.manifest.json` is the machine-readable contract authority for
  public namespaces, required outputs, protected semantic groups, and change
  classification rules.
- A 15-gate `npm run check` validation chain covers: build, manifest,
  structure, locked color, contrast, regression, docs, exports, CSS, Tailwind,
  consumer smoke, integration, classification, deprecation, dist sync, and lint.
  All gates must pass before merge.
- Runtime JS, generated TypeScript, CSS variables, and Tailwind exports are
  validated for parity against the declared contract.
- `README.md` and `TOKEN_CONTRACT.md` are validated against the manifest —
  documentation drift fails the check gate.
- Contract-impacting changes require explicit classification (`additive`,
  `semantic change`, `breaking`) in `CHANGELOG.md [Unreleased]` before merge.
- A downstream smoke and integration fixture validates runtime token import,
  CSS import, Tailwind preset usage, semantic token usage, mode-aware usage,
  namespace collision checks, and component-style fixture patterns.
- CI runs the full validation chain on Node 22 and 24 for every push and pull
  request.
- A multi-agent team (Claude Code, Codex, Copilot, Jules) operates with
  documented authority boundaries, PR creation requirements, and CodeRabbit
  review integration.

### What will not change

- `tokens/` remains the only source of truth. No hand-editing generated files.
- The 15-gate chain is the release standard. No gate is optional.
- Protected semantic color families (`success`, `warning`, `danger`,
  CTA/brand-action) require explicit Bradley Potts approval to change.
- This package does not own component structure, framework behavior, or
  adapter concerns.

---

## 2. Phase 2 — Mature Contract Operations — Delivered

All Phase 2 work is complete. The contract is hardened against real downstream
consumption, release steps are automated, design tooling is wired in, and the
deprecation lifecycle is formally enforced.

### P0: Downstream Integration Hardening — Delivered

- Integration fixture in `example/integration-fixture/` exercises nav, alert,
  and badge component styles against the `surface`, `text`, `accessibility`,
  and `component.badge` namespaces the way a downstream UI library would.
- Tailwind preset composition validated against a downstream config with its
  own theme extensions.
- CSS variable namespace collision checks confirm no `--sp-*` shadowing risk.
- Integration constraints documented as explicit contract rules in
  `TOKEN_CONTRACT.md`.

### P1: Versioning Automation — Delivered

- `scripts/propose-version.ts` reads the `Contract change type:` line from
  `CHANGELOG.md [Unreleased]` and proposes the correct semver bump:
  `additive` → minor, `semantic change` → minor, `breaking` → major.
- Wired into the release procedure in `CLAUDE.md` and `CODEX.md` as step 1.
  Bradley Potts retains final version authority.

### P2: Design Tool Synchronization — Delivered

- `scripts/build-dtcg.ts` generates `dist/tokens.dtcg.json` in W3C DTCG
  format (no external dependency). Tokens Studio and Style Dictionary v4 both
  consume DTCG natively. 546 tokens across all public namespaces with inferred
  `$type`, `$value`, and `$description`.
- Wired into `npm run build` via `build:design`. `check:dist` automatically
  catches stale output. `check:manifest` validates the file exists and contains
  valid DTCG tokens.
- `CONTRIBUTING.md` documents the Tokens Studio setup and sync workflow.
- `contract.manifest.json` declares the `design` output with required
  top-level keys.

### P3: Deprecation Policy — Delivered

- Deprecation lifecycle (`active` → `deprecated` → `removed`) defined in
  `TOKEN_CONTRACT.md`.
- `deprecated` marker added to the token source schema via `metadata.deprecated`
  with `since`, `replacedBy`, and `removeIn` fields.
- `scripts/check-deprecation.ts` warns on deprecated tokens and fails when
  a token has passed its `removeIn` version. Wired into `npm run check`.
- Deprecation notice format documented in `TOKEN_CONTRACT.md` and
  `CHANGELOG.md` convention.

---

## 3. Phase 3 — Validation Integrity

The validation chain is only tested on the happy path today. A bug in a
validator silently passes bad tokens through to consumers. This phase hardens
the validation layer itself.

### P0: Test Harness Setup

**Objective** Introduce a unit test runner alongside the existing check gate.

**Deliverables**

- Add vitest as a dev dependency.
- Wire `npm test` to run the vitest suite. The existing `npm run check` alias
  stays unchanged.

**Why it matters** The current check gate runs scripts end-to-end and only
catches failures at the output level. Unit tests catch logic bugs in the
scripts themselves before they can silently pass bad data through.

---

### P1: Unit Tests for Pure Utility Functions

**Objective** Cover the shared helpers that all validation scripts depend on.

**Deliverables**

- Unit-test all exported helpers in `scripts/token-utils.ts`. A bug here
  propagates silently across every gate that calls these functions.
- Unit-test `scripts/propose-version.ts`: cover `additive` → minor,
  `semantic change` → minor, `breaking` → major, and the no-classification
  error case.

---

### P2: Negative-Path Tests for Critical Validators

**Objective** Confirm that validators exit non-zero when they should — not just
when the data is clean.

**Deliverables**

- Negative-path test for `check:contrast` — confirm the script fails when a
  paired token does not meet WCAG AA.
- Negative-path test for `check:locked` — confirm the script catches a
  mutation to a protected color family value.
- Negative-path test for `check:regression` — confirm the script fails when a
  token value drifts from the recorded baseline.

**Why it matters** Validators that pass on good data but do not fail on bad
data provide false confidence. A silent validator is worse than no validator.

---

## 4. Phase 4 — Token Surface Completion

The contract infrastructure is mature. This phase completes the token
vocabulary so `spectre-ui` and downstream consumers have everything they need
to build a full UI from token contracts rather than raw palette values.

### P0: Correctness Fixes

**Objective** Eliminate drift risks and inconsistencies in the existing token
surface before expanding it.

**Deliverables**

- Fix `colors.focus.*` to use palette references instead of hardcoded hex, so
  brand or error palette updates propagate automatically.
- Add `focusVisible` to `buttons.danger` and `buttons.success` to bring them
  in line with `primary`, `secondary`, and `ghost`.

---

### P1: Interactive UI Semantic Tokens

**Objective** Cover the semantic gaps that every UI component library hits
immediately: links, interactive surface states, and dividers.

**Deliverables**

- Add a `link` namespace: `default`, `hover`, `active`, `visited`.
- Add interactive surface states: `surface.hover`, `surface.selected`,
  `surface.active`.
- Add a semantic divider token: `surface.divider` (or
  `border.color.default` / `border.color.subtle`).

---

### P2: Component Token Expansion

**Objective** Add dedicated token groups for the UI patterns that appear in
every component library but are not yet in the contract: nav, modal, toast,
tooltip, dropdown.

**Deliverables**

- `component.nav` — `bg`, `text`, `link`, `linkHover`, `linkActive`, `border`.
- `component.modal` — `bg`, `shadow`, `border`, `overlay`.
- `component.toast` — success, warning, danger, info variants with `bg`,
  `text`, `border`, `icon`.
- `component.tooltip` — `bg`, `text`, `border`.
- `component.dropdown` — `bg`, `border`, item states.

---

### P3: Motion and Surface Polish

**Objective** Close the remaining gaps in the motion system and clean up
surface tokens that have ambiguous meaning or unusual shapes.

**Deliverables**

- Add `animations.reducedMotion.*` variants for all named animations.
- Resolve `surface.hero` — either move the gradient to a `gradients` namespace
  or document its usage constraints explicitly.
- Clarify or rename `surface.alternate` to express explicit semantic intent.

---

## 5. Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into
  this repo.

---

## 6. Recommended Execution Order

1. **Phase 1** — done.
2. **Phase 2** — done.
3. **Phase 3 P0** — add vitest; unblocks all unit and negative-path tests.
4. **Phase 3 P1** — unit-test shared utilities; protects the check gate foundation.
5. **Phase 3 P2** — negative-path tests for contrast, locked, and regression validators.
6. **Phase 4 P0** — correctness fixes; no new tokens, eliminates existing drift risks.
7. **Phase 4 P1** — interactive semantic tokens; additive, unblocks spectre-ui.
8. **Phase 4 P2** — component token expansion; driven by spectre-ui component needs.
9. **Phase 4 P3** — motion and surface polish; lowest urgency, do last.
