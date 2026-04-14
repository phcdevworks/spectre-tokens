# Roadmap

## Purpose

`@phcdevworks/spectre-tokens` is the contract authority for Spectre token
meaning. The roadmap is focused on keeping this package a trusted foundation
for downstream UI packages, adapters, and compatible consumers.

The priorities below are intentionally narrow:

- protect determinism
- protect public contract integrity
- improve downstream safety
- avoid expanding this repo into UI composition or framework behavior

## Current strengths

- `tokens/` is the source of truth
- generated JS, TS, CSS, and Tailwind outputs are in place
- contract authority exists in `contract.manifest.json`
- validation fails fast for contract drift
- consumer smoke validation exists for JS, TS, CSS, and Tailwind usage
- protected semantic groups are documented and validated

## P0: Foundation

### 1. Keep contract authority authoritative

Objective:
Keep `contract.manifest.json`, generated outputs, and contract docs aligned.

Why it matters:
Downstream packages need one trustworthy contract surface.

Deliverables:

- maintain `contract.manifest.json` as the single machine-readable contract
  source
- keep `README.md` and `TOKEN_CONTRACT.md` aligned with the manifest
- keep contract checks in the main `npm run check` gate

Dependencies:

- current validation scripts

Risk if skipped:

- docs and outputs drift even when token data looks correct

### 2. Preserve deterministic token generation

Objective:
Prevent silent token overwrite or merge-order drift.

Why it matters:
Source token changes must produce stable, predictable outputs.

Deliverables:

- keep deterministic token file loading
- keep duplicate token-path ownership checks
- extend those checks only if future token file structure changes require it

Dependencies:

- `scripts/token-utils.ts`

Risk if skipped:

- source changes can silently alter the public contract

### 3. Protect downstream consumption paths

Objective:
Keep real consumer usage working for runtime tokens, CSS import, and Tailwind
integration.

Why it matters:
Internal parity is not enough if downstream consumers cannot import the package
the intended way.

Deliverables:

- keep the smoke consumer fixture current
- keep JS/TS/CSS/Tailwind import paths stable
- keep failure messages readable for consumer-facing regressions

Dependencies:

- `example/smoke-consumer`
- `scripts/check-consumer-smoke.ts`

Risk if skipped:

- package exports can remain internally consistent while breaking consumers

## P1: Next priority

### 4. Tighten contract-doc discoverability

Objective:
Make contract rules easier to find for maintainers and downstream consumers.

Why it matters:
The repo now has strong contract rules, but discoverability still depends on
reading multiple files.

Deliverables:

- link `TOKEN_CONTRACT.md`, `ROADMAP.md`, and `TODO.md` from `README.md`
- keep contributor and consumer guidance cross-referenced

Dependencies:

- existing README and contract docs

Risk if skipped:

- contract rules stay correct but harder to follow consistently

### 5. Expand tokens only for proven semantic demand

Objective:
Add only narrow, reusable semantic coverage when downstream demand is real.

Why it matters:
This repo should complete semantic contracts, not absorb component recipes.

Deliverables:

- evaluate minimal semantic additions only when repeated downstream demand is
  clear
- prefer semantic contract completion over raw token proliferation

Dependencies:

- downstream package needs
- current namespace and contract rules

Risk if skipped:

- downstream packages may locally redefine repeated semantics

## P2: Later

### 6. Improve maintainer reporting around contract changes

Objective:
Make contract-impacting changes easier to review and summarize.

Why it matters:
The repo already classifies contract changes, but review communication can still
be improved.

Deliverables:

- clearer release note summaries for additive, semantic, and breaking changes
- optional PR templates or checklist refinements focused on contract impact

Dependencies:

- existing changelog classification flow

Risk if skipped:

- contract changes stay safe but harder to review quickly

## Explicit non-goals

These do not belong on this roadmap for this repo:

- component anatomy ownership
- styling recipe ownership
- framework-specific theming behavior
- adapter-specific runtime concerns
- speculative raw token expansion without real downstream demand
