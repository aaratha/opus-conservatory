// Tweak these tokens to restyle the whole app at once.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
};

export const radii = {
  sm: 10,
  md: 14,
  lg: 20,
  pill: 999,
};

export const fontSize = {
  sm: 13,
  base: 15,
  lg: 18,
  xl: 22,
  hero: 28,
  display: 48,
};

// Warm, varied avatar colors for instructors and leaderboard entries —
// picked by a simple hash of the person's name so it stays stable.
export const avatarPalette = ['#E0663A', '#2F8F80', '#D9A441', '#7C6FA6', '#4F8FC0'];

export function colorForName(name: string) {
  const hash = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return avatarPalette[hash % avatarPalette.length];
}
