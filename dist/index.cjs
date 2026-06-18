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
  default: () => index_default,
  generateCssVariables: () => generateCssVariables,
  tailwindPreset: () => tailwindPreset,
  tailwindTheme: () => tailwindTheme,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

// src/generated/tokens.ts
var coreTokens = {
  "component": {
    "card": {
      "text": "{colors.neutral.900}",
      "textMuted": "{colors.neutral.600}"
    },
    "input": {
      "text": "{colors.neutral.900}",
      "placeholder": "{colors.neutral.500}"
    },
    "button": {
      "textDefault": "{colors.neutral.900}",
      "textOnPrimary": "{colors.white}"
    },
    "badge": {
      "neutralBg": "{colors.neutral.100}",
      "neutralBgHover": "{colors.neutral.200}",
      "neutralText": "{colors.neutral.700}",
      "infoBg": "{colors.info.100}",
      "infoBgHover": "{colors.info.200}",
      "infoText": "{colors.info.700}",
      "successBg": "{colors.success.100}",
      "successBgHover": "{colors.success.200}",
      "successText": "{colors.success.800}",
      "warningBg": "{colors.warning.100}",
      "warningBgHover": "{colors.warning.200}",
      "warningText": "{colors.warning.800}",
      "dangerBg": "{colors.error.100}",
      "dangerBgHover": "{colors.error.200}",
      "dangerText": "{colors.error.800}"
    },
    "iconBox": {
      "bg": "{colors.white}",
      "border": "{colors.neutral.200}",
      "iconDefault": "{colors.info.600}",
      "iconSuccess": "{colors.success.600}",
      "iconWarning": "{colors.warning.600}",
      "iconDanger": "{colors.error.600}"
    },
    "testimonial": {
      "bg": "{colors.white}",
      "bgHover": "{colors.neutral.50}",
      "border": "{colors.neutral.200}",
      "text": "{colors.neutral.700}",
      "authorName": "{colors.neutral.900}",
      "authorTitle": "{colors.neutral.600}",
      "quoteMark": "{colors.neutral.600}"
    },
    "pricingCard": {
      "bg": "{colors.white}",
      "bgHover": "{colors.neutral.50}",
      "border": "{colors.neutral.200}",
      "featuredBg": "{colors.info.600}",
      "featuredText": "{colors.white}",
      "featuredBadgeBg": "{colors.warning.500}",
      "featuredBadgeText": "{colors.neutral.900}",
      "price": "{colors.neutral.900}",
      "priceDescription": "{colors.neutral.600}"
    },
    "rating": {
      "starFilled": "{colors.warning.500}",
      "starEmpty": "{colors.neutral.200}",
      "text": "{colors.neutral.500}"
    },
    "nav": {
      "bg": "{colors.white}",
      "text": "{colors.neutral.900}",
      "link": "{colors.neutral.700}",
      "linkHover": "{colors.brand.600}",
      "linkActive": "{colors.brand.700}",
      "border": "{colors.neutral.200}"
    },
    "modal": {
      "bg": "{colors.white}",
      "shadow": "0 20px 48px -12px {colors.black} / 0.20",
      "border": "{colors.neutral.200}",
      "overlay": "{colors.black} / 0.6"
    },
    "toast": {
      "success": {
        "bg": "{colors.success.50}",
        "text": "{colors.success.800}",
        "border": "{colors.success.200}",
        "icon": "{colors.success.600}"
      },
      "warning": {
        "bg": "{colors.warning.50}",
        "text": "{colors.warning.800}",
        "border": "{colors.warning.200}",
        "icon": "{colors.warning.600}"
      },
      "danger": {
        "bg": "{colors.error.50}",
        "text": "{colors.error.800}",
        "border": "{colors.error.200}",
        "icon": "{colors.error.600}"
      },
      "info": {
        "bg": "{colors.info.50}",
        "text": "{colors.info.800}",
        "border": "{colors.info.200}",
        "icon": "{colors.info.600}"
      }
    },
    "tooltip": {
      "bg": "{colors.neutral.900}",
      "text": "{colors.white}",
      "border": "{colors.neutral.700}"
    },
    "dropdown": {
      "bg": "{colors.white}",
      "border": "{colors.neutral.200}",
      "item": {
        "default": "transparent",
        "hover": "{colors.neutral.100}",
        "active": "{colors.info.50}",
        "text": "{colors.neutral.900}"
      }
    }
  },
  "buttons": {
    "primary": {
      "bg": "{colors.info.600}",
      "bgHover": "{colors.info.700}",
      "bgActive": "{colors.info.800}",
      "bgDisabled": "{colors.neutral.200}",
      "text": "{colors.white}",
      "textDisabled": "{colors.neutral.400}",
      "focusRing": "{colors.info.500} / 0.4",
      "focusVisible": "{colors.info.500} / 0.4"
    },
    "secondary": {
      "bg": "{colors.white}",
      "bgHover": "{colors.neutral.50}",
      "bgActive": "{colors.neutral.100}",
      "bgDisabled": "{colors.neutral.50}",
      "text": "{colors.info.700}",
      "textDisabled": "{colors.neutral.400}",
      "border": "{colors.info.700}",
      "borderDisabled": "{colors.neutral.200}",
      "focusRing": "{colors.info.500} / 0.4",
      "focusVisible": "{colors.info.500} / 0.4"
    },
    "ghost": {
      "bg": "transparent",
      "bgHover": "{colors.info.50}",
      "bgActive": "{colors.info.100}",
      "bgDisabled": "transparent",
      "text": "{colors.info.700}",
      "textDisabled": "{colors.neutral.400}",
      "focusRing": "{colors.info.500} / 0.4",
      "focusVisible": "{colors.info.500} / 0.4"
    },
    "danger": {
      "bg": "{colors.error.600}",
      "bgHover": "{colors.error.700}",
      "bgActive": "{colors.error.800}",
      "bgDisabled": "{colors.error.200}",
      "text": "{colors.white}",
      "textDisabled": "{colors.neutral.400}",
      "focusRing": "{colors.error.500} / 0.4",
      "focusVisible": "{colors.error.500} / 0.4"
    },
    "success": {
      "bg": "{colors.success.700}",
      "bgHover": "{colors.success.800}",
      "bgActive": "{colors.success.900}",
      "bgDisabled": "{colors.success.200}",
      "text": "{colors.white}",
      "textDisabled": "{colors.neutral.400}",
      "focusRing": "{colors.success.500} / 0.4",
      "focusVisible": "{colors.success.500} / 0.4"
    },
    "cta": {
      "bg": "{colors.brand.600}",
      "bgHover": "{colors.brand.700}",
      "bgActive": "{colors.brand.800}",
      "bgDisabled": "{colors.brand.200}",
      "text": "{colors.white}",
      "textDisabled": "{colors.neutral.400}",
      "shadow": "0 4px 14px 0 {colors.brand.500} / 0.39",
      "focusRing": "{colors.brand.500} / 0.4"
    },
    "accent": {
      "bg": "{colors.accent.700}",
      "bgHover": "{colors.accent.800}",
      "bgActive": "{colors.accent.900}",
      "bgDisabled": "{colors.accent.200}",
      "text": "{colors.white}",
      "textDisabled": "{colors.neutral.400}",
      "focusRing": "{colors.accent.500} / 0.4",
      "focusVisible": "{colors.accent.500} / 0.4"
    }
  },
  "forms": {
    "default": {
      "bg": "{colors.white}",
      "border": "{colors.neutral.300}",
      "text": "{colors.neutral.900}",
      "placeholder": "{colors.neutral.500}"
    },
    "hover": {
      "border": "{colors.info.500}"
    },
    "focus": {
      "border": "{colors.info.500}",
      "ring": "{colors.info.500}"
    },
    "focusVisible": {
      "border": "{colors.info.500}",
      "ring": "{colors.info.500}"
    },
    "valid": {
      "border": "{colors.success.500}",
      "bg": "{colors.success.50}",
      "text": "{colors.success.700}"
    },
    "invalid": {
      "border": "{colors.error.500}",
      "bg": "{colors.error.50}",
      "text": "{colors.error.700}"
    },
    "disabled": {
      "bg": "{colors.neutral.50}",
      "border": "{colors.neutral.200}",
      "text": "{colors.neutral.400}"
    }
  },
  "modes": {
    "default": {
      "surface": {
        "page": "{colors.neutral.50}",
        "card": "{colors.white}",
        "input": "{colors.white}",
        "overlay": "{colors.black} / 0.6",
        "subtle": "{colors.neutral.100}",
        "hero": "linear-gradient(135deg, {colors.indigo.500} 0%, {colors.violet.600} 100%)",
        "hover": "{colors.neutral.100}",
        "selected": "{colors.info.50}",
        "active": "{colors.neutral.200}",
        "divider": "{colors.neutral.200}"
      },
      "text": {
        "onPage": {
          "default": "{colors.neutral.900}",
          "muted": "{colors.neutral.600}",
          "subtle": "{colors.neutral.500}",
          "meta": "{colors.neutral.500}",
          "brand": "{colors.brand.600}"
        },
        "onSurface": {
          "default": "{colors.neutral.900}",
          "muted": "{colors.neutral.600}",
          "subtle": "{colors.neutral.500}",
          "meta": "{colors.neutral.500}",
          "brand": "{colors.brand.600}"
        }
      },
      "component": {
        "card": {
          "text": "{colors.neutral.900}",
          "textMuted": "{colors.neutral.600}"
        },
        "input": {
          "text": "{colors.neutral.900}",
          "placeholder": "{colors.neutral.500}"
        },
        "button": {
          "textDefault": "{colors.neutral.900}",
          "textOnPrimary": "{colors.white}"
        },
        "badge": {
          "neutralBg": "{colors.neutral.100}",
          "neutralBgHover": "{colors.neutral.200}",
          "neutralText": "{colors.neutral.700}",
          "infoBg": "{colors.info.100}",
          "infoBgHover": "{colors.info.200}",
          "infoText": "{colors.info.700}",
          "successBg": "{colors.success.100}",
          "successText": "{colors.success.700}",
          "warningBg": "{colors.warning.100}",
          "warningText": "{colors.warning.800}",
          "dangerBg": "{colors.error.100}",
          "dangerText": "{colors.error.700}"
        },
        "iconBox": {
          "bg": "{colors.white}",
          "border": "{colors.neutral.200}",
          "iconDefault": "{colors.info.600}",
          "iconSuccess": "{colors.success.600}",
          "iconWarning": "{colors.warning.600}",
          "iconDanger": "{colors.error.600}"
        },
        "testimonial": {
          "bg": "{colors.white}",
          "bgHover": "{colors.neutral.50}",
          "border": "{colors.neutral.200}",
          "text": "{colors.neutral.700}",
          "authorName": "{colors.neutral.900}",
          "authorTitle": "{colors.neutral.600}",
          "quoteMark": "{colors.neutral.600}"
        },
        "pricingCard": {
          "bg": "{colors.white}",
          "bgHover": "{colors.neutral.50}",
          "border": "{colors.neutral.200}",
          "featuredBg": "{colors.info.600}",
          "featuredText": "{colors.white}",
          "featuredBadgeBg": "{colors.warning.500}",
          "featuredBadgeText": "{colors.neutral.900}",
          "price": "{colors.neutral.900}",
          "priceDescription": "{colors.neutral.600}"
        },
        "rating": {
          "starFilled": "{colors.warning.500}",
          "starEmpty": "{colors.neutral.200}",
          "text": "{colors.neutral.500}"
        },
        "nav": {
          "bg": "{colors.white}",
          "text": "{colors.neutral.900}",
          "link": "{colors.neutral.700}",
          "linkHover": "{colors.brand.600}",
          "linkActive": "{colors.brand.700}",
          "border": "{colors.neutral.200}"
        },
        "modal": {
          "bg": "{colors.white}",
          "shadow": "0 20px 48px -12px {colors.black} / 0.20",
          "border": "{colors.neutral.200}",
          "overlay": "{colors.black} / 0.6"
        },
        "toast": {
          "success": {
            "bg": "{colors.success.50}",
            "text": "{colors.success.800}",
            "border": "{colors.success.200}",
            "icon": "{colors.success.600}"
          },
          "warning": {
            "bg": "{colors.warning.50}",
            "text": "{colors.warning.800}",
            "border": "{colors.warning.200}",
            "icon": "{colors.warning.600}"
          },
          "danger": {
            "bg": "{colors.error.50}",
            "text": "{colors.error.800}",
            "border": "{colors.error.200}",
            "icon": "{colors.error.600}"
          },
          "info": {
            "bg": "{colors.info.50}",
            "text": "{colors.info.800}",
            "border": "{colors.info.200}",
            "icon": "{colors.info.600}"
          }
        },
        "tooltip": {
          "bg": "{colors.neutral.900}",
          "text": "{colors.white}",
          "border": "{colors.neutral.700}"
        },
        "dropdown": {
          "bg": "{colors.white}",
          "border": "{colors.neutral.200}",
          "item": {
            "default": "transparent",
            "hover": "{colors.neutral.100}",
            "active": "{colors.info.50}",
            "text": "{colors.neutral.900}"
          }
        }
      }
    },
    "dark": {
      "surface": {
        "page": "{colors.neutral.900}",
        "card": "{colors.neutral.800}",
        "input": "{colors.neutral.700}",
        "overlay": "{colors.black} / 0.6",
        "subtle": "{colors.neutral.800}",
        "hero": "linear-gradient(135deg, {colors.accent.700} 0%, {colors.accent.900} 100%)",
        "hover": "{colors.neutral.700}",
        "selected": "{colors.info.900}",
        "active": "{colors.neutral.600}",
        "divider": "{colors.neutral.700}"
      },
      "text": {
        "onPage": {
          "default": "{colors.neutral.50}",
          "muted": "{colors.neutral.300}",
          "subtle": "{colors.neutral.400}",
          "meta": "{colors.neutral.400}",
          "brand": "{colors.brand.400}"
        },
        "onSurface": {
          "default": "{colors.neutral.100}",
          "muted": "{colors.neutral.300}",
          "subtle": "{colors.neutral.400}",
          "meta": "{colors.neutral.400}",
          "brand": "{colors.brand.400}"
        }
      },
      "component": {
        "card": {
          "text": "{colors.neutral.100}",
          "textMuted": "{colors.neutral.300}"
        },
        "input": {
          "text": "{colors.neutral.100}",
          "placeholder": "{colors.neutral.300}"
        },
        "button": {
          "textDefault": "{colors.neutral.100}",
          "textOnPrimary": "{colors.white}"
        },
        "badge": {
          "neutralBg": "{colors.neutral.700}",
          "neutralBgHover": "{colors.neutral.600}",
          "neutralText": "{colors.neutral.50}",
          "infoBg": "{colors.info.800}",
          "infoBgHover": "{colors.info.700}",
          "infoText": "{colors.info.100}",
          "successBg": "{colors.success.800}",
          "successBgHover": "{colors.success.700}",
          "successText": "{colors.success.100}",
          "warningBg": "{colors.warning.800}",
          "warningBgHover": "{colors.warning.800}",
          "warningText": "{colors.warning.100}",
          "dangerBg": "{colors.error.800}",
          "dangerBgHover": "{colors.error.700}",
          "dangerText": "{colors.error.100}"
        },
        "iconBox": {
          "bg": "{colors.neutral.800}",
          "border": "{colors.neutral.700}",
          "iconDefault": "{colors.info.400}",
          "iconSuccess": "{colors.success.400}",
          "iconWarning": "{colors.warning.400}",
          "iconDanger": "{colors.error.400}"
        },
        "testimonial": {
          "bg": "{colors.neutral.800}",
          "bgHover": "{colors.neutral.700}",
          "border": "{colors.neutral.700}",
          "text": "{colors.neutral.200}",
          "authorName": "{colors.neutral.100}",
          "authorTitle": "{colors.neutral.300}",
          "quoteMark": "{colors.neutral.300}"
        },
        "pricingCard": {
          "bg": "{colors.neutral.800}",
          "bgHover": "{colors.neutral.700}",
          "border": "{colors.neutral.700}",
          "featuredBg": "{colors.info.600}",
          "featuredText": "{colors.white}",
          "featuredBadgeBg": "{colors.warning.500}",
          "featuredBadgeText": "{colors.neutral.900}",
          "price": "{colors.neutral.100}",
          "priceDescription": "{colors.neutral.300}"
        },
        "rating": {
          "starFilled": "{colors.warning.400}",
          "starEmpty": "{colors.neutral.700}",
          "text": "{colors.neutral.400}"
        },
        "nav": {
          "bg": "{colors.neutral.900}",
          "text": "{colors.neutral.50}",
          "link": "{colors.neutral.300}",
          "linkHover": "{colors.brand.400}",
          "linkActive": "{colors.brand.300}",
          "border": "{colors.neutral.700}"
        },
        "modal": {
          "bg": "{colors.neutral.800}",
          "shadow": "0 20px 48px -12px {colors.black} / 0.20",
          "border": "{colors.neutral.700}",
          "overlay": "{colors.black} / 0.6"
        },
        "toast": {
          "success": {
            "bg": "{colors.success.900}",
            "text": "{colors.success.100}",
            "border": "{colors.success.700}",
            "icon": "{colors.success.400}"
          },
          "warning": {
            "bg": "{colors.warning.900}",
            "text": "{colors.warning.100}",
            "border": "{colors.warning.700}",
            "icon": "{colors.warning.400}"
          },
          "danger": {
            "bg": "{colors.error.900}",
            "text": "{colors.error.100}",
            "border": "{colors.error.700}",
            "icon": "{colors.error.400}"
          },
          "info": {
            "bg": "{colors.info.900}",
            "text": "{colors.info.100}",
            "border": "{colors.info.700}",
            "icon": "{colors.info.400}"
          }
        },
        "tooltip": {
          "bg": "{colors.neutral.50}",
          "text": "{colors.neutral.900}",
          "border": "{colors.neutral.300}"
        },
        "dropdown": {
          "bg": "{colors.neutral.800}",
          "border": "{colors.neutral.700}",
          "item": {
            "default": "transparent",
            "hover": "{colors.neutral.700}",
            "active": "{colors.info.900}",
            "text": "{colors.neutral.100}"
          }
        }
      }
    }
  },
  "colors": {
    "brand": {
      "50": "#eef4ff",
      "100": "#d9e7ff",
      "200": "#b9d2ff",
      "300": "#8ab6ff",
      "400": "#5a92ff",
      "500": "#336df4",
      "600": "#1f57db",
      "700": "#1946b4",
      "800": "#173b8f",
      "900": "#16336f"
    },
    "neutral": {
      "50": "#f7f8fb",
      "100": "#eef1f6",
      "200": "#d9dfeb",
      "300": "#b7c1d4",
      "400": "#8a96ad",
      "500": "#657287",
      "600": "#4b576a",
      "700": "#374253",
      "800": "#222b38",
      "900": "#141b24"
    },
    "accent": {
      "50": "#f6f2ff",
      "100": "#eee5ff",
      "200": "#ddccff",
      "300": "#c3a7ff",
      "400": "#a279ff",
      "500": "#854ff7",
      "600": "#7135dd",
      "700": "#5d28b8",
      "800": "#4d2393",
      "900": "#401f75"
    },
    "success": {
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
    "warning": {
      "50": "#fffbea",
      "100": "#fff1c2",
      "200": "#ffe08a",
      "300": "#ffd24d",
      "400": "#ffc21a",
      "500": "#f5ad00",
      "600": "#d48806",
      "700": "#ad6800",
      "800": "#8f5200",
      "900": "#734000"
    },
    "error": {
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
    "info": {
      "50": "#f0f9ff",
      "100": "#e0f2fe",
      "200": "#bae6fd",
      "300": "#7dd3fc",
      "400": "#38bdf8",
      "500": "#0ea5e9",
      "600": "#0369a1",
      "700": "#075985",
      "800": "#0c4a6e",
      "900": "#082f49"
    },
    "indigo": {
      "500": "#5b6ee1",
      "600": "#4d61db"
    },
    "violet": {
      "600": "#6f3fd7"
    },
    "focus": {
      "primary": "{colors.brand.500}",
      "error": "{colors.error.500}",
      "info": "{colors.info.600}"
    },
    "white": "#ffffff",
    "black": "#000000"
  },
  "space": {
    "0": "0rem",
    "1": "0.0625rem",
    "2": "0.125rem",
    "4": "0.25rem",
    "6": "0.375rem",
    "8": "0.5rem",
    "10": "0.625rem",
    "12": "0.75rem",
    "14": "0.875rem",
    "16": "1rem",
    "20": "1.25rem",
    "24": "1.5rem",
    "28": "1.75rem",
    "32": "2rem",
    "40": "2.5rem",
    "48": "3rem",
    "56": "3.5rem",
    "64": "4rem",
    "72": "4.5rem",
    "80": "5rem",
    "96": "6rem"
  },
  "radii": {
    "none": "0",
    "sm": "2px",
    "md": "4px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px",
    "4xl": "32px",
    "pill": "999px"
  },
  "shadows": {
    "none": "none",
    "sm": "0 1px 2px 0 {colors.black} / 0.06",
    "md": "0 2px 6px -1px {colors.black} / 0.08",
    "lg": "0 6px 16px -4px {colors.black} / 0.12",
    "xl": "0 12px 24px -6px {colors.black} / 0.15",
    "2xl": "0 20px 48px -12px {colors.black} / 0.20"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  },
  "zIndex": {
    "base": "0",
    "dropdown": "1000",
    "sticky": "1100",
    "fixed": "1200",
    "overlay": "1300",
    "modal": "1400",
    "popover": "1500",
    "tooltip": "1600",
    "toast": "1700"
  },
  "transitions": {
    "duration": {
      "reduced": "0.01ms",
      "instant": "75ms",
      "fast": "150ms",
      "base": "200ms",
      "relaxed": "250ms",
      "moderate": "300ms",
      "slow": "500ms",
      "slower": "700ms",
      "long": "1000ms",
      "slowest": "1200ms"
    },
    "easing": {
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "inOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "spring": "cubic-bezier(0.4, 0, 0.2, 1)",
      "overshoot": "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
  },
  "animations": {
    "fadeIn": {
      "duration": "{transitions.duration.base}",
      "easing": "{transitions.easing.out}",
      "keyframes": "fade-in"
    },
    "fadeOut": {
      "duration": "{transitions.duration.fast}",
      "easing": "{transitions.easing.in}",
      "keyframes": "fade-out"
    },
    "slideUp": {
      "duration": "{transitions.duration.moderate}",
      "easing": "{transitions.easing.out}",
      "keyframes": "slide-up"
    },
    "slideDown": {
      "duration": "{transitions.duration.moderate}",
      "easing": "{transitions.easing.out}",
      "keyframes": "slide-down"
    },
    "scaleIn": {
      "duration": "{transitions.duration.base}",
      "easing": "{transitions.easing.overshoot}",
      "keyframes": "scale-in"
    },
    "bounce": {
      "duration": "{transitions.duration.moderate}",
      "easing": "{transitions.easing.spring}",
      "keyframes": "bounce"
    },
    "shake": {
      "duration": "{transitions.duration.relaxed}",
      "easing": "{transitions.easing.spring}",
      "keyframes": "shake"
    },
    "pulse": {
      "duration": "{transitions.duration.slowest}",
      "easing": "{transitions.easing.spring}",
      "keyframes": "pulse"
    },
    "reducedMotion": {
      "fadeIn": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "fade-in"
      },
      "fadeOut": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "fade-out"
      },
      "slideUp": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "slide-up"
      },
      "slideDown": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "slide-down"
      },
      "scaleIn": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "scale-in"
      },
      "bounce": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "bounce"
      },
      "shake": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "shake"
      },
      "pulse": {
        "duration": "{transitions.duration.reduced}",
        "easing": "{transitions.easing.linear}",
        "keyframes": "pulse"
      }
    }
  },
  "opacity": {
    "disabled": "0.38",
    "hover": "0.92",
    "active": "0.84",
    "loading": "0.6",
    "focus": "1",
    "overlay": "0.5",
    "tooltip": "0.95"
  },
  "aspectRatios": {
    "square": "1/1",
    "video": "16/9",
    "classic": "3/2",
    "portrait": "3/4",
    "landscape": "4/3",
    "ultrawide": "21/9",
    "hero": "2/1"
  },
  "icons": {
    "xs": "12px",
    "sm": "16px",
    "md": "20px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "40px",
    "3xl": "48px"
  },
  "accessibility": {
    "focusRing": {
      "width": "2px",
      "offset": "2px",
      "style": "solid"
    },
    "reducedMotion": "{transitions.duration.reduced}",
    "forcedColors": "auto",
    "minTouchTarget": "44px",
    "minTextSize": "16px"
  },
  "border": {
    "width": {
      "none": "0",
      "base": "1px",
      "thick": "2px"
    },
    "style": {
      "none": "none",
      "solid": "solid",
      "dashed": "dashed",
      "dotted": "dotted"
    }
  },
  "surface": {
    "page": "{colors.neutral.50}",
    "card": "{colors.white}",
    "input": "{colors.white}",
    "overlay": "{colors.black} / 0.6",
    "hover": "{colors.neutral.100}",
    "selected": "{colors.info.50}",
    "active": "{colors.neutral.200}",
    "divider": "{colors.neutral.200}"
  },
  "link": {
    "default": "{colors.brand.600}",
    "hover": "{colors.brand.700}",
    "active": "{colors.brand.800}",
    "visited": "{colors.accent.700}"
  },
  "text": {
    "onPage": {
      "default": "{colors.neutral.900}",
      "muted": "{colors.neutral.600}",
      "subtle": "{colors.neutral.500}",
      "meta": "{colors.neutral.500}",
      "brand": "{colors.brand.600}"
    },
    "onSurface": {
      "default": "{colors.neutral.900}",
      "muted": "{colors.neutral.600}",
      "subtle": "{colors.neutral.500}",
      "meta": "{colors.neutral.500}",
      "brand": "{colors.brand.600}"
    }
  },
  "layout": {
    "section": {
      "padding": {
        "sm": "1.5rem",
        "md": "2rem",
        "lg": "3rem"
      },
      "gap": {
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem"
      }
    },
    "stack": {
      "gap": {
        "sm": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem"
      }
    },
    "container": {
      "paddingInline": {
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem"
      },
      "maxWidth": "72rem"
    }
  },
  "font": {
    "xs": {
      "size": "0.75rem",
      "lineHeight": "1.25rem",
      "weight": 400,
      "letterSpacing": "0.02em"
    },
    "sm": {
      "size": "0.875rem",
      "lineHeight": "1.5rem",
      "weight": 400,
      "letterSpacing": "0em"
    },
    "md": {
      "size": "1rem",
      "lineHeight": "1.75rem",
      "weight": 500,
      "letterSpacing": "0em"
    },
    "lg": {
      "size": "1.25rem",
      "lineHeight": "2rem",
      "weight": 600,
      "letterSpacing": "0em"
    },
    "xl": {
      "size": "1.5rem",
      "lineHeight": "2.125rem",
      "weight": 600,
      "letterSpacing": "0em"
    },
    "2xl": {
      "size": "1.875rem",
      "lineHeight": "2.5rem",
      "weight": 700,
      "letterSpacing": "0em"
    },
    "3xl": {
      "size": "2.25rem",
      "lineHeight": "2.75rem",
      "weight": 700,
      "letterSpacing": "0em"
    },
    "4xl": {
      "size": "3rem",
      "lineHeight": "3.5rem",
      "weight": 800,
      "letterSpacing": "0em"
    },
    "5xl": {
      "size": "3.75rem",
      "lineHeight": "4.25rem",
      "weight": 800,
      "letterSpacing": "0em"
    },
    "6xl": {
      "size": "4.5rem",
      "lineHeight": "5rem",
      "weight": 900,
      "letterSpacing": "0em"
    }
  },
  "typography": {
    "families": {
      "sans": "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      "serif": "'Times New Roman', Times, serif",
      "mono": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"
    },
    "scale": {
      "xs": {
        "fontSize": "0.75rem",
        "lineHeight": "1.25rem",
        "fontWeight": 400,
        "letterSpacing": "0.02em"
      },
      "sm": {
        "fontSize": "0.875rem",
        "lineHeight": "1.5rem",
        "fontWeight": 400,
        "letterSpacing": "0em"
      },
      "md": {
        "fontSize": "1rem",
        "lineHeight": "1.75rem",
        "fontWeight": 500,
        "letterSpacing": "0em"
      },
      "lg": {
        "fontSize": "1.25rem",
        "lineHeight": "2rem",
        "fontWeight": 600,
        "letterSpacing": "0em"
      },
      "xl": {
        "fontSize": "1.5rem",
        "lineHeight": "2.125rem",
        "fontWeight": 600,
        "letterSpacing": "0em"
      },
      "2xl": {
        "fontSize": "1.875rem",
        "lineHeight": "2.5rem",
        "fontWeight": 700,
        "letterSpacing": "0em"
      },
      "3xl": {
        "fontSize": "2.25rem",
        "lineHeight": "2.75rem",
        "fontWeight": 700,
        "letterSpacing": "0em"
      },
      "4xl": {
        "fontSize": "3rem",
        "lineHeight": "3.5rem",
        "fontWeight": 800,
        "letterSpacing": "0em"
      },
      "5xl": {
        "fontSize": "3.75rem",
        "lineHeight": "4.25rem",
        "fontWeight": 800,
        "letterSpacing": "0em"
      },
      "6xl": {
        "fontSize": "4.5rem",
        "lineHeight": "5rem",
        "fontWeight": 900,
        "letterSpacing": "0em"
      }
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
var NAV_FIELDS = [
  { name: "bg", tokenKey: "bg" },
  { name: "text", tokenKey: "text" },
  { name: "link", tokenKey: "link" },
  { name: "link-hover", tokenKey: "linkHover" },
  { name: "link-active", tokenKey: "linkActive" },
  { name: "border", tokenKey: "border" }
];
var MODAL_FIELDS = [
  { name: "bg", tokenKey: "bg" },
  { name: "shadow", tokenKey: "shadow" },
  { name: "border", tokenKey: "border" },
  { name: "overlay", tokenKey: "overlay" }
];
var TOAST_VARIANTS = ["success", "warning", "danger", "info"].map((variant) => ({
  variant,
  fields: [
    { name: "bg", tokenKey: "bg" },
    { name: "text", tokenKey: "text" },
    { name: "border", tokenKey: "border" },
    { name: "icon", tokenKey: "icon" }
  ]
}));
var TOOLTIP_FIELDS = [
  { name: "bg", tokenKey: "bg" },
  { name: "text", tokenKey: "text" },
  { name: "border", tokenKey: "border" }
];
var DROPDOWN_FIELDS = [
  { name: "bg", modePath: ["bg"], aliasPath: ["bg"] },
  { name: "border", modePath: ["border"], aliasPath: ["border"] },
  { name: "item-default", modePath: ["item", "default"], aliasPath: ["item", "default"] },
  { name: "item-hover", modePath: ["item", "hover"], aliasPath: ["item", "hover"] },
  { name: "item-active", modePath: ["item", "active"], aliasPath: ["item", "active"] },
  { name: "item-text", modePath: ["item", "text"], aliasPath: ["item", "text"] }
];
var resolveTokenReference = (tokens2, reference) => {
  const path = reference.slice(1, -1).split(".");
  let current = tokens2;
  for (const part of path) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return reference;
    }
  }
  return typeof current === "string" || typeof current === "number" ? String(current) : reference;
};
var hexToRgba = (hex, opacity) => {
  const cleanHex = hex.replace("#", "");
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
var resolveValue = (tokens2, value) => {
  let str = String(value);
  const regex = /\{([^}]+)\}/g;
  str = str.replace(regex, (match) => resolveTokenReference(tokens2, match));
  const opacityRegex = /(#[0-9a-fA-F]{3,6})\s*\/\s*([0-9.]+)/g;
  str = str.replace(opacityRegex, (match, hex, opacity) => hexToRgba(hex, opacity));
  return str;
};
var resolveSemanticValue = (value, tokens2) => {
  if (typeof value === "string" || typeof value === "number") {
    return resolveValue(tokens2, value);
  }
  if (value && typeof value === "object" && "value" in value) {
    return resolveValue(tokens2, value.value);
  }
  return void 0;
};
var getPath = (source, path) => path.reduce((acc, key) => acc && typeof acc === "object" ? acc[key] : void 0, source);
var pickSemantic = (tokens2, ...candidates) => {
  for (const candidate of candidates) {
    const resolved = resolveSemanticValue(candidate, tokens2);
    if (resolved !== void 0) return resolved;
  }
  return void 0;
};
var createCssVariableMap = (tokens2, options = {}) => {
  const prefix = options.prefix ?? DEFAULT_PREFIX;
  const map = {};
  const baseTokens = tokens2;
  const assign = (name, value) => {
    const resolved = resolveSemanticValue(value, tokens2);
    if (resolved !== void 0) {
      map[name] = resolved;
      return;
    }
    if (value === void 0) return;
    map[name] = resolveValue(tokens2, value);
  };
  Object.entries(baseTokens.colors).forEach(([group, scale]) => {
    if (typeof scale === "string" || typeof scale === "number") {
      assign(toVariableName(prefix, "color", group), scale);
      return;
    }
    Object.entries(scale).forEach(([step, value]) => {
      assign(toVariableName(prefix, "color", group, step), value);
    });
  });
  if (baseTokens.space) {
    Object.entries(baseTokens.space).forEach(([key, value]) => {
      assign(toVariableName(prefix, "space", key), value);
    });
  }
  if (baseTokens.layout) {
    const layout = baseTokens.layout;
    if (layout.section?.padding) {
      Object.entries(layout.section.padding).forEach(([key, value]) => {
        assign(toVariableName(prefix, "layout", "section", "padding", key), value);
      });
    }
    if (layout.section?.gap) {
      Object.entries(layout.section.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, "layout", "section", "gap", key), value);
      });
    }
    if (layout.stack?.gap) {
      Object.entries(layout.stack.gap).forEach(([key, value]) => {
        assign(toVariableName(prefix, "layout", "stack", "gap", key), value);
      });
    }
    if (layout.container?.paddingInline) {
      Object.entries(layout.container.paddingInline).forEach(([key, value]) => {
        assign(toVariableName(prefix, "layout", "container", "padding-inline", key), value);
      });
    }
    const container = layout.container;
    if (container?.maxWidth) {
      assign(toVariableName(prefix, "layout", "container", "max-width"), container.maxWidth);
    }
  }
  const border = baseTokens.border;
  if (border?.width) {
    Object.entries(border.width).forEach(([key, value]) => {
      assign(toVariableName(prefix, "border", "width", key), value);
    });
  }
  if (border?.style) {
    Object.entries(border.style).forEach(([key, value]) => {
      assign(toVariableName(prefix, "border", "style", key), value);
    });
  }
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
    const scaleEntry = entry;
    assign(toVariableName(prefix, "font", key, "letter-spacing"), scaleEntry.letterSpacing);
  });
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
  assign(toVariableName(prefix, "reduced-motion"), baseTokens.accessibility.reducedMotion);
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
  if (baseTokens.animations) {
    Object.entries(baseTokens.animations).forEach(
      ([name, animation]) => {
        if (name === "reducedMotion") {
          Object.entries(animation).forEach(([subName, subAnimation]) => {
            assign(toVariableName(prefix, "animation", "reduced-motion", subName, "duration"), subAnimation.duration);
            assign(toVariableName(prefix, "animation", "reduced-motion", subName, "easing"), subAnimation.easing);
            assign(toVariableName(prefix, "animation", "reduced-motion", subName, "keyframes"), subAnimation.keyframes);
          });
        } else {
          const entry = animation;
          assign(toVariableName(prefix, "animation", name, "duration"), entry.duration);
          assign(toVariableName(prefix, "animation", name, "easing"), entry.easing);
          assign(toVariableName(prefix, "animation", name, "keyframes"), entry.keyframes);
        }
      }
    );
  }
  return map;
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
  const linkTokens = tokens2.link ?? {};
  const semanticEntries = [
    { varParts: ["surface", "page"], modePath: ["surface", "page"], aliasSrc: surfaceAliases, aliasPath: ["page"] },
    { varParts: ["surface", "card"], modePath: ["surface", "card"], aliasSrc: surfaceAliases, aliasPath: ["card"] },
    { varParts: ["surface", "input"], modePath: ["surface", "input"], aliasSrc: surfaceAliases, aliasPath: ["input"] },
    { varParts: ["surface", "overlay"], modePath: ["surface", "overlay"], aliasSrc: surfaceAliases, aliasPath: ["overlay"] },
    { varParts: ["surface", "subtle"], modePath: ["surface", "subtle"] },
    { varParts: ["surface", "hero"], modePath: ["surface", "hero"], aliasSrc: surfaceAliases, aliasPath: ["hero"] },
    { varParts: ["surface", "hover"], modePath: ["surface", "hover"], aliasSrc: surfaceAliases, aliasPath: ["hover"] },
    { varParts: ["surface", "selected"], modePath: ["surface", "selected"], aliasSrc: surfaceAliases, aliasPath: ["selected"] },
    { varParts: ["surface", "active"], modePath: ["surface", "active"], aliasSrc: surfaceAliases, aliasPath: ["active"] },
    { varParts: ["surface", "divider"], modePath: ["surface", "divider"], aliasSrc: surfaceAliases, aliasPath: ["divider"] },
    { varParts: ["text", "on", "page", "default"], modePath: ["text", "onPage", "default"], aliasSrc: textAliases, aliasPath: ["onPage", "default"] },
    { varParts: ["text", "on", "page", "muted"], modePath: ["text", "onPage", "muted"], aliasSrc: textAliases, aliasPath: ["onPage", "muted"] },
    { varParts: ["text", "on", "page", "subtle"], modePath: ["text", "onPage", "subtle"], aliasSrc: textAliases, aliasPath: ["onPage", "subtle"] },
    { varParts: ["text", "on", "page", "meta"], modePath: ["text", "onPage", "meta"], aliasSrc: textAliases, aliasPath: ["onPage", "meta"] },
    { varParts: ["text", "on", "page", "brand"], modePath: ["text", "onPage", "brand"], aliasSrc: textAliases, aliasPath: ["onPage", "brand"] },
    { varParts: ["text", "on", "surface", "default"], modePath: ["text", "onSurface", "default"], aliasSrc: textAliases, aliasPath: ["onSurface", "default"] },
    { varParts: ["text", "on", "surface", "muted"], modePath: ["text", "onSurface", "muted"], aliasSrc: textAliases, aliasPath: ["onSurface", "muted"] },
    { varParts: ["text", "on", "surface", "subtle"], modePath: ["text", "onSurface", "subtle"], aliasSrc: textAliases, aliasPath: ["onSurface", "subtle"] },
    { varParts: ["text", "on", "surface", "meta"], modePath: ["text", "onSurface", "meta"], aliasSrc: textAliases, aliasPath: ["onSurface", "meta"] },
    { varParts: ["text", "on", "surface", "brand"], modePath: ["text", "onSurface", "brand"], aliasSrc: textAliases, aliasPath: ["onSurface", "brand"] },
    { varParts: ["component", "card", "text"], modePath: ["component", "card", "text"], aliasSrc: componentAliases, aliasPath: ["card", "text"] },
    { varParts: ["component", "card", "text-muted"], modePath: ["component", "card", "textMuted"], aliasSrc: componentAliases, aliasPath: ["card", "textMuted"] },
    { varParts: ["component", "input", "text"], modePath: ["component", "input", "text"], aliasSrc: componentAliases, aliasPath: ["input", "text"] },
    { varParts: ["component", "input", "placeholder"], modePath: ["component", "input", "placeholder"], aliasSrc: componentAliases, aliasPath: ["input", "placeholder"] },
    { varParts: ["button", "text", "default"], modePath: ["component", "button", "textDefault"], aliasSrc: componentAliases, aliasPath: ["button", "textDefault"] },
    { varParts: ["button", "text", "on", "primary"], modePath: ["component", "button", "textOnPrimary"], aliasSrc: componentAliases, aliasPath: ["button", "textOnPrimary"] },
    ...BADGE_VARIANTS.flatMap(({ variant, bgKey, textKey }) => [
      { varParts: ["badge", variant, "bg"], modePath: ["component", "badge", bgKey], aliasSrc: componentAliases, aliasPath: ["badge", bgKey] },
      { varParts: ["badge", variant, "text"], modePath: ["component", "badge", textKey], aliasSrc: componentAliases, aliasPath: ["badge", textKey] }
    ]),
    ...ICON_BOX_FIELDS.map(({ name, tokenKey }) => ({
      varParts: ["icon-box", name],
      modePath: ["component", "iconBox", tokenKey],
      aliasSrc: componentAliases,
      aliasPath: ["iconBox", tokenKey]
    })),
    ...NAV_FIELDS.map(({ name, tokenKey }) => ({
      varParts: ["nav", name],
      modePath: ["component", "nav", tokenKey],
      aliasSrc: componentAliases,
      aliasPath: ["nav", tokenKey]
    })),
    ...MODAL_FIELDS.map(({ name, tokenKey }) => ({
      varParts: ["modal", name],
      modePath: ["component", "modal", tokenKey],
      aliasSrc: componentAliases,
      aliasPath: ["modal", tokenKey]
    })),
    ...TOAST_VARIANTS.flatMap(({ variant, fields }) => fields.map(({ name, tokenKey }) => ({
      varParts: ["toast", variant, name],
      modePath: ["component", "toast", variant, tokenKey],
      aliasSrc: componentAliases,
      aliasPath: ["toast", variant, tokenKey]
    }))),
    ...TOOLTIP_FIELDS.map(({ name, tokenKey }) => ({
      varParts: ["tooltip", name],
      modePath: ["component", "tooltip", tokenKey],
      aliasSrc: componentAliases,
      aliasPath: ["tooltip", tokenKey]
    })),
    ...DROPDOWN_FIELDS.map(({ name, modePath, aliasPath }) => ({
      varParts: ["dropdown", name],
      modePath: ["component", "dropdown", ...modePath],
      aliasSrc: componentAliases,
      aliasPath: ["dropdown", ...aliasPath]
    }))
  ];
  const baseLines = [];
  const darkLines = [];
  const addBase = (name, value) => {
    if (value !== void 0) baseLines.push(`  ${name}: ${value};`);
  };
  const addDark = (name, value) => {
    if (value !== void 0) darkLines.push(`  ${name}: ${value};`);
  };
  semanticEntries.forEach(({ varParts, modePath, aliasSrc, aliasPath }) => {
    const varName = toVariableName(prefix, ...varParts);
    const aliasCandidate = aliasSrc && aliasPath ? [getPath(aliasSrc, aliasPath)] : [];
    addBase(varName, pickSemantic(tokens2, getPath(defaultMode, modePath), ...aliasCandidate));
    addDark(varName, pickSemantic(tokens2, getPath(darkMode, modePath), getPath(defaultMode, modePath), ...aliasCandidate));
  });
  Object.entries(linkTokens).forEach(([key, value]) => {
    const varName = toVariableName(prefix, "link", key);
    const resolved = pickSemantic(tokens2, value);
    addBase(varName, resolved);
    addDark(varName, resolved);
  });
  const rootBlock = `${selector} {
${[...baseLines, ...mapLines].join("\n")}
}`;
  const darkBlock = `${selector}[data-spectre-theme="dark"] {
${darkLines.join("\n")}
}`;
  return `${rootBlock}
${darkBlock}
`;
};

// src/index.ts
var tokens = coreTokens;
var sanitizeFontFamily = (value) => value.split(",").map((segment) => segment.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
var createTailwindTheme = (source = tokens) => {
  const colors = {};
  Object.entries(source.colors).forEach(([group, value]) => {
    if (typeof value === "object" && value !== null) {
      colors[group] = { ...value };
    } else {
      colors[group] = value;
    }
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
        ..."letterSpacing" in entry ? { letterSpacing: entry.letterSpacing } : {}
      }
    ];
    return acc;
  }, {});
  return {
    colors,
    spacing: { ...source.space ?? {} },
    borderRadius: { ...source.radii ?? {} },
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
      ...source.border?.width ?? {}
    }
  };
};
var tailwindTheme = createTailwindTheme(tokens);
var tailwindPreset = {
  theme: tailwindTheme
};
var index_default = tokens;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateCssVariables,
  tailwindPreset,
  tailwindTheme,
  tokens
});
//# sourceMappingURL=index.cjs.map