import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Todo App" }} />
        <Stack.Screen name="add-task" options={{ title: "Add New Task" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
