# Spectre Tokens Execution Todo

Phases 1 through 12 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release
detail.

Contract additions remain evidence-gated — see `TOKEN_CONTRACT.md` "Contract
Expansion Policy" for the canonical statement (evidence may come from either a
filed downstream request or a proactive audit finding; this posture does not
lapse once the current audit backlog clears). Run `npm run audit:downstream`
to check for new evidence.

## Requested by Downstream

- [ ] **Card edge-accent tokens** — Requested by `spectre-ui` on 2026-09-18
      to support optional thicker decorative rails on any card edge, with
      multiple selectable semantic colors. Define a mode-aware
      `component.card` color contract and a standard accent thickness; keep
      edge position and rendering behavior downstream. Include runtime,
      TypeScript, CSS, DTCG, manifest, documentation, and semantic-coverage
      parity. Do not add `success`, `warning`, `danger`, or CTA/brand-action
      choices without Bradley Potts's explicit approval. See
      [spectre-ui/TODO.md](../spectre-ui/TODO.md#requested-by-downstream).
