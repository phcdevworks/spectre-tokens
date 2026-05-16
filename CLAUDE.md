# CLAUDE.md — Spectre Tokens

## Project Identity

`@phcdevworks/spectre-tokens` is the Layer 1 design-token package of the
Spectre system. It defines visual language, semantic roles, and token contracts
consumed by downstream Spectre packages and compatible applications.

**Human owner:** Bradley Potts (brad.potts@coastdigitalgroup.com)
**Primary AI developer:** Claude Code (claude-sonnet-4-6)

This file is the authoritative guide for Claude Code operating in this
repository. Read it before touching any source file.

## Multi-Agent Team

This repository operates with three AI agents working together:

- **Claude Code** (primary AI developer) — token authoring, feature work,
  source changes, architecture. Operates from this file (`CLAUDE.md`).
- **Codex** (release/validation support) — contract integrity review,
  release readiness checks, generated output sync, docs standardization.
  Operates from `CODEX.md`, defers to this file for development authority.
- **Jules** (autonomous scheduled agent) — executes defined maintenance tasks
  on a schedule; commits and pushes autonomously when all validation gates
  pass. Operates from `JULES.md`.

`AGENTS.md` is the shared guide read by all agents. Treat Codex reviews and
Jules commits as peer input — resolve conflicts by referencing `CLAUDE.md`
and `contract.manifest.json` as the authoritative sources.

## Commit Policy

Claude Code does not create git commits in this repository. Prepare changes,
run all validation, and leave staging, committing, tagging, and pushing to
human review.

## The One Rule That Overrides Everything

`tokens/` is the source of truth. `contract.manifest.json` is the
machine-readable contract authority. Generated outputs in `dist/` and
`src/generated/` are always derived — never hand-edited.

## Development Workflow

```bash
npm install           # install dependencies
npm run build         # regenerate all outputs (always run after token changes)
npm run check         # full validation gate — must pass before any commit
```

`npm run check` runs build → manifest → structure → locked-color → contrast →
regression → docs → exports → css → tailwind → consumer → classification →
dist → lint. All must pass.

## File Structure

```
tokens/               source token JSON (source of truth)
src/
  index.ts            public package entry point and Tailwind theme
  css.ts              CSS variable generation
  types.ts            public TypeScript types
  generated/
    tokens.ts         auto-generated — DO NOT EDIT
scripts/              build and validation scripts
dist/                 generated release artifacts — DO NOT EDIT
contract.manifest.json  machine-readable contract authority
```

## Key Scripts Reference

| Script | What it validates |
|---|---|
| `check:manifest` | public namespaces and required outputs vs contract.manifest.json |
| `check:structure` | token tree shape |
| `check:locked` | protected color families unchanged |
| `check:contrast` | WCAG AA contrast for all paired tokens |
| `check:regression` | token values unchanged vs baseline |
| `check:docs` | README.md and TOKEN_CONTRACT.md aligned to manifest |
| `check:exports` | public runtime exports match declared contract |
| `check:css` | required CSS variables present |
| `check:tailwind` | Tailwind theme values match token contract |
| `check:consumer` | downstream smoke fixture passes |
| `check:classification` | contract-authority changes have changelog entry |
| `check:dist` | dist artifacts are in sync with source |
| `lint` | ESLint passes |

## Token Change Procedure

1. Edit source data in `tokens/*.json` only.
2. Run `npm run build` to regenerate `src/generated/tokens.ts` and `dist/`.
3. Run `npm run check` — must pass clean.
4. If a contract-authority file changed (`tokens/`, `contract.manifest.json`,
   `src/index.ts`, `src/types.ts`, `src/css.ts`, `README.md`), add a
   classification line to `CHANGELOG.md [Unreleased]`:
   - `Contract change type: additive`
   - `Contract change type: semantic change`
   - `Contract change type: breaking`

## Locked Color Families (Do Not Touch Without Human Approval)

- `success` family
- `warning` family
- `danger` semantic roles (backed by `error` palette)
- CTA / primary-action / brand-action (backed by `brand` and `buttons.cta`)

Changes to these require explicit approval from Bradley Potts.

## Public Contract Namespaces

`colors`, `space`, `layout`, `radii`, `typography`, `font`, `shadows`,
`breakpoints`, `zIndex`, `transitions`, `animations`, `opacity`,
`aspectRatios`, `icons`, `border`, `accessibility`, `buttons`, `forms`,
`surface`, `text`, `component`, `modes`

Adding a new namespace is additive. Removing or renaming is breaking.
The banned namespace is `borders` — always use `border` (singular).

## Code Style

- ES modules throughout, strict TypeScript, no `any`.
- Prettier config: single quotes, no semicolons, trailing commas off, 80-char
  print width.
- No comments unless the WHY is non-obvious. Never comment what the code does.
- Do not add error handling for scenarios that cannot happen.
- Do not add features beyond what the task requires.

## Release Procedure

1. Update `package.json` version.
2. Move `[Unreleased]` notes in `CHANGELOG.md` to a new versioned entry with a
   release title and date.
3. Update the `[unreleased]` and add the new version compare link at the bottom
   of `CHANGELOG.md`.
4. Run `npm run check` — must pass clean.
5. Hand off to human for review, commit, tag, and GitHub Release publish.

## What This Package Does Not Own

- Component structure or composition → belongs in `@phcdevworks/spectre-ui`
- Framework-specific delivery → belongs in adapter packages
- UI primitives or component anatomy → `example/` is illustrative only
- Local consumer token contracts → downstream packages consume, not redefine

## Gotchas

- `src/generated/tokens.ts` is always regenerated on `npm run build`. Any
  manual edits are immediately overwritten.
- Token values using `{path.to.token}` references are resolved at CSS-generation
  time in `src/css.ts`. They are NOT resolved in the JS runtime object.
- The `metadata.pair` field on token objects in source JSON drives automated
  contrast validation. It is stripped from the public runtime export.
- `check:classification` only fires when contract-authority files changed in the
  working tree or HEAD commit. It is a no-op when nothing contract-related changed.
