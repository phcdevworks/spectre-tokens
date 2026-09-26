# Downstream Parity Checklist

Generated from the published CSS output by `npm run build`
(`scripts/build-downstream-parity.ts`). Do not hand-edit — regenerate instead.
This file is a derived artifact, not contract authority; `tokens/` and
`contract.manifest.json` remain the source of truth.

Every CSS custom property in `dist/index.css` (1307 total) belongs
to exactly one of 69 families. A family is the unit a downstream
recipe or stylesheet consumes: each one needs a consumer in `spectre-ui`
before its `tests/token-parity.test.ts` passes. The build fails if a new
variable does not fit an existing family, so a token group cannot ship
without appearing here.

Which recipe consumes a family, and how, is decided downstream. This package
defines what each token means, not how a component is built from it.

"Dark mode" means the variable is redeclared in the
`[data-spectre-theme="dark"]` block. The others are declared once in `:root`.

## Checklist with live status

This file lists what exists. To see what a downstream repo checked out
beside this one still has to build, run from `spectre-tokens`:

```bash
npm run audit:parity                      # spectre-ui (default)
npm run audit:parity -- spectre-components
```

It prints these families as a Markdown checklist: `[x]` when every variable
is referenced, `[ ]` with each missing variable listed otherwise, and the
files that already consume each family. A family marked "no consumer" is a
recipe or stylesheet that has not been built yet. The script reads the
sibling repo and never modifies it; redirect its output to a file to keep a
copy.

## Foundations

| Family | Variables | Count | Dark mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `color` | `--sp-color-*` | 441 | no | `colors` |
| `space` | `--sp-space-*` | 22 | no | `space` |
| `layout-container` | `--sp-layout-container-*` | 6 | no | `layout.container` |
| `layout-section` | `--sp-layout-section-*` | 6 | no | `layout.section` |
| `layout-stack` | `--sp-layout-stack-*` | 3 | no | `layout.stack` |
| `layout-sidebar` | `--sp-layout-sidebar-*` | 1 | no | `layout.sidebar` |
| `radius` | `--sp-radius-*` | 9 | no | `radii` |
| `border` | `--sp-border-*` | 7 | no | `border` |
| `shadow` | `--sp-shadow-*` | 11 | no | `shadows` |
| `opacity` | `--sp-opacity-*` | 7 | no | `opacity` |
| `z-index` | `--sp-z-index-*` | 9 | no | `zIndex` |
| `breakpoint` | `--sp-breakpoint-*` | 5 | no | `breakpoints` — CSS does not allow `var()` in `@media` queries; consume these by value. |
| `motion` | `--sp-duration-*`, `--sp-easing-*`, `--sp-animation-*` | 64 | no | `transitions`, `animations` |
| `tracking` | `--sp-tracking-*` | 7 | no | `tracking` |
| `icon` | `--sp-icon-*` | 7 | no | `icons` |
| `aspect-ratio` | `--sp-aspect-ratio-*` | 7 | no | `aspectRatios` |
| `font-family` | `--sp-font-family-*` | 3 | no | `typography.families` |
| `font-scale` | `--sp-font-*` | 40 | no | `font`, `typography.scale` |
| `accessibility` | `--sp-focus-ring-*`, `--sp-min-touch-target`, `--sp-min-text-size`, `--sp-reduced-motion`, `--sp-forced-colors` | 7 | no | `accessibility` |

<details>
<summary><code>color</code> (441)</summary>

