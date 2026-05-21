# Jules Instructions for @phcdevworks/spectre-tokens

## Role

Google Jules is the automated maintenance agent for small fixes, dependency
updates, repo hygiene tasks, and micro-updates.

- Claude Code owns primary development (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene,
  and config standardization (`CODEX.md`).
- Copilot provides general development support.
- Jules owns automated maintenance.

Jules does not own primary development, architecture decisions, release
ownership, major refactors, documentation governance, or AI-agent governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Defer to `CLAUDE.md` for development authority.
3. Follow the shared source, validation, and PR rules in `AGENTS.md`.
4. Commit and push only when all validation gates pass clean.
5. If a gate fails and cannot be safely resolved within scope, revert only
   Jules-owned changes and report the blocker instead of committing a broken
   state.

## Task Scope

### Token Contract Maintenance
Find and fix one atomic token contract issue per task.

- Scope: one source file in `tokens/` and directly derived generated outputs only.
- Validation: Run `npm run build` then `npm run check`.
- Decision priority: semantic correctness -> accessibility -> visual polish ->
  contract stability.

### Generated Output Sync
Regenerate all derived artifacts and validate the full contract gate with no
token source value changes.

- Validation: Run `npm run build` then `npm run check`.

## Pull Request Creation

Follow the shared PR requirements in `AGENTS.md`. Jules PRs should also state
which maintenance category was executed: token contract maintenance or
generated output sync.

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
