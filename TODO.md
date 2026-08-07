# Spectre Tokens Execution Todo

Phases 1 through 10 are complete — see [ROADMAP.md](ROADMAP.md) for the full
delivery history and [CHANGELOG.md](CHANGELOG.md) for release-by-release
detail.

## Phase 11: Independent Footer Semantic Contract

Requested downstream through `spectre-ui` on 2026-08-07. A production child
theme exposed that Footer currently aliases Nav's background, text, and border
roles, forcing every visually distinct footer to create a parallel local
vocabulary.

### P0 — Contract

- [ ] Add an independent `component.footer` group covering `bg`, `text`,
      `heading`, `muted`, `link`, `linkHover`, `border`, `divider`, and
      `chipBg` in default and dark modes. Defaults may reference existing
      neutral/nav values, but the semantic paths must remain independent.
- [ ] Add contrast-pair metadata for every footer foreground/background pair.
- [ ] Do not copy consumer brand colors into global tokens and do not alter
      protected success/warning/danger/CTA families.

### P1 — Generated Contract and Validation

- [ ] Update public types, CSS-variable generation, the contract manifest, and
      exhaustive CSS/DTCG parity coverage for every new footer leaf.
- [ ] Run `npx vitest run tests/css-semantic-coverage.test.ts`, then the full
      `npm run check` and downstream compatibility check.

### P2 — Documentation and Release

- [ ] Document the footer namespace and migration contract.
- [ ] Add an additive changelog entry, cut the release, and leave npm
      publication as Bradley Potts's gated step.
