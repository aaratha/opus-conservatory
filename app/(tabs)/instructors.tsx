import { ScrollView, Text, View } from 'react-native';

const instructors = [
  { id: '1', name: 'Dana Ruiz', instrument: 'Piano' },
  { id: '2', name: 'Marcus Lee', instrument: 'Guitar' },
  { id: '3', name: 'Priya Nair', instrument: 'Violin' },
];

export default function InstructorsScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-3 p-5">
      {instructors.map((instructor) => (
        <View
          key={instructor.id}
          className="flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-4 dark:bg-neutral-900">
          <Text className="text-base font-medium text-black dark:text-white">
            {instructor.name}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400">
            {instructor.instrument}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
