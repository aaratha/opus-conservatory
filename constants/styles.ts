import { StyleSheet } from 'react-native';

import Colors from './Colors';
import { fontSize, radii, spacing } from './theme';

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

    section: {
      gap: spacing.md,
    },
    sectionTitle: {
      fontSize: fontSize.lg,
      fontWeight: '600',
      color: c.text,
    },

    card: {
      backgroundColor: c.surface,
      borderRadius: radii.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.sm,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
      fontWeight: '500',
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
      borderRadius: radii.lg,
      paddingVertical: spacing.md,
      backgroundColor: c.tint,
    },
    buttonText: {
      fontSize: fontSize.sm,
      fontWeight: '600',
      color: c.tintText,
    },
    buttonDisabled: {
      backgroundColor: c.border,
    },
    buttonTextDisabled: {
      color: c.muted,
    },
    buttonGhost: {
      alignItems: 'center',
      borderRadius: radii.lg,
      paddingVertical: spacing.md,
      backgroundColor: c.surface,
    },
    buttonGhostText: {
      fontSize: fontSize.sm,
      fontWeight: '600',
      color: c.tint,
    },

    link: {
      fontSize: fontSize.sm,
      color: c.tint,
    },

    pill: {
      borderRadius: radii.pill,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      backgroundColor: c.surface,
    },
    pillActive: {
      backgroundColor: c.tint,
    },
    pillText: {
      fontSize: fontSize.sm,
      color: c.text,
    },
    pillTextActive: {
      color: c.tintText,
    },

    segment: {
      flexDirection: 'row',
      backgroundColor: c.surface,
      borderRadius: radii.lg,
      padding: spacing.xs,
    },
    segmentOption: {
      flex: 1,
      alignItems: 'center',
      borderRadius: radii.md,
      paddingVertical: spacing.sm,
    },
    segmentOptionActive: {
      backgroundColor: c.background,
    },
    segmentText: {
      fontSize: fontSize.sm,
      fontWeight: '500',
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
    },

    divider: {
      height: 1,
      backgroundColor: c.border,
    },
  });
}

export type AppStyles = ReturnType<typeof createStyles>;
