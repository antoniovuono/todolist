import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   width: 18%;
   height: 52px;
   border-radius: 6px;
   background-color: ${({theme}) => theme.colors.DARK_BLUE};
   justify-content: center;
   align-items: center;
`;