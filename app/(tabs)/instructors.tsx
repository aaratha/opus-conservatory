import { ScrollView, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { useAppStyles } from '@/components/useAppStyles';

const INSTRUMENT_ICON: Record<string, string> = {
  Piano: '🎹',
  Guitar: '🎸',
  Violin: '🎻',
  Voice: '🎤',
  Drums: '🥁',
};

const instructors = [
  { id: '1', name: 'Dana Ruiz', instrument: 'Piano' },
  { id: '2', name: 'Marcus Lee', instrument: 'Guitar' },
  { id: '3', name: 'Priya Nair', instrument: 'Violin' },
  { id: '4', name: 'Owen Blake', instrument: 'Voice' },
];

export default function InstructorsScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {instructors.map((instructor) => (
        <View key={instructor.id} style={[styles.card, styles.rowStart]}>
          <Avatar name={instructor.name} />
          <View style={{ flex: 1, gap: 6 }}>
            <Text style={styles.textMedium}>{instructor.name}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {INSTRUMENT_ICON[instructor.instrument] ?? '🎵'} {instructor.instrument}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
