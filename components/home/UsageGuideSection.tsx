import { Text, View } from 'react-native';

const steps = [
  'Find your teacher under Instructors.',
  'Book a lesson from the Scheduler tab.',
  'Log your practice time before your next lesson.',
  'Buy a lesson bank from Programs when you run low.',
];

export function UsageGuideSection() {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-black dark:text-white">Usage guide</Text>
      <View className="gap-2 rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
        {steps.map((step, index) => (
          <View key={step} className="flex-row gap-2">
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">{index + 1}.</Text>
            <Text className="flex-1 text-sm text-black dark:text-white">{step}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
