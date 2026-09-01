import { ScrollView } from 'react-native';

import { FeaturesSection } from '@/components/home/FeaturesSection';
import { NoticesSection } from '@/components/home/NoticesSection';
import { UsageGuideSection } from '@/components/home/UsageGuideSection';

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-8 p-5">
      <NoticesSection />
      <FeaturesSection />
      <UsageGuideSection />
    </ScrollView>
  );
}
