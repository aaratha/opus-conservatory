import { Stack } from 'expo-router';

export default function SchedulerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Scheduler' }} />
      <Stack.Screen name="reschedule" options={{ title: 'Reschedule Lesson' }} />
      <Stack.Screen name="new" options={{ title: 'Schedule a New Lesson' }} />
    </Stack>
  );
}
