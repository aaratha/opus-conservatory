import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import {
  AppointmentTypeDropdown,
  type AppointmentType,
} from '@/components/scheduler/AppointmentTypeDropdown';
import { InstructorAvailability } from '@/components/scheduler/InstructorAvailability';
import { LessonsLeftIndicator } from '@/components/scheduler/LessonsLeftIndicator';
import { isLessonLimitExceeded } from '@/lib/scheduler/validation';

const LESSONS_USED = 8;
const LESSONS_AVAILABLE = 8;

export default function ScheduleNewLessonScreen() {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('Standard lesson');

  const limitExceeded = isLessonLimitExceeded(LESSONS_USED, LESSONS_AVAILABLE);
  const canBook = Boolean(selectedSlot) && !limitExceeded;

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-6 p-5">
      <LessonsLeftIndicator lessonsUsed={LESSONS_USED} lessonsAvailable={LESSONS_AVAILABLE} />
      {limitExceeded ? (
        <Text className="text-sm text-red-600 dark:text-red-400">
          You've used all the lessons in your current bank. Visit Programs to add more before
          booking.
        </Text>
      ) : null}
      <AppointmentTypeDropdown value={appointmentType} onChange={setAppointmentType} />
      <InstructorAvailability
        instructorName="Dana Ruiz"
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <Pressable
        disabled={!canBook}
        onPress={() => router.back()}
        className={`items-center rounded-xl py-3 ${
          canBook ? 'bg-blue-600 dark:bg-blue-500' : 'bg-neutral-200 dark:bg-neutral-800'
        }`}>
        <Text
          className={`text-sm font-semibold ${
            canBook ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'
          }`}>
          Book lesson
        </Text>
      </Pressable>
    </ScrollView>
  );
}
