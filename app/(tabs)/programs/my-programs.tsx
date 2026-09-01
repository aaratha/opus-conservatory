import { ScrollView, Text, View } from 'react-native';

const myPrograms = [
  { id: '1', name: '8-lesson bank', instructor: 'Dana Ruiz', lessonsUsed: 3, lessonsTotal: 8 },
  { id: '2', name: '4-lesson bank', instructor: 'Marcus Lee', lessonsUsed: 4, lessonsTotal: 4 },
];

export default function MyProgramsScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-neutral-950"
      contentContainerClassName="gap-3 p-5">
      {myPrograms.map((program) => (
        <View key={program.id} className="gap-2 rounded-xl bg-neutral-100 px-4 py-4 dark:bg-neutral-900">
          <Text className="text-base font-semibold text-black dark:text-white">
            {program.name}
          </Text>
          <View className="flex-row justify-between">
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">Instructor</Text>
            <Text className="text-sm text-black dark:text-white">{program.instructor}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">
              Lessons left / bank
            </Text>
            <Text className="text-sm text-black dark:text-white">
              {program.lessonsTotal - program.lessonsUsed} / {program.lessonsTotal}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
