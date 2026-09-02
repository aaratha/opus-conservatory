import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import { InstructorAvailability } from '@/components/scheduler/InstructorAvailability';
import { useAppStyles } from '@/components/useAppStyles';

export default function RescheduleLessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const { styles } = useAppStyles();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.textSmallMuted}>Rescheduling lesson #{lessonId}</Text>
      <InstructorAvailability
        instructorName="Dana Ruiz"
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <Pressable
        disabled={!selectedSlot}
        onPress={() => router.back()}
        style={[styles.button, !selectedSlot && styles.buttonDisabled]}>
        <Text style={[styles.buttonText, !selectedSlot && styles.buttonTextDisabled]}>
          Confirm new time
        </Text>
      </Pressable>
    </ScrollView>
  );
}
