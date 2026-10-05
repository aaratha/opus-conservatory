import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAppStyles } from '@/components/useAppStyles';

export function ManualLoggingMode() {
  const { styles, colors } = useAppStyles();
  const [minutes, setMinutes] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.card}>
      <View style={local.field}>
        <Text style={styles.textSmallMuted}>Minutes practiced</Text>
        <TextInput
          value={minutes}
          onChangeText={setMinutes}
          keyboardType="number-pad"
          placeholder="30"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
      </View>
      <View style={local.field}>
        <Text style={styles.textSmallMuted}>Notes</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="What did you work on?"
          placeholderTextColor={colors.muted}
          multiline
          style={[styles.input, local.notes]}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>📝 Log practice</Text>
      </Pressable>
    </View>
  );
}

const local = StyleSheet.create({
  field: {
    gap: 8,
  },
  notes: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
});
