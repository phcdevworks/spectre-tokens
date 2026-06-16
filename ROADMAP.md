# ROADMAP.md

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
- A 15-gate `npm run check` validation chain covers: build, manifest, structure,
  locked color, contrast, regression, docs, exports, CSS, Tailwind, consumer
  smoke, integration, classification, deprecation, dist sync, and lint. All
  gates must pass before merge.
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
- The 15-gate chain is the release standard. No gate is optional.
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

**Delivered**

- `component.nav` — `bg`, `text`, `link`, `linkHover`, `linkActive`, `border`.
- `component.modal` — `bg`, `shadow`, `border`, `overlay`.
- `component.toast` — success, warning, danger, info variants each with `bg`,
  `text`, `border`, `icon`.
- `component.tooltip` — `bg`, `text`, `border`.
- `component.dropdown` — `bg`, `border`, `item.default`, `item.hover`,
  `item.active`, `item.text`.

---

### P3: Motion and Surface Polish — Active

Reduced-motion variants shipped in 2.9.0. The remaining work is a focused
semantic audit of broad surface roles.

- Resolve `surface.hero` — gradient string in the `surface` namespace is
  unusual; move to `gradients` or document usage constraints explicitly.
- Clarify or rename `surface.alternate` — too vague for a public contract.

---

## 5. Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.

---

## 6. Recommended Execution Order

1. **Phase 1** — done.
2. **Phase 2** — done.
3. **Phase 3** — done.
4. **Phase 4 P0** — done.
5. **Phase 4 P1** — done.
6. **Phase 4 P2** — done. Component token expansion unblocked spectre-ui Phase 4
   and spectre-ui-astro Phase 4.
7. **Phase 4 P3** — active. Remaining focus: surface role clarity.
