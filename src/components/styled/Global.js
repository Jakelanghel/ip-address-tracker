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
        display: flex;
        flex-direction: column;
    }

   

    .box-shadow {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

`;
