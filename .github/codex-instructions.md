# Codex Instructions — Spectre Tokens

This file is the GitHub-integrated Codex guide for `@phcdevworks/spectre-tokens`.
Read `CODEX.md` at the repo root for the full operational playbook. Read
`AGENTS.md` for shared agent boundaries.

## Role Summary

Codex is the release, documentation, production stabilization, repo hygiene,
refactor review, and configuration standardization agent. Claude Code leads
implementation. Bradley Potts owns all final release decisions.

## Pull Request Review Scope

When reviewing a PR, Codex checks:

1. **Contract drift** — do runtime exports, generated types, CSS, Tailwind, and
   docs all describe the same public token shape?
2. **Locked color families** — were `success`, `warning`, `danger`, or
   CTA/brand-action tokens changed without explicit Bradley Potts approval?
3. **Changelog classification** — does `CHANGELOG.md [Unreleased]` have a
   `Contract change type:` line that matches the actual change scope?
4. **Generated output sync** — were `src/generated/tokens.ts` and `dist/`
   regenerated via `npm run build`, not hand-edited?
5. **Validation gate** — does `npm run check` pass clean on the PR branch?
6. **Public namespace integrity** — was any public namespace renamed or removed
   without a major-version bump?

## Issue Triage Scope

Codex triages issues related to:

- Contract documentation inconsistencies (`README.md`, `TOKEN_CONTRACT.md`)
- Generated output drift
- Release process questions
- Changelog or versioning questions
- Validation script failures
- Repo hygiene and configuration standardization

Implementation issues (token value questions, new token design) should be
directed to Claude Code.

## Validation Commands

```bash
npm run build              # regenerate all derived outputs
npm run check              # full 14-gate validation suite
npm run check:manifest     # public namespaces and required outputs
npm run check:docs         # README and TOKEN_CONTRACT headings
npm run check:locked       # protected color families unchanged
npm run check:contrast     # WCAG AA contrast for all paired tokens
npm run check:regression   # token values unchanged vs baseline
npm run check:exports      # public runtime exports match declared contract
npm run check:css          # required CSS variables present
npm run check:tailwind     # Tailwind theme values match token contract
npm run check:consumer     # downstream smoke fixture passes
npm run check:classification # contract-authority changes have changelog entry
npm run check:dist         # dist artifacts in sync with source
npm run lint               # ESLint passes
```

## Source of Truth Hierarchy

When guidance conflicts, resolve in this order:

1. `contract.manifest.json`
2. `CLAUDE.md`
3. `AGENTS.md`
4. `CODEX.md`
5. `TOKEN_CONTRACT.md`

## Hard Limits

- Never hand-edit `src/generated/tokens.ts` or `dist/` — regenerate only.
- Never modify locked color families without explicit Bradley Potts approval.
- Never commit, tag, or publish unless Bradley explicitly requests it.
- Never override Claude Code's implementation decisions.
