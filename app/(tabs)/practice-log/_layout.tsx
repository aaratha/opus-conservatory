import { Stack } from 'expo-router';

export default function PracticeLogLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Practice Log' }} />
      <Stack.Screen name="leaderboard" options={{ title: 'Leaderboard' }} />
    </Stack>
  );
}
