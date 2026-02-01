# 🎯 Icons

Icon size tokens for consistent iconography in the Spectre design system.

[← Back to Examples](examples.md)

## Icon Sizes

| Token       | Size    | Pixels   | Usage                      |
| ----------- | ------- | -------- | -------------------------- |
| `icons.xs`  | 0.75rem | **12px** | Inline text icons, badges  |
| `icons.sm`  | 1rem    | **16px** | Small buttons, form inputs |
| `icons.md`  | 1.25rem | **20px** | Default UI icons           |
| `icons.lg`  | 1.5rem  | **24px** | Prominent UI icons         |
| `icons.xl`  | 2rem    | **32px** | Feature icons, cards       |
| `icons.2xl` | 2.5rem  | **40px** | Large feature icons        |
| `icons.3xl` | 3rem    | **48px** | Hero icons, headers        |

## Visual Scale

```
XS  (12px)  ⬛
SM  (16px)  ⬛⬛
MD  (20px)  ⬛⬛⬛
LG  (24px)  ⬛⬛⬛⬛
XL  (32px)  ⬛⬛⬛⬛⬛⬛
2XL (40px)  ⬛⬛⬛⬛⬛⬛⬛⬛
3XL (48px)  ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
```

## Usage Guidelines

### XS - 12px

**Context:** Inline with text, status indicators, badges

```
✓ Success message ✅
⚠ Warning label
🔒 Secure badge
```

**Examples:**

- Inline success/error icons
- Badge decorators
- Notification counts
- List bullets

---

### SM - 16px

**Context:** Small UI elements, form fields, compact buttons

```
[🔍 Search]  [↻ Refresh]  [⚙ Settings]
```

**Examples:**

- Search input icons
- Dropdown indicators
- Checkbox/radio decorations
- Small action buttons
- Navigation icons (mobile)

---

### MD - 20px

**Context:** Default UI icons, navigation, standard buttons

```
[❤ Like]  [💬 Comment]  [🔗 Share]
```

**Examples:**

- Toolbar icons
- Social media actions
- Form field icons
- Menu items
- Default button icons

---

### LG - 24px

**Context:** Prominent UI elements, tabs, primary actions

```
[📁 Files]  [📊 Dashboard]  [👤 Profile]
```

**Examples:**

- Tab bar icons
- Primary navigation
- Modal headers
- Card actions
- Important buttons

---

### XL - 32px

**Context:** Feature sections, cards, marketing content

```
┌───────────────────┐
│        🚀         │
│  Fast Deployment  │
└───────────────────┘
```

**Examples:**

- Feature cards
- Service highlights
- Onboarding steps
- Empty states
- Product features

---

### 2XL - 40px

**Context:** Large features, prominent sections

```
┌─────────────────────┐
│         ⭐          │
│   Premium Feature   │
│   Description...    │
└─────────────────────┘
```

**Examples:**

- Large feature sections
- Pricing tiers
- Step indicators
- Success/error pages
- Marketing highlights

---

### 3XL - 48px

**Context:** Hero sections, page headers, major features

```
┌───────────────────────────┐
│           🎨              │
│      Design System        │
│  Build faster with tokens │
└───────────────────────────┘
```

**Examples:**

- Hero section icons
- Page headers
- Empty state illustrations
- Major feature highlights
- Loading screens

---

## Icon Spacing

### Icon + Text Alignment

| Icon Size  | Text Size | Gap  | Alignment  |
| ---------- | --------- | ---- | ---------- |
| 12px (xs)  | 12px-14px | 4px  | center     |
| 16px (sm)  | 14px-16px | 6px  | center     |
| 20px (md)  | 16px      | 8px  | center     |
| 24px (lg)  | 16px-18px | 8px  | center     |
| 32px (xl)  | 20px-24px | 12px | flex-start |
| 40px (2xl) | 24px-30px | 16px | flex-start |
| 48px (3xl) | 30px-48px | 16px | flex-start |

### Touch Target Padding

For icons smaller than 44×44px, add padding to meet touch target requirements:

```
Icon 20px → Padding 12px → Touch target 44px
Icon 24px → Padding 10px → Touch target 44px
Icon 32px → Padding 6px  → Touch target 44px
```

---

## Best Practices

### Consistency

- Use the same icon size for similar actions
- Maintain visual hierarchy with size
- Match icon size to surrounding text

### Accessibility

- Ensure 44×44px minimum touch target
- Provide text labels or `aria-label` for icon-only buttons
- Use sufficient color contrast (4.5:1 minimum)

### Visual Balance

- Align icons with text baseline when inline
- Center icons in buttons and cards
- Maintain consistent stroke width across sizes

### Performance

- Use SVG for scalability
- Optimize icon file sizes
- Consider icon font or sprite sheet for many icons

---

## Common Patterns

### Button with Icon

```
Size: icons.md (20px)
Gap: 8px
Padding: 10px 20px
Height: 40px (min 44px touch target)
```

### Feature Card

```
Icon: icons.xl (32px) or icons.2xl (40px)
Background: 56px × 56px circle
Icon color: Component specific
Gap to title: 16px
```

### Navigation Item

```
Icon: icons.md (20px)
Gap to label: 8px
Touch target: 44×44px minimum
```

### Form Input

```
Icon: icons.sm (16px)
Position: 12px from edge
Input padding: 12px 12px 12px 40px
```

---

All icon size tokens are from `tokens/core.json`.
