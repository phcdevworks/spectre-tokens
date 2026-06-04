# Contributing to @phcdevworks/spectre-tokens

Thanks for helping improve Spectre. This package is maintained by PHCDevworks as
Layer 1 of the Spectre suite. It is the source of truth for the design language
consumed by the rest of the ecosystem.

## Spectre Suite Model

Spectre is organized as a strict layered system:

### Layer 1: `@phcdevworks/spectre-tokens`

- Purpose: define semantic design values and token contracts
- Scope: token JSON, transforms, typed exports, CSS variables, Tailwind theme
  exports, and validation tooling

### Layer 2: `@phcdevworks/spectre-ui`

- Purpose: turn tokens into reusable CSS, utilities, and recipes
- Scope: structure and implementation, never new design values

### Layer 3: adapters such as `@phcdevworks/spectre-ui-astro`

- Purpose: expose Spectre UI through framework-native components
- Scope: delivery for a platform, never duplicate tokens or CSS logic

The rule across the suite is simple: tokens define meaning, UI defines
structure, adapters define delivery.

## Development Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `npm run build` to regenerate outputs.
4. Run `npm run check` as the full validation gate before opening a pull
   request.

## Project Structure

- `tokens/`: canonical JSON token sources
- `contract.manifest.json`: machine-readable contract authority
- `src/`: typed transforms and public exports
- `scripts/`: generation and validation utilities
- `dist/`: generated release artifacts

## Contribution Guidelines

### Token changes

1. Make token changes in `tokens/`, not `dist/`.
2. Keep names semantic and reusable across the suite.
3. Treat deletions and renames as breaking changes unless they are part of a
   planned major release.
4. Ensure new token categories are reflected in generated TypeScript, CSS, and
   Tailwind outputs when applicable.
5. Do not modify locked `success`, `warning`, `danger`, or CTA/brand-action
   color contracts unless explicitly approved.
6. Keep `contract.manifest.json` aligned with the public token contract.
7. Classify contract-affecting changes as `additive`, `semantic change`, or
   `breaking`.

### Contract authority

`contract.manifest.json` is the single machine-readable authority for:

- public namespaces
- required output surfaces: JavaScript, CSS, and Tailwind
- protected semantic groups
- the enforced public contract surface required for release

Validation fails fast when:

- token paths are overwritten across `tokens/*.json`
- namespaces exist in outputs but are undocumented by the contract authority
- JavaScript, CSS, and Tailwind outputs drift from the declared contract
- `README.md` drifts from the declared contract
- any mismatch between `contract.manifest.json` and generated outputs or public exports is detected by `npm run check`

Treat `contract.manifest.json` as release-blocking authority, not optional documentation. If the declared contract does not match generated outputs or exports, `npm run check` must fail and the release must not proceed. Any change to the contract surface must be intentional and reviewed for versioning impact before release.

### Code and tooling

- This package uses ES modules and strict TypeScript.
- Avoid `any` and prefer explicit, readable types.
- Keep helpers composable and easy to trace.
- Do not hand-edit generated files.

### Documentation

- Update [README.md](README.md) when public token surfaces or usage patterns
  change.
- Keep wording aligned with the rest of the Spectre suite and with PHCDevworks
  ownership.
- Keep examples framed as documentation for token usage, not as canonical UI
  components owned by this package.
- Document contract changes clearly so downstream packages can stay in sync.

## Contract-Impacting Change Checklist

Use this when touching any of these files: `tokens/`, `contract.manifest.json`,
`src/index.ts`, `src/types.ts`, `src/css.ts`, `README.md`, or
`TOKEN_CONTRACT.md`.

**Every contract-impacting change must complete all of the following before
merge:**

1. Update token source data in `tokens/` if the change is token-driven.
2. Update `contract.manifest.json` if public namespaces, required outputs, or
   protected semantic groups changed.
3. Run `npm run build` to regenerate all outputs.
4. Run `npm run check` — this is the release gate and must pass clean.
5. Confirm no protected semantic group (`success`, `warning`, `danger`,
   CTA/brand-action) was changed without explicit approval from Bradley Potts.
6. Update `README.md` and `TOKEN_CONTRACT.md` if the public contract surface or
   operator guidance changed.
7. Add a classification line to the `[Unreleased]` section of `CHANGELOG.md`:
   - `Contract change type: additive`
   - `Contract change type: semantic change`
   - `Contract change type: breaking`
8. Confirm the change does not pull component structure, composition, or
   framework-specific behavior into this repo.

When in doubt about classification, default to the safer downstream
interpretation and document the assumption in the pull request.

## Pull Request Checklist

1. Keep the change focused.
2. Run `npm run build` if you changed token sources and need regenerated outputs
   locally.
3. Run `npm run check` as the final validation gate.
4. Update docs if public behavior or guidance changed.
5. Include regenerated artifacts when the release surface changed.
6. Add or update the `CHANGELOG.md` `Unreleased` note with
   `Contract change type: additive`, `Contract change type: semantic change`, or
   `Contract change type: breaking` when contract-authority files change.

## Release Hygiene

For maintainers, every package release should keep these four records in sync:

1. Update `package.json` to the release version.
2. Move the relevant notes from `CHANGELOG.md` `Unreleased` into a dated
   versioned entry for that same version, and include a short release title line
   beneath the heading.
3. Create a Git tag that exactly matches the package version, for example
   `2.1.2`.
4. Publish the GitHub Release from that same tag and use the matching changelog
   entry as the release notes.

When token meaning or public contract surfaces change, the `Unreleased` notes
must also include one classification line:

- `Contract change type: additive`
- `Contract change type: semantic change`
- `Contract change type: breaking`

If one of those four records does not change, it usually means the release
metadata path is incomplete.

## Design Tool Handoff

`dist/tokens.dtcg.json` is generated automatically by `npm run build`. It is a
W3C DTCG (Design Tokens Community Group) format export — each token has
`$value`, `$type`, and optionally `$description`. Reference tokens use
`{path.to.token}` syntax, which Tokens Studio resolves automatically.

### Connecting Tokens Studio

1. Install the [Tokens Studio](https://tokens.studio/) plugin in Figma.
2. Open the plugin and choose **Sync → File** as the storage provider, or use
   the GitHub sync option and point it at `dist/tokens.dtcg.json` in the
   repository.
3. Pull updates to apply the current token values to your Figma document.

### Keeping Figma in sync with source

- After any token change, run `npm run build` to regenerate `dist/tokens.dtcg.json`.
- Commit the updated `dist/tokens.dtcg.json` alongside the token source change.
- In Figma, trigger a pull from Tokens Studio to pick up the new values.

The file is included in the published npm package under `dist/` and is also
available directly from the repository for file-system-based sync workflows.

## Questions

Open an issue or discussion in this repository if you need direction before
making a larger change.

## Code of Conduct

By participating in this project, you agree to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.
