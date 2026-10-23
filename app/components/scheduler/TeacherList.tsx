import { Image, StyleSheet, Switch, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { useAppStyles } from '@/components/useAppStyles';
import { colorForName, hairline, radii, spacing } from '@/constants/theme';
import { urlFor, type Instructor } from '@/lib/sanity';

export function TeacherList({
  instructors,
  assignedInstructorId,
  visibleIds,
  onToggle,
}: {
  instructors: Instructor[];
  assignedInstructorId: string | null;
  visibleIds: Set<string>;
  onToggle: (id: string) => void;
}) {
  const { styles, colors } = useAppStyles();

  return (
    <View style={{ gap: spacing.sm }}>
      <Text style={styles.eyebrow}>Teachers</Text>
      {instructors.map((instructor) => {
        const isAssigned = instructor._id === assignedInstructorId;
        const isVisible = visibleIds.has(instructor._id);
        const swatch = colorForName(instructor.name);

        return (
          <View
            key={instructor._id}
            style={[
              local.row,
              { borderColor: colors.border, backgroundColor: colors.surface },
              isAssigned && { borderColor: colors.tint, backgroundColor: colors.accentSoft },
            ]}>
            <View style={[local.swatch, { backgroundColor: swatch }]} />
            {instructor.photo ? (
              <Image
                source={{ uri: urlFor(instructor.photo).width(72).height(72).url() }}
                style={local.photo}
              />
            ) : (
              <Avatar name={instructor.name} size={32} />
            )}
            <View style={{ flex: 1 }}>
              <Text style={styles.textMedium}>{instructor.name}</Text>
              {isAssigned ? (
                <Text style={[styles.textSmallMuted, { color: colors.tint, fontWeight: '700' }]}>
                  Your teacher
                </Text>
              ) : instructor.title ? (
                <Text style={styles.textSmallMuted}>{instructor.title}</Text>
              ) : null}
            </View>
            <Switch
              value={isVisible}
              onValueChange={() => onToggle(instructor._id)}
              trackColor={{ false: colors.border, true: colors.tint }}
              thumbColor={colors.background}
            />
          </View>
        );
      })}
    </View>
  );
}

const local = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: hairline,
    borderRadius: radii.sm,
    padding: spacing.sm,
  },
  swatch: {
    width: 5,
    height: 28,
    borderRadius: radii.none,
  },
  photo: {
    width: 32,
    height: 32,
    borderRadius: radii.pill,
  },
});
