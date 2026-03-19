import { TextInput, View } from "react-native";

export default function AddTextNote() {
  return (
    <View className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
        <TextInput
          placeholder="Title"
          className="mb-2 text-lg font-semibold text-neutral-800"
        />

        <TextInput
          placeholder="Start typing..."
          multiline
          className="text-base text-neutral-500"
        />
      </View>
    </View>
  );
}
