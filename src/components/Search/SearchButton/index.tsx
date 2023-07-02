import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

export const SearchButton = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <Container {...rest}>
      <AntDesign name="pluscircleo" size={15} color="white" />
    </Container>
  );
};
