# 📏 Spacing

Spacing scale and layout tokens for the Spectre design system.

[← Back to Examples](examples.md)

## Space Scale

| Token      | Rem     | Pixels | Usage                |
| ---------- | ------- | ------ | -------------------- |
| `space.0`  | 0rem    | 0px    | No spacing           |
| `space.4`  | 0.25rem | 4px    | Tiny gaps            |
| `space.8`  | 0.5rem  | 8px    | Compact spacing      |
| `space.12` | 0.75rem | 12px   | Small spacing        |
| `space.16` | 1rem    | 16px   | Base spacing         |
| `space.20` | 1.25rem | 20px   | Comfortable spacing  |
| `space.24` | 1.5rem  | 24px   | Medium spacing       |
| `space.32` | 2rem    | 32px   | Large spacing        |
| `space.40` | 2.5rem  | 40px   | Extra large          |
| `space.48` | 3rem    | 48px   | Section spacing      |
| `space.56` | 3.5rem  | 56px   | Large sections       |
| `space.64` | 4rem    | 64px   | Extra large sections |
| `space.80` | 5rem    | 80px   | Major sections       |
| `space.96` | 6rem    | 96px   | Hero sections        |

## Visual Scale

```
0px   |
4px   |▓
8px   |▓▓
12px  |▓▓▓
16px  |▓▓▓▓
20px  |▓▓▓▓▓
24px  |▓▓▓▓▓▓
32px  |▓▓▓▓▓▓▓▓
40px  |▓▓▓▓▓▓▓▓▓▓
48px  |▓▓▓▓▓▓▓▓▓▓▓▓
56px  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓
64px  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
80px  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
96px  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

## Layout Tokens

### Section Padding

| Token                       | Value         | Usage            |
| --------------------------- | ------------- | ---------------- |
| `layout.section.padding.sm` | 1.5rem (24px) | Mobile sections  |
| `layout.section.padding.md` | 2rem (32px)   | Tablet sections  |
| `layout.section.padding.lg` | 3rem (48px)   | Desktop sections |

### Section Gap

| Token                   | Value         | Usage                   |
| ----------------------- | ------------- | ----------------------- |
| `layout.section.gap.sm` | 1rem (16px)   | Mobile section spacing  |
| `layout.section.gap.md` | 1.5rem (24px) | Tablet section spacing  |
| `layout.section.gap.lg` | 2rem (32px)   | Desktop section spacing |

### Stack Gap

| Token                 | Value          | Usage                  |
| --------------------- | -------------- | ---------------------- |
| `layout.stack.gap.sm` | 0.5rem (8px)   | Tight vertical stacks  |
| `layout.stack.gap.md` | 0.75rem (12px) | Normal vertical stacks |
| `layout.stack.gap.lg` | 1rem (16px)    | Loose vertical stacks  |

### Container Padding

| Token                         | Value         | Usage              |
| ----------------------------- | ------------- | ------------------ |
| `layout.container.paddingInline.sm` | 1rem (16px)   | Mobile containers  |
| `layout.container.paddingInline.md` | 1.5rem (24px) | Tablet containers  |
| `layout.container.paddingInline.lg` | 2rem (32px)   | Desktop containers |

## Common Patterns

### Card Spacing

```
Padding: space.24 (24px)
Gap: space.16 (16px)
Margin: space.16 (16px)
```

### Button Spacing

```
Padding X: space.20 (20px)
Padding Y: space.12 (12px)
Gap (icon + text): space.8 (8px)
```

### Form Spacing

```
Field gap: space.16 (16px)
Label margin: space.8 (8px)
Input padding: space.12 (12px)
```

### Section Spacing

```
Hero section: space.96 (96px) top/bottom
Content section: space.64 (64px) top/bottom
Feature cards gap: space.32 (32px)
```

## Responsive Spacing

### Mobile (< 640px)

- Use smaller spacing values (0-32)
- Section padding: sm (24px)
- Stack gap: sm (8px)

### Tablet (640px - 1024px)

- Use medium spacing values (0-48)
- Section padding: md (32px)
- Stack gap: md (12px)

### Desktop (> 1024px)

- Use full spacing scale (0-96)
- Section padding: lg (48px)
- Stack gap: lg (16px)

---

All spacing values are from `tokens/core.json`.
