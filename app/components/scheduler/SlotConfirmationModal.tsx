import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import type { SelectedSlot } from '@/components/scheduler/CalendarGrid';
import { ScribbleStar } from '@/components/scribble/Scribble';
import { useAppStyles } from '@/components/useAppStyles';
import { spacing } from '@/constants/theme';
import { formatHour } from '@/lib/scheduler/availability';
import { urlFor } from '@/lib/sanity';

export function SlotConfirmationModal({
  slot,
  confirmed,
  onCancel,
  onConfirm,
}: {
  slot: SelectedSlot | null;
  confirmed: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const { styles, colors } = useAppStyles();

  if (!slot) return null;

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onCancel}>
      <View style={local.backdrop}>
        <View style={[styles.card, local.sheet, { backgroundColor: colors.background }]}>
          {confirmed ? (
            <View style={local.confirmed}>
              <ScribbleStar color={colors.tint} size={30} />
              <Text style={styles.sectionTitle}>Lesson booked</Text>
              <Text style={styles.textMuted}>
                {slot.instructor.name} · {slot.day} {formatHour(slot.hour)}
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Confirm this lesson</Text>
              <View style={styles.rowStart}>
                {slot.instructor.photo ? (
                  <Image
                    source={{ uri: urlFor(slot.instructor.photo).width(88).height(88).url() }}
                    style={local.photo}
                  />
                ) : (
                  <Avatar name={slot.instructor.name} />
                )}
                <View>
                  <Text style={styles.textMedium}>{slot.instructor.name}</Text>
                  <Text style={styles.textSmallMuted}>
                    {slot.day} · {formatHour(slot.hour)}
                  </Text>
                </View>
              </View>
              <View style={[styles.row, local.actions]}>
                <Pressable style={[styles.buttonGhost, local.actionButton]} onPress={onCancel}>
                  <Text style={styles.buttonGhostText}>Cancel</Text>
                </Pressable>
                <Pressable style={[styles.button, local.actionButton]} onPress={onConfirm}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const local = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(20,14,8,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  sheet: {
    width: '100%',
    maxWidth: 360,
    gap: spacing.lg,
  },
  photo: {
    width: 44,
    height: 44,
    borderRadius: 999,
  },
  actions: {
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  confirmed: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
  },
});
