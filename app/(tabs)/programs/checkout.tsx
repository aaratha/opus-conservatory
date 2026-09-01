import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import {
  PurchaseMethodSelector,
  type PurchaseMethod,
} from '@/components/programs/PurchaseMethodSelector';

export default function CheckoutScreen() {
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const router = useRouter();
  const [method, setMethod] = useState<PurchaseMethod>('Stripe');

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-6 p-5">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        Checking out program #{programId}
      </Text>
      <PurchaseMethodSelector value={method} onChange={setMethod} />
      <Pressable
        onPress={() => router.back()}
        className="items-center rounded-xl bg-blue-600 py-3 dark:bg-blue-500">
        <Text className="text-sm font-semibold text-white">Confirm purchase</Text>
      </Pressable>
    </ScrollView>
  );
}
