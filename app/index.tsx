import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TaskList from "../components/TaskList/TaskList";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }} className="bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Advanced Todo App</Text>
        <TaskList />
        <Link href="/add-task" asChild>
          <TouchableOpacity className="mt-4 p-3 bg-blue-500 rounded">
            <Text className="text-white text-center font-bold">
              Add New Task
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
