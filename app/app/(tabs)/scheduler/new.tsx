import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import {
  AppointmentTypeSelector,
  type AppointmentType,
} from '@/components/scheduler/AppointmentTypeSelector';
import { InstructorAvailability } from '@/components/scheduler/InstructorAvailability';
import { LessonsLeftIndicator } from '@/components/scheduler/LessonsLeftIndicator';
import { useAppStyles } from '@/components/useAppStyles';
import { isLessonLimitExceeded } from '@/lib/scheduler/validation';

const LESSONS_USED = 8;
const LESSONS_AVAILABLE = 8;

export default function ScheduleNewLessonScreen() {
  const router = useRouter();
  const { styles } = useAppStyles();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('Standard lesson');

  const limitExceeded = isLessonLimitExceeded(LESSONS_USED, LESSONS_AVAILABLE);
  const canBook = Boolean(selectedSlot) && !limitExceeded;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <LessonsLeftIndicator lessonsUsed={LESSONS_USED} lessonsAvailable={LESSONS_AVAILABLE} />
      {limitExceeded ? (
        <Text style={styles.textDanger}>
          You've used all the lessons in your current bank. Visit Programs to add more before
          booking.
        </Text>
      ) : null}
      <AppointmentTypeSelector value={appointmentType} onChange={setAppointmentType} />
      <InstructorAvailability
        instructorName="Dana Ruiz"
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <Pressable
        disabled={!canBook}
        onPress={() => router.back()}
        style={[styles.button, !canBook && styles.buttonDisabled]}>
        <Text style={[styles.buttonText, !canBook && styles.buttonTextDisabled]}>
          Book lesson
        </Text>
      </Pressable>
    </ScrollView>
  );
}
