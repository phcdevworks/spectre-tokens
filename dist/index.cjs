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
      "text": {
        "value": "{colors.neutral.900}"
      },
      "textMuted": {
        "value": "{colors.neutral.500}"
      }
    },
    "input": {
      "text": {
        "value": "{colors.neutral.900}"
      },
      "placeholder": {
        "value": "{colors.neutral.400}"
      }
    },
    "button": {
      "textDefault": {
        "value": "{colors.neutral.900}"
      },
      "textOnPrimary": {
        "value": "{colors.white}"
      }
    },
    "badge": {
      "neutralBg": {
        "value": "{colors.neutral.100}",
        "metadata": {
          "pair": "component.badge.neutralText"
        }
      },
      "neutralBgHover": {
        "value": "{colors.neutral.200}",
        "metadata": {
          "pair": "component.badge.neutralText"
        }
      },
      "neutralText": {
        "value": "{colors.neutral.700}"
      },
      "infoBg": {
        "value": "{colors.info.100}",
        "metadata": {
          "pair": "component.badge.infoText"
        }
      },
      "infoBgHover": {
        "value": "{colors.info.200}",
        "metadata": {
          "pair": "component.badge.infoText"
        }
      },
      "infoText": {
        "value": "{colors.info.700}"
      },
      "successBg": {
        "value": "{colors.success.100}",
        "metadata": {
          "pair": "component.badge.successText"
        }
      },
      "successBgHover": {
        "value": "{colors.success.200}",
        "metadata": {
          "pair": "component.badge.successText"
        }
      },
      "successText": {
        "value": "{colors.success.800}"
      },
      "warningBg": {
        "value": "{colors.warning.100}",
        "metadata": {
          "pair": "component.badge.warningText"
        }
      },
      "warningBgHover": {
        "value": "{colors.warning.200}",
        "metadata": {
          "pair": "component.badge.warningText"
        }
      },
      "warningText": {
        "value": "{colors.warning.800}"
      },
      "dangerBg": {
        "value": "{colors.error.100}",
        "metadata": {
          "pair": "component.badge.dangerText"
        }
      },
      "dangerBgHover": {
        "value": "{colors.error.200}",
        "metadata": {
          "pair": "component.badge.dangerText"
        }
      },
      "dangerText": {
        "value": "{colors.error.800}"
      }
    },
    "iconBox": {
      "bg": {
        "value": "{colors.white}"
      },
      "border": {
        "value": "{colors.neutral.200}"
      },
      "iconDefault": {
        "value": "{colors.info.600}"
      },
      "iconSuccess": {
        "value": "{colors.success.600}"
      },
      "iconWarning": {
        "value": "{colors.warning.600}"
      },
      "iconDanger": {
        "value": "{colors.error.600}"
      }
    },
    "testimonial": {
      "bg": {
        "value": "{colors.white}"
      },
      "border": {
        "value": "{colors.neutral.200}"
      },
      "text": {
        "value": "{colors.neutral.700}"
      },
      "authorName": {
        "value": "{colors.neutral.900}"
      },
      "authorTitle": {
        "value": "{colors.neutral.500}"
      },
      "quoteMark": {
        "value": "{colors.neutral.300}"
      }
    },
    "pricingCard": {
      "bg": {
        "value": "{colors.white}",
        "metadata": {}
      },
      "border": {
        "value": "{colors.neutral.200}",
        "metadata": {}
      },
      "featuredBg": {
        "value": "{colors.info.600}",
        "metadata": {
          "pair": "component.pricingCard.featuredText"
        }
      },
      "featuredText": {
        "value": "{colors.white}",
        "metadata": {}
      },
      "featuredBadgeBg": {
        "value": "{colors.warning.500}",
        "metadata": {
          "pair": "component.pricingCard.featuredBadgeText"
        }
      },
      "featuredBadgeText": {
        "value": "{colors.neutral.900}",
        "metadata": {}
      },
      "price": {
        "value": "{colors.neutral.900}",
        "metadata": {}
      },
      "priceDescription": {
        "value": "{colors.neutral.500}",
        "metadata": {}
      }
    },
    "rating": {
      "starFilled": {
        "value": "{colors.warning.500}"
      },
      "starEmpty": {
        "value": "{colors.neutral.200}"
      },
      "text": {
        "value": "{colors.neutral.500}"
      }
    }
  },
  "buttons": {
    "primary": {
      "bg": {
        "value": "{colors.info.600}",
        "metadata": {
          "pair": "buttons.primary.text"
        }
      },
      "bgHover": {
        "value": "{colors.info.700}",
        "metadata": {
          "pair": "buttons.primary.text"
        }
      },
      "bgActive": {
        "value": "{colors.info.800}",
        "metadata": {
          "pair": "buttons.primary.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.neutral.200}"
      },
      "text": {
        "value": "{colors.white}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "focusRing": {
        "value": "{colors.info.500} / 0.4"
      }
    },
    "secondary": {
      "bg": {
        "value": "{colors.white}",
        "metadata": {
          "pair": "buttons.secondary.text"
        }
      },
      "bgHover": {
        "value": "{colors.neutral.50}",
        "metadata": {
          "pair": "buttons.secondary.text"
        }
      },
      "bgActive": {
        "value": "{colors.neutral.100}",
        "metadata": {
          "pair": "buttons.secondary.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.neutral.50}"
      },
      "text": {
        "value": "{colors.info.700}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "border": {
        "value": "{colors.info.700}"
      },
      "borderDisabled": {
        "value": "{colors.neutral.200}"
      },
      "focusRing": {
        "value": "{colors.info.500} / 0.4"
      }
    },
    "ghost": {
      "bg": {
        "value": "transparent"
      },
      "bgHover": {
        "value": "{colors.info.50}",
        "metadata": {
          "pair": "buttons.ghost.text"
        }
      },
      "bgActive": {
        "value": "{colors.info.100}",
        "metadata": {
          "pair": "buttons.ghost.text"
        }
      },
      "bgDisabled": {
        "value": "transparent"
      },
      "text": {
        "value": "{colors.info.700}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "focusRing": {
        "value": "{colors.info.500} / 0.4"
      }
    },
    "danger": {
      "bg": {
        "value": "{colors.error.600}",
        "metadata": {
          "pair": "buttons.danger.text"
        }
      },
      "bgHover": {
        "value": "{colors.error.700}",
        "metadata": {
          "pair": "buttons.danger.text"
        }
      },
      "bgActive": {
        "value": "{colors.error.800}",
        "metadata": {
          "pair": "buttons.danger.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.error.200}"
      },
      "text": {
        "value": "{colors.white}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "focusRing": {
        "value": "{colors.error.500} / 0.4"
      }
    },
    "success": {
      "bg": {
        "value": "{colors.success.700}",
        "metadata": {
          "pair": "buttons.success.text"
        }
      },
      "bgHover": {
        "value": "{colors.success.800}",
        "metadata": {
          "pair": "buttons.success.text"
        }
      },
      "bgActive": {
        "value": "{colors.success.900}",
        "metadata": {
          "pair": "buttons.success.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.success.200}"
      },
      "text": {
        "value": "{colors.white}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "focusRing": {
        "value": "{colors.success.500} / 0.4"
      }
    },
    "cta": {
      "bg": {
        "value": "{colors.brand.600}",
        "metadata": {
          "pair": "buttons.cta.text"
        }
      },
      "bgHover": {
        "value": "{colors.brand.700}",
        "metadata": {
          "pair": "buttons.cta.text"
        }
      },
      "bgActive": {
        "value": "{colors.brand.800}",
        "metadata": {
          "pair": "buttons.cta.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.brand.200}"
      },
      "text": {
        "value": "{colors.white}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "shadow": {
        "value": "0 4px 14px 0 {colors.brand.500} / 0.39"
      },
      "focusRing": {
        "value": "{colors.brand.500} / 0.4"
      }
    },
    "accent": {
      "bg": {
        "value": "{colors.accent.600}",
        "metadata": {
          "pair": "buttons.accent.text"
        }
      },
      "bgHover": {
        "value": "{colors.accent.700}",
        "metadata": {
          "pair": "buttons.accent.text"
        }
      },
      "bgActive": {
        "value": "{colors.accent.800}",
        "metadata": {
          "pair": "buttons.accent.text"
        }
      },
      "bgDisabled": {
        "value": "{colors.accent.200}"
      },
      "text": {
        "value": "{colors.white}"
      },
      "textDisabled": {
        "value": "{colors.neutral.400}"
      },
      "focusRing": {
        "value": "{colors.accent.500} / 0.4"
      }
    }
  },
  "forms": {
    "default": {
      "bg": {
        "value": "{colors.white}"
      },
      "border": {
        "value": "{colors.neutral.300}"
      },
      "text": {
        "value": "{colors.neutral.900}"
      },
      "placeholder": {
        "value": "{colors.neutral.400}"
      }
    },
    "hover": {
      "border": {
        "value": "{colors.info.500}"
      }
    },
    "focus": {
      "border": {
        "value": "{colors.info.500}"
      },
      "ring": {
        "value": "{colors.info.500}"
      }
    },
    "valid": {
      "border": {
        "value": "{colors.success.500}"
      },
      "bg": {
        "value": "{colors.success.50}",
        "metadata": {
          "pair": "forms.valid.text"
        }
      },
      "text": {
        "value": "{colors.success.700}"
      }
    },
    "invalid": {
      "border": {
        "value": "{colors.error.500}"
      },
      "bg": {
        "value": "{colors.error.50}",
        "metadata": {
          "pair": "forms.invalid.text"
        }
      },
      "text": {
        "value": "{colors.error.700}"
      }
    },
    "disabled": {
      "bg": {
        "value": "{colors.neutral.50}"
      },
      "border": {
        "value": "{colors.neutral.200}"
      },
      "text": {
        "value": "{colors.neutral.400}"
      }
    }
  },
  "modes": {
    "default": {
      "surface": {
        "page": {
          "value": "{colors.neutral.50}",
          "metadata": {
            "pair": "modes.default.text.onPage.default"
          }
        },
        "card": {
          "value": "{colors.white}",
          "metadata": {
            "pair": "modes.default.text.onSurface.default"
          }
        },
        "input": {
          "value": "{colors.white}",
          "metadata": {
            "pair": "modes.default.text.onSurface.default"
          }
        },
        "overlay": {
          "value": "{colors.neutral.900} / 0.6"
        },
        "alternate": {
          "value": "{colors.neutral.100}",
          "metadata": {
            "pair": "modes.default.text.onPage.default"
          }
        },
        "hero": {
          "value": "linear-gradient(135deg, {colors.indigo.500} 0%, {colors.violet.600} 100%)"
        }
      },
      "text": {
        "onPage": {
          "default": {
            "value": "{colors.neutral.900}",
            "metadata": {
              "pair": "modes.default.surface.page"
            }
          },
          "muted": {
            "value": "{colors.neutral.600}",
            "metadata": {
              "pair": "modes.default.surface.page"
            }
          },
          "subtle": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.surface.page"
            }
          },
          "meta": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.surface.page"
            }
          },
          "brand": {
            "value": "{colors.brand.600}",
            "metadata": {
              "pair": "modes.default.surface.page"
            }
          }
        },
        "onSurface": {
          "default": {
            "value": "{colors.neutral.900}",
            "metadata": {
              "pair": "modes.default.surface.card"
            }
          },
          "muted": {
            "value": "{colors.neutral.600}",
            "metadata": {
              "pair": "modes.default.surface.card"
            }
          },
          "subtle": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.surface.card"
            }
          },
          "meta": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.surface.card"
            }
          },
          "brand": {
            "value": "{colors.brand.600}",
            "metadata": {
              "pair": "modes.default.surface.card"
            }
          }
        }
      },
      "component": {
        "card": {
          "text": {
            "value": "{colors.neutral.900}"
          },
          "textMuted": {
            "value": "{colors.neutral.500}"
          }
        },
        "input": {
          "text": {
            "value": "{colors.neutral.900}"
          },
          "placeholder": {
            "value": "{colors.neutral.400}"
          }
        },
        "button": {
          "textDefault": {
            "value": "{colors.neutral.900}"
          },
          "textOnPrimary": {
            "value": "{colors.white}"
          }
        },
        "badge": {
          "neutralBg": {
            "value": "{colors.neutral.100}",
            "metadata": {
              "pair": "modes.default.component.badge.neutralText"
            }
          },
          "neutralText": {
            "value": "{colors.neutral.700}",
            "metadata": {}
          },
          "infoBg": {
            "value": "{colors.info.100}",
            "metadata": {
              "pair": "modes.default.component.badge.infoText"
            }
          },
          "infoText": {
            "value": "{colors.info.700}",
            "metadata": {}
          },
          "successBg": {
            "value": "{colors.success.100}",
            "metadata": {
              "pair": "modes.default.component.badge.successText"
            }
          },
          "successText": {
            "value": "{colors.success.700}",
            "metadata": {}
          },
          "warningBg": {
            "value": "{colors.warning.100}",
            "metadata": {
              "pair": "modes.default.component.badge.warningText"
            }
          },
          "warningText": {
            "value": "{colors.warning.800}",
            "metadata": {}
          },
          "dangerBg": {
            "value": "{colors.error.100}",
            "metadata": {
              "pair": "modes.default.component.badge.dangerText"
            }
          },
          "dangerText": {
            "value": "{colors.error.700}",
            "metadata": {}
          }
        },
        "iconBox": {
          "bg": {
            "value": "{colors.white}",
            "metadata": {}
          },
          "border": {
            "value": "{colors.neutral.200}",
            "metadata": {}
          },
          "iconDefault": {
            "value": "{colors.info.600}",
            "metadata": {}
          },
          "iconSuccess": {
            "value": "{colors.success.600}",
            "metadata": {}
          },
          "iconWarning": {
            "value": "{colors.warning.600}",
            "metadata": {}
          },
          "iconDanger": {
            "value": "{colors.error.600}",
            "metadata": {}
          }
        },
        "testimonial": {
          "bg": {
            "value": "{colors.white}",
            "metadata": {
              "pair": "modes.default.component.testimonial.text"
            }
          },
          "border": {
            "value": "{colors.neutral.200}",
            "metadata": {}
          },
          "text": {
            "value": "{colors.neutral.700}",
            "metadata": {
              "pair": "modes.default.component.testimonial.bg"
            }
          },
          "authorName": {
            "value": "{colors.neutral.900}",
            "metadata": {
              "pair": "modes.default.component.testimonial.bg"
            }
          },
          "authorTitle": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.component.testimonial.bg"
            }
          },
          "quoteMark": {
            "value": "{colors.neutral.300}",
            "metadata": {}
          }
        },
        "pricingCard": {
          "bg": {
            "value": "{colors.white}",
            "metadata": {
              "pair": "modes.default.component.pricingCard.price"
            }
          },
          "border": {
            "value": "{colors.neutral.200}",
            "metadata": {}
          },
          "featuredBg": {
            "value": "{colors.info.600}",
            "metadata": {
              "pair": "modes.default.component.pricingCard.featuredText"
            }
          },
          "featuredText": {
            "value": "{colors.white}",
            "metadata": {}
          },
          "featuredBadgeBg": {
            "value": "{colors.warning.500}",
            "metadata": {
              "pair": "modes.default.component.pricingCard.featuredBadgeText"
            }
          },
          "featuredBadgeText": {
            "value": "{colors.neutral.900}",
            "metadata": {}
          },
          "price": {
            "value": "{colors.neutral.900}",
            "metadata": {
              "pair": "modes.default.component.pricingCard.bg"
            }
          },
          "priceDescription": {
            "value": "{colors.neutral.500}",
            "metadata": {
              "pair": "modes.default.component.pricingCard.bg"
            }
          }
        },
        "rating": {
          "starFilled": {
            "value": "{colors.warning.500}",
            "metadata": {}
          },
          "starEmpty": {
            "value": "{colors.neutral.200}",
            "metadata": {}
          },
          "text": {
            "value": "{colors.neutral.500}",
            "metadata": {}
          }
        }
      }
    },
    "dark": {
      "surface": {
        "page": {
          "value": "{colors.neutral.900}",
          "metadata": {
            "pair": "modes.dark.text.onPage.default"
          }
        },
        "card": {
          "value": "{colors.neutral.800}",
          "metadata": {
            "pair": "modes.dark.text.onSurface.default"
          }
        },
        "input": {
          "value": "{colors.neutral.700}",
          "metadata": {
            "pair": "modes.dark.text.onSurface.default"
          }
        },
        "overlay": {
          "value": "{colors.neutral.800}"
        },
        "alternate": {
          "value": "{colors.neutral.800}",
          "metadata": {
            "pair": "modes.dark.text.onPage.default"
          }
        },
        "hero": {
          "value": "linear-gradient(135deg, {colors.accent.900} 0%, {colors.accent.700} 100%)"
        }
      },
      "text": {
        "onPage": {
          "default": {
            "value": "{colors.neutral.50}",
            "metadata": {
              "pair": "modes.dark.surface.page"
            }
          },
          "muted": {
            "value": "{colors.neutral.200}",
            "metadata": {
              "pair": "modes.dark.surface.page"
            }
          },
          "subtle": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.surface.page"
            }
          },
          "meta": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.surface.page"
            }
          },
          "brand": {
            "value": "{colors.brand.400}",
            "metadata": {
              "pair": "modes.dark.surface.page"
            }
          }
        },
        "onSurface": {
          "default": {
            "value": "{colors.neutral.100}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          },
          "muted": {
            "value": "{colors.neutral.200}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          },
          "subtle": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          },
          "meta": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          },
          "brand": {
            "value": "{colors.brand.400}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          }
        }
      },
      "component": {
        "card": {
          "text": {
            "value": "{colors.neutral.100}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          },
          "textMuted": {
            "value": "{colors.neutral.200}",
            "metadata": {
              "pair": "modes.dark.surface.card"
            }
          }
        },
        "input": {
          "text": {
            "value": "{colors.neutral.100}"
          },
          "placeholder": {
            "value": "{colors.neutral.400}"
          }
        },
        "button": {
          "textDefault": {
            "value": "{colors.neutral.100}"
          },
          "textOnPrimary": {
            "value": "{colors.white}"
          }
        },
        "badge": {
          "neutralBg": {
            "value": "{colors.neutral.700}",
            "metadata": {
              "pair": "modes.dark.component.badge.neutralText"
            }
          },
          "neutralBgHover": {
            "value": "{colors.neutral.600}",
            "metadata": {
              "pair": "modes.dark.component.badge.neutralText"
            }
          },
          "neutralText": {
            "value": "{colors.neutral.100}",
            "metadata": {}
          },
          "infoBg": {
            "value": "{colors.info.900}",
            "metadata": {
              "pair": "modes.dark.component.badge.infoText"
            }
          },
          "infoBgHover": {
            "value": "{colors.info.700}",
            "metadata": {
              "pair": "modes.dark.component.badge.infoText"
            }
          },
          "infoText": {
            "value": "{colors.info.100}",
            "metadata": {}
          },
          "successBg": {
            "value": "{colors.success.800}",
            "metadata": {
              "pair": "modes.dark.component.badge.successText"
            }
          },
          "successBgHover": {
            "value": "{colors.success.700}",
            "metadata": {
              "pair": "modes.dark.component.badge.successText"
            }
          },
          "successText": {
            "value": "{colors.success.100}",
            "metadata": {}
          },
          "warningBg": {
            "value": "{colors.warning.800}",
            "metadata": {
              "pair": "modes.dark.component.badge.warningText"
            }
          },
          "warningBgHover": {
            "value": "{colors.warning.800}",
            "metadata": {
              "pair": "modes.dark.component.badge.warningText"
            }
          },
          "warningText": {
            "value": "{colors.warning.100}",
            "metadata": {}
          },
          "dangerBg": {
            "value": "{colors.error.800}",
            "metadata": {
              "pair": "modes.dark.component.badge.dangerText"
            }
          },
          "dangerBgHover": {
            "value": "{colors.error.700}",
            "metadata": {
              "pair": "modes.dark.component.badge.dangerText"
            }
          },
          "dangerText": {
            "value": "{colors.error.100}",
            "metadata": {}
          }
        },
        "iconBox": {
          "bg": {
            "value": "{colors.neutral.800}",
            "metadata": {}
          },
          "border": {
            "value": "{colors.neutral.700}",
            "metadata": {}
          },
          "iconDefault": {
            "value": "{colors.info.300}",
            "metadata": {}
          },
          "iconSuccess": {
            "value": "{colors.success.400}",
            "metadata": {}
          },
          "iconWarning": {
            "value": "{colors.warning.400}",
            "metadata": {}
          },
          "iconDanger": {
            "value": "{colors.error.400}",
            "metadata": {}
          }
        },
        "testimonial": {
          "bg": {
            "value": "{colors.neutral.800}",
            "metadata": {
              "pair": "modes.dark.component.testimonial.text"
            }
          },
          "border": {
            "value": "{colors.neutral.700}",
            "metadata": {}
          },
          "text": {
            "value": "{colors.neutral.200}",
            "metadata": {
              "pair": "modes.dark.component.testimonial.bg"
            }
          },
          "authorName": {
            "value": "{colors.neutral.100}",
            "metadata": {
              "pair": "modes.dark.component.testimonial.bg"
            }
          },
          "authorTitle": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.component.testimonial.bg"
            }
          },
          "quoteMark": {
            "value": "{colors.neutral.600}",
            "metadata": {}
          }
        },
        "pricingCard": {
          "bg": {
            "value": "{colors.neutral.800}",
            "metadata": {
              "pair": "modes.dark.component.pricingCard.price"
            }
          },
          "border": {
            "value": "{colors.neutral.700}",
            "metadata": {}
          },
          "featuredBg": {
            "value": "{colors.info.600}",
            "metadata": {
              "pair": "modes.dark.component.pricingCard.featuredText"
            }
          },
          "featuredText": {
            "value": "{colors.white}",
            "metadata": {}
          },
          "featuredBadgeBg": {
            "value": "{colors.warning.500}",
            "metadata": {
              "pair": "modes.dark.component.pricingCard.featuredBadgeText"
            }
          },
          "featuredBadgeText": {
            "value": "{colors.neutral.900}",
            "metadata": {}
          },
          "price": {
            "value": "{colors.neutral.100}",
            "metadata": {
              "pair": "modes.dark.component.pricingCard.bg"
            }
          },
          "priceDescription": {
            "value": "{colors.neutral.300}",
            "metadata": {
              "pair": "modes.dark.component.pricingCard.bg"
            }
          }
        },
        "rating": {
          "starFilled": {
            "value": "{colors.warning.400}",
            "metadata": {}
          },
          "starEmpty": {
            "value": "{colors.neutral.700}",
            "metadata": {}
          },
          "text": {
            "value": "{colors.neutral.400}",
            "metadata": {}
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
      "primary": "#336df4",
      "error": "#ef4444",
      "info": "#0369a1"
    },
    "white": "#ffffff",
    "black": "#000000"
  },
  "space": {
    "0": "0rem",
    "4": "0.25rem",
    "8": "0.5rem",
    "12": "0.75rem",
    "16": "1rem",
    "20": "1.25rem",
    "24": "1.5rem",
    "32": "2rem",
    "40": "2.5rem",
    "48": "3rem",
    "56": "3.5rem",
    "64": "4rem",
    "80": "5rem",
    "96": "6rem"
  },
  "radii": {
    "none": "0",
    "sm": "2px",
    "md": "4px",
    "lg": "8px",
    "pill": "999px"
  },
  "shadows": {
    "none": "none",
    "sm": "0 1px 2px 0 {colors.neutral.800} / 0.06",
    "md": "0 2px 6px -1px {colors.neutral.800} / 0.08",
    "lg": "0 6px 16px -4px {colors.neutral.800} / 0.12"
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
    "tooltip": "1600"
  },
  "transitions": {
    "duration": {
      "instant": "75ms",
      "fast": "150ms",
      "base": "200ms",
      "moderate": "300ms",
      "slow": "500ms",
      "slower": "700ms"
    },
    "easing": {
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "inOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "spring": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  "animations": {
    "fadeIn": {
      "duration": "200ms",
      "easing": "cubic-bezier(0, 0, 0.2, 1)",
      "keyframes": "fade-in"
    },
    "fadeOut": {
      "duration": "150ms",
      "easing": "cubic-bezier(0.4, 0, 1, 1)",
      "keyframes": "fade-out"
    },
    "slideUp": {
      "duration": "300ms",
      "easing": "cubic-bezier(0, 0, 0.2, 1)",
      "keyframes": "slide-up"
    },
    "slideDown": {
      "duration": "300ms",
      "easing": "cubic-bezier(0, 0, 0.2, 1)",
      "keyframes": "slide-down"
    },
    "scaleIn": {
      "duration": "200ms",
      "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      "keyframes": "scale-in"
    },
    "bounce": {
      "duration": "300ms",
      "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
      "keyframes": "bounce"
    },
    "shake": {
      "duration": "250ms",
      "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
      "keyframes": "shake"
    },
    "pulse": {
      "duration": "1200ms",
      "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
      "keyframes": "pulse"
    }
  },
  "opacity": {
    "disabled": "0.38",
    "hover": "0.92",
    "active": "0.84",
    "focus": "1",
    "overlay": "0.5",
    "tooltip": "0.95"
  },
  "aspectRatios": {
    "square": "1/1",
    "video": "16/9",
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
    "minTouchTarget": "44px",
    "minTextSize": "16px"
  },
  "borders": {
    "card": "{colors.neutral.200}",
    "input": "{colors.neutral.300}"
  },
  "border": {
    "width": {
      "base": "1px",
      "thick": "2px"
    }
  },
  "surface": {
    "page": {
      "value": "{colors.neutral.50}",
      "description": "primary app background"
    },
    "card": {
      "value": "{colors.white}",
      "description": "containers and tiles"
    },
    "input": {
      "value": "{colors.white}",
      "description": "form inputs, textareas"
    },
    "overlay": {
      "value": "{colors.neutral.900} / 0.6",
      "description": "modals, dropdowns, flyouts"
    }
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
      "weight": 400
    },
    "sm": {
      "size": "0.875rem",
      "lineHeight": "1.5rem",
      "weight": 400
    },
    "md": {
      "size": "1rem",
      "lineHeight": "1.75rem",
      "weight": 500
    },
    "lg": {
      "size": "1.25rem",
      "lineHeight": "2rem",
      "weight": 500
    },
    "xl": {
      "size": "1.5rem",
      "lineHeight": "2.125rem",
      "weight": 600
    },
    "2xl": {
      "size": "1.875rem",
      "lineHeight": "2.5rem",
      "weight": 600
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
        "fontWeight": 400
      },
      "md": {
        "fontSize": "1rem",
        "lineHeight": "1.75rem",
        "fontWeight": 500
      },
      "lg": {
        "fontSize": "1.25rem",
        "lineHeight": "2rem",
        "fontWeight": 600
      },
      "xl": {
        "fontSize": "1.5rem",
        "lineHeight": "2.125rem",
        "fontWeight": 600
      },
      "2xl": {
        "fontSize": "1.875rem",
        "lineHeight": "2.5rem",
        "fontWeight": 700
      },
      "3xl": {
        "fontSize": "2.25rem",
        "lineHeight": "2.75rem",
        "fontWeight": 700
      },
      "4xl": {
        "fontSize": "3rem",
        "lineHeight": "3.5rem",
        "fontWeight": 800
      },
      "5xl": {
        "fontSize": "3.75rem",
        "lineHeight": "4.25rem",
        "fontWeight": 800
      },
      "6xl": {
        "fontSize": "4.5rem",
        "lineHeight": "5rem",
        "fontWeight": 900
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
  assign(toVariableName(prefix, "text", "on", "page", "default"), tokens2.text.onPage.default);
  assign(toVariableName(prefix, "text", "on", "page", "muted"), tokens2.text.onPage.muted);
  assign(toVariableName(prefix, "text", "on", "page", "subtle"), tokens2.text.onPage.subtle);
  assign(toVariableName(prefix, "text", "on", "page", "meta"), tokens2.text.onPage.meta);
  assign(toVariableName(prefix, "text", "on", "surface", "default"), tokens2.text.onSurface.default);
  assign(toVariableName(prefix, "text", "on", "surface", "muted"), tokens2.text.onSurface.muted);
  assign(toVariableName(prefix, "text", "on", "surface", "subtle"), tokens2.text.onSurface.subtle);
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
  if (baseTokens.animations) {
    Object.entries(baseTokens.animations).forEach(([name, animation]) => {
      assign(toVariableName(prefix, "animation", name, "duration"), animation.duration);
      assign(toVariableName(prefix, "animation", name, "easing"), animation.easing);
      assign(toVariableName(prefix, "animation", name, "keyframes"), animation.keyframes);
    });
  }
  return map;
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
  addBase(toVariableName(prefix, "surface", "page"), pickSemantic(tokens2, getPath(defaultMode, ["surface", "page"]), getPath(surfaceAliases, ["page"])));
  addBase(toVariableName(prefix, "surface", "card"), pickSemantic(tokens2, getPath(defaultMode, ["surface", "card"]), getPath(surfaceAliases, ["card"])));
  addBase(toVariableName(prefix, "surface", "input"), pickSemantic(tokens2, getPath(defaultMode, ["surface", "input"]), getPath(surfaceAliases, ["input"])));
  addBase(toVariableName(prefix, "surface", "overlay"), pickSemantic(tokens2, getPath(defaultMode, ["surface", "overlay"]), getPath(surfaceAliases, ["overlay"])));
  addBase(toVariableName(prefix, "surface", "hero"), pickSemantic(tokens2, getPath(defaultMode, ["surface", "hero"]), getPath(surfaceAliases, ["hero"])));
  addBase(toVariableName(prefix, "text", "on", "page", "default"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onPage", "default"]), getPath(textAliases, ["onPage", "default"])));
  addBase(toVariableName(prefix, "text", "on", "page", "muted"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onPage", "muted"]), getPath(textAliases, ["onPage", "muted"])));
  addBase(toVariableName(prefix, "text", "on", "page", "subtle"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onPage", "subtle"]), getPath(textAliases, ["onPage", "subtle"])));
  addBase(toVariableName(prefix, "text", "on", "page", "meta"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onPage", "meta"]), getPath(textAliases, ["onPage", "meta"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "default"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onSurface", "default"]), getPath(textAliases, ["onSurface", "default"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "muted"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onSurface", "muted"]), getPath(textAliases, ["onSurface", "muted"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "subtle"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onSurface", "subtle"]), getPath(textAliases, ["onSurface", "subtle"])));
  addBase(toVariableName(prefix, "text", "on", "surface", "meta"), pickSemantic(tokens2, getPath(defaultMode, ["text", "onSurface", "meta"]), getPath(textAliases, ["onSurface", "meta"])));
  addBase(toVariableName(prefix, "component", "card", "text"), pickSemantic(tokens2, getPath(defaultMode, ["component", "card", "text"]), getPath(componentAliases, ["card", "text"])));
  addBase(toVariableName(prefix, "component", "card", "text-muted"), pickSemantic(tokens2, getPath(defaultMode, ["component", "card", "textMuted"]), getPath(componentAliases, ["card", "textMuted"])));
  addBase(toVariableName(prefix, "component", "input", "text"), pickSemantic(tokens2, getPath(defaultMode, ["component", "input", "text"]), getPath(componentAliases, ["input", "text"])));
  addBase(toVariableName(prefix, "component", "input", "placeholder"), pickSemantic(tokens2, getPath(defaultMode, ["component", "input", "placeholder"]), getPath(componentAliases, ["input", "placeholder"])));
  addBase(toVariableName(prefix, "button", "text", "default"), pickSemantic(tokens2, getPath(defaultMode, ["component", "button", "textDefault"]), getPath(componentAliases, ["button", "textDefault"])));
  addBase(toVariableName(prefix, "button", "text", "on", "primary"), pickSemantic(tokens2, getPath(defaultMode, ["component", "button", "textOnPrimary"]), getPath(componentAliases, ["button", "textOnPrimary"])));
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addBase(
      toVariableName(prefix, "badge", variant, "bg"),
      pickSemantic(tokens2, getPath(defaultMode, ["component", "badge", bgKey]), getPath(componentAliases, ["badge", bgKey]))
    );
    addBase(
      toVariableName(prefix, "badge", variant, "text"),
      pickSemantic(tokens2, getPath(defaultMode, ["component", "badge", textKey]), getPath(componentAliases, ["badge", textKey]))
    );
  });
  ICON_BOX_FIELDS.forEach(({ name, tokenKey }) => {
    addBase(
      toVariableName(prefix, "icon-box", name),
      pickSemantic(tokens2, getPath(defaultMode, ["component", "iconBox", tokenKey]), getPath(componentAliases, ["iconBox", tokenKey]))
    );
  });
  const rootLines = [...baseLines, ...mapLines];
  const darkLines = [];
  const addDark = (name, value) => {
    if (value !== void 0) darkLines.push(`  ${name}: ${value};`);
  };
  addDark(
    toVariableName(prefix, "surface", "page"),
    pickSemantic(tokens2, getPath(darkMode, ["surface", "page"]), getPath(defaultMode, ["surface", "page"]), getPath(surfaceAliases, ["page"]))
  );
  addDark(
    toVariableName(prefix, "surface", "card"),
    pickSemantic(tokens2, getPath(darkMode, ["surface", "card"]), getPath(defaultMode, ["surface", "card"]), getPath(surfaceAliases, ["card"]))
  );
  addDark(
    toVariableName(prefix, "surface", "input"),
    pickSemantic(tokens2, getPath(darkMode, ["surface", "input"]), getPath(defaultMode, ["surface", "input"]), getPath(surfaceAliases, ["input"]))
  );
  addDark(
    toVariableName(prefix, "surface", "overlay"),
    pickSemantic(tokens2, getPath(darkMode, ["surface", "overlay"]), getPath(defaultMode, ["surface", "overlay"]), getPath(surfaceAliases, ["overlay"]))
  );
  addDark(
    toVariableName(prefix, "surface", "hero"),
    pickSemantic(tokens2, getPath(darkMode, ["surface", "hero"]), getPath(defaultMode, ["surface", "hero"]), getPath(surfaceAliases, ["hero"]))
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "default"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onPage", "default"]),
      getPath(defaultMode, ["text", "onPage", "default"]),
      getPath(textAliases, ["onPage", "default"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "muted"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onPage", "muted"]),
      getPath(defaultMode, ["text", "onPage", "muted"]),
      getPath(textAliases, ["onPage", "muted"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "subtle"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onPage", "subtle"]),
      getPath(defaultMode, ["text", "onPage", "subtle"]),
      getPath(textAliases, ["onPage", "subtle"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "page", "meta"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onPage", "meta"]),
      getPath(defaultMode, ["text", "onPage", "meta"]),
      getPath(textAliases, ["onPage", "meta"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "default"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onSurface", "default"]),
      getPath(defaultMode, ["text", "onSurface", "default"]),
      getPath(textAliases, ["onSurface", "default"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "muted"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onSurface", "muted"]),
      getPath(defaultMode, ["text", "onSurface", "muted"]),
      getPath(textAliases, ["onSurface", "muted"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "subtle"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onSurface", "subtle"]),
      getPath(defaultMode, ["text", "onSurface", "subtle"]),
      getPath(textAliases, ["onSurface", "subtle"])
    )
  );
  addDark(
    toVariableName(prefix, "text", "on", "surface", "meta"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["text", "onSurface", "meta"]),
      getPath(defaultMode, ["text", "onSurface", "meta"]),
      getPath(textAliases, ["onSurface", "meta"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "card", "text"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "card", "text"]),
      getPath(defaultMode, ["component", "card", "text"]),
      getPath(componentAliases, ["card", "text"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "card", "text-muted"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "card", "textMuted"]),
      getPath(defaultMode, ["component", "card", "textMuted"]),
      getPath(componentAliases, ["card", "textMuted"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "input", "text"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "input", "text"]),
      getPath(defaultMode, ["component", "input", "text"]),
      getPath(componentAliases, ["input", "text"])
    )
  );
  addDark(
    toVariableName(prefix, "component", "input", "placeholder"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "input", "placeholder"]),
      getPath(defaultMode, ["component", "input", "placeholder"]),
      getPath(componentAliases, ["input", "placeholder"])
    )
  );
  addDark(
    toVariableName(prefix, "button", "text", "default"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "button", "textDefault"]),
      getPath(defaultMode, ["component", "button", "textDefault"]),
      getPath(componentAliases, ["button", "textDefault"])
    )
  );
  addDark(
    toVariableName(prefix, "button", "text", "on", "primary"),
    pickSemantic(
      tokens2,
      getPath(darkMode, ["component", "button", "textOnPrimary"]),
      getPath(defaultMode, ["component", "button", "textOnPrimary"]),
      getPath(componentAliases, ["button", "textOnPrimary"])
    )
  );
  BADGE_VARIANTS.forEach(({ variant, bgKey, textKey }) => {
    addDark(
      toVariableName(prefix, "badge", variant, "bg"),
      pickSemantic(
        tokens2,
        getPath(darkMode, ["component", "badge", bgKey]),
        getPath(defaultMode, ["component", "badge", bgKey]),
        getPath(componentAliases, ["badge", bgKey])
      )
    );
    addDark(
      toVariableName(prefix, "badge", variant, "text"),
      pickSemantic(
        tokens2,
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
        tokens2,
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