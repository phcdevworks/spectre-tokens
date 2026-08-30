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

---

## What's Next

Contract additions remain evidence-gated per `TOKEN_CONTRACT.md` "Contract
Expansion Policy" — evidence may come from a filed downstream request
(`TODO.md` "Requested by Downstream") or a proactive audit finding
(`npm run audit:downstream`). No open phase is currently planned; the next
one opens when either path surfaces a confirmed gap.

---

## Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.
