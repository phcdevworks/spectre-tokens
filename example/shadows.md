# ☁️ Shadows

Elevation and shadow tokens for the Spectre design system.

[← Back to Examples](examples.md)

## Shadow Scale

| Token          | Value                                                                           | Usage            |
| -------------- | ------------------------------------------------------------------------------- | ---------------- |
| `shadows.none` | `none`                                                                          | Flat elements    |
| `shadows.sm`   | `0 1px 2px 0 rgba(15, 23, 42, 0.06)`                                            | Subtle elevation |
| `shadows.md`   | `0 2px 6px -1px rgba(15, 23, 42, 0.08)`                                         | Medium elevation |
| `shadows.lg`   | `0 6px 16px -4px rgba(15, 23, 42, 0.12)`                                        | High elevation   |

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
Shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.06)
Blur: 2px
Opacity: 6%
```

### Medium Shadow

```
Shadow: 0 2px 6px -1px rgba(15, 23, 42, 0.08)
Blur: 6px
Offset: 2px
Opacity: 8%
```

### Large Shadow

```
Shadow: 0 6px 16px -4px rgba(15, 23, 42, 0.12)
Blur: 16px
Offset: 6px
Opacity: 12%
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
