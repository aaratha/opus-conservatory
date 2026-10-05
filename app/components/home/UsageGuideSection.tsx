import { StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const steps = [
  'Find your teacher under Instructors.',
  'Book a lesson from the Scheduler tab.',
  'Log your practice time before your next lesson.',
  'Buy a lesson bank from Programs when you run low.',
];

export function UsageGuideSection() {
  const { styles, colors } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Getting started</Text>
      <View style={styles.card}>
        {steps.map((step, index) => (
          <View key={step} style={local.step}>
            <View style={[local.number, { backgroundColor: colors.tint }]}>
              <Text style={[local.numberText, { color: colors.tintText }]}>{index + 1}</Text>
            </View>
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
    alignItems: 'center',
    gap: 12,
  },
  number: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 12,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
  },
});
