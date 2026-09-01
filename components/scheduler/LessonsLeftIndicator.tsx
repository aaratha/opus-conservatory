import { Text, View } from 'react-native';

export function LessonsLeftIndicator({
  lessonsUsed,
  lessonsAvailable,
}: {
  lessonsUsed: number;
  lessonsAvailable: number;
}) {
  const remaining = Math.max(lessonsAvailable - lessonsUsed, 0);

  return (
    <View className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
      <Text className="text-sm text-black dark:text-white">Lessons remaining</Text>
      <Text className="text-sm font-semibold text-blue-600 dark:text-blue-400">
        {remaining} / {lessonsAvailable}
      </Text>
    </View>
  );
}
