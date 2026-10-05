import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { useAppStyles } from '@/components/useAppStyles';

const rankings = [
  { id: '1', name: 'Jamie Chen', minutes: 420 },
  { id: '2', name: 'You', minutes: 360 },
  { id: '3', name: 'Alex Kim', minutes: 310 },
  { id: '4', name: 'Sam Patel', minutes: 275 },
];

const MEDALS = ['🥇', '🥈', '🥉'];

export default function LeaderboardScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {rankings.map((entry, index) => {
        const isYou = entry.name === 'You';
        return (
          <View
            key={entry.id}
            style={[styles.card, styles.row, isYou && styles.cardHighlight]}>
            <View style={styles.rowStart}>
              <Text style={local.rank}>{MEDALS[index] ?? `#${index + 1}`}</Text>
              <Avatar name={entry.name} size={36} />
              <Text style={styles.textMedium}>{entry.name}</Text>
            </View>
            <Text style={styles.textSmallMuted}>{entry.minutes} min</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const local = StyleSheet.create({
  rank: {
    fontSize: 18,
    width: 28,
    textAlign: 'center',
  },
});
