import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function StopwatchMode() {
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
    <View className="items-center gap-6 rounded-xl bg-neutral-100 py-10 dark:bg-neutral-900">
      <Text className="text-5xl font-semibold text-black dark:text-white">
        {formatElapsed(elapsedSeconds)}
      </Text>
      <View className="flex-row gap-3">
        <Pressable
          onPress={() => setIsRunning((prev) => !prev)}
          className="rounded-full bg-blue-600 px-6 py-3 dark:bg-blue-500">
          <Text className="text-sm font-semibold text-white">
            {isRunning ? 'Pause' : 'Start'}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsRunning(false);
            setElapsedSeconds(0);
          }}
          className="rounded-full bg-neutral-200 px-6 py-3 dark:bg-neutral-800">
          <Text className="text-sm font-semibold text-black dark:text-white">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
