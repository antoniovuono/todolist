import { useState } from "react";
import { ITask } from "../components/Task";
import { Alert } from "react-native";

export const useTask = () => {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleAddTask = () => {
    if (!description) {
      return Alert.alert(
        "Erro",
        "Você precisa entrar com uma descrição da sua tarefa"
      );
    }

    const newTask = {
      id: "1",
      description: description,
      isChecked: false,
    };

    setTask([...tasks, newTask]);
    setDescription("");
  };

  return {
    tasks,
    description,
    setDescription,
    handleAddTask,
    isChecked,
  };
};
