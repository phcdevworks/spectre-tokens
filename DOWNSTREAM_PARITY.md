# Downstream Parity Checklist

Generated from the published CSS output by `npm run build`
(`scripts/build-downstream-parity.ts`). Do not hand-edit — regenerate instead.
This file is a derived artifact, not contract authority; `tokens/` and
`contract.manifest.json` remain the source of truth.

Every CSS custom property in `dist/index.css` (1431 total) belongs
to exactly one of 78 families. A family is the unit a downstream
recipe or stylesheet consumes: each one needs a consumer in `spectre-ui`
before its `tests/token-parity.test.ts` passes. The build fails if a new
variable does not fit an existing family, so a token group cannot ship
without appearing here.

Which recipe consumes a family, and how, is decided downstream. This package
defines what each token means, not how a component is built from it.

"Varies by mode" means the `dark` or `high-contrast` mode block gives the
variable a different value from `:root`, or a `var()` that re-resolves in
each mode. Every mode block declares the full mode-varying set, so a
section with its own `data-spectre-theme` resets all of them.

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

| Family | Variables | Count | Varies by mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `color` | `--sp-color-*` | 441 | no | `colors` |
| `space` | `--sp-space-*` | 25 | no | `space` |
| `layout-container` | `--sp-layout-container-*` | 10 | no | `layout.container` |
| `layout-section` | `--sp-layout-section-*` | 14 | no | `layout.section` |
| `layout-stack` | `--sp-layout-stack-*` | 7 | no | `layout.stack` |
| `layout-hero` | `--sp-layout-hero-*` | 6 | no | `layout.hero` |
| `layout-responsive` | `--sp-layout-responsive-*` | 16 | no | `layout.responsive` |
| `layout-sidebar` | `--sp-layout-sidebar-*` | 1 | no | `layout.sidebar` |
| `radius` | `--sp-radius-*` | 9 | no | `radii` |
| `elevation` | `--sp-elevation-*` | 12 | 4 of 12 | `elevation` |
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
<summary><code>space</code> (25)</summary>

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
- `--sp-space-128`
- `--sp-space-160`
- `--sp-space-192`
- `--sp-space-240`

</details>
<details>
<summary><code>layout-container</code> (10)</summary>

- `--sp-layout-container-padding-inline-sm`
- `--sp-layout-container-padding-inline-md`
- `--sp-layout-container-padding-inline-lg`
- `--sp-layout-container-padding-inline-xl`
- `--sp-layout-container-padding-inline-2xl`
- `--sp-layout-container-padding-inline-3xl`
- `--sp-layout-container-padding-inline-4xl`
- `--sp-layout-container-max-width`
- `--sp-layout-container-max-width-prose`
- `--sp-layout-container-max-width-wide`

</details>
<details>
<summary><code>layout-section</code> (14)</summary>

- `--sp-layout-section-padding-sm`
- `--sp-layout-section-padding-md`
- `--sp-layout-section-padding-lg`
- `--sp-layout-section-padding-xl`
- `--sp-layout-section-padding-2xl`
- `--sp-layout-section-padding-3xl`
- `--sp-layout-section-padding-4xl`
- `--sp-layout-section-gap-sm`
- `--sp-layout-section-gap-md`
- `--sp-layout-section-gap-lg`
- `--sp-layout-section-gap-xl`
- `--sp-layout-section-gap-2xl`
- `--sp-layout-section-gap-3xl`
- `--sp-layout-section-gap-4xl`

</details>
<details>
<summary><code>layout-stack</code> (7)</summary>

- `--sp-layout-stack-gap-sm`
- `--sp-layout-stack-gap-md`
- `--sp-layout-stack-gap-lg`
- `--sp-layout-stack-gap-xl`
- `--sp-layout-stack-gap-2xl`
- `--sp-layout-stack-gap-3xl`
- `--sp-layout-stack-gap-4xl`

</details>
<details>
<summary><code>layout-hero</code> (6)</summary>

- `--sp-layout-hero-padding-top-sm`
- `--sp-layout-hero-padding-top-md`
- `--sp-layout-hero-padding-top-lg`
- `--sp-layout-hero-padding-bottom-sm`
- `--sp-layout-hero-padding-bottom-md`
- `--sp-layout-hero-padding-bottom-lg`

</details>
<details>
<summary><code>layout-responsive</code> (16)</summary>

- `--sp-layout-responsive-lg-section-padding-xl`
- `--sp-layout-responsive-lg-section-padding-2xl`
- `--sp-layout-responsive-lg-section-padding-3xl`
- `--sp-layout-responsive-lg-section-padding-4xl`
- `--sp-layout-responsive-lg-section-gap-xl`
- `--sp-layout-responsive-lg-section-gap-2xl`
- `--sp-layout-responsive-lg-section-gap-3xl`
- `--sp-layout-responsive-lg-section-gap-4xl`
- `--sp-layout-responsive-lg-stack-gap-xl`
- `--sp-layout-responsive-lg-stack-gap-2xl`
- `--sp-layout-responsive-lg-stack-gap-3xl`
- `--sp-layout-responsive-lg-stack-gap-4xl`
- `--sp-layout-responsive-lg-container-padding-inline-xl`
- `--sp-layout-responsive-lg-container-padding-inline-2xl`
- `--sp-layout-responsive-lg-container-padding-inline-3xl`
- `--sp-layout-responsive-lg-container-padding-inline-4xl`

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
<summary><code>elevation</code> (12)</summary>

- `--sp-elevation-flat-shadow`
- `--sp-elevation-flat-surface` (varies by mode)
- `--sp-elevation-flat-z-index`
- `--sp-elevation-raised-shadow`
- `--sp-elevation-raised-surface` (varies by mode)
- `--sp-elevation-raised-z-index`
- `--sp-elevation-overlay-shadow`
- `--sp-elevation-overlay-surface` (varies by mode)
- `--sp-elevation-overlay-z-index`
- `--sp-elevation-modal-shadow`
- `--sp-elevation-modal-surface` (varies by mode)
- `--sp-elevation-modal-z-index`

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

