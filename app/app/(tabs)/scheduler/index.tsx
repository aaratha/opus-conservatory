import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View, useWindowDimensions } from 'react-native';

import { CalendarGrid, type SelectedSlot } from '@/components/scheduler/CalendarGrid';
import { LessonsLeftIndicator } from '@/components/scheduler/LessonsLeftIndicator';
import { SlotConfirmationModal } from '@/components/scheduler/SlotConfirmationModal';
import { TeacherList } from '@/components/scheduler/TeacherList';
import { UpcomingLessonsSection } from '@/components/scheduler/UpcomingLessonsSection';
import { NoteIcon } from '@/components/icons/NoteIcons';
import { useAppStyles } from '@/components/useAppStyles';
import { spacing } from '@/constants/theme';
import { useInstructors } from '@/lib/useInstructors';

const LESSONS_USED = 8;
const LESSONS_AVAILABLE = 8;

// Mock "current student" context — there's no auth/student model yet, so the
// assigned teacher is matched by name against whatever Sanity returns.
const ASSIGNED_TEACHER_NAME = 'Dana Ruiz';

const WIDE_BREAKPOINT = 820;

export default function SchedulerScreen() {
  const { styles, colors } = useAppStyles();
  const { width } = useWindowDimensions();
  const isWide = width >= WIDE_BREAKPOINT;
  const { instructors, loading, error } = useInstructors();

  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const assignedInstructor = useMemo(
    () => instructors.find((i) => i.name === ASSIGNED_TEACHER_NAME) ?? instructors[0] ?? null,
    [instructors]
  );

  useEffect(() => {
    if (assignedInstructor && visibleIds.size === 0) {
      setVisibleIds(new Set([assignedInstructor._id]));
    }
  }, [assignedInstructor, visibleIds.size]);

  const visibleInstructors = useMemo(
    () => instructors.filter((i) => visibleIds.has(i._id)),
    [instructors, visibleIds]
  );

  function toggleTeacher(id: string) {
    setVisibleIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleCancel() {
    setSelectedSlot(null);
    setConfirmed(false);
  }

  function handleConfirm() {
    setConfirmed(true);
    setTimeout(handleCancel, 1400);
  }

  if (loading) {
    return (
      <View style={[styles.screen, local.center]}>
        <ActivityIndicator color={colors.tint} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.screen, local.center]}>
        <Text style={styles.textDanger}>{error}</Text>
      </View>
    );
  }

  if (instructors.length === 0) {
    return (
      <View style={[styles.screen, local.center, { gap: spacing.md }]}>
        <NoteIcon name="whole" size={40} color={colors.muted} />
        <Text style={styles.textMuted}>No teachers are set up yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Scheduler</Text>
          <Text style={styles.heroSubtitle}>
            Tap an open time with {assignedInstructor?.name ?? 'your teacher'}, or toggle on
            another teacher to see who else has room this week.
          </Text>
        </View>

        <LessonsLeftIndicator lessonsUsed={LESSONS_USED} lessonsAvailable={LESSONS_AVAILABLE} />

        <View style={{ flexDirection: isWide ? 'row' : 'column', gap: spacing.xl }}>
          <View style={{ width: isWide ? 260 : undefined }}>
            <TeacherList
              instructors={instructors}
              assignedInstructorId={assignedInstructor?._id ?? null}
              visibleIds={visibleIds}
              onToggle={toggleTeacher}
            />
          </View>
          <View style={{ flex: isWide ? 1 : undefined }}>
            <CalendarGrid
              visibleInstructors={visibleInstructors}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />
          </View>
        </View>

        <UpcomingLessonsSection instructorName={assignedInstructor?.name} />
      </ScrollView>

      <SlotConfirmationModal
        slot={selectedSlot}
        confirmed={confirmed}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </View>
  );
}

const local = {
  center: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
};
