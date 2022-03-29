import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    padding: 0.75rem 1.75rem;
    margin-bottom: 8rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.veryDarkGray};
`;
