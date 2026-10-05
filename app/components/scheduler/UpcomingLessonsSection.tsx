import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { useAppStyles } from '@/components/useAppStyles';

const upcomingLessons = [
  { id: '1', with: 'Dana Ruiz', when: 'Mon, Sep 8 · 4:00 PM' },
  { id: '2', with: 'Dana Ruiz', when: 'Mon, Sep 15 · 4:00 PM' },
];

export function UpcomingLessonsSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Upcoming lessons</Text>
      <View style={styles.section}>
        {upcomingLessons.map((lesson) => (
          <View key={lesson.id} style={[styles.card, styles.row]}>
            <View style={styles.rowStart}>
              <Avatar name={lesson.with} size={36} />
              <View>
                <Text style={styles.textMedium}>{lesson.with}</Text>
                <Text style={styles.textSmallMuted}>{lesson.when}</Text>
              </View>
            </View>
            <Link
              href={{ pathname: '/scheduler/reschedule', params: { lessonId: lesson.id } }}
              asChild>
              <Pressable style={styles.pill}>
                <Text style={styles.pillText}>Reschedule</Text>
              </Pressable>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
