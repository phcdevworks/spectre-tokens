export type ColorScale = Record<string, string>;

export type TokenScale = Record<string, string>;

export interface TypographyScaleEntry {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  letterSpacing?: string;
}

export interface TypographyTokens {
  families: Record<string, string>;
  scale: Record<string, TypographyScaleEntry>;
}

export interface Tokens {
  colors: Record<string, ColorScale>;
  spacing: TokenScale;
  radii: TokenScale;
  typography: TypographyTokens;
  shadows: TokenScale;
}

export type CssVariableMap = Record<string, string>;

export interface CssVariableOptions {
  selector?: string;
  prefix?: string;
}

export interface TailwindTheme {
  colors: Record<string, string | Record<string, string>>;
  spacing: TokenScale;
  borderRadius: TokenScale;
  fontFamily: Record<string, string[]>;
  fontSize: Record<string, [string, { lineHeight: string; fontWeight?: number; letterSpacing?: string }]>;
  boxShadow: TokenScale;
}
