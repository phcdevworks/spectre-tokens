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

- [ ] Resolve the active downstream request below. **Decision (2026-08-29):**
      add an additive `layout.container.maxWidthWide` role (proposed `80rem`,
      matching the demonstrated downstream need) rather than moving the shared
      `72rem` default — a single fixed value with no supported wider step is
      what forced the local override in the first place, but changing the
      default itself would move every existing consumer's measure without
      their asking for it. Cap the scale at this one additional named step
      (narrow/default/wide, mirroring the existing `maxWidthProse`) unless a
      second downstream request provides evidence for more; do not make
      `maxWidth` freely overridable per-instance.
- [ ] Carry the chosen contract through source tokens, manifest authority,
      runtime/types, CSS, DTCG, generated reference documentation, tests, and a
      classified `[Unreleased]` changelog entry; run `npm run check` and live
      downstream compatibility before treating the request as fulfilled.
- [ ] Once published, `spectre-ui` needs a corresponding
      `.sp-container--max-width-wide` utility and `getContainerClasses({
      maxWidth: 'wide' })` recipe support (mirroring the existing `prose`
      variant in `src/recipes/container.ts` / `src/styles/utilities.css`), and
      `spectre-base` needs to swap its local `--sp-layout-container-max-width:
      80rem` override for the new token and drop the resolved item from its
      own `TODO.md`.

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
- [ ] **No semantic "on-dark"/inverse surface role.** Requested by
      `spectre-base` on behalf of a downstream theme integration on
      2026-08-29; `text`, `link`, `surface`, and `component` all resolve
      against a light-page assumption, and there is no paired inverse role
      for `sp-text`, plain links, `sp-badge`, or `sp-button` to opt into when
      they sit on a dark, non-`component`-owned surface (a photo-backed card,
      a brand-navy card body, a utility bar). One downstream theme hand-paints
      this five separate times — `.sp-text`/`a` forced to white inside dark
      card bodies, a translucent `sp-badge` background/border mixed by hand
      for the same cards, a translucent `sp-btn` variant mixed by hand for
      buttons on those cards, and link color repainted a third and fourth time
      for a navy utility bar and a navy footer that are not `sp-footer`'s own
      surface. Each instance is justified with a contrast measurement taken by
      hand against a hardcoded background, which is exactly the kind of
      pairing `metadata.pair` and `check:contrast` exist to guarantee instead.
      Audit whether an additive `surface.inverse` (or `*.onDark`) role across
      `text`, `link`, `surface`, and `component.badge`/`component.button`
      closes this, contrast-paired the same way existing roles are, before any
      downstream repaints a sixth surface by hand.
- [ ] **`component.card.padding` has no size scale.** Requested by
      `spectre-base` on behalf of a downstream theme integration on
      2026-08-29; `sp-card`'s `padded` state is boolean-only and resolves to
      one hardcoded value, `var(--sp-space-32)`
      (`spectre-ui/src/styles/components.css` `.sp-card--padded`) — there is
      no `component.card.padding` entry in `tokens/components.json` at all,
      unlike the sibling `layout.container.paddingInline` scale
      (`sm`/`md`/`lg`) that already exists for exactly this shape of problem.
      Add a `component.card.padding.{sm,md,lg}` scale (token-backed, not a
      raw value) so a card can opt into a smaller or larger pad than 32px
      without a consumer hand-rolling `padding` on top of the component. Keep
      the current 32px as the `md` step so no existing card silently changes
      size.
