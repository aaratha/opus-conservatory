import { ScrollView, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const myPrograms = [
  { id: '1', name: '8-lesson bank', instructor: 'Dana Ruiz', lessonsUsed: 3, lessonsTotal: 8 },
  { id: '2', name: '4-lesson bank', instructor: 'Marcus Lee', lessonsUsed: 4, lessonsTotal: 4 },
];

export default function MyProgramsScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {myPrograms.map((program) => (
        <View key={program.id} style={styles.card}>
          <Text style={styles.textMedium}>{program.name}</Text>
          <View style={styles.row}>
            <Text style={styles.textSmallMuted}>Instructor</Text>
            <Text style={styles.textSmall}>{program.instructor}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textSmallMuted}>Lessons left / bank</Text>
            <Text style={styles.textSmall}>
              {program.lessonsTotal - program.lessonsUsed} / {program.lessonsTotal}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
