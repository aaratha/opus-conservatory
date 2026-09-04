// Family-friendly palette — warm sand neutrals with a light, friendly sky
// blue kept as the primary accent, and a touch of coral as a secondary one.
const tintColorLight = '#3B82F6';
const tintColorDark = '#7AAEFF';

export default {
  light: {
    text: '#2B2118',
    background: '#FDFBF7',
    surface: '#F6F0E6',
    surfaceAlt: '#EFE6D6',
    border: '#E6DCC8',
    muted: '#8A7B68',
    tint: tintColorLight,
    tintText: '#FFFFFF',
    secondary: '#E0663A',
    danger: '#C1443A',
    tabIconDefault: '#B8AC97',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#F5EFE6',
    background: '#1C1712',
    surface: '#2A2219',
    surfaceAlt: '#352B1F',
    border: '#3D3226',
    muted: '#B3A38C',
    tint: tintColorDark,
    tintText: '#12203D',
    secondary: '#F0875A',
    danger: '#F0877E',
    tabIconDefault: '#6B5F4D',
    tabIconSelected: tintColorDark,
  },
};
