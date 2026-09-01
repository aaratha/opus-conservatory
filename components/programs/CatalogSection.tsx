import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const catalog = [
  { id: '1', name: '4-lesson bank', price: '$140' },
  { id: '2', name: '8-lesson bank', price: '$260' },
  { id: '3', name: '12-lesson bank', price: '$375' },
];

export function CatalogSection() {
  return (
    <View className="gap-3">
      <Text className="text-lg font-semibold text-black dark:text-white">Catalog</Text>
      <View className="gap-2">
        {catalog.map((program) => (
          <View
            key={program.id}
            className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
            <View>
              <Text className="text-sm font-medium text-black dark:text-white">{program.name}</Text>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">{program.price}</Text>
            </View>
            <Link href={{ pathname: '/programs/checkout', params: { programId: program.id } }} asChild>
              <Pressable className="rounded-full bg-blue-600 px-4 py-2 dark:bg-blue-500">
                <Text className="text-sm font-semibold text-white">Buy</Text>
              </Pressable>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
