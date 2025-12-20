# Changelog

All notable changes to this project will be documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning reflects package releases published to npm.

## [Unreleased]

## [0.2.0] - 2025-12-20

### Added

- Added `layout.*` token group for semantic spacing patterns including section padding/gap, stack gap, and container padding-inline at sm/md/lg scales ([dcab10b]).
- Added `space.*` token group following an 8px grid system with values from 0 to 96px for consistent spacing across all Spectre surfaces ([dcab10b]).
- Added comprehensive documentation for Spectre design system non-negotiables including 8px grid, semantic layout tokens, and spacing guidelines ([7fa1a9a]).
- Added layout and space token documentation to README with usage examples and CSS variable outputs ([4da7f53]).

### Changed

- Revised spacing token structure and documentation for improved clarity and consistency ([4da7f53]).
- Enforced stricter validation checks for token spacing and layout properties to ensure design system integrity ([3c1fdf3]).
- **Minor version bump** reflecting new layout and space token groups that extend the design system's spacing API.

### Deprecated

- Deprecated `spacing.*` tokens in favor of `space.*` tokens for clearer semantic naming ([9ce1034]).

## [0.1.0] - 2025-12-08

### Added

- Added `font` tokens with `fontSize`, `lineHeight`, and `weight` properties for typography scale ([48bde9f]).
- Introduced `meta` text token for secondary/metadata text styling in both light and dark modes ([b5078ad]).
- Added `badge` component tokens with background, text, and border properties for status indicators ([29fad9b]).
- Extended CSS variable generation to support `badge` and `meta` text tokens ([11d50fa]).
- Added badge and meta text token validation to regression check script ([b72ae1a]).
- Integrated badge and font tokens into Tailwind theme system ([50e19ae]).

### Changed

- **Minor version bump** reflecting new semantic token groups (fonts and badges) that extend the design system API.

## [0.0.4] - 2025-12-07

### Added

- Implemented dark mode CSS variable generation with `.dark` class selector support ([22e2a02]).
- Added core token assertion script to validate token structure integrity ([a406226]).
- Added comprehensive documentation for theme modes and CSS variable usage patterns ([4e58b0b]).

### Changed

- Updated color tokens in `modes.default` for improved light mode contrast and consistency ([e7be97d]).
- Populated `modes.dark` with complete dark mode color definitions for surface, text, and component tokens ([15cc9b7]).
- Removed redundant `types` export from package.json to streamline TypeScript definitions ([2b1ea11]).

## [0.0.3] - 2025-12-06

### Added

- Introduced `surface.*` roles for page, card, input, and overlay backgrounds ([3d60721]).
- Added `text.onPage.*` and `text.onSurface.*` roles to separate typography by background context ([0fab0b3]).
- Added `component.*` semantic aliases (card/input/button) that map to the underlying text roles ([75fc18a]).
- Added `borders.*` token group for card and input border definitions ([1729c66]).
- Reserved `modes.default` and `modes.dark` structures for future theming support ([b6cfc12]).
- Added surface and typography role documentation to guide semantic token usage ([babd58e]).
- Added token regression check script to protect against breaking changes ([8b2407a]).

### Changed

- Extended `SpectreTokens` interface to include `surface`, `text`, `component`, `borders`, and `modes` properties ([7acc13b]).
- Updated documentation with prominent links to Roadmap, Contributing Guide, and Changelog ([8ae7e42]).
- Added sponsorship and funding information to README ([6398458]).
- Updated package metadata with funding links and project roadmap ([d8908aa], [f323213]).

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

