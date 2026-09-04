import { StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';
import { colorForName } from '@/constants/theme';

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : '';
  return (first + last).toUpperCase();
}

export function Avatar({ name, size = 44 }: { name: string; size?: number }) {
  const { styles } = useAppStyles();

  return (
    <View style={[styles.avatar, local.size(size), { backgroundColor: colorForName(name) }]}>
      <Text style={[styles.avatarText, local.fontSize(size)]}>{initialsFor(name)}</Text>
    </View>
  );
}

const local = {
  size: (size: number) => StyleSheet.flatten({ width: size, height: size }),
  fontSize: (size: number) => StyleSheet.flatten({ fontSize: Math.round(size * 0.38) }),
};
