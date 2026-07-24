# Token Contract

## Purpose

`@phcdevworks/spectre-tokens` is the design-token package for the Spectre
system.

Its job is to define token meaning, semantic roles, mode-aware values, and
generated token outputs that downstream Spectre packages and compatible
applications can trust. The goal is a complete, UI-ready token surface so
consumers never need to fill gaps with raw palette values or local inventions.

This repository is the contract authority for token meaning.

It does not own:

- downstream UI structure or composition
- framework adapters
- local consumer reinterpretation of Spectre token meaning

Token vocabulary expansion — new semantic roles, interactive states, component
token groups — is in scope here. Component structure and adapter behavior are not.

## Source Of Truth

These rules apply in order:

1. `tokens/` is the source of truth for token data.
2. `contract.manifest.json` is the machine-readable source of truth for the
   public token contract.
3. Generated outputs must be derived from source data and must not be
   hand-maintained.
4. `README.md`, runtime exports, generated types, CSS output, Tailwind output,
   and validation scripts must all describe the same public contract.

Operationally:

- Change token values in `tokens/`.
- Change contract surface expectations in `contract.manifest.json`.
- Regenerate outputs with `npm run build`.
- Validate the full contract with `npm run check`.

## What Is Public Contract

The public contract of this package includes:

- the runtime token object exported from the package root
- the named root exports from `src/index.ts`
- the generated TypeScript contract in `dist/index.d.ts`
- the generated CSS entry point at `@phcdevworks/spectre-tokens/index.css`
- the generated Tailwind theme and preset exports
- the public namespaces declared in `contract.manifest.json`
- the documented contract described in `README.md`

The public contract does not include:

- source-only wrapper records such as `{ value, metadata }`
- implementation details of generation scripts
- example pages in `example/`
- internal helper behavior that is not exported

## Public Stable Namespaces

The current public top-level namespaces are:

- `colors`
- `space`
- `layout`
- `radii`
- `typography`
- `font`
- `shadows`
- `breakpoints`
- `zIndex`
- `transitions`
- `animations`
- `opacity`
- `aspectRatios`
- `icons`
- `border`
- `accessibility`
- `buttons`
- `forms`
- `link`
- `surface`
- `text`
- `component`
- `modes`

These namespaces are treated as public and stable unless intentionally changed
through the contract process described in this document.

## Protected Semantic Groups

The following semantic groups are protected and must not change without explicit
approval:

- `success`
- `warning`
- `danger` semantic roles backed by the `error` palette
- CTA / primary action / brand-action semantics backed by `brand` and
  `buttons.cta`

Repository guidance currently treats these groups as optimized and protected.
This document formalizes that rule.

## Runtime And Output Expectations

This package currently guarantees these public output surfaces:

- JavaScript runtime tokens
- named exports for `tokens`, `tailwindTheme`, `tailwindPreset`, and
  `generateCssVariables`
- TypeScript contract exports including `SpectreTokens`, `TailwindTheme`,
  `SpectreModeTokens`, and `SpectreModeName`
- CSS variables in `dist/index.css`
- Tailwind theme output derived from the token contract
- W3C DTCG design-tool export in `dist/tokens.dtcg.json` for Figma/Tokens Studio sync

All of those outputs must remain aligned with `contract.manifest.json`.

Validation is expected to fail fast on:

- token overwrite across files in `tokens/`
- undocumented namespaces
- output drift across JS, CSS, and Tailwind
- README mismatch with contract authority
- stale `dist` artifacts

## Semantic Tokens Vs Raw Palette Tokens

Use semantic tokens as the default interface for downstream UI:

- `surface`
- `text`
- `component`
- `buttons`
- `forms`
- `link`
- `modes`
- `typography.heading`, `typography.body`

