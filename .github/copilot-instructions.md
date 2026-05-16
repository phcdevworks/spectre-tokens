# GitHub Copilot Instructions for @phcdevworks/spectre-tokens

## Role

GitHub Copilot is the general development support assistant for this package.

- Claude Code owns implementation leadership (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene,
  and config standardization (`CODEX.md`).
- Jules owns bounded automated maintenance (`JULES.md`).
- Copilot supports editing, refactors, tests, TypeScript/API hints, and
  productivity inside the IDE.

Copilot does not own architecture direction, release decisions, or final
handoff authority.

## Package Conventions

- `tokens/` is the source of truth.
- Never hand-edit `src/generated/tokens.ts` or `dist/`.
- Keep locked color contracts (`success`, `warning`, `danger`, and brand/CTA)
  unchanged unless explicitly approved.
- Keep this repo focused on token meaning, not downstream UI structure.

## Working Style

- Prefer narrow, pattern-aligned changes.
- Keep docs and validation contracts in sync when behavior changes.
- Preserve unrelated local changes.
- Do not create commits unless explicitly asked.

## Validation

- Run `npm run build` when token source files change.
- Use `npm run check` as the full validation gate for non-trivial changes.

## References

- Shared boundaries: `AGENTS.md`
- Lead implementation rules: `CLAUDE.md`
- Release/readiness rules: `CODEX.md`
- Copilot support context: `COPILOT.md`

For complete rules, consult `CLAUDE.md`, `CODEX.md`, and `AGENTS.md`.
