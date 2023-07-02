import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.DARK_600};
`;

export const Header = styled.View`
   width: 100%;
   height: 173px;
   background-color: ${({theme}) => theme.colors.DARK_700};
   justify-content: center;
   align-items: center;
`;

export const SearchContent = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   position: absolute;
   top: 145px;
`;