- `--sp-color-brand-50`
- `--sp-color-brand-100`
- `--sp-color-brand-200`
- `--sp-color-brand-300`
- `--sp-color-brand-400`
- `--sp-color-brand-500`
- `--sp-color-brand-600`
- `--sp-color-brand-700`
- `--sp-color-brand-800`
- `--sp-color-brand-900`
- `--sp-color-neutral-50`
- `--sp-color-neutral-100`
- `--sp-color-neutral-200`
- `--sp-color-neutral-300`
- `--sp-color-neutral-400`
- `--sp-color-neutral-500`
- `--sp-color-neutral-600`
- `--sp-color-neutral-700`
- `--sp-color-neutral-800`
- `--sp-color-neutral-900`
- `--sp-color-accent-50`
- `--sp-color-accent-100`
- `--sp-color-accent-200`
- `--sp-color-accent-300`
- `--sp-color-accent-400`
- `--sp-color-accent-500`
- `--sp-color-accent-600`
- `--sp-color-accent-700`
- `--sp-color-accent-800`
- `--sp-color-accent-900`
- `--sp-color-success-50`
- `--sp-color-success-100`
- `--sp-color-success-200`
- `--sp-color-success-300`
- `--sp-color-success-400`
- `--sp-color-success-500`
- `--sp-color-success-600`
- `--sp-color-success-700`
- `--sp-color-success-800`
- `--sp-color-success-900`
- `--sp-color-warning-50`
- `--sp-color-warning-100`
- `--sp-color-warning-200`
- `--sp-color-warning-300`
- `--sp-color-warning-400`
- `--sp-color-warning-500`
- `--sp-color-warning-600`
- `--sp-color-warning-700`
- `--sp-color-warning-800`
- `--sp-color-warning-900`
- `--sp-color-error-50`
- `--sp-color-error-100`
- `--sp-color-error-200`
- `--sp-color-error-300`
- `--sp-color-error-400`
- `--sp-color-error-500`
- `--sp-color-error-600`
- `--sp-color-error-700`
- `--sp-color-error-800`
- `--sp-color-error-900`
- `--sp-color-info-50`
- `--sp-color-info-100`
- `--sp-color-info-200`
- `--sp-color-info-300`
- `--sp-color-info-400`
- `--sp-color-info-500`
- `--sp-color-info-600`
- `--sp-color-info-700`
- `--sp-color-info-800`
- `--sp-color-info-900`
- `--sp-color-indigo-500`
- `--sp-color-indigo-600`
- `--sp-color-violet-600`
- `--sp-color-focus-primary`
- `--sp-color-focus-error`
- `--sp-color-focus-info`
- `--sp-color-white`
- `--sp-color-black`
- `--sp-color-palette-red-50`
- `--sp-color-palette-red-100`
- `--sp-color-palette-red-200`
- `--sp-color-palette-red-300`
- `--sp-color-palette-red-400`
- `--sp-color-palette-red-500`
- `--sp-color-palette-red-600`
- `--sp-color-palette-red-700`
- `--sp-color-palette-red-800`
- `--sp-color-palette-red-900`
- `--sp-color-palette-red-950`
- `--sp-color-palette-orange-50`
- `--sp-color-palette-orange-100`
- `--sp-color-palette-orange-200`
- `--sp-color-palette-orange-300`
- `--sp-color-palette-orange-400`
- `--sp-color-palette-orange-500`
- `--sp-color-palette-orange-600`
- `--sp-color-palette-orange-700`
- `--sp-color-palette-orange-800`
- `--sp-color-palette-orange-900`
- `--sp-color-palette-orange-950`
- `--sp-color-palette-amber-50`
- `--sp-color-palette-amber-100`
- `--sp-color-palette-amber-200`
- `--sp-color-palette-amber-300`
- `--sp-color-palette-amber-400`
- `--sp-color-palette-amber-500`
- `--sp-color-palette-amber-600`
- `--sp-color-palette-amber-700`
- `--sp-color-palette-amber-800`
- `--sp-color-palette-amber-900`
- `--sp-color-palette-amber-950`
- `--sp-color-palette-yellow-50`
- `--sp-color-palette-yellow-100`
- `--sp-color-palette-yellow-200`
- `--sp-color-palette-yellow-300`
- `--sp-color-palette-yellow-400`
- `--sp-color-palette-yellow-500`
- `--sp-color-palette-yellow-600`
- `--sp-color-palette-yellow-700`
- `--sp-color-palette-yellow-800`
- `--sp-color-palette-yellow-900`
- `--sp-color-palette-yellow-950`
- `--sp-color-palette-lime-50`
- `--sp-color-palette-lime-100`
- `--sp-color-palette-lime-200`
- `--sp-color-palette-lime-300`
- `--sp-color-palette-lime-400`
- `--sp-color-palette-lime-500`
- `--sp-color-palette-lime-600`
- `--sp-color-palette-lime-700`
- `--sp-color-palette-lime-800`
- `--sp-color-palette-lime-900`
- `--sp-color-palette-lime-950`
- `--sp-color-palette-green-50`
- `--sp-color-palette-green-100`
- `--sp-color-palette-green-200`
- `--sp-color-palette-green-300`
- `--sp-color-palette-green-400`
- `--sp-color-palette-green-500`
- `--sp-color-palette-green-600`
- `--sp-color-palette-green-700`
- `--sp-color-palette-green-800`
- `--sp-color-palette-green-900`
- `--sp-color-palette-green-950`
- `--sp-color-palette-emerald-50`
- `--sp-color-palette-emerald-100`
- `--sp-color-palette-emerald-200`
- `--sp-color-palette-emerald-300`
- `--sp-color-palette-emerald-400`
- `--sp-color-palette-emerald-500`
- `--sp-color-palette-emerald-600`
- `--sp-color-palette-emerald-700`
- `--sp-color-palette-emerald-800`
- `--sp-color-palette-emerald-900`
- `--sp-color-palette-emerald-950`
- `--sp-color-palette-teal-50`
- `--sp-color-palette-teal-100`
- `--sp-color-palette-teal-200`
- `--sp-color-palette-teal-300`
- `--sp-color-palette-teal-400`
- `--sp-color-palette-teal-500`
- `--sp-color-palette-teal-600`
- `--sp-color-palette-teal-700`
- `--sp-color-palette-teal-800`
- `--sp-color-palette-teal-900`
- `--sp-color-palette-teal-950`
- `--sp-color-palette-cyan-50`
- `--sp-color-palette-cyan-100`
- `--sp-color-palette-cyan-200`
- `--sp-color-palette-cyan-300`
- `--sp-color-palette-cyan-400`
- `--sp-color-palette-cyan-500`
- `--sp-color-palette-cyan-600`
- `--sp-color-palette-cyan-700`
- `--sp-color-palette-cyan-800`
- `--sp-color-palette-cyan-900`
- `--sp-color-palette-cyan-950`
- `--sp-color-palette-sky-50`
- `--sp-color-palette-sky-100`
- `--sp-color-palette-sky-200`
- `--sp-color-palette-sky-300`
- `--sp-color-palette-sky-400`
- `--sp-color-palette-sky-500`
- `--sp-color-palette-sky-600`
- `--sp-color-palette-sky-700`
- `--sp-color-palette-sky-800`
- `--sp-color-palette-sky-900`
- `--sp-color-palette-sky-950`
- `--sp-color-palette-blue-50`
- `--sp-color-palette-blue-100`
- `--sp-color-palette-blue-200`
- `--sp-color-palette-blue-300`
- `--sp-color-palette-blue-400`
- `--sp-color-palette-blue-500`
- `--sp-color-palette-blue-600`
- `--sp-color-palette-blue-700`
- `--sp-color-palette-blue-800`
- `--sp-color-palette-blue-900`
- `--sp-color-palette-blue-950`
- `--sp-color-palette-indigo-50`
- `--sp-color-palette-indigo-100`
- `--sp-color-palette-indigo-200`
- `--sp-color-palette-indigo-300`
- `--sp-color-palette-indigo-400`
- `--sp-color-palette-indigo-500`
- `--sp-color-palette-indigo-600`
- `--sp-color-palette-indigo-700`
- `--sp-color-palette-indigo-800`
- `--sp-color-palette-indigo-900`
- `--sp-color-palette-indigo-950`
- `--sp-color-palette-violet-50`
- `--sp-color-palette-violet-100`
- `--sp-color-palette-violet-200`
- `--sp-color-palette-violet-300`
- `--sp-color-palette-violet-400`
- `--sp-color-palette-violet-500`
- `--sp-color-palette-violet-600`
- `--sp-color-palette-violet-700`
- `--sp-color-palette-violet-800`
- `--sp-color-palette-violet-900`
- `--sp-color-palette-violet-950`
- `--sp-color-palette-purple-50`
- `--sp-color-palette-purple-100`
- `--sp-color-palette-purple-200`
- `--sp-color-palette-purple-300`
- `--sp-color-palette-purple-400`
- `--sp-color-palette-purple-500`
- `--sp-color-palette-purple-600`
- `--sp-color-palette-purple-700`
- `--sp-color-palette-purple-800`
- `--sp-color-palette-purple-900`
- `--sp-color-palette-purple-950`
- `--sp-color-palette-fuchsia-50`
- `--sp-color-palette-fuchsia-100`
- `--sp-color-palette-fuchsia-200`
- `--sp-color-palette-fuchsia-300`
- `--sp-color-palette-fuchsia-400`
- `--sp-color-palette-fuchsia-500`
- `--sp-color-palette-fuchsia-600`
- `--sp-color-palette-fuchsia-700`
- `--sp-color-palette-fuchsia-800`
- `--sp-color-palette-fuchsia-900`
- `--sp-color-palette-fuchsia-950`
- `--sp-color-palette-pink-50`
- `--sp-color-palette-pink-100`
- `--sp-color-palette-pink-200`
- `--sp-color-palette-pink-300`
- `--sp-color-palette-pink-400`
- `--sp-color-palette-pink-500`
- `--sp-color-palette-pink-600`
- `--sp-color-palette-pink-700`
- `--sp-color-palette-pink-800`
- `--sp-color-palette-pink-900`
- `--sp-color-palette-pink-950`
- `--sp-color-palette-rose-50`
- `--sp-color-palette-rose-100`
- `--sp-color-palette-rose-200`
- `--sp-color-palette-rose-300`
- `--sp-color-palette-rose-400`
- `--sp-color-palette-rose-500`
- `--sp-color-palette-rose-600`
- `--sp-color-palette-rose-700`
- `--sp-color-palette-rose-800`
- `--sp-color-palette-rose-900`
- `--sp-color-palette-rose-950`
- `--sp-color-palette-slate-50`
- `--sp-color-palette-slate-100`
- `--sp-color-palette-slate-200`
- `--sp-color-palette-slate-300`
- `--sp-color-palette-slate-400`
- `--sp-color-palette-slate-500`
- `--sp-color-palette-slate-600`
- `--sp-color-palette-slate-700`
- `--sp-color-palette-slate-800`
- `--sp-color-palette-slate-900`
- `--sp-color-palette-slate-950`
- `--sp-color-palette-gray-50`
- `--sp-color-palette-gray-100`
- `--sp-color-palette-gray-200`
- `--sp-color-palette-gray-300`
- `--sp-color-palette-gray-400`
- `--sp-color-palette-gray-500`
- `--sp-color-palette-gray-600`
- `--sp-color-palette-gray-700`
- `--sp-color-palette-gray-800`
- `--sp-color-palette-gray-900`
- `--sp-color-palette-gray-950`
- `--sp-color-palette-zinc-50`
- `--sp-color-palette-zinc-100`
- `--sp-color-palette-zinc-200`
- `--sp-color-palette-zinc-300`
- `--sp-color-palette-zinc-400`
- `--sp-color-palette-zinc-500`
- `--sp-color-palette-zinc-600`
- `--sp-color-palette-zinc-700`
- `--sp-color-palette-zinc-800`
- `--sp-color-palette-zinc-900`
- `--sp-color-palette-zinc-950`
- `--sp-color-palette-neutral-50`
- `--sp-color-palette-neutral-100`
- `--sp-color-palette-neutral-200`
- `--sp-color-palette-neutral-300`
- `--sp-color-palette-neutral-400`
- `--sp-color-palette-neutral-500`
- `--sp-color-palette-neutral-600`
- `--sp-color-palette-neutral-700`
- `--sp-color-palette-neutral-800`
- `--sp-color-palette-neutral-900`
- `--sp-color-palette-neutral-950`
- `--sp-color-palette-stone-50`
- `--sp-color-palette-stone-100`
- `--sp-color-palette-stone-200`
- `--sp-color-palette-stone-300`
- `--sp-color-palette-stone-400`
- `--sp-color-palette-stone-500`
- `--sp-color-palette-stone-600`
- `--sp-color-palette-stone-700`
- `--sp-color-palette-stone-800`
- `--sp-color-palette-stone-900`
- `--sp-color-palette-stone-950`
- `--sp-color-palette-mauve-50`
- `--sp-color-palette-mauve-100`
- `--sp-color-palette-mauve-200`
- `--sp-color-palette-mauve-300`
- `--sp-color-palette-mauve-400`
- `--sp-color-palette-mauve-500`
- `--sp-color-palette-mauve-600`
- `--sp-color-palette-mauve-700`
- `--sp-color-palette-mauve-800`
- `--sp-color-palette-mauve-900`
- `--sp-color-palette-mauve-950`
- `--sp-color-palette-olive-50`
- `--sp-color-palette-olive-100`
- `--sp-color-palette-olive-200`
- `--sp-color-palette-olive-300`
- `--sp-color-palette-olive-400`
- `--sp-color-palette-olive-500`
- `--sp-color-palette-olive-600`
- `--sp-color-palette-olive-700`
- `--sp-color-palette-olive-800`
- `--sp-color-palette-olive-900`
- `--sp-color-palette-olive-950`
- `--sp-color-palette-mist-50`
- `--sp-color-palette-mist-100`
- `--sp-color-palette-mist-200`
- `--sp-color-palette-mist-300`
- `--sp-color-palette-mist-400`
- `--sp-color-palette-mist-500`
- `--sp-color-palette-mist-600`
- `--sp-color-palette-mist-700`
- `--sp-color-palette-mist-800`
- `--sp-color-palette-mist-900`
- `--sp-color-palette-mist-950`
- `--sp-color-palette-taupe-50`
- `--sp-color-palette-taupe-100`
- `--sp-color-palette-taupe-200`
- `--sp-color-palette-taupe-300`
- `--sp-color-palette-taupe-400`
- `--sp-color-palette-taupe-500`
- `--sp-color-palette-taupe-600`
- `--sp-color-palette-taupe-700`
- `--sp-color-palette-taupe-800`
- `--sp-color-palette-taupe-900`
- `--sp-color-palette-taupe-950`
- `--sp-color-palette-integration-ink-50`
- `--sp-color-palette-integration-ink-100`
- `--sp-color-palette-integration-ink-200`
- `--sp-color-palette-integration-ink-300`
- `--sp-color-palette-integration-ink-400`
- `--sp-color-palette-integration-ink-500`
- `--sp-color-palette-integration-ink-600`
- `--sp-color-palette-integration-ink-700`
- `--sp-color-palette-integration-ink-800`
- `--sp-color-palette-integration-ink-900`
- `--sp-color-palette-integration-ink-950`
- `--sp-color-palette-integration-gunmetal-50`
- `--sp-color-palette-integration-gunmetal-100`
- `--sp-color-palette-integration-gunmetal-200`
- `--sp-color-palette-integration-gunmetal-300`
- `--sp-color-palette-integration-gunmetal-400`
- `--sp-color-palette-integration-gunmetal-500`
- `--sp-color-palette-integration-gunmetal-600`
- `--sp-color-palette-integration-gunmetal-700`
- `--sp-color-palette-integration-gunmetal-800`
- `--sp-color-palette-integration-gunmetal-900`
- `--sp-color-palette-integration-gunmetal-950`
- `--sp-color-palette-integration-signal-blue-50`
- `--sp-color-palette-integration-signal-blue-100`
- `--sp-color-palette-integration-signal-blue-200`
- `--sp-color-palette-integration-signal-blue-300`
- `--sp-color-palette-integration-signal-blue-400`
- `--sp-color-palette-integration-signal-blue-500`
- `--sp-color-palette-integration-signal-blue-600`
- `--sp-color-palette-integration-signal-blue-700`
- `--sp-color-palette-integration-signal-blue-800`
- `--sp-color-palette-integration-signal-blue-900`
- `--sp-color-palette-integration-signal-blue-950`
- `--sp-color-palette-integration-icy-blue-50`
- `--sp-color-palette-integration-icy-blue-100`
- `--sp-color-palette-integration-icy-blue-200`
- `--sp-color-palette-integration-icy-blue-300`
- `--sp-color-palette-integration-icy-blue-400`
- `--sp-color-palette-integration-icy-blue-500`
- `--sp-color-palette-integration-icy-blue-600`
- `--sp-color-palette-integration-icy-blue-700`
- `--sp-color-palette-integration-icy-blue-800`
- `--sp-color-palette-integration-icy-blue-900`
- `--sp-color-palette-integration-icy-blue-950`
- `--sp-color-palette-phcdevworks-raspberry-red-50`
- `--sp-color-palette-phcdevworks-raspberry-red-100`
- `--sp-color-palette-phcdevworks-raspberry-red-200`
- `--sp-color-palette-phcdevworks-raspberry-red-300`
- `--sp-color-palette-phcdevworks-raspberry-red-400`
- `--sp-color-palette-phcdevworks-raspberry-red-500`
- `--sp-color-palette-phcdevworks-raspberry-red-600`
- `--sp-color-palette-phcdevworks-raspberry-red-700`
- `--sp-color-palette-phcdevworks-raspberry-red-800`
- `--sp-color-palette-phcdevworks-raspberry-red-900`
- `--sp-color-palette-phcdevworks-raspberry-red-950`
- `--sp-color-palette-phcdevworks-deep-space-blue-50`
- `--sp-color-palette-phcdevworks-deep-space-blue-100`
- `--sp-color-palette-phcdevworks-deep-space-blue-200`
- `--sp-color-palette-phcdevworks-deep-space-blue-300`
- `--sp-color-palette-phcdevworks-deep-space-blue-400`
- `--sp-color-palette-phcdevworks-deep-space-blue-500`
- `--sp-color-palette-phcdevworks-deep-space-blue-600`
- `--sp-color-palette-phcdevworks-deep-space-blue-700`
- `--sp-color-palette-phcdevworks-deep-space-blue-800`
- `--sp-color-palette-phcdevworks-deep-space-blue-900`
- `--sp-color-palette-phcdevworks-deep-space-blue-950`
- `--sp-color-palette-phcdevworks-paper-50`
- `--sp-color-palette-phcdevworks-paper-100`
- `--sp-color-palette-phcdevworks-paper-200`
- `--sp-color-palette-phcdevworks-paper-300`
- `--sp-color-palette-phcdevworks-paper-400`
- `--sp-color-palette-phcdevworks-paper-500`
- `--sp-color-palette-phcdevworks-paper-600`
- `--sp-color-palette-phcdevworks-paper-700`
- `--sp-color-palette-phcdevworks-paper-800`
- `--sp-color-palette-phcdevworks-paper-900`
- `--sp-color-palette-phcdevworks-paper-950`