[unreleased]: https://github.com/phcdevworks/spectre-tokens/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/phcdevworks/spectre-tokens/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-tokens/tree/v0.0.1
[3c1fdf3]: https://github.com/phcdevworks/spectre-tokens/commit/3c1fdf34e3f517cebafee9be3720c7fdb9372891
[9ce1034]: https://github.com/phcdevworks/spectre-tokens/commit/9ce1034de3d34198cacb2e8371993cdc6803046c
[4da7f53]: https://github.com/phcdevworks/spectre-tokens/commit/4da7f538496ab7f456b8b670909aea264eb63de3
[dcab10b]: https://github.com/phcdevworks/spectre-tokens/commit/dcab10bf65b3ad6cc614316b8782b23a7b2c3914
[7fa1a9a]: https://github.com/phcdevworks/spectre-tokens/commit/7fa1a9a9e3832704c3aab5c7fb992cc04f027cea
[50e19ae]: https://github.com/phcdevworks/spectre-tokens/commit/50e19ae49276fb8b45917ad486f2ddbe9ee61162
[b72ae1a]: https://github.com/phcdevworks/spectre-tokens/commit/b72ae1a661bba2c352a86761c5bf7409932a5d4a
[11d50fa]: https://github.com/phcdevworks/spectre-tokens/commit/11d50fa6204b91cccd745aac8aac7f8de45068a7
[29fad9b]: https://github.com/phcdevworks/spectre-tokens/commit/29fad9ba0e087efc778b4292060c1659de11fdf5
[b5078ad]: https://github.com/phcdevworks/spectre-tokens/commit/b5078adabd2ac59df35c8877ec58bc2c1a621df0
[48bde9f]: https://github.com/phcdevworks/spectre-tokens/commit/48bde9f229b8c8b92e2ed3f7786849c435679572
[2b1ea11]: https://github.com/phcdevworks/spectre-tokens/commit/2b1ea11380293a3bb800a446da7584f81b464607
[4e58b0b]: https://github.com/phcdevworks/spectre-tokens/commit/4e58b0b3937db8b0e1007cdd1a604674c3aeb4ec
[a406226]: https://github.com/phcdevworks/spectre-tokens/commit/a406226cf5f9f1b5f3fb1ebd586f2d04f7d34ed2
[22e2a02]: https://github.com/phcdevworks/spectre-tokens/commit/22e2a026a45ef724df14eaab4acb957b63c0dc09
[e7be97d]: https://github.com/phcdevworks/spectre-tokens/commit/e7be97d9ef4ee52d28c12b53f5a8467184263e09
[15cc9b7]: https://github.com/phcdevworks/spectre-tokens/commit/15cc9b74d92ee655f349e870dc0b9f11fa9fb007
[8b2407a]: https://github.com/phcdevworks/spectre-tokens/commit/8b2407a40cbd0687b049cbabe0020fd9ddbcc34c
[babd58e]: https://github.com/phcdevworks/spectre-tokens/commit/babd58ed46d642d8dd62e289bbd14e3ede170750
[b6cfc12]: https://github.com/phcdevworks/spectre-tokens/commit/b6cfc12e4966f73316599176d21f7f97a974ccb3
[7acc13b]: https://github.com/phcdevworks/spectre-tokens/commit/7acc13b74c1cb1a06e48438f01542d6b3c049869
[1729c66]: https://github.com/phcdevworks/spectre-tokens/commit/1729c66fc015933d40c40f6cd78002035ca59ebb
[75fc18a]: https://github.com/phcdevworks/spectre-tokens/commit/75fc18ae4a8751b5c5b29e76a9e53c712bf4da01
[0fab0b3]: https://github.com/phcdevworks/spectre-tokens/commit/0fab0b315d68487a7f13736250c96ce3a2b7e348
[3d60721]: https://github.com/phcdevworks/spectre-tokens/commit/3d60721108cf3827b0e551c7bf7f4604ac97518f
[6398458]: https://github.com/phcdevworks/spectre-tokens/commit/6398458e3815ce6b977ca330b326d6bc9c71fcb7
[8ae7e42]: https://github.com/phcdevworks/spectre-tokens/commit/8ae7e42cc4f6bebb62607b72a263f821f1ac140b
[f323213]: https://github.com/phcdevworks/spectre-tokens/commit/f323213bed1d2186dc0e289831cf97b5bcaf9e91
[d8908aa]: https://github.com/phcdevworks/spectre-tokens/commit/d8908aa0207ba98515eb4ee39125828a82496e1d
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
