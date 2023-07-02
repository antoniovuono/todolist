import styled, { css } from 'styled-components/native';

export const Container = styled.View`
   justify-content: center;
   align-items: center;
   padding: 48px;
`;

export const Description = styled.Text<{ isPrimary?: boolean}>`
    font-size: 14px;
    margin-top: 5px;
    ${({theme, isPrimary}) => css`
        font-family: ${isPrimary ? theme.fonts.PRIMARY_BOLD : theme.fonts.PRIMARY_REGULAR};
        color: ${theme.colors.DARK_300};
    `}
`;