| Family | Variables | Count | Varies by mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `surface` | `--sp-surface-*` | 11 | 9 of 11 | `surface`, `modes.*.surface` |
| `text` | `--sp-text-*` | 12 | 10 of 12 | `text`, `modes.*.text` |
| `link` | `--sp-link-*` | 6 | 3 of 6 | `link` |

<details>
<summary><code>surface</code> (11)</summary>

- `--sp-surface-page` (varies by mode)
- `--sp-surface-card` (varies by mode)
- `--sp-surface-input` (varies by mode)
- `--sp-surface-overlay`
- `--sp-surface-subtle` (varies by mode)
- `--sp-surface-hero` (varies by mode)
- `--sp-surface-hover` (varies by mode)
- `--sp-surface-selected` (varies by mode)
- `--sp-surface-active` (varies by mode)
- `--sp-surface-divider` (varies by mode)
- `--sp-surface-inverse`

</details>
<details>
<summary><code>text</code> (12)</summary>

- `--sp-text-on-page-default` (varies by mode)
- `--sp-text-on-page-muted` (varies by mode)
- `--sp-text-on-page-subtle` (varies by mode)
- `--sp-text-on-page-meta` (varies by mode)
- `--sp-text-on-page-brand` (varies by mode)
- `--sp-text-on-surface-default` (varies by mode)
- `--sp-text-on-surface-muted` (varies by mode)
- `--sp-text-on-surface-subtle` (varies by mode)
- `--sp-text-on-surface-meta` (varies by mode)
- `--sp-text-on-surface-brand` (varies by mode)
- `--sp-text-on-inverse-default`
- `--sp-text-on-inverse-muted`

</details>
<details>
<summary><code>link</code> (6)</summary>

- `--sp-link-default` (varies by mode)
- `--sp-link-hover` (varies by mode)
- `--sp-link-active` (varies by mode)
- `--sp-link-visited`
- `--sp-link-on-inverse`
- `--sp-link-on-inverse-hover`

</details>

## Typography roles

| Family | Variables | Count | Varies by mode | Source |
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

| Family | Variables | Count | Varies by mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `button` | `--sp-button-*` | 104 | 21 of 104 | `buttons`, `component.button`, `modes.*.component.button` |
| `form` | `--sp-form-*` | 18 | 7 of 18 | `forms`, `modes.*.forms` |
| `control` | `--sp-control-*` | 18 | no | `control` |

<details>
<summary><code>button</code> (104)</summary>

- `--sp-button-text-default` (varies by mode)
- `--sp-button-text-on-primary`
- `--sp-button-primary-bg` (varies by mode)
- `--sp-button-primary-bghover` (varies by mode)
- `--sp-button-primary-bgactive` (varies by mode)
- `--sp-button-primary-bgdisabled`
- `--sp-button-primary-text`
- `--sp-button-primary-textdisabled`
- `--sp-button-primary-focusring`
- `--sp-button-primary-focusvisible`
- `--sp-button-secondary-bg`
- `--sp-button-secondary-bghover`
- `--sp-button-secondary-bgactive`
- `--sp-button-secondary-bgdisabled`
- `--sp-button-secondary-text` (varies by mode)
- `--sp-button-secondary-textdisabled`
- `--sp-button-secondary-border` (varies by mode)
- `--sp-button-secondary-borderdisabled`
- `--sp-button-secondary-focusring`
- `--sp-button-secondary-focusvisible`
- `--sp-button-ghost-bg`
- `--sp-button-ghost-bghover`
- `--sp-button-ghost-bgactive`
- `--sp-button-ghost-bgdisabled`
- `--sp-button-ghost-text` (varies by mode)
- `--sp-button-ghost-textdisabled`
- `--sp-button-ghost-focusring`
- `--sp-button-ghost-focusvisible`
- `--sp-button-danger-bg` (varies by mode)
- `--sp-button-danger-bghover` (varies by mode)
- `--sp-button-danger-bgactive` (varies by mode)
- `--sp-button-danger-bgdisabled`
- `--sp-button-danger-text`
- `--sp-button-danger-textdisabled`
- `--sp-button-danger-focusring`
- `--sp-button-danger-focusvisible`
- `--sp-button-success-bg` (varies by mode)
- `--sp-button-success-bghover` (varies by mode)
- `--sp-button-success-bgactive`
- `--sp-button-success-bgdisabled`
- `--sp-button-success-text`
- `--sp-button-success-textdisabled`
- `--sp-button-success-focusring`
- `--sp-button-success-focusvisible`
- `--sp-button-warning-bg` (varies by mode)
- `--sp-button-warning-bghover` (varies by mode)
- `--sp-button-warning-bgactive` (varies by mode)
- `--sp-button-warning-bgdisabled`
- `--sp-button-warning-text`
- `--sp-button-warning-textdisabled`
- `--sp-button-warning-focusring`
- `--sp-button-warning-focusvisible`
- `--sp-button-link-bg`
- `--sp-button-link-bghover`
- `--sp-button-link-bgactive`
- `--sp-button-link-bgdisabled`
- `--sp-button-link-text` (varies by mode)
- `--sp-button-link-texthover` (varies by mode)
- `--sp-button-link-textactive` (varies by mode)
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
- `--sp-button-cta-bg` (varies by mode)
- `--sp-button-cta-bghover` (varies by mode)
- `--sp-button-cta-bgactive` (varies by mode)
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

- `--sp-form-default-bg` (varies by mode)
- `--sp-form-default-text` (varies by mode)
- `--sp-form-default-placeholder` (varies by mode)
- `--sp-form-default-border`
- `--sp-form-hover-border`
- `--sp-form-focus-border`
- `--sp-form-focus-ring`
- `--sp-form-focusvisible-border`
- `--sp-form-focusvisible-ring`
- `--sp-form-valid-border` (varies by mode)
- `--sp-form-valid-bg`
- `--sp-form-valid-text` (varies by mode)
- `--sp-form-invalid-border` (varies by mode)
- `--sp-form-invalid-bg`
- `--sp-form-invalid-text` (varies by mode)
- `--sp-form-disabled-bg`
- `--sp-form-disabled-border`
- `--sp-form-disabled-text`

