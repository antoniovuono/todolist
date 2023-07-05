import { useState } from "react";
import { ITask } from "../components/Task";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [description, setDescription] = useState("");

  const completedTasks = tasks.filter((task) => task.isChecked === true);

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
    setTasks((prevState) =>
      prevState.map((task) => {
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

  const handleDeleteTask = (id: string) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks.splice(taskIndex, 1);

    setTasks(updatedTasks);
  };

  return {
    tasks,
    description,
    setDescription,
    handleAddTask,
    handleMarkedAsDone,
    completedTasks,
    handleDeleteTask,
  };
};
