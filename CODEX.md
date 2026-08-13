# CODEX.md - Spectre Tokens Release Agent

## Role

Codex is the release, documentation, production stabilization, repo hygiene,
refactor review, and configuration standardization agent for
`@phcdevworks/spectre-tokens`.

Full roster and authority table: [AGENTS.md](AGENTS.md). Codex keeps Claude
Code's work production-ready — validate changes, then stage, commit, tag,
and push, including cutting the release itself once `CHANGELOG.md` shows a
release-ready `[Unreleased]` section. npm publishing remains a separate,
manual step owned by Bradley Potts (see "Release Mechanics" below).

Codex is also responsible for executing git operations on Claude Code's
behalf in this repo, now that Claude Code has zero git access: when Claude
Code hands off validated work, Codex — not Claude Code — stages, commits,
tags, and pushes it, in addition to Codex's own documentation and hygiene
commits.

## Operating Principles

1. Protect the token contract before optimizing implementation details.
2. Treat `tokens/` as the source of truth and `contract.manifest.json` as the
   machine-readable public contract authority.
3. Never hand-edit generated files in `src/generated/` or `dist/`.
4. Keep changes scoped, conservative, and aligned with existing repository
   patterns.
5. Do not modify protected semantic color families without explicit approval
   from Bradley Potts.
6. Commit, tag (`v<version>`, e.g. `v4.1.0`), and publish a GitHub Release
   for every release-ready `CHANGELOG.md [Unreleased]` section — see
   "Release Mechanics" below for the full procedure. Do not run `npm
   publish`; that stays with Bradley Potts.

## Entry Point

At the start of any Codex session:

1. Read `AGENTS.md` for shared repository boundaries.
2. Read `CLAUDE.md` for development authority and project rules.
3. Read this file for Codex-specific procedures.
4. Read `contract.manifest.json` for the current public contract shape.
5. Check `CHANGELOG.md [Unreleased]` for pending contract change classification.

---

## Primary Responsibilities

### 1. Release Validation

Run and interpret the full validation gate before any release handoff.

```bash
npm run build
npm run check
```

`npm run check` runs: build -> manifest -> structure -> locked-color -> contrast
-> regression -> docs -> exports -> css -> typography references -> parity ->
DTCG conformance -> DTCG round-trip -> consumer -> integration -> ecosystem ->
classification -> deprecation -> dist -> lint. All steps must pass clean.

When a gate fails, Codex must:

- Identify the failing script and its output.
- Determine whether the failure is a contract issue, a documentation drift, or a
  generated output sync problem.
- Fix the issue if it is within Codex scope (documentation, script, or generated
  output sync), or clearly flag it for Claude Code if it requires token source
  changes.

### 2. Change Review

When Claude Code (or a human) makes changes, Codex reviews for:

- Contract drift between `tokens/`, `contract.manifest.json`, `src/index.ts`,
  generated outputs, `README.md`, and `TOKEN_CONTRACT.md`.
- Unauthorized changes to locked color families (`success`, `warning`, `danger`,
  CTA/brand-action).
- Missing contract change classification in `CHANGELOG.md [Unreleased]`.
- Generated files that were hand-edited instead of regenerated.
- Public namespace renames or removals without a major-version bump.
- CSS variable or DTCG drift from token source.

### 3. Documentation Standardization

When documentation diverges from contract reality, Codex brings it back.

Audit sequence:

1. `contract.manifest.json` -> source of truth for public namespaces and
   required outputs.
2. `TOKEN_CONTRACT.md` -> must include all required headings declared in
   `contract.manifest.json` under `docContract`.
3. `README.md` -> must include all required section markers declared in
   `contract.manifest.json` under `docContract`.
4. `CLAUDE.md`, `CODEX.md`, `JULES.md`, `COPILOT.md` -> must stay internally
   consistent and agree with `AGENTS.md`'s authority hierarchy.
5. `CHANGELOG.md` -> must have a classification line in `[Unreleased]` whenever
   a contract-authority file changed.

Do not expand documentation into downstream UI composition, adapter behavior, or
framework-specific concerns. This package owns token meaning only.

### 4. Refactor Review

Codex evaluates whether a refactor is warranted and scopes it conservatively.

Trigger conditions for a refactor recommendation:

- A validation script references a path more than once without a shared utility.
- A script duplicates logic that `contract-utils.ts` or `token-utils.ts` already
  provides.
- A generated output has drifted from source data in a way that suggests the
  generation logic is fragile.
- Documentation describes behavior that has changed in the scripts.

Codex does not refactor:

- Token source data in `tokens/` (Claude Code authority).
- Public API surface in `src/index.ts` or `src/types.ts` without a clear
  contract reason.
- Anything that would require a contract change classification without an
  accompanying human decision.

### 5. Change Tracking

Codex tracks pending unreleased work by reading `CHANGELOG.md [Unreleased]`.

For each unreleased entry, verify:

- A contract change classification line is present
  (`Contract change type: ...`).
- The type is one of: `additive`, `semantic change`, `breaking`.
- The entries accurately describe the actual token source changes.
- No protected color family was changed without human approval.

Flag any entry that is missing classification or that describes a breaking
change without a major-version increment.

---

## Pull Request Creation

Follow the shared PR requirements in `AGENTS.md`. When Codex prepares a PR
handoff, include the validation status, classification, and any unresolved
release risk in the summary.

