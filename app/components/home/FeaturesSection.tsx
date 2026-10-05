import { Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const features = [
  {
    id: '1',
    icon: '📅',
    title: 'Scheduler',
    description: 'Book, reschedule, and track your lessons.',
  },
  {
    id: '2',
    icon: '⏱️',
    title: 'Practice Log',
    description: 'Time your practice or log it manually.',
  },
  {
    id: '3',
    icon: '🎁',
    title: 'Programs',
    description: 'Browse and purchase lesson packages.',
  },
];

export function FeaturesSection() {
  const { styles, colors } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>What you can do</Text>
      <View style={styles.section}>
        {features.map((feature) => (
          <View key={feature.id} style={[styles.card, styles.rowStart]}>
            <View
              style={[
                styles.avatar,
                { backgroundColor: colors.surfaceAlt, width: 44, height: 44 },
              ]}>
              <Text style={{ fontSize: 20 }}>{feature.icon}</Text>
            </View>
            <View style={{ flex: 1, gap: 2 }}>
              <Text style={styles.textMedium}>{feature.title}</Text>
              <Text style={styles.textSmallMuted}>{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
