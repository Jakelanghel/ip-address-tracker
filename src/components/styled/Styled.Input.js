import styled from "styled-components";

export const StyledInput = styled.input`
    width: 70%;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 1.25rem 0;
    padding-left: 1.5rem;
    /* margin-bottom: 2rem; */
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: ${({ theme }) => theme.colors.white};
`;
