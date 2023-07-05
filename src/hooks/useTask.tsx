import { useState } from "react";
import { ITask } from "../components/Task";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!description) {
      return Alert.alert(
        "Erro",
        "Você precisa entrar com uma descrição da sua tarefa"
      );
    }

    const newTask = {
      id: uuid.v4() as string,
      description: description,
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
    setDescription("");
  };

  const handleMarkedAsDone = (id: string) => {
    setTasks((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isChecked: !task.isChecked,
          };
        }
        return task;
      })
    );
  };

  return {
    tasks,
    description,
    setDescription,
    handleAddTask,
    handleMarkedAsDone,
  };
};
