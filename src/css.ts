import type {
  ComponentBadgeTokens,
  ComponentIconBoxTokens,
  CssVariableMap,
  CssVariableOptions,
  SpectreTokens,
  Tokens,
  TypographyScaleEntry
} from './types';

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

const BADGE_VARIANTS: Array<{ variant: string; bgKey: keyof ComponentBadgeTokens; textKey: keyof ComponentBadgeTokens }> = [
  { variant: 'neutral', bgKey: 'neutralBg', textKey: 'neutralText' },
  { variant: 'info', bgKey: 'infoBg', textKey: 'infoText' },
  { variant: 'success', bgKey: 'successBg', textKey: 'successText' },
  { variant: 'warning', bgKey: 'warningBg', textKey: 'warningText' },
  { variant: 'danger', bgKey: 'dangerBg', textKey: 'dangerText' }
];

const ICON_BOX_FIELDS: Array<{ name: string; tokenKey: keyof ComponentIconBoxTokens }> = [
  { name: 'bg', tokenKey: 'bg' },
  { name: 'border', tokenKey: 'border' },
  { name: 'icon-default', tokenKey: 'iconDefault' },
  { name: 'icon-success', tokenKey: 'iconSuccess' },
  { name: 'icon-warning', tokenKey: 'iconWarning' },
  { name: 'icon-danger', tokenKey: 'iconDanger' }
];

const resolveTokenReference = (tokens: SpectreTokens, reference: string): string => {
  const path = reference.slice(1, -1).split('.');
  let current: unknown = tokens;
  for (const part of path) {
    if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return reference;
    }
  }
  return typeof current === 'string' || typeof current === 'number' ? String(current) : reference;
};

