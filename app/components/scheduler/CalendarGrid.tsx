import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScribbleCircle } from '@/components/scribble/Scribble';
import { useAppStyles } from '@/components/useAppStyles';
import { colorForName, hairline, radii, spacing } from '@/constants/theme';
import {
  CALENDAR_DAYS,
  CALENDAR_HOURS,
  formatHour,
  getWeeklyAvailability,
  slotKey,
  type CalendarDay,
} from '@/lib/scheduler/availability';
import type { Instructor } from '@/lib/sanity';

const ROW_HEIGHT = 60;
const COLUMN_WIDTH = 132;
const HOUR_COLUMN_WIDTH = 56;
const HEADER_HEIGHT = 36;

export type SelectedSlot = {
  instructor: Instructor;
  day: CalendarDay;
  hour: number;
};

export function CalendarGrid({
  visibleInstructors,
  selectedSlot,
  onSelectSlot,
}: {
  visibleInstructors: Instructor[];
  selectedSlot: SelectedSlot | null;
  onSelectSlot: (slot: SelectedSlot) => void;
}) {
  const { styles, colors } = useAppStyles();

  const availability = visibleInstructors.map((instructor) => ({
    instructor,
    slots: new Set(
      getWeeklyAvailability(instructor._id).map((slot) => slotKey(slot.day, slot.hour))
    ),
  }));

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: HOUR_COLUMN_WIDTH }}>
          <View style={{ height: HEADER_HEIGHT }} />
          {CALENDAR_HOURS.map((hour) => (
            <View
              key={hour}
              style={[local.hourCell, { borderTopColor: colors.border, height: ROW_HEIGHT }]}>
              <Text style={styles.textSmallMuted}>{formatHour(hour)}</Text>
            </View>
          ))}
        </View>

        {CALENDAR_DAYS.map((day) => (
          <View
            key={day}
            style={[local.dayColumn, { width: COLUMN_WIDTH, borderLeftColor: colors.border }]}>
            <View
              style={[
                local.dayHeader,
                { height: HEADER_HEIGHT, borderBottomColor: colors.border },
              ]}>
              <Text style={styles.sectionTitle}>{day}</Text>
            </View>

            {CALENDAR_HOURS.map((hour) => {
              const key = slotKey(day, hour);
              const openFor = availability.filter(({ slots }) => slots.has(key));

              return (
                <View
                  key={hour}
                  style={[
                    local.slotCell,
                    { height: ROW_HEIGHT, borderTopColor: colors.border },
                  ]}>
                  {openFor.slice(0, 2).map(({ instructor }) => {
                    const isSelected =
                      selectedSlot?.instructor._id === instructor._id &&
                      selectedSlot.day === day &&
                      selectedSlot.hour === hour;
                    const teacherColor = colorForName(instructor.name);

                    const chip = (
                      <Pressable
                        onPress={() => onSelectSlot({ instructor, day, hour })}
                        style={[
                          local.chip,
                          {
                            borderColor: teacherColor,
                            backgroundColor: isSelected ? colors.accentSoft : colors.background,
                          },
                        ]}>
                        <Text numberOfLines={1} style={styles.textSmallMuted}>
                          {instructor.name.split(' ')[0]}
                        </Text>
                      </Pressable>
                    );

                    return isSelected ? (
                      <ScribbleCircle key={instructor._id} color={colors.tint} inset={4}>
                        {chip}
                      </ScribbleCircle>
                    ) : (
                      <View key={instructor._id}>{chip}</View>
                    );
                  })}
                  {openFor.length > 2 && (
                    <Text style={styles.textSmallMuted}>+{openFor.length - 2} more</Text>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const local = StyleSheet.create({
  hourCell: {
    borderTopWidth: hairline,
    paddingTop: spacing.xs,
    alignItems: 'flex-end',
    paddingRight: spacing.sm,
  },
  dayColumn: {
    borderLeftWidth: hairline,
  },
  dayHeader: {
    borderBottomWidth: hairline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotCell: {
    borderTopWidth: hairline,
    padding: spacing.xs,
    gap: spacing.xs,
  },
  chip: {
    borderWidth: hairline * 1.5,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
});
