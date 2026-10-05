import { useMemo, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { useAppStyles } from '@/components/useAppStyles';
import { plainTextFromBio, urlFor, type Instructor } from '@/lib/sanity';
import { useInstructors } from '@/lib/useInstructors';

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const { styles } = useAppStyles();
  const [expanded, setExpanded] = useState(false);
  const bio = plainTextFromBio(instructor.bio);

  return (
    <Pressable
      style={[styles.card]}
      onPress={() => bio && setExpanded((value) => !value)}
    >
      <View style={styles.rowStart}>
        {instructor.photo ? (
          <Image
            source={{ uri: urlFor(instructor.photo).width(96).height(96).url() }}
            style={{ width: 44, height: 44, borderRadius: 999 }}
          />
        ) : (
          <Avatar name={instructor.name} />
        )}
        <View style={{ flex: 1, gap: 6 }}>
          <Text style={styles.textMedium}>{instructor.name}</Text>
          {instructor.title && <Text style={styles.textMuted}>{instructor.title}</Text>}
          {instructor.locations && instructor.locations.length > 0 && (
            <Text style={styles.textSmallMuted}>
              {instructor.locations.map((loc) => loc.name).join(' · ')}
            </Text>
          )}
          {instructor.instruments && instructor.instruments.length > 0 && (
            <View style={styles.wrap}>
              {instructor.instruments.map((instrument) => (
                <View key={instrument} style={styles.badge}>
                  <Text style={styles.badgeText}>🎵 {instrument}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
      {expanded && bio && (
        <>
          <View style={[styles.divider, { marginVertical: 12 }]} />
          <Text style={styles.textSmall}>{bio}</Text>
        </>
      )}
    </Pressable>
  );
}

export default function InstructorsScreen() {
  const { styles } = useAppStyles();
  const { instructors, locations, loading, error } = useInstructors();
  const [locationFilter, setLocationFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!locationFilter) return instructors;
    return instructors.filter((instructor) =>
      instructor.locations?.some((loc) => loc.slug === locationFilter)
    );
  }, [instructors, locationFilter]);

  if (loading) {
    return (
      <View style={[styles.screen, { alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.screen, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.textDanger}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.list}>
      {locations.length > 0 && (
        <View style={styles.wrap}>
          <Pressable
            style={[styles.pill, locationFilter === null && styles.pillActive]}
            onPress={() => setLocationFilter(null)}
          >
            <Text style={[styles.pillText, locationFilter === null && styles.pillTextActive]}>
              All Locations
            </Text>
          </Pressable>
          {locations.map((loc) => (
            <Pressable
              key={loc._id}
              style={[styles.pill, locationFilter === loc.slug.current && styles.pillActive]}
              onPress={() => setLocationFilter(loc.slug.current)}
            >
              <Text
                style={[
                  styles.pillText,
                  locationFilter === loc.slug.current && styles.pillTextActive,
                ]}
              >
                {loc.name}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {filtered.length === 0 && (
        <Text style={styles.textMuted}>No instructors match these filters yet.</Text>
      )}

      {filtered.map((instructor) => (
        <InstructorCard key={instructor._id} instructor={instructor} />
      ))}
    </ScrollView>
  );
}
