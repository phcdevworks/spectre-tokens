# ROADMAP.md

# Spectre Tokens Roadmap

This roadmap is grounded in the current repository shape and public contract of
`@phcdevworks/spectre-tokens` as it exists today.

`@phcdevworks/spectre-tokens` is the authoritative contract layer for token
meaning across the Spectre system. It owns token definitions, semantic token
contracts, modes/themes, and the generated outputs consumed by downstream
packages. Its job is not to model component structure or framework behavior. Its
job is to keep token meaning stable, enforceable, and safe to consume.

The work below is focused on strengthening determinism, contract authority,
parity validation, and downstream safety without expanding package scope.

## 1. Current Repo Assessment

### Current strengths

- The repo already treats `tokens/` as the source of truth.
- The package already generates and publishes multiple consumer-facing surfaces:
  - runtime JS
  - generated TypeScript
  - CSS variables
  - Tailwind exports
- Validation is already a first-class concern and is expected to run through the
  main check flow.
- The roadmap direction is already correctly centered on one machine-readable
  contract anchor.
- The package is already framed as upstream authority for downstream Spectre
  packages, not as a general UI package.

### Current gaps to harden

- Token merge behavior must stay deterministic and must fail on duplicate path
  ownership.
- Public contract parity must be enforced across all published surfaces, not
  inferred loosely from generation success.
- Docs must stay executable against the declared contract, not manually trusted.
- Dist sync and contract validation must be part of the main merge path, not
  only a release concern.
- Contract-impacting changes must be classified consistently for downstream
  consumers.
- Consumer validation should prove the real supported install paths, not only
  source-level correctness.

### Missing policy, docs, or tests that would improve downstream safety

- File-targeted, maintainable contract validation built around
  `contract.manifest.json`
- Clear maintainer-facing mapping of which script/test protects which contract
  surface
- A more explicit execution order so contributors harden the contract in the
  right sequence
- More implementation-specific TODO guidance for contract-critical files

## 2. Roadmap

## P0: Contract Integrity / Must-Do

### P0.1 Contract Authority in One Place

Objective Use `contract.manifest.json` as the single machine-readable contract
source for public token namespaces, required generated outputs, and protected
semantic groups.

Why it matters This repo is the root authority for token meaning. Contract logic
should be declared once and enforced from that declaration, not reconstructed
separately from source, docs, and emitted artifacts.

Suggested deliverables

- Keep `contract.manifest.json` as the contract anchor
- Ensure contract validation reads from it directly
- Keep `README.md` and `TOKEN_CONTRACT.md` aligned to it
- Ensure the contract anchor stays inside the normal `npm run check` path

Dependency notes

- This is the first move because downstream parity work should depend on it

Risk if skipped

- Contract enforcement remains fragmented
- Drift becomes harder to detect cleanly

### P0.2 Deterministic Token Assembly

Objective Make token loading deterministic and fail hard on duplicate token-path
ownership.

Why it matters This repo cannot allow merge-order ambiguity. Silent overwrite
behavior is dangerous in a token authority package because it changes meaning
without an explicit decision.

Suggested deliverables

- Stabilize token source load order
- Fail validation on duplicate token-path ownership
- Keep errors path-based and easy to act on

Dependency notes

- Should happen immediately after contract authority is established

Risk if skipped

- Token meaning can drift silently through accidental overlap

### P0.3 Cross-Surface Contract Parity

Objective Enforce parity across runtime JS, generated TS, CSS variables, and
Tailwind outputs.

Why it matters A token contract package is only trustworthy if all public
consumption surfaces reflect the same declared meaning.

Suggested deliverables

- Validate namespace parity across all emitted surfaces
- Fail on missing or undocumented outputs
- Keep checks centered on declared public contract surfaces only

Dependency notes

- Depends on the contract manifest
- Should be complete before downstream smoke validation is treated as
  authoritative

Risk if skipped

- One consumer path can drift while others remain correct

### P0.4 Documentation as Executable Contract

Objective Keep `README.md` and `TOKEN_CONTRACT.md` aligned to the
machine-readable contract.

Why it matters For public consumers, docs are part of the package surface. They
must fail when they drift from the declared contract.

Suggested deliverables

- Validate documented namespaces and supported outputs against
  `contract.manifest.json`
- Keep validation focused on contract-facing docs, not prose styling
- Ensure doc drift fails inside the main check path

