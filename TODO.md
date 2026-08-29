# Spectre Tokens Execution Todo

Phases 1 through 11 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release
detail. A confirmed local token override in a downstream foundation reopened
contract-completeness work on 2026-08-29.

Contract additions remain evidence-gated, but evidence may come from either a
filed downstream request or a proactive audit of downstream workarounds. This
matches [AGENTS.md](AGENTS.md): the package should proactively maintain a
complete UI-ready semantic vocabulary without inventing speculative token
families.

## Phase 12 — Downstream Contract-Debt Audit

### P0 — Container Width Contract

- [ ] Resolve the active downstream request below. Decide whether the shared
      `layout.container.maxWidth` meaning should move from `72rem` to the
      demonstrated wider shell requirement (a semantic change), or whether an
      additive named wide-shell role is the safer public contract. Preserve
      existing consumers unless the semantic-change evidence justifies a
      shared default update.
- [ ] Carry the chosen contract through source tokens, manifest authority,
      runtime/types, CSS, DTCG, generated reference documentation, tests, and a
      classified `[Unreleased]` changelog entry; run `npm run check` and live
      downstream compatibility before treating the request as fulfilled.

### P1 — Proactive Semantic Completeness Audit

- [ ] Audit the four downstream design-layer repositories for direct `--sp-*`
      redeclarations, raw visual values, and comments describing temporary
      upstream workarounds. Classify each finding as a real token-vocabulary
      gap, a UI/component delivery gap, or legitimate consumer-owned geometry.
- [ ] File every confirmed token gap under `## Requested by Downstream` with
      requester, date, reason, and backlink; do not add tokens solely to make a
      scale look symmetrical.

### P2 — Planning And Regression Policy

- [ ] Align `ROADMAP.md`, `TODO.md`, and `TOKEN_CONTRACT.md` on an
      evidence-gated but proactive completeness policy so the queue does not
      incorrectly return to “downstream requests only” after Phase 12 closes.
- [ ] Evaluate a non-mutating audit check that reports downstream `--sp-*`
      redeclarations when sibling repositories are available, without making
      consumer-specific files part of this package's public contract.

## Requested by Downstream

- [ ] **Container — remove the local max-width token override.** Requested by
      `spectre-base` on 2026-08-29 because the published `72rem`
      `layout.container.maxWidth` crops its reusable multi-column archive and
      the theme currently redeclares `--sp-layout-container-max-width` to
      `80rem` as a temporary workaround. Resolving the shared contract unblocks
      removal of that prohibited local token declaration. Request evidence and
      downstream acceptance tracking:
      [spectre-base/TODO.md](../spectre-base/TODO.md#container--remove-local-max-width-token-override).
