# Spectre Tokens Agent Guide

## Repository Snapshot

| Field            | Value                            |
| ---------------- | -------------------------------- |
| Project team     | `project-design`                 |
| Repository role  | Spectre L1 design-token contract |
| Package/artifact | `@phcdevworks/spectre-tokens`    |
| Validation gate  | `npm run check`                  |

## Standard Authority Model

| Agent          | Role                                                              | Authority                |
| -------------- | ----------------------------------------------------------------- | ------------------------ |
| Claude Code    | Lead implementation and validation                                | [CLAUDE.md](CLAUDE.md)   |
| OpenAI Codex   | Documentation, release readiness, stabilization, and repo hygiene | [CODEX.md](CODEX.md)     |
| ChatGPT        | Strategy, coordination, prompt design, and external review        | Support only             |
| GitHub Copilot | Development assistance                                            | [COPILOT.md](COPILOT.md) |
| Google Jules   | Bounded automated maintenance                                     | [JULES.md](JULES.md)     |

**All AI agents in this roster** — Claude Code, OpenAI Codex, GitHub Copilot,
and Google Jules — have full commit, push, and tag authority in this
repository, effective 2026-07-25 by explicit direction from Bradley Potts —
see the Commit Policy section in each agent's own guide
([CLAUDE.md](CLAUDE.md), [CODEX.md](CODEX.md), [COPILOT.md](COPILOT.md),
[JULES.md](JULES.md)). Bradley Potts retains ultimate ownership, can revoke
or narrow this at any time, and still holds sole authority for publishing
and releases to npm. This grant covers git operations within each agent's
own scope of work as defined above — it does not expand what any agent is
authorized to decide. ChatGPT has no repository access and is excluded.

## Cross-Repo Access

This repo may be worked on standalone or alongside any combination of other
PHCDevworks repos — do not assume the company root or sibling project areas are
present. The following rules are self-contained and apply whether or not that
broader context is available.

**File access.** An agent working in this repo has full read/write access to
every file in this repo. When this repo is present alongside other PHCDevworks
repos (company root or sibling `project-*` areas), the same full read/write
access extends to those repos too — there is no per-repo access restriction
anywhere in this workspace. What differs repo-to-repo is not _access_, it's
_editorial ownership_: each repo's own `CLAUDE.md`/`AGENTS.md` still governs
what changes make sense there (design-token authority, layer boundaries, etc.) —
being able to open and edit a file is not the same as it being this repo's job
to change it.

**Cross-repo changelog and TODO/roadmap requests.** Full rules: company root
[AGENTS.md](../../AGENTS.md) § "Cross-Repo Changelog Sync" and § "Upstream
Requests and Roadmap Self-Expansion." Applied here without exception — this
repo may append `[Unreleased]` changelog entries and downstream TODO requests
to other present repos per those rules, and no AI agent creates commits, tags,
publishes packages, or merges changes in this repo or any other unless that
repo's own agent guide explicitly grants that authority.

## Standard Handoff

Every AI-prepared change should report files changed, validation performed,
public behavior or contract impact, and unresolved risks. Do not edit generated
outputs directly. Do not update [CHANGELOG.md](CHANGELOG.md) unless the change
is release-relevant.

## Human Approval Boundaries

Protected semantic color families and major contract changes require explicit
human approval before merge.

This repository is maintained by PHCDevworks and contains the design-token
package of the Spectre system.

## Upstream Requests and Roadmap Self-Expansion

Full directive: project-team [AGENTS.md](../AGENTS.md) "Upstream Requests and
Roadmap Self-Expansion." Applied to this repo:

- This repo is L1 — the root of the Spectre design system. It has no upstream
  dependency within this workspace; do not invent one.
- Downstream repos (`spectre-ui`, and transitively `spectre-components`,
  `spectre-ui-astro`, `spectre-base`, plus consumers in `project-shell` and
  `project-web`) may append a token or semantic-vocabulary request to this
  repo's own `TODO.md` under `## Requested by Downstream`. Keep that section
  visible and separate from this repo's self-planned token work.
- This repo's own [ROADMAP.md](ROADMAP.md) may be proactively expanded with new
  or reordered phases by the agent's own analysis — but never mark a phase
  delivered without `npm run check` passing, and never contradict the locked
  protected-color-family approval gate (`success`, `warning`, `danger`, CTA /
  brand-action require Bradley Potts approval regardless of roadmap state).
- Surface any new TODO request or roadmap expansion in the handoff for Bradley
  Potts in the same change it was made, and reflect cross-repo-relevant changes
  in the project-team's own ROADMAP.md/TODO.md.

## Shared Source Rules

These rules apply to every agent without exception.

