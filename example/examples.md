# Spectre Tokens Examples

This directory contains comprehensive examples for all token categories in the Spectre design system.

## Available Examples

### 🎨 [Colors](colors.md)

Complete color palette including:

- Brand colors (50-900 scale: #eff6ff to #1e3a8a)
- Neutral colors (50-900 scale: #f8fafc to #0f172a)
- Accent colors (50-900 scale)
- Semantic colors: Success (green), Warning (amber), Error (red), Info (blue)
- Focus colors (primary, error, info)
- Surface colors (page, card, input, overlay)
- Text colors (onPage, onSurface with default, muted, subtle, meta, and **brand** variants)
- Component-specific colors (badge, card, input, button, iconBox, testimonial, pricingCard, rating)
- **Interactive state tokens** (hover, active, disabled) for core components
- Dark mode variants for all component colors

### 📝 [Typography](typography.md)

Font scales, families, and text styles:

- Type scale (xs to 6xl)
- Font families (sans, serif, mono)
- Font weights and line heights

### 📏 [Spacing](spacing.md)

Spacing scale and layout tokens:

- Space scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96 (in rem)
- Section padding: sm (1.5rem), md (2rem), lg (3rem)
- Section gap: sm (1rem), md (1.5rem), lg (2rem)
- Stack gap: sm (0.5rem), md (0.75rem), lg (1rem)
- Container padding: sm (1rem), md (1.5rem), lg (2rem)

### 🔲 [Borders & Radii](borders.md)

Border colors and radii:

- Border radii: none (0), sm (2px), md (4px), lg (8px), pill (999px)
- Border colors: card (#e2e8f0), input (#cbd5e1)
- State borders demonstrated with focus, success, and error examples

### ☁️ [Shadows](shadows.md)

Elevation and shadow tokens:

- Shadow scale: none, sm, md, lg
- Elevation demo with interactive cards
- All shadows use consistent rgba(15, 23, 42, opacity) for neutral depth

### 🔘 [Buttons](buttons.md)

Button variants with all states:

- Primary, Secondary, Ghost
- Danger, Success, CTA, Accent
- All states: default, hover, active, disabled

### 📋 [Forms](forms.md)

Form input styles and states:

- Text inputs with all states
- Textarea and Select dropdowns
- Checkboxes and Radio buttons
- Valid, invalid, and disabled states

### ⚡ [Animations & Transitions](animations.md)

Motion and animation tokens:

- Animations: fadeIn, fadeOut, slideUp, slideDown, scaleIn, bounce, shake, pulse
- Duration tokens: instant (75ms), fast (150ms), base (200ms), moderate (300ms), slow (500ms), slower (700ms)
- Easing functions: linear, in, out, inOut, spring
- Each animation includes duration, easing, and keyframe reference

### 🧩 [Components](components.md)

Component-specific design tokens:

- Badges: neutral, info, success, warning, danger (with bg and text colors)
- Cards: text and textMuted colors
- Icon boxes: bg, border, and icon colors for default, success, warning, danger states
- Testimonials: bg, border, text, authorName, authorTitle, quoteMark colors
- Pricing cards: bg, border, featured variants, badge colors, price text
- Rating: starFilled, starEmpty, text colors

### ♿ [Accessibility](accessibility.md)

Focus rings, touch targets, and WCAG compliance:

- Focus ring: width (2px), offset (2px), style (solid)
- Minimum touch target: 44px (WCAG 2.1 Level AAA)
- Minimum text size: 16px
- Opacity tokens: disabled (0.38), hover (0.92), active (0.84), focus (1.0), overlay (0.5), tooltip (0.95)
- Color contrast ratios: All text/background combinations verified for WCAG AA/AAA compliance
- Contrast examples: Primary text (19.07:1 AAA), Muted text (7.51:1 AAA), Button text (5.95:1 AA), Dark mode (18.23:1 AAA)

### 🎯 [Icons](icons.md)

Icon size tokens for consistent iconography:

- Icon sizes (xs to 3xl: 12px to 48px)
- Usage recommendations for each size
- Common use cases (buttons, features, heroes)

### 🖼️ [Aspect Ratios](aspect-ratios.md)

Consistent aspect ratio tokens for media:

- Square (1:1) - Profile images, products
- Video (16:9) - Standard video embeds
- Portrait (3:4) - Vertical content
- Landscape (4:3) - Traditional photos
- Ultrawide (21:9) - Cinematic content
- Hero (2:1) - Banner sections

## How to View

Click any link above to view the markdown documentation for each token category. For interactive HTML demos, open `index.html` in a web browser.

Each example page includes:

- Complete token tables with values
- Visual representations and examples
- Usage guidelines and best practices
- Code snippets for implementation
- Accessibility considerations

## Usage

These examples demonstrate how to use the Spectre design tokens in your projects. Each token value is displayed with:

1. All available options and values
2. Visual comparisons of variations
3. Intended use cases and contexts
4. Implementation examples
5. Responsive considerations

All examples use the exact token values from `tokens/core.json`.

## Navigation

- Browse markdown files on GitHub for easy reference
- View HTML files locally for interactive demos
- All files linked from this README for quick access
