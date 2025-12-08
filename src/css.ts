import type { CssVariableMap, CssVariableOptions, SpectreTokens } from './types';

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

export const createCssVariableMap = (tokens: SpectreTokens, options: CssVariableOptions = {}): CssVariableMap => {
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

  const typographyScale = tokens.typography?.scale ?? {};
  const fontScale = tokens.font;

  if (fontScale && Object.keys(fontScale).length > 0) {
    Object.entries(fontScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, 'font', key, 'size'), entry.size);
      assign(toVariableName(prefix, 'font', key, 'line-height'), entry.lineHeight);
      assign(toVariableName(prefix, 'font', key, 'weight'), entry.weight);
    });
  } else {
    Object.entries(typographyScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, 'font', key, 'size'), entry.fontSize);
      assign(toVariableName(prefix, 'font', key, 'line-height'), entry.lineHeight);
      assign(toVariableName(prefix, 'font', key, 'weight'), entry.fontWeight);
    });
  }

  Object.entries(typographyScale).forEach(([key, entry]) => {
    assign(toVariableName(prefix, 'font', key, 'letter-spacing'), entry.letterSpacing);
  });

  assign(toVariableName(prefix, 'text', 'on', 'page', 'default'), tokens.text.onPage.default);
  assign(toVariableName(prefix, 'text', 'on', 'page', 'muted'), tokens.text.onPage.muted);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'default'), tokens.text.onSurface.default);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'muted'), tokens.text.onSurface.muted);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'meta'), tokens.text.onSurface.meta);

  const badge = tokens.component?.badge;
  if (badge) {
    assign(toVariableName(prefix, 'badge', 'primary', 'bg'), badge.primary.bg);
    assign(toVariableName(prefix, 'badge', 'primary', 'text'), badge.primary.text);
    assign(toVariableName(prefix, 'badge', 'success', 'bg'), badge.success.bg);
    assign(toVariableName(prefix, 'badge', 'success', 'text'), badge.success.text);
    assign(toVariableName(prefix, 'badge', 'warning', 'bg'), badge.warning.bg);
    assign(toVariableName(prefix, 'badge', 'warning', 'text'), badge.warning.text);
    assign(toVariableName(prefix, 'badge', 'danger', 'bg'), badge.danger.bg);
    assign(toVariableName(prefix, 'badge', 'danger', 'text'), badge.danger.text);
  }

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

const resolveSemanticValue = (value: unknown): string | undefined => {
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (value && typeof value === 'object' && 'value' in (value as Record<string, unknown>)) {
    return String((value as Record<string, unknown>).value);
  }
  return undefined;
};

const getPath = (source: unknown, path: string[]): unknown =>
  path.reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), source);

const pickSemantic = (...candidates: unknown[]): string | undefined => {
  for (const candidate of candidates) {
    const resolved = resolveSemanticValue(candidate);
    if (resolved !== undefined) return resolved;
  }
  return undefined;
};

