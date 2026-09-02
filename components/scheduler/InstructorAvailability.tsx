import { Pressable, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const AVAILABLE_SLOTS = ['Mon 4:00 PM', 'Wed 5:30 PM', 'Thu 3:00 PM', 'Fri 4:30 PM'];

export function InstructorAvailability({
  instructorName,
  selectedSlot,
  onSelectSlot,
}: {
  instructorName: string;
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}) {
  const { styles } = useAppStyles();

  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.textSmallMuted}>{instructorName}'s availability</Text>
      <View style={styles.wrap}>
        {AVAILABLE_SLOTS.map((slot) => {
          const isSelected = slot === selectedSlot;
          return (
            <Pressable
              key={slot}
              onPress={() => onSelectSlot(slot)}
              style={[styles.pill, isSelected && styles.pillActive]}>
              <Text style={[styles.pillText, isSelected && styles.pillTextActive]}>{slot}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
