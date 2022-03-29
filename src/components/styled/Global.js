import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box
    }

    body {
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 18px;

    }
    h1,
    h2,
    p {
        margin: 0;
        padding: 0;
    }

    main {
        z-index: 0;
    }

`;
