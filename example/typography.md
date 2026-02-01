# 📝 Typography

Font scales, families, and text styles for the Spectre design system.

[← Back to Examples](README.md)

## Type Scale

| Size | Token             | Font Size       | Line Height     | Weight | Usage           |
| ---- | ----------------- | --------------- | --------------- | ------ | --------------- |
| 6XL  | `typography.6xl`  | 4.5rem (72px)   | 5rem (80px)     | 900    | Hero headlines  |
| 5XL  | `typography.5xl`  | 3.75rem (60px)  | 4.25rem (68px)  | 800    | Page titles     |
| 4XL  | `typography.4xl`  | 3rem (48px)     | 3.5rem (56px)   | 800    | Section headers |
| 3XL  | `typography.3xl`  | 2.25rem (36px)  | 2.75rem (44px)  | 700    | Large headings  |
| 2XL  | `typography.2xl`  | 1.875rem (30px) | 2.375rem (38px) | 700    | Headings        |
| XL   | `typography.xl`   | 1.5rem (24px)   | 2rem (32px)     | 600    | Subheadings     |
| LG   | `typography.lg`   | 1.25rem (20px)  | 1.75rem (28px)  | 600    | Large text      |
| BASE | `typography.base` | 1rem (16px)     | 1.5rem (24px)   | 400    | Body text       |
| SM   | `typography.sm`   | 0.875rem (14px) | 1.25rem (20px)  | 400    | Small text      |
| XS   | `typography.xs`   | 0.75rem (12px)  | 1rem (16px)     | 400    | Tiny text       |

### Examples

```
6XL: The quick brown fox jumps
5XL: The quick brown fox jumps over
4XL: The quick brown fox jumps over the
3XL: The quick brown fox jumps over the lazy dog
2XL: The quick brown fox jumps over the lazy dog and runs
XL: The quick brown fox jumps over the lazy dog and runs through the forest
LG: The quick brown fox jumps over the lazy dog and runs through the forest with ease
BASE: The quick brown fox jumps over the lazy dog and runs through the forest with ease, demonstrating agility
SM: The quick brown fox jumps over the lazy dog and runs through the forest with ease, demonstrating agility and speed
XS: The quick brown fox jumps over the lazy dog and runs through the forest with ease, demonstrating agility and speed in every step
```

## Font Families

| Token               | Value                                           | Usage        |
| ------------------- | ----------------------------------------------- | ------------ |
| `font.family.sans`  | `'Inter', system-ui, -apple-system, sans-serif` | Primary font |
| `font.family.serif` | `'Playfair Display', Georgia, serif`            | Display text |
| `font.family.mono`  | `'Fira Code', 'Courier New', monospace`         | Code blocks  |

## Font Sizes

| Token            | Rem      | Pixels | Usage            |
| ---------------- | -------- | ------ | ---------------- |
| `font.size.xs`   | 0.75rem  | 12px   | Captions, labels |
| `font.size.sm`   | 0.875rem | 14px   | Small UI text    |
| `font.size.base` | 1rem     | 16px   | Body text        |
| `font.size.lg`   | 1.125rem | 18px   | Large body text  |
| `font.size.xl`   | 1.25rem  | 20px   | Subheadings      |
| `font.size.2xl`  | 1.5rem   | 24px   | Headings         |

## Font Weights

| Weight    | Value | Usage        |
| --------- | ----- | ------------ |
| Normal    | 400   | Body text    |
| Medium    | 500   | Emphasis     |
| Semibold  | 600   | Subheadings  |
| Bold      | 700   | Headings     |
| Extrabold | 800   | Large titles |
| Black     | 900   | Hero text    |

## Line Heights

| Token   | Value | Usage             |
| ------- | ----- | ----------------- |
| Tight   | 1.25  | Headlines         |
| Snug    | 1.375 | Subheadings       |
| Normal  | 1.5   | Body text         |
| Relaxed | 1.625 | Long-form content |
| Loose   | 2     | Spacious text     |

## Usage Examples

### Hero Headline

```
Font: Sans, 6XL (72px)
Weight: 900
Line Height: 80px
Color: text.onPage.default (#0f172a)
```

### Page Title

```
Font: Sans, 4XL (48px)
Weight: 800
Line Height: 56px
Color: text.onPage.default (#0f172a)
```

### Body Text

```
Font: Sans, BASE (16px)
Weight: 400
Line Height: 24px
Color: text.onPage.default (#0f172a)
```

### Caption Text

```
Font: Sans, XS (12px)
Weight: 400
Line Height: 16px
Color: text.onPage.meta (#64748b)
```

---

All typography values are from `tokens/core.json`.
