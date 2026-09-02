import { ScrollView } from 'react-native';

import { FeaturesSection } from '@/components/home/FeaturesSection';
import { NoticesSection } from '@/components/home/NoticesSection';
import { UsageGuideSection } from '@/components/home/UsageGuideSection';
import { useAppStyles } from '@/components/useAppStyles';

export default function HomeScreen() {
  const { styles } = useAppStyles();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <NoticesSection />
      <FeaturesSection />
      <UsageGuideSection />
    </ScrollView>
  );
}
