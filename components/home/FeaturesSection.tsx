import { Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const features = [
  { id: '1', title: 'Scheduler', description: 'Book, reschedule, and track your lessons.' },
  { id: '2', title: 'Practice Log', description: 'Time your practice or log it manually.' },
  { id: '3', title: 'Programs', description: 'Browse and purchase lesson packages.' },
];

export function FeaturesSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Features</Text>
      <View style={styles.section}>
        {features.map((feature) => (
          <View key={feature.id} style={styles.card}>
            <Text style={styles.textMedium}>{feature.title}</Text>
            <Text style={styles.textSmallMuted}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