const hexToRgba = (hex: string, opacity: string): string => {
  const cleanHex = hex.replace('#', '');
  let r = 0, g = 0, b = 0;
  if (cleanHex.length === 3) {
    const rh = cleanHex.charAt(0);
    const gh = cleanHex.charAt(1);
    const bh = cleanHex.charAt(2);
    r = parseInt(rh + rh, 16);
    g = parseInt(gh + gh, 16);
    b = parseInt(bh + bh, 16);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const resolveValue = (tokens: SpectreTokens, value: unknown): string => {
  let str = String(value);
  const regex = /\{([^}]+)\}/g;
  
  // Resolve all token references in the string
  str = str.replace(regex, (match) => resolveTokenReference(tokens, match));
  
  // Handle "hex / opacity" -> "rgba(r, g, b, opacity)"
  const opacityRegex = /(#[0-9a-fA-F]{3,6})\s*\/\s*([0-9.]+)/g;
  str = str.replace(opacityRegex, (match, hex, opacity) => hexToRgba(hex, opacity));
  
  return str;
};

export const createCssVariableMap = (tokens: SpectreTokens, options: CssVariableOptions = {}): CssVariableMap => {
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const map: CssVariableMap = {};
  const baseTokens = tokens as unknown as Tokens;

  const assign = (name: string, value: unknown) => {
    const resolved = resolveSemanticValue(value, tokens);
    if (resolved !== undefined) {
      map[name] = resolved;
      return;
    }
    if (value === undefined) return;
    map[name] = resolveValue(tokens, value);
  };

  Object.entries(baseTokens.colors).forEach(([group, scale]) => {
    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, 'color', group, step), value);
    });
  });

  if (baseTokens.space) {
    Object.entries(baseTokens.space).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'space', key), value);
    });
  }

  if (baseTokens.layout) {
    const layout = baseTokens.layout as unknown as Record<string, Record<string, Record<string, string>>>;

    if (layout.section?.padding) {
      Object.entries(layout.section.padding).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'section', 'padding', key), value);
      });
    }

    if (layout.section?.gap) {
      Object.entries(layout.section.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'section', 'gap', key), value);
      });
    }

    if (layout.stack?.gap) {
      Object.entries(layout.stack.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'stack', 'gap', key), value);
      });
    }

    if (layout.container?.paddingInline) {
      Object.entries(layout.container.paddingInline).forEach(([key, value]) => {
        assign(toVariableName(prefix, 'layout', 'container', 'padding-inline', key), value);
      });
    }

    const container = layout.container as Record<string, unknown> | undefined;
    if (container?.maxWidth) {
      assign(toVariableName(prefix, 'layout', 'container', 'max-width'), container.maxWidth);
    }
  }

  const border = (baseTokens as unknown as Record<string, unknown>).border as Record<string, Record<string, string>> | undefined;
  if (border?.width) {
    Object.entries(border.width).forEach(([key, value]) => {
      assign(toVariableName(prefix, 'border', 'width', key), value);
    });
  }

  Object.entries(baseTokens.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'radius', key), value);
  });

  Object.entries(baseTokens.typography.families).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'font-family', key), value);
  });

  const typographyScale = baseTokens.typography?.scale ?? {};
  const fontScale = baseTokens.font;

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
    const scaleEntry = entry as unknown as TypographyScaleEntry;
    assign(toVariableName(prefix, 'font', key, 'letter-spacing'), scaleEntry.letterSpacing);
  });

  assign(toVariableName(prefix, 'text', 'on', 'page', 'default'), tokens.text.onPage.default);
  assign(toVariableName(prefix, 'text', 'on', 'page', 'muted'), tokens.text.onPage.muted);
  assign(toVariableName(prefix, 'text', 'on', 'page', 'subtle'), tokens.text.onPage.subtle);
  assign(toVariableName(prefix, 'text', 'on', 'page', 'meta'), tokens.text.onPage.meta);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'default'), tokens.text.onSurface.default);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'muted'), tokens.text.onSurface.muted);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'subtle'), tokens.text.onSurface.subtle);
  assign(toVariableName(prefix, 'text', 'on', 'surface', 'meta'), tokens.text.onSurface.meta);

  const badge = tokens.component?.badge;
  if (badge) {
    BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
      assign(toVariableName(prefix, 'badge', variant, 'bg'), badge[bgKey]);
      assign(toVariableName(prefix, 'badge', variant, 'text'), badge[textKey]);
    });
  }

  const iconBox = tokens.component?.iconBox;
  if (iconBox) {
    ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
      assign(toVariableName(prefix, 'icon-box', name), iconBox[tokenKey]);
    });
  }

  Object.entries(baseTokens.shadows).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'shadow', key), value);
  });

  Object.entries(baseTokens.breakpoints).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'breakpoint', key), value);
  });

  Object.entries(baseTokens.zIndex).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'z-index', key), value);
  });

  Object.entries(baseTokens.transitions.duration).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'duration', key), value);
  });

  Object.entries(baseTokens.transitions.easing).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'easing', key), value);
  });

  Object.entries(baseTokens.opacity).forEach(([key, value]) => {
    assign(toVariableName(prefix, 'opacity', key), value);
  });

  // Accessibility tokens
  assign(toVariableName(prefix, 'focus-ring-width'), baseTokens.accessibility.focusRing.width);
  assign(toVariableName(prefix, 'focus-ring-offset'), baseTokens.accessibility.focusRing.offset);
  assign(toVariableName(prefix, 'focus-ring-style'), baseTokens.accessibility.focusRing.style);
  assign(toVariableName(prefix, 'min-touch-target'), baseTokens.accessibility.minTouchTarget);
  assign(toVariableName(prefix, 'min-text-size'), baseTokens.accessibility.minTextSize);

  // Button tokens
  Object.entries(baseTokens.buttons).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, value]) => {
      assign(toVariableName(prefix, 'button', variant, state), value);
    });
  });

  // Form tokens
  Object.entries(baseTokens.forms).forEach(([state, properties]) => {
    Object.entries(properties).forEach(([prop, value]) => {
      if (value) assign(toVariableName(prefix, 'form', state, prop), value);
    });
  });

  // Animation tokens
  if (baseTokens.animations) {
    Object.entries(baseTokens.animations as unknown as Record<string, { duration: string; easing: string; keyframes: string }>).forEach(([name, animation]) => {
      assign(toVariableName(prefix, 'animation', name, 'duration'), animation.duration);
      assign(toVariableName(prefix, 'animation', name, 'easing'), animation.easing);
      assign(toVariableName(prefix, 'animation', name, 'keyframes'), animation.keyframes);
    });
  }

  return map;
};

const resolveSemanticValue = (value: unknown, tokens: SpectreTokens): string | undefined => {
  if (typeof value === 'string' || typeof value === 'number') {
    return resolveValue(tokens, value);
  }
  if (value && typeof value === 'object' && 'value' in (value as Record<string, unknown>)) {
    return resolveValue(tokens, (value as Record<string, unknown>).value);
  }
  return undefined;
};

const getPath = (source: unknown, path: string[]): unknown =>
  path.reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), source);

