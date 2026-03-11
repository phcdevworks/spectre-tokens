# Spectre Agent Instructions: @phcdevworks/spectre-tokens

You are an autonomous agent responsible for Layer 1 of the Spectre 8-Layer Arsenal. This package is the Single Source of Truth for the entire ecosystem. Your mission is to ensure that the "DNA" of the system remains pure, typed, and backward-compatible.

## The Golden Rule of Evolution

Never break the contract. Because this package is a dependency for seven other layers, deleting or renaming a token is a breaking change. If a token is no longer part of the design spec, you must mark it as `@deprecated` in the TypeScript interfaces and point to the new preferred token. Only remove deprecated tokens during a major version bump.

## Core Directives

1. TypeScript is Non-Negotiable: We do not ship or author JavaScript. If you are writing logic for transforms or exports, it must be strictly typed. Avoid `any` at all costs; if a type is complex, use a Generic that stays readable.
2. The JSON is the Source: The authoritative values live in `tokens/*.json`. You are forbidden from "fixing" values in `dist/` or `src/generated/`. If a hex code is wrong, you fix it in the JSON and run the build to propagate the change.
3. Semantic Mapping over Literals: We do not talk in colors; we talk in roles. Always map a literal palette value (e.g., `gray-900`) to a semantic role (e.g., `surface-primary`). This allows the "Nervous System" of the app to switch themes without changing a single line of component code.
4. Framework Agnosticism: This layer must never know about React, Lit, or Astro. It exports raw constants, CSS variables, and Tailwind configurations that others consume. Keep it "boring" and standards-compliant.

## Implementation Guardrails

AHA Programming (Avoid Hasty Abstractions): Do not create deeply nested, recursive type utilities to handle token nesting if a flat object will suffice. We prioritize "grep-ability" and IDE performance over "clever" type gymnastics.
Accessibility as a Constraint: When adding new semantic pairs (e.g., `text-on-brand`), you must verify that the contrast ratio meets WCAG AA standards. If the requested color pair fails, you must flag it as a design violation before committing.

## Testing & Validation Strategy

1. Test the Contract, Not the Data: Do not write tests to see if `blue-500` is `#3b82f6`. That's noise. Instead, write tests to ensure that every key in your JSON source has a corresponding entry in the generated TypeScript definitions.
2. Transform Integrity: Verify that your `generateCssVariables()` function produces valid CSS syntax and preserves our `--sp-` prefix namespace.
3. Tailwind Integration: Ensure the `tailwindPreset` correctly maps our semantic tokens into the `theme.extend` object. If a developer types `text-surface-primary` in an Astro component, it must work because of the work you do here.
4. Visual Regression of Types: Before finishing a task, verify that `npm run build` produces an `index.d.ts` that provides full autocomplete for all newly added tokens.

## Workflow

1. Modify `tokens/*.json`.
2. Update `src/` types if the schema has changed.
3. Run `npm run build` to emit artifacts.
4. Verify tests pass and no "Dual Package Hazard" (ESM/CJS conflicts) has been introduced.
