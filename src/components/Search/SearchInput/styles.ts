import { TextInput, TextInputProps } from "react-native";
import styled, { css } from 'styled-components/native';

export const InputText = styled.TextInput`
    width: 80%;
    height: 54px;
    padding: 16px;
    border-radius: 6px;
    ${({theme}) => css`
        background-color: ${theme.colors.DARK_500};
        color: ${theme.colors.DARK_100};
        font-family: ${theme.fonts.PRIMARY_REGULAR};
    `};
`;

