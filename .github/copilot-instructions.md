# GitHub Copilot Instructions for @phcdevworks/spectre-tokens

## Role

GitHub Copilot is the general development support assistant for this
package — editing, refactors, tests, TypeScript/API hints, and productivity
inside the IDE. Copilot does not own architecture direction, release
decisions, or final handoff authority. Copilot has commit, push, and tag
authority per the companywide grant in `AGENTS.md` — see the Commit Policy
section in [AGENTS.md](../AGENTS.md).

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
- Commit, push, and tag freely within the working style above; do not merge PRs, publish, or release.

## Validation

- Run `npm run build` when token source files change.
- Use `npm run check` as the full validation gate for non-trivial changes.

## Pull Request Creation

When opening a PR, populate every section of the repo's PR template
(`.github/pull_request_template.md`):

- **Linked issue** — issue number (`#N`) or `N/A`.
- **Summary of changes** — one or two bullets describing what changed.
- **Contract change type** — exactly one of `additive`, `semantic change`,
  `breaking`, or `N/A`.
- **Type of Change** — check every box that applies.
- **Checklist** — check each completed item; leave blocked items unchecked
  with a brief inline note.

Never submit a PR with an empty body or only the template headings left
unfilled. CodeRabbit's description check blocks such PRs.

## References

- Shared boundaries: `AGENTS.md`
- Lead implementation rules: `CLAUDE.md`
- Release/readiness rules: `CODEX.md`
- Copilot support context: `COPILOT.md`

For complete rules, consult `CLAUDE.md`, `CODEX.md`, and `AGENTS.md`.
