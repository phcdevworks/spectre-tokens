# Todo

## P0

- [x] Add machine-readable contract authority in `contract.manifest.json`
  Acceptance: public namespaces, required outputs, and protected semantic
  groups are declared in one place.

- [x] Make token source loading deterministic in `scripts/token-utils.ts`
  Acceptance: token files load in stable order and duplicate token-path
  ownership fails validation.

- [x] Enforce contract parity across runtime JS, generated TS, CSS, and
  Tailwind
  Acceptance: `npm run check` fails on output drift across public package
  surfaces.

- [x] Enforce contract docs against the machine-readable contract
  Acceptance: `README.md` and `TOKEN_CONTRACT.md` fail validation if they drift
  from the public contract.

- [x] Move `dist` sync and contract validation into the main CI gate
  Acceptance: CI runs `npm run check` and fails on stale `dist` artifacts or
  contract drift.

- [x] Add classified contract-change enforcement
  Acceptance: contract-authority changes require `Contract change type:
  additive`, `semantic change`, or `breaking` in `CHANGELOG.md`.

- [x] Add a downstream smoke consumer fixture
  Acceptance: runtime token import, CSS import, Tailwind preset usage, semantic
  token usage, and mode-aware usage are validated by `npm run check:consumer`.

## P1

- [ ] Link `TOKEN_CONTRACT.md`, `ROADMAP.md`, and `TODO.md` from `README.md`
  Acceptance: root docs are easy to discover from the main package page.

- [ ] Add a short maintainer-facing summary section to `README.md` or
  `CONTRIBUTING.md` for contract-impacting changes
  Acceptance: maintainers can quickly see what must change when token contract
  surfaces move.

- [ ] Re-evaluate semantic expansion only for proven downstream demand
  Acceptance: any proposed addition is clearly token-layer, reusable, and does
  not pull component structure into this repo.

## P2

- [ ] Improve release-note clarity for contract changes
  Acceptance: additive, semantic, and breaking changes are summarized more
  consistently for downstream consumers.

- [ ] Review whether any contract validation messages should be further
  simplified
  Acceptance: failure output stays short, path-based, and easy to act on.

## Explicitly out of scope

- [ ] Do not add component structure ownership here
  Acceptance: component anatomy and implementation concerns stay in downstream
  UI/component repos.

- [ ] Do not add framework-specific token behavior here
  Acceptance: adapters remain responsible for framework delivery.

- [ ] Do not expand raw token families without clear downstream demand
  Acceptance: semantic contract completion stays the default direction.
