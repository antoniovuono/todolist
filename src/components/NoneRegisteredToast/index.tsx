import React from "react";
import ClipboardIcon from "../../assets/images/clipboard.svg";
import { Container, Description } from "./styles";

export const NoneRegisteredToast = () => {
  return (
    <Container>
      <ClipboardIcon width={56} height={56} style={{ marginBottom: 20 }} />

      <Description isPrimary>
        Você ainda não tem tarefas cadastradas
      </Description>
      <Description>Crie tarefas e organize seus itens a fazer</Description>
    </Container>
  );
};
