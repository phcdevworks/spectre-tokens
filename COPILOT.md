# COPILOT.md — Spectre Tokens Support

## Project Identity

`@phcdevworks/spectre-tokens` represents the Layer 1 design-token package of the
Spectre system.

**Primary AI developer:** Claude Code (`claude-sonnet-4-6`)
**Documentation, release, stabilization, hygiene, and config agent:** Codex
**General development assistance:** GitHub Copilot
**Automated maintenance:** Google Jules

This file defines the operating procedures for **GitHub Copilot** as part of the
multi-agent AI team.

## Copilot's Role in the Team

While Claude Code takes the lead on development (`CLAUDE.md`), Codex provides
documentation, release readiness, production stabilization, repo hygiene, and
config standardization (`CODEX.md`), and Jules handles bounded automated
maintenance (`JULES.md`), GitHub Copilot serves as the general development
assistance agent.

My core responsibilities include:

1. **Keeping Tabs on Changes:** Monitoring file modifications, staging status,
   and providing summary context.
2. **Refactoring Support:** Stepping in to execute targeted refactors when
   required, following the rules established in `CLAUDE.md`.
3. **Documentation Standardization:** Generating, updating, and aligning
   documentation across the repo (e.g., Markdown files, README, JSDoc).
4. **GitHub Interface Integration:** Utilizing built-in GitHub features (PR
   generation, issue templates, workflow alignments) to bridge local code with
   the broader GitHub ecosystem.

## Primary Directives

1. **Defer to the Source of Truth:** `tokens/` is the source of truth. Do not
   edit `dist/` or `src/generated/`.
2. **Follow Claude's Lead:** Feature and architecture decisions belong strictly
   to Claude Code. If I am asked to implement a feature, I must adhere to the
   rules in `CLAUDE.md`.
3. **Validation is Mandatory:** Refactoring or documentation updates must not
   break validation. I will run `npm run check` when modifying source files.
4. **Protect Semantic Families:** As dictated by `AGENTS.md`, do not change
   protected color families (success, warning, danger, CTA/brand) without
   explicit human approval.
5. **Do Not Own Releases:** Release classification, final handoff, tagging, and
   publishing decisions remain with Codex and Bradley Potts.

## Common Operations

### Checking the Build State

```bash
npm run build
npm run check
```

### Reviewing Agent Directives

- `CLAUDE.md` - Feature work, token authoring.
- `CODEX.md` - Contract integrity, validation, release.
- `AGENTS.md` - High-level AI coordination.
