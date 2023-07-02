import React from "react";

import {
  Container,
  Header,
  SearchContent,
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

export const Home = () => {
  const { colors } = useTheme();

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
          />

          <SearchButton />
        </SearchContent>
      </Header>

      <TasksMenuContent>
        <TaskInfosContent>
          <TasksInfos>Criadas</TasksInfos>

          <TaskNumberContent>
            <TaskNumber>0</TaskNumber>
          </TaskNumberContent>
        </TaskInfosContent>

        <TaskInfosContent>
          <TasksInfos isPurple>Concluídas</TasksInfos>

          <TaskNumberContent>
            <TaskNumber>0</TaskNumber>
          </TaskNumberContent>
        </TaskInfosContent>
      </TasksMenuContent>
    </Container>
  );
};
