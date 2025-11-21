# Spectre Tokens

**Spectre Tokens** is the foundational design layer of the **Spectre Suite** — a token-driven design system that powers consistent styling across all Spectre projects.

It defines Spectre's visual identity through design tokens (colors, typography, spacing, radii, shadows) consumed by **Spectre UI**, **Spectre Blocks** (WordPress), **Spectre Astro**, **Spectre 11ty**, and future Spectre tools.

> One token system. Many frameworks. Full consistency.

---

## Overview

Spectre Tokens provides a centralized source of truth for design decisions across the entire Spectre ecosystem. Whether you're building WordPress blocks, static sites with Astro or 11ty, or future Spectre integrations, Spectre Tokens ensures your design language remains consistent and maintainable.

## Features

- **Token-Driven Design**: Centralized design tokens for colors, typography, spacing, and more
- **Cross-Platform**: Powers styling across WordPress, Astro, 11ty, and beyond
- **Multiple Formats**: Export tokens as CSS variables, JSON, JavaScript, and more
- **Type-Safe**: TypeScript definitions for all design tokens
- **Themeable**: Easy customization and theming support

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Usage

Import Spectre Tokens into your project:

```javascript
import tokens from '@phcdevworks/spectre-tokens';
```

Or use CSS variables directly:

```css
@import '@phcdevworks/spectre-tokens/css/tokens.css';

.my-component {
  color: var(--spectre-color-primary);
  padding: var(--spectre-spacing-4);
  border-radius: var(--spectre-radius-md);
}
```

## Part of the Spectre Suite

- **Spectre Tokens**: Design token foundation (this package)
- **Spectre UI**: Core styling layer
- **Spectre Blocks**: WordPress block library
- **Spectre Astro**: Astro integration
- **Spectre 11ty**: Eleventy integration

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
