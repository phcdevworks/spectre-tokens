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

---

## What's Next

No active phase is currently open. New namespace/contract work here is
demand-driven: it opens only when `spectre-ui` (or another downstream
consumer) surfaces a concrete missing token requirement, per the
`check:downstream` policy documented in `TOKEN_CONTRACT.md`. See
[TODO.md](TODO.md) for the current work queue.

---

## Explicitly Out of Scope

- Component structure or composition — belongs in `@phcdevworks/spectre-ui`.
- Framework-specific token delivery — belongs in adapter packages.
- UI primitives or component anatomy — `example/` is illustrative only.
- Local consumer reinterpretation of Spectre token meaning.
- Anything that moves styling, component anatomy, or adapter concerns into this
  repo.
