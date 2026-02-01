# ⚡ Animations & Transitions

Motion and animation tokens for the Spectre design system.

[← Back to Examples](README.md)

## Animation Types

### Fade In

```json
{
  "duration": "200ms",
  "easing": "inOut",
  "keyframes": "fadeIn"
}
```

**Usage:** Elements entering the viewport, modal overlays, tooltips

### Fade Out

```json
{
  "duration": "150ms",
  "easing": "in",
  "keyframes": "fadeOut"
}
```

**Usage:** Elements leaving the viewport, dismissing notifications

### Slide Up

```json
{
  "duration": "300ms",
  "easing": "out",
  "keyframes": "slideUp"
}
```

**Usage:** Bottom sheets, mobile menus, toast notifications

### Slide Down

```json
{
  "duration": "300ms",
  "easing": "out",
  "keyframes": "slideDown"
}
```

**Usage:** Dropdowns, expanding sections, mega menus

### Scale In

```json
{
  "duration": "200ms",
  "easing": "out",
  "keyframes": "scaleIn"
}
```

**Usage:** Modals, popovers, floating action buttons

### Bounce

```json
{
  "duration": "500ms",
  "easing": "spring",
  "keyframes": "bounce"
}
```

**Usage:** Success indicators, attention-grabbing elements

### Shake

```json
{
  "duration": "500ms",
  "easing": "linear",
  "keyframes": "shake"
}
```

**Usage:** Error states, invalid input feedback

### Pulse

```json
{
  "duration": "700ms",
  "easing": "inOut",
  "keyframes": "pulse"
}
```

**Usage:** Loading indicators, attention indicators, notification badges

## Duration Tokens

| Token                           | Value | Usage                  |
| ------------------------------- | ----- | ---------------------- |
| `transitions.duration.instant`  | 75ms  | Micro-interactions     |
| `transitions.duration.fast`     | 150ms | Hover states, tooltips |
| `transitions.duration.base`     | 200ms | Default transitions    |
| `transitions.duration.moderate` | 300ms | Modals, dropdowns      |
| `transitions.duration.slow`     | 500ms | Complex animations     |
| `transitions.duration.slower`   | 700ms | Page transitions       |

## Easing Functions

| Token                       | Value                                    | Curve            | Usage                           |
| --------------------------- | ---------------------------------------- | ---------------- | ------------------------------- |
| `transitions.easing.linear` | `linear`                                 | Constant speed   | Continuous animations, spinners |
| `transitions.easing.in`     | `ease-in`                                | Slow start       | Exit animations                 |
| `transitions.easing.out`    | `ease-out`                               | Slow end         | Enter animations                |
| `transitions.easing.inOut`  | `ease-in-out`                            | Slow start & end | State changes                   |
| `transitions.easing.spring` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Bouncy           | Playful interactions            |

### Easing Curves

```
linear:     ────────────────────>

ease-in:    ───────────────────>
           /

ease-out:   >───────────────────
                             \

ease-in-out: ──────>──────
            /            \

spring:      ───>─<───>──
            /         \
```

## Common Transitions

### Button Hover

```
Property: all
Duration: 150ms (fast)
Easing: ease-out
```

### Card Hover

```
Property: transform, box-shadow
Duration: 200ms (base)
Easing: ease-out
```

### Modal Enter/Exit

```
Enter:
  - Duration: 300ms (moderate)
  - Easing: ease-out
  - Animation: fadeIn + scaleIn

Exit:
  - Duration: 200ms (base)
  - Easing: ease-in
  - Animation: fadeOut + scaleOut
```

### Dropdown Open/Close

```
Open:
  - Duration: 300ms (moderate)
  - Easing: ease-out
  - Animation: slideDown + fadeIn

Close:
  - Duration: 150ms (fast)
  - Easing: ease-in
  - Animation: fadeOut
```

### Loading State

```
Property: opacity, transform
Duration: 700ms (slower)
Easing: ease-in-out
Animation: pulse
Iteration: infinite
```

## Keyframe Definitions

### fadeIn

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### fadeOut

```css
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### slideUp

```css
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### slideDown

```css
@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### scaleIn

```css
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

### bounce

```css
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
```

### shake

```css
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
}
```

### pulse

```css
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
}
```

## Usage Guidelines

### Performance

- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, `right` (causes reflow)
- Use `will-change` sparingly and remove after animation
- Keep animations under 500ms for perceived performance

### Accessibility

- Respect `prefers-reduced-motion` media query
- Provide instant transitions when motion is reduced
- Don't rely solely on animation to convey information
- Ensure animations don't cause seizures (avoid rapid flashing)

### Best Practices

- Use consistent durations for similar interactions
- Faster animations for small UI elements
- Slower animations for complex state changes
- Match easing to animation type (ease-out for enter, ease-in for exit)
- Test animations at 60fps on target devices

---

All animation and transition tokens are from `tokens/core.json`.
