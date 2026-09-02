import { Pressable, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const METHODS = ['Stripe', 'Venmo', 'Zelle'] as const;

export type PurchaseMethod = (typeof METHODS)[number];

export function PurchaseMethodSelector({
  value,
  onChange,
}: {
  value: PurchaseMethod;
  onChange: (value: PurchaseMethod) => void;
}) {
  const { styles } = useAppStyles();

  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.textSmallMuted}>Purchase method</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {METHODS.map((method) => {
          const isSelected = method === value;
          return (
            <Pressable
              key={method}
              onPress={() => onChange(method)}
              style={[
                styles.pill,
                { flex: 1, alignItems: 'center' },
                isSelected && styles.pillActive,
              ]}>
              <Text
                style={[
                  styles.pillText,
                  { fontWeight: '500' },
                  isSelected && styles.pillTextActive,
                ]}>
                {method}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
