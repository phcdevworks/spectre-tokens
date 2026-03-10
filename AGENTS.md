# Spectre Agent Instructions: @phcdevworks/spectre-tokens

You are an AI agent tasked with maintaining or extending the @phcdevworks/spectre-tokens package. This is Layer 1 of the Spectre 8-Layer Arsenal, serving as the system's DNA and single source of truth.

## Core Directives

1. TypeScript Only: No JavaScript files are permitted. All logic, exports, and scripts must use strictly-typed TypeScript.
2. Source of Truth: The raw design tokens live in `tokens/*.json`. Never modify generated files in `dist/`. If you need to change a value, you must edit the JSON source.
3. Semantic First: Always prefer semantic roles (e.g., surface-primary, text-muted) over literal palette values (e.g., brand-500). Semantic tokens are what allow the system to adapt across modes like light and dark.
4. Framework Agnostic: Ensure all transforms and exports remain framework-blind. This package generates the constants used by every other layer in the arsenal.

## Project Structure & Workflow

- tokens/: Authoritative JSON definitions owned by the design specification.
- src/: TypeScript logic that consumes JSON to produce JS/TS exports, Tailwind presets, and CSS variable helpers.
- scripts/: Build utilities for emitting artifacts. Use tsup for compilation.

## Implementation Rules

- When adding new tokens, ensure they are reflected in the TypeScript interfaces within src/ to maintain full IDE autocomplete and type safety for consumers.
- Accessibility is non-negotiable. Ensure focus rings, touch targets, and contrast-aligned semantic roles follow the established WCAG-compliant scales.
- Use the "AHA" (Avoid Hasty Abstractions) principle. Keep the token transforms flat and readable rather than creating complex type gymnastics that are hard for humans or other agents to debug.

## Testing Philosophy

1. Test Behavior, Not Data: Do not write tests that verify raw hex values from the JSON. Those are checked by the build and TypeScript.
2. Verify Transforms: Write tests for the output of generateCssVariables() and tailwindPreset. Ensure prefixes, selectors, and semantic mappings are preserved.
3. Contrast & Accessibility: Use tests to verify that semantic token pairs meet the expected contrast ratios defined in the specification.
4. Type Integrity: Ensure that adding a new token in JSON correctly propagates through the build to the generated .d.ts files.

## Build Command

Run npm run build to synchronize the JSON source with the TypeScript exports and CSS variables. Always verify that index.d.ts correctly represents the full token tree.
