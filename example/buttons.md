# 🔘 Buttons

Illustrative button token applications for the Spectre design system.

[← Back to Examples](examples.md)

## Button Token Applications

### Primary Button

| State    | Background | Text      | Border |
| -------- | ---------- | --------- | ------ |
| Default  | `#2563eb`  | `#ffffff` | none   |
| Hover    | `#1d4ed8`  | `#ffffff` | none   |
| Active   | `#1e40af`  | `#ffffff` | none   |
| Disabled | `#cbd5e1`  | `#ffffff` | none   |

**Usage:** Main call-to-action, primary actions

### Secondary Button

| State    | Background | Text      | Border              |
| -------- | ---------- | --------- | ------------------- |
| Default  | `#ffffff`  | `#2563eb` | `1px solid #cbd5e1` |
| Hover    | `#f8fafc`  | `#1d4ed8` | `1px solid #cbd5e1` |
| Active   | `#f1f5f9`  | `#1e40af` | `1px solid #cbd5e1` |
| Disabled | `#f8fafc`  | `#cbd5e1` | `1px solid #e2e8f0` |

**Usage:** Secondary actions, cancel buttons

### Ghost Button

| State    | Background    | Text      | Border |
| -------- | ------------- | --------- | ------ |
| Default  | `transparent` | `#475569` | none   |
| Hover    | `#f1f5f9`     | `#334155` | none   |
| Active   | `#e2e8f0`     | `#1e293b` | none   |
| Disabled | `transparent` | `#cbd5e1` | none   |

**Usage:** Tertiary actions, subtle interactions

### Danger Button

| State    | Background | Text      | Border |
| -------- | ---------- | --------- | ------ |
| Default  | `#dc2626`  | `#ffffff` | none   |
| Hover    | `#b91c1c`  | `#ffffff` | none   |
| Active   | `#991b1b`  | `#ffffff` | none   |
| Disabled | `#fecaca`  | `#ffffff` | none   |

**Usage:** Destructive actions, delete confirmations

### Success Button

| State    | Background | Text      | Border |
| -------- | ---------- | --------- | ------ |
| Default  | `#16a34a`  | `#ffffff` | none   |
| Hover    | `#15803d`  | `#ffffff` | none   |
| Active   | `#166534`  | `#ffffff` | none   |
| Disabled | `#bbf7d0`  | `#ffffff` | none   |

**Usage:** Positive actions, confirmations

### CTA Button

| State    | Background | Text      | Border | Shadow                                |
| -------- | ---------- | --------- | ------ | ------------------------------------- |
| Default  | `#f59e0b`  | `#ffffff` | none   | `0 4px 14px rgba(245, 158, 11, 0.39)` |
| Hover    | `#d97706`  | `#ffffff` | none   | `0 6px 20px rgba(245, 158, 11, 0.45)` |
| Active   | `#b45309`  | `#ffffff` | none   | `0 2px 8px rgba(245, 158, 11, 0.30)`  |
| Disabled | `#fcd34d`  | `#ffffff` | none   | none                                  |

**Usage:** Premium actions, special promotions, high-priority conversions

### Accent Button

| State    | Background | Text      | Border |
| -------- | ---------- | --------- | ------ |
| Default  | `#3b82f6`  | `#ffffff` | none   |
| Hover    | `#2563eb`  | `#ffffff` | none   |
| Active   | `#1d4ed8`  | `#ffffff` | none   |
| Disabled | `#bfdbfe`  | `#ffffff` | none   |

**Usage:** Accent actions, alternative primary actions

## Button Sizing

| Size   | Padding     | Font Size | Height | Border Radius |
| ------ | ----------- | --------- | ------ | ------------- |
| Small  | `8px 16px`  | 14px      | 32px   | 4px           |
| Medium | `10px 20px` | 14px      | 40px   | 4px           |
| Large  | `12px 24px` | 16px      | 48px   | 4px           |

## Button Tokens Reference

### Primary

```json
{
  "bg": "#2563eb",
  "bgHover": "#1d4ed8",
  "bgActive": "#1e40af",
  "bgDisabled": "#cbd5e1",
  "text": "#ffffff",
  "textHover": "#ffffff",
  "textActive": "#ffffff",
  "textDisabled": "#ffffff"
}
```

### Secondary

```json
{
  "bg": "#ffffff",
  "bgHover": "#f8fafc",
  "bgActive": "#f1f5f9",
  "bgDisabled": "#f8fafc",
  "text": "#2563eb",
  "textHover": "#1d4ed8",
  "textActive": "#1e40af",
  "textDisabled": "#cbd5e1",
  "border": "#cbd5e1"
}
```

### Ghost

```json
{
  "bg": "transparent",
  "bgHover": "#f1f5f9",
  "bgActive": "#e2e8f0",
  "bgDisabled": "transparent",
  "text": "#475569",
  "textHover": "#334155",
  "textActive": "#1e293b",
  "textDisabled": "#cbd5e1"
}
```

### Danger

```json
{
  "bg": "#dc2626",
  "bgHover": "#b91c1c",
  "bgActive": "#991b1b",
  "bgDisabled": "#fecaca",
  "text": "#ffffff",
  "textHover": "#ffffff",
  "textActive": "#ffffff",
  "textDisabled": "#ffffff"
}
```

### Success

```json
{
  "bg": "#16a34a",
  "bgHover": "#15803d",
  "bgActive": "#166534",
  "bgDisabled": "#bbf7d0",
  "text": "#ffffff",
  "textHover": "#ffffff",
  "textActive": "#ffffff",
  "textDisabled": "#ffffff"
}
```

### CTA

```json
{
  "bg": "#f59e0b",
  "bgHover": "#d97706",
  "bgActive": "#b45309",
  "bgDisabled": "#fcd34d",
  "text": "#ffffff",
  "textHover": "#ffffff",
  "textActive": "#ffffff",
  "textDisabled": "#ffffff",
  "shadow": "0 4px 14px 0 rgba(245, 158, 11, 0.39)"
}
```

### Accent

```json
{
  "bg": "#3b82f6",
  "bgHover": "#2563eb",
  "bgActive": "#1d4ed8",
  "bgDisabled": "#bfdbfe",
  "text": "#ffffff",
  "textHover": "#ffffff",
  "textActive": "#ffffff",
  "textDisabled": "#ffffff"
}
```

## Usage Guidelines

1. **Primary**: Use for the most important action on a page
2. **Secondary**: Use for alternative or secondary actions
3. **Ghost**: Use for tertiary actions or in tight spaces
4. **Danger**: Always confirm before destructive actions
5. **Success**: Use sparingly for positive confirmations
6. **CTA**: Reserve for high-value conversion actions only
7. **Accent**: Use for actions that need visual distinction

## Example Implementation Notes

- Only one primary/CTA button per section
- Group related buttons together
- Place primary action on the right in horizontal layouts
- Maintain 8-16px spacing between buttons
- Use disabled state to prevent invalid actions
- Add loading states for async operations
- Ensure 44x44px minimum touch target on mobile

---

These examples show one way to apply the button tokens from `tokens/`. The
markup, class names, and interaction patterns are illustrative rather than
package-owned button primitives.
