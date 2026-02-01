export type ColorScale = Record<string, string>;

export type TokenScale = Record<string, string>;

export interface TypographyScaleEntry {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  letterSpacing?: string;
}

export interface FontScaleEntry {
  size: string;
  lineHeight: string;
  weight: number;
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
  shadow?: string;
}

export interface FormStateTokens {
  bg?: string;
  border: string;
  text?: string;
  placeholder?: string;
  ring?: string;
}

export interface ComponentBadgeTokens<Value = string> {
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

export interface ComponentIconBoxTokens<Value = string> {
  bg: Value;
  border: Value;
  iconDefault: Value;
  iconSuccess: Value;
  iconWarning: Value;
  iconDanger: Value;
}

export interface ComponentTestimonialTokens<Value = string> {
  bg: Value;
  border: Value;
  text: Value;
  authorName: Value;
  authorTitle: Value;
  quoteMark: Value;
}

export interface ComponentPricingCardTokens<Value = string> {
  bg: Value;
  border: Value;
  featuredBg: Value;
  featuredText: Value;
  featuredBadgeBg: Value;
  featuredBadgeText: Value;
  price: Value;
  priceDescription: Value;
}

export interface ComponentRatingTokens<Value = string> {
  starFilled: Value;
  starEmpty: Value;
  text: Value;
}

export interface ComponentTokens<Value = string> {
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
  testimonial: ComponentTestimonialTokens<Value>;
  pricingCard: ComponentPricingCardTokens<Value>;
  rating: ComponentRatingTokens<Value>;
  [key: string]: any;
}

export type SpectreModeName = 'default' | 'dark';

export type SemanticTokenValue = string | { value: string;[key: string]: any };

export interface SpectreModeTokens {
  surface: {
    page: SemanticTokenValue;
    card: SemanticTokenValue;
    input: SemanticTokenValue;
    overlay: SemanticTokenValue;
    alternate: SemanticTokenValue;
    hero: SemanticTokenValue;
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

export interface SpectreTokens {
  colors: any;
  space: TokenScale;
  layout: LayoutTokens;
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

export interface LayoutTokens {
  section: {
    padding: TokenScale;
    gap: TokenScale;
  };
  stack: {
    gap: TokenScale;
  };
  container: {
    paddingInline: TokenScale;
  };
}

export interface Tokens {
  colors: Record<string, ColorScale>;
  opacity: TokenScale;
  accessibility: AccessibilityTokens;
  buttons: Record<string, ButtonStateTokens>;
  forms: Record<string, FormStateTokens>;
  component: ComponentTokens;
  space: TokenScale;
  layout: LayoutTokens;
  radii: TokenScale;
  typography: TypographyTokens;
  font: Record<string, FontScaleEntry>;
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