</details>
<details>
<summary><code>space</code> (22)</summary>

- `--sp-space-0`
- `--sp-space-1`
- `--sp-space-2`
- `--sp-space-4`
- `--sp-space-6`
- `--sp-space-8`
- `--sp-space-10`
- `--sp-space-12`
- `--sp-space-14`
- `--sp-space-16`
- `--sp-space-20`
- `--sp-space-24`
- `--sp-space-28`
- `--sp-space-32`
- `--sp-space-40`
- `--sp-space-48`
- `--sp-space-56`
- `--sp-space-64`
- `--sp-space-72`
- `--sp-space-80`
- `--sp-space-96`
- `--sp-space-240`

</details>
<details>
<summary><code>layout-container</code> (6)</summary>

- `--sp-layout-container-padding-inline-sm`
- `--sp-layout-container-padding-inline-md`
- `--sp-layout-container-padding-inline-lg`
- `--sp-layout-container-max-width`
- `--sp-layout-container-max-width-prose`
- `--sp-layout-container-max-width-wide`

</details>
<details>
<summary><code>layout-section</code> (6)</summary>

- `--sp-layout-section-padding-sm`
- `--sp-layout-section-padding-md`
- `--sp-layout-section-padding-lg`
- `--sp-layout-section-gap-sm`
- `--sp-layout-section-gap-md`
- `--sp-layout-section-gap-lg`

</details>
<details>
<summary><code>layout-stack</code> (3)</summary>

- `--sp-layout-stack-gap-sm`
- `--sp-layout-stack-gap-md`
- `--sp-layout-stack-gap-lg`

</details>
<details>
<summary><code>layout-sidebar</code> (1)</summary>

- `--sp-layout-sidebar-width`

</details>
<details>
<summary><code>radius</code> (9)</summary>

- `--sp-radius-none`
- `--sp-radius-sm`
- `--sp-radius-md`
- `--sp-radius-lg`
- `--sp-radius-xl`
- `--sp-radius-2xl`
- `--sp-radius-3xl`
- `--sp-radius-4xl`
- `--sp-radius-pill`

</details>
<details>
<summary><code>border</code> (7)</summary>

- `--sp-border-width-none`
- `--sp-border-width-base`
- `--sp-border-width-thick`
- `--sp-border-style-none`
- `--sp-border-style-solid`
- `--sp-border-style-dashed`
- `--sp-border-style-dotted`

</details>
<details>
<summary><code>shadow</code> (11)</summary>

- `--sp-shadow-none`
- `--sp-shadow-sm`
- `--sp-shadow-md`
- `--sp-shadow-lg`
- `--sp-shadow-xl`
- `--sp-shadow-2xl`
- `--sp-shadow-inset-sm`
- `--sp-shadow-inset-md`
- `--sp-shadow-inset-lg`
- `--sp-shadow-inset-xl`
- `--sp-shadow-inset-2xl`

</details>
<details>
<summary><code>opacity</code> (7)</summary>

- `--sp-opacity-disabled`
- `--sp-opacity-hover`
- `--sp-opacity-active`
- `--sp-opacity-loading`
- `--sp-opacity-focus`
- `--sp-opacity-overlay`
- `--sp-opacity-tooltip`

</details>
<details>
<summary><code>z-index</code> (9)</summary>

- `--sp-z-index-base`
- `--sp-z-index-dropdown`
- `--sp-z-index-sticky`
- `--sp-z-index-fixed`
- `--sp-z-index-overlay`
- `--sp-z-index-modal`
- `--sp-z-index-popover`
- `--sp-z-index-tooltip`
- `--sp-z-index-toast`

</details>
<details>
<summary><code>breakpoint</code> (5)</summary>

- `--sp-breakpoint-sm`
- `--sp-breakpoint-md`
- `--sp-breakpoint-lg`
- `--sp-breakpoint-xl`
- `--sp-breakpoint-2xl`

</details>
<details>
<summary><code>motion</code> (64)</summary>

