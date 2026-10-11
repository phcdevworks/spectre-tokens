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
pseudo-element has a token contract, so plain semantic markup looks finished
with no local values. An element counts as covered when it has its own role
or is mapped to an existing role on purpose. Every item below is additive and
mode-aware across `default`, `dark`, and `highContrast`. Each one ships with
runtime, TypeScript, CSS, DTCG, and docs output, and must meet the contrast
gate. Text pairs need AA, and AAA in high-contrast mode; non-text pairs use
`metadata.minContrast`.

- [ ] **Element coverage map and check.** Add a machine-readable map from
      every standard HTML element and styleable pseudo-element (`::marker`,
      `::placeholder`, `::selection`, `::backdrop`, `::file-selector-button`,
      `::first-letter`) to the token roles that style it. An element with no
      visual styling of its own is marked as such. Add a
      `check:elements` step to `npm run check`. It fails if an element is
      unmapped or maps to a token path that does not exist. Generate an
      element-by-element table in `TOKEN_REFERENCE.md` from the map.
      Acceptance: every element in the HTML Living Standard's element index
      is either mapped or explicitly marked "no visual styling", and the
      check fails on a deliberately removed mapping.
- [ ] **Edit marks: `<del>`, `<ins>`, `<s>`.** `component.prose.del.{bg,text}`
      (error palette) and `component.prose.ins.{bg,text}` (success palette),
      emitted as `--sp-prose-del-*` / `--sp-prose-ins-*`. `<s>` maps to
      `del.text` without the background.
- [ ] **`<meter>`.** `component.meter` with `track` and `fill.{optimum,
      suboptimum,critical}` (success / warning / error), emitted as
      `--sp-meter-*`. Fill-on-track pairs meet 3:1. Distinct from `progress`,
      which shows completion, not a measured value.
- [ ] **List markers: `::marker`.** `component.prose.marker` (default
      `text.onPage.muted`) and `component.prose.markerAccent` (accent),
      emitted as `--sp-prose-marker*`.
- [ ] **Figure captions: `<figcaption>`.** `component.prose.figcaption.text`
      (muted), emitted as `--sp-prose-figcaption-text`. Size and leading
      reuse `font.sm` and the new `leading` scale.
- [ ] **Table caption and footer: `<caption>`, `<tfoot>`.**
      `component.table.caption.text` and `component.table.footer.{bg,text}`,
      emitted as `--sp-table-caption-*` / `--sp-table-footer-*`.
- [ ] **Description lists: `<dl>`, `<dt>`, `<dd>`.**
      `component.prose.dt.text` and `component.prose.dd.text`, emitted as
      `--sp-prose-dt-*` / `--sp-prose-dd-*`.
- [ ] **Text decoration: `<a>`, `<abbr>`, `<u>`.** A `textDecoration`
      namespace (`thickness.{thin,base,thick}`, `offset.{sm,md,lg}`) emitted
      as `--sp-text-decoration-*`, plus `link.underline` and
      `link.underlineHover` colours. `<abbr>` maps to a dotted underline in
      `text.onPage.muted`. Replaces `spectre-ui`'s use of `--sp-space-2` as an
      underline offset (`spectre-ui/src/styles/components.css`).
- [ ] **Syntax highlighting: `<pre>`, `<code>`, `<samp>`, `<var>`.**
      `component.code.syntax.{keyword,string,number,comment,function,
      variable,type,operator,punctuation,tag,attribute}` on the
      `component.prose.codeBlock.bg` background, emitted as
      `--sp-code-syntax-*`. Every colour meets AA on the code-block
      background (AAA in high-contrast mode). `comment` is held to AA, not
      exempted. `<samp>` and `<var>` map to `prose.code` with `var` in
      italics.
- [ ] **Prose flow spacing.** `layout.prose.flow.{paragraph,heading,
      headingAfter,list,listItem,blockquote,figure,hr}` on the 8px grid,
      emitted as `--sp-layout-prose-flow-*`, so long-form content gets its
      vertical rhythm from tokens. `check:structure` enforces the grid.
- [ ] **Select options: `<option>`, `<optgroup>`.** `component.select.option.
      {hoverBg,selectedBg,selectedText,disabledText}` and
      `component.select.optgroup.labelText`, emitted as `--sp-select-option-*`
      / `--sp-select-optgroup-*`. Lowest priority: browsers allow little
      styling of the native list, so these mainly serve custom listboxes and
      `appearance: base-select`.