| Path                                         | Status                     | Notes                                                                    |
| -------------------------------------------- | -------------------------- | ------------------------------------------------------------------------ |
| `tokens/*.json`                              | **May edit**               | Source of truth; all token value changes start here                      |
| `contract.manifest.json`                     | **May edit**               | Update when public namespaces or required outputs change                 |
| `src/index.ts`, `src/types.ts`, `src/css.ts` | **May edit**               | Contract-authority files; changes require changelog classification       |
| `scripts/`                                   | **May edit**               | Build and validation tooling                                             |
| `README.md`, `TOKEN_CONTRACT.md`, other docs | **May edit**               | Keep aligned with `contract.manifest.json`                               |
| `CHANGELOG.md`                               | **May edit**               | Classification entries required for contract-authority changes           |
| `src/generated/tokens.ts`                    | **Never edit directly**    | Always regenerated by `npm run build`; edits are immediately overwritten |
| `dist/`                                      | **Never edit directly**    | Always regenerated by `npm run build`                                    |
| `spectre.manifest.json`                      | **May edit**               | Update when exports, Spectre dependencies, or stability change           |
| Protected color families                     | **Require human approval** | `success`, `warning`, `danger`, CTA / brand-action                       |

Full validation command: `npm run check`.

Detailed implementation procedure lives in `CLAUDE.md`. Public contract rules
live in `TOKEN_CONTRACT.md`. Human contribution workflow lives in
`CONTRIBUTING.md`.

## Agent-Specific Guides

- `CLAUDE.md` - primary development authority and implementation workflow.
- `CODEX.md` - documentation, release, stabilization, and repo hygiene workflow.
- `JULES.md` - bounded automated maintenance workflow.
- `COPILOT.md` and `.github/copilot-instructions.md` - support-assistant
  workflow.

## Pull Request Creation

Every agent that opens a PR must populate every section of the repo's PR
template (`.github/pull_request_template.md`):

- **Linked issue** - issue number (`#N`) or `N/A`.
- **Summary of changes** - one or two bullets describing what changed.
- **Contract change type** - exactly one of `additive`, `semantic change`,
  `breaking`, or `N/A`. Must match the `CHANGELOG.md [Unreleased]`
  classification line.
- **Type of Change** - check every box that applies.
- **Checklist** - check each completed item; leave blocked items unchecked with
  a brief inline note.

Never submit a PR with an empty body or only the template headings left
unfilled. CodeRabbit's description check blocks such PRs.

## Mission

Protect the token contract.

This package defines the visual language, semantic roles, and token contracts
consumed by downstream Spectre packages and compatible applications.

## Core Rules

1. Treat `tokens/` as the source of truth.
2. Avoid breaking token contracts without an intentional major-version change.
3. Keep generated outputs derived from source data, never hand-maintained.
4. Prefer semantic naming and reusable contracts over package-specific wording.
5. Verify token changes propagate cleanly to runtime exports, TypeScript types,
   CSS output, and DTCG output.
6. The documented public contract, exported runtime object, and generated
   TypeScript contract must describe the same token shape.
7. Accessibility matters, but semantic clarity and visual quality must also be
   preserved.
8. Do not modify locked semantic color families without explicit approval from
   Bradley Potts.
9. Keep the namespace singular as `border`; do not reintroduce `borders`.
10. Do not expand this package into downstream UI structure, composition, or
    framework-specific adapter behavior. Token vocabulary expansion is in scope;
    component structure and framework adapters are not.
11. All `scripts/` tooling is TypeScript (`.ts`), run via `tsx`; never add a new
    `.js`/`.mjs` script.
12. After adding or renaming any field in `tokens/*.json`, run
    `npx vitest run tests/css-semantic-coverage.test.ts` before considering the
    change complete. `src/css.ts` builds CSS output from hand-maintained
    field-mapping arrays per component group (e.g. `SELECT_FIELDS`,
    `BADGE_VARIANTS`), not by iterating the token tree, so a token can be added
    to `tokens/*.json` and `src/types.ts` while silently never reaching
    `dist/index.css`. This has happened three times (`3.1.0`, `3.3.0`
    select/textarea, and `component.badge`/`testimonial`/`pricingCard`/ `rating`
    simultaneously) and `npm run check`'s `check:css` step does not catch it —
    `check:css` only validates a fixed allowlist of required variables, not full
    token-tree coverage. The coverage test is the only gate that walks every
    `tokens.component.*` key against generated CSS; do not skip it and do not
    narrow its scope back to specific namespaces.

## Working Boundaries

- Token meaning — including proactive expansion of the semantic vocabulary —
  belongs here. The package should ship a complete UI-ready token surface, not
  wait for downstream demand to drive every addition.
- Downstream UI packages define structure, composition, and component anatomy.
- Adapter packages translate Spectre contracts for specific frameworks and
  runtimes.
- `example/` exists to document and demonstrate token usage. It is not the
  source of truth and should not be treated as ownership of downstream UI
  primitives.

## Ecosystem Manifest

`spectre.manifest.json` at the root is this package's declaration in the Spectre
ecosystem contract, validated by `@phcdevworks/spectre-manifest`. It records
role, layer, exports, and allowed Spectre dependency targets. `check:ecosystem`
validates it as part of `npm run check`.

Keep `spectre.manifest.json` in sync when:

- Package exports in `package.json` are added or removed
- A Spectre package dependency is added or removed
- The package stability changes

Do not add a `consumers` field — that belongs in the central
`@phcdevworks/spectre-manifest` registry.
