# 📝 Typography

Font scales, families, and text styles for the Spectre design system.

[← Back to Examples](examples.md)

## Type Scale

| Size | Token                     | Font Size       | Line Height     | Weight | Usage           |
| ---- | ------------------------- | --------------- | --------------- | ------ | --------------- |
| 6XL  | `typography.scale.6xl`    | 4.5rem (72px)   | 5rem (80px)     | 900    | Hero headlines  |
| 5XL  | `typography.scale.5xl`    | 3.75rem (60px)  | 4.25rem (68px)  | 800    | Page titles     |
| 4XL  | `typography.scale.4xl`    | 3rem (48px)     | 3.5rem (56px)   | 800    | Section headers |
| 3XL  | `typography.scale.3xl`    | 2.25rem (36px)  | 2.75rem (44px)  | 700    | Large headings  |
| 2XL  | `typography.scale.2xl`    | 1.875rem (30px) | 2.5rem (40px)   | 700    | Headings        |
| XL   | `typography.scale.xl`     | 1.5rem (24px)   | 2.125rem (34px) | 600    | Subheadings     |
| LG   | `typography.scale.lg`     | 1.25rem (20px)  | 2rem (32px)     | 600    | Large text      |
| MD   | `typography.scale.md`     | 1rem (16px)     | 1.75rem (28px)  | 500    | Body text       |
| SM   | `typography.scale.sm`     | 0.875rem (14px) | 1.5rem (24px)   | 400    | Small text      |
| XS   | `typography.scale.xs`     | 0.75rem (12px)  | 1.25rem (20px)  | 400    | Tiny text       |

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

| Token                      | Value                                                                   | Usage        |
| -------------------------- | ----------------------------------------------------------------------- | ------------ |
| `typography.families.sans` | `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif` | Primary font |
| `typography.families.serif`| `'Times New Roman', Times, serif`                                       | Display text |
| `typography.families.mono` | `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`       | Code blocks  |

## Font Utility Scale

| Token            | Font Size       | Line Height     | Weight | Usage            |
| ---------------- | --------------- | --------------- | ------ | ---------------- |
| `font.xs`        | 0.75rem (12px)  | 1.25rem (20px)  | 400    | Captions, labels |
| `font.sm`        | 0.875rem (14px) | 1.5rem (24px)   | 400    | Small UI text    |
| `font.md`        | 1rem (16px)     | 1.75rem (28px)  | 500    | Body text        |
| `font.lg`        | 1.25rem (20px)  | 2rem (32px)     | 500    | Large body text  |
| `font.xl`        | 1.5rem (24px)   | 2.125rem (34px) | 600    | Subheadings      |
| `font.2xl`       | 1.875rem (30px) | 2.5rem (40px)   | 600    | Headings         |

## Usage Examples

### Hero Headline

```
Font: typography.families.sans
Size: typography.scale.6xl (4.5rem / 5rem / 900)
Color: text.onPage.default (#0f172a)
```

### Page Title

```
Font: typography.families.sans
Size: typography.scale.4xl (3rem / 3.5rem / 800)
Color: text.onPage.default (#0f172a)
```

### Body Text

```
Font: typography.families.sans
Size: typography.scale.md (1rem / 1.75rem / 500)
Color: text.onPage.default (#0f172a)
```

### Caption Text

```
Font: typography.families.sans
Size: typography.scale.xs (0.75rem / 1.25rem / 400)
Color: text.onPage.meta (#64748b)
```

### Brand Accent Text

```
Font: typography.families.sans
Size: typography.scale.md (1rem / 1.75rem / 600)
Color: text.onPage.brand (#2563eb)
```

---

All typography values are from `tokens/core.json`.
