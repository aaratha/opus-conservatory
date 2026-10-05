import { ActivityIndicator, Text, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';
import { useHomeNotices } from '@/lib/useHomeNotices';

function formatShortDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function NoticesSection() {
  const { styles, colors } = useAppStyles();
  const { notices, nextEvent, loading, error } = useHomeNotices();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🔔 Notices & upcoming events</Text>

      {loading && <ActivityIndicator />}

      {!loading && error && <Text style={styles.textDanger}>{error}</Text>}

      {!loading && !error && (
        <View style={styles.section}>
          {nextEvent && (
            <View style={[styles.card, styles.row]}>
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={styles.textMedium}>{nextEvent.title}</Text>
                {nextEvent.location && (
                  <Text style={styles.textSmallMuted}>{nextEvent.location}</Text>
                )}
              </View>
              <View style={[styles.badge, { backgroundColor: colors.tint }]}>
                <Text style={[styles.badgeText, { color: colors.tintText }]}>
                  {formatShortDate(nextEvent.startDateTime)}
                </Text>
              </View>
            </View>
          )}

          {notices.map((notice) => (
            <View key={notice._id} style={[styles.card, styles.row]}>
              <Text style={styles.textSmall}>{notice.text}</Text>
              {notice.date && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{formatShortDate(notice.date)}</Text>
                </View>
              )}
            </View>
          ))}

          {!nextEvent && notices.length === 0 && (
            <Text style={styles.textMuted}>No notices right now — check back soon.</Text>
          )}
        </View>
      )}
    </View>
  );
}
