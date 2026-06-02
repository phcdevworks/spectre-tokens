import tokens, { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset],
  content: ['./example/integration-fixture/**/*.{ts,js,html}'],
  theme: {
    extend: {
      colors: {
        'ui-primary': tokens.buttons.primary.bg,
        'ui-primary-hover': tokens.buttons.primary.bgHover,
        'ui-secondary': tokens.buttons.secondary.bg,
        'ui-surface': tokens.surface.card,
        'ui-text': tokens.text.onSurface.default,
      },
      spacing: {
        'ui-page': tokens.space['48'],
        'ui-section': tokens.space['32'],
        'ui-gap': tokens.space['24'],
      },
      borderRadius: {
        'ui-card': tokens.radii.lg,
        'ui-btn': tokens.radii.md,
        'ui-input': tokens.radii.md,
      },
    },
  },
}