</details>
<details>
<summary><code>control</code> (18)</summary>

- `--sp-control-sm-height`
- `--sp-control-sm-padding-inline`
- `--sp-control-sm-icon-size`
- `--sp-control-md-height`
- `--sp-control-md-padding-inline`
- `--sp-control-md-icon-size`
- `--sp-control-lg-height`
- `--sp-control-lg-padding-inline`
- `--sp-control-lg-icon-size`
- `--sp-control-compact-sm-height`
- `--sp-control-compact-sm-padding-inline`
- `--sp-control-compact-sm-icon-size`
- `--sp-control-compact-md-height`
- `--sp-control-compact-md-padding-inline`
- `--sp-control-compact-md-icon-size`
- `--sp-control-compact-lg-height`
- `--sp-control-compact-lg-padding-inline`
- `--sp-control-compact-lg-icon-size`

</details>

## Components

| Family | Variables | Count | Varies by mode | Source |
| ------ | --------- | ----- | --------- | ------ |
| `card` | `--sp-component-card-*` | 13 | 9 of 13 | `component.card`, `modes.*.component.card` |
| `choice-card` | `--sp-choice-card-*` | 9 | 7 of 9 | `component.choiceCard`, `modes.*.component.choiceCard` |
| `input` | `--sp-component-input-*` | 2 | yes | `component.input`, `modes.*.component.input` |
| `badge` | `--sp-badge-*` | 31 | 25 of 31 | `component.badge`, `modes.*.component.badge` |
| `icon-box` | `--sp-icon-box-*` | 6 | yes | `component.iconBox`, `modes.*.component.iconBox` |
| `testimonial` | `--sp-testimonial-*` | 15 | 14 of 15 | `component.testimonial`, `modes.*.component.testimonial` |
| `pricing-card` | `--sp-pricing-card-*` | 17 | 13 of 17 | `component.pricingCard`, `modes.*.component.pricingCard` |
| `rating` | `--sp-rating-*` | 3 | yes | `component.rating`, `modes.*.component.rating` |
| `nav` | `--sp-nav-*` | 14 | 13 of 14 | `component.nav`, `modes.*.component.nav` |
| `footer` | `--sp-footer-*` | 33 | 19 of 33 | `component.footer`, `modes.*.component.footer` |
| `modal` | `--sp-modal-*` | 12 | 9 of 12 | `component.modal`, `modes.*.component.modal` |
| `toast` | `--sp-toast-*` | 28 | 27 of 28 | `component.toast`, `modes.*.component.toast` |
| `tooltip` | `--sp-tooltip-*` | 11 | 10 of 11 | `component.tooltip`, `modes.*.component.tooltip` |
| `dropdown` | `--sp-dropdown-*` | 19 | 16 of 19 | `component.dropdown`, `modes.*.component.dropdown` |
| `tabs` | `--sp-tabs-*` | 11 | 9 of 11 | `component.tabs`, `modes.*.component.tabs` |
| `accordion` | `--sp-accordion-*` | 6 | yes | `component.accordion`, `modes.*.component.accordion` |
| `breadcrumb` | `--sp-breadcrumb-*` | 4 | yes | `component.breadcrumb`, `modes.*.component.breadcrumb` |
| `list-group` | `--sp-list-group-*` | 18 | 16 of 18 | `component.listGroup`, `modes.*.component.listGroup` |
| `offcanvas` | `--sp-offcanvas-*` | 4 | 3 of 4 | `component.offcanvas`, `modes.*.component.offcanvas` |
| `carousel` | `--sp-carousel-*` | 6 | no | `component.carousel`, `modes.*.component.carousel` |
| `table` | `--sp-table-*` | 17 | yes | `component.table`, `modes.*.component.table` |
| `alert` | `--sp-alert-*` | 24 | yes | `component.alert`, `modes.*.component.alert` |
| `pagination` | `--sp-pagination-*` | 5 | 4 of 5 | `component.pagination`, `modes.*.component.pagination` |
| `stepper` | `--sp-stepper-*` | 8 | 6 of 8 | `component.stepper`, `modes.*.component.stepper` |
| `popover` | `--sp-popover-*` | 6 | yes | `component.popover`, `modes.*.component.popover` |
| `progress` | `--sp-progress-*` | 8 | yes | `component.progress`, `modes.*.component.progress` |
| `loading-indicator` | `--sp-loading-indicator-*` | 8 | 7 of 8 | `component.loadingIndicator`, `modes.*.component.loadingIndicator` |
| `switch` | `--sp-switch-*` | 6 | 3 of 6 | `component.switch`, `modes.*.component.switch` |
| `range` | `--sp-range-*` | 7 | 3 of 7 | `component.range`, `modes.*.component.range` |
| `file-input` | `--sp-file-input-*` | 13 | 9 of 13 | `component.fileInput`, `modes.*.component.fileInput` |
| `input-group` | `--sp-input-group-*` | 6 | yes | `component.inputGroup`, `modes.*.component.inputGroup` |
| `datepicker` | `--sp-datepicker-*` | 4 | yes | `component.datepicker`, `modes.*.component.datepicker` |
| `day` | `--sp-day-*` | 7 | 5 of 7 | `component.day`, `modes.*.component.day` |
| `prose` | `--sp-prose-*` | 13 | yes | `component.prose`, `modes.*.component.prose` |
| `external-auth-button` | `--sp-external-auth-button-*` | 8 | 7 of 8 | `component.externalAuthButton`, `modes.*.component.externalAuthButton` |
| `checkbox` | `--sp-checkbox-*` | 7 | 5 of 7 | `component.checkbox`, `modes.*.component.checkbox` |
| `radio` | `--sp-radio-*` | 7 | 5 of 7 | `component.radio`, `modes.*.component.radio` |
| `select` | `--sp-select-*` | 11 | 7 of 11 | `component.select`, `modes.*.component.select` |
| `textarea` | `--sp-textarea-*` | 11 | 7 of 11 | `component.textarea`, `modes.*.component.textarea` |
| `fieldset` | `--sp-fieldset-*` | 2 | yes | `component.fieldset`, `modes.*.component.fieldset` |
| `label` | `--sp-label-*` | 3 | yes | `component.label`, `modes.*.component.label` |
| `skeleton` | `--sp-skeleton-*` | 2 | yes | `component.skeleton`, `modes.*.component.skeleton` |
| `selection` | `--sp-selection-*` | 2 | yes | `component.selection`, `modes.*.component.selection` |
| `caret` | `--sp-caret-*` | 1 | yes | `component.caret`, `modes.*.component.caret` |
| `scrollbar` | `--sp-scrollbar-*` | 3 | 2 of 3 | `component.scrollbar`, `modes.*.component.scrollbar` |
| `chart` | `--sp-chart-*` | 26 | yes | `component.chart`, `modes.*.component.chart` |

