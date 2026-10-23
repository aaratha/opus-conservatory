import { StyleSheet } from 'react-native';

import Colors from './Colors';
import { fontFamily, fontSize, hairline, radii, spacing } from './theme';

type ColorScheme = keyof typeof Colors;

// Shared, concise style building blocks. Tweak spacing/radii/fontSize in
// theme.ts or the palette in Colors.ts to restyle every screen at once.
export function createStyles(scheme: ColorScheme) {
  const c = Colors[scheme];

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: c.background,
    },
    content: {
      padding: spacing.xl,
      gap: spacing.xxl,
    },
    list: {
      padding: spacing.xl,
      gap: spacing.sm,
    },

    hero: {
      gap: spacing.xs,
    },
    heroTitle: {
      fontFamily: fontFamily.serifBold,
      fontSize: fontSize.hero,
      color: c.text,
    },
    heroSubtitle: {
      fontSize: fontSize.base,
      color: c.muted,
    },

    // Big serif numerals — stopwatch display, prices, lesson counts.
    displayNumber: {
      fontFamily: fontFamily.serifBold,
      fontSize: fontSize.display,
      color: c.text,
    },

    section: {
      gap: spacing.md,
    },
    sectionTitle: {
      fontFamily: fontFamily.serif,
      fontSize: fontSize.lg,
      color: c.text,
    },
    eyebrow: {
      fontSize: fontSize.sm,
      fontWeight: '700',
      color: c.secondary,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
    },

    // Definition via hairline rule, not elevation — no shadow, small radius.
    card: {
      backgroundColor: c.surface,
      borderWidth: hairline,
      borderColor: c.border,
      borderRadius: radii.sm,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.sm,
    },
    cardHighlight: {
      backgroundColor: c.accentSoft,
      borderWidth: hairline * 2,
      borderColor: c.tint,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowStart: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
    },
    wrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },

    text: {
      fontSize: fontSize.base,
      color: c.text,
    },
    textMedium: {
      fontSize: fontSize.base,
      fontWeight: '600',
      color: c.text,
    },
    textMuted: {
      fontSize: fontSize.base,
      color: c.muted,
    },
    textSmall: {
      fontSize: fontSize.sm,
      color: c.text,
    },
    textSmallMuted: {
      fontSize: fontSize.sm,
      color: c.muted,
    },
    textDanger: {
      fontSize: fontSize.sm,
      color: c.danger,
    },

    button: {
      alignItems: 'center',
      borderRadius: radii.md,
      paddingVertical: spacing.md,
      backgroundColor: c.tint,
    },
    buttonText: {
      fontSize: fontSize.sm,
      fontWeight: '700',
      color: c.tintText,
    },
    buttonDisabled: {
      backgroundColor: c.border,
    },
    buttonTextDisabled: {
      color: c.muted,
    },
    // Hairline-bordered, not filled — a second button reads as "line", not elevation.
    buttonGhost: {
      alignItems: 'center',
      borderRadius: radii.md,
      borderWidth: hairline,
      borderColor: c.tint,
      paddingVertical: spacing.md,
      backgroundColor: 'transparent',
    },
    buttonGhostText: {
      fontSize: fontSize.sm,
      fontWeight: '700',
      color: c.tint,
    },

    link: {
      fontSize: fontSize.sm,
      fontWeight: '600',
      color: c.tint,
    },

    pill: {
      borderRadius: radii.pill,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      backgroundColor: c.surfaceAlt,
    },
    pillActive: {
      backgroundColor: c.tint,
    },
    pillText: {
      fontSize: fontSize.sm,
      fontWeight: '500',
      color: c.text,
    },
    pillTextActive: {
      color: c.tintText,
      fontWeight: '700',
    },

    badge: {
      alignSelf: 'flex-start',
      borderRadius: radii.pill,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      backgroundColor: c.surfaceAlt,
    },
    badgeText: {
      fontSize: fontSize.sm,
      fontWeight: '600',
      color: c.muted,
    },

    segment: {
      flexDirection: 'row',
      backgroundColor: c.surfaceAlt,
      borderRadius: radii.lg,
      padding: spacing.xs,
    },
    segmentOption: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.xs,
      borderRadius: radii.md,
      paddingVertical: spacing.sm,
    },
    segmentOptionActive: {
      backgroundColor: c.surface,
    },
    segmentText: {
      fontSize: fontSize.sm,
      fontWeight: '600',
      color: c.muted,
    },
    segmentTextActive: {
      color: c.text,
    },

    input: {
      borderRadius: radii.md,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      backgroundColor: c.background,
      color: c.text,
      borderWidth: 1,
      borderColor: c.border,
    },

    progressTrack: {
      height: 8,
      borderRadius: radii.pill,
      backgroundColor: c.surfaceAlt,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: radii.pill,
      backgroundColor: c.tint,
    },

    avatar: {
      width: 44,
      height: 44,
      borderRadius: radii.pill,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: fontSize.base,
      fontWeight: '700',
      color: '#FFFFFF',
    },

    divider: {
      height: 1,
      backgroundColor: c.border,
    },
  });
}

export type AppStyles = ReturnType<typeof createStyles>;
