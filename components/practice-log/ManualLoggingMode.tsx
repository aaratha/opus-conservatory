import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export function ManualLoggingMode() {
  const [minutes, setMinutes] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View className="gap-4 rounded-xl bg-neutral-100 p-4 dark:bg-neutral-900">
      <View className="gap-2">
        <Text className="text-sm text-neutral-500 dark:text-neutral-400">Minutes practiced</Text>
        <TextInput
          value={minutes}
          onChangeText={setMinutes}
          keyboardType="number-pad"
          placeholder="30"
          placeholderTextColor="#9ca3af"
          className="rounded-lg bg-white px-4 py-3 text-black dark:bg-neutral-950 dark:text-white"
        />
      </View>
      <View className="gap-2">
        <Text className="text-sm text-neutral-500 dark:text-neutral-400">Notes</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="What did you work on?"
          placeholderTextColor="#9ca3af"
          multiline
          className="min-h-20 rounded-lg bg-white px-4 py-3 text-black dark:bg-neutral-950 dark:text-white"
        />
      </View>
      <Pressable className="items-center rounded-xl bg-blue-600 py-3 dark:bg-blue-500">
        <Text className="text-sm font-semibold text-white">Log practice</Text>
      </Pressable>
    </View>
  );
}
