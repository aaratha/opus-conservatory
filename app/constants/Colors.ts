// "Manuscript" palette — warm paper neutrals, near-black ink, and a single
// confident accent (deep burgundy) standing in for the old blue tint. Brass
// gold is kept only as a secondary/eyebrow color, never a second accent.
const tintColorLight = '#7A2331';
const tintColorDark = '#D97C8C';

export default {
  light: {
    text: '#241C14',
    background: '#F7F0E3',
    surface: '#EFE6D3',
    surfaceAlt: '#E7DCC3',
    border: '#D8CBAA',
    muted: '#7A6C54',
    tint: tintColorLight,
    tintText: '#FDF6EC',
    accentSoft: '#F1DEE1',
    secondary: '#8C6425',
    danger: '#B23B20',
    tabIconDefault: '#B0A183',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#F2E8D8',
    background: '#191410',
    surface: '#241C15',
    surfaceAlt: '#2E2419',
    border: '#3C3123',
    muted: '#B3A38C',
    tint: tintColorDark,
    tintText: '#241019',
    accentSoft: '#3A2026',
    secondary: '#D9A441',
    danger: '#E2794A',
    tabIconDefault: '#6B5F4D',
    tabIconSelected: tintColorDark,
  },
};
