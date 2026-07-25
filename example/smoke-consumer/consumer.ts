import tokens, {
  generateCssVariables,
  type SpectreModeName,
  type SpectreTokens
} from '@phcdevworks/spectre-tokens';

export const semanticCard = {
  background: tokens.surface.card,
  color: tokens.text.onSurface.default,
  borderColor: tokens.component.iconBox.border,
  padding: tokens.space['16']
} satisfies Record<string, string>;

export const themedSurface = (mode: SpectreModeName) => {
  const modeTokens = tokens.modes[mode];

  return {
    mode,
    page: modeTokens.surface.page,
    text: modeTokens.text.onPage.default,
    cardText: modeTokens.component.card.text
  };
};

export const cssPreview = generateCssVariables(tokens).slice(0, 120);

export const typedTokens: SpectreTokens = tokens;
