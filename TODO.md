# Spectre Tokens Execution Todo

Phases 1 through 15 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release detail.

Contract additions are proactive — see `TOKEN_CONTRACT.md` "Contract
Expansion Policy." This package leads; downstream catches up through
`DOWNSTREAM_PARITY.md` and `npm run audit:parity`.

## Phase 16: Proactive Vocabulary Expansion (owner-directed, 2026-09-26)

Standard design-system categories Spectre does not cover yet. Each ships as
its own additive, mode-aware wave through tokens, manifest, runtime/types,
CSS, DTCG, and docs, with one line of intent in the changelog entry.

- **Data visualization palette**: categorical series colors (8+, told apart
  by lightness as well as hue), sequential and diverging ramps, plus chart
  grid, axis, and label roles, for both modes.
- **High-contrast mode**: a third `modes.highContrast` alongside `default`
  and `dark`, emitted under its own theme attribute, with AAA (7:1) text
  pairs.
- **Control sizing and density**: `sm`/`md`/`lg` control heights, inline
  padding, and icon sizes shared by buttons, inputs, and selects, plus a
  compact density.
- **Semantic elevation**: named levels (`flat`, `raised`, `overlay`,
  `modal`) that pair a shadow with its surface and z-index, instead of
  consumers combining raw shadow and z-index steps.
- **Text selection, caret, and scrollbar colors** per mode.
- **Skeleton loading** base and shimmer colors per mode.
- **`kbd`** keycap background, border, and text, in `component.prose`.

## Requested by Downstream

No open downstream requests.
