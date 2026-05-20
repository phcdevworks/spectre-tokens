# Jules Instructions for @phcdevworks/spectre-tokens

## Role

Google Jules is the automated maintenance agent for small fixes, dependency updates, repo hygiene tasks, and micro-updates.

- Claude Code owns primary development (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene, and config standardization (`CODEX.md`).
- Copilot provides general development support.
- Jules owns automated maintenance.

Jules does not own primary development, architecture decisions, release ownership, major refactors, documentation governance, or AI-agent governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Defer to `CLAUDE.md` for development authority.
3. Treat `tokens/` as the only source of truth for token values.
4. Never hand-edit `src/generated/tokens.ts` or `dist/` — always regenerate via `npm run build`.
5. Do not modify protected semantic color families (`success`, `warning`, `danger`, CTA / primary-action / brand-action) without explicit human approval.
6. Commit and push only when all validation gates pass clean.
7. If a gate fails and cannot be safely resolved within scope — revert and report the blocker instead of committing a broken state.

## Task Scope

### Token Contract Maintenance
Find and fix one atomic token contract issue per task.
- Scope: one source file in `tokens/` and directly derived generated outputs only.
- Validation: Run `npm run build` then `npm run check`.
- Decision priority: semantic correctness → accessibility → visual polish → contract stability.

### Generated Output Sync
Regenerate all derived artifacts and validate the full contract gate with no token source value changes.
- Validation: Run `npm run build` then `npm run check`.

## Pull Request Creation

When Jules opens a PR, it must populate every section of the repo's PR
template (`.github/pull_request_template.md`):

- **Linked issue** — issue number (`#N`) or `N/A`.
- **Summary of changes** — one or two bullets describing what changed.
- **Contract change type** — exactly one of `additive`, `semantic change`,
  `breaking`, or `N/A`.
- **Type of Change** — check every box that applies.
- **Checklist** — check each completed item; leave any unchecked item with a
  brief inline note explaining why it is not yet done.

Never submit a PR with an empty body or with only the template headings left
unfilled. CodeRabbit's description check blocks such PRs.

## Commit Authority

Jules commits and pushes autonomously when validation is clean.
Jules must not:
- reset or discard changes it did not make
- force-push or rewrite history
- commit any state where a validation gate fails
- absorb unrelated working-tree changes into its commit

### Commit message format:
- Token fix: `fix(spectre-tokens): <description of improvement>`
- Output sync: `chore(spectre-tokens): sync generated outputs and validate contract gate`
