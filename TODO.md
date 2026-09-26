# Spectre Tokens Execution Todo

Phases 1 through 15 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release detail.

Contract additions remain evidence-gated — see `TOKEN_CONTRACT.md` "Contract
Expansion Policy" for the canonical statement. Run `npm run audit:downstream`
to check for new evidence.

## Requested by Downstream

- **Emit `typography.display.*` and `typography.lead` as CSS custom
  properties (requested by `spectre-ui`, 2026-09-25)**: 4.10.0 added
  `typography.display.{1-6}` and `typography.lead` to the token source and JS
  output, but `dist/index.css` has no matching `--sp-display-*`/`--sp-lead-*`
  variables, unlike `typography.heading.*`, which emits
  `--sp-heading-h{n}-{family,size,line-height,weight,letter-spacing}`.
  `spectre-ui` cannot build a display/lead text recipe until those variables
  are published. See
  [spectre-ui/TODO.md](../spectre-ui/TODO.md#requested-by-downstream).
