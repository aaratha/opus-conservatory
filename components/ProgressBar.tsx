import { View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

export function ProgressBar({ value }: { value: number }) {
  const { styles } = useAppStyles();
  const pct = Math.max(0, Math.min(1, value));

  return (
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${pct * 100}%` }]} />
    </View>
  );
}