- `--sp-duration-reduced`
- `--sp-duration-instant`
- `--sp-duration-fast`
- `--sp-duration-base`
- `--sp-duration-relaxed`
- `--sp-duration-moderate`
- `--sp-duration-slow`
- `--sp-duration-slower`
- `--sp-duration-long`
- `--sp-duration-slowest`
- `--sp-easing-linear`
- `--sp-easing-in`
- `--sp-easing-out`
- `--sp-easing-inout`
- `--sp-easing-spring`
- `--sp-easing-overshoot`
- `--sp-animation-fadein-duration`
- `--sp-animation-fadein-easing`
- `--sp-animation-fadein-keyframes`
- `--sp-animation-fadeout-duration`
- `--sp-animation-fadeout-easing`
- `--sp-animation-fadeout-keyframes`
- `--sp-animation-slideup-duration`
- `--sp-animation-slideup-easing`
- `--sp-animation-slideup-keyframes`
- `--sp-animation-slidedown-duration`
- `--sp-animation-slidedown-easing`
- `--sp-animation-slidedown-keyframes`
- `--sp-animation-scalein-duration`
- `--sp-animation-scalein-easing`
- `--sp-animation-scalein-keyframes`
- `--sp-animation-bounce-duration`
- `--sp-animation-bounce-easing`
- `--sp-animation-bounce-keyframes`
- `--sp-animation-shake-duration`
- `--sp-animation-shake-easing`
- `--sp-animation-shake-keyframes`
- `--sp-animation-pulse-duration`
- `--sp-animation-pulse-easing`
- `--sp-animation-pulse-keyframes`
- `--sp-animation-reduced-motion-fadein-duration`
- `--sp-animation-reduced-motion-fadein-easing`
- `--sp-animation-reduced-motion-fadein-keyframes`
- `--sp-animation-reduced-motion-fadeout-duration`
- `--sp-animation-reduced-motion-fadeout-easing`
- `--sp-animation-reduced-motion-fadeout-keyframes`
- `--sp-animation-reduced-motion-slideup-duration`
- `--sp-animation-reduced-motion-slideup-easing`
- `--sp-animation-reduced-motion-slideup-keyframes`
- `--sp-animation-reduced-motion-slidedown-duration`
- `--sp-animation-reduced-motion-slidedown-easing`
- `--sp-animation-reduced-motion-slidedown-keyframes`
- `--sp-animation-reduced-motion-scalein-duration`
- `--sp-animation-reduced-motion-scalein-easing`
- `--sp-animation-reduced-motion-scalein-keyframes`
- `--sp-animation-reduced-motion-bounce-duration`
- `--sp-animation-reduced-motion-bounce-easing`
- `--sp-animation-reduced-motion-bounce-keyframes`
- `--sp-animation-reduced-motion-shake-duration`
- `--sp-animation-reduced-motion-shake-easing`
- `--sp-animation-reduced-motion-shake-keyframes`
- `--sp-animation-reduced-motion-pulse-duration`
- `--sp-animation-reduced-motion-pulse-easing`
- `--sp-animation-reduced-motion-pulse-keyframes`

</details>
<details>
<summary><code>tracking</code> (7)</summary>

- `--sp-tracking-tightest`
- `--sp-tracking-tighter`
- `--sp-tracking-tight`
- `--sp-tracking-normal`
- `--sp-tracking-wide`
- `--sp-tracking-wider`
- `--sp-tracking-widest`

</details>
<details>
<summary><code>icon</code> (7)</summary>

- `--sp-icon-xs`
- `--sp-icon-sm`
- `--sp-icon-md`
- `--sp-icon-lg`
- `--sp-icon-xl`
- `--sp-icon-2xl`
- `--sp-icon-3xl`

</details>
<details>
<summary><code>aspect-ratio</code> (7)</summary>

- `--sp-aspect-ratio-square`
- `--sp-aspect-ratio-video`
- `--sp-aspect-ratio-classic`
- `--sp-aspect-ratio-portrait`
- `--sp-aspect-ratio-landscape`
- `--sp-aspect-ratio-ultrawide`
- `--sp-aspect-ratio-hero`

</details>
<details>
<summary><code>font-family</code> (3)</summary>

- `--sp-font-family-sans`
- `--sp-font-family-serif`
- `--sp-font-family-mono`

</details>
<details>
<summary><code>font-scale</code> (40)</summary>

- `--sp-font-xs-size`
- `--sp-font-xs-line-height`
- `--sp-font-xs-weight`
- `--sp-font-sm-size`
- `--sp-font-sm-line-height`
- `--sp-font-sm-weight`
- `--sp-font-md-size`
- `--sp-font-md-line-height`
- `--sp-font-md-weight`
- `--sp-font-lg-size`
- `--sp-font-lg-line-height`
- `--sp-font-lg-weight`
- `--sp-font-xl-size`
- `--sp-font-xl-line-height`
- `--sp-font-xl-weight`
- `--sp-font-2xl-size`
- `--sp-font-2xl-line-height`
- `--sp-font-2xl-weight`
- `--sp-font-3xl-size`
- `--sp-font-3xl-line-height`
- `--sp-font-3xl-weight`
- `--sp-font-4xl-size`
- `--sp-font-4xl-line-height`
- `--sp-font-4xl-weight`
- `--sp-font-5xl-size`
- `--sp-font-5xl-line-height`
- `--sp-font-5xl-weight`
- `--sp-font-6xl-size`
- `--sp-font-6xl-line-height`
- `--sp-font-6xl-weight`
- `--sp-font-xs-letter-spacing`
- `--sp-font-sm-letter-spacing`
- `--sp-font-md-letter-spacing`
- `--sp-font-lg-letter-spacing`
- `--sp-font-xl-letter-spacing`
- `--sp-font-2xl-letter-spacing`
- `--sp-font-3xl-letter-spacing`
- `--sp-font-4xl-letter-spacing`
- `--sp-font-5xl-letter-spacing`
- `--sp-font-6xl-letter-spacing`

</details>
<details>
<summary><code>accessibility</code> (7)</summary>

- `--sp-focus-ring-width`
- `--sp-focus-ring-offset`
- `--sp-focus-ring-style`
- `--sp-min-touch-target`
- `--sp-min-text-size`
- `--sp-reduced-motion`
- `--sp-forced-colors`

</details>

## Semantic roles

| Family | Variables | Count | Dark mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `surface` | `--sp-surface-*` | 11 | yes | `surface`, `modes.*.surface` |
| `text` | `--sp-text-*` | 12 | yes | `text`, `modes.*.text` |
| `link` | `--sp-link-*` | 6 | yes | `link` |

<details>
<summary><code>surface</code> (11)</summary>

- `--sp-surface-page` (dark mode)
- `--sp-surface-card` (dark mode)
- `--sp-surface-input` (dark mode)
- `--sp-surface-overlay` (dark mode)
- `--sp-surface-subtle` (dark mode)
- `--sp-surface-hero` (dark mode)
- `--sp-surface-hover` (dark mode)
- `--sp-surface-selected` (dark mode)
- `--sp-surface-active` (dark mode)
- `--sp-surface-divider` (dark mode)
- `--sp-surface-inverse` (dark mode)

</details>
<details>
<summary><code>text</code> (12)</summary>

- `--sp-text-on-page-default` (dark mode)
- `--sp-text-on-page-muted` (dark mode)
- `--sp-text-on-page-subtle` (dark mode)
- `--sp-text-on-page-meta` (dark mode)
- `--sp-text-on-page-brand` (dark mode)
- `--sp-text-on-surface-default` (dark mode)
- `--sp-text-on-surface-muted` (dark mode)
- `--sp-text-on-surface-subtle` (dark mode)
- `--sp-text-on-surface-meta` (dark mode)
- `--sp-text-on-surface-brand` (dark mode)
- `--sp-text-on-inverse-default` (dark mode)
- `--sp-text-on-inverse-muted` (dark mode)

</details>
<details>
<summary><code>link</code> (6)</summary>

- `--sp-link-default` (dark mode)
- `--sp-link-hover` (dark mode)
- `--sp-link-active` (dark mode)
- `--sp-link-visited` (dark mode)
- `--sp-link-on-inverse` (dark mode)
- `--sp-link-on-inverse-hover` (dark mode)

</details>

## Typography roles

| Family | Variables | Count | Dark mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `heading` | `--sp-heading-*` | 30 | no | `typography.heading` |
| `body` | `--sp-body-*` | 5 | no | `typography.body` |
| `display` | `--sp-display-*` | 30 | no | `typography.display` |
| `lead` | `--sp-lead-*` | 5 | no | `typography.lead` |

<details>
<summary><code>heading</code> (30)</summary>

- `--sp-heading-h1-family`
- `--sp-heading-h1-size`
- `--sp-heading-h1-line-height`
- `--sp-heading-h1-weight`
- `--sp-heading-h1-letter-spacing`
- `--sp-heading-h2-family`
- `--sp-heading-h2-size`
- `--sp-heading-h2-line-height`
- `--sp-heading-h2-weight`
- `--sp-heading-h2-letter-spacing`
- `--sp-heading-h3-family`
- `--sp-heading-h3-size`
- `--sp-heading-h3-line-height`
- `--sp-heading-h3-weight`
- `--sp-heading-h3-letter-spacing`
- `--sp-heading-h4-family`
- `--sp-heading-h4-size`
- `--sp-heading-h4-line-height`
- `--sp-heading-h4-weight`
- `--sp-heading-h4-letter-spacing`
- `--sp-heading-h5-family`
- `--sp-heading-h5-size`
- `--sp-heading-h5-line-height`
- `--sp-heading-h5-weight`
- `--sp-heading-h5-letter-spacing`
- `--sp-heading-h6-family`
- `--sp-heading-h6-size`
- `--sp-heading-h6-line-height`
- `--sp-heading-h6-weight`
- `--sp-heading-h6-letter-spacing`

</details>
<details>
<summary><code>body</code> (5)</summary>

- `--sp-body-family`
- `--sp-body-size`
- `--sp-body-line-height`
- `--sp-body-weight`
- `--sp-body-letter-spacing`

</details>
<details>
<summary><code>display</code> (30)</summary>

