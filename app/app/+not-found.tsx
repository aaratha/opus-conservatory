import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

export default function NotFoundScreen() {
  const { styles } = useAppStyles();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={[styles.screen, local.container]}>
        <Text style={styles.sectionTitle}>This screen doesn't exist.</Text>

        <Link href="/" style={local.link}>
          <Text style={styles.link}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const local = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 20,
  },
  link: {
    paddingVertical: 16,
  },
});
