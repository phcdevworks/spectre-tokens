# Changelog

All notable changes to this project will be documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning reflects package releases published to npm.

## [Unreleased]

## [0.0.3] - Unreleased

### Added

- Introduced `surface.*` roles for page, card, input, and overlay backgrounds.
- Added `text.onPage.*` and `text.onSurface.*` roles to separate typography by background context.
- Added `component.*` semantic aliases (card/input/button) that map to the underlying text roles.
- Reserved `modes.default` and `modes.dark` structures for future theming.

## [0.0.2] - 2025-12-04

### Changed

- Removed internal helper functions (`createCssVariableMap`, `createTailwindTheme`) from public API exports ([3c0e729]).
- Refactored TypeScript types: introduced `SpectreTokens` interface with flexible typing for JSON imports while maintaining strict `Tokens` interface for type safety ([87d7eaf]).
- Updated README with corrected API usage examples and comprehensive TypeScript type documentation ([6d5364f]).
- Updated esbuild and related dependencies to 0.27.1 ([6d5364f]).

### Fixed

- Resolved TypeScript type mismatches when importing JSON tokens ([87d7eaf]).
- Corrected CSS import path in README to `dist/index.css` ([6d5364f]).

## [0.0.1] - 2025-11-21

### Added

- CRO-focused button, form, accessibility, animation, and opacity token sets ([43cc363]).
- Semantic color scales, breakpoint definitions, z-index layers, and transition tokens ([e5d73b0]).
- Initial Spectre Tokens package scaffolding with TypeScript build pipeline, Tailwind exports, CSS generation scripts, and npm metadata ([5b5ffa3]).
- Repository boilerplate including MIT license, README, VS Code workspace, and project configuration files ([83f02b8], [e456203], [fc0363a], [b7527f8], [e719ff6]).
- Standardized README content to match the Spectre documentation baseline and highlight CRO/accessibility surfaces ([0a7c7d6], [f9468af]).
- CONTRIBUTING guidelines so token updates and build outputs stay consistent across the Spectre Suite ([f9468af]).

### Changed

- Refactored exports and imports in index.ts and package.json for better module structure ([59ed1b9]).
- Revised FUNDING.yml for Spectre support ([9234a48]).
- Removed Intelephense from VSCode extension recommendations ([e501f94]).

[unreleased]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-tokens/tree/v0.0.1
[6d5364f]: https://github.com/phcdevworks/spectre-tokens/commit/6d5364f33d679c2ff968ff2c297af5ff92f33df2
[87d7eaf]: https://github.com/phcdevworks/spectre-tokens/commit/87d7eaf8b96680e1387813527b73182a18d5bddb
[3c0e729]: https://github.com/phcdevworks/spectre-tokens/commit/3c0e729bf813e357d65017698294b3cfb10ddc3b
[59ed1b9]: https://github.com/phcdevworks/spectre-tokens/commit/59ed1b948044e8c92d700e71d6ab03a803689965
[f9468af]: https://github.com/phcdevworks/spectre-tokens/commit/f9468af4ee067ed9e615353072ec2974a7e32469
[43cc363]: https://github.com/phcdevworks/spectre-tokens/commit/43cc363499415999430540647a4ab1189661cc3e
[e5d73b0]: https://github.com/phcdevworks/spectre-tokens/commit/e5d73b0e01a073ffbcceb50ebeff494ae8c30115
[5b5ffa3]: https://github.com/phcdevworks/spectre-tokens/commit/5b5ffa3f9fa3ece55204b67c5f967e5a2403741b
[e501f94]: https://github.com/phcdevworks/spectre-tokens/commit/e501f94f268102559e9fecdbe3a0c31c31aa1142
[0a7c7d6]: https://github.com/phcdevworks/spectre-tokens/commit/0a7c7d6fe55b38ec2cbc31c984652bd1576ef0ef
[9234a48]: https://github.com/phcdevworks/spectre-tokens/commit/9234a488803e20dc6c261a4ebd1e0d37a61a97b4
[e719ff6]: https://github.com/phcdevworks/spectre-tokens/commit/e719ff65bf4bf1673429dbfc080ecf3fef2d15ba
[b7527f8]: https://github.com/phcdevworks/spectre-tokens/commit/b7527f8e01542f5a2889acfeaa9b5ffb601315b0
[fc0363a]: https://github.com/phcdevworks/spectre-tokens/commit/fc0363aa22d7d5858ac243438b58f6d2e5cdcd70
[e456203]: https://github.com/phcdevworks/spectre-tokens/commit/e456203ff1217b56ae966c4bc19bc4e2c6dd5e4e
[83f02b8]: https://github.com/phcdevworks/spectre-tokens/commit/83f02b874d137df6dd6bf5927c0716a9a66c3616