Use raw palette tokens from `colors` only when consumers need fixed color access
and are intentionally opting out of semantic abstraction. The same rule applies
to `typography.scale`: prefer `typography.heading.{h1..h6}` and `typography.body`
for document/UI text roles, and reach for a raw `typography.scale` step only
when a consumer needs a font size independent of any heading/body meaning.

Rules:

- Semantic tokens should express meaning, not package-specific implementation.
- Raw palette tokens may remain public, but they are not the preferred contract
  for theme-aware UI behavior.
- New downstream-facing token work should prefer semantic naming over direct
  palette references when the value represents UI meaning.
- `typography.heading.{h1..h6}` and `typography.body` are each a complete role
  object (`fontFamily`, `fontSize`, `lineHeight`, `fontWeight`,
  `letterSpacing`) expressed as `{typography.scale.*}` /
  `{typography.families.*}` references, never bare scale-step or family-name
  strings — every field must independently resolve for runtime, DTCG, and CSS
  consumers alike. `npm run check:typography-refs` enforces this.

## Modes And Themes

This package currently exposes mode-aware semantic values under `modes`.

Current behavior:

- `modes.default` and `modes.dark` are part of the public contract
- semantic tokens are expected to map cleanly across modes
- consumers should prefer semantic mode-aware tokens rather than branching on
  palette values manually

Rules:

- Adding a new mode is additive only if it does not break existing mode shape or
  existing consumer assumptions
- changing the structure of `modes.default` or `modes.dark` is
  contract-impacting
- removing a mode or renaming a mode is breaking

Assumption:

- The current stable mode names are `default` and `dark` because those are the
  names exported and validated today

## Change Types

Every contract-affecting change must be classified in `CHANGELOG.md` using one
of these labels:

- `additive`
- `semantic change`
- `breaking`

The required changelog prefix is:

`Contract change type:`

### Additive

Use `additive` when the change expands the contract without invalidating
existing consumer usage.

Examples:

- adding a new token namespace without changing existing ones
- adding a new token inside an existing family while preserving current names
  and meanings
- adding a new mode-aware semantic alias while preserving current paths
- adding new CSS variables or Tailwind mappings without changing existing ones

### Semantic Change

Use `semantic change` when the path stays the same but the meaning, expectation,
or consumer interpretation changes in a meaningful way.

Examples:

- materially changing the intended semantic role of an existing token
- changing a token so downstream UI meaning shifts even if the path is stable
- changing protected semantic behavior with explicit approval
- changing mode behavior in a way that affects design intent but not the path

### Breaking

Use `breaking` when existing consumers may need code changes, migration work, or
contract updates.

Examples:

- renaming a public token path
- removing a public token
- removing a namespace
- changing exported root API shape
- changing mode names
- reintroducing banned namespace shapes such as `borders`

## Additive, Non-Breaking, And Breaking Rules

For this repository, "non-breaking" means one of two things:

- purely internal changes that do not alter the public contract
- additive changes that preserve all existing consumer paths and meanings

In practice:

- internal refactors with no public surface change are non-breaking
- additive public token additions are usually non-breaking and should be
  classified as `additive`
- semantic contract shifts are not breaking by path, but still require explicit
  classification as `semantic change`
- removals and renames are breaking

## Rename And Removal Policy

Public token renames and removals are breaking by default.

Rules:

- Do not rename public token paths in minor or patch releases.
- Do not remove public token paths in minor or patch releases.
- Do not remove public namespaces without a major-version decision.
- If a rename or removal is necessary, stage it through deprecation first when
  feasible.

## Deprecation Policy

### Lifecycle

Every token follows one of three states:

- **active** — the token is part of the stable public contract with no planned
  removal
- **deprecated** — the token is marked for future removal; it remains in the
  public export but consumers should migrate away from it
- **removed** — the token has been eliminated in a major release; its path is
  no longer part of the public contract

### Marking A Token Deprecated

To deprecate a token, add a `deprecated` object to its `metadata` block in the
source JSON:

