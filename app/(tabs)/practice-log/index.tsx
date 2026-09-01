import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { ManualLoggingMode } from '@/components/practice-log/ManualLoggingMode';
import { StopwatchMode } from '@/components/practice-log/StopwatchMode';

type Mode = 'stopwatch' | 'manual';

export default function PracticeLogScreen() {
  const [mode, setMode] = useState<Mode>('stopwatch');

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-6 p-5">
      <View className="flex-row rounded-xl bg-neutral-100 p-1 dark:bg-neutral-900">
        {(
          [
            { key: 'stopwatch', label: 'Stopwatch' },
            { key: 'manual', label: 'Manual' },
          ] as const
        ).map((option) => {
          const isActive = option.key === mode;
          return (
            <Pressable
              key={option.key}
              onPress={() => setMode(option.key)}
              className={`flex-1 items-center rounded-lg py-2 ${
                isActive ? 'bg-white dark:bg-neutral-950' : ''
              }`}>
              <Text
                className={`text-sm font-medium ${
                  isActive ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400'
                }`}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {mode === 'stopwatch' ? <StopwatchMode /> : <ManualLoggingMode />}

      <Link href="/practice-log/leaderboard" asChild>
        <Pressable className="items-center rounded-xl bg-neutral-100 py-3 dark:bg-neutral-900">
          <Text className="text-sm font-medium text-blue-600 dark:text-blue-400">
            View leaderboard
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
