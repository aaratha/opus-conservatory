import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

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
      <View style={styles.hero}>
        <Text style={styles.sectionTitle}>You're almost there 🎉</Text>
        <Text style={styles.textMuted}>Choose how you'd like to pay for bank #{programId}.</Text>
      </View>
      <PurchaseMethodSelector value={method} onChange={setMethod} />
      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Confirm purchase</Text>
      </Pressable>
    </ScrollView>
  );
}
