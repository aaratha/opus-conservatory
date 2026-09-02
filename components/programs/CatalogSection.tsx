import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const catalog = [
  { id: '1', name: '4-lesson bank', price: '$140' },
  { id: '2', name: '8-lesson bank', price: '$260' },
  { id: '3', name: '12-lesson bank', price: '$375' },
];

export function CatalogSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Catalog</Text>
      <View style={styles.section}>
        {catalog.map((program) => (
          <View key={program.id} style={[styles.card, styles.row]}>
            <View>
              <Text style={styles.textMedium}>{program.name}</Text>
              <Text style={styles.textSmallMuted}>{program.price}</Text>
            </View>
            <Link
              href={{ pathname: '/programs/checkout', params: { programId: program.id } }}
              asChild>
              <Pressable style={StyleSheet.flatten([styles.pill, styles.pillActive])}>
                <Text style={[styles.pillText, styles.pillTextActive, { fontWeight: '600' }]}>
                  Buy
                </Text>
              </Pressable>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
