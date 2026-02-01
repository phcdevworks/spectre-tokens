# ♿ Accessibility

Focus rings, touch targets, and WCAG compliance for the Spectre design system.

[← Back to Examples](examples.md)

## Focus Ring

| Property      | Value               |
| ------------- | ------------------- |
| Width         | `2px`               |
| Offset        | `2px`               |
| Style         | `solid`             |
| Color         | `#2563eb` (primary) |
| Border Radius | Matches element     |

### Visual Example

```
┌─────────────────────┐
│                     │
│   Focused Element   │
│                     │
└─────────────────────┘
  ↑ 2px offset
━━━━━━━━━━━━━━━━━━━━━━━
2px solid #2563eb
```

**Usage:** Applied to all interactive elements on keyboard focus

---

## Touch Targets

### Minimum Size

| Property       | Value  | Standard           |
| -------------- | ------ | ------------------ |
| Minimum Width  | `44px` | WCAG 2.1 Level AAA |
| Minimum Height | `44px` | WCAG 2.1 Level AAA |

### Examples

**✅ Good Touch Targets**

- Buttons: 44×44px minimum
- Links with padding: 44×44px
- Form inputs: 44px height
- Checkboxes: 20×20px with 44×44px hit area
- Icons with padding: 44×44px

**❌ Poor Touch Targets**

- Small icons: 16×16px without padding
- Inline links: Variable height < 44px
- Compact buttons: 32×32px

---

## Text Sizes

### Minimum Readable Text

| Property     | Value  | Reason               |
| ------------ | ------ | -------------------- |
| Minimum Size | `16px` | Prevents mobile zoom |
| Body Text    | `16px` | Optimal readability  |
| Small Text   | `14px` | Use sparingly        |

**Note:** Text smaller than 16px should be avoided or used only for non-critical content.

---

## Opacity Tokens

| Token              | Value  | Usage                 |
| ------------------ | ------ | --------------------- |
| `opacity.disabled` | `0.38` | Disabled elements     |
| `opacity.hover`    | `0.92` | Hover states          |
| `opacity.active`   | `0.84` | Active/pressed states |
| `opacity.focus`    | `1.0`  | Focused elements      |
| `opacity.overlay`  | `0.5`  | Modal overlays        |
| `opacity.tooltip`  | `0.95` | Tooltip backgrounds   |

---

## Color Contrast Ratios

All color combinations meet WCAG 2.1 contrast requirements.

### Text on Page Background

| Combination                                  | Contrast Ratio | WCAG Level | Usage               |
| -------------------------------------------- | -------------- | ---------- | ------------------- |
| Primary text (`#0f172a`) on Page (`#f8fafc`) | **19.07:1**    | AAA        | Body text, headings |
| Muted text (`#334155`) on Page (`#f8fafc`)   | **7.51:1**     | AAA        | Secondary text      |
| Subtle text (`#475569`) on Page (`#f8fafc`)  | **4.55:1**     | AA         | Tertiary text       |
| Meta text (`#64748b`) on Page (`#f8fafc`)    | **3.12:1**     | -          | Large text only     |

### Button Contrast

| Button Type | Text      | Background | Contrast   | WCAG           |
| ----------- | --------- | ---------- | ---------- | -------------- |
| Primary     | `#ffffff` | `#2563eb`  | **5.95:1** | AA             |
| Danger      | `#ffffff` | `#dc2626`  | **4.54:1** | AA             |
| Success     | `#ffffff` | `#16a34a`  | **3.37:1** | AA (Large)     |
| CTA         | `#ffffff` | `#f59e0b`  | **2.22:1** | - (Large only) |

### Dark Mode

| Combination                                  | Contrast Ratio | WCAG Level |
| -------------------------------------------- | -------------- | ---------- |
| Text (`#f8fafc`) on Background (`#0f172a`)   | **18.23:1**    | AAA        |
| Muted (`#cbd5e1`) on Background (`#0f172a`)  | **12.63:1**    | AAA        |
| Subtle (`#94a3b8`) on Background (`#0f172a`) | **6.29:1**     | AAA        |

### Component Contrast

| Component     | Combination                           | Ratio      | WCAG |
| ------------- | ------------------------------------- | ---------- | ---- |
| Card          | Text (`#0f172a`) on White (`#ffffff`) | **21:1**   | AAA  |
| Badge Info    | Text (`#1e40af`) on Light (`#dbeafe`) | **7.15:1** | AAA  |
| Badge Success | Text (`#166534`) on Light (`#dcfce7`) | **8.09:1** | AAA  |
| Badge Warning | Text (`#92400e`) on Light (`#fef3c7`) | **6.84:1** | AAA  |
| Badge Danger  | Text (`#991b1b`) on Light (`#fee2e2`) | **7.88:1** | AAA  |

---

## WCAG Standards

### Level AA Requirements

- **Normal text (< 24px):** Minimum 4.5:1 contrast ratio
- **Large text (≥ 24px or ≥ 19px bold):** Minimum 3:1 contrast ratio
- **UI components:** Minimum 3:1 contrast ratio

### Level AAA Requirements

- **Normal text (< 24px):** Minimum 7:1 contrast ratio
- **Large text (≥ 24px or ≥ 19px bold):** Minimum 4.5:1 contrast ratio

---

## Focus Management

### Visible Focus

All interactive elements must show visible focus indicator when focused via keyboard.

```css
:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

### Focus Order

Maintain logical tab order matching visual flow:

1. Primary navigation
2. Main content
3. Forms and inputs
4. Secondary actions
5. Footer navigation

---

## Screen Reader Support

### Semantic HTML

- Use proper heading hierarchy (h1-h6)
- Use semantic elements (`<nav>`, `<main>`, `<article>`, etc.)
- Associate labels with form inputs
- Provide alt text for images

### ARIA Labels

```html
<!-- Button with icon only -->
<button aria-label="Close modal">✕</button>

<!-- Status message -->
<div role="status" aria-live="polite">Form submitted successfully</div>

<!-- Loading state -->
<button aria-busy="true" aria-label="Loading...">Submit</button>
```

---

## Motion & Animation

### Reduced Motion

Respect user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Color Accessibility

### Color Independence

- Don't rely on color alone to convey information
- Use icons, text labels, or patterns in addition to color
- Provide text alternatives for color-coded content

### Examples

**❌ Bad:** "Required fields are in red"

**✅ Good:** "Required fields are marked with an asterisk (\*) and have red labels"

---

## Keyboard Navigation

### Essential Keyboard Shortcuts

- **Tab:** Move to next focusable element
- **Shift + Tab:** Move to previous focusable element
- **Enter/Space:** Activate buttons and links
- **Escape:** Close modals and dropdowns
- **Arrow keys:** Navigate within menus and lists

### Custom Components

Ensure all custom interactive components support keyboard navigation and follow ARIA patterns.

---

All accessibility tokens are from `tokens/core.json` and follow WCAG 2.1 Level AA standards (AAA where possible).
