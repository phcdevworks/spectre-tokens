import { coreTokens } from './generated/tokens';

import { generateCssVariables } from './css';
import type { SpectreTokens, TailwindTheme, Tokens } from './types';

export type {
  AccessibilityTokens, AnimationEntry, ButtonStateTokens, ColorScale, ComponentBadgeTokens,
  ComponentIconBoxTokens, ComponentPricingCardTokens, ComponentRatingTokens, ComponentTestimonialTokens, ComponentTokens, FormStateTokens, LayoutTokens, SpectreModeName, SpectreModeTokens, SpectreTokens, TailwindTheme,
  Tokens, TokenScale, TransitionTokens, TypographyTokens
} from './types';

const tokens: SpectreTokens = coreTokens;

const sanitizeFontFamily = (value: string): string[] =>
  value
    .split(',')
    .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);

const createTailwindTheme = (source: Tokens = tokens as Tokens): TailwindTheme => {
  const colors: TailwindTheme['colors'] = {};
  Object.entries(source.colors).forEach(([group, value]) => {
    if (typeof value === 'object' && value !== null) {
      colors[group] = { ...value } as Record<string, string>;
    } else {
      colors[group] = value as string;
    }
  });

  const fontFamily = Object.entries(source.typography.families).reduce<Record<string, string[]>>((acc, [key, value]) => {
    acc[key] = sanitizeFontFamily(value);
    return acc;
  }, {});

  const fontSize = Object.entries(source.typography.scale).reduce<TailwindTheme['fontSize']>((acc, [key, entry]) => {
    acc[key] = [
      entry.fontSize,
      {
        lineHeight: entry.lineHeight,
        ...(entry.fontWeight ? { fontWeight: entry.fontWeight } : {}),
        ...('letterSpacing' in entry ? { letterSpacing: entry.letterSpacing } : {})
      }
    ];
    return acc;
  }, {});

  return {
    colors,
    spacing: { ...(source.space ?? {}) },
    borderRadius: { ...(source.radii ?? {}) },
    fontFamily,
    fontSize,
    boxShadow: { ...source.shadows },
    screens: { ...source.breakpoints },
    zIndex: { ...source.zIndex },
    transitionDuration: { ...source.transitions.duration },
    transitionTimingFunction: { ...source.transitions.easing },
    opacity: { ...source.opacity },
    maxWidth: {
      container: source.layout?.container?.maxWidth
    },
    borderWidth: {
      DEFAULT: source.border?.width.base,
      ...(source.border?.width ?? {})
    }
  };
}

export const tailwindTheme = createTailwindTheme(tokens as Tokens);
export const tailwindPreset = {
  theme: tailwindTheme
};

export { generateCssVariables, tokens };
export default tokens;