<details>
<summary><code>card</code> (13)</summary>

- `--sp-component-card-text` (varies by mode)
- `--sp-component-card-text-muted` (varies by mode)
- `--sp-component-card-accent-neutral` (varies by mode)
- `--sp-component-card-accent-brand` (varies by mode)
- `--sp-component-card-accent-info` (varies by mode)
- `--sp-component-card-accent-success` (varies by mode)
- `--sp-component-card-accent-warning` (varies by mode)
- `--sp-component-card-accent-danger` (varies by mode)
- `--sp-component-card-accent-cta` (varies by mode)
- `--sp-component-card-padding-sm`
- `--sp-component-card-padding-md`
- `--sp-component-card-padding-lg`
- `--sp-component-card-accent-thickness`

</details>
<details>
<summary><code>choice-card</code> (9)</summary>

- `--sp-choice-card-bg` (varies by mode)
- `--sp-choice-card-text` (varies by mode)
- `--sp-choice-card-border` (varies by mode)
- `--sp-choice-card-hover-border` (varies by mode)
- `--sp-choice-card-selected-bg` (varies by mode)
- `--sp-choice-card-selected-border`
- `--sp-choice-card-disabled-bg` (varies by mode)
- `--sp-choice-card-disabled-text` (varies by mode)
- `--sp-choice-card-focus-ring`

</details>
<details>
<summary><code>input</code> (2)</summary>

- `--sp-component-input-text` (varies by mode)
- `--sp-component-input-placeholder` (varies by mode)

</details>
<details>
<summary><code>badge</code> (31)</summary>

- `--sp-badge-neutral-bg` (varies by mode)
- `--sp-badge-neutral-bg-hover` (varies by mode)
- `--sp-badge-neutral-text` (varies by mode)
- `--sp-badge-brand-bg` (varies by mode)
- `--sp-badge-brand-bg-hover` (varies by mode)
- `--sp-badge-brand-text` (varies by mode)
- `--sp-badge-info-bg` (varies by mode)
- `--sp-badge-info-bg-hover` (varies by mode)
- `--sp-badge-info-text` (varies by mode)
- `--sp-badge-success-bg` (varies by mode)
- `--sp-badge-success-text` (varies by mode)
- `--sp-badge-warning-bg` (varies by mode)
- `--sp-badge-warning-text` (varies by mode)
- `--sp-badge-danger-bg` (varies by mode)
- `--sp-badge-danger-text` (varies by mode)
- `--sp-badge-accent-neutral` (varies by mode)
- `--sp-badge-accent-brand` (varies by mode)
- `--sp-badge-accent-info` (varies by mode)
- `--sp-badge-accent-success` (varies by mode)
- `--sp-badge-accent-warning` (varies by mode)
- `--sp-badge-accent-danger` (varies by mode)
- `--sp-badge-accent-cta` (varies by mode)
- `--sp-badge-success-bg-hover` (varies by mode)
- `--sp-badge-warning-bg-hover` (varies by mode)
- `--sp-badge-danger-bg-hover` (varies by mode)
- `--sp-badge-inverse-bg`
- `--sp-badge-inverse-bg-hover`
- `--sp-badge-inverse-text`
- `--sp-badge-inverse-border`
- `--sp-badge-dot-border`
- `--sp-badge-accent-thickness`

</details>
<details>
<summary><code>icon-box</code> (6)</summary>

- `--sp-icon-box-bg` (varies by mode)
- `--sp-icon-box-border` (varies by mode)
- `--sp-icon-box-icon-default` (varies by mode)
- `--sp-icon-box-icon-success` (varies by mode)
- `--sp-icon-box-icon-warning` (varies by mode)
- `--sp-icon-box-icon-danger` (varies by mode)

</details>
<details>
<summary><code>testimonial</code> (15)</summary>

- `--sp-testimonial-bg` (varies by mode)
- `--sp-testimonial-bg-hover` (varies by mode)
- `--sp-testimonial-border` (varies by mode)
- `--sp-testimonial-text` (varies by mode)
- `--sp-testimonial-author-name` (varies by mode)
- `--sp-testimonial-author-title` (varies by mode)
- `--sp-testimonial-quote-mark` (varies by mode)
- `--sp-testimonial-accent-neutral` (varies by mode)
- `--sp-testimonial-accent-brand` (varies by mode)
- `--sp-testimonial-accent-info` (varies by mode)
- `--sp-testimonial-accent-success` (varies by mode)
- `--sp-testimonial-accent-warning` (varies by mode)
- `--sp-testimonial-accent-danger` (varies by mode)
- `--sp-testimonial-accent-cta` (varies by mode)
- `--sp-testimonial-accent-thickness`

</details>
<details>
<summary><code>pricing-card</code> (17)</summary>

