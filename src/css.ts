import type { CssVariableMap, CssVariableOptions, Tokens } from './types';

const DEFAULT_PREFIX = 'sp';
export const DEFAULT_SELECTOR = ':root';

const formatKey = (segment: string): string =>
  segment
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

const toVariableName = (prefix: string, ...parts: string[]): string => {
  const filtered = parts.filter(Boolean).map(formatKey);
  return `--${prefix}-${filtered.join('-')}`;
};

export const createCssVariableMap = (tokens: Tokens, options: CssVariableOptions = {}): CssVariableMap => {
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const map: CssVariableMap = {};

  const assign = (name: string, value: string | number | undefined) => {
    if (value === undefined) return;
    map[name] = String(value);
  };

  Object.entries(tokens.colors).forEach(([group, scale]) => {
    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, 'color', group, step), value);
    });
  });

  Object.entries(tokens.spacing).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'space', key), value);
  });

  Object.entries(tokens.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'radius', key), value);
  });

  Object.entries(tokens.typography.families).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'font-family', key), value);
  });

  Object.entries(tokens.typography.scale).forEach(([key, entry]) => {
    assign(toVariableName(prefix, 'font', key, 'size'), entry.fontSize);
    assign(toVariableName(prefix, 'font', key, 'line-height'), entry.lineHeight);
    assign(toVariableName(prefix, 'font', key, 'weight'), entry.fontWeight);
    assign(toVariableName(prefix, 'font', key, 'letter-spacing'), entry.letterSpacing);
  });

  Object.entries(tokens.shadows).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'shadow', key), value);
  });

  Object.entries(tokens.breakpoints).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'breakpoint', key), value);
  });

  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'z-index', key), value);
  });

  Object.entries(tokens.transitions.duration).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'duration', key), value);
  });

  Object.entries(tokens.transitions.easing).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'easing', key), value);
  });

  Object.entries(tokens.opacity).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'opacity', key), value);
  });

  // Accessibility tokens
  assign(toVariableName(prefix, 'focus-ring-width'), tokens.accessibility.focusRing.width);
  assign(toVariableName(prefix, 'focus-ring-offset'), tokens.accessibility.focusRing.offset);
  assign(toVariableName(prefix, 'focus-ring-style'), tokens.accessibility.focusRing.style);
  assign(toVariableName(prefix, 'min-touch-target'), tokens.accessibility.minTouchTarget);
  assign(toVariableName(prefix, 'min-text-size'), tokens.accessibility.minTextSize);

  // Button tokens
  Object.entries(tokens.buttons).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, value]) => {
      assign(toVariableName(prefix, 'button', variant, state), value);
    });
  });

  // Form tokens
  Object.entries(tokens.forms).forEach(([state, properties]) => {
    Object.entries(properties).forEach(([prop, value]) => {
      if (value) assign(toVariableName(prefix, 'form', state, prop), value);
    });
  });

  // Animation tokens
  Object.entries(tokens.animations).forEach(([name, animation]) => {
    assign(toVariableName(prefix, 'animation', name, 'duration'), animation.duration);
    assign(toVariableName(prefix, 'animation', name, 'easing'), animation.easing);
    assign(toVariableName(prefix, 'animation', name, 'keyframes'), animation.keyframes);
  });

  return map;
};

export const generateCssVariables = (tokens: Tokens, options: CssVariableOptions = {}): string => {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const declarations = createCssVariableMap(tokens, options);
  const lines = Object.entries(declarations)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');

  return `${selector} {\n${lines}\n}\n`;
};
