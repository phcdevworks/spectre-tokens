# 🧩 Components

Component-specific design tokens for the Spectre design system.

[← Back to Examples](README.md)

## Badges

### Neutral Badge

| Property      | Default        | Dark Mode      |
| ------------- | -------------- | -------------- |
| Background    | `#f1f5f9`      | `#1e293b`      |
| Text          | `#475569`      | `#cbd5e1`      |
| Border Radius | `999px` (pill) | `999px` (pill) |
| Padding       | `4px 12px`     | `4px 12px`     |

### Info Badge

| Property   | Default   | Dark Mode |
| ---------- | --------- | --------- |
| Background | `#dbeafe` | `#1e40af` |
| Text       | `#1e40af` | `#dbeafe` |

### Success Badge

| Property   | Default   | Dark Mode |
| ---------- | --------- | --------- |
| Background | `#dcfce7` | `#166534` |
| Text       | `#166534` | `#dcfce7` |

### Warning Badge

| Property   | Default   | Dark Mode |
| ---------- | --------- | --------- |
| Background | `#fef3c7` | `#92400e` |
| Text       | `#92400e` | `#fef3c7` |

### Danger Badge

| Property   | Default   | Dark Mode |
| ---------- | --------- | --------- |
| Background | `#fee2e2` | `#991b1b` |
| Text       | `#991b1b` | `#fee2e2` |

**Usage:** Status indicators, labels, tags, counts

---

## Cards

| Property      | Value                             |
| ------------- | --------------------------------- |
| Background    | `#ffffff`                         |
| Text          | `#0f172a`                         |
| Text Muted    | `#64748b`                         |
| Border        | `1px solid #e2e8f0`               |
| Border Radius | `8px` (lg)                        |
| Padding       | `24px`                            |
| Shadow        | `0 1px 3px rgba(15, 23, 42, 0.1)` |

**Usage:** Content containers, feature cards, product cards

---

## Icon Boxes

### Default

| Property      | Value               |
| ------------- | ------------------- |
| Background    | `#dbeafe`           |
| Border        | `1px solid #93c5fd` |
| Icon Color    | `#2563eb`           |
| Size          | `48px × 48px`       |
| Border Radius | `8px` (lg)          |
| Icon Size     | `24px`              |

### Success

| Property   | Value               |
| ---------- | ------------------- |
| Background | `#dcfce7`           |
| Border     | `1px solid #86efac` |
| Icon Color | `#16a34a`           |

### Warning

| Property   | Value               |
| ---------- | ------------------- |
| Background | `#fef3c7`           |
| Border     | `1px solid #fcd34d` |
| Icon Color | `#d97706`           |

### Danger

| Property   | Value               |
| ---------- | ------------------- |
| Background | `#fee2e2`           |
| Border     | `1px solid #fca5a5` |
| Icon Color | `#dc2626`           |

**Usage:** Feature icons, step indicators, service icons

---

## Testimonials

| Property      | Default             | Dark Mode           |
| ------------- | ------------------- | ------------------- |
| Background    | `#ffffff`           | `#1e293b`           |
| Border        | `1px solid #e2e8f0` | `1px solid #334155` |
| Text          | `#475569`           | `#cbd5e1`           |
| Author Name   | `#0f172a`           | `#f8fafc`           |
| Author Title  | `#64748b`           | `#94a3b8`           |
| Quote Mark    | `#93c5fd`           | `#3b82f6`           |
| Border Radius | `8px` (lg)          | `8px` (lg)          |
| Padding       | `24px`              | `24px`              |

### Structure

```
┌─────────────────────────────────┐
│ "                               │
│ Quote mark (#93c5fd)            │
│                                 │
│ Testimonial text (#475569)      │
│ Lorem ipsum dolor sit amet...   │
│                                 │
│ ─────────────────────────────   │
│                                 │
│ Author name (#0f172a)           │
│ Author title (#64748b)          │
└─────────────────────────────────┘
```

**Usage:** Customer reviews, social proof, quotes

---

## Pricing Cards

