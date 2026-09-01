import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const APPOINTMENT_TYPES = ['Standard lesson', 'Makeup lesson', 'Trial lesson'] as const;

export type AppointmentType = (typeof APPOINTMENT_TYPES)[number];

export function AppointmentTypeDropdown({
  value,
  onChange,
}: {
  value: AppointmentType;
  onChange: (value: AppointmentType) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <View className="gap-2">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">Appointment type</Text>
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
        <Text className="text-sm text-black dark:text-white">{value}</Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400">{open ? '▲' : '▼'}</Text>
      </Pressable>
      {open ? (
        <View className="overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
          {APPOINTMENT_TYPES.map((type, index) => (
            <Pressable
              key={type}
              onPress={() => {
                onChange(type);
                setOpen(false);
              }}
              className={`px-4 py-3 ${
                index < APPOINTMENT_TYPES.length - 1
                  ? 'border-b border-neutral-200 dark:border-neutral-800'
                  : ''
              }`}>
              <Text className="text-sm text-black dark:text-white">{type}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}