- `--sp-pricing-card-bg` (varies by mode)
- `--sp-pricing-card-bg-hover` (varies by mode)
- `--sp-pricing-card-border` (varies by mode)
- `--sp-pricing-card-featured-bg` (varies by mode)
- `--sp-pricing-card-featured-text`
- `--sp-pricing-card-featured-badge-bg`
- `--sp-pricing-card-featured-badge-text`
- `--sp-pricing-card-price` (varies by mode)
- `--sp-pricing-card-price-description` (varies by mode)
- `--sp-pricing-card-accent-neutral` (varies by mode)
- `--sp-pricing-card-accent-brand` (varies by mode)
- `--sp-pricing-card-accent-info` (varies by mode)
- `--sp-pricing-card-accent-success` (varies by mode)
- `--sp-pricing-card-accent-warning` (varies by mode)
- `--sp-pricing-card-accent-danger` (varies by mode)
- `--sp-pricing-card-accent-cta` (varies by mode)
- `--sp-pricing-card-accent-thickness`

</details>
<details>
<summary><code>rating</code> (3)</summary>

- `--sp-rating-star-filled` (varies by mode)
- `--sp-rating-star-empty` (varies by mode)
- `--sp-rating-text` (varies by mode)

</details>
<details>
<summary><code>nav</code> (14)</summary>

- `--sp-nav-bg` (varies by mode)
- `--sp-nav-text` (varies by mode)
- `--sp-nav-link` (varies by mode)
- `--sp-nav-link-hover` (varies by mode)
- `--sp-nav-link-active` (varies by mode)
- `--sp-nav-border` (varies by mode)
- `--sp-nav-accent-neutral` (varies by mode)
- `--sp-nav-accent-brand` (varies by mode)
- `--sp-nav-accent-info` (varies by mode)
- `--sp-nav-accent-success` (varies by mode)
- `--sp-nav-accent-warning` (varies by mode)
- `--sp-nav-accent-danger` (varies by mode)
- `--sp-nav-accent-cta` (varies by mode)
- `--sp-nav-accent-thickness`

</details>
<details>
<summary><code>footer</code> (33)</summary>

- `--sp-footer-bg` (varies by mode)
- `--sp-footer-text`
- `--sp-footer-heading`
- `--sp-footer-muted` (varies by mode)
- `--sp-footer-link`
- `--sp-footer-link-hover` (varies by mode)
- `--sp-footer-border` (varies by mode)
- `--sp-footer-divider` (varies by mode)
- `--sp-footer-chip-bg` (varies by mode)
- `--sp-footer-accent-neutral` (varies by mode)
- `--sp-footer-accent-brand` (varies by mode)
- `--sp-footer-accent-info` (varies by mode)
- `--sp-footer-accent-success` (varies by mode)
- `--sp-footer-accent-warning` (varies by mode)
- `--sp-footer-accent-danger` (varies by mode)
- `--sp-footer-accent-cta` (varies by mode)
- `--sp-footer-light-bg` (varies by mode)
- `--sp-footer-light-text` (varies by mode)
- `--sp-footer-light-heading`
- `--sp-footer-light-muted` (varies by mode)
- `--sp-footer-light-link`
- `--sp-footer-light-link-hover`
- `--sp-footer-light-border` (varies by mode)
- `--sp-footer-light-divider` (varies by mode)
- `--sp-footer-light-chip-bg` (varies by mode)
- `--sp-footer-light-accent-neutral`
- `--sp-footer-light-accent-brand`
- `--sp-footer-light-accent-info`
- `--sp-footer-light-accent-success`
- `--sp-footer-light-accent-warning`
- `--sp-footer-light-accent-danger`
- `--sp-footer-light-accent-cta`
- `--sp-footer-accent-thickness`

</details>
<details>
<summary><code>modal</code> (12)</summary>

- `--sp-modal-bg` (varies by mode)
- `--sp-modal-shadow`
- `--sp-modal-border` (varies by mode)
- `--sp-modal-overlay`
- `--sp-modal-accent-neutral` (varies by mode)
- `--sp-modal-accent-brand` (varies by mode)
- `--sp-modal-accent-info` (varies by mode)
- `--sp-modal-accent-success` (varies by mode)
- `--sp-modal-accent-warning` (varies by mode)
- `--sp-modal-accent-danger` (varies by mode)
- `--sp-modal-accent-cta` (varies by mode)
- `--sp-modal-accent-thickness`

</details>
<details>
<summary><code>toast</code> (28)</summary>

- `--sp-toast-neutral-bg` (varies by mode)
- `--sp-toast-neutral-text` (varies by mode)
- `--sp-toast-neutral-border` (varies by mode)
- `--sp-toast-neutral-icon` (varies by mode)
- `--sp-toast-success-bg` (varies by mode)
- `--sp-toast-success-text` (varies by mode)
- `--sp-toast-success-border` (varies by mode)
- `--sp-toast-success-icon` (varies by mode)
- `--sp-toast-warning-bg` (varies by mode)
- `--sp-toast-warning-text` (varies by mode)
- `--sp-toast-warning-border` (varies by mode)
- `--sp-toast-warning-icon` (varies by mode)
- `--sp-toast-danger-bg` (varies by mode)
- `--sp-toast-danger-text` (varies by mode)
- `--sp-toast-danger-border` (varies by mode)
- `--sp-toast-danger-icon` (varies by mode)
- `--sp-toast-info-bg` (varies by mode)
- `--sp-toast-info-text` (varies by mode)
- `--sp-toast-info-border` (varies by mode)
- `--sp-toast-info-icon` (varies by mode)
- `--sp-toast-accent-neutral` (varies by mode)
- `--sp-toast-accent-brand` (varies by mode)
- `--sp-toast-accent-info` (varies by mode)
- `--sp-toast-accent-success` (varies by mode)
- `--sp-toast-accent-warning` (varies by mode)
- `--sp-toast-accent-danger` (varies by mode)
- `--sp-toast-accent-cta` (varies by mode)
- `--sp-toast-accent-thickness`

</details>
<details>
<summary><code>tooltip</code> (11)</summary>

