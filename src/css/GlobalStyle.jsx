import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }

    body{
    background-color: var(--color6);
    }

    :root{
        --color1: #040D09;
        --color2: #11261A;
        --color3: #1E402D;
        --color4: #2A593E;
        --color5: #9CA6A0;
        --color6: #EBEBF2;
        --color7: #fff;
        --transition: 0.5s;
    }
`;

export default GlobalStyle;