- `--sp-display-1-family`
- `--sp-display-1-size`
- `--sp-display-1-line-height`
- `--sp-display-1-weight`
- `--sp-display-1-letter-spacing`
- `--sp-display-2-family`
- `--sp-display-2-size`
- `--sp-display-2-line-height`
- `--sp-display-2-weight`
- `--sp-display-2-letter-spacing`
- `--sp-display-3-family`
- `--sp-display-3-size`
- `--sp-display-3-line-height`
- `--sp-display-3-weight`
- `--sp-display-3-letter-spacing`
- `--sp-display-4-family`
- `--sp-display-4-size`
- `--sp-display-4-line-height`
- `--sp-display-4-weight`
- `--sp-display-4-letter-spacing`
- `--sp-display-5-family`
- `--sp-display-5-size`
- `--sp-display-5-line-height`
- `--sp-display-5-weight`
- `--sp-display-5-letter-spacing`
- `--sp-display-6-family`
- `--sp-display-6-size`
- `--sp-display-6-line-height`
- `--sp-display-6-weight`
- `--sp-display-6-letter-spacing`

</details>
<details>
<summary><code>lead</code> (5)</summary>

- `--sp-lead-family`
- `--sp-lead-size`
- `--sp-lead-line-height`
- `--sp-lead-weight`
- `--sp-lead-letter-spacing`

</details>

## Controls

| Family | Variables | Count | Dark mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `button` | `--sp-button-*` | 104 | 2 of 104 | `buttons`, `component.button`, `modes.*.component.button` |
| `form` | `--sp-form-*` | 18 | 3 of 18 | `forms`, `modes.*.forms` |

<details>
<summary><code>button</code> (104)</summary>

- `--sp-button-text-default` (dark mode)
- `--sp-button-text-on-primary` (dark mode)
- `--sp-button-primary-bg`
- `--sp-button-primary-bghover`
- `--sp-button-primary-bgactive`
- `--sp-button-primary-bgdisabled`
- `--sp-button-primary-text`
- `--sp-button-primary-textdisabled`
- `--sp-button-primary-focusring`
- `--sp-button-primary-focusvisible`
- `--sp-button-secondary-bg`
- `--sp-button-secondary-bghover`
- `--sp-button-secondary-bgactive`
- `--sp-button-secondary-bgdisabled`
- `--sp-button-secondary-text`
- `--sp-button-secondary-textdisabled`
- `--sp-button-secondary-border`
- `--sp-button-secondary-borderdisabled`
- `--sp-button-secondary-focusring`
- `--sp-button-secondary-focusvisible`
- `--sp-button-ghost-bg`
- `--sp-button-ghost-bghover`
- `--sp-button-ghost-bgactive`
- `--sp-button-ghost-bgdisabled`
- `--sp-button-ghost-text`
- `--sp-button-ghost-textdisabled`
- `--sp-button-ghost-focusring`
- `--sp-button-ghost-focusvisible`
- `--sp-button-danger-bg`
- `--sp-button-danger-bghover`
- `--sp-button-danger-bgactive`
- `--sp-button-danger-bgdisabled`
- `--sp-button-danger-text`
- `--sp-button-danger-textdisabled`
- `--sp-button-danger-focusring`
- `--sp-button-danger-focusvisible`
- `--sp-button-success-bg`
- `--sp-button-success-bghover`
- `--sp-button-success-bgactive`
- `--sp-button-success-bgdisabled`
- `--sp-button-success-text`
- `--sp-button-success-textdisabled`
- `--sp-button-success-focusring`
- `--sp-button-success-focusvisible`
- `--sp-button-warning-bg`
- `--sp-button-warning-bghover`
- `--sp-button-warning-bgactive`
- `--sp-button-warning-bgdisabled`
- `--sp-button-warning-text`
- `--sp-button-warning-textdisabled`
- `--sp-button-warning-focusring`
- `--sp-button-warning-focusvisible`
- `--sp-button-link-bg`
- `--sp-button-link-bghover`
- `--sp-button-link-bgactive`
- `--sp-button-link-bgdisabled`
- `--sp-button-link-text`
- `--sp-button-link-texthover`
- `--sp-button-link-textactive`
- `--sp-button-link-textdisabled`
- `--sp-button-link-focusring`
- `--sp-button-link-focusvisible`
- `--sp-button-light-bg`
- `--sp-button-light-bghover`
- `--sp-button-light-bgactive`
- `--sp-button-light-bgdisabled`
- `--sp-button-light-text`
- `--sp-button-light-textdisabled`
- `--sp-button-light-focusring`
- `--sp-button-light-focusvisible`
- `--sp-button-dark-bg`
- `--sp-button-dark-bghover`
- `--sp-button-dark-bgactive`
- `--sp-button-dark-bgdisabled`
- `--sp-button-dark-text`
- `--sp-button-dark-textdisabled`
- `--sp-button-dark-focusring`
- `--sp-button-dark-focusvisible`
- `--sp-button-cta-bg`
- `--sp-button-cta-bghover`
- `--sp-button-cta-bgactive`
- `--sp-button-cta-bgdisabled`
- `--sp-button-cta-text`
- `--sp-button-cta-textdisabled`
- `--sp-button-cta-shadow`
- `--sp-button-cta-focusring`
- `--sp-button-accent-bg`
- `--sp-button-accent-bghover`
- `--sp-button-accent-bgactive`
- `--sp-button-accent-bgdisabled`
- `--sp-button-accent-text`
- `--sp-button-accent-textdisabled`
- `--sp-button-accent-focusring`
- `--sp-button-accent-focusvisible`
- `--sp-button-inverse-bg`
- `--sp-button-inverse-bghover`
- `--sp-button-inverse-bgactive`
- `--sp-button-inverse-bgdisabled`
- `--sp-button-inverse-text`
- `--sp-button-inverse-textdisabled`
- `--sp-button-inverse-border`
- `--sp-button-inverse-borderdisabled`
- `--sp-button-inverse-focusring`
- `--sp-button-inverse-focusvisible`

</details>
<details>
<summary><code>form</code> (18)</summary>

- `--sp-form-default-bg` (dark mode)
- `--sp-form-default-text` (dark mode)
- `--sp-form-default-placeholder` (dark mode)
- `--sp-form-default-border`
- `--sp-form-hover-border`
- `--sp-form-focus-border`
- `--sp-form-focus-ring`
- `--sp-form-focusvisible-border`
- `--sp-form-focusvisible-ring`
- `--sp-form-valid-border`
- `--sp-form-valid-bg`
- `--sp-form-valid-text`
- `--sp-form-invalid-border`
- `--sp-form-invalid-bg`
- `--sp-form-invalid-text`
- `--sp-form-disabled-bg`
- `--sp-form-disabled-border`
- `--sp-form-disabled-text`

</details>

## Components

| Family | Variables | Count | Dark mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `card` | `--sp-component-card-*` | 13 | yes | `component.card`, `modes.*.component.card` |
| `choice-card` | `--sp-choice-card-*` | 9 | yes | `component.choiceCard`, `modes.*.component.choiceCard` |
| `input` | `--sp-component-input-*` | 2 | yes | `component.input`, `modes.*.component.input` |
| `badge` | `--sp-badge-*` | 31 | yes | `component.badge`, `modes.*.component.badge` |
| `icon-box` | `--sp-icon-box-*` | 6 | yes | `component.iconBox`, `modes.*.component.iconBox` |
| `testimonial` | `--sp-testimonial-*` | 15 | yes | `component.testimonial`, `modes.*.component.testimonial` |
| `pricing-card` | `--sp-pricing-card-*` | 17 | yes | `component.pricingCard`, `modes.*.component.pricingCard` |
| `rating` | `--sp-rating-*` | 3 | yes | `component.rating`, `modes.*.component.rating` |
| `nav` | `--sp-nav-*` | 14 | yes | `component.nav`, `modes.*.component.nav` |
| `footer` | `--sp-footer-*` | 17 | yes | `component.footer`, `modes.*.component.footer` |
| `modal` | `--sp-modal-*` | 12 | yes | `component.modal`, `modes.*.component.modal` |
| `toast` | `--sp-toast-*` | 28 | yes | `component.toast`, `modes.*.component.toast` |
| `tooltip` | `--sp-tooltip-*` | 11 | yes | `component.tooltip`, `modes.*.component.tooltip` |
| `dropdown` | `--sp-dropdown-*` | 19 | yes | `component.dropdown`, `modes.*.component.dropdown` |
| `tabs` | `--sp-tabs-*` | 11 | yes | `component.tabs`, `modes.*.component.tabs` |
| `accordion` | `--sp-accordion-*` | 6 | yes | `component.accordion`, `modes.*.component.accordion` |
| `breadcrumb` | `--sp-breadcrumb-*` | 4 | yes | `component.breadcrumb`, `modes.*.component.breadcrumb` |
| `list-group` | `--sp-list-group-*` | 18 | yes | `component.listGroup`, `modes.*.component.listGroup` |
| `offcanvas` | `--sp-offcanvas-*` | 4 | yes | `component.offcanvas`, `modes.*.component.offcanvas` |
| `carousel` | `--sp-carousel-*` | 6 | yes | `component.carousel`, `modes.*.component.carousel` |
| `table` | `--sp-table-*` | 17 | yes | `component.table`, `modes.*.component.table` |
| `alert` | `--sp-alert-*` | 24 | yes | `component.alert`, `modes.*.component.alert` |
| `pagination` | `--sp-pagination-*` | 5 | yes | `component.pagination`, `modes.*.component.pagination` |
| `stepper` | `--sp-stepper-*` | 8 | yes | `component.stepper`, `modes.*.component.stepper` |
| `popover` | `--sp-popover-*` | 6 | yes | `component.popover`, `modes.*.component.popover` |
| `progress` | `--sp-progress-*` | 8 | yes | `component.progress`, `modes.*.component.progress` |
| `loading-indicator` | `--sp-loading-indicator-*` | 8 | yes | `component.loadingIndicator`, `modes.*.component.loadingIndicator` |
| `switch` | `--sp-switch-*` | 6 | yes | `component.switch`, `modes.*.component.switch` |
| `range` | `--sp-range-*` | 7 | yes | `component.range`, `modes.*.component.range` |
| `file-input` | `--sp-file-input-*` | 13 | yes | `component.fileInput`, `modes.*.component.fileInput` |
| `input-group` | `--sp-input-group-*` | 6 | yes | `component.inputGroup`, `modes.*.component.inputGroup` |
| `datepicker` | `--sp-datepicker-*` | 4 | yes | `component.datepicker`, `modes.*.component.datepicker` |
| `day` | `--sp-day-*` | 7 | yes | `component.day`, `modes.*.component.day` |
| `prose` | `--sp-prose-*` | 10 | yes | `component.prose`, `modes.*.component.prose` |
| `external-auth-button` | `--sp-external-auth-button-*` | 8 | yes | `component.externalAuthButton`, `modes.*.component.externalAuthButton` |
| `checkbox` | `--sp-checkbox-*` | 7 | yes | `component.checkbox`, `modes.*.component.checkbox` |
| `radio` | `--sp-radio-*` | 7 | yes | `component.radio`, `modes.*.component.radio` |
| `select` | `--sp-select-*` | 11 | yes | `component.select`, `modes.*.component.select` |
| `textarea` | `--sp-textarea-*` | 11 | yes | `component.textarea`, `modes.*.component.textarea` |
| `fieldset` | `--sp-fieldset-*` | 2 | yes | `component.fieldset`, `modes.*.component.fieldset` |
| `label` | `--sp-label-*` | 3 | yes | `component.label`, `modes.*.component.label` |

