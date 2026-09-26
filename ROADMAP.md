# Spectre Tokens Roadmap

`@phcdevworks/spectre-tokens` is the authoritative contract layer for token
meaning across the Spectre system. It owns token definitions, semantic token
contracts, modes and themes, and the generated outputs consumed by downstream
packages. Its job is to keep token meaning stable, enforceable, and safe to
consume — not to model component structure or framework behavior.

This document tracks what's next. For what already shipped and why, see
[CHANGELOG.md](CHANGELOG.md) (release-by-release detail) and git history —
this file does not restate delivered work.

---

## Delivered Phases

| Phase | Summary | Shipped in |
| --- | --- | --- |
| 1 | Contract foundation — manifest authority, deterministic loading, `npm run check` gate, CI | 2.5.0 |
| 2 | Downstream integration hardening, versioning automation, DTCG design-tool sync, deprecation policy | 2.5.0–2.9.0 |
| 3 | Validation integrity — vitest, negative-path tests for critical validators | 2.9.0 |
| 4 | Token surface completion — focus/link/interactive-surface tokens, five `component.*` groups, motion/surface polish | 2.9.0–3.0.0 |
| 5 | Fixed dropped `link.*`/`surface.*` CSS variables | 3.1.0 |
| 4 P4 | Layout width scale — `layout.sidebar.width`, `layout.container.maxWidthProse` | 3.1.0 |
| 7 | Form-field component token groups (checkbox, radio, select, textarea, fieldset, label) | 3.2.0 |
| 8 | Select/textarea invalid+success state roles; CSS generation coverage fix | 3.3.0 / 3.3.1 |
| 9 | Manifest-driven CSS generation, exhaustive output parity, DTCG conformance hardening, live downstream compat check | 3.4.0–4.0.0 |
| 10 | Utility-engine token foundation — `colors.palette`, Tailwind export removal | 4.0.0 |
| 11 | Independent `component.footer` semantic contract — bg, text, heading, muted, link, linkHover, border, divider, chipBg in default/dark modes, decoupled from Nav | 4.2.0 |
| 12 | Downstream contract-debt audit — additive `layout.container.maxWidthWide` (`80rem`); proactive `--sp-*` redeclaration/workaround audit across all four downstream repos (one confirmed hit, already tracked); `audit:downstream` script added; `TOKEN_CONTRACT.md` "Contract Expansion Policy" section settles the evidence-gated-but-proactive posture so it doesn't regress to downstream-request-only | 4.7.0 |
| 13 | Card edge-accent contract, requested by `spectre-ui` — mode-aware `component.card.accent` color roles (`neutral`, `brand`, `info`, `success`, `warning`, `danger`, `cta`, the locked families included by explicit approval) plus a single standard `component.card.accent.thickness` (`0.25rem`); edge position and rendering stay downstream | 4.9.0 |
| 14 | Accent-rail tokens beyond card, owner-directed by Bradley Potts in response to client feedback — the same mode-aware `accent.*` color-role + `accent.thickness` (`0.25rem`) contract extended to `badge`, `testimonial`, `pricingCard`, `nav`, `footer`, `modal`, `toast`, `tooltip`, and `dropdown` (63 new color leaves, 9 new thickness leaves); form-control groups and `button`/`rating`/`iconBox` excluded; edge position and rendering stay downstream | 4.9.0 |
| 15 | Downstream component readiness — seven evidence-backed delivery waves covering navigation, core components, form/content roles, existing-contract completion, datepicker/day states, prose, provider-neutral external authentication, and choice-card states; every contract is mode-aware and emitted through runtime, TypeScript, CSS, and DTCG outputs | 4.10.0 |
| 16 | CSS contract coverage and parity tooling — mode-aware `forms.default.{bg,text,placeholder}` (requested by `spectre-ui`), `--sp-display-*`/`--sp-lead-*` CSS variables for the typography display/lead roles (requested by `spectre-ui`), generated `DOWNSTREAM_PARITY.md` checklist, and read-only `audit:parity` report | 4.11.0 |

---

## What's Next

**Phase 16 — Proactive Vocabulary Expansion** (owner-directed, 2026-09-26).
This package leads rather than waiting for downstream requests. Planned
waves, tracked in [TODO.md](TODO.md): data-visualization palette, high-contrast
mode, control sizing and density, semantic elevation, selection/caret/scrollbar
colors, skeleton loading, and `kbd`. Each wave is additive and mode-aware.
Downstream repos pick each one up through `npm run audit:parity`, and
`npm run audit:downstream` stays available as one more source of ideas.

---

## Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.
