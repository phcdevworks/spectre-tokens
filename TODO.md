# Spectre Tokens Execution Todo

Phases 1 through 16 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release detail.

Contract additions are proactive — see `TOKEN_CONTRACT.md` "Contract
Expansion Policy." This package leads; downstream catches up through
`DOWNSTREAM_PARITY.md` and `npm run audit:parity`.

## Requested by Downstream

No open items. The 2026-10-11 `spectre-base` requests (accent text role,
leading scale, accent outline button roles, stepper tone roles) and the
token side of the accent quote (`component.quote`, an `accent` tone in every
accent rail, `text.onInverse.accent`) are in `CHANGELOG.md` under
`[Unreleased]`.

## Phase 17 — Complete HTML Element Coverage

Owner-directed by Bradley Potts (2026-10-11). The goal is for Spectre to be
an unofficial "HTML 7": every standard HTML element and styleable
pseudo-element has a token contract. The coverage map
(`element-coverage.json`), the `check:elements` gate, and the first wave of
element roles are in `CHANGELOG.md` under `[Unreleased]`. New gaps go here
as the map grows.

No open items. Every element and pseudo-element in the canonical list is
mapped; add new gaps here as the list grows.
