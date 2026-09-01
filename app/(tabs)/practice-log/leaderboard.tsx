import { ScrollView, Text, View } from 'react-native';

const rankings = [
  { id: '1', name: 'Jamie Chen', minutes: 420 },
  { id: '2', name: 'You', minutes: 360 },
  { id: '3', name: 'Alex Kim', minutes: 310 },
  { id: '4', name: 'Sam Patel', minutes: 275 },
];

export default function LeaderboardScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-2 p-5">
      {rankings.map((entry, index) => (
        <View
          key={entry.id}
          className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
          <View className="flex-row items-center gap-3">
            <Text className="w-6 text-sm text-neutral-500 dark:text-neutral-400">
              {index + 1}
            </Text>
            <Text className="text-sm font-medium text-black dark:text-white">{entry.name}</Text>
          </View>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400">
            {entry.minutes} min
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
