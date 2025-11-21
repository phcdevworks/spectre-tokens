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
