# 🔲 Borders & Radii

Border colors and radii tokens for the Spectre design system.

[← Back to Examples](README.md)

## Border Radii

| Token        | Value | Usage              |
| ------------ | ----- | ------------------ |
| `radii.none` | 0     | Sharp corners      |
| `radii.sm`   | 2px   | Subtle rounding    |
| `radii.md`   | 4px   | Standard rounding  |
| `radii.lg`   | 8px   | Prominent rounding |
| `radii.pill` | 999px | Fully rounded      |

### Visual Examples

```
none (0px):    ┌───────────────┐
               │               │
               └───────────────┘

sm (2px):      ╭───────────────╮
               │               │
               ╰───────────────╯

md (4px):      ╭────────────────╮
               │                │
               ╰────────────────╯

lg (8px):      ╭─────────────────╮
               │                 │
               ╰─────────────────╯

pill (999px):  ╭──────────────────╮
               │                  │
               ╰──────────────────╯
```

## Border Colors

| Token           | Hex       | Usage         |
| --------------- | --------- | ------------- |
| `borders.card`  | `#e2e8f0` | Card borders  |
| `borders.input` | `#cbd5e1` | Input borders |

## State Borders

### Focus State

```
Border: 2px solid #2563eb
Border Radius: md (4px)
Outline: 2px solid #2563eb
Outline Offset: 2px
```

### Success State

```
Border: 1px solid #16a34a
Border Radius: md (4px)
```

### Error State

```
Border: 1px solid #dc2626
Border Radius: md (4px)
```

## Common Patterns

### Cards

```
Border: 1px solid borders.card (#e2e8f0)
Border Radius: radii.lg (8px)
```

### Buttons

```
Border: none (filled buttons)
Border Radius: radii.md (4px)
```

### Secondary Buttons

```
Border: 1px solid #cbd5e1
Border Radius: radii.md (4px)
```

### Form Inputs

```
Border: 1px solid borders.input (#cbd5e1)
Border Radius: radii.md (4px)
Focus Border: 2px solid #2563eb
```

### Badges

```
Border: 1px solid (matching bg color, darker)
Border Radius: radii.pill (999px)
```

### Modals

```
Border: none
Border Radius: radii.lg (8px)
```

### Dropdowns

```
Border: 1px solid borders.card (#e2e8f0)
Border Radius: radii.md (4px)
```

## Usage Guidelines

### None (0px)

- Use for full-bleed components
- Tables and data grids
- Navigation bars edge-to-edge

### Small (2px)

- Subtle rounding on small components
- Inline badges
- Small buttons

### Medium (4px)

- Default for most UI components
- Buttons, inputs, cards
- Standard interactive elements

### Large (8px)

- Prominent cards and panels
- Feature sections
- Hero elements

### Pill (999px)

- Badges and tags
- Pills and chips
- Circular avatars (with equal width/height)

---

All border values are from `tokens/core.json`.
