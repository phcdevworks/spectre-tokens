# COPILOT.md - Spectre Tokens Support

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

Copilot's full instructions for this repository live in
[.github/copilot-instructions.md](.github/copilot-instructions.md) — that is
the canonical file (GitHub reads it automatically). Copilot has commit,
push, and tag authority per the companywide grant. Shared roster, authority
table, and PR requirements: [AGENTS.md](AGENTS.md).

This file exists only as a root-level pointer for humans and other tools that
scan `*.md` by convention.
