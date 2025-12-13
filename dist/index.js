// tokens/core.json
var core_default = {
  colors: {
    brand: {
      "50": "#f5f0ff",
      "100": "#ebe2ff",
      "200": "#d7c6ff",
      "300": "#bfa1ff",
      "400": "#a37aff",
      "500": "#8652ff",
      "600": "#6c32e6",
      "700": "#5626b4",
      "800": "#3d1b7f",
      "900": "#241147"
    },
    neutral: {
      "50": "#f8fafc",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cbd5f5",
      "400": "#94a3b8",
      "500": "#64748b",
      "600": "#475569",
      "700": "#334155",
      "800": "#1e293b",
      "900": "#0f172a"
    },
    accent: {
      "50": "#e5fff8",
      "100": "#b8ffed",
      "200": "#89ffe1",
      "300": "#59ffd6",
      "400": "#29ffca",
      "500": "#03e6b3",
      "600": "#00b389",
      "700": "#008060",
      "800": "#004d38",
      "900": "#002a20"
    },
    success: {
      "50": "#f0fdf4",
      "100": "#dcfce7",
      "200": "#bbf7d0",
      "300": "#86efac",
      "400": "#4ade80",
      "500": "#22c55e",
      "600": "#16a34a",
      "700": "#15803d",
      "800": "#166534",
      "900": "#14532d"
    },
    warning: {
      "50": "#fffbeb",
      "100": "#fef3c7",
      "200": "#fde68a",
      "300": "#fcd34d",
      "400": "#fbbf24",
      "500": "#f59e0b",
      "600": "#d97706",
      "700": "#b45309",
      "800": "#92400e",
      "900": "#78350f"
    },
    error: {
      "50": "#fef2f2",
      "100": "#fee2e2",
      "200": "#fecaca",
      "300": "#fca5a5",
      "400": "#f87171",
      "500": "#ef4444",
      "600": "#dc2626",
      "700": "#b91c1c",
      "800": "#991b1b",
      "900": "#7f1d1d"
    },
    info: {
      "50": "#eff6ff",
      "100": "#dbeafe",
      "200": "#bfdbfe",
      "300": "#93c5fd",
      "400": "#60a5fa",
      "500": "#3b82f6",
      "600": "#2563eb",
      "700": "#1d4ed8",
      "800": "#1e40af",
      "900": "#1e3a8a"
    },
    focus: {
      primary: "#8652ff",
      error: "#ef4444",
      info: "#3b82f6"
    }
  },
  surface: {
    page: {
      value: "#f8fafc",
      description: "primary app background"
    },
    card: {
      value: "#ffffff",
      description: "containers and tiles"
    },
    input: {
      value: "#ffffff",
      description: "form inputs, textareas"
    },
    overlay: {
      value: "rgba(15,23,42,0.6)",
      description: "modals, dropdowns, flyouts"
    }
  },
  text: {
    onPage: {
      default: "#0f172a",
      muted: "#475569",
      subtle: "#94a3b8",
      meta: "#94a3b8"
    },
    onSurface: {
      default: "#0f172a",
      muted: "#6b7280",
      subtle: "#94a3b8",
      meta: "#94a3b8"
    }
  },
  component: {
    card: {
      text: "#0f172a",
      textMuted: "#6b7280"
    },
    input: {
      text: "#0f172a",
      placeholder: "#94a3b8"
    },
    button: {
      textDefault: "#0f172a",
      textOnPrimary: "#ffffff"
    },
    badge: {
      neutralBg: "#f1f5f9",
      neutralText: "#334155",
      infoBg: "#dbeafe",
      infoText: "#1d4ed8",
      successBg: "#dcfce7",
      successText: "#15803d",
      warningBg: "#fef3c7",
      warningText: "#b45309",
      dangerBg: "#fee2e2",
      dangerText: "#b91c1c"
    },
    iconBox: {
      bg: "#ffffff",
      border: "#e2e8f0",
      iconDefault: "#6c32e6",
      iconSuccess: "#16a34a",
      iconWarning: "#d97706",
      iconDanger: "#dc2626"
    }
  },
  modes: {
    default: {
      surface: {
        page: {
          value: "#f8fafc"
        },
        card: {
          value: "#ffffff"
        },
        input: {
          value: "#ffffff"
        },
        overlay: {
          value: "rgba(15,23,42,0.6)"
        }
      },
      text: {
        onPage: {
          default: {
            value: "#0f172a"
          },
          muted: {
            value: "#475569"
          },
          subtle: {
            value: "#94a3b8"
          },
          meta: {
            value: "#94a3b8"
          }
        },
        onSurface: {
          default: {
            value: "#0f172a"
          },
          muted: {
            value: "#6b7280"
          },
          subtle: {
            value: "#94a3b8"
          },
          meta: {
            value: "#94a3b8"
          }
        }
      },
      component: {
        card: {
          text: {
            value: "#0f172a"
          },
          textMuted: {
            value: "#6b7280"
          }
        },
        input: {
          text: {
            value: "#0f172a"
          },
          placeholder: {
            value: "#94a3b8"
          }
        },
        button: {
          textDefault: {
            value: "#0f172a"
          },
          textOnPrimary: {
            value: "#ffffff"
          }
        },
        badge: {
          neutralBg: {
            value: "#f1f5f9"
          },
          neutralText: {
            value: "#334155"
          },
          infoBg: {
            value: "#dbeafe"
          },
          infoText: {
            value: "#1d4ed8"
          },
          successBg: {
            value: "#dcfce7"
          },
          successText: {
            value: "#15803d"
          },
          warningBg: {
            value: "#fef3c7"
          },
          warningText: {
            value: "#b45309"
          },
          dangerBg: {
            value: "#fee2e2"
          },
          dangerText: {
            value: "#b91c1c"
          }
        },
        iconBox: {
          bg: {
            value: "#ffffff"
          },
          border: {
            value: "#e2e8f0"
          },
          iconDefault: {
            value: "#6c32e6"
          },
          iconSuccess: {
            value: "#16a34a"
          },
          iconWarning: {
            value: "#d97706"
          },
          iconDanger: {
            value: "#dc2626"
          }
        }
      }
    },
    dark: {
      surface: {
        page: {
          value: "#0f172a"
        },
        card: {
          value: "#1e293b"
        },
        input: {
          value: "#334155"
        },
        overlay: {
          value: "#1e293b"
        }
      },
      text: {
        onPage: {
          default: {
            value: "#f8fafc"
          },
          muted: {
            value: "#cbd5f5"
          },
          subtle: {
            value: "#94a3b8"
          },
          meta: {
            value: "#94a3b8"
          }
        },
        onSurface: {
          default: {
            value: "#f1f5f9"
          },
          muted: {
            value: "#cbd5f5"
          },
          subtle: {
            value: "#94a3b8"
          },
          meta: {
            value: "#94a3b8"
          }
        }
      },
      component: {
        card: {
          text: {
            value: "#f1f5f9"
          },
          textMuted: {
            value: "#cbd5f5"
          }
        },
        input: {
          text: {
            value: "#f1f5f9"
          },
          placeholder: {
            value: "#94a3b8"
          }
        },
        button: {
          textDefault: {
            value: "#f1f5f9"
          },
          textOnPrimary: {
            value: "#ffffff"
          }
        },
        badge: {
          neutralBg: {
            value: "#334155"
          },
          neutralText: {
            value: "#f1f5f9"
          },
          infoBg: {
            value: "#1e40af"
          },
          infoText: {
            value: "#dbeafe"
          },
          successBg: {
            value: "#166534"
          },
          successText: {
            value: "#dcfce7"
          },
          warningBg: {
            value: "#92400e"
          },
          warningText: {
            value: "#fef3c7"
          },
          dangerBg: {
            value: "#991b1b"
          },
          dangerText: {
            value: "#fee2e2"
          }
        },
        iconBox: {
          bg: {
            value: "#1e293b"
          },
          border: {
            value: "#334155"
          },
          iconDefault: {
            value: "#a37aff"
          },
          iconSuccess: {
            value: "#4ade80"
          },
          iconWarning: {
            value: "#fbbf24"
          },
          iconDanger: {
            value: "#f87171"
          }
        }
      }
    }
  },
  opacity: {
    disabled: "0.38",
    hover: "0.92",
    active: "0.84",
    focus: "1",
    overlay: "0.5",
    tooltip: "0.95"
  },
  accessibility: {
    focusRing: {
      width: "2px",
      offset: "2px",
      style: "solid"
    },
    minTouchTarget: "44px",
    minTextSize: "16px"
  },
  buttons: {
    primary: {
      bg: "#8652ff",
      bgHover: "#6c32e6",
      bgActive: "#5626b4",
      bgDisabled: "#cbd5f5",
      text: "#ffffff",
      textDisabled: "#94a3b8"
    },
    secondary: {
      bg: "#ffffff",
      bgHover: "#f1f5f9",
      bgActive: "#e2e8f0",
      bgDisabled: "#f8fafc",
      text: "#8652ff",
      textDisabled: "#94a3b8",
      border: "#8652ff",
      borderDisabled: "#cbd5f5"
    },
    ghost: {
      bg: "transparent",
      bgHover: "#f5f0ff",
      bgActive: "#ebe2ff",
      bgDisabled: "transparent",
      text: "#8652ff",
      textDisabled: "#94a3b8"
    },
    danger: {
      bg: "#ef4444",
      bgHover: "#dc2626",
      bgActive: "#b91c1c",
      bgDisabled: "#fecaca",
      text: "#ffffff",
      textDisabled: "#94a3b8"
    },
    success: {
      bg: "#22c55e",
      bgHover: "#16a34a",
      bgActive: "#15803d",
      bgDisabled: "#bbf7d0",
      text: "#ffffff",
      textDisabled: "#94a3b8"
    }
  },
  forms: {
    default: {
      bg: "#ffffff",
      border: "#cbd5f5",
      text: "#0f172a",
      placeholder: "#94a3b8"
    },
    hover: {
      border: "#8652ff"
    },
    focus: {
      border: "#8652ff",
      ring: "#8652ff"
    },
    valid: {
      border: "#22c55e",
      bg: "#f0fdf4",
      text: "#15803d"
    },
    invalid: {
      border: "#ef4444",
      bg: "#fef2f2",
      text: "#b91c1c"
    },
    disabled: {
      bg: "#f8fafc",
      border: "#e2e8f0",
      text: "#94a3b8"
    }
  },
  spacing: {
    none: "0rem",
    "3xs": "0.125rem",
    "2xs": "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  radii: {
    none: "0",
    sm: "2px",
    md: "4px",
    lg: "8px",
    pill: "999px"
  },
  borders: {
    card: "#334155",
    input: "#cbd5f5"
  },
  font: {
    xs: {
      size: "0.75rem",
      lineHeight: "1.25rem",
      weight: 400
    },
    sm: {
      size: "0.875rem",
      lineHeight: "1.5rem",
      weight: 400
    },
    md: {
      size: "1rem",
      lineHeight: "1.75rem",
      weight: 500
    },
    lg: {
      size: "1.25rem",
      lineHeight: "2rem",
      weight: 500
    },
    xl: {
      size: "1.5rem",
      lineHeight: "2.125rem",
      weight: 600
    },
    "2xl": {
      size: "1.875rem",
      lineHeight: "2.5rem",
      weight: 600
    }
  },
  typography: {
    families: {
      sans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      serif: "'Spectre Serif', 'Georgia', serif",
      mono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
    },
    scale: {
      xs: {
        fontSize: "0.75rem",
        lineHeight: "1.25rem",
        fontWeight: 400,
        letterSpacing: "0.02em"
      },
      sm: {
        fontSize: "0.875rem",
        lineHeight: "1.5rem",
        fontWeight: 400
      },
      md: {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        fontWeight: 500
      },
      lg: {
        fontSize: "1.25rem",
        lineHeight: "2rem",
        fontWeight: 600
      },
      xl: {
        fontSize: "1.5rem",
        lineHeight: "2.125rem",
        fontWeight: 600
      },
      "2xl": {
        fontSize: "1.875rem",
        lineHeight: "2.5rem",
        fontWeight: 700
      },
      "3xl": {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: 700
      }
    }
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(15, 23, 42, 0.08)",
    md: "0 3px 8px -1px rgba(15, 23, 42, 0.1)",
    lg: "0 8px 20px -4px rgba(15, 23, 42, 0.18)"
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  zIndex: {
    base: "0",
    dropdown: "1000",
    sticky: "1100",
    fixed: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    tooltip: "1600"
  },
  transitions: {
    duration: {
      instant: "75ms",
      fast: "150ms",
      base: "200ms",
      moderate: "300ms",
      slow: "500ms",
      slower: "700ms"
    },
    easing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
  },
  animations: {
    fadeIn: {
      duration: "200ms",
      easing: "cubic-bezier(0, 0, 0.2, 1)",
      keyframes: "fade-in"
    },
    fadeOut: {
      duration: "150ms",
      easing: "cubic-bezier(0.4, 0, 1, 1)",
      keyframes: "fade-out"
    },
    slideUp: {
      duration: "300ms",
      easing: "cubic-bezier(0, 0, 0.2, 1)",
      keyframes: "slide-up"
    },
    slideDown: {
      duration: "300ms",
      easing: "cubic-bezier(0, 0, 0.2, 1)",
      keyframes: "slide-down"
    },
    scaleIn: {
      duration: "200ms",
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      keyframes: "scale-in"
    },
    bounce: {
      duration: "500ms",
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      keyframes: "bounce"
    },
    shake: {
      duration: "400ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      keyframes: "shake"
    },
    pulse: {
      duration: "1500ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      keyframes: "pulse"
    }
  }
};

// src/css.ts
var DEFAULT_PREFIX = "sp";
var DEFAULT_SELECTOR = ":root";
var formatKey = (segment) => segment.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
var toVariableName = (prefix, ...parts) => {
  const filtered = parts.filter(Boolean).map(formatKey);
  return `--${prefix}-${filtered.join("-")}`;
};
var BADGE_VARIANTS = [
  { variant: "neutral", bgKey: "neutralBg", textKey: "neutralText" },
  { variant: "info", bgKey: "infoBg", textKey: "infoText" },
  { variant: "success", bgKey: "successBg", textKey: "successText" },
  { variant: "warning", bgKey: "warningBg", textKey: "warningText" },
  { variant: "danger", bgKey: "dangerBg", textKey: "dangerText" }
];
var ICON_BOX_FIELDS = [
  { name: "bg", tokenKey: "bg" },
  { name: "border", tokenKey: "border" },
  { name: "icon-default", tokenKey: "iconDefault" },
  { name: "icon-success", tokenKey: "iconSuccess" },
  { name: "icon-warning", tokenKey: "iconWarning" },
  { name: "icon-danger", tokenKey: "iconDanger" }
];
var createCssVariableMap = (tokens2, options = {}) => {
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const map = {};
  const baseTokens = tokens2;
  const assign = (name, value) => {
    const resolved = resolveSemanticValue(value);
    if (resolved !== void 0) {
      map[name] = resolved;
      return;
    }
    if (value === void 0) return;
    map[name] = String(value);
  };
  Object.entries(baseTokens.colors).forEach(([group, scale]) => {
    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, "color", group, step), value);
    });
  });
  Object.entries(baseTokens.spacing).forEach(([key, value]) => {
    assign(toVariableName(prefix, "space", key), value);
  });
  Object.entries(baseTokens.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, "radius", key), value);
  });
  Object.entries(baseTokens.typography.families).forEach(([key, value]) => {
    assign(toVariableName(prefix, "font-family", key), value);
  });
  const typographyScale = baseTokens.typography?.scale ?? {};
  const fontScale = baseTokens.font;
  if (fontScale && Object.keys(fontScale).length > 0) {
    Object.entries(fontScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, "font", key, "size"), entry.size);
      assign(toVariableName(prefix, "font", key, "line-height"), entry.lineHeight);
      assign(toVariableName(prefix, "font", key, "weight"), entry.weight);
    });
  } else {
    Object.entries(typographyScale).forEach(([key, entry]) => {
      assign(toVariableName(prefix, "font", key, "size"), entry.fontSize);
      assign(toVariableName(prefix, "font", key, "line-height"), entry.lineHeight);
      assign(toVariableName(prefix, "font", key, "weight"), entry.fontWeight);
    });
  }
  Object.entries(typographyScale).forEach(([key, entry]) => {
    assign(toVariableName(prefix, "font", key, "letter-spacing"), entry.letterSpacing);
  });
  assign(toVariableName(prefix, "text", "on", "page", "default"), tokens2.text.onPage.default);
  assign(toVariableName(prefix, "text", "on", "page", "muted"), tokens2.text.onPage.muted);
  assign(toVariableName(prefix, "text", "on", "surface", "default"), tokens2.text.onSurface.default);
  assign(toVariableName(prefix, "text", "on", "surface", "muted"), tokens2.text.onSurface.muted);
  assign(toVariableName(prefix, "text", "on", "surface", "meta"), tokens2.text.onSurface.meta);
  const badge = tokens2.component?.badge;
  if (badge) {
    BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
      assign(toVariableName(prefix, "badge", variant, "bg"), badge[bgKey]);
      assign(toVariableName(prefix, "badge", variant, "text"), badge[textKey]);
    });
  }
  const iconBox = tokens2.component?.iconBox;
  if (iconBox) {
    ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
      assign(toVariableName(prefix, "icon-box", name), iconBox[tokenKey]);
    });
  }
  Object.entries(baseTokens.shadows).forEach(([key, value]) => {
    assign(toVariableName(prefix, "shadow", key), value);
  });
  Object.entries(baseTokens.breakpoints).forEach(([key, value]) => {
    assign(toVariableName(prefix, "breakpoint", key), value);
  });
  Object.entries(baseTokens.zIndex).forEach(([key, value]) => {
    assign(toVariableName(prefix, "z-index", key), value);
  });
  Object.entries(baseTokens.transitions.duration).forEach(([key, value]) => {
    assign(toVariableName(prefix, "duration", key), value);
  });
  Object.entries(baseTokens.transitions.easing).forEach(([key, value]) => {
    assign(toVariableName(prefix, "easing", key), value);
  });
  Object.entries(baseTokens.opacity).forEach(([key, value]) => {
    assign(toVariableName(prefix, "opacity", key), value);
  });
  assign(toVariableName(prefix, "focus-ring-width"), baseTokens.accessibility.focusRing.width);
  assign(toVariableName(prefix, "focus-ring-offset"), baseTokens.accessibility.focusRing.offset);
  assign(toVariableName(prefix, "focus-ring-style"), baseTokens.accessibility.focusRing.style);
  assign(toVariableName(prefix, "min-touch-target"), baseTokens.accessibility.minTouchTarget);
  assign(toVariableName(prefix, "min-text-size"), baseTokens.accessibility.minTextSize);
  Object.entries(baseTokens.buttons).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, value]) => {
      assign(toVariableName(prefix, "button", variant, state), value);
    });
  });
  Object.entries(baseTokens.forms).forEach(([state, properties]) => {
    Object.entries(properties).forEach(([prop, value]) => {
      if (value) assign(toVariableName(prefix, "form", state, prop), value);
    });
  });
  Object.entries(baseTokens.animations).forEach(([name, animation]) => {
    assign(toVariableName(prefix, "animation", name, "duration"), animation.duration);
    assign(toVariableName(prefix, "animation", name, "easing"), animation.easing);
    assign(toVariableName(prefix, "animation", name, "keyframes"), animation.keyframes);
  });
  return map;
};
var resolveSemanticValue = (value) => {
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (value && typeof value === "object" && "value" in value) {
    return String(value.value);
  }
  return void 0;
};
var getPath = (source, path) => path.reduce((acc, key) => acc && typeof acc === "object" ? acc[key] : void 0, source);
var pickSemantic = (...candidates) => {
  for (const candidate of candidates) {
    const resolved = resolveSemanticValue(candidate);
    if (resolved !== void 0) return resolved;
  }
  return void 0;
};
var generateCssVariables = (tokens2, options = {}) => {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const declarations = createCssVariableMap(tokens2, { ...options, prefix });
  const mapLines = Object.entries(declarations).map(([name, value]) => `  ${name}: ${value};`);
  const defaultMode = tokens2.modes?.default ?? {};
  const darkMode = tokens2.modes?.dark ?? {};
  const surfaceAliases = tokens2.surface ?? {};
  const textAliases = tokens2.text ?? {};
  const componentAliases = tokens2.component ?? {};
  const baseLines = [];
  const addBase = (name, value) => {
    if (value !== void 0) baseLines.push(`  ${name}: ${value};`);
  };
  addBase(toVariableName(prefix, "surface", "page"), pickSemantic(getPath(defaultMode, ["surface", "page"]), getPath(surfaceAliases, ["page"])));
  addBase(toVariableName(prefix, "surface", "card"), pickSemantic(getPath(defaultMode, ["surface", "card"]), getPath(surfaceAliases, ["card"])));
  addBase(toVariableName(prefix, "surface", "input"), pickSemantic(getPath(defaultMode, ["surface", "input"]), getPath(surfaceAliases, ["input"])));
  addBase(toVariableName(prefix, "surface", "overlay"), pickSemantic(getPath(defaultMode, ["surface", "overlay"]), getPath(surfaceAliases, ["overlay"])));
  addBase(toVariableName(prefix, "text", "on", "page", "default"), pickSemantic(getPath(defaultMode, ["text", "onPage", "default"]), getPath(textAliases, ["onPage", "default"])));
  addBase(toVariableName(prefix, "text", "on", "page", "muted"), pickSemantic(getPath(defaultMode, ["text", "onPage", "muted"]), getPath(textAliases, ["onPage", "muted"])));
  addBase(toVariableName(prefix, "text", "on", "page", "meta"), pickSemantic(getPath(defaultMode, ["text", "onPage", "meta"]), getPath(textAliases, ["onPage", "meta"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "default"), pickSemantic(getPath(defaultMode, ["text", "onSurface", "default"]), getPath(textAliases, ["onSurface", "default"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "muted"), pickSemantic(getPath(defaultMode, ["text", "onSurface", "muted"]), getPath(textAliases, ["onSurface", "muted"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "meta"), pickSemantic(getPath(defaultMode, ["text", "onSurface", "meta"]), getPath(textAliases, ["onSurface", "meta"])));
  addBase(toVariableName(prefix, "component", "card", "text"), pickSemantic(getPath(defaultMode, ["component", "card", "text"]), getPath(componentAliases, ["card", "text"])));
  addBase(toVariableName(prefix, "component", "card", "text-muted"), pickSemantic(getPath(defaultMode, ["component", "card", "textMuted"]), getPath(componentAliases, ["card", "textMuted"])));
  addBase(toVariableName(prefix, "component", "input", "text"), pickSemantic(getPath(defaultMode, ["component", "input", "text"]), getPath(componentAliases, ["input", "text"])));
  addBase(toVariableName(prefix, "component", "input", "placeholder"), pickSemantic(getPath(defaultMode, ["component", "input", "placeholder"]), getPath(componentAliases, ["input", "placeholder"])));
  addBase(toVariableName(prefix, "button", "text", "default"), pickSemantic(getPath(defaultMode, ["component", "button", "textDefault"]), getPath(componentAliases, ["button", "textDefault"])));
  addBase(toVariableName(prefix, "button", "text", "on", "primary"), pickSemantic(getPath(defaultMode, ["component", "button", "textOnPrimary"]), getPath(componentAliases, ["button", "textOnPrimary"])));
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addBase(
      toVariableName(prefix, "badge", variant, "bg"),
      pickSemantic(getPath(defaultMode, ["component", "badge", bgKey]), getPath(componentAliases, ["badge", bgKey]))
    );
    addBase(
      toVariableName(prefix, "badge", variant, "text"),
      pickSemantic(getPath(defaultMode, ["component", "badge", textKey]), getPath(componentAliases, ["badge", textKey]))
    );
  });
  ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
    addBase(
      toVariableName(prefix, "icon-box", name),
      pickSemantic(getPath(defaultMode, ["component", "iconBox", tokenKey]), getPath(componentAliases, ["iconBox", tokenKey]))
    );
  });
  const rootLines = [...baseLines, ...mapLines];
  const darkLines = [];
  const addDark = (name, value) => {
    if (value !== void 0) darkLines.push(`  ${name}: ${value};`);
  };
  addDark(
    toVariableName(prefix, "surface", "page"),
    pickSemantic(getPath(darkMode, ["surface", "page"]), getPath(defaultMode, ["surface", "page"]), getPath(surfaceAliases, ["page"]))
  );
  addDark(
    toVariableName(prefix, "surface", "card"),
    pickSemantic(getPath(darkMode, ["surface", "card"]), getPath(defaultMode, ["surface", "card"]), getPath(surfaceAliases, ["card"]))
  );
  addDark(
    toVariableName(prefix, "surface", "input"),
    pickSemantic(getPath(darkMode, ["surface", "input"]), getPath(defaultMode, ["surface", "input"]), getPath(surfaceAliases, ["input"]))
  );
  addDark(
    toVariableName(prefix, "surface", "overlay"),
    pickSemantic(getPath(darkMode, ["surface", "overlay"]), getPath(defaultMode, ["surface", "overlay"]), getPath(surfaceAliases, ["overlay"]))
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "default"),
    pickSemantic(
      getPath(darkMode, ["text", "onPage", "default"]),
      getPath(defaultMode, ["text", "onPage", "default"]),
      getPath(textAliases, ["onPage", "default"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "muted"),
    pickSemantic(
      getPath(darkMode, ["text", "onPage", "muted"]),
      getPath(defaultMode, ["text", "onPage", "muted"]),
      getPath(textAliases, ["onPage", "muted"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "meta"),
    pickSemantic(
      getPath(darkMode, ["text", "onPage", "meta"]),
      getPath(defaultMode, ["text", "onPage", "meta"]),
      getPath(textAliases, ["onPage", "meta"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "default"),
    pickSemantic(
      getPath(darkMode, ["text", "onSurface", "default"]),
      getPath(defaultMode, ["text", "onSurface", "default"]),
      getPath(textAliases, ["onSurface", "default"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "muted"),
    pickSemantic(
      getPath(darkMode, ["text", "onSurface", "muted"]),
      getPath(defaultMode, ["text", "onSurface", "muted"]),
      getPath(textAliases, ["onSurface", "muted"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "meta"),
    pickSemantic(
      getPath(darkMode, ["text", "onSurface", "meta"]),
      getPath(defaultMode, ["text", "onSurface", "meta"]),
      getPath(textAliases, ["onSurface", "meta"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "card", "text"),
    pickSemantic(
      getPath(darkMode, ["component", "card", "text"]),
      getPath(defaultMode, ["component", "card", "text"]),
      getPath(componentAliases, ["card", "text"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "card", "text-muted"),
    pickSemantic(
      getPath(darkMode, ["component", "card", "textMuted"]),
      getPath(defaultMode, ["component", "card", "textMuted"]),
      getPath(componentAliases, ["card", "textMuted"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "input", "text"),
    pickSemantic(
      getPath(darkMode, ["component", "input", "text"]),
      getPath(defaultMode, ["component", "input", "text"]),
      getPath(componentAliases, ["input", "text"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "input", "placeholder"),
    pickSemantic(
      getPath(darkMode, ["component", "input", "placeholder"]),
      getPath(defaultMode, ["component", "input", "placeholder"]),
      getPath(componentAliases, ["input", "placeholder"])
    )
  );
  addDark(
    toVariableName(prefix, "button", "text", "default"),
    pickSemantic(
      getPath(darkMode, ["component", "button", "textDefault"]),
      getPath(defaultMode, ["component", "button", "textDefault"]),
      getPath(componentAliases, ["button", "textDefault"])
    )
  );
  addDark(
    toVariableName(prefix, "button", "text", "on", "primary"),
    pickSemantic(
      getPath(darkMode, ["component", "button", "textOnPrimary"]),
      getPath(defaultMode, ["component", "button", "textOnPrimary"]),
      getPath(componentAliases, ["button", "textOnPrimary"])
    )
  );
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addDark(
      toVariableName(prefix, "badge", variant, "bg"),
      pickSemantic(
        getPath(darkMode, ["component", "badge", bgKey]),
        getPath(defaultMode, ["component", "badge", bgKey]),
        getPath(componentAliases, ["badge", bgKey])
      )
    );
    addDark(
      toVariableName(prefix, "badge", variant, "text"),
      pickSemantic(
        getPath(darkMode, ["component", "badge", textKey]),
        getPath(defaultMode, ["component", "badge", textKey]),
        getPath(componentAliases, ["badge", textKey])
      )
    );
  });
  ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
    addDark(
      toVariableName(prefix, "icon-box", name),
      pickSemantic(
        getPath(darkMode, ["component", "iconBox", tokenKey]),
        getPath(defaultMode, ["component", "iconBox", tokenKey]),
        getPath(componentAliases, ["iconBox", tokenKey])
      )
    );
  });
  const rootBlock = `${selector} {
${rootLines.join("\n")}
}`;
  const darkBlock = `${selector}[data-spectre-theme="dark"] {
${darkLines.join("\n")}
}`;
  return `${rootBlock}
${darkBlock}
`;
};

// src/index.ts
var tokens = core_default;
var sanitizeFontFamily = (value) => value.split(",").map((segment) => segment.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
var createTailwindTheme = (source = tokens) => {
  const colors = {};
  Object.entries(source.colors).forEach(([group, scale]) => {
    colors[group] = { ...scale };
  });
  const fontFamily = Object.entries(source.typography.families).reduce((acc, [key, value]) => {
    acc[key] = sanitizeFontFamily(value);
    return acc;
  }, {});
  const fontSize = Object.entries(source.typography.scale).reduce((acc, [key, entry]) => {
    acc[key] = [
      entry.fontSize,
      {
        lineHeight: entry.lineHeight,
        ...entry.fontWeight ? { fontWeight: entry.fontWeight } : {},
        ...entry.letterSpacing ? { letterSpacing: entry.letterSpacing } : {}
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
var tailwindTheme = createTailwindTheme(tokens);
var tailwindPreset = {
  theme: tailwindTheme
};
var index_default = tokens;
export {
  index_default as default,
  generateCssVariables,
  tailwindPreset,
  tailwindTheme,
  tokens
};
//# sourceMappingURL=index.js.map