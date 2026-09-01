import { Pressable, Text, View } from 'react-native';

const METHODS = ['Stripe', 'Venmo', 'Zelle'] as const;

export type PurchaseMethod = (typeof METHODS)[number];

export function PurchaseMethodSelector({
  value,
  onChange,
}: {
  value: PurchaseMethod;
  onChange: (value: PurchaseMethod) => void;
}) {
  return (
    <View className="gap-2">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">Purchase method</Text>
      <View className="flex-row gap-2">
        {METHODS.map((method) => {
          const isSelected = method === value;
          return (
            <Pressable
              key={method}
              onPress={() => onChange(method)}
              className={`flex-1 items-center rounded-xl py-3 ${
                isSelected ? 'bg-blue-600 dark:bg-blue-500' : 'bg-neutral-100 dark:bg-neutral-900'
              }`}>
              <Text
                className={`text-sm font-medium ${
                  isSelected ? 'text-white' : 'text-black dark:text-white'
                }`}>
                {method}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