<details>
<summary><code>card</code> (13)</summary>

- `--sp-component-card-text` (dark mode)
- `--sp-component-card-text-muted` (dark mode)
- `--sp-component-card-accent-neutral` (dark mode)
- `--sp-component-card-accent-brand` (dark mode)
- `--sp-component-card-accent-info` (dark mode)
- `--sp-component-card-accent-success` (dark mode)
- `--sp-component-card-accent-warning` (dark mode)
- `--sp-component-card-accent-danger` (dark mode)
- `--sp-component-card-accent-cta` (dark mode)
- `--sp-component-card-padding-sm` (dark mode)
- `--sp-component-card-padding-md` (dark mode)
- `--sp-component-card-padding-lg` (dark mode)
- `--sp-component-card-accent-thickness` (dark mode)

</details>
<details>
<summary><code>choice-card</code> (9)</summary>

- `--sp-choice-card-bg` (dark mode)
- `--sp-choice-card-text` (dark mode)
- `--sp-choice-card-border` (dark mode)
- `--sp-choice-card-hover-border` (dark mode)
- `--sp-choice-card-selected-bg` (dark mode)
- `--sp-choice-card-selected-border` (dark mode)
- `--sp-choice-card-disabled-bg` (dark mode)
- `--sp-choice-card-disabled-text` (dark mode)
- `--sp-choice-card-focus-ring` (dark mode)

</details>
<details>
<summary><code>input</code> (2)</summary>

- `--sp-component-input-text` (dark mode)
- `--sp-component-input-placeholder` (dark mode)

</details>
<details>
<summary><code>badge</code> (31)</summary>

- `--sp-badge-neutral-bg` (dark mode)
- `--sp-badge-neutral-bg-hover` (dark mode)
- `--sp-badge-neutral-text` (dark mode)
- `--sp-badge-brand-bg` (dark mode)
- `--sp-badge-brand-bg-hover` (dark mode)
- `--sp-badge-brand-text` (dark mode)
- `--sp-badge-info-bg` (dark mode)
- `--sp-badge-info-bg-hover` (dark mode)
- `--sp-badge-info-text` (dark mode)
- `--sp-badge-success-bg` (dark mode)
- `--sp-badge-success-text` (dark mode)
- `--sp-badge-warning-bg` (dark mode)
- `--sp-badge-warning-text` (dark mode)
- `--sp-badge-danger-bg` (dark mode)
- `--sp-badge-danger-text` (dark mode)
- `--sp-badge-accent-neutral` (dark mode)
- `--sp-badge-accent-brand` (dark mode)
- `--sp-badge-accent-info` (dark mode)
- `--sp-badge-accent-success` (dark mode)
- `--sp-badge-accent-warning` (dark mode)
- `--sp-badge-accent-danger` (dark mode)
- `--sp-badge-accent-cta` (dark mode)
- `--sp-badge-success-bg-hover` (dark mode)
- `--sp-badge-warning-bg-hover` (dark mode)
- `--sp-badge-danger-bg-hover` (dark mode)
- `--sp-badge-inverse-bg` (dark mode)
- `--sp-badge-inverse-bg-hover` (dark mode)
- `--sp-badge-inverse-text` (dark mode)
- `--sp-badge-inverse-border` (dark mode)
- `--sp-badge-dot-border` (dark mode)
- `--sp-badge-accent-thickness` (dark mode)

</details>
<details>
<summary><code>icon-box</code> (6)</summary>

- `--sp-icon-box-bg` (dark mode)
- `--sp-icon-box-border` (dark mode)
- `--sp-icon-box-icon-default` (dark mode)
- `--sp-icon-box-icon-success` (dark mode)
- `--sp-icon-box-icon-warning` (dark mode)
- `--sp-icon-box-icon-danger` (dark mode)

</details>
<details>
<summary><code>testimonial</code> (15)</summary>

- `--sp-testimonial-bg` (dark mode)
- `--sp-testimonial-bg-hover` (dark mode)
- `--sp-testimonial-border` (dark mode)
- `--sp-testimonial-text` (dark mode)
- `--sp-testimonial-author-name` (dark mode)
- `--sp-testimonial-author-title` (dark mode)
- `--sp-testimonial-quote-mark` (dark mode)
- `--sp-testimonial-accent-neutral` (dark mode)
- `--sp-testimonial-accent-brand` (dark mode)
- `--sp-testimonial-accent-info` (dark mode)
- `--sp-testimonial-accent-success` (dark mode)
- `--sp-testimonial-accent-warning` (dark mode)
- `--sp-testimonial-accent-danger` (dark mode)
- `--sp-testimonial-accent-cta` (dark mode)
- `--sp-testimonial-accent-thickness` (dark mode)

</details>
<details>
<summary><code>pricing-card</code> (17)</summary>

- `--sp-pricing-card-bg` (dark mode)
- `--sp-pricing-card-bg-hover` (dark mode)
- `--sp-pricing-card-border` (dark mode)
- `--sp-pricing-card-featured-bg` (dark mode)
- `--sp-pricing-card-featured-text` (dark mode)
- `--sp-pricing-card-featured-badge-bg` (dark mode)
- `--sp-pricing-card-featured-badge-text` (dark mode)
- `--sp-pricing-card-price` (dark mode)
- `--sp-pricing-card-price-description` (dark mode)
- `--sp-pricing-card-accent-neutral` (dark mode)
- `--sp-pricing-card-accent-brand` (dark mode)
- `--sp-pricing-card-accent-info` (dark mode)
- `--sp-pricing-card-accent-success` (dark mode)
- `--sp-pricing-card-accent-warning` (dark mode)
- `--sp-pricing-card-accent-danger` (dark mode)
- `--sp-pricing-card-accent-cta` (dark mode)
- `--sp-pricing-card-accent-thickness` (dark mode)

</details>
<details>
<summary><code>rating</code> (3)</summary>

- `--sp-rating-star-filled` (dark mode)
- `--sp-rating-star-empty` (dark mode)
- `--sp-rating-text` (dark mode)

</details>
<details>
<summary><code>nav</code> (14)</summary>

- `--sp-nav-bg` (dark mode)
- `--sp-nav-text` (dark mode)
- `--sp-nav-link` (dark mode)
- `--sp-nav-link-hover` (dark mode)
- `--sp-nav-link-active` (dark mode)
- `--sp-nav-border` (dark mode)
- `--sp-nav-accent-neutral` (dark mode)
- `--sp-nav-accent-brand` (dark mode)
- `--sp-nav-accent-info` (dark mode)
- `--sp-nav-accent-success` (dark mode)
- `--sp-nav-accent-warning` (dark mode)
- `--sp-nav-accent-danger` (dark mode)
- `--sp-nav-accent-cta` (dark mode)
- `--sp-nav-accent-thickness` (dark mode)

</details>
<details>
<summary><code>footer</code> (17)</summary>

- `--sp-footer-bg` (dark mode)
- `--sp-footer-text` (dark mode)
- `--sp-footer-heading` (dark mode)
- `--sp-footer-muted` (dark mode)
- `--sp-footer-link` (dark mode)
- `--sp-footer-link-hover` (dark mode)
- `--sp-footer-border` (dark mode)
- `--sp-footer-divider` (dark mode)
- `--sp-footer-chip-bg` (dark mode)
- `--sp-footer-accent-neutral` (dark mode)
- `--sp-footer-accent-brand` (dark mode)
- `--sp-footer-accent-info` (dark mode)
- `--sp-footer-accent-success` (dark mode)
- `--sp-footer-accent-warning` (dark mode)
- `--sp-footer-accent-danger` (dark mode)
- `--sp-footer-accent-cta` (dark mode)
- `--sp-footer-accent-thickness` (dark mode)

