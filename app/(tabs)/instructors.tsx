import { ScrollView, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const instructors = [
  { id: '1', name: 'Dana Ruiz', instrument: 'Piano' },
  { id: '2', name: 'Marcus Lee', instrument: 'Guitar' },
  { id: '3', name: 'Priya Nair', instrument: 'Violin' },
];

export default function InstructorsScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {instructors.map((instructor) => (
        <View key={instructor.id} style={[styles.card, styles.row]}>
          <Text style={styles.textMedium}>{instructor.name}</Text>
          <Text style={styles.textSmallMuted}>{instructor.instrument}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
