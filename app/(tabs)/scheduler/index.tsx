import { Link } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

import { UpcomingLessonsSection } from '@/components/scheduler/UpcomingLessonsSection';

export default function SchedulerScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-8 p-5">
      <Link href="/scheduler/new" asChild>
        <Pressable className="items-center rounded-xl bg-blue-600 py-3 dark:bg-blue-500">
          <Text className="text-sm font-semibold text-white">Schedule a new lesson</Text>
        </Pressable>
      </Link>
      <UpcomingLessonsSection />
    </ScrollView>
  );
}
