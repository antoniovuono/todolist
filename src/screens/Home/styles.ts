import styled, { css } from 'styled-components/native';

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

export const TasksMenuContent = styled.View`
   width: 100%;
   padding: 10px 24px;
   margin-top: 28px;
   flex-direction: row;
   justify-content: space-between;
`;

export const TaskInfosContent = styled.View`
   justify-content: center;
   align-items: center;
   padding: 10px;
   flex-direction: row;
`;

export const TasksInfos = styled.Text<{ isPurple?: boolean }>`
   font-size: 14px;
   
   ${({theme, isPurple}) => css`
      color: ${isPurple ? theme.colors.PURPLE : theme.colors.LIGHT_BLUE};
      font-family: ${theme.fonts.PRIMARY_BOLD};
   `}
`;

export const TaskNumberContent = styled.View`
   background-color: ${({theme}) => theme.colors.DARK_500};
   padding: 6px;
   border-radius: 10px;
   justify-content: center;
   margin-left: 6px;
`;

export const TaskNumber = styled.Text<{ isPurple?: boolean }>`
   font-size: 12px;
   ${({theme, isPurple}) => css`
      color: ${theme.colors.DARK_100};
      font-family: ${theme.fonts.PRIMARY_BOLD};
   `}
`;


