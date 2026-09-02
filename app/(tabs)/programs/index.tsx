import { Link } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

import { CatalogSection } from '@/components/programs/CatalogSection';
import { useAppStyles } from '@/components/useAppStyles';

export default function ProgramsScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Link href="/programs/my-programs" asChild>
        <Pressable style={styles.buttonGhost}>
          <Text style={styles.buttonGhostText}>View my programs</Text>
        </Pressable>
      </Link>
      <CatalogSection />
    </ScrollView>
  );
}
