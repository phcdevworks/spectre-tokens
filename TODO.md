# TODO.md

# Spectre Tokens Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to token contract integrity,
downstream consumption safety, release automation, and design-tool handoff.

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

- [x] Enforce contract parity across runtime JS, generated TS, CSS, and
  Tailwind
  - `npm run check` fails on output drift across all public package surfaces.
  Missing or undocumented public outputs fail validation.

- [x] Enforce docs against the machine-readable contract
  - `README.md` and `TOKEN_CONTRACT.md` fail validation if they drift from
  the declared public contract.

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
  - `CONTRIBUTING.md` contains a dedicated "Contract-Impacting Change
  Checklist" section covering the required steps for changes that touch
  `tokens/`, `contract.manifest.json`, `src/`, `README.md`, or
  `TOKEN_CONTRACT.md`.

- [x] Re-evaluate semantic expansion only for proven downstream demand
  - Standing policy, not a one-time deliverable. Documented in `AGENTS.md`
  and `TOKEN_CONTRACT.md`. No implementation required; policy is enforced
  through review.

### P2: Controlled Improvement

- [x] Improve release-note clarity for contract changes
  - Added `Contract change type:` classification lines to all 2.x entries
  that were missing them. Normalized changelog formatting across the completed
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

- [ ] Replace or augment the smoke fixture with a real `spectre-ui`
  integration fixture
  - Validate that the package works the way downstream packages actually
  consume it, not just that the token shape is correct in isolation.

- [x] Validate Tailwind preset composition against a downstream config
  - Confirm the preset composes correctly with a consumer Tailwind config that
  has its own theme extensions. Catch namespace collisions and merge conflicts.
  - Delivered via `example/integration-fixture/` validated by `check:integration`.

- [x] Validate CSS variable output in a real integration context
  - Confirm variables do not collide with or shadow downstream CSS when the
  package is used alongside `spectre-ui`.
  - Delivered via `example/integration-fixture/layer.css` and `check:integration`
  namespace-collision checks.

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

- [ ] Decide on the synchronization target: Tokens Studio or Style Dictionary
  - Evaluate against the current Figma workflow before writing any output code.

- [ ] Add a design-tool output to the build pipeline
  - Generate either a `build:tokens-studio` or `build:style-dictionary` output
  alongside existing artifacts so the handoff file stays in sync with source.

- [ ] Wire the new output into dist sync validation
  - Stale design-tool output should fail the check gate just like stale
  `dist/` artifacts.

- [ ] Document the design handoff workflow in `CONTRIBUTING.md`
  - Designers should know how to pull updated tokens into Figma from the
  published source.

### P3: Deprecation Policy

- [x] Define the deprecation lifecycle in `TOKEN_CONTRACT.md`
  - Document `active` -> `deprecated` -> `removed`, including the expected
  migration window before removal.

- [x] Add a `deprecated` marker to the token source schema
  - Deprecated tokens should be flagged at the source level, not only in
  release notes.

- [x] Add validation for deprecated and removed tokens
  - Warn when deprecated tokens are present. Fail when a token marked for
  removal is still in the public export.

- [x] Define the deprecation notice format for `CHANGELOG.md`
  - Consumers should see exactly which token is deprecated, what replaces it,
  and in which version it will be removed.

## Recommended Execution Order

1. Downstream integration hardening against `spectre-ui`.
2. Semver proposal automation for release handoff.
3. Design-tool synchronization after the Figma target is confirmed.
4. Deprecation policy when the first token retirement is approaching.

## Explicitly Out of Scope

- Do not add component structure ownership here.
- Do not add framework-specific token behavior here.
- Do not expand raw token families without clear downstream demand.
- Do not move recipe, component anatomy, or adapter concerns into this package.
