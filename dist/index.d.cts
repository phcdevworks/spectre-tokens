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
interface ComponentBadgeTokens<Value = string> {
    neutralBg: Value;
    neutralText: Value;
    infoBg: Value;
    infoText: Value;
    successBg: Value;
    successText: Value;
    warningBg: Value;
    warningText: Value;
    dangerBg: Value;
    dangerText: Value;
}
interface ComponentIconBoxTokens<Value = string> {
    bg: Value;
    border: Value;
    iconDefault: Value;
    iconSuccess: Value;
    iconWarning: Value;
    iconDanger: Value;
}
interface ComponentTokens<Value = string> {
    card: {
        text: Value;
        textMuted: Value;
    };
    input: {
        text: Value;
        placeholder: Value;
    };
    button: {
        textDefault: Value;
        textOnPrimary: Value;
    };
    badge: ComponentBadgeTokens<Value>;
    iconBox: ComponentIconBoxTokens<Value>;
    [key: string]: any;
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
    component: ComponentTokens<SemanticTokenValue>;
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
    component: ComponentTokens<SemanticTokenValue>;
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
    component: ComponentTokens;
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

export { type AccessibilityTokens, type AnimationEntry, type ButtonStateTokens, type ColorScale, type ComponentBadgeTokens, type ComponentIconBoxTokens, type ComponentTokens, type FormStateTokens, type SpectreModeName, type SpectreModeTokens, type SpectreTokens, type TailwindTheme, type TokenScale, type Tokens, type TransitionTokens, type TypographyTokens, tokens as default, generateCssVariables, tailwindPreset, tailwindTheme, tokens };
