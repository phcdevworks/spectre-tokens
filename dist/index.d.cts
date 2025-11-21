type ColorScale = Record<string, string>;
type TokenScale = Record<string, string>;
interface TypographyScaleEntry {
    fontSize: string;
    lineHeight: string;
    fontWeight?: number;
    letterSpacing?: string;
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
interface Tokens {
    colors: Record<string, ColorScale>;
    opacity: TokenScale;
    accessibility: AccessibilityTokens;
    buttons: Record<string, ButtonStateTokens>;
    forms: Record<string, FormStateTokens>;
    spacing: TokenScale;
    radii: TokenScale;
    typography: TypographyTokens;
    shadows: TokenScale;
    breakpoints: TokenScale;
    zIndex: TokenScale;
    transitions: TransitionTokens;
    animations: Record<string, AnimationEntry>;
}
type CssVariableMap = Record<string, string>;
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

declare const createCssVariableMap: (tokens: Tokens, options?: CssVariableOptions) => CssVariableMap;
declare const generateCssVariables: (tokens: Tokens, options?: CssVariableOptions) => string;

declare const tokens: Tokens;
declare const createTailwindTheme: (source?: Tokens) => TailwindTheme;
declare const tailwindTheme: TailwindTheme;
declare const tailwindPreset: {
    theme: TailwindTheme;
};

export { type AccessibilityTokens, type AnimationEntry, type ButtonStateTokens, type ColorScale, type FormStateTokens, type TailwindTheme, type TokenScale, type Tokens, type TransitionTokens, type TypographyTokens, createCssVariableMap, createTailwindTheme, tokens as default, generateCssVariables, tailwindPreset, tailwindTheme, tokens };
