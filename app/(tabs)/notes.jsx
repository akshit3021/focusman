import MasonryList from "@react-native-seoul/masonry-list";
import { useRouter } from "expo-router";
import {
  NotePencil,
  PencilSimpleLine,
  Plus,
  TextT,
} from "phosphor-react-native";
import { useState } from "react";
import { Dimensions, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function NotesScreen() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const notes = [
    { id: "1", title: "Grocery", content: "Milk\nEggs\nBread\nButter\nCheese" },
    { id: "2", title: "Ideas", content: "Wallpaper app\nAI notes\nTracker" },
    {
      id: "3",
      title: "Books",
      content: "Atomic Habits\nDeep Work\nPsychology of Money\nMore reading...",
    },
    {
      id: "4",
      title: "Workout",
      content: "Push\nPull\nLegs\nRepeat\nCardio\nStretch\nHydrate",
    },
    {
      id: "5",
      title: "Weekend",
      content: "Gym\nCode\nRelax\nMovie\nSleep\nFriends",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      {/* Header */}
      <View className="mb-5 flex-row items-center gap-3 border-b border-neutral-100 bg-white px-5 pb-4 pt-3 shadow-xl">
        <NotePencil size={22} color="#262626" weight="duotone" />
        <Text
          className="text-xl text-neutral-800"
          style={{ fontFamily: "Andika_400Regular" }}
        >
          Notes
        </Text>
      </View>

      {/* Masonry List */}
      <MasonryList
        data={notes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 120,
        }}
        renderItem={({ item }) => (
          <View
            style={{ width: width / 2 - 12 }}
            className="mb-3 max-h-64 rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl"
          >
            <Text className="mb-1 font-semibold text-neutral-800">
              {item.title}
            </Text>

            <Text className="text-sm text-neutral-500">{item.content}</Text>
          </View>
        )}
      />

      {/* FAB */}
      <Pressable
        onPress={() => setVisible(true)}
        className="absolute bottom-56 right-6 h-16 w-16 items-center justify-center rounded-full bg-blue-500 shadow-xl"
      >
        <Plus size={30} color="white" weight="bold" />
      </Pressable>

      {/* Modal (Google Keep style) */}
      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          onPress={() => setVisible(false)}
          // className="flex-1 justify-end bg-black/30"
          className="flex-1 justify-end"
        >
          <View className="rounded-t-3xl border border-neutral-100 bg-white p-6 shadow-xl">
            <Text className="mb-6 text-lg font-semibold text-neutral-800">
              Create Note
            </Text>

            <View className="flex-row justify-around">
              {/* Text Note */}
              <Pressable
                onPress={() => {
                  setVisible(false);
                  router.push("/add-text-note");
                }}
                className="items-center gap-2"
              >
                <View className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
                  <TextT size={28} color="#2563eb" weight="duotone" />
                </View>

                <Text className="text-neutral-500">Text</Text>
              </Pressable>

              {/* Drawing */}
              <Pressable
                onPress={() => {
                  setVisible(false);
                  router.push("/add-drawing");
                }}
                className="items-center gap-2"
              >
                <View className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
                  <PencilSimpleLine
                    size={28}
                    color="#2563eb"
                    weight="duotone"
                  />
                </View>

                <Text className="text-neutral-500">Drawing</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
