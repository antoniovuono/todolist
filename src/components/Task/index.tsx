import React from "react";
import CheckIcon from "../../assets/images/check.svg";
import CheckedIcon from "../../assets/images/done.svg";
import DeleteIcon from "../../assets/images/delete.svg";

import {
  CheckContent,
  Container,
  DeleteContent,
  Description,
  DescriptionContent,
} from "./styles";

export interface ITask {
  id?: string;
  description: string;
  isChecked: boolean;
  onMarkedAsDone?: (id: string) => void;
}

export const Task = ({ description, isChecked, onMarkedAsDone }: ITask) => {
  return (
    <Container>
      <CheckContent onPress={onMarkedAsDone}>
        {isChecked ? <CheckedIcon /> : <CheckIcon />}
      </CheckContent>

      <DescriptionContent>
        <Description isChecked={isChecked} numberOfLines={2}>
          {description}
        </Description>
      </DescriptionContent>

      <DeleteContent>
        <DeleteIcon height={40} width={40} />
      </DeleteContent>
    </Container>
  );
};