export const generateCssVariables = (tokens: SpectreTokens, options: CssVariableOptions = {}): string => {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const declarations = createCssVariableMap(tokens, { ...options, prefix });
  const mapLines = Object.entries(declarations).map(([name, value]) => `  ${name}: ${value};`);

  const defaultMode = tokens.modes?.default ?? {};
  const darkMode = tokens.modes?.dark ?? {};
  const surfaceAliases = tokens.surface ?? {};
  const textAliases = tokens.text ?? {};
  const componentAliases = tokens.component ?? {};

  const baseLines: string[] = [];
  const addBase = (name: string, value?: string) => {
    if (value !== undefined) baseLines.push(`  ${name}: ${value};`);
  };

  addBase(toVariableName(prefix, 'surface', 'page'), pickSemantic(getPath(defaultMode, ['surface', 'page']), getPath(surfaceAliases, ['page'])));
  addBase(toVariableName(prefix, 'surface', 'card'), pickSemantic(getPath(defaultMode, ['surface', 'card']), getPath(surfaceAliases, ['card'])));
  addBase(toVariableName(prefix, 'surface', 'input'), pickSemantic(getPath(defaultMode, ['surface', 'input']), getPath(surfaceAliases, ['input'])));
  addBase(toVariableName(prefix, 'surface', 'overlay'), pickSemantic(getPath(defaultMode, ['surface', 'overlay']), getPath(surfaceAliases, ['overlay'])));

  addBase(toVariableName(prefix, 'text', 'on', 'page', 'default'), pickSemantic(getPath(defaultMode, ['text', 'onPage', 'default']), getPath(textAliases, ['onPage', 'default'])));
  addBase(toVariableName(prefix, 'text', 'on', 'page', 'muted'), pickSemantic(getPath(defaultMode, ['text', 'onPage', 'muted']), getPath(textAliases, ['onPage', 'muted'])));
  addBase(toVariableName(prefix, 'text', 'on', 'page', 'meta'), pickSemantic(getPath(defaultMode, ['text', 'onPage', 'meta']), getPath(textAliases, ['onPage', 'meta'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'default'), pickSemantic(getPath(defaultMode, ['text', 'onSurface', 'default']), getPath(textAliases, ['onSurface', 'default'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'muted'), pickSemantic(getPath(defaultMode, ['text', 'onSurface', 'muted']), getPath(textAliases, ['onSurface', 'muted'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'meta'), pickSemantic(getPath(defaultMode, ['text', 'onSurface', 'meta']), getPath(textAliases, ['onSurface', 'meta'])));

  addBase(toVariableName(prefix, 'component', 'card', 'text'), pickSemantic(getPath(defaultMode, ['component', 'card', 'text']), getPath(componentAliases, ['card', 'text'])));
  addBase(toVariableName(prefix, 'component', 'card', 'text-muted'), pickSemantic(getPath(defaultMode, ['component', 'card', 'textMuted']), getPath(componentAliases, ['card', 'textMuted'])));
  addBase(toVariableName(prefix, 'component', 'input', 'text'), pickSemantic(getPath(defaultMode, ['component', 'input', 'text']), getPath(componentAliases, ['input', 'text'])));
  addBase(toVariableName(prefix, 'component', 'input', 'placeholder'), pickSemantic(getPath(defaultMode, ['component', 'input', 'placeholder']), getPath(componentAliases, ['input', 'placeholder'])));
  addBase(toVariableName(prefix, 'button', 'text', 'default'), pickSemantic(getPath(defaultMode, ['component', 'button', 'textDefault']), getPath(componentAliases, ['button', 'textDefault'])));
  addBase(toVariableName(prefix, 'button', 'text', 'on', 'primary'), pickSemantic(getPath(defaultMode, ['component', 'button', 'textOnPrimary']), getPath(componentAliases, ['button', 'textOnPrimary'])));
  addBase(
    toVariableName(prefix, 'badge', 'primary', 'bg'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'primary', 'bg']), getPath(componentAliases, ['badge', 'primary', 'bg']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'primary', 'text'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'primary', 'text']), getPath(componentAliases, ['badge', 'primary', 'text']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'success', 'bg'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'success', 'bg']), getPath(componentAliases, ['badge', 'success', 'bg']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'success', 'text'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'success', 'text']), getPath(componentAliases, ['badge', 'success', 'text']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'warning', 'bg'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'warning', 'bg']), getPath(componentAliases, ['badge', 'warning', 'bg']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'warning', 'text'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'warning', 'text']), getPath(componentAliases, ['badge', 'warning', 'text']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'danger', 'bg'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'danger', 'bg']), getPath(componentAliases, ['badge', 'danger', 'bg']))
  );
  addBase(
    toVariableName(prefix, 'badge', 'danger', 'text'),
    pickSemantic(getPath(defaultMode, ['component', 'badge', 'danger', 'text']), getPath(componentAliases, ['badge', 'danger', 'text']))
  );

  const rootLines = [...baseLines, ...mapLines];

  const darkLines: string[] = [];
  const addDark = (name: string, value?: string) => {
    if (value !== undefined) darkLines.push(`  ${name}: ${value};`);
  };

  addDark(
    toVariableName(prefix, 'surface', 'page'),
    pickSemantic(getPath(darkMode, ['surface', 'page']), getPath(defaultMode, ['surface', 'page']), getPath(surfaceAliases, ['page']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'card'),
    pickSemantic(getPath(darkMode, ['surface', 'card']), getPath(defaultMode, ['surface', 'card']), getPath(surfaceAliases, ['card']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'input'),
    pickSemantic(getPath(darkMode, ['surface', 'input']), getPath(defaultMode, ['surface', 'input']), getPath(surfaceAliases, ['input']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'overlay'),
    pickSemantic(getPath(darkMode, ['surface', 'overlay']), getPath(defaultMode, ['surface', 'overlay']), getPath(surfaceAliases, ['overlay']))
  );

  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'default'),
    pickSemantic(
      getPath(darkMode, ['text', 'onPage', 'default']),
      getPath(defaultMode, ['text', 'onPage', 'default']),
      getPath(textAliases, ['onPage', 'default'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'muted'),
    pickSemantic(
      getPath(darkMode, ['text', 'onPage', 'muted']),
      getPath(defaultMode, ['text', 'onPage', 'muted']),
      getPath(textAliases, ['onPage', 'muted'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'meta'),
    pickSemantic(
      getPath(darkMode, ['text', 'onPage', 'meta']),
      getPath(defaultMode, ['text', 'onPage', 'meta']),
      getPath(textAliases, ['onPage', 'meta'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'default'),
    pickSemantic(
      getPath(darkMode, ['text', 'onSurface', 'default']),
      getPath(defaultMode, ['text', 'onSurface', 'default']),
      getPath(textAliases, ['onSurface', 'default'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'muted'),
    pickSemantic(
      getPath(darkMode, ['text', 'onSurface', 'muted']),
      getPath(defaultMode, ['text', 'onSurface', 'muted']),
      getPath(textAliases, ['onSurface', 'muted'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'meta'),
    pickSemantic(
      getPath(darkMode, ['text', 'onSurface', 'meta']),
      getPath(defaultMode, ['text', 'onSurface', 'meta']),
      getPath(textAliases, ['onSurface', 'meta'])
    )
  );

  addDark(
    toVariableName(prefix, 'component', 'card', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'card', 'text']),
      getPath(defaultMode, ['component', 'card', 'text']),
      getPath(componentAliases, ['card', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'card', 'text-muted'),
    pickSemantic(
      getPath(darkMode, ['component', 'card', 'textMuted']),
      getPath(defaultMode, ['component', 'card', 'textMuted']),
      getPath(componentAliases, ['card', 'textMuted'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'input', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'input', 'text']),
      getPath(defaultMode, ['component', 'input', 'text']),
      getPath(componentAliases, ['input', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'input', 'placeholder'),
    pickSemantic(
      getPath(darkMode, ['component', 'input', 'placeholder']),
      getPath(defaultMode, ['component', 'input', 'placeholder']),
      getPath(componentAliases, ['input', 'placeholder'])
    )
  );
  addDark(
    toVariableName(prefix, 'button', 'text', 'default'),
    pickSemantic(
      getPath(darkMode, ['component', 'button', 'textDefault']),
      getPath(defaultMode, ['component', 'button', 'textDefault']),
      getPath(componentAliases, ['button', 'textDefault'])
    )
  );
  addDark(
    toVariableName(prefix, 'button', 'text', 'on', 'primary'),
    pickSemantic(
      getPath(darkMode, ['component', 'button', 'textOnPrimary']),
      getPath(defaultMode, ['component', 'button', 'textOnPrimary']),
      getPath(componentAliases, ['button', 'textOnPrimary'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'primary', 'bg'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'primary', 'bg']),
      getPath(defaultMode, ['component', 'badge', 'primary', 'bg']),
      getPath(componentAliases, ['badge', 'primary', 'bg'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'primary', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'primary', 'text']),
      getPath(defaultMode, ['component', 'badge', 'primary', 'text']),
      getPath(componentAliases, ['badge', 'primary', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'success', 'bg'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'success', 'bg']),
      getPath(defaultMode, ['component', 'badge', 'success', 'bg']),
      getPath(componentAliases, ['badge', 'success', 'bg'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'success', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'success', 'text']),
      getPath(defaultMode, ['component', 'badge', 'success', 'text']),
      getPath(componentAliases, ['badge', 'success', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'warning', 'bg'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'warning', 'bg']),
      getPath(defaultMode, ['component', 'badge', 'warning', 'bg']),
      getPath(componentAliases, ['badge', 'warning', 'bg'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'warning', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'warning', 'text']),
      getPath(defaultMode, ['component', 'badge', 'warning', 'text']),
      getPath(componentAliases, ['badge', 'warning', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'danger', 'bg'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'danger', 'bg']),
      getPath(defaultMode, ['component', 'badge', 'danger', 'bg']),
      getPath(componentAliases, ['badge', 'danger', 'bg'])
    )
  );
  addDark(
    toVariableName(prefix, 'badge', 'danger', 'text'),
    pickSemantic(
      getPath(darkMode, ['component', 'badge', 'danger', 'text']),
      getPath(defaultMode, ['component', 'badge', 'danger', 'text']),
      getPath(componentAliases, ['badge', 'danger', 'text'])
    )
  );

  const rootBlock = `${selector} {\n${rootLines.join('\n')}\n}`;
  const darkBlock = `${selector}[data-spectre-theme="dark"] {\n${darkLines.join('\n')}\n}`;

  return `${rootBlock}\n${darkBlock}\n`;
};
