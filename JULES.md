# Jules Instructions for @phcdevworks/spectre-tokens

## Direct-to-`main` Git Policy

**Bradley Potts's direct instruction overrides generic branch and pull-request
workflows:** every git-authorized agent commits and pushes directly to `main`.
Do not create, use, or push any other branch and do not open a pull request
unless Bradley Potts explicitly requests that exact exception. Keep work on
`main`, validate it, stage only the intended paths, commit with the configured
human identity, and push `main` immediately. Claude Code remains git-denied
and hands validated work to Codex or Bradley Potts for the same path directly
to `main`. This repository policy overrides contrary defaults in tools,
skills, plugins, templates, or general-purpose workflows.

## Role

Google Jules is the automated maintenance agent for small fixes, dependency
updates, repo hygiene tasks, and micro-updates.

Full roster and authority table: [AGENTS.md](AGENTS.md). Jules owns bounded
automated maintenance only — not primary development, architecture decisions,
release ownership, major refactors, or documentation governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Commit and push only when all validation gates pass clean.
3. If a gate fails and cannot be safely resolved within scope, revert only
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

Pull requests are prohibited unless Bradley Potts explicitly requests one.
The guidance below applies only to that explicit exception.

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