### Standard Card

| Property         | Value               |
| ---------------- | ------------------- |
| Background       | `#ffffff`           |
| Border           | `1px solid #e2e8f0` |
| Badge Background | `#dbeafe`           |
| Badge Text       | `#1e40af`           |
| Price            | `#0f172a`           |
| Text             | `#475569`           |
| Border Radius    | `8px` (lg)          |
| Padding          | `32px`              |

### Featured Card

| Property         | Value                               |
| ---------------- | ----------------------------------- |
| Background       | `#1e3a8a`                           |
| Border           | `2px solid #2563eb`                 |
| Badge Background | `#3b82f6`                           |
| Badge Text       | `#ffffff`                           |
| Price            | `#ffffff`                           |
| Text             | `#dbeafe`                           |
| Border Radius    | `8px` (lg)                          |
| Padding          | `32px`                              |
| Transform        | `scale(1.05)`                       |
| Shadow           | `0 10px 15px rgba(15, 23, 42, 0.1)` |

### Structure

```
┌─────────────────────────────────┐
│ [Badge]                  Popular│
│                                 │
│ Plan Name (typography.2xl)      │
│                                 │
│ $99 /month (typography.4xl)     │
│                                 │
│ Description text                │
│                                 │
│ ✓ Feature 1                     │
│ ✓ Feature 2                     │
│ ✓ Feature 3                     │
│                                 │
│ [Get Started Button]            │
└─────────────────────────────────┘
```

**Usage:** Subscription tiers, product pricing, plan comparisons

---

## Rating

| Property    | Value             |
| ----------- | ----------------- |
| Star Filled | `#f59e0b` (amber) |
| Star Empty  | `#cbd5e1` (gray)  |
| Text        | `#475569`         |
| Star Size   | `20px`            |
| Gap         | `4px`             |

### Example

```
★★★★☆ 4.0 out of 5
```

**Usage:** Product ratings, review scores, feedback indicators

---

## Component Token Reference

### Badge Tokens

```json
{
  "neutral": {
    "bg": "#f1f5f9",
    "text": "#475569"
  },
  "info": {
    "bg": "#dbeafe",
    "text": "#1e40af"
  },
  "success": {
    "bg": "#dcfce7",
    "text": "#166534"
  },
  "warning": {
    "bg": "#fef3c7",
    "text": "#92400e"
  },
  "danger": {
    "bg": "#fee2e2",
    "text": "#991b1b"
  }
}
```

### Icon Box Tokens

```json
{
  "default": {
    "bg": "#dbeafe",
    "border": "#93c5fd",
    "icon": "#2563eb"
  },
  "success": {
    "bg": "#dcfce7",
    "border": "#86efac",
    "icon": "#16a34a"
  },
  "warning": {
    "bg": "#fef3c7",
    "border": "#fcd34d",
    "icon": "#d97706"
  },
  "danger": {
    "bg": "#fee2e2",
    "border": "#fca5a5",
    "icon": "#dc2626"
  }
}
```

### Testimonial Tokens

```json
{
  "bg": "#ffffff",
  "border": "#e2e8f0",
  "text": "#475569",
  "authorName": "#0f172a",
  "authorTitle": "#64748b",
  "quoteMark": "#93c5fd"
}
```

### Pricing Card Tokens

```json
{
  "default": {
    "bg": "#ffffff",
    "border": "#e2e8f0",
    "badgeBg": "#dbeafe",
    "badgeText": "#1e40af",
    "price": "#0f172a",
    "text": "#475569"
  },
  "featured": {
    "bg": "#1e3a8a",
    "border": "#2563eb",
    "badgeBg": "#3b82f6",
    "badgeText": "#ffffff",
    "price": "#ffffff",
    "text": "#dbeafe"
  }
}
```

### Rating Tokens

```json
{
  "starFilled": "#f59e0b",
  "starEmpty": "#cbd5e1",
  "text": "#475569"
}
```

---

All component tokens are from `tokens/core.json` and include dark mode variants where applicable.
