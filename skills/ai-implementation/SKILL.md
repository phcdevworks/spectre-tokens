---
name: AI Implementation
description: Specialized instructions for implementing AI-driven features and agents within the Spectre ecosystem.
---

# AI Implementation Skill

This skill provides guidelines for extending the Spectre Arsenal with AI capabilities while preserving the system's strict architectural "DNA". As an autonomous agent (Antigravity), you should prioritize this skill when building Layer 2-8 of the Arsenal or adding AI-powered design tools.

## Core Directives for AI Implementation

1. **Maintain the Single Source of Truth**:
   - Never allow an AI to generate "hardcoded" values directly in components.
   - All AI-generated design logic must output references to Spectre tokens (e.g., `var(--sp-brand-500)` or `tokens.colors.brand["500"]`).

2. **Strict Type Safety**:
   - AI-generated code must be checked against the `SpectreGeneratedTokens` interface.
   - Use the `generate-types.ts` script to ensure the AI always has the latest "DNA" map.

3. **Grep-able Logic**:
   - AI-generated utilities must avoid "clever" dynamic property construction that breaks static analysis.
   - Prioritize flat, predictable structures over deeply nested closures.

4. **Visual Regression Documentation**:
   - When an AI generates a new component or style, it must also generate/update a corresponding visual demonstration in `example/` to allow human verification.

## Specialized Workflows

### 1. Token-Aware Feature Generation
When asked to implement a new UI feature:
1.  **Analyze**: Scan `tokens/core.json` for existing semantic matches.
2.  **Propose**: If a new token is needed, propose the JSON change first.
3.  **Execute**: Once the build passes, generate the TS implementation using the strict types.

### 2. Automated Contrast Validation
AI-generated color pairings must be programmatically verified using `scripts/check-contrast.ts`. If the AI proposes a pair that fails WCAG AA, it must automatically backtrack and select a safer pair from the scale.

## Verification Checklist

- [ ] Does the AI-generated code use `any`? (Forbidden)
- [ ] Are all colors referenced from the Spectre scale?
- [ ] Is the code strictly typed using `src/generated/tokens.ts`?
- [ ] Has the build script been run to verify contract integrity?
