import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const rankings = [
  { id: '1', name: 'Jamie Chen', minutes: 420 },
  { id: '2', name: 'You', minutes: 360 },
  { id: '3', name: 'Alex Kim', minutes: 310 },
  { id: '4', name: 'Sam Patel', minutes: 275 },
];

export default function LeaderboardScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {rankings.map((entry, index) => (
        <View key={entry.id} style={[styles.card, styles.row]}>
          <View style={local.name}>
            <Text style={[styles.textSmallMuted, local.rank]}>{index + 1}</Text>
            <Text style={styles.textMedium}>{entry.name}</Text>
          </View>
          <Text style={styles.textSmallMuted}>{entry.minutes} min</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const local = StyleSheet.create({
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rank: {
    width: 20,
  },
});
