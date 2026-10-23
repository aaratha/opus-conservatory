// Mock weekly availability per instructor. There is no Sanity schema for
// lesson availability yet, so this generates a stable (not random-per-render)
// pattern from a hash of the instructor id. Swap the body of
// `getWeeklyAvailability` for a real fetch once that schema exists — callers
// only depend on the AvailabilitySlot[] shape below.
export const CALENDAR_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const;
export const CALENDAR_HOURS = [9, 10, 11, 13, 14, 15, 16, 17, 18];

export type CalendarDay = (typeof CALENDAR_DAYS)[number];

export type AvailabilitySlot = {
  day: CalendarDay;
  hour: number;
};

function hashString(value: string): number {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash;
}

export function getWeeklyAvailability(instructorId: string): AvailabilitySlot[] {
  const slots: AvailabilitySlot[] = [];
  for (const day of CALENDAR_DAYS) {
    for (const hour of CALENDAR_HOURS) {
      const n = hashString(`${instructorId}-${day}-${hour}`);
      if (n % 100 < 35) {
        slots.push({ day, hour });
      }
    }
  }
  return slots;
}

export function slotKey(day: CalendarDay, hour: number) {
  return `${day}-${hour}`;
}

export function formatHour(hour: number) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:00 ${period}`;
}