```json
"someToken": {
  "value": "...",
  "metadata": {
    "deprecated": {
      "since": "2.x.0",
      "replacedBy": "new.token.path",
      "removeIn": "3.0.0"
    }
  }
}
```

Fields:

- `since` — the version when the deprecation was declared (required)
- `replacedBy` — the recommended replacement path, if one exists (optional)
- `removeIn` — the planned removal version (optional; sets a hard deadline for
  the `check:deprecation` gate)

`check:deprecation` will print a `[DEPRECATED]` warning for every token that
carries this marker, and will fail the check gate if the current package version
has reached or passed `removeIn`.

### Migration Window

- Deprecated tokens must remain in the public export for at least one minor
  release cycle before removal.
- Removal requires a major version bump and a `Contract change type: breaking`
  classification in `CHANGELOG.md`.
- When a `replacedBy` path is declared, the replacement must be stable before
  the deprecated token is removed.

### Deprecation Notice Format For CHANGELOG.md

Add a `### Deprecated` subsection under the affected version entry:

```markdown
### Deprecated

- `namespace.token.path` — deprecated in favor of `new.token.path`.
  Will be removed in vX.0.0.
```

If there is no direct replacement, omit the "in favor of" clause and document
the reason instead.

### Practical Rules

- Prefer additive aliasing before removal when the shape allows it.
- Keep deprecated paths working until the planned breaking release.
- Do not mark a token deprecated and remove it in the same release.

## Versioning Rules

This package follows SemVer for public token contract changes.

Guidance:

- Patch: internal fixes, validation improvements, doc clarifications, or
  generation fixes that do not change the public contract
- Minor: additive public token changes that preserve existing paths and
  semantics for current consumers
- Major: breaking public contract changes such as removals, renames, namespace
  changes, mode-name changes, or intentionally incompatible semantic contract
  shifts

If a change is hard to classify:

- default to the safer downstream interpretation
- document the assumption in the pull request and changelog

## Generated Output Rules

Generated outputs are part of the trust model for this repository.

Rules:

- `dist/` artifacts must stay in sync with source changes
- generated runtime tokens must stay aligned with generated TypeScript types
- CSS variables must stay aligned with runtime token meaning
- Tailwind theme output must stay aligned with runtime token meaning
- generated outputs must not expose internal source wrappers as public runtime
  contract

## DTCG Design-Tool Export

`dist/tokens.dtcg.json` is generated by `scripts/build-dtcg.ts` in the [W3C
Design Tokens Community Group format](https://design-tokens.github.io/community-group/format/).
Every leaf is a `{ $value, $type }` object (plus `$description` where the
source token has one), mirroring the source token tree 1:1 under the same
public namespaces. `check:dtcg` validates every `$value` against its declared
`$type`'s structural shape; `check:dtcg-roundtrip` builds the file with a real
DTCG consumer (Style Dictionary) and asserts the rendered output is correct.

### Intentional Transformations

The generator applies structural transforms so `$value` matches the shape
DTCG's `$type` system expects, rather than emitting every value as a raw CSS
string:

- **Aliases** (`{path.to.token}`): kept as the literal reference string in
  `$value` (valid DTCG alias syntax) — never resolved to a literal value. The
  `$type` is resolved from the alias *target's* actual value shape (e.g.
  `animations.fadeIn.easing` is `"{transitions.easing.out}"` typed
  `cubicBezier`, not `string`), so a consumer's alias-resolution step lands on
  a correctly-typed token.
- **`zIndex.*` / `opacity.*`**: source values are numeric strings (`"1000"`,
  `"0.38"`); the DTCG `$value` is converted to an actual JSON number to match
  `$type: "number"`.
- **`transitions.easing.*`**: CSS `cubic-bezier(x1, y1, x2, y2)` strings (and
  the `"linear"` keyword, mapped to its mathematically equivalent
  `[0, 0, 1, 1]`) are parsed into a 4-number array to match
  `$type: "cubicBezier"`.
