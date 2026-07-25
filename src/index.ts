import { coreTokens } from './generated/tokens';

import { generateCssVariables } from './css';
import type { SpectreTokens } from './types';

export type {
  AccessibilityTokens,
  AnimationEntry,
  ButtonStateTokens,
  ColorScale,
  ComponentBadgeTokens,
  ComponentIconBoxTokens,
  ComponentPricingCardTokens,
  ComponentRatingTokens,
  ComponentTestimonialTokens,
  ComponentTokens,
  FormStateTokens,
  LayoutTokens,
  SpectreModeName,
  SpectreModeTokens,
  SpectreTokens,
  TokenScale,
  Tokens,
  TransitionTokens,
  TypographyTokens
} from './types';

const tokens: SpectreTokens = coreTokens;

export { generateCssVariables, tokens };
export default tokens;
