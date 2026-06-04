# ROADMAP.md

# Spectre Tokens Roadmap

`@phcdevworks/spectre-tokens` is the authoritative contract layer for token
meaning across the Spectre system. It owns token definitions, semantic token
contracts, modes and themes, and the generated outputs consumed by downstream
packages. Its job is to keep token meaning stable, enforceable, and safe to
consume — not to model component structure or framework behavior.

---

## 1. Foundation Status — Delivered

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
- A downstream smoke fixture validates runtime token import, CSS import,
  Tailwind preset usage, semantic token usage, and mode-aware usage.
- CI runs the full validation chain on Node 22 and 24 for every push and pull
  request.
- A multi-agent team (Claude Code, Codex, Copilot, Jules) operates with
  documented authority boundaries, PR creation requirements, and CodeRabbit
  review integration.

### What will not change

- `tokens/` remains the only source of truth. No hand-editing generated files.
- The 14-gate chain is the release standard. No gate is optional.
- Protected semantic color families (`success`, `warning`, `danger`,
  CTA/brand-action) require explicit Bradley Potts approval to change.
- This package does not own component structure, framework behavior, or
  adapter concerns.

---

## 2. Roadmap — Mature Phase

The foundation is stable. The next phase hardens the contract against real
downstream consumption, automates manual release steps, and opens the token
system to design tooling.

---

### P0: Downstream Integration Hardening

**Objective** Prove the contract against real `spectre-ui` consumption, not
only the internal smoke fixture.

**Why it matters** The smoke fixture validates the package shape in isolation.
Real downstream usage surfaces integration mismatches that isolated checks
cannot catch — namespace collisions, Tailwind theme conflicts, CSS variable
scope assumptions, and peer dependency constraints.

**Deliverables**

- Replace or augment the smoke fixture with an integration test that imports
  and exercises `@phcdevworks/spectre-tokens` from a real `spectre-ui` fixture.
- Validate that the Tailwind preset composes correctly with a downstream
  Tailwind config that has its own theme extensions.
- Validate that CSS variable output does not collide with or shadow downstream
  CSS in a real integration context.
- Document any integration constraints as explicit contract rules in
  `TOKEN_CONTRACT.md`.

**Dependency notes**

- Requires a stable `spectre-ui` fixture or package to test against.

**Risk if skipped**

- Integration breakage can ship undetected because the smoke fixture validates
  shape, not real composition behavior.

---

### P1: Versioning Automation

**Objective** Use the existing contract change classification to automate semver
decisions and reduce manual release overhead.

**Why it matters** The classification system (`additive`, `semantic change`,
`breaking`) already encodes the semver signal. Right now that signal is read
manually at release time. Automating it removes human error from version bumps
and makes the release procedure faster and more consistent.

**Deliverables**

- Add a script that reads the `Contract change type:` line from
  `CHANGELOG.md [Unreleased]` and proposes the correct version bump
  (`patch` / `minor` / `major`) based on classification:
  - `additive` → minor
  - `semantic change` → minor (or patch if no public surface changed)
  - `breaking` → major
- Integrate the script into the release procedure documented in `CLAUDE.md`
  and `CODEX.md` so Codex can use it during release handoff.
- Keep the final version decision with Bradley Potts — the script proposes,
  the human confirms.

**Dependency notes**

- No upstream dependency. Can be built independently of P0.

**Risk if skipped**

- Version bumps remain manual and error-prone. A breaking change could ship
  as a minor bump if the classification line is misread.

---

### P2: Design Tool Synchronization — Delivered

**Objective** Make tokens available in the design tool so token meaning flows
from source into Figma rather than being maintained in parallel.

#### Delivered

- `scripts/build-dtcg.ts` generates `dist/tokens.dtcg.json` in W3C DTCG format
  (no external dependency). Tokens Studio and Style Dictionary v4 both consume
  DTCG natively. 546 tokens across all public namespaces with inferred
  `$type`, `$value`, and `$description`.
- Wired into `npm run build` via `build:design`. `check:dist` automatically
  catches stale output. `check:manifest` validates the file exists and contains
  valid DTCG tokens.
- `CONTRIBUTING.md` documents the Tokens Studio setup and sync workflow.
- `contract.manifest.json` declares the `design` output with required top-level
  keys.

---

### P3: Deprecation Policy

**Objective** Define a formal, machine-enforceable path for retiring tokens
from the public contract.

**Why it matters** As the Spectre system matures, some tokens will need to be
renamed, replaced, or removed. Without a deprecation policy, removal is a
silent breaking change. With one, downstream consumers get a migration window
and a clear upgrade path.

**Deliverables**

- Define the deprecation lifecycle: `active` → `deprecated` → `removed`.
- Add a `deprecated` marker to the token source schema so deprecated tokens
  can be flagged at the source level.
- Add a validation check that warns when deprecated tokens are present and
  fails when a token marked for removal is still in the public export.
- Add a deprecation notice format to the changelog convention — consumers
  should see exactly which token is deprecated, what replaces it, and in which
  version it will be removed.
- Document the deprecation process in `CONTRIBUTING.md` and
  `TOKEN_CONTRACT.md`.

**Dependency notes**

- Best implemented after P0 downstream integration is solid, so the
  deprecation path can be tested end-to-end.

**Risk if skipped**

- Token removal becomes a silent breaking change. Downstream consumers have
  no migration window and no automated signal.

---

---

## 3. Roadmap — Token Surface Completion

The contract infrastructure is mature. This phase completes the token
vocabulary so `spectre-ui` and downstream consumers have everything they need
to build a full UI from token contracts rather than raw palette values.

---

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

## 4. Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into
  this repo.

---

## 5. Recommended Execution Order

1. **Phase 2 P0 — Downstream integration** — done.
2. **Phase 2 P1 — Versioning automation** — done.
3. **Phase 2 P3 — Deprecation policy** — done.
4. **Phase 2 P2 — Design tool sync** — done.
5. **Phase 3 P0 — Correctness fixes** — no new tokens; fix existing drift risks.
6. **Phase 3 P1 — Interactive semantic tokens** — additive; unblocks spectre-ui.
7. **Phase 3 P2 — Component token expansion** — additive; driven by UI component
   needs as spectre-ui builds out.
8. **Phase 3 P3 — Motion and surface polish** — lowest urgency; do last.
