import { Pressable, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const APPOINTMENT_TYPES = ['Standard lesson', 'Makeup lesson', 'Trial lesson'] as const;

export type AppointmentType = (typeof APPOINTMENT_TYPES)[number];

// All options are shown up front (rather than tucked behind a dropdown) so
// the choice is unambiguous at a glance.
export function AppointmentTypeSelector({
  value,
  onChange,
}: {
  value: AppointmentType;
  onChange: (value: AppointmentType) => void;
}) {
  const { styles } = useAppStyles();

  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.textSmallMuted}>Appointment type</Text>
      <View style={styles.wrap}>
        {APPOINTMENT_TYPES.map((type) => {
          const isSelected = type === value;
          return (
            <Pressable
              key={type}
              onPress={() => onChange(type)}
              style={[styles.pill, isSelected && styles.pillActive]}>
              <Text style={[styles.pillText, isSelected && styles.pillTextActive]}>{type}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
