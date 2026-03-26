# Spectre Tokens Agent Guide

This repository is maintained by PHCDevworks and represents Layer 1 of the
Spectre suite.

## Mission

Protect the token contract. This package defines the semantic design values that
the rest of Spectre consumes.

## Core Rules

1. Treat `tokens/` as the source of truth.
2. Avoid breaking token contracts without an intentional major-version change.
3. Keep generated outputs derived from source data, never hand-maintained.
4. Prefer semantic naming and reusable contracts over package-specific wording.
5. Verify token changes propagate cleanly to typed, CSS, and Tailwind outputs.

## Working Boundaries

- Token meaning belongs here.
- UI structure belongs in `@phcdevworks/spectre-ui`.
- Framework delivery belongs in adapter packages such as
  `@phcdevworks/spectre-ui-astro`.

## Validation Flow

1. Update token sources.
2. Regenerate outputs with `npm run build`.
3. Validate with `npm run check`.
