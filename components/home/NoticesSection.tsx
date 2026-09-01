import { Text, View } from 'react-native';

const notices = [
  { id: '1', title: 'Studio closed Labor Day', date: 'Sep 7' },
  { id: '2', title: 'Fall recital signup opens', date: 'Sep 12' },
];

export function NoticesSection() {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-black dark:text-white">
        Notices & upcoming events
      </Text>
      <View className="gap-2">
        {notices.map((notice) => (
          <View
            key={notice.id}
            className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
            <Text className="text-sm text-black dark:text-white">{notice.title}</Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">{notice.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
