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
  description: string;
  isChecked: boolean;
}

export const Task = ({ description, isChecked }: ITask) => {
  return (
    <Container>
      <CheckContent>{isChecked ? <CheckedIcon /> : <CheckIcon />}</CheckContent>

      <DescriptionContent>
        <Description isChecked={isChecked} numberOfLines={2}>
          {description}
        </Description>
      </DescriptionContent>

      <DeleteContent>
        <DeleteIcon />
      </DeleteContent>
    </Container>
  );
};
