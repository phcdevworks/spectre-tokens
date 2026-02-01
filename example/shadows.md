# ☁️ Shadows

Elevation and shadow tokens for the Spectre design system.

[← Back to Examples](README.md)

## Shadow Scale

| Token          | Value                                                                           | Usage            |
| -------------- | ------------------------------------------------------------------------------- | ---------------- |
| `shadows.none` | `none`                                                                          | Flat elements    |
| `shadows.sm`   | `0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px 0 rgba(15, 23, 42, 0.06)`         | Subtle elevation |
| `shadows.md`   | `0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)`   | Medium elevation |
| `shadows.lg`   | `0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)` | High elevation   |
| `shadows.cta`  | `0 4px 14px 0 rgba(245, 158, 11, 0.39)`                                         | CTA button glow  |

## Visual Elevation

```
Level 0 (none):  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                 ▓              ▓
                 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Level 1 (sm):    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                 ▓              ▓
                 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                  ░░░░░░░░░░░░░░

Level 2 (md):    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                 ▓              ▓
                 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                  ░░░░░░░░░░░░░░
                   ░░░░░░░░░░░░

Level 3 (lg):    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                 ▓              ▓
                 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                  ░░░░░░░░░░░░░░
                   ░░░░░░░░░░░░
                    ░░░░░░░░░░
```

## Shadow Breakdown

### Small Shadow

```
Layer 1: 0 1px 3px 0 rgba(15, 23, 42, 0.1)
Layer 2: 0 1px 2px 0 rgba(15, 23, 42, 0.06)
Blur: 3px (primary), 2px (secondary)
Opacity: 10% (primary), 6% (secondary)
```

### Medium Shadow

```
Layer 1: 0 4px 6px -1px rgba(15, 23, 42, 0.1)
Layer 2: 0 2px 4px -1px rgba(15, 23, 42, 0.06)
Blur: 6px (primary), 4px (secondary)
Offset: 4px (primary), 2px (secondary)
Opacity: 10% (primary), 6% (secondary)
```

### Large Shadow

```
Layer 1: 0 10px 15px -3px rgba(15, 23, 42, 0.1)
Layer 2: 0 4px 6px -2px rgba(15, 23, 42, 0.05)
Blur: 15px (primary), 6px (secondary)
Offset: 10px (primary), 4px (secondary)
Opacity: 10% (primary), 5% (secondary)
```

### CTA Shadow

```
Shadow: 0 4px 14px 0 rgba(245, 158, 11, 0.39)
Color: Accent (#f59e0b)
Blur: 14px
Offset: 4px
Opacity: 39%
Effect: Glowing amber halo
```

## Usage Guidelines

### None

- Flat UI elements
- Inline text and icons
- Background sections
- Navigation items (non-elevated)

### Small (sm)

- Cards on colored backgrounds
- Dropdowns and popovers
- Tooltips
- Small badges
- Subtle hover states

### Medium (md)

- Primary cards
- Modal dialogs
- Elevated panels
- Image cards
- Standard hover states

### Large (lg)

- Floating action buttons
- Sticky headers
- Drawers and side panels
- Feature cards
- Prominent interactive elements

### CTA Shadow

- Call-to-action buttons only
- High-priority actions
- Special promotional elements
- Primary conversion buttons

## Interactive States

### Card Hover

```
Default: shadows.sm
Hover: shadows.md
Transition: 200ms ease
```

### Button Hover

```
Default: none
Hover: shadows.sm
Transition: 150ms ease
```

### Dropdown

```
Resting: shadows.md
Open: shadows.lg
Transition: 200ms ease
```

## Best Practices

1. **Use sparingly** - Too many shadows create visual noise
2. **Be consistent** - Use the same shadow levels for similar components
3. **Consider dark mode** - Reduce shadow opacity in dark themes
4. **Animate transitions** - Smoothly transition between shadow levels
5. **Stack appropriately** - Higher z-index = larger shadow

---

All shadow values are from `tokens/core.json`.
