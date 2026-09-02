import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const APPOINTMENT_TYPES = ['Standard lesson', 'Makeup lesson', 'Trial lesson'] as const;

export type AppointmentType = (typeof APPOINTMENT_TYPES)[number];

export function AppointmentTypeDropdown({
  value,
  onChange,
}: {
  value: AppointmentType;
  onChange: (value: AppointmentType) => void;
}) {
  const { styles, colors } = useAppStyles();
  const [open, setOpen] = useState(false);

  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.textSmallMuted}>Appointment type</Text>
      <Pressable onPress={() => setOpen((prev) => !prev)} style={[styles.card, styles.row]}>
        <Text style={styles.textSmall}>{value}</Text>
        <Text style={styles.textSmallMuted}>{open ? '▲' : '▼'}</Text>
      </Pressable>
      {open ? (
        <View style={[styles.card, local.list]}>
          {APPOINTMENT_TYPES.map((type, index) => (
            <Pressable
              key={type}
              onPress={() => {
                onChange(type);
                setOpen(false);
              }}
              style={[
                local.option,
                index < APPOINTMENT_TYPES.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: colors.border,
                },
              ]}>
              <Text style={styles.textSmall}>{type}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const local = StyleSheet.create({
  list: {
    padding: 0,
    gap: 0,
    overflow: 'hidden',
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
