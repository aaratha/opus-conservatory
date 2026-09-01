import { Link } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

import { CatalogSection } from '@/components/programs/CatalogSection';

export default function ProgramsScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-8 p-5">
      <Link href="/programs/my-programs" asChild>
        <Pressable className="items-center rounded-xl bg-neutral-100 py-3 dark:bg-neutral-900">
          <Text className="text-sm font-medium text-blue-600 dark:text-blue-400">
            View my programs
          </Text>
        </Pressable>
      </Link>
      <CatalogSection />
    </ScrollView>
  );
}
