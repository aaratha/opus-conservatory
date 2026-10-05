import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

const catalog = [
  { id: '1', lessons: 4, price: 140, popular: false },
  { id: '2', lessons: 8, price: 260, popular: true },
  { id: '3', lessons: 12, price: 375, popular: false },
];

export function CatalogSection() {
  const { styles } = useAppStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Catalog</Text>
      <View style={styles.section}>
        {catalog.map((program) => (
          <View key={program.id} style={[styles.card, program.popular && styles.cardHighlight]}>
            {program.popular ? <Text style={styles.eyebrow}>Most popular</Text> : null}
            <View style={styles.row}>
              <View>
                <Text style={styles.textMedium}>{program.lessons}-lesson bank</Text>
                <Text style={styles.textSmallMuted}>
                  ${(program.price / program.lessons).toFixed(0)} per lesson
                </Text>
              </View>
              <Text style={styles.heroTitle}>${program.price}</Text>
            </View>
            <Link
              href={{ pathname: '/programs/checkout', params: { programId: program.id } }}
              asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Buy this bank</Text>
              </Pressable>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
