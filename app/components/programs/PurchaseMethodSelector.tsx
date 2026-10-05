import { Pressable, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const METHODS = [
  { key: 'Stripe', icon: '💳' },
  { key: 'Venmo', icon: '📱' },
  { key: 'Zelle', icon: '🏦' },
] as const;

export type PurchaseMethod = (typeof METHODS)[number]['key'];

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
          const isSelected = method.key === value;
          return (
            <Pressable
              key={method.key}
              onPress={() => onChange(method.key)}
              style={[styles.pill, { flex: 1, alignItems: 'center' }, isSelected && styles.pillActive]}>
              <Text style={[styles.pillText, isSelected && styles.pillTextActive]}>
                {method.icon} {method.key}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
