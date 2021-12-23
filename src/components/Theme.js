import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    text: "#000",
};

export const darkTheme = {
    body: "#000",
    text: "#fff",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
`