- **`typography.families.*`**: comma-separated CSS font stacks are split into
  an array of unquoted family names to match `$type: "fontFamily"`.
- **`shadows.*`, `component.modal.shadow`, `buttons.cta.shadow`**: CSS
  `box-shadow` strings are parsed into DTCG's structured shadow shape
  (`{ color, offsetX, offsetY, blur, spread }`, or an array of these for
  multi-layer shadows) to match `$type: "shadow"`. This transform is
  path-scoped, not shape-detected, so composite alpha-colors that happen to
  contain a `/ <alpha>` suffix (e.g. `surface.overlay`, `buttons.*.focusRing`)
  are never mistaken for a shadow and stay `$type: "color"`.
- **`surface.hero`**: CSS `linear-gradient(<angle>, <color> <pos>%, ...)`
  strings are parsed into DTCG's `gradient` `$type` — an array of
  `{ color, position }` stops, with `position` normalized from a CSS
  percentage to a 0–1 number — per the [DTCG Format Module's gradient
  type](https://www.designtokens.org/tr/drafts/format/#gradient) (stable as
  of the 2025.10 draft). Each stop's `color` keeps the literal `{path}` alias
  reference where the source uses one, consistent with every other composite
  type here.

### Unsupported Source Shapes

- **`shadows.none`** (and any other single-keyword shadow-family value with no
  parseable offset/blur/spread/color layers) has no structural DTCG shadow
  representation and is left as `$type: "string"` rather than forced into a
  shadow shape it doesn't have.
- **Gradient angle/direction**: the DTCG `gradient` `$type` represents color
  stops only — it has no field for CSS gradient geometry (angle, shape,
  repeating). `surface.hero`'s `135deg` direction is therefore dropped when
  converting to DTCG; a downstream consumer reconstructing CSS from the DTCG
  value must supply its own direction (Spectre's gradients are always
  `135deg`, documented per-token via `$description`, so a consumer can hardcode
  it or fall back to `spectre-ui`'s CSS output, which retains the full
  `linear-gradient(...)` string).
- **`fontWeight`**: DTCG permits either a number or one of a small set of CSS
  keyword strings (e.g. `"bold"`); this repo only ever emits numeric weights,
  so the generator does not need to special-case keyword weights, but
  `check-dtcg-conformance.ts`'s validator accepts both shapes.

## Live Downstream Compatibility

`scripts/check-downstream-compat.ts` (`npm run check:downstream`) packs this
repo into a real npm tarball and, for each of `spectre-ui`,
`spectre-ui-astro`, and `spectre-components` present as a sibling repo on
disk, installs that tarball and runs the sibling's own `npm run check` — the
same gate that repo runs on every one of its own changes. This is the
ecosystem contract authority for compatibility: it validates against each
downstream package's real build, lint, type, and test suite, not a
repository-local guess at what they need.

Rules:

- Each sibling repo must have a clean working tree before this check runs
  against it; a dirty tree is skipped rather than risking the check's
  restore step reverting uncommitted work.
- The sibling's `package.json`/`package-lock.json` are always restored to
  their committed state afterward via `git checkout` + `npm install`, whether
  the check passes or fails.
- This check requires the sibling repos to exist as local checkouts
  alongside this one; it is not part of `npm run check` and is not expected
  to run in every environment (e.g. CI that only checks out this repo).
  Repository-local fixtures (`check:consumer`, `check:integration`) remain
  the fast, always-available compatibility signal; this check is the
  pre-release confirmation against real consumers.
- A concrete failure surfaced here — a real downstream build/type/lint/test
  break caused by a token contract change — is the trigger for a token
  proposal (new namespace, new field, a fix). This check is not a license to
  speculatively expand the token surface; only a demonstrated downstream gap
  justifies a contract change, per this package's demand-driven expansion
  policy.

## Downstream Consumer Expectations

Downstream packages may rely on this repo to provide:

