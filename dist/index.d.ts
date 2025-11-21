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
interface Tokens {
    colors: Record<string, ColorScale>;
    spacing: TokenScale;
    radii: TokenScale;
    typography: TypographyTokens;
    shadows: TokenScale;
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
}

declare const createCssVariableMap: (tokens: Tokens, options?: CssVariableOptions) => CssVariableMap;
declare const generateCssVariables: (tokens: Tokens, options?: CssVariableOptions) => string;

declare const tokens: Tokens;
declare const createTailwindTheme: (source?: Tokens) => TailwindTheme;
declare const tailwindTheme: TailwindTheme;
declare const tailwindPreset: {
    theme: TailwindTheme;
};

export { type ColorScale, type TailwindTheme, type TokenScale, type Tokens, type TypographyTokens, createCssVariableMap, createTailwindTheme, tokens as default, generateCssVariables, tailwindPreset, tailwindTheme, tokens };