- `--sp-tooltip-bg` (varies by mode)
- `--sp-tooltip-text` (varies by mode)
- `--sp-tooltip-border` (varies by mode)
- `--sp-tooltip-accent-neutral` (varies by mode)
- `--sp-tooltip-accent-brand` (varies by mode)
- `--sp-tooltip-accent-info` (varies by mode)
- `--sp-tooltip-accent-success` (varies by mode)
- `--sp-tooltip-accent-warning` (varies by mode)
- `--sp-tooltip-accent-danger` (varies by mode)
- `--sp-tooltip-accent-cta` (varies by mode)
- `--sp-tooltip-accent-thickness`

</details>
<details>
<summary><code>dropdown</code> (19)</summary>

- `--sp-dropdown-bg` (varies by mode)
- `--sp-dropdown-border` (varies by mode)
- `--sp-dropdown-item-default`
- `--sp-dropdown-item-hover` (varies by mode)
- `--sp-dropdown-item-active` (varies by mode)
- `--sp-dropdown-item-text` (varies by mode)
- `--sp-dropdown-item-disabled-text` (varies by mode)
- `--sp-dropdown-item-selected-bg` (varies by mode)
- `--sp-dropdown-item-selected-text` (varies by mode)
- `--sp-dropdown-accent-neutral` (varies by mode)
- `--sp-dropdown-accent-brand` (varies by mode)
- `--sp-dropdown-accent-info` (varies by mode)
- `--sp-dropdown-accent-success` (varies by mode)
- `--sp-dropdown-accent-warning` (varies by mode)
- `--sp-dropdown-accent-danger` (varies by mode)
- `--sp-dropdown-accent-cta` (varies by mode)
- `--sp-dropdown-header`
- `--sp-dropdown-divider` (varies by mode)
- `--sp-dropdown-accent-thickness`

</details>
<details>
<summary><code>tabs</code> (11)</summary>

- `--sp-tabs-list-bg` (varies by mode)
- `--sp-tabs-list-border` (varies by mode)
- `--sp-tabs-item-text` (varies by mode)
- `--sp-tabs-item-hover-bg` (varies by mode)
- `--sp-tabs-item-active-text` (varies by mode)
- `--sp-tabs-item-active-indicator` (varies by mode)
- `--sp-tabs-item-focus-ring-color`
- `--sp-tabs-item-disabled-text` (varies by mode)
- `--sp-tabs-pill-active-bg` (varies by mode)
- `--sp-tabs-pill-active-text`
- `--sp-tabs-panel-bg` (varies by mode)

</details>
<details>
<summary><code>accordion</code> (6)</summary>

- `--sp-accordion-bg` (varies by mode)
- `--sp-accordion-text` (varies by mode)
- `--sp-accordion-border` (varies by mode)
- `--sp-accordion-header-hover-bg` (varies by mode)
- `--sp-accordion-icon-collapsed` (varies by mode)
- `--sp-accordion-icon-expanded` (varies by mode)

</details>
<details>
<summary><code>breadcrumb</code> (4)</summary>

- `--sp-breadcrumb-item-text` (varies by mode)
- `--sp-breadcrumb-item-hover-text` (varies by mode)
- `--sp-breadcrumb-item-active-text` (varies by mode)
- `--sp-breadcrumb-separator` (varies by mode)

</details>
<details>
<summary><code>list-group</code> (18)</summary>

- `--sp-list-group-bg` (varies by mode)
- `--sp-list-group-border` (varies by mode)
- `--sp-list-group-text` (varies by mode)
- `--sp-list-group-heading` (varies by mode)
- `--sp-list-group-muted` (varies by mode)
- `--sp-list-group-item-hover-bg` (varies by mode)
- `--sp-list-group-item-active-bg` (varies by mode)
- `--sp-list-group-item-active-text`
- `--sp-list-group-item-selected-bg` (varies by mode)
- `--sp-list-group-item-disabled-text` (varies by mode)
- `--sp-list-group-accent-neutral` (varies by mode)
- `--sp-list-group-accent-brand` (varies by mode)
- `--sp-list-group-accent-info` (varies by mode)
- `--sp-list-group-accent-success` (varies by mode)
- `--sp-list-group-accent-warning` (varies by mode)
- `--sp-list-group-accent-danger` (varies by mode)
- `--sp-list-group-accent-cta` (varies by mode)
- `--sp-list-group-accent-thickness`

</details>
<details>
<summary><code>offcanvas</code> (4)</summary>

- `--sp-offcanvas-bg` (varies by mode)
- `--sp-offcanvas-text` (varies by mode)
- `--sp-offcanvas-border` (varies by mode)
- `--sp-offcanvas-overlay`

</details>
<details>
<summary><code>carousel</code> (6)</summary>

- `--sp-carousel-indicator-default`
- `--sp-carousel-indicator-active`
- `--sp-carousel-control-icon`
- `--sp-carousel-control-bg`
- `--sp-carousel-caption-bg`
- `--sp-carousel-caption-text`

</details>
<details>
<summary><code>table</code> (17)</summary>

- `--sp-table-header-bg` (varies by mode)
- `--sp-table-header-text` (varies by mode)
- `--sp-table-text` (varies by mode)
- `--sp-table-divider` (varies by mode)
- `--sp-table-stripe-bg` (varies by mode)
- `--sp-table-hover-bg` (varies by mode)
- `--sp-table-selected-bg` (varies by mode)
- `--sp-table-row-neutral-bg` (varies by mode)
- `--sp-table-row-neutral-text` (varies by mode)
- `--sp-table-row-info-bg` (varies by mode)
- `--sp-table-row-info-text` (varies by mode)
- `--sp-table-row-success-bg` (varies by mode)
- `--sp-table-row-success-text` (varies by mode)
- `--sp-table-row-warning-bg` (varies by mode)
- `--sp-table-row-warning-text` (varies by mode)
- `--sp-table-row-danger-bg` (varies by mode)
- `--sp-table-row-danger-text` (varies by mode)

</details>
<details>
<summary><code>alert</code> (24)</summary>

