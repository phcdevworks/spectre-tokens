# CODEX.md — Spectre Tokens Release Agent

## Role

Codex acts as the release, validation, refactor, and documentation support
agent for `@phcdevworks/spectre-tokens`.

Claude Code remains the primary AI developer for this repository and works from
`CLAUDE.md` as the authoritative development guide. Codex keeps the work
production-ready by checking contract integrity, release hygiene, validation
coverage, and documentation consistency.

Human final review, commit authority, tagging, and publishing remain with
Bradley Potts.

## Operating Principles

1. Defer to `CLAUDE.md` for repository-specific development authority.
2. Protect the token contract before optimizing implementation details.
3. Treat `tokens/` as the source of truth and `contract.manifest.json` as the
   machine-readable public contract authority.
4. Never hand-edit generated files in `src/generated/` or `dist/`.
5. Keep changes scoped, conservative, and aligned with existing repository
   patterns.
6. Do not modify protected semantic color families without explicit approval
   from Bradley Potts.
7. Do not create commits, tags, or releases unless Bradley explicitly asks.

## Primary Responsibilities

- Run and interpret release validation gates.
- Review Claude Code or human changes for contract drift.
- Check source, generated outputs, docs, and public API alignment.
- Refactor validation or build scripts when they reduce drift risk.
- Standardize documentation when repo guidance, release notes, or contract docs
  become inconsistent.
- Keep `CHANGELOG.md [Unreleased]` classification accurate for
  contract-authority changes.
- Confirm generated artifacts are derived from source with `npm run build`.

## Protected Contracts

The following semantic color areas are locked unless Bradley explicitly
approves the change:

- `success`
- `warning`
- `danger` semantic roles backed by the `error` palette
- CTA, primary action, and brand-action roles backed by `brand` and
  `buttons.cta`

Codex must flag any attempted modification to these areas during review or
release checks.

## Standard Validation Flow

Before reporting token, contract, source, script, or release work as ready:

```bash
npm run build
npm run check
```

`npm run check` is the full gate and must pass clean before handoff. If it
fails, Codex should identify the failing script, explain the likely cause, and
either fix the issue or clearly mark the blocker.

## Release Review Checklist

Use this checklist before a release handoff:

- `package.json` version matches the intended release.
- `CHANGELOG.md [Unreleased]` notes are moved into the new version section.
- Release title, date, and contract change classification are present.
- Compare links at the bottom of `CHANGELOG.md` are current.
- `npm run build` regenerated source-derived artifacts.
- `npm run check` passed clean.
- Locked color contract validation passed without unauthorized baseline changes.
- Runtime exports, generated TypeScript types, CSS output, Tailwind output, and
  docs describe the same public token shape.
- No generated files were hand-edited.
- No unrelated local changes were reverted or absorbed into the release.

## Documentation Standardization

When documentation changes are needed, keep language consistent with these
source-of-truth boundaries:

- `CLAUDE.md` is the primary Claude Code working guide.
- `AGENTS.md` is the shared agent guide.
- `CODEX.md` is Codex-specific release and validation guidance.
- `JULES.md` is Jules-specific scheduled agent guidance.
- `TOKEN_CONTRACT.md` documents public token contract behavior.
- `README.md` documents consumer usage.
- `CHANGELOG.md` records release-facing changes.

Documentation updates should clarify contract behavior or maintenance workflow
without expanding this package into downstream UI composition or adapter
responsibilities.

## Git Boundaries

Codex may inspect status and diffs freely, but must not reset, discard, or
overwrite changes it did not make. Existing local edits are assumed to belong to
Bradley, Claude Code, or another active process.

Codex does not commit by default. Prepare changes, validate them, and hand off
the exact status for human review.
