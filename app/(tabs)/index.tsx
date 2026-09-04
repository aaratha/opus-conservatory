import { ScrollView, Text, View } from 'react-native';

import { FeaturesSection } from '@/components/home/FeaturesSection';
import { NoticesSection } from '@/components/home/NoticesSection';
import { UsageGuideSection } from '@/components/home/UsageGuideSection';
import { useAppStyles } from '@/components/useAppStyles';

export default function HomeScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to Opus Conservatory 🎵</Text>
        <Text style={styles.heroSubtitle}>
          Lessons, practice, and programs for the whole family — all in one place.
        </Text>
      </View>
      <NoticesSection />
      <FeaturesSection />
      <UsageGuideSection />
    </ScrollView>
  );
}