- `--sp-alert-neutral-bg` (varies by mode)
- `--sp-alert-neutral-text` (varies by mode)
- `--sp-alert-neutral-border` (varies by mode)
- `--sp-alert-neutral-icon` (varies by mode)
- `--sp-alert-brand-bg` (varies by mode)
- `--sp-alert-brand-text` (varies by mode)
- `--sp-alert-brand-border` (varies by mode)
- `--sp-alert-brand-icon` (varies by mode)
- `--sp-alert-info-bg` (varies by mode)
- `--sp-alert-info-text` (varies by mode)
- `--sp-alert-info-border` (varies by mode)
- `--sp-alert-info-icon` (varies by mode)
- `--sp-alert-success-bg` (varies by mode)
- `--sp-alert-success-text` (varies by mode)
- `--sp-alert-success-border` (varies by mode)
- `--sp-alert-success-icon` (varies by mode)
- `--sp-alert-warning-bg` (varies by mode)
- `--sp-alert-warning-text` (varies by mode)
- `--sp-alert-warning-border` (varies by mode)
- `--sp-alert-warning-icon` (varies by mode)
- `--sp-alert-danger-bg` (varies by mode)
- `--sp-alert-danger-text` (varies by mode)
- `--sp-alert-danger-border` (varies by mode)
- `--sp-alert-danger-icon` (varies by mode)

</details>
<details>
<summary><code>pagination</code> (5)</summary>

- `--sp-pagination-item-text` (varies by mode)
- `--sp-pagination-item-hover-bg` (varies by mode)
- `--sp-pagination-item-active-bg` (varies by mode)
- `--sp-pagination-item-active-text`
- `--sp-pagination-item-disabled-text` (varies by mode)

</details>
<details>
<summary><code>stepper</code> (8)</summary>

- `--sp-stepper-step-pending-bg` (varies by mode)
- `--sp-stepper-step-pending-text` (varies by mode)
- `--sp-stepper-step-active-bg` (varies by mode)
- `--sp-stepper-step-active-text`
- `--sp-stepper-step-done-bg` (varies by mode)
- `--sp-stepper-step-done-text`
- `--sp-stepper-connector` (varies by mode)
- `--sp-stepper-label-text` (varies by mode)

</details>
<details>
<summary><code>popover</code> (6)</summary>

- `--sp-popover-bg` (varies by mode)
- `--sp-popover-text` (varies by mode)
- `--sp-popover-muted` (varies by mode)
- `--sp-popover-border` (varies by mode)
- `--sp-popover-shadow` (varies by mode)
- `--sp-popover-arrow` (varies by mode)

</details>
<details>
<summary><code>progress</code> (8)</summary>

- `--sp-progress-track-bg` (varies by mode)
- `--sp-progress-indicator-neutral` (varies by mode)
- `--sp-progress-indicator-brand` (varies by mode)
- `--sp-progress-indicator-info` (varies by mode)
- `--sp-progress-indicator-success` (varies by mode)
- `--sp-progress-indicator-warning` (varies by mode)
- `--sp-progress-indicator-danger` (varies by mode)
- `--sp-progress-label-text` (varies by mode)

</details>
<details>
<summary><code>loading-indicator</code> (8)</summary>

- `--sp-loading-indicator-default` (varies by mode)
- `--sp-loading-indicator-muted` (varies by mode)
- `--sp-loading-indicator-inverse`
- `--sp-loading-indicator-brand` (varies by mode)
- `--sp-loading-indicator-info` (varies by mode)
- `--sp-loading-indicator-success` (varies by mode)
- `--sp-loading-indicator-warning` (varies by mode)
- `--sp-loading-indicator-danger` (varies by mode)

</details>
<details>
<summary><code>switch</code> (6)</summary>

- `--sp-switch-track-bg` (varies by mode)
- `--sp-switch-track-checked-bg`
- `--sp-switch-thumb-bg`
- `--sp-switch-track-disabled-bg` (varies by mode)
- `--sp-switch-thumb-disabled-bg` (varies by mode)
- `--sp-switch-focus-ring`

</details>
<details>
<summary><code>range</code> (7)</summary>

- `--sp-range-track-bg` (varies by mode)
- `--sp-range-track-filled-bg`
- `--sp-range-thumb-bg`
- `--sp-range-thumb-border`
- `--sp-range-track-disabled-bg` (varies by mode)
- `--sp-range-thumb-disabled-border` (varies by mode)
- `--sp-range-focus-ring`

</details>
<details>
<summary><code>file-input</code> (13)</summary>

- `--sp-file-input-bg` (varies by mode)
- `--sp-file-input-border` (varies by mode)
- `--sp-file-input-text` (varies by mode)
- `--sp-file-input-action-bg` (varies by mode)
- `--sp-file-input-action-text` (varies by mode)
- `--sp-file-input-disabled-bg` (varies by mode)
- `--sp-file-input-disabled-border` (varies by mode)
- `--sp-file-input-disabled-text` (varies by mode)
- `--sp-file-input-focus-border` (varies by mode)
- `--sp-file-input-border-invalid`
- `--sp-file-input-bg-invalid`
- `--sp-file-input-border-success`
- `--sp-file-input-bg-success`

</details>
<details>
<summary><code>input-group</code> (6)</summary>

- `--sp-input-group-addon-bg` (varies by mode)
- `--sp-input-group-addon-text` (varies by mode)
- `--sp-input-group-addon-border` (varies by mode)
- `--sp-input-group-focus-border` (varies by mode)
- `--sp-input-group-disabled-bg` (varies by mode)
- `--sp-input-group-disabled-text` (varies by mode)

</details>
<details>
<summary><code>datepicker</code> (4)</summary>

- `--sp-datepicker-panel-bg` (varies by mode)
- `--sp-datepicker-panel-border` (varies by mode)
- `--sp-datepicker-header-text` (varies by mode)
- `--sp-datepicker-weekday-text` (varies by mode)

</details>
<details>
<summary><code>day</code> (7)</summary>

- `--sp-day-default-text` (varies by mode)
- `--sp-day-default-hover-bg` (varies by mode)
- `--sp-day-selected-bg` (varies by mode)
- `--sp-day-selected-text`
- `--sp-day-today-ring-color`
- `--sp-day-outside-month-text` (varies by mode)
- `--sp-day-disabled-text` (varies by mode)