- stable semantic token paths
- stable top-level namespaces
- consistent generated CSS variables
- consistent Tailwind theme values
- mode-aware semantic tokens under `modes`

Downstream packages should not:

- redefine Spectre token meaning locally when a public semantic token already
  exists
- treat `example/` as a public contract surface
- depend on source-only generation wrappers
- assume undocumented token paths are stable

## Integration Constraints

These rules apply when this package is used alongside `spectre-ui` or any other
downstream consumer. They are part of the public contract.

### CSS Variable Namespace

All CSS custom properties generated by this package use the `--sp-` prefix.

Rules:

- Consumers must not define their own `--sp-*` variables in the same stylesheet
  scope. Doing so risks silently overriding or being overridden by Spectre token
  values.
- If a consumer needs to extend the variable set, use a distinct prefix.
- The dark-mode override block targets `[data-spectre-theme="dark"]`. Consumers
  must not apply this attribute to elements that are not intended to receive the
  full Spectre dark token set.

### Tailwind Preset Composition

The exported `tailwindPreset` extends the Tailwind color scale with the
following top-level color namespaces: `brand`, `neutral`, `success`, `warning`,
`error`, `info`, `black`, and `white`.

Rules:

- Consumers that extend `colors` in their own Tailwind config alongside this
  preset may shadow or be shadowed by these namespaces. Test for collisions
  before shipping.
- The preset is designed for use via the `presets` array, not via manual
  `theme.extend` merging. Using it outside `presets` is unsupported and may
  produce unexpected merge behavior.
- Do not override `brand`, `neutral`, `success`, `warning`, or `error` in a
  consumer config that also uses this preset. Those namespaces back protected
  semantic groups.

### Semantic Token Meaning

Rules:

- Consumers must not locally reinterpret the meaning of a public semantic token.
  If `surface.card` is consumed, it must be used as a card background — not
  repurposed as a different surface role.
- If an existing semantic token does not fit the consumer use case, request a
  new semantic token through the normal additive process rather than redefining
  the existing one locally.
- Mode-aware tokens under `modes.default` and `modes.dark` must not be mixed
  with hardcoded palette values in the same component unless the consumer is
  intentionally opting out of semantic abstraction for that element.

### Token Path Stability Expectations

- Consumers may depend on all paths listed in `contract.manifest.json` as
  stable across minor and patch releases.
- Paths not listed in the manifest are internal and may change without notice.
- Deprecated token paths remain stable until their declared `removeIn` version.

## Review Requirements For Contract-Impacting Changes

Before a contract-impacting change merges:

1. Update token source data in `tokens/` when the change is token-driven.
2. Update `contract.manifest.json` if public namespaces, required outputs, or
   protected semantic rules change.
3. Regenerate outputs with `npm run build`.
4. Run `npm run check`.
5. Confirm protected semantic groups were not changed without explicit approval.
6. Update `README.md` and this document if operator guidance changed.
7. Add a changelog note with `Contract change type: additive`,
   `Contract change type: semantic change`, or `Contract change type: breaking`.
8. Confirm the change does not expand this repo into downstream UI or adapter
   responsibilities.

## Acceptable Changes

- adding a new semantic token that does not alter existing paths
- adding a new raw palette value while preserving current semantic contracts
- tightening validation so contract drift fails sooner
- documenting an existing public namespace that was already exported
- adding an alias path during a planned deprecation window
- adding new CSS or Tailwind coverage for an already-public token group

## Unacceptable Changes

- changing protected semantic groups without explicit approval
- renaming a public token path in a non-major release
- removing a public token path in a non-major release
- changing token meaning in a way that is undocumented and unclassified
- hand-editing generated outputs as if they were source of truth
- reintroducing `spacing` or `borders` as public contract namespaces
- moving token ownership into downstream UI structure or framework adapters

## Operating Principle

When there is tension between convenience and contract safety, choose contract
clarity and downstream trust.
