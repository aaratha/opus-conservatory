import { Stack } from 'expo-router';

export default function ProgramsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Programs' }} />
      <Stack.Screen name="my-programs" options={{ title: 'My Programs' }} />
      <Stack.Screen name="checkout" options={{ title: 'Checkout' }} />
    </Stack>
  );
}
