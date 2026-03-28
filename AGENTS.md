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

## Working Boundaries

- Token meaning belongs here.
- Downstream UI packages define structure and composition.
- Adapter packages translate Spectre contracts for specific frameworks and
  runtimes.

## Validation Flow

1. Update token sources.
2. Regenerate outputs with `npm run build`.
3. Validate with `npm run check`.
