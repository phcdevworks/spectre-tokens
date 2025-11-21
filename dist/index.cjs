"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createCssVariableMap: () => createCssVariableMap,
  createTailwindTheme: () => createTailwindTheme,
  default: () => index_default,
  generateCssVariables: () => generateCssVariables,
  tailwindPreset: () => tailwindPreset,
  tailwindTheme: () => tailwindTheme,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

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
var createCssVariableMap = (tokens2, options = {}) => {
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const map = {};
  const assign = (name, value) => {
    if (value === void 0) return;
    map[name] = String(value);
  };
  Object.entries(tokens2.colors).forEach(([group, scale]) => {
    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, "color", group, step), value);
    });
  });
  Object.entries(tokens2.spacing).forEach(([key, value]) => {
    assign(toVariableName(prefix, "space", key), value);
  });
  Object.entries(tokens2.radii).forEach(([key, value]) => {
    assign(toVariableName(prefix, "radius", key), value);
  });
  Object.entries(tokens2.typography.families).forEach(([key, value]) => {
    assign(toVariableName(prefix, "font-family", key), value);
  });
  Object.entries(tokens2.typography.scale).forEach(([key, entry]) => {
    assign(toVariableName(prefix, "font", key, "size"), entry.fontSize);
    assign(toVariableName(prefix, "font", key, "line-height"), entry.lineHeight);
    assign(toVariableName(prefix, "font", key, "weight"), entry.fontWeight);
    assign(toVariableName(prefix, "font", key, "letter-spacing"), entry.letterSpacing);
  });
  Object.entries(tokens2.shadows).forEach(([key, value]) => {
    assign(toVariableName(prefix, "shadow", key), value);
  });
  Object.entries(tokens2.breakpoints).forEach(([key, value]) => {
    assign(toVariableName(prefix, "breakpoint", key), value);
  });
  Object.entries(tokens2.zIndex).forEach(([key, value]) => {
    assign(toVariableName(prefix, "z-index", key), value);
  });
  Object.entries(tokens2.transitions.duration).forEach(([key, value]) => {
    assign(toVariableName(prefix, "duration", key), value);
  });
  Object.entries(tokens2.transitions.easing).forEach(([key, value]) => {
    assign(toVariableName(prefix, "easing", key), value);
  });
  return map;
};
var generateCssVariables = (tokens2, options = {}) => {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const declarations = createCssVariableMap(tokens2, options);
  const lines = Object.entries(declarations).map(([name, value]) => `  ${name}: ${value};`).join("\n");
  return `${selector} {
${lines}
}
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
    transitionTimingFunction: { ...source.transitions.easing }
  };
};
var tailwindTheme = createTailwindTheme(tokens);
var tailwindPreset = {
  theme: tailwindTheme
};
var index_default = tokens;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCssVariableMap,
  createTailwindTheme,
  generateCssVariables,
  tailwindPreset,
  tailwindTheme,
  tokens
});
//# sourceMappingURL=index.cjs.map