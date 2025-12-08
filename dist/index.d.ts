type ColorScale = Record<string, string>;
type TokenScale = Record<string, string>;
interface TypographyScaleEntry {
    fontSize: string;
    lineHeight: string;
    fontWeight?: number;
    letterSpacing?: string;
}
interface FontScaleEntry {
    size: string;
    lineHeight: string;
    weight: number;
}
interface TypographyTokens {
    families: Record<string, string>;
    scale: Record<string, TypographyScaleEntry>;
}
interface TransitionTokens {
    duration: TokenScale;
    easing: TokenScale;
}
interface AnimationEntry {
    duration: string;
    easing: string;
    keyframes: string;
}
interface AccessibilityTokens {
    focusRing: {
        width: string;
        offset: string;
        style: string;
    };
    minTouchTarget: string;
    minTextSize: string;
}
interface ButtonStateTokens {
    bg: string;
    bgHover: string;
    bgActive: string;
    bgDisabled: string;
    text: string;
    textDisabled: string;
    border?: string;
    borderDisabled?: string;
}
interface FormStateTokens {
    bg?: string;
    border: string;
    text?: string;
    placeholder?: string;
    ring?: string;
}
type SpectreModeName = 'default' | 'dark';
type SemanticTokenValue = string | {
    value: string;
    [key: string]: any;
};
interface SpectreModeTokens {
    surface: {
        page: SemanticTokenValue;
        card: SemanticTokenValue;
        input: SemanticTokenValue;
        overlay: SemanticTokenValue;
    };
    text: {
        onPage: {
            default: SemanticTokenValue;
            muted: SemanticTokenValue;
            subtle: SemanticTokenValue;
            meta: SemanticTokenValue;
        };
        onSurface: {
            default: SemanticTokenValue;
            muted: SemanticTokenValue;
            subtle: SemanticTokenValue;
            meta: SemanticTokenValue;
        };
    };
    component: {
        card: {
            text: SemanticTokenValue;
            textMuted: SemanticTokenValue;
        };
        input: {
            text: SemanticTokenValue;
            placeholder: SemanticTokenValue;
        };
        button: {
            textDefault: SemanticTokenValue;
            textOnPrimary: SemanticTokenValue;
        };
        badge: {
            primary: {
                bg: SemanticTokenValue;
                text: SemanticTokenValue;
            };
            success: {
                bg: SemanticTokenValue;
                text: SemanticTokenValue;
            };
            warning: {
                bg: SemanticTokenValue;
                text: SemanticTokenValue;
            };
            danger: {
                bg: SemanticTokenValue;
                text: SemanticTokenValue;
            };
        };
    };
}
interface SpectreTokens {
    colors: any;
    spacing: any;
    radii: any;
    typography: any;
    font: {
        xs: FontScaleEntry;
        sm: FontScaleEntry;
        md: FontScaleEntry;
        lg: FontScaleEntry;
        xl: FontScaleEntry;
        ['2xl']: FontScaleEntry;
    };
    shadows: any;
    breakpoints: any;
    zIndex: any;
    transitions: any;
    buttons?: any;
    forms?: any;
    accessibility?: any;
    opacity?: any;
    animations?: any;
    borders?: any;
    surface: {
        page: SemanticTokenValue;
        card: SemanticTokenValue;
        input: SemanticTokenValue;
        overlay: SemanticTokenValue;
        [key: string]: SemanticTokenValue;
    };
    text: {
        onPage: {
            default: string;
            muted: string;
            subtle: string;
            meta: string;
        };
        onSurface: {
            default: string;
            muted: string;
            subtle: string;
            meta: string;
        };
        [key: string]: any;
    };
    component: {
        card: {
            text: SemanticTokenValue;
            textMuted: SemanticTokenValue;
        };
        input: {
            text: SemanticTokenValue;
            placeholder: SemanticTokenValue;
        };
        button: {
            textDefault: SemanticTokenValue;
            textOnPrimary: SemanticTokenValue;
        };
        badge: {
            primary: {
                bg: string;
                text: string;
            };
            success: {
                bg: string;
                text: string;
            };
            warning: {
                bg: string;
                text: string;
            };
            danger: {
                bg: string;
                text: string;
            };
        };
        [key: string]: any;
    };
    modes: {
        default: Partial<SpectreModeTokens>;
        dark: Partial<SpectreModeTokens>;
        [mode: string]: Partial<SpectreModeTokens>;
    };
}
interface Tokens {
    colors: Record<string, ColorScale>;
    opacity: TokenScale;
    accessibility: AccessibilityTokens;
    buttons: Record<string, ButtonStateTokens>;
    forms: Record<string, FormStateTokens>;
    spacing: TokenScale;
    radii: TokenScale;
    typography: TypographyTokens;
    font: Record<string, FontScaleEntry>;
    shadows: TokenScale;
    breakpoints: TokenScale;
    zIndex: TokenScale;
    transitions: TransitionTokens;
    animations: Record<string, AnimationEntry>;
}
interface CssVariableOptions {
    selector?: string;
    prefix?: string;
}
interface TailwindTheme {
    colors: Record<string, string | Record<string, string>>;
    spacing: TokenScale;
    borderRadius: TokenScale;
    fontFamily: Record<string, string[]>;
    fontSize: Record<string, [string, {
        lineHeight: string;
        fontWeight?: number;
        letterSpacing?: string;
    }]>;
    boxShadow: TokenScale;
    screens: TokenScale;
    zIndex: TokenScale;
    transitionDuration: TokenScale;
    transitionTimingFunction: TokenScale;
    opacity: TokenScale;
}

declare const generateCssVariables: (tokens: SpectreTokens, options?: CssVariableOptions) => string;

declare const tokens: SpectreTokens;
declare const tailwindTheme: TailwindTheme;
declare const tailwindPreset: {
    theme: TailwindTheme;
};

export { type AccessibilityTokens, type AnimationEntry, type ButtonStateTokens, type ColorScale, type FormStateTokens, type SpectreModeName, type SpectreModeTokens, type SpectreTokens, type TailwindTheme, type TokenScale, type Tokens, type TransitionTokens, type TypographyTokens, tokens as default, generateCssVariables, tailwindPreset, tailwindTheme, tokens };
