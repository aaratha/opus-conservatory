// Tweak these tokens to restyle the whole app at once.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
};

// Radii are intentionally uneven: tags/avatars/progress bars stay fully
// round (pill), while structural surfaces (cards, buttons, inputs) are
// nearly square. Hierarchy comes from hairline rules, not corner rounding.
export const radii = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  pill: 999,
};

export const hairline = 1;

export const fontSize = {
  sm: 13,
  base: 15,
  lg: 18,
  xl: 22,
  hero: 28,
  display: 48,
};

// Serif display family for headers and hero/display numbers (loaded via
// @expo-google-fonts/fraunces in app/_layout.tsx). Body/data text uses the
// system sans by omitting fontFamily, so leave `sans` undefined.
export const fontFamily = {
  serif: 'Fraunces_600SemiBold',
  serifBold: 'Fraunces_700Bold',
  serifItalic: 'Fraunces_500Medium_Italic',
  sans: undefined,
};

// Muted, period-appropriate hues for instructors and leaderboard entries —
// picked by a simple hash of the person's name so it stays stable.
export const avatarPalette = ['#8B3A3A', '#3F6B4F', '#A6782E', '#4A5B6B', '#7A5230'];

export function colorForName(name: string) {
  const hash = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return avatarPalette[hash % avatarPalette.length];
}
