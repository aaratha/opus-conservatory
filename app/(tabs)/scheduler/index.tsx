import { Link } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

import { UpcomingLessonsSection } from '@/components/scheduler/UpcomingLessonsSection';
import { useAppStyles } from '@/components/useAppStyles';

export default function SchedulerScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Link href="/scheduler/new" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Schedule a new lesson</Text>
        </Pressable>
      </Link>
      <UpcomingLessonsSection />
    </ScrollView>
  );
}
