# Spectre Tokens Execution Todo

Phases 1 through 14 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release detail.

Contract additions remain evidence-gated — see `TOKEN_CONTRACT.md` "Contract
Expansion Policy" for the canonical statement (evidence may come from either a
filed downstream request or a proactive audit finding; this posture does not
lapse once the current audit backlog clears). Run `npm run audit:downstream` to
check for new evidence.

## Requested by Downstream

- **Bootstrap-scale component inventory expansion (requested by Bradley Potts,
  2026-09-24)**: `spectre-components`/`spectre-ui-astro` are expanding rapidly
  to cover a Bootstrap-parity component surface (library breadth, not
  Bootstrap's visual style). The Bootstrap 5.3 examples index and component
  cheatsheet were audited on 2026-09-24. This repo's slice is the semantic token
  contracts that do not exist yet and gate every layer above; component
  structure, behavior, and framework delivery remain downstream. Evidence = this
  request and audit.

  **Wave 1 — navigation contract:**

  - `component.tabs` — **next up, spec'd to leaf-path detail** (mirrors the
    `component.dropdown` shape in `tokens/components.json`):
    - `component.tabs.list.bg` → `{colors.white}` (dark: `{colors.neutral.900}`
      via `modes.json`)
    - `component.tabs.list.border` → `{colors.neutral.200}` (bottom rule under
      the tab list)
    - `component.tabs.item.text` → `{colors.neutral.600}`, `metadata.pair`:
      `component.tabs.list.bg`
    - `component.tabs.item.hover.bg` → `{colors.neutral.100}`
    - `component.tabs.item.active.text` → `{colors.neutral.900}`,
      `metadata.pair`: `component.tabs.list.bg`
    - `component.tabs.item.active.indicator` → `{colors.brand.600}` (the
      underline/accent bar under the active tab)
    - `component.tabs.item.focus.ringColor` → alias the established interactive
      focus-ring color (`{buttons.primary.focusRing}`); reuse
      `accessibility.focusRing.width` / `offset` / `style` for geometry —
      `accessibility.focusRing` is an object, not a color leaf
    - `component.tabs.item.disabled.text` → `{colors.neutral.400}`
    - `component.tabs.panel.bg` → alias `{component.tabs.list.bg}` unless a real
      visual gap shows up building the component
    - Padding/gap: check whether an existing `space.*` scale step covers tab
      item padding and inter-item gap before adding anything new — this is a
      layout-spacing question, not a color one, and `space` is already public.
    - Every `text`/`bg` pair above needs `check:contrast` (WCAG AA) to pass
      before this lands.

  **Wave 2 — core component contracts:**

  - `component.accordion` — panel background, header text, expanded/collapsed
    icon color, divider, item padding
  - `component.breadcrumb` — item text, separator color, active/current item
    text; separator glyph choice and RTL direction remain downstream
  - `component.listGroup` — item background, hover/active/selected states,
    divider, disabled text, and neutral/brand/status treatments where existing
    semantic pairs cannot express the role
  - `component.offcanvas` — panel background, backdrop color/opacity, header
    border
  - `component.carousel` — indicator dot color (active/inactive), control icon
    color, caption background/text
  - `component.table` — header background/text, row divider, striped/hover/
    selected-row backgrounds, plus neutral/brand/status row treatments that
    alias existing semantic pairs
  - `component.alert` — background/text/border/icon per neutral, brand, info,
    success, warning, and danger role; reuse existing semantic pairs and do not
    fork new color values
  - `component.pagination` — item text, active background/text, hover, disabled
    text
  - `component.stepper` — step indicator background (pending/active/done),
    connector line, label text
  - `component.popover` — background, text, muted text, border, shadow, and
    arrow color; reuse the existing `zIndex.popover`
  - `component.progress` — track background, indicator, label text, and
    neutral/brand/status indicators; striped and indeterminate animation
    mechanics remain downstream
  - `component.loadingIndicator` — default, muted, inverse, brand, and status
    colors for spinner/loading presentations; reuse `transitions`, `animations`,
    and `accessibility.reducedMotion` rather than defining component-local
    motion

  **Wave 3 — form and content gaps exposed by the examples audit:**

  - `component.switch` — track and thumb roles for unchecked, checked, hover,
    focus, and disabled states
  - `component.range` — track, filled track, thumb, focus, and disabled states
  - `component.fileInput` — control background/border/text and action-section
    background/text across default, focus, invalid, valid, and disabled states
  - `component.inputGroup` — addon background, text, border, focus adjacency,
    and disabled roles; field/button arrangement remains downstream
  - `typography.display.{1..6}` and `typography.lead` — semantic typography
    roles for display headings and lead copy, expressed as references to the
    existing typography scale/family contract rather than new raw values

  **Wave 4 — complete existing component contracts:**

  - Extend `component.dropdown` with header text, divider, disabled item text,
    and selected item text/background roles.
  - Add a neutral/default `component.toast` treatment alongside the existing
    status variants.
  - Audit `component.modal`, `component.card`, and `component.nav` against the
    examples for real semantic gaps; prefer `surface.*`, `text.*`, and
    `surface.divider` aliases where they already carry the right meaning.

  **Confirmed reuse / no new token family:**

  - Button groups and close buttons compose the existing button and icon
    contracts.
  - Scrollspy reuses `component.nav` active-link roles; collapse behavior reuses
    accordion disclosure styling and shared transitions.
  - Floating-label positioning, dropdown direction, sticky/fixed placement,
    grid/masonry behavior, and RTL mechanics are downstream anatomy/layout.
  - Framework starters and integrations do not create token requirements.
  - Headers, navbar placement variants, heroes/jumbotrons, feature sections,
    sidebars, footers, album/pricing/product/cover/blog/dashboard/sign-in page
    templates, and sticky-footers compose existing layout, surface, text, nav,
    card, button, form, and typography contracts. Open a new token request only
    if implementation demonstrates a semantic gap or local raw-value workaround.

  **Delivery requirements:**

  - Sequence the waves in order unless a downstream blocker establishes a
    different priority. Land and publish each dependency before the matching
    downstream recipe work begins.
  - For every added or renamed `tokens/*.json` field, update modes, public
    types, CSS mapping/coverage, DTCG output, contract docs, and the classified
    `[Unreleased]` changelog entry; run
    `npx vitest run tests/css-semantic-coverage.test.ts` and `npm run check`.
  - Every foreground/background pair must carry `metadata.pair` and pass
    `check:contrast` in default and dark modes.
  - Confirm before adding new tokens: `nav` (navbar variants: fixed/static/
    bottom/offcanvas), hero/jumbotron, and sidebar navigation are layout +
    existing `surface`/`text`/`nav`-role compositions, not new component
    families — verify with `spectre-ui` before opening a token request for them.
  - `success`, `warning`, `danger`, and CTA/brand-action families stay locked —
    alerts, progress indicators, loading indicators, tables, list groups, and
    any other status-driven contract above must alias those pairs, not redefine
    them, and still require the repository's human approval gate.
  - Downstream dependency tracking remains in
    [spectre-ui/TODO.md](../spectre-ui/TODO.md#requested-by-downstream).
