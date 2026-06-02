import tokens, { type SpectreModeName, type SpectreTokens } from '@phcdevworks/spectre-tokens'

export const buttonStyles = {
  primary: {
    backgroundColor: tokens.buttons.primary.bg,
    color: tokens.buttons.primary.text,
    borderRadius: tokens.radii.md,
    paddingBlock: tokens.space['8'],
    paddingInline: tokens.space['16'],
  } satisfies Record<string, string>,

  secondary: {
    backgroundColor: tokens.buttons.secondary.bg,
    color: tokens.buttons.secondary.text,
    borderColor: tokens.buttons.secondary.border,
    borderRadius: tokens.radii.md,
    paddingBlock: tokens.space['8'],
    paddingInline: tokens.space['16'],
  } satisfies Record<string, string>,

  ghost: {
    backgroundColor: tokens.buttons.ghost.bg,
    color: tokens.buttons.ghost.text,
    borderRadius: tokens.radii.md,
    paddingBlock: tokens.space['8'],
    paddingInline: tokens.space['16'],
  } satisfies Record<string, string>,
}

export const inputStyles = {
  default: {
    backgroundColor: tokens.surface.input,
    color: tokens.component.input.text,
    borderColor: tokens.forms.default.border,
    borderRadius: tokens.radii.md,
    paddingBlock: tokens.space['8'],
    paddingInline: tokens.space['12'],
  } satisfies Record<string, string>,

  invalid: {
    borderColor: tokens.forms.invalid.border,
  } satisfies Record<string, string>,

  disabled: {
    borderColor: tokens.forms.disabled.border,
  } satisfies Record<string, string>,
}

export const cardStyles = {
  base: {
    backgroundColor: tokens.surface.card,
    color: tokens.component.card.text,
    borderRadius: tokens.radii.lg,
    padding: tokens.space['24'],
    boxShadow: tokens.shadows.md,
  } satisfies Record<string, string>,

  muted: {
    color: tokens.component.card.textMuted,
  } satisfies Record<string, string>,
}

export const themedCardStyles = (mode: SpectreModeName) => {
  const m = tokens.modes[mode]
  return {
    backgroundColor: m.surface.card,
    color: m.component.card.text,
    textMuted: m.component.card.textMuted,
  }
}

export const pageLayoutStyles = {
  page: {
    backgroundColor: tokens.surface.page,
    color: tokens.text.onPage.default,
    minHeight: '100vh',
  } satisfies Record<string, string>,

  section: {
    paddingBlock: tokens.space['48'],
    paddingInline: tokens.space['24'],
  } satisfies Record<string, string>,
}

export const navStyles = {
  container: {
    backgroundColor: tokens.surface.page,
    color: tokens.text.onPage.default,
    minHeight: tokens.accessibility.minTouchTarget,
  } satisfies Record<string, string>,

  link: {
    color: tokens.text.onPage.default,
    minHeight: tokens.accessibility.minTouchTarget,
  } satisfies Record<string, string>,

  linkActive: {
    color: tokens.text.onPage.brand,
  } satisfies Record<string, string>,
}

export const alertStyles = {
  success: {
    backgroundColor: tokens.component.badge.successBg,
    color: tokens.component.badge.successText,
    borderRadius: tokens.radii.md,
    padding: tokens.space['16'],
  } satisfies Record<string, string>,

  warning: {
    backgroundColor: tokens.component.badge.warningBg,
    color: tokens.component.badge.warningText,
    borderRadius: tokens.radii.md,
    padding: tokens.space['16'],
  } satisfies Record<string, string>,

  danger: {
    backgroundColor: tokens.component.badge.dangerBg,
    color: tokens.component.badge.dangerText,
    borderRadius: tokens.radii.md,
    padding: tokens.space['16'],
  } satisfies Record<string, string>,
}

export const badgeStyles = {
  neutral: {
    backgroundColor: tokens.component.badge.neutralBg,
    color: tokens.component.badge.neutralText,
    borderRadius: tokens.radii.sm,
    paddingBlock: tokens.space['4'],
    paddingInline: tokens.space['8'],
  } satisfies Record<string, string>,

  success: {
    backgroundColor: tokens.component.badge.successBg,
    color: tokens.component.badge.successText,
    borderRadius: tokens.radii.sm,
    paddingBlock: tokens.space['4'],
    paddingInline: tokens.space['8'],
  } satisfies Record<string, string>,

  warning: {
    backgroundColor: tokens.component.badge.warningBg,
    color: tokens.component.badge.warningText,
    borderRadius: tokens.radii.sm,
    paddingBlock: tokens.space['4'],
    paddingInline: tokens.space['8'],
  } satisfies Record<string, string>,

  danger: {
    backgroundColor: tokens.component.badge.dangerBg,
    color: tokens.component.badge.dangerText,
    borderRadius: tokens.radii.sm,
    paddingBlock: tokens.space['4'],
    paddingInline: tokens.space['8'],
  } satisfies Record<string, string>,
}

export const typedRef: SpectreTokens = tokens
