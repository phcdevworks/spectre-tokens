import coreTokens from '../tokens/core.json';

import { generateCssVariables } from './css';
import type { SpectreTokens, SpectreModeName, SpectreModeTokens, TailwindTheme, Tokens } from './types';

export type {
  TailwindTheme,
  Tokens,
  SpectreTokens,
  SpectreModeTokens,
  SpectreModeName,
  ColorScale,
  TokenScale,
  TypographyTokens,
  TransitionTokens,
  AccessibilityTokens,
  ButtonStateTokens,
  FormStateTokens,
  AnimationEntry,
  ComponentTokens,
  ComponentBadgeTokens,
  ComponentIconBoxTokens,
  LayoutTokens
} from './types';

const tokens: SpectreTokens = coreTokens as SpectreTokens;

const sanitizeFontFamily = (value: string): string[] =>
  value
    .split(',')
    .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);

const createTailwindTheme = (source: Tokens = tokens as Tokens): TailwindTheme => {
  const colors: TailwindTheme['colors'] = {};
  Object.entries(source.colors).forEach(([group, scale]) => {
    colors[group] = { ...scale };
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
        ...(entry.letterSpacing ? { letterSpacing: entry.letterSpacing } : {})
      }
    ];
    return acc;
  }, {});

  const spacing = {
    ...(source.spacing ?? {}),
    ...(source.space ?? {})
  };

  return {
    colors,
    spacing,
    borderRadius: { ...source.radii },
    fontFamily,
    fontSize,
    boxShadow: { ...source.shadows },
    screens: { ...source.breakpoints },
    zIndex: { ...source.zIndex },
    transitionDuration: { ...source.transitions.duration },
    transitionTimingFunction: { ...source.transitions.easing },
    opacity: { ...source.opacity }
  };
};

export const tailwindTheme = createTailwindTheme(tokens as Tokens);
export const tailwindPreset = {
  theme: tailwindTheme
};

export { tokens, generateCssVariables };
export default tokens;
