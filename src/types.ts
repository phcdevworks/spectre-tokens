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

export interface TransitionTokens {
  duration: TokenScale;
  easing: TokenScale;
}

export interface AnimationEntry {
  duration: string;
  easing: string;
  keyframes: string;
}

export interface AccessibilityTokens {
  focusRing: {
    width: string;
    offset: string;
    style: string;
  };
  minTouchTarget: string;
  minTextSize: string;
}

export interface ButtonStateTokens {
  bg: string;
  bgHover: string;
  bgActive: string;
  bgDisabled: string;
  text: string;
  textDisabled: string;
  border?: string;
  borderDisabled?: string;
}

export interface FormStateTokens {
  bg?: string;
  border: string;
  text?: string;
  placeholder?: string;
  ring?: string;
}

export type SpectreModeName = 'default' | 'dark';

export type SemanticTokenValue = string | { value: string; [key: string]: any };

export interface SpectreModeTokens {
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
      primary: { bg: SemanticTokenValue; text: SemanticTokenValue };
      success: { bg: SemanticTokenValue; text: SemanticTokenValue };
      warning: { bg: SemanticTokenValue; text: SemanticTokenValue };
      danger: { bg: SemanticTokenValue; text: SemanticTokenValue };
    };
  };
}

export interface SpectreTokens {
  colors: any;
  spacing: any;
  radii: any;
  typography: any;
  font: {
    xs: { size: string; lineHeight: string; weight: number };
    sm: { size: string; lineHeight: string; weight: number };
    md: { size: string; lineHeight: string; weight: number };
    lg: { size: string; lineHeight: string; weight: number };
    xl: { size: string; lineHeight: string; weight: number };
    ['2xl']: { size: string; lineHeight: string; weight: number };
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
      primary: { bg: string; text: string };
      success: { bg: string; text: string };
      warning: { bg: string; text: string };
      danger: { bg: string; text: string };
    };
    [key: string]: any;
  };
  modes: {
    default: Partial<SpectreModeTokens>;
    dark: Partial<SpectreModeTokens>;
    [mode: string]: Partial<SpectreModeTokens>;
  };
}

export interface Tokens {
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
  screens: TokenScale;
  zIndex: TokenScale;
  transitionDuration: TokenScale;
  transitionTimingFunction: TokenScale;
  opacity: TokenScale;
}
