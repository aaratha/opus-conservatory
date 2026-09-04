import { Text, View } from 'react-native';

import { ProgressBar } from '@/components/ProgressBar';
import { useAppStyles } from '@/components/useAppStyles';

export function LessonsLeftIndicator({
  lessonsUsed,
  lessonsAvailable,
}: {
  lessonsUsed: number;
  lessonsAvailable: number;
}) {
  const { styles, colors } = useAppStyles();
  const remaining = Math.max(lessonsAvailable - lessonsUsed, 0);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.textSmall}>Lessons remaining</Text>
        <Text style={[styles.textSmall, { fontWeight: '700', color: colors.tint }]}>
          {remaining} / {lessonsAvailable}
        </Text>
      </View>
      <ProgressBar value={remaining / lessonsAvailable} />
    </View>
  );
}
