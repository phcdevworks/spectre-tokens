# 📋 Forms

Illustrative form token applications and states for the Spectre design system.

[← Back to Examples](examples.md)

## Form Input States

### Text Input

| State    | Background | Border              | Text      | Placeholder |
| -------- | ---------- | ------------------- | --------- | ----------- |
| Default  | `#ffffff`  | `1px solid #cbd5e1` | `#0f172a` | `#94a3b8`   |
| Hover    | `#ffffff`  | `1px solid #94a3b8` | `#0f172a` | `#94a3b8`   |
| Focus    | `#ffffff`  | `2px solid #2563eb` | `#0f172a` | `#94a3b8`   |
| Valid    | `#ffffff`  | `1px solid #16a34a` | `#0f172a` | `#94a3b8`   |
| Invalid  | `#ffffff`  | `1px solid #dc2626` | `#0f172a` | `#94a3b8`   |
| Disabled | `#f8fafc`  | `1px solid #e2e8f0` | `#cbd5e1` | `#cbd5e1`   |

### Focus Ring

```
Width: 2px
Offset: 2px
Color: #2563eb
Style: solid
```

## Form Element Tokens

### Input

```json
{
  "bg": "#ffffff",
  "bgDisabled": "#f8fafc",
  "border": "#cbd5e1",
  "borderHover": "#94a3b8",
  "borderFocus": "#2563eb",
  "borderValid": "#16a34a",
  "borderInvalid": "#dc2626",
  "text": "#0f172a",
  "textDisabled": "#cbd5e1",
  "placeholder": "#94a3b8"
}
```

### Textarea

Same states as text input with additional properties:

```
Min Height: 96px (6rem)
Resize: vertical
Padding: 12px
Line Height: 1.5
```

### Select

```json
{
  "bg": "#ffffff",
  "bgDisabled": "#f8fafc",
  "border": "#cbd5e1",
  "borderHover": "#94a3b8",
  "borderFocus": "#2563eb",
  "text": "#0f172a",
  "textDisabled": "#cbd5e1",
  "icon": "#475569"
}
```

### Checkbox

| State     | Background | Border              | Checkmark |
| --------- | ---------- | ------------------- | --------- |
| Unchecked | `#ffffff`  | `1px solid #cbd5e1` | none      |
| Checked   | `#2563eb`  | `1px solid #2563eb` | `#ffffff` |
| Hover     | `#f8fafc`  | `1px solid #94a3b8` | -         |
| Focus     | `#ffffff`  | `2px solid #2563eb` | -         |
| Disabled  | `#f8fafc`  | `1px solid #e2e8f0` | `#cbd5e1` |

### Radio

| State      | Background | Border              | Dot       |
| ---------- | ---------- | ------------------- | --------- |
| Unselected | `#ffffff`  | `1px solid #cbd5e1` | none      |
| Selected   | `#ffffff`  | `1px solid #2563eb` | `#2563eb` |
| Hover      | `#f8fafc`  | `1px solid #94a3b8` | -         |
| Focus      | `#ffffff`  | `2px solid #2563eb` | -         |
| Disabled   | `#f8fafc`  | `1px solid #e2e8f0` | `#cbd5e1` |

## Sizing

### Input Dimensions

```
Padding: 12px (vertical) × 16px (horizontal)
Height: 44px (minimum for touch targets)
Border Radius: 4px (radii.md)
Font Size: 16px (prevents zoom on iOS)
```

### Label

```
Font Size: 14px
Font Weight: 500
Color: #0f172a
Margin Bottom: 8px
```

### Helper Text

```
Font Size: 14px
Font Weight: 400
Color: #64748b
Margin Top: 8px
```

### Error Message

```
Font Size: 14px
Font Weight: 400
Color: #dc2626
Margin Top: 8px
```

## Form Layout

### Field Spacing

```
Vertical gap between fields: 16px
Label to input: 8px
Input to helper text: 8px
Section spacing: 32px
```

### Form Groups

```
Padding: 24px
Background: #ffffff
Border: 1px solid #e2e8f0
Border Radius: 8px
Gap: 16px
```

## Validation States

### Valid Input

```
Border: 1px solid #16a34a
Icon: ✓ (checkmark)
Icon Color: #16a34a
Message: "Looks good!"
Message Color: #166534
```

### Invalid Input

```
Border: 1px solid #dc2626
Icon: ⚠ (warning)
Icon Color: #dc2626
Message: "Please fix this field"
Message Color: #b91c1c
```

### Required Field Indicator

```
Symbol: * (asterisk)
Color: #dc2626
Position: After label text
```

## Usage Examples

### Basic Form Field

```
<label for="email">
  Email Address *
</label>
<input
  type="email"
  id="email"
  placeholder="you@example.com"
  required
/>
<span class="helper-text">
  We'll never share your email
</span>
```

### Error State

```
<label for="password">
  Password
</label>
<input
  type="password"
  id="password"
  aria-invalid="true"
  aria-describedby="password-error"
/>
<span id="password-error" class="error-text">
  Password must be at least 8 characters
</span>
```

### Success State

```
<label for="username">
  Username
</label>
<input
  type="text"
  id="username"
  aria-invalid="false"
  aria-describedby="username-success"
/>
<span id="username-success" class="success-text">
  Username is available!
</span>
```

## Accessibility

- **Minimum font size**: 16px (prevents zoom on mobile)
- **Minimum touch target**: 44×44px
- **Focus visible**: Always show focus ring
- **Labels**: Always associate labels with inputs
- **Error messages**: Use `aria-invalid` and `aria-describedby`
- **Required fields**: Use `required` attribute and visual indicator
- **Placeholder**: Don't rely solely on placeholder text

---

These examples show one way to apply form tokens from `tokens/`. The field
markup and behaviors are illustrative and do not define downstream form
primitives.
