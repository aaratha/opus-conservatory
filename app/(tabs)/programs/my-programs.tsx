import { ScrollView, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { ProgressBar } from '@/components/ProgressBar';
import { useAppStyles } from '@/components/useAppStyles';

const myPrograms = [
  { id: '1', name: 'Violin Lessons (8)', instructor: 'Dana Ruiz', lessonsUsed: 3, lessonsTotal: 8 },
  { id: '2', name: 'Piano Lessons (12)', instructor: 'Marcus Lee', lessonsUsed: 4, lessonsTotal: 4 },
];

export default function MyProgramsScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {myPrograms.map((program) => {
        const remaining = program.lessonsTotal - program.lessonsUsed;
        return (
          <View key={program.id} style={styles.card}>
            <View style={styles.rowStart}>
              <Avatar name={program.instructor} size={36} />
              <View style={{ flex: 1 }}>
                <Text style={styles.textMedium}>{program.name}</Text>
                <Text style={styles.textSmallMuted}>with {program.instructor}</Text>
              </View>
            </View>
            <ProgressBar value={remaining / program.lessonsTotal} />
            <View style={styles.row}>
              <Text style={styles.textSmallMuted}>Lessons left / bank</Text>
              <Text style={styles.textSmall}>
                {remaining} / {program.lessonsTotal}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
