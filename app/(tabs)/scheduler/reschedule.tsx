import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import { InstructorAvailability } from '@/components/scheduler/InstructorAvailability';

export default function RescheduleLessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-6 p-5">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        Rescheduling lesson #{lessonId}
      </Text>
      <InstructorAvailability
        instructorName="Dana Ruiz"
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <Pressable
        disabled={!selectedSlot}
        onPress={() => router.back()}
        className={`items-center rounded-xl py-3 ${
          selectedSlot ? 'bg-blue-600 dark:bg-blue-500' : 'bg-neutral-200 dark:bg-neutral-800'
        }`}>
        <Text
          className={`text-sm font-semibold ${
            selectedSlot ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'
          }`}>
          Confirm new time
        </Text>
      </Pressable>
    </ScrollView>
  );
}
