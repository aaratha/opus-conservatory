import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';
import { fontSize } from '@/constants/theme';

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function StopwatchMode() {
  const { styles } = useAppStyles();
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <View style={[styles.card, local.card]}>
      <Text style={[styles.text, local.display]}>{formatElapsed(elapsedSeconds)}</Text>
      <View style={local.controls}>
        <Pressable
          onPress={() => setIsRunning((prev) => !prev)}
          style={[styles.button, local.button]}>
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsRunning(false);
            setElapsedSeconds(0);
          }}
          style={[styles.buttonGhost, local.button]}>
          <Text style={styles.buttonGhostText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  display: {
    fontSize: fontSize.display,
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});
