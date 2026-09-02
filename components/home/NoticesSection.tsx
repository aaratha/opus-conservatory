import { Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const notices = [
  { id: '1', title: 'Studio closed Labor Day', date: 'Sep 7' },
  { id: '2', title: 'Fall recital signup opens', date: 'Sep 12' },
];

export function NoticesSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Notices & upcoming events</Text>
      <View style={styles.section}>
        {notices.map((notice) => (
          <View key={notice.id} style={[styles.card, styles.row]}>
            <Text style={styles.textSmall}>{notice.title}</Text>
            <Text style={styles.textSmallMuted}>{notice.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
