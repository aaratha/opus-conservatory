import { Text, View } from 'react-native';

const features = [
  { id: '1', title: 'Scheduler', description: 'Book, reschedule, and track your lessons.' },
  { id: '2', title: 'Practice Log', description: 'Time your practice or log it manually.' },
  { id: '3', title: 'Programs', description: 'Browse and purchase lesson packages.' },
];

export function FeaturesSection() {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-black dark:text-white">Features</Text>
      <View className="gap-2">
        {features.map((feature) => (
          <View key={feature.id} className="rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
            <Text className="text-sm font-medium text-black dark:text-white">{feature.title}</Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">
              {feature.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
