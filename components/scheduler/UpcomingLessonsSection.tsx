import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const upcomingLessons = [
  { id: '1', with: 'Dana Ruiz', when: 'Mon, Sep 8 · 4:00 PM' },
  { id: '2', with: 'Dana Ruiz', when: 'Mon, Sep 15 · 4:00 PM' },
];

export function UpcomingLessonsSection() {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-black dark:text-white">Upcoming lessons</Text>
      <View className="gap-2">
        {upcomingLessons.map((lesson) => (
          <View
            key={lesson.id}
            className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
            <View>
              <Text className="text-sm font-medium text-black dark:text-white">{lesson.with}</Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">{lesson.when}</Text>
            </View>
            <Link href={{ pathname: '/scheduler/reschedule', params: { lessonId: lesson.id } }}>
              <Text className="text-sm text-blue-600 dark:text-blue-400">Reschedule</Text>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
