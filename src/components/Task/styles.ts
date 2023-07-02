import styled, { css } from 'styled-components/native';

export const Container = styled.View`
   border-radius: 8px;
   background-color: ${({theme}) => theme.colors.DARK_500};
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 20px;
   width: 100%;
   margin-bottom: 10px;
`;

export const CheckContent = styled.TouchableOpacity`
    width: 10%;
`;

export const DescriptionContent = styled.View`
    width: 80%;
`;

export const Description = styled.Text<{isChecked?: boolean}>`
    font-size: 14px;
   

    ${({theme, isChecked}) => css`
        color: ${isChecked ? theme.colors.DARK_300 : theme.colors.DARK_100};
        font-family: ${theme.fonts.PRIMARY_REGULAR};
    `}

    ${({isChecked, theme}) => isChecked && css`
        text-decoration: line-through ${theme.colors.DARK_300};
    `}
`;

export const DeleteContent = styled.TouchableOpacity`
    width: 10%;
`;