</details>
<details>
<summary><code>modal</code> (12)</summary>

- `--sp-modal-bg` (dark mode)
- `--sp-modal-shadow` (dark mode)
- `--sp-modal-border` (dark mode)
- `--sp-modal-overlay` (dark mode)
- `--sp-modal-accent-neutral` (dark mode)
- `--sp-modal-accent-brand` (dark mode)
- `--sp-modal-accent-info` (dark mode)
- `--sp-modal-accent-success` (dark mode)
- `--sp-modal-accent-warning` (dark mode)
- `--sp-modal-accent-danger` (dark mode)
- `--sp-modal-accent-cta` (dark mode)
- `--sp-modal-accent-thickness` (dark mode)

</details>
<details>
<summary><code>toast</code> (28)</summary>

- `--sp-toast-neutral-bg` (dark mode)
- `--sp-toast-neutral-text` (dark mode)
- `--sp-toast-neutral-border` (dark mode)
- `--sp-toast-neutral-icon` (dark mode)
- `--sp-toast-success-bg` (dark mode)
- `--sp-toast-success-text` (dark mode)
- `--sp-toast-success-border` (dark mode)
- `--sp-toast-success-icon` (dark mode)
- `--sp-toast-warning-bg` (dark mode)
- `--sp-toast-warning-text` (dark mode)
- `--sp-toast-warning-border` (dark mode)
- `--sp-toast-warning-icon` (dark mode)
- `--sp-toast-danger-bg` (dark mode)
- `--sp-toast-danger-text` (dark mode)
- `--sp-toast-danger-border` (dark mode)
- `--sp-toast-danger-icon` (dark mode)
- `--sp-toast-info-bg` (dark mode)
- `--sp-toast-info-text` (dark mode)
- `--sp-toast-info-border` (dark mode)
- `--sp-toast-info-icon` (dark mode)
- `--sp-toast-accent-neutral` (dark mode)
- `--sp-toast-accent-brand` (dark mode)
- `--sp-toast-accent-info` (dark mode)
- `--sp-toast-accent-success` (dark mode)
- `--sp-toast-accent-warning` (dark mode)
- `--sp-toast-accent-danger` (dark mode)
- `--sp-toast-accent-cta` (dark mode)
- `--sp-toast-accent-thickness` (dark mode)

</details>
<details>
<summary><code>tooltip</code> (11)</summary>

- `--sp-tooltip-bg` (dark mode)
- `--sp-tooltip-text` (dark mode)
- `--sp-tooltip-border` (dark mode)
- `--sp-tooltip-accent-neutral` (dark mode)
- `--sp-tooltip-accent-brand` (dark mode)
- `--sp-tooltip-accent-info` (dark mode)
- `--sp-tooltip-accent-success` (dark mode)
- `--sp-tooltip-accent-warning` (dark mode)
- `--sp-tooltip-accent-danger` (dark mode)
- `--sp-tooltip-accent-cta` (dark mode)
- `--sp-tooltip-accent-thickness` (dark mode)

</details>
<details>
<summary><code>dropdown</code> (19)</summary>

- `--sp-dropdown-bg` (dark mode)
- `--sp-dropdown-border` (dark mode)
- `--sp-dropdown-item-default` (dark mode)
- `--sp-dropdown-item-hover` (dark mode)
- `--sp-dropdown-item-active` (dark mode)
- `--sp-dropdown-item-text` (dark mode)
- `--sp-dropdown-item-disabled-text` (dark mode)
- `--sp-dropdown-item-selected-bg` (dark mode)
- `--sp-dropdown-item-selected-text` (dark mode)
- `--sp-dropdown-accent-neutral` (dark mode)
- `--sp-dropdown-accent-brand` (dark mode)
- `--sp-dropdown-accent-info` (dark mode)
- `--sp-dropdown-accent-success` (dark mode)
- `--sp-dropdown-accent-warning` (dark mode)
- `--sp-dropdown-accent-danger` (dark mode)
- `--sp-dropdown-accent-cta` (dark mode)
- `--sp-dropdown-header` (dark mode)
- `--sp-dropdown-divider` (dark mode)
- `--sp-dropdown-accent-thickness` (dark mode)

</details>
<details>
<summary><code>tabs</code> (11)</summary>

- `--sp-tabs-list-bg` (dark mode)
- `--sp-tabs-list-border` (dark mode)
- `--sp-tabs-item-text` (dark mode)
- `--sp-tabs-item-hover-bg` (dark mode)
- `--sp-tabs-item-active-text` (dark mode)
- `--sp-tabs-item-active-indicator` (dark mode)
- `--sp-tabs-item-focus-ring-color` (dark mode)
- `--sp-tabs-item-disabled-text` (dark mode)
- `--sp-tabs-pill-active-bg` (dark mode)
- `--sp-tabs-pill-active-text` (dark mode)
- `--sp-tabs-panel-bg` (dark mode)

</details>
<details>
<summary><code>accordion</code> (6)</summary>

- `--sp-accordion-bg` (dark mode)
- `--sp-accordion-text` (dark mode)
- `--sp-accordion-border` (dark mode)
- `--sp-accordion-header-hover-bg` (dark mode)
- `--sp-accordion-icon-collapsed` (dark mode)
- `--sp-accordion-icon-expanded` (dark mode)

</details>
<details>
<summary><code>breadcrumb</code> (4)</summary>

- `--sp-breadcrumb-item-text` (dark mode)
- `--sp-breadcrumb-item-hover-text` (dark mode)
- `--sp-breadcrumb-item-active-text` (dark mode)
- `--sp-breadcrumb-separator` (dark mode)

</details>
<details>
<summary><code>list-group</code> (18)</summary>

- `--sp-list-group-bg` (dark mode)
- `--sp-list-group-border` (dark mode)
- `--sp-list-group-text` (dark mode)
- `--sp-list-group-heading` (dark mode)
- `--sp-list-group-muted` (dark mode)
- `--sp-list-group-item-hover-bg` (dark mode)
- `--sp-list-group-item-active-bg` (dark mode)
- `--sp-list-group-item-active-text` (dark mode)
- `--sp-list-group-item-selected-bg` (dark mode)
- `--sp-list-group-item-disabled-text` (dark mode)
- `--sp-list-group-accent-neutral` (dark mode)
- `--sp-list-group-accent-brand` (dark mode)
- `--sp-list-group-accent-info` (dark mode)
- `--sp-list-group-accent-success` (dark mode)
- `--sp-list-group-accent-warning` (dark mode)
- `--sp-list-group-accent-danger` (dark mode)
- `--sp-list-group-accent-cta` (dark mode)
- `--sp-list-group-accent-thickness` (dark mode)

</details>
<details>
<summary><code>offcanvas</code> (4)</summary>

- `--sp-offcanvas-bg` (dark mode)
- `--sp-offcanvas-text` (dark mode)
- `--sp-offcanvas-border` (dark mode)
- `--sp-offcanvas-overlay` (dark mode)

</details>
<details>
<summary><code>carousel</code> (6)</summary>

- `--sp-carousel-indicator-default` (dark mode)
- `--sp-carousel-indicator-active` (dark mode)
- `--sp-carousel-control-icon` (dark mode)
- `--sp-carousel-control-bg` (dark mode)
- `--sp-carousel-caption-bg` (dark mode)
- `--sp-carousel-caption-text` (dark mode)

</details>
<details>
<summary><code>table</code> (17)</summary>

- `--sp-table-header-bg` (dark mode)
- `--sp-table-header-text` (dark mode)
- `--sp-table-text` (dark mode)
- `--sp-table-divider` (dark mode)
- `--sp-table-stripe-bg` (dark mode)
- `--sp-table-hover-bg` (dark mode)
- `--sp-table-selected-bg` (dark mode)
- `--sp-table-row-neutral-bg` (dark mode)
- `--sp-table-row-neutral-text` (dark mode)
- `--sp-table-row-info-bg` (dark mode)
- `--sp-table-row-info-text` (dark mode)
- `--sp-table-row-success-bg` (dark mode)
- `--sp-table-row-success-text` (dark mode)
- `--sp-table-row-warning-bg` (dark mode)
- `--sp-table-row-warning-text` (dark mode)
- `--sp-table-row-danger-bg` (dark mode)
- `--sp-table-row-danger-text` (dark mode)

</details>
<details>
<summary><code>alert</code> (24)</summary>

- `--sp-alert-neutral-bg` (dark mode)
- `--sp-alert-neutral-text` (dark mode)
- `--sp-alert-neutral-border` (dark mode)
- `--sp-alert-neutral-icon` (dark mode)
- `--sp-alert-brand-bg` (dark mode)
- `--sp-alert-brand-text` (dark mode)
- `--sp-alert-brand-border` (dark mode)
- `--sp-alert-brand-icon` (dark mode)
- `--sp-alert-info-bg` (dark mode)
- `--sp-alert-info-text` (dark mode)
- `--sp-alert-info-border` (dark mode)
- `--sp-alert-info-icon` (dark mode)
- `--sp-alert-success-bg` (dark mode)
- `--sp-alert-success-text` (dark mode)
- `--sp-alert-success-border` (dark mode)
- `--sp-alert-success-icon` (dark mode)
- `--sp-alert-warning-bg` (dark mode)
- `--sp-alert-warning-text` (dark mode)
- `--sp-alert-warning-border` (dark mode)
- `--sp-alert-warning-icon` (dark mode)
- `--sp-alert-danger-bg` (dark mode)
- `--sp-alert-danger-text` (dark mode)
- `--sp-alert-danger-border` (dark mode)
- `--sp-alert-danger-icon` (dark mode)

