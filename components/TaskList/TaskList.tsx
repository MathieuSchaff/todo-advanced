import React from "react";
import { FlatList, Text, TouchableOpacity, ListRenderItem } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: "1", title: "Learn React Native", completed: false },
  { id: "2", title: "Build Advanced Todo App", completed: true },
  { id: "3", title: "Implement Voice Input", completed: false },
];

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, completed, onToggle }) => (
  <TouchableOpacity
    onPress={onToggle}
    className="flex-row items-center p-4 border-b border-gray-200"
  >
    <Ionicons
      name={completed ? "checkbox-outline" : "square-outline"}
      size={24}
      color={completed ? "green" : "gray"}
    />
    <Text
      className={`text-lg ml-2 ${
        completed ? "line-through text-gray-500" : ""
      }`}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default function TaskList() {
  const toggleTask = (id: string) => {
    console.log("Toggling task:", id);
  };

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem
      title={item.title}
      completed={item.completed}
      onToggle={() => toggleTask(item.id)}
    />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
