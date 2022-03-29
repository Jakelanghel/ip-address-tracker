import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 1.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.veryDarkGray};
    opacity: 0.7;

    &&:hover {
        opacity: 1;
    }

    &&:focus {
        opacity: 1;
    }
`;
