import coreTokens from '../tokens/core.json';

import { createCssVariableMap, generateCssVariables } from './css';
import type { TailwindTheme, Tokens } from './types';

export type { TailwindTheme, Tokens, ColorScale, TokenScale, TypographyTokens, TransitionTokens, AccessibilityTokens, ButtonStateTokens, FormStateTokens, AnimationEntry } from './types';

const tokens: Tokens = coreTokens as Tokens;

const sanitizeFontFamily = (value: string): string[] =>
  value
    .split(',')
    .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);

export const createTailwindTheme = (source: Tokens = tokens): TailwindTheme => {
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

  return {
    colors,
    spacing: { ...source.spacing },
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

export const tailwindTheme = createTailwindTheme(tokens);
export const tailwindPreset = {
  theme: tailwindTheme
};

export { tokens, createCssVariableMap, generateCssVariables };
export default tokens;
