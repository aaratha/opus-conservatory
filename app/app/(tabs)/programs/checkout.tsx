import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import {
  PurchaseMethodSelector,
  type PurchaseMethod,
} from '@/components/programs/PurchaseMethodSelector';
import { ScribbleStar } from '@/components/scribble/Scribble';
import { useAppStyles } from '@/components/useAppStyles';

export default function CheckoutScreen() {
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const router = useRouter();
  const { styles, colors } = useAppStyles();
  const [method, setMethod] = useState<PurchaseMethod>('Stripe');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.rowStart}>
          <Text style={styles.sectionTitle}>You're almost there</Text>
          <ScribbleStar color={colors.tint} size={18} />
        </View>
        <Text style={styles.textMuted}>Choose how you'd like to pay for bank #{programId}.</Text>
      </View>
      <PurchaseMethodSelector value={method} onChange={setMethod} />
      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Confirm purchase</Text>
      </Pressable>
    </ScrollView>
  );
}
