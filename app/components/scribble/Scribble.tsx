// Hand-drawn "scribble" accents — used sparingly for selection, confirmation,
// and milestone moments (never on Practice Log or the Leaderboard, which stay
// plain per the design system). Paths are fixed, not randomized, so the same
// mark renders identically every time; `preserveAspectRatio="none"` lets the
// circle/underline stretch to fit whatever it's wrapping.
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type ScribbleProps = {
  color?: string;
  strokeWidth?: number;
};

// Wraps any content in a loose, slightly-open hand-drawn oval — e.g. to mark
// a selected calendar slot or a highlighted teacher.
export function ScribbleCircle({
  color = '#7A2331',
  strokeWidth = 2.5,
  inset = 10,
  children,
}: PropsWithChildren<ScribbleProps & { inset?: number }>) {
  return (
    <View style={styles.circleWrap}>
      {children}
      <View style={[styles.circleOverlay, { margin: -inset }]} pointerEvents="none">
        <Svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
          <Path
            d="M10,26 C9,13 28,3 50,2 C74,1 93,9 92,25 C91,41 71,48 49,48 C28,48 9,43 9,28 C9,25 9,23 12,22"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </View>
  );
}

// A loose wavy underline for emphasis beneath a heading or milestone label.
export function ScribbleUnderline({
  color = '#8C6425',
  strokeWidth = 2.5,
  width = 80,
}: ScribbleProps & { width?: number }) {
  return (
    <Svg width={width} height={10} viewBox="0 0 100 10" preserveAspectRatio="none">
      <Path
        d="M2,6 C20,1 32,9 50,5 C66,1 80,9 98,4"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// A small hand-drawn asterisk burst — confirmations, milestones, "new".
export function ScribbleStar({ color = '#8C6425', strokeWidth = 2, size = 20 }: ScribbleProps & { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12,3 C12.5,9 11.5,16 12,21" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M3.5,8 C9,10.5 15,13 20.5,16" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M20.5,8 C15,10.5 9,13 3.5,16" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  circleWrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
