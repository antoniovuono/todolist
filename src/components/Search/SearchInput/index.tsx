import React from "react";

import { InputText } from "./styles";
import { TextInputProps } from "react-native";

export const SearchInput = ({ ...rest }: TextInputProps) => {
  return <InputText {...rest} />;
};