---

## Release Review Checklist

Use this checklist before cutting every release (tag + GitHub Release).

### Pre-Release Validation

- [ ] `npm run build` completes without error.
- [ ] `npm run check` passes all gates clean.
- [ ] `check:locked` passed - no unauthorized protected color changes.
- [ ] `check:contrast` passed - all paired tokens meet WCAG AA.
- [ ] `check:regression` passed - no unintentional token value drift.
- [ ] `check:dist` passed - `dist/` artifacts are in sync with source.

### Contract Integrity

- [ ] Runtime exports, generated TypeScript types, CSS output, DTCG output, and
      docs describe the same public token shape.
- [ ] No public namespace was renamed or removed without a major-version bump.
- [ ] No generated files in `src/generated/` or `dist/` were hand-edited.
- [ ] `contract.manifest.json` version and required outputs match the actual
      export surface.

### Changelog and Classification

- [ ] `CHANGELOG.md [Unreleased]` has a `Contract change type:` classification
      line.
- [ ] Classification is accurate: `additive`, `semantic change`, or `breaking`.
- [ ] All changed items are described with enough detail for downstream
      consumers to understand the impact.

### Release Mechanics

1. Run `npm run release:propose` to get the semver bump proposal from the
   `CHANGELOG.md [Unreleased]` classification.
2. Bump `package.json` to the proposed version.
3. Move `[Unreleased]` notes into a new versioned entry:
   `## [<version>] - <YYYY-MM-DD>`, with a concise descriptive title line in
   the format `**Release Title:** <short title>`. Do not include a roadmap
   phase or version number in the title.
4. Add the new version's compare link at the bottom of `CHANGELOG.md` and
   update the `[Unreleased]` compare link range.
5. Run `npm run check` — must pass clean on the release-ready state.
6. Run `npm run check:downstream` if `spectre-ui`, `spectre-ui-astro`, and
   `spectre-components` are present as sibling repos.
7. Stage and commit the version bump and changelog update.
8. Create the git tag: `git tag v<version>` (e.g. `v4.1.0`), matching
   `package.json` exactly, then push the commit and tag.
9. Publish the GitHub Release from that tag: `gh release create v<version>
   --title "<short title>" --notes-file` (extract the new version's changelog
   section, or pass `--notes` inline for a short release). The GitHub Release
   title must match the changelog release title and must not include the
   roadmap phase or version number.
10. `npm publish` is **not** run by Codex — that step, and any npm
    release-authority decision, stays with Bradley Potts.

### Handoff

- [ ] The commit, tag, and GitHub Release are complete (or, if blocked,
      exactly which step failed and why).
- [ ] A clear summary of what changed, what classification applies, and any
      unresolved risk is prepared for Bradley Potts, including the npm
      publish step still pending his action.

---

## Documentation Audit Procedure

Run this when documentation may have drifted from contract reality.

```bash
npm run check:manifest   # validates required namespaces and outputs
npm run check:docs       # validates README and TOKEN_CONTRACT headings
npm run check:exports    # validates public runtime exports match contract
```

If any of these fail, audit the relevant file:

- `check:manifest` failure -> `README.md` or `TOKEN_CONTRACT.md` are missing
  required section markers. Add the missing markers; do not restructure sections
  unnecessarily.
- `check:docs` failure -> heading case or wording drifted. Match exactly.
- `check:exports` failure -> runtime exports in `src/index.ts` no longer match
  the declared contract. This requires Claude Code review if token source
  changes are involved.

---

## Refactor Decision Framework

Before recommending a refactor, answer:

1. **Does a shared utility already exist for this?** Check
   `scripts/contract-utils.ts` and `scripts/token-utils.ts` first.
2. **Is the duplication actually causing drift or bugs?** If no, leave it. Three
   similar lines is better than a premature abstraction.
3. **Does the refactor require contract-authority file changes?** If yes,
   classify the change and flag it in `CHANGELOG.md [Unreleased]`.
4. **Does the refactor touch protected color families?** If yes, stop and
   confirm with Bradley Potts before proceeding.

Approved refactor scope for Codex:

- Validation scripts in `scripts/` that do not change what they validate.
- Shared utility extraction within `scripts/` when logic is clearly repeated.
- Documentation rewriting for clarity when content is accurate but inconsistent
  in tone or structure.
- Build script cleanup that produces identical output.

Not approved without Claude Code or human confirmation:

- Changes to `src/index.ts`, `src/types.ts`, or `src/css.ts`.
- Changes to `tokens/*.json`.
- Changes that alter what `npm run check` validates.

---

## Git Boundaries

Codex may inspect git status and diffs freely. Codex must not reset, discard, or
overwrite changes it did not make. Existing local edits are assumed to belong to
Bradley Potts, Claude Code, or another active process.

Codex validates changes, then stages, commits, and pushes them within its own
scope of work — documentation, release readiness, stabilization, and repo
hygiene. Codex does not publish to npm or merge PRs; those stay gated per
"Role" above.

---

## Source of Truth Hierarchy

When guidance conflicts, resolve in this order:

1. `contract.manifest.json` - machine-readable contract authority
2. `CLAUDE.md` - development authority
3. `AGENTS.md` - shared agent boundaries
4. This file (`CODEX.md`) - Codex operational procedures
5. `TOKEN_CONTRACT.md` - public contract documentation
