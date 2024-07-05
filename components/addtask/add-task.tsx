import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleAddTask = () => {
    // Here you would typically add the task to your state or database
    console.log("Adding task:", taskTitle);
    // Navigate back to the home screen
    router.back();
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top }} className="bg-white p-4">
      <TextInput
        className="border border-gray-300 p-3 mb-4 rounded"
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        onPress={handleAddTask}
        className="p-3 bg-blue-500 rounded"
      >
        <Text className="text-white text-center font-bold">Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
