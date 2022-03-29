import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const StyledTracker = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("./images/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    label {
        font-size: 1.75rem;
        font-weight: 500;
        padding: 2.5rem 0;
        color: ${({ theme }) => theme.colors.white};
    }

    .container-input {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    p {
        font-size: 0.75rem;
        letter-spacing: 1px;
        position: absolute;
        top: 160px;
        left: 48px;
        color: ${({ theme }) => theme.colors.errorRed};
    }
`;
