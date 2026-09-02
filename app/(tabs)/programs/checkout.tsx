import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

import {
  PurchaseMethodSelector,
  type PurchaseMethod,
} from '@/components/programs/PurchaseMethodSelector';
import { useAppStyles } from '@/components/useAppStyles';

export default function CheckoutScreen() {
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const router = useRouter();
  const { styles } = useAppStyles();
  const [method, setMethod] = useState<PurchaseMethod>('Stripe');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.textSmallMuted}>Checking out program #{programId}</Text>
      <PurchaseMethodSelector value={method} onChange={setMethod} />
      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Confirm purchase</Text>
      </Pressable>
    </ScrollView>
  );
}