</details>
<details>
<summary><code>pagination</code> (5)</summary>

- `--sp-pagination-item-text` (dark mode)
- `--sp-pagination-item-hover-bg` (dark mode)
- `--sp-pagination-item-active-bg` (dark mode)
- `--sp-pagination-item-active-text` (dark mode)
- `--sp-pagination-item-disabled-text` (dark mode)

</details>
<details>
<summary><code>stepper</code> (8)</summary>

- `--sp-stepper-step-pending-bg` (dark mode)
- `--sp-stepper-step-pending-text` (dark mode)
- `--sp-stepper-step-active-bg` (dark mode)
- `--sp-stepper-step-active-text` (dark mode)
- `--sp-stepper-step-done-bg` (dark mode)
- `--sp-stepper-step-done-text` (dark mode)
- `--sp-stepper-connector` (dark mode)
- `--sp-stepper-label-text` (dark mode)

</details>
<details>
<summary><code>popover</code> (6)</summary>

- `--sp-popover-bg` (dark mode)
- `--sp-popover-text` (dark mode)
- `--sp-popover-muted` (dark mode)
- `--sp-popover-border` (dark mode)
- `--sp-popover-shadow` (dark mode)
- `--sp-popover-arrow` (dark mode)

</details>
<details>
<summary><code>progress</code> (8)</summary>

- `--sp-progress-track-bg` (dark mode)
- `--sp-progress-indicator-neutral` (dark mode)
- `--sp-progress-indicator-brand` (dark mode)
- `--sp-progress-indicator-info` (dark mode)
- `--sp-progress-indicator-success` (dark mode)
- `--sp-progress-indicator-warning` (dark mode)
- `--sp-progress-indicator-danger` (dark mode)
- `--sp-progress-label-text` (dark mode)

</details>
<details>
<summary><code>loading-indicator</code> (8)</summary>

- `--sp-loading-indicator-default` (dark mode)
- `--sp-loading-indicator-muted` (dark mode)
- `--sp-loading-indicator-inverse` (dark mode)
- `--sp-loading-indicator-brand` (dark mode)
- `--sp-loading-indicator-info` (dark mode)
- `--sp-loading-indicator-success` (dark mode)
- `--sp-loading-indicator-warning` (dark mode)
- `--sp-loading-indicator-danger` (dark mode)

</details>
<details>
<summary><code>switch</code> (6)</summary>

- `--sp-switch-track-bg` (dark mode)
- `--sp-switch-track-checked-bg` (dark mode)
- `--sp-switch-thumb-bg` (dark mode)
- `--sp-switch-track-disabled-bg` (dark mode)
- `--sp-switch-thumb-disabled-bg` (dark mode)
- `--sp-switch-focus-ring` (dark mode)

</details>
<details>
<summary><code>range</code> (7)</summary>

- `--sp-range-track-bg` (dark mode)
- `--sp-range-track-filled-bg` (dark mode)
- `--sp-range-thumb-bg` (dark mode)
- `--sp-range-thumb-border` (dark mode)
- `--sp-range-track-disabled-bg` (dark mode)
- `--sp-range-thumb-disabled-border` (dark mode)
- `--sp-range-focus-ring` (dark mode)

</details>
<details>
<summary><code>file-input</code> (13)</summary>

- `--sp-file-input-bg` (dark mode)
- `--sp-file-input-border` (dark mode)
- `--sp-file-input-text` (dark mode)
- `--sp-file-input-action-bg` (dark mode)
- `--sp-file-input-action-text` (dark mode)
- `--sp-file-input-disabled-bg` (dark mode)
- `--sp-file-input-disabled-border` (dark mode)
- `--sp-file-input-disabled-text` (dark mode)
- `--sp-file-input-focus-border` (dark mode)
- `--sp-file-input-border-invalid` (dark mode)
- `--sp-file-input-bg-invalid` (dark mode)
- `--sp-file-input-border-success` (dark mode)
- `--sp-file-input-bg-success` (dark mode)

</details>
<details>
<summary><code>input-group</code> (6)</summary>

- `--sp-input-group-addon-bg` (dark mode)
- `--sp-input-group-addon-text` (dark mode)
- `--sp-input-group-addon-border` (dark mode)
- `--sp-input-group-focus-border` (dark mode)
- `--sp-input-group-disabled-bg` (dark mode)
- `--sp-input-group-disabled-text` (dark mode)

</details>
<details>
<summary><code>datepicker</code> (4)</summary>

- `--sp-datepicker-panel-bg` (dark mode)
- `--sp-datepicker-panel-border` (dark mode)
- `--sp-datepicker-header-text` (dark mode)
- `--sp-datepicker-weekday-text` (dark mode)

</details>
<details>
<summary><code>day</code> (7)</summary>

- `--sp-day-default-text` (dark mode)
- `--sp-day-default-hover-bg` (dark mode)
- `--sp-day-selected-bg` (dark mode)
- `--sp-day-selected-text` (dark mode)
- `--sp-day-today-ring-color` (dark mode)
- `--sp-day-outside-month-text` (dark mode)
- `--sp-day-disabled-text` (dark mode)

</details>
<details>
<summary><code>prose</code> (10)</summary>

- `--sp-prose-blockquote-border` (dark mode)
- `--sp-prose-blockquote-text` (dark mode)
- `--sp-prose-code-bg` (dark mode)
- `--sp-prose-code-text` (dark mode)
- `--sp-prose-code-block-bg` (dark mode)
- `--sp-prose-code-block-text` (dark mode)
- `--sp-prose-code-block-border` (dark mode)
- `--sp-prose-mark-bg` (dark mode)
- `--sp-prose-mark-text` (dark mode)
- `--sp-prose-hr` (dark mode)

</details>
<details>
<summary><code>external-auth-button</code> (8)</summary>

- `--sp-external-auth-button-bg` (dark mode)
- `--sp-external-auth-button-text` (dark mode)
- `--sp-external-auth-button-border` (dark mode)
- `--sp-external-auth-button-hover-bg` (dark mode)
- `--sp-external-auth-button-active-bg` (dark mode)
- `--sp-external-auth-button-disabled-bg` (dark mode)
- `--sp-external-auth-button-disabled-text` (dark mode)
- `--sp-external-auth-button-focus-ring` (dark mode)

</details>
<details>
<summary><code>checkbox</code> (7)</summary>

- `--sp-checkbox-bg` (dark mode)
- `--sp-checkbox-border` (dark mode)
- `--sp-checkbox-checked-bg` (dark mode)
- `--sp-checkbox-checked-border` (dark mode)
- `--sp-checkbox-text` (dark mode)
- `--sp-checkbox-disabled-bg` (dark mode)
- `--sp-checkbox-disabled-border` (dark mode)

</details>
<details>
<summary><code>radio</code> (7)</summary>

- `--sp-radio-bg` (dark mode)
- `--sp-radio-border` (dark mode)
- `--sp-radio-checked-bg` (dark mode)
- `--sp-radio-checked-border` (dark mode)
- `--sp-radio-text` (dark mode)
- `--sp-radio-disabled-bg` (dark mode)
- `--sp-radio-disabled-border` (dark mode)

</details>
<details>
<summary><code>select</code> (11)</summary>

- `--sp-select-bg` (dark mode)
- `--sp-select-border` (dark mode)
- `--sp-select-text` (dark mode)
- `--sp-select-placeholder-text` (dark mode)
- `--sp-select-disabled-bg` (dark mode)
- `--sp-select-disabled-border` (dark mode)
- `--sp-select-focus-border` (dark mode)
- `--sp-select-border-invalid` (dark mode)
- `--sp-select-bg-invalid` (dark mode)
- `--sp-select-border-success` (dark mode)
- `--sp-select-bg-success` (dark mode)

</details>
<details>
<summary><code>textarea</code> (11)</summary>

- `--sp-textarea-bg` (dark mode)
- `--sp-textarea-border` (dark mode)
- `--sp-textarea-text` (dark mode)
- `--sp-textarea-placeholder` (dark mode)
- `--sp-textarea-disabled-bg` (dark mode)
- `--sp-textarea-disabled-border` (dark mode)
- `--sp-textarea-focus-border` (dark mode)
- `--sp-textarea-border-invalid` (dark mode)
- `--sp-textarea-bg-invalid` (dark mode)
- `--sp-textarea-border-success` (dark mode)
- `--sp-textarea-bg-success` (dark mode)

</details>
<details>
<summary><code>fieldset</code> (2)</summary>

- `--sp-fieldset-border` (dark mode)
- `--sp-fieldset-legend-text` (dark mode)

</details>
<details>
<summary><code>label</code> (3)</summary>

- `--sp-label-text` (dark mode)
- `--sp-label-disabled-text` (dark mode)
- `--sp-label-required-indicator-text` (dark mode)

</details>