</details>
<details>
<summary><code>prose</code> (13)</summary>

- `--sp-prose-blockquote-border` (varies by mode)
- `--sp-prose-blockquote-text` (varies by mode)
- `--sp-prose-code-bg` (varies by mode)
- `--sp-prose-code-text` (varies by mode)
- `--sp-prose-code-block-bg` (varies by mode)
- `--sp-prose-code-block-text` (varies by mode)
- `--sp-prose-code-block-border` (varies by mode)
- `--sp-prose-mark-bg` (varies by mode)
- `--sp-prose-mark-text` (varies by mode)
- `--sp-prose-hr` (varies by mode)
- `--sp-prose-kbd-bg` (varies by mode)
- `--sp-prose-kbd-border` (varies by mode)
- `--sp-prose-kbd-text` (varies by mode)

</details>
<details>
<summary><code>external-auth-button</code> (8)</summary>

- `--sp-external-auth-button-bg` (varies by mode)
- `--sp-external-auth-button-text` (varies by mode)
- `--sp-external-auth-button-border` (varies by mode)
- `--sp-external-auth-button-hover-bg` (varies by mode)
- `--sp-external-auth-button-active-bg` (varies by mode)
- `--sp-external-auth-button-disabled-bg` (varies by mode)
- `--sp-external-auth-button-disabled-text` (varies by mode)
- `--sp-external-auth-button-focus-ring`

</details>
<details>
<summary><code>checkbox</code> (7)</summary>

- `--sp-checkbox-bg` (varies by mode)
- `--sp-checkbox-border` (varies by mode)
- `--sp-checkbox-checked-bg` (varies by mode)
- `--sp-checkbox-checked-border`
- `--sp-checkbox-text`
- `--sp-checkbox-disabled-bg` (varies by mode)
- `--sp-checkbox-disabled-border` (varies by mode)

</details>
<details>
<summary><code>radio</code> (7)</summary>

- `--sp-radio-bg` (varies by mode)
- `--sp-radio-border` (varies by mode)
- `--sp-radio-checked-bg` (varies by mode)
- `--sp-radio-checked-border`
- `--sp-radio-text`
- `--sp-radio-disabled-bg` (varies by mode)
- `--sp-radio-disabled-border` (varies by mode)

</details>
<details>
<summary><code>select</code> (11)</summary>

- `--sp-select-bg` (varies by mode)
- `--sp-select-border` (varies by mode)
- `--sp-select-text` (varies by mode)
- `--sp-select-placeholder-text` (varies by mode)
- `--sp-select-disabled-bg` (varies by mode)
- `--sp-select-disabled-border` (varies by mode)
- `--sp-select-focus-border` (varies by mode)
- `--sp-select-border-invalid`
- `--sp-select-bg-invalid`
- `--sp-select-border-success`
- `--sp-select-bg-success`

</details>
<details>
<summary><code>textarea</code> (11)</summary>

- `--sp-textarea-bg` (varies by mode)
- `--sp-textarea-border` (varies by mode)
- `--sp-textarea-text` (varies by mode)
- `--sp-textarea-placeholder` (varies by mode)
- `--sp-textarea-disabled-bg` (varies by mode)
- `--sp-textarea-disabled-border` (varies by mode)
- `--sp-textarea-focus-border` (varies by mode)
- `--sp-textarea-border-invalid`
- `--sp-textarea-bg-invalid`
- `--sp-textarea-border-success`
- `--sp-textarea-bg-success`

</details>
<details>
<summary><code>fieldset</code> (2)</summary>

- `--sp-fieldset-border` (varies by mode)
- `--sp-fieldset-legend-text` (varies by mode)

</details>
<details>
<summary><code>label</code> (3)</summary>

- `--sp-label-text` (varies by mode)
- `--sp-label-disabled-text` (varies by mode)
- `--sp-label-required-indicator-text` (varies by mode)

</details>
<details>
<summary><code>skeleton</code> (2)</summary>

- `--sp-skeleton-base` (varies by mode)
- `--sp-skeleton-shimmer` (varies by mode)

</details>
<details>
<summary><code>selection</code> (2)</summary>

- `--sp-selection-bg` (varies by mode)
- `--sp-selection-text` (varies by mode)

</details>
<details>
<summary><code>caret</code> (1)</summary>

- `--sp-caret-color` (varies by mode)

</details>
<details>
<summary><code>scrollbar</code> (3)</summary>

- `--sp-scrollbar-track` (varies by mode)
- `--sp-scrollbar-thumb` (varies by mode)
- `--sp-scrollbar-thumb-hover`

</details>
<details>
<summary><code>chart</code> (26)</summary>

- `--sp-chart-bg` (varies by mode)
- `--sp-chart-grid` (varies by mode)
- `--sp-chart-axis` (varies by mode)
- `--sp-chart-label` (varies by mode)
- `--sp-chart-series-1` (varies by mode)
- `--sp-chart-series-2` (varies by mode)
- `--sp-chart-series-3` (varies by mode)
- `--sp-chart-series-4` (varies by mode)
- `--sp-chart-series-5` (varies by mode)
- `--sp-chart-series-6` (varies by mode)
- `--sp-chart-series-7` (varies by mode)
- `--sp-chart-series-8` (varies by mode)
- `--sp-chart-sequential-1` (varies by mode)
- `--sp-chart-sequential-2` (varies by mode)
- `--sp-chart-sequential-3` (varies by mode)
- `--sp-chart-sequential-4` (varies by mode)
- `--sp-chart-sequential-5` (varies by mode)
- `--sp-chart-sequential-6` (varies by mode)
- `--sp-chart-sequential-7` (varies by mode)
- `--sp-chart-diverging-1` (varies by mode)
- `--sp-chart-diverging-2` (varies by mode)
- `--sp-chart-diverging-3` (varies by mode)
- `--sp-chart-diverging-4` (varies by mode)
- `--sp-chart-diverging-5` (varies by mode)
- `--sp-chart-diverging-6` (varies by mode)
- `--sp-chart-diverging-7` (varies by mode)

</details>
