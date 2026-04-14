import tokens, { tailwindTheme } from '@phcdevworks/spectre-tokens';

export const jsConsumerSample = {
  primaryButton: {
    background: tokens.buttons.primary.bg,
    text: tokens.buttons.primary.text
  },
  darkModePage: tokens.modes.dark.surface.page,
  brand500: tailwindTheme.colors.brand['500']
};
