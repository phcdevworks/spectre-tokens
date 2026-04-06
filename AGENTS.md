# Spectre Tokens Agent Guide

This repository is maintained by PHCDevworks and contains the design-token
package of the Spectre system.

## Mission

Protect the token contract.

This package defines the visual language, semantic roles, and token contracts
consumed by downstream Spectre packages and compatible applications.

## Core Rules

1. Treat `tokens/` as the source of truth.
2. Avoid breaking token contracts without an intentional major-version change.
3. Keep generated outputs derived from source data, never hand-maintained.
4. Prefer semantic naming and reusable contracts over package-specific wording.
5. Verify token changes propagate cleanly to runtime exports, TypeScript types,
   CSS output, and Tailwind output.
6. The documented public contract, exported runtime object, and generated
   TypeScript contract must describe the same token shape.
7. Accessibility matters, but semantic clarity and visual quality must also be
   preserved.
8. Do not modify locked semantic color families without explicit approval.
9. Keep the namespace singular as `border`; do not reintroduce `borders`.
10. Do not expand this package into downstream UI structure, composition, or
    framework-specific adapter behavior.

## Locked Color Contracts

The following semantic color families are considered optimized and protected:

- success
- warning
- danger semantic roles, backed by the `error` palette
- CTA / primary action / brand-action, backed by `brand` and `buttons.cta`

Do not change these color families unless explicitly directed by Bradley Potts.

## Working Boundaries

- Token meaning belongs here.
- Downstream UI packages define structure and composition.
- Adapter packages translate Spectre contracts for specific frameworks and
  runtimes.
- `example/` exists to document and demonstrate token usage. It is not the
  source of truth and should not be treated as ownership of downstream UI
  primitives.

## Contract Rules

- The public package API must stay aligned across:
  - `README.md`
  - `src/index.ts`
  - generated TypeScript types
  - validation scripts
  - emitted CSS and Tailwind theme exports
- If internal generation uses wrapper records such as `{ value, metadata }`,
  keep that internal unless the public contract is intentionally changed.
- If the public runtime export is flattened, the public TypeScript contract must
  also be flattened.
- Validation must fail if runtime exports and public TS types drift apart.

## Validation Flow

1. Update token sources.
2. Regenerate outputs with `npm run build`.
3. Run `npm run check` as the full validation gate.
4. Confirm locked color families were not changed unless explicitly approved.
5. Confirm the public exported token shape still matches the generated
   TypeScript contract.
6. Ensure pull requests pass repository CI.

## Validation Notes

- `npm run build` regenerates package outputs only:
  - `npm run build:ts`
  - `npm run build:css`
- `npm run check` is the full validation gate and currently runs:
  - build
  - token structure validation
  - locked color validation
  - contrast validation
  - regression validation
  - lint validation
- Pull requests must pass the repository CI workflow for `npm run build` and
  `npm run check`.
- Locked color changes should fail validation unless the baseline is
  intentionally updated with explicit approval.
- Contract-shape drift between generated types and exported runtime tokens
  should fail validation immediately.
