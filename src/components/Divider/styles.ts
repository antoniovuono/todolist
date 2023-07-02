import styled from 'styled-components/native';

export const Container = styled.View`
   padding: 0 24px;
`;

export const DividerLine = styled.View`
    height: 1px;
   width: 100%;
   background-color: ${({theme}) => theme.colors.BORDER};
`;