const pickSemantic = (tokens: SpectreTokens, ...candidates: unknown[]): string | undefined => {
  for (const candidate of candidates) {
    const resolved = resolveSemanticValue(candidate, tokens);
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

  addBase(toVariableName(prefix, 'surface', 'page'), pickSemantic(tokens, getPath(defaultMode, ['surface', 'page']), getPath(surfaceAliases, ['page'])));
  addBase(toVariableName(prefix, 'surface', 'card'), pickSemantic(tokens, getPath(defaultMode, ['surface', 'card']), getPath(surfaceAliases, ['card'])));
  addBase(toVariableName(prefix, 'surface', 'input'), pickSemantic(tokens, getPath(defaultMode, ['surface', 'input']), getPath(surfaceAliases, ['input'])));
  addBase(toVariableName(prefix, 'surface', 'overlay'), pickSemantic(tokens, getPath(defaultMode, ['surface', 'overlay']), getPath(surfaceAliases, ['overlay'])));
  addBase(toVariableName(prefix, 'surface', 'hero'), pickSemantic(tokens, getPath(defaultMode, ['surface', 'hero']), getPath(surfaceAliases, ['hero'])));

  addBase(toVariableName(prefix, 'text', 'on', 'page', 'default'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onPage', 'default']), getPath(textAliases, ['onPage', 'default'])));
  addBase(toVariableName(prefix, 'text', 'on', 'page', 'muted'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onPage', 'muted']), getPath(textAliases, ['onPage', 'muted'])));
  addBase(toVariableName(prefix, 'text', 'on', 'page', 'subtle'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onPage', 'subtle']), getPath(textAliases, ['onPage', 'subtle'])));
  addBase(toVariableName(prefix, 'text', 'on', 'page', 'meta'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onPage', 'meta']), getPath(textAliases, ['onPage', 'meta'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'default'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onSurface', 'default']), getPath(textAliases, ['onSurface', 'default'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'muted'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onSurface', 'muted']), getPath(textAliases, ['onSurface', 'muted'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'subtle'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onSurface', 'subtle']), getPath(textAliases, ['onSurface', 'subtle'])));
  addBase(toVariableName(prefix, 'text', 'on', 'surface', 'meta'), pickSemantic(tokens, getPath(defaultMode, ['text', 'onSurface', 'meta']), getPath(textAliases, ['onSurface', 'meta'])));

  addBase(toVariableName(prefix, 'component', 'card', 'text'), pickSemantic(tokens, getPath(defaultMode, ['component', 'card', 'text']), getPath(componentAliases, ['card', 'text'])));
  addBase(toVariableName(prefix, 'component', 'card', 'text-muted'), pickSemantic(tokens, getPath(defaultMode, ['component', 'card', 'textMuted']), getPath(componentAliases, ['card', 'textMuted'])));
  addBase(toVariableName(prefix, 'component', 'input', 'text'), pickSemantic(tokens, getPath(defaultMode, ['component', 'input', 'text']), getPath(componentAliases, ['input', 'text'])));
  addBase(toVariableName(prefix, 'component', 'input', 'placeholder'), pickSemantic(tokens, getPath(defaultMode, ['component', 'input', 'placeholder']), getPath(componentAliases, ['input', 'placeholder'])));
  addBase(toVariableName(prefix, 'button', 'text', 'default'), pickSemantic(tokens, getPath(defaultMode, ['component', 'button', 'textDefault']), getPath(componentAliases, ['button', 'textDefault'])));
  addBase(toVariableName(prefix, 'button', 'text', 'on', 'primary'), pickSemantic(tokens, getPath(defaultMode, ['component', 'button', 'textOnPrimary']), getPath(componentAliases, ['button', 'textOnPrimary'])));
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addBase(
      toVariableName(prefix, 'badge', variant, 'bg'),
      pickSemantic(tokens, getPath(defaultMode, ['component', 'badge', bgKey]), getPath(componentAliases, ['badge', bgKey]))
    );
    addBase(
      toVariableName(prefix, 'badge', variant, 'text'),
      pickSemantic(tokens, getPath(defaultMode, ['component', 'badge', textKey]), getPath(componentAliases, ['badge', textKey]))
    );
  });
  ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
    addBase(
      toVariableName(prefix, 'icon-box', name),
      pickSemantic(tokens, getPath(defaultMode, ['component', 'iconBox', tokenKey]), getPath(componentAliases, ['iconBox', tokenKey]))
    );
  });

  const rootLines = [...baseLines, ...mapLines];

  const darkLines: string[] = [];
  const addDark = (name: string, value?: string) => {
    if (value !== undefined) darkLines.push(`  ${name}: ${value};`);
  };

  addDark(
    toVariableName(prefix, 'surface', 'page'),
    pickSemantic(tokens, getPath(darkMode, ['surface', 'page']), getPath(defaultMode, ['surface', 'page']), getPath(surfaceAliases, ['page']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'card'),
    pickSemantic(tokens, getPath(darkMode, ['surface', 'card']), getPath(defaultMode, ['surface', 'card']), getPath(surfaceAliases, ['card']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'input'),
    pickSemantic(tokens, getPath(darkMode, ['surface', 'input']), getPath(defaultMode, ['surface', 'input']), getPath(surfaceAliases, ['input']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'overlay'),
    pickSemantic(tokens, getPath(darkMode, ['surface', 'overlay']), getPath(defaultMode, ['surface', 'overlay']), getPath(surfaceAliases, ['overlay']))
  );
  addDark(
    toVariableName(prefix, 'surface', 'hero'),
    pickSemantic(tokens, getPath(darkMode, ['surface', 'hero']), getPath(defaultMode, ['surface', 'hero']), getPath(surfaceAliases, ['hero']))
  );

  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'default'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onPage', 'default']),
      getPath(defaultMode, ['text', 'onPage', 'default']),
      getPath(textAliases, ['onPage', 'default'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'muted'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onPage', 'muted']),
      getPath(defaultMode, ['text', 'onPage', 'muted']),
      getPath(textAliases, ['onPage', 'muted'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'subtle'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onPage', 'subtle']),
      getPath(defaultMode, ['text', 'onPage', 'subtle']),
      getPath(textAliases, ['onPage', 'subtle'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'page', 'meta'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onPage', 'meta']),
      getPath(defaultMode, ['text', 'onPage', 'meta']),
      getPath(textAliases, ['onPage', 'meta'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'default'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onSurface', 'default']),
      getPath(defaultMode, ['text', 'onSurface', 'default']),
      getPath(textAliases, ['onSurface', 'default'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'muted'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onSurface', 'muted']),
      getPath(defaultMode, ['text', 'onSurface', 'muted']),
      getPath(textAliases, ['onSurface', 'muted'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'subtle'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onSurface', 'subtle']),
      getPath(defaultMode, ['text', 'onSurface', 'subtle']),
      getPath(textAliases, ['onSurface', 'subtle'])
    )
  );
  addDark(
    toVariableName(prefix, 'text', 'on', 'surface', 'meta'),
    pickSemantic(tokens, 
      getPath(darkMode, ['text', 'onSurface', 'meta']),
      getPath(defaultMode, ['text', 'onSurface', 'meta']),
      getPath(textAliases, ['onSurface', 'meta'])
    )
  );

  addDark(
    toVariableName(prefix, 'component', 'card', 'text'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'card', 'text']),
      getPath(defaultMode, ['component', 'card', 'text']),
      getPath(componentAliases, ['card', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'card', 'text-muted'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'card', 'textMuted']),
      getPath(defaultMode, ['component', 'card', 'textMuted']),
      getPath(componentAliases, ['card', 'textMuted'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'input', 'text'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'input', 'text']),
      getPath(defaultMode, ['component', 'input', 'text']),
      getPath(componentAliases, ['input', 'text'])
    )
  );
  addDark(
    toVariableName(prefix, 'component', 'input', 'placeholder'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'input', 'placeholder']),
      getPath(defaultMode, ['component', 'input', 'placeholder']),
      getPath(componentAliases, ['input', 'placeholder'])
    )
  );
  addDark(
    toVariableName(prefix, 'button', 'text', 'default'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'button', 'textDefault']),
      getPath(defaultMode, ['component', 'button', 'textDefault']),
      getPath(componentAliases, ['button', 'textDefault'])
    )
  );
  addDark(
    toVariableName(prefix, 'button', 'text', 'on', 'primary'),
    pickSemantic(tokens, 
      getPath(darkMode, ['component', 'button', 'textOnPrimary']),
      getPath(defaultMode, ['component', 'button', 'textOnPrimary']),
      getPath(componentAliases, ['button', 'textOnPrimary'])
    )
  );
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addDark(
      toVariableName(prefix, 'badge', variant, 'bg'),
      pickSemantic(tokens, 
        getPath(darkMode, ['component', 'badge', bgKey]),
        getPath(defaultMode, ['component', 'badge', bgKey]),
        getPath(componentAliases, ['badge', bgKey])
      )
    );
    addDark(
      toVariableName(prefix, 'badge', variant, 'text'),
      pickSemantic(tokens, 
        getPath(darkMode, ['component', 'badge', textKey]),
        getPath(defaultMode, ['component', 'badge', textKey]),
        getPath(componentAliases, ['badge', textKey])
      )
    );
  });
  ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
    addDark(
      toVariableName(prefix, 'icon-box', name),
      pickSemantic(tokens, 
        getPath(darkMode, ['component', 'iconBox', tokenKey]),
        getPath(defaultMode, ['component', 'iconBox', tokenKey]),
        getPath(componentAliases, ['iconBox', tokenKey])
      )
    );
  });

  const rootBlock = `${selector} {\n${rootLines.join('\n')}\n}`;
  const darkBlock = `${selector}[data-spectre-theme="dark"] {\n${darkLines.join('\n')}\n}`;

  return `${rootBlock}\n${darkBlock}\n`;
};
