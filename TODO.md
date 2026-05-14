# TODO.md

# Spectre Tokens Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It reflects the current state of the package as of v2.5.0.

## P0: Contract Integrity — Completed

All P0 items have been delivered. The following were completed during the
v2.0.0 through v2.4.0 release cycle:

- [x] Lock machine-readable contract authority in `contract.manifest.json`
  — Public namespaces, required outputs, and protected semantic groups are
  declared in one place. Contract validation reads from it directly.
  `README.md` and `TOKEN_CONTRACT.md` are checked against it in the main
  validation path.

- [x] Make token source loading deterministic
  — Token files load in stable alphabetical order. Duplicate token-path
  ownership fails validation with a short, path-based error.

- [x] Enforce contract parity across runtime JS, generated TS, CSS, and
  Tailwind
  — `npm run check` fails on output drift across all public package surfaces.
  Missing or undocumented public outputs fail validation.

- [x] Enforce docs against the machine-readable contract
  — `README.md` and `TOKEN_CONTRACT.md` fail validation if they drift from
  the declared public contract.

- [x] Move `dist` sync and contract validation fully into the main CI gate
  — CI runs the full `npm run check` path. Stale `dist` artifacts fail before
  merge. Contract drift also fails before merge.

- [x] Add classified contract-change enforcement
  — Contract-authority changes require `additive`, `semantic change`, or
  `breaking` classification in the `Unreleased` changelog section.

- [x] Add a downstream smoke consumer fixture
  — Runtime token import, CSS import, Tailwind preset usage, semantic token
  usage, and mode-aware usage are all validated through the normal check path.

## P1: Maintainer and Consumer Clarity

- [x] Link contract and planning docs from `README.md`
  — `TOKEN_CONTRACT.md` and `ROADMAP.md` are now linked from the package
  homepage header.

- [x] Add a short maintainer-facing summary for contract-impacting changes
  — `CONTRIBUTING.md` now contains a dedicated "Contract-Impacting Change
  Checklist" section covering the required steps for any change that touches
  `tokens/`, `contract.manifest.json`, `src/`, `README.md`, or
  `TOKEN_CONTRACT.md`.

- [x] Re-evaluate semantic expansion only for proven downstream demand
  — Standing policy, not a one-time deliverable. Documented in `AGENTS.md`
  (rule 10) and `TOKEN_CONTRACT.md` (Unacceptable Changes). No implementation
  required; policy is enforced through review.

## P2: Later / Controlled Improvement

- [ ] Improve release-note clarity for contract changes
  — Make additive, semantic, and breaking summaries more consistent for
  downstream consumers.

- [ ] Review validation message clarity
  — Keep failure output short, path-based, and easy to act on.

## Explicitly Out of Scope

- Do not add component structure ownership here
- Do not add framework-specific token behavior here
- Do not expand raw token families without clear downstream demand
