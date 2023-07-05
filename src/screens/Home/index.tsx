import React, { useState } from "react";

import {
  Container,
  Header,
  SearchContent,
  TaskGroupContent,
  TaskInfosContent,
  TaskNumber,
  TaskNumberContent,
  TasksInfos,
  TasksMenuContent,
} from "./styles";
import Logotipo from "../../assets/images/logo.svg";
import { SearchInput } from "../../components/Search/SearchInput";
import { SearchButton } from "../../components/Search/SearchButton";
import { useTheme } from "styled-components";
import { Divider } from "../../components/Divider";
import { NoneRegisteredToast } from "../../components/NoneRegisteredToast";
import { ITask, Task } from "../../components/Task";
import { useTask } from "../../hooks/useTask";
import { FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";

export const Home = () => {
  const { colors } = useTheme();
  const {
    tasks,
    description,
    setDescription,
    handleAddTask,
    handleMarkedAsDone,
  } = useTask();

  return (
    <Container>
      <Header>
        <Logotipo width={120} height={40} style={{ marginTop: 20 }} />

        <SearchContent>
          <SearchInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.DARK_300}
            autoCapitalize="none"
            maxLength={30}
            onChangeText={setDescription}
            value={description}
          />

          <SearchButton activeOpacity={0.8} onPress={handleAddTask} />
        </SearchContent>
      </Header>
      <TasksMenuContent>
        <TaskInfosContent>
          <TasksInfos>Criadas</TasksInfos>

          <TaskNumberContent>
            <TaskNumber>{tasks.length}</TaskNumber>
          </TaskNumberContent>
        </TaskInfosContent>

        <TaskInfosContent>
          <TasksInfos isPurple>Concluídas</TasksInfos>

          <TaskNumberContent>
            <TaskNumber>0</TaskNumber>
          </TaskNumberContent>
        </TaskInfosContent>
      </TasksMenuContent>

      {tasks.length ? (
        <TaskGroupContent>
          <FlashList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                onMarkedAsDone={() => handleMarkedAsDone(item.id as string)}
                description={item.description}
                isChecked={item.isChecked}
              />
            )}
            estimatedItemSize={10}
            showsVerticalScrollIndicator={false}
          />
        </TaskGroupContent>
      ) : (
        <>
          <Divider />
          <NoneRegisteredToast />
        </>
      )}
    </Container>
  );
};
