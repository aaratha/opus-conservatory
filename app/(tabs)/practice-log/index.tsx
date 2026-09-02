import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { ManualLoggingMode } from '@/components/practice-log/ManualLoggingMode';
import { StopwatchMode } from '@/components/practice-log/StopwatchMode';
import { useAppStyles } from '@/components/useAppStyles';

type Mode = 'stopwatch' | 'manual';

const OPTIONS = [
  { key: 'stopwatch', label: 'Stopwatch' },
  { key: 'manual', label: 'Manual' },
] as const;

export default function PracticeLogScreen() {
  const { styles } = useAppStyles();
  const [mode, setMode] = useState<Mode>('stopwatch');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.segment}>
        {OPTIONS.map((option) => {
          const isActive = option.key === mode;
          return (
            <Pressable
              key={option.key}
              onPress={() => setMode(option.key)}
              style={[styles.segmentOption, isActive && styles.segmentOptionActive]}>
              <Text style={[styles.segmentText, isActive && styles.segmentTextActive]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {mode === 'stopwatch' ? <StopwatchMode /> : <ManualLoggingMode />}

      <Link href="/practice-log/leaderboard" asChild>
        <Pressable style={styles.buttonGhost}>
          <Text style={styles.buttonGhostText}>View leaderboard</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
