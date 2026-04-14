# TODO.md

# Spectre Tokens Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to contract authority, deterministic
generation, cross-surface parity, CI enforcement, and downstream safety.

## P0: Contract Integrity / Must-Do

- Lock machine-readable contract authority in `contract.manifest.json` File
  targets:
  - `contract.manifest.json`
  - contract validation scripts under `scripts/`
  - `README.md`
  - `TOKEN_CONTRACT.md` Acceptance criteria:
  - Public namespaces, required outputs, and protected semantic groups are
    declared in one place
  - Contract validation reads from this file directly
  - `README.md` and `TOKEN_CONTRACT.md` are checked against it in the main
    validation path

- Make token source loading deterministic File targets:
  - `scripts/token-utils.ts`
  - any companion validation script under `scripts/` Acceptance criteria:
  - Token files load in stable order
  - Duplicate token-path ownership fails validation
  - Failure output is short and path-based

- Enforce contract parity across runtime JS, generated TS, CSS, and Tailwind
  File targets:
  - generation and contract-check scripts under `scripts/`
  - generated output verification paths
  - `contract.manifest.json` Acceptance criteria:
  - `npm run check` fails on output drift across public package surfaces
  - Missing or undocumented public outputs fail validation

- Enforce docs against the machine-readable contract File targets:
  - `README.md`
  - `TOKEN_CONTRACT.md`
  - doc-validation script under `scripts/`
  - `contract.manifest.json` Acceptance criteria:
  - Contract-facing docs fail validation if they drift from the declared public
    contract

- Move `dist` sync and contract validation fully into the main CI gate File
  targets:
  - CI workflow files
  - `package.json`
  - dist-sync validation scripts under `scripts/` Acceptance criteria:
  - CI runs the full `npm run check` path
  - Stale `dist` artifacts fail before merge
  - Contract drift also fails before merge

- Add classified contract-change enforcement File targets:
  - `CHANGELOG.md`
  - changelog or validation logic under `scripts/`
  - contributor docs if needed Acceptance criteria:
  - Contract-authority changes require one of:
    - `additive`
    - `semantic change`
    - `breaking`
  - Classification is enforced only for true contract-impacting changes

- Add a downstream smoke consumer fixture File targets:
  - consumer fixture files
  - consumer validation script or test
  - `package.json` check commands Acceptance criteria:
  - Runtime token import is validated
  - CSS import is validated
  - Tailwind preset usage is validated
  - Semantic token usage is validated
  - Mode-aware usage is validated
  - All of this is enforced by the normal check path

## P1: Maintainer and Consumer Clarity

- Link contract and planning docs from `README.md` File targets:
  - `README.md` Acceptance criteria:
  - `TOKEN_CONTRACT.md`, `ROADMAP.md`, and `TODO.md` are easy to find from the
    package homepage

- Add a short maintainer-facing summary for contract-impacting changes File
  targets:
  - `README.md` or `CONTRIBUTING.md` Acceptance criteria:
  - Maintainers can quickly see what must change when public token contract
    surfaces move

- Re-evaluate semantic expansion only for proven downstream demand File targets:
  - planning docs as needed
  - token proposals only when triggered by real downstream need Acceptance
    criteria:
  - Any proposed addition is clearly token-layer, reusable, and does not pull
    component structure or framework behavior into this repo

## P2: Later / Controlled Improvement

- Improve release-note clarity for contract changes File targets:
  - `CHANGELOG.md`
  - release-note conventions if documented Acceptance criteria:
  - Additive, semantic, and breaking changes are summarized more consistently
    for downstream consumers

- Review validation message clarity File targets:
  - relevant validation scripts under `scripts/` Acceptance criteria:
  - Failure output stays short, path-based, and easy to act on

## Explicitly Out of Scope

- Do not add component structure ownership here
- Do not add framework-specific token behavior here
- Do not expand raw token families without clear downstream demand

## Recommended Execution Order

1. Lock `contract.manifest.json`
2. Make token loading deterministic
3. Enforce JS / TS / CSS / Tailwind parity
4. Enforce docs against contract
5. Move contract and dist enforcement into CI
6. Add classified contract-change enforcement
7. Add downstream smoke validation
8. Improve maintainer and release clarity
9. Revisit expansion only if downstream demand proves it
