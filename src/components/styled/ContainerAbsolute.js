import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const ContainerAbsolute = styled.div`
    width: 90%;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    padding-bottom: 0;
    border-radius: 20px;
    z-index: 1;
`;
