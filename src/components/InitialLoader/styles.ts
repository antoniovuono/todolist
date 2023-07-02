import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.DARK_600};
`;

export const Loader = styled.ActivityIndicator.attrs(({theme}) => ({
    size: 'large',
    color: theme.colors.LIGHT_BLUE
}))``;