import type { SpectreGeneratedTokens } from './generated/tokens';

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
  focusRing?: string;
  focusVisible?: string;
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
  neutralBgHover?: Value;
  neutralText: Value;
  infoBg: Value;
  infoBgHover?: Value;
  infoText: Value;
  successBg: Value;
  successBgHover?: Value;
  successText: Value;
  warningBg: Value;
  warningBgHover?: Value;
  warningText: Value;
  dangerBg: Value;
  dangerBgHover?: Value;
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
  bgHover?: Value;
  border: Value;
  text: Value;
  authorName: Value;
  authorTitle: Value;
  quoteMark: Value;
}

export interface ComponentPricingCardTokens<Value = string> {
  bg: Value;
  bgHover?: Value;
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

export interface ComponentNavTokens<Value = string> {
  bg: Value;
  text: Value;
  link: Value;
  linkHover: Value;
  linkActive: Value;
  border: Value;
}

export interface ComponentModalTokens<Value = string> {
  bg: Value;
  shadow: Value;
  border: Value;
  overlay: Value;
}

export interface ComponentToastVariantTokens<Value = string> {
  bg: Value;
  text: Value;
  border: Value;
  icon: Value;
}

export interface ComponentToastTokens<Value = string> {
  success: ComponentToastVariantTokens<Value>;
  warning: ComponentToastVariantTokens<Value>;
  danger: ComponentToastVariantTokens<Value>;
  info: ComponentToastVariantTokens<Value>;
}

export interface ComponentTooltipTokens<Value = string> {
  bg: Value;
  text: Value;
  border: Value;
}

export interface ComponentDropdownTokens<Value = string> {
  bg: Value;
  border: Value;
  item: {
    default: Value;
    hover: Value;
    active: Value;
    text: Value;
  };
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
  nav: ComponentNavTokens<Value>;
  modal: ComponentModalTokens<Value>;
  toast: ComponentToastTokens<Value>;
  tooltip: ComponentTooltipTokens<Value>;
  dropdown: ComponentDropdownTokens<Value>;
  [key: string]: unknown;
}

export type SpectreModeName = 'default' | 'dark';

export type SemanticTokenValue = string;

export interface SpectreModeTokens {
  surface: {
    page: SemanticTokenValue;
    card: SemanticTokenValue;
    input: SemanticTokenValue;
    overlay: SemanticTokenValue;
    alternate: SemanticTokenValue;
    hero: SemanticTokenValue;
    hover: SemanticTokenValue;
    selected: SemanticTokenValue;
    active: SemanticTokenValue;
    divider: SemanticTokenValue;
  };
  text: {
    onPage: {
      default: SemanticTokenValue;
      muted: SemanticTokenValue;
      subtle: SemanticTokenValue;
      meta: SemanticTokenValue;
      brand: SemanticTokenValue;
    };
    onSurface: {
      default: SemanticTokenValue;
      muted: SemanticTokenValue;
      subtle: SemanticTokenValue;
      meta: SemanticTokenValue;
      brand: SemanticTokenValue;
    };
  };
  component: ComponentTokens<SemanticTokenValue>;
}

export type SpectreTokens = SpectreGeneratedTokens;

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
    maxWidth: string;
  };
}

export type Tokens = SpectreGeneratedTokens;

export type CssVariableMap = Record<string, string>;

export interface CssVariableOptions {
  selector?: string;
  prefix?: string;
}

export interface TailwindTheme {
  colors: SpectreGeneratedTokens['colors'] | Record<string, string | Record<string, string>>;
  spacing: SpectreGeneratedTokens['space'];
  borderRadius: SpectreGeneratedTokens['radii'];
  fontFamily: Record<string, string[]>;
  fontSize: Record<string, [string, { lineHeight: string; fontWeight?: number; letterSpacing?: string }]>;
  boxShadow: SpectreGeneratedTokens['shadows'];
  screens: SpectreGeneratedTokens['breakpoints'];
  zIndex: SpectreGeneratedTokens['zIndex'];
  transitionDuration: SpectreGeneratedTokens['transitions']['duration'];
  transitionTimingFunction: SpectreGeneratedTokens['transitions']['easing'];
  opacity: SpectreGeneratedTokens['opacity'];
  maxWidth: Record<string, string | undefined>;
  borderWidth: Record<string, string | undefined>;
}