Dependency notes

- Depends on the contract manifest and public-surface decisions being settled

Risk if skipped

- Consumers follow docs that no longer match the actual contract

### P0.5 CI and Dist Enforcement

Objective Make stale generated artifacts and contract drift fail before merge.

Why it matters This repo publishes generated outputs. Dist sync and contract
checks must be part of merge discipline, not only release hygiene.

Suggested deliverables

- Keep `npm run check` as the authoritative gate
- Ensure CI runs the full contract path
- Ensure stale `dist` artifacts fail validation

Dependency notes

- Depends on the core contract checks being wired correctly

Risk if skipped

- Source and published artifacts can drift

### P0.6 Classified Contract Change Enforcement

Objective Require explicit contract change classification for contract-authority
changes.

Why it matters Downstream packages need to know whether a change is additive,
semantic, or breaking.

Suggested deliverables

- Enforce `additive`, `semantic change`, or `breaking` classification in
  changelog/release flow for contract-impacting changes
- Keep classification narrow to true contract changes

Dependency notes

- Depends on the contract boundary being defined clearly

Risk if skipped

- Downstream consumers cannot interpret upgrade impact cleanly

### P0.7 Downstream Consumer Smoke Validation

Objective Validate real consumer usage of the package across supported install
paths.

Why it matters Source correctness is not enough. The package must work the way
downstream packages actually consume it.

Suggested deliverables

- Smoke validation for runtime token import
- CSS import validation
- Tailwind preset usage validation
- Semantic token usage validation
- Mode-aware usage validation

Dependency notes

- Best added after parity validation is strong

Risk if skipped

- Packaging or usage breakage can slip through despite correct source generation

## P1: Maintainer and Consumer Clarity

### P1.1 Improve Root Doc Discoverability

Objective Make contract and planning docs easier to discover from the main
package page.

Why it matters Maintainers and public consumers should be able to find contract
rules quickly.

Suggested deliverables

- Link `TOKEN_CONTRACT.md`, `ROADMAP.md`, and `TODO.md` from `README.md`

Dependency notes

- Low dependency

Risk if skipped

- Contract governance remains harder to discover than necessary

### P1.2 Add a Maintainer Contract Summary

Objective Add a short maintainer-facing summary for contract-impacting changes.

Why it matters Maintainers should be able to see what must change when token
contract surfaces move.

Suggested deliverables

- Add a concise summary to `README.md` or `CONTRIBUTING.md`
- Focus on contract-impacting edits only

Dependency notes

- Best after P0 contract paths are stable

Risk if skipped

- Future maintainers can miss required contract updates

### P1.3 Re-Evaluate Expansion Only on Proven Demand

Objective Keep semantic expansion demand-led and token-layer appropriate.

Why it matters This repo should complete semantic contracts where needed, not
absorb UI structure or speculative growth.

Suggested deliverables

- Review proposed additions only against downstream demand
- Reject anything that belongs in UI, components, or adapters

Dependency notes

- Only after the contract layer is stable

Risk if skipped

- The repo can bloat or drift into downstream ownership

## P2: Later / Controlled Improvement

### P2.1 Improve Release-Note Clarity

Objective Make downstream impact easier to read in release notes.

Why it matters A good contract repo should communicate upgrade impact cleanly.

Suggested deliverables

- Make additive, semantic, and breaking summaries more consistent

Risk if skipped

- Consumers will need to infer impact manually

### P2.2 Keep Validation Messages Short and Actionable

Objective Review whether failure output can be simplified further.

Why it matters Contract checks should be strict without becoming noisy.

Suggested deliverables

- Keep errors path-based, short, and easy to act on

Risk if skipped

- Validation remains correct but less efficient to use

## 3. Explicitly Out of Scope

- Do not add component structure ownership here
- Do not add framework-specific behavior here
- Do not expand raw token families without proven downstream demand
- Do not move styling, component anatomy, or adapter concerns into this repo

## 4. Recommended Execution Order

1. Lock `contract.manifest.json` as the contract authority
2. Make token loading deterministic
3. Enforce JS / TS / CSS / Tailwind parity
4. Enforce docs against the machine-readable contract
5. Move contract and dist enforcement fully into CI
6. Add classified contract-change enforcement
7. Add downstream smoke validation
8. Improve maintainer and release clarity
9. Revisit expansion only if downstream demand is proven
