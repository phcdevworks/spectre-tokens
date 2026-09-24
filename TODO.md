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

  **Wave 5 — datepicker/calendar contract (evidence: dropdowns examples audit,
  2026-09-24):**

  - `component.datepicker.panel.bg` → alias `{component.dropdown.bg}`
  - `component.datepicker.panel.border` → alias `{component.dropdown.border}`
  - `component.datepicker.header.text` → month/year label; alias
    `{component.dropdown.item.text}` unless contrast demands otherwise
  - `component.datepicker.weekday.text` → Sun–Sat column-header label,
    `{colors.neutral.400}` (muted relative to day cells)
  - `component.day.default.text` → `{colors.neutral.900}`
  - `component.day.default.hover.bg` → alias `{component.dropdown.item.hover}`
  - `component.day.selected.bg` → `{colors.brand.600}`, `metadata.pair`:
    `component.day.selected.text`
  - `component.day.selected.text` → `{colors.white}`, `metadata.pair`:
    `component.day.selected.bg`
  - `component.day.today.ringColor` → alias `{component.tabs.item.focus.ringColor}`
    (reuse the one established focus/emphasis ring, don't fork a second)
  - `component.day.outsideMonth.text` → `{colors.neutral.300}`
  - `component.day.disabled.text` → alias `{component.dropdown.item.disabled}`
    once Wave 4 lands that path
  - Weekend-specific styling, range-selection (start/end/in-range) fills, and
    the actual calendar-grid layout/keyboard nav are downstream anatomy — this
    wave only owns the color/state contract, not the grid mechanics.
  - Every `text`/`bg` pair above needs `check:contrast` (WCAG AA) in default
    and dark modes before this lands.

  **Wave 6 — long-form content/prose contract (evidence: blog example audit,
  2026-09-24):** rendered post bodies use inline elements with no current
  color contract — `component.testimonial.quoteMark` is a card-style pull
  quote, not the same surface as an inline `<blockquote>` in body copy, and
  there is no code/highlight contract at all despite `font.mono` already
  existing for the family.

  - `component.prose.blockquote.border` → the left rule color, alias
    `{component.nav.accent.neutral}` unless that reads too strong at 1-2px
  - `component.prose.blockquote.text` → `{colors.neutral.600}` (muted vs. body
    text, matches typical blockquote emphasis)
  - `component.prose.code.bg` / `component.prose.code.text` → inline `<code>`
    chip; alias `{surface.subtle}` for `bg` (already-shipped recessed
    background, one step below `surface.page` — do not fork a raw
    `{colors.neutral.100}` value) and `{colors.neutral.900}` for `text`,
    `metadata.pair` each other
  - `component.prose.codeBlock.bg` / `.text` / `.border` → fenced code block;
    reuse `component.prose.code.bg`/`.text` unless a real contrast gap shows
    up at block scale
  - `component.prose.mark.bg` / `.text` → `<mark>` highlighted text; alias
    `{colors.warning.100}` / `{colors.warning.900}` rather than forking a new
    highlight color, since warning is the closest existing "attention" pair
  - `component.prose.hr` → alias `{surface.divider}`, do not fork
  - Definition lists, abbreviations, citations, del/ins, sup/sub carry no
    color of their own — they inherit body text color and need no new token
  - Every new `text`/`bg` pair needs `check:contrast` (WCAG AA) in default and
    dark modes before this lands.

  **Wave 7 — external-auth button contract (evidence: modal examples audit,
  2026-09-24):** authentication actions need a stable visual treatment without
  recording external identities or importing externally controlled brand
  palettes into the Spectre contract.

  - `component.externalAuthButton.bg` / `.text` / `.border` / `.hoverBg` /
    `.activeBg` / `.disabledBg` / `.disabledText` / `.focusRing` — a neutral,
    mode-aware treatment built from existing Spectre semantic values.
  - Provider identity and logo artwork remain downstream assets; provider names
    and externally mandated brand colors must not appear in this repository's
    token paths, tracked files, metadata, or release notes.
  - Add new visual roles only when implementation proves the neutral contract
    insufficient; do not front-load identity-specific variants.
  - Every `bg`/`text` pair needs `check:contrast` (WCAG AA) in default and dark
    modes before this lands.

  **Confirmed reuse / no new token family:**

  - `component.modal` audited directly (2026-09-24): existing `bg`, `shadow`,
    `border`, `overlay`, and `accent` fields already cover header/body/footer
    regions, backdrop, and the header/footer divider (aliases
    `component.modal.border`); title text and the close-button icon alias
    `text.onSurface` / `component.modal.accent.neutral`. No new fields needed.
  - Button groups and close buttons compose the existing button and icon
    contracts.
  - Scrollspy reuses `component.nav` active-link roles; collapse behavior reuses
    accordion disclosure styling and shared transitions.
  - Floating-label positioning, dropdown direction, sticky/fixed placement,
    grid/masonry behavior, and RTL mechanics are downstream anatomy/layout.
  - Framework starters and integrations do not create token requirements.
  - Album, pricing (including the featured-plan treatment, already covered by
    the existing `component.pricingCard.featured*` roles), product, cover,
    carousel (evidence for Wave 2's `component.carousel`), dashboard (evidence
    for Wave 2's `component.table`), sign-in, sticky-footer, and navbar
    container/collapse/alignment variants were individually audited
    2026-09-24 and compose existing layout, surface, text, nav, card, button,
    form, badge, and typography contracts with no further gap found.
  - Checkout's radio-button-styled payment/shipping option cards are a
    candidate `component.choiceCard` (selected-state border/bg on a card used
    as a radio target) — flagged, not yet queued as its own wave, since it
    likely composes `component.card` + `surface.selected` + an accent border;
    confirm once `spectre-ui` actually builds a checkout-style form.
  - Headers, navbar placement variants, and feature sections compose existing
    layout, surface, text, nav, card, button, form, and typography contracts.
    Open a new token request only if implementation demonstrates a semantic
    gap or local raw-value workaround.
  - Heroes/jumbotrons: use `surface.hero` for the gradient hero-section
    background and `surface.subtle` for the faded/placeholder variant (see
    Wave 0) — `surface.inverse` remains correct only for a plain solid-dark
    section that isn't the gradient-hero pattern. No new token needed.

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
