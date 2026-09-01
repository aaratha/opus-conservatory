import { Pressable, Text, View } from 'react-native';

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
  return (
    <View className="gap-2">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        {instructorName}'s availability
      </Text>
      <View className="flex-row flex-wrap gap-2">
        {AVAILABLE_SLOTS.map((slot) => {
          const isSelected = slot === selectedSlot;
          return (
            <Pressable
              key={slot}
              onPress={() => onSelectSlot(slot)}
              className={`rounded-full px-4 py-2 ${
                isSelected ? 'bg-blue-600 dark:bg-blue-500' : 'bg-neutral-100 dark:bg-neutral-900'
              }`}>
              <Text
                className={`text-sm ${
                  isSelected ? 'text-white' : 'text-black dark:text-white'
                }`}>
                {slot}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
