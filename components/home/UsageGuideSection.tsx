import { StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const steps = [
  'Find your teacher under Instructors.',
  'Book a lesson from the Scheduler tab.',
  'Log your practice time before your next lesson.',
  'Buy a lesson bank from Programs when you run low.',
];

export function UsageGuideSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Usage guide</Text>
      <View style={styles.card}>
        {steps.map((step, index) => (
          <View key={step} style={local.step}>
            <Text style={styles.textSmallMuted}>{index + 1}.</Text>
            <Text style={[styles.textSmall, local.stepText]}>{step}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  step: {
    flexDirection: 'row',
    gap: 8,
  },
  stepText: {
    flex: 1,
  },
});
