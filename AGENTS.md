# Spectre Tokens Agent Guide

This repository is maintained by PHCDevworks and contains the design-token
package of the Spectre system.

## Mission

Protect the token contract. This package defines the visual language, semantic
roles, and token contracts consumed by downstream Spectre packages and
compatible applications.

## Core Rules

1. Treat `tokens/` as the source of truth.
2. Avoid breaking token contracts without an intentional major-version change.
3. Keep generated outputs derived from source data, never hand-maintained.
4. Prefer semantic naming and reusable contracts over package-specific wording.
5. Verify token changes propagate cleanly to typed, CSS, and Tailwind outputs.
6. Accessibility matters, but semantic clarity and visual quality must also be
   preserved.
7. Do not modify locked semantic color families without explicit approval.

## Locked Color Contracts

The following semantic color families are considered optimized and protected:

- success
- warning
- danger (implemented through the `error` palette and danger semantic roles)
- CTA / primary action / brand-action (implemented through `brand` and
  `buttons.cta`)

Do not change these color families unless explicitly directed by Bradley Potts.

## Working Boundaries

- Token meaning belongs here.
- Downstream UI packages define structure and composition.
- Adapter packages translate Spectre contracts for specific frameworks and
  runtimes.
- `example/` exists to document and demonstrate token usage. It is not the
  source of truth and should not be treated as ownership of downstream UI
  primitives.

## Validation Flow

1. Update token sources.
2. Regenerate outputs with `npm run build`.
3. Run `npm run check` as the full validation gate.
4. Confirm locked color families were not changed unless explicitly approved.

## Validation Notes

- `npm run build` regenerates outputs only.
- `npm run check` runs the full validation gate: build, token structure, locked
  color, contrast, regression, and lint validation.
- Locked color changes should fail validation unless the baseline is
  intentionally updated with explicit approval.
