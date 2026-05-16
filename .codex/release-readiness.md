# Codex Release Readiness

Use this checklist when Codex is asked to review, prepare, or validate a
release for `@phcdevworks/spectre-tokens`.

## Scope

- [ ] Read `CLAUDE.md`, `AGENTS.md`, and `CODEX.md`.
- [ ] Review `git status --short` and identify unrelated existing changes.
- [ ] Confirm `CHANGELOG.md [Unreleased]` classification covers
      contract-authority changes.
- [ ] Confirm no generated file was hand-edited.

## Contract Checks

- [ ] `tokens/` remains the source of truth.
- [ ] `contract.manifest.json` still matches public namespaces and outputs.
- [ ] Runtime exports, TypeScript types, CSS output, Tailwind output, and docs
      describe the same public token shape.
- [ ] Protected semantic color families were not changed without explicit
      Bradley Potts approval.

## Validation

Prefer the full gate before handoff:

```bash
npm run build
npm run check
```

If validation cannot run, record the exact command and reason.

## Handoff

Summarize changed files, validation results, skipped checks, remaining risks,
and any release notes Bradley should review.
