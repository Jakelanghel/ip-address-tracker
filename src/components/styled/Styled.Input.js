import styled from "styled-components";

export const StyledInput = styled.input`
    font-size: 1.25rem;
    width: 75%;
    font-weight: 500;
    padding: 1.25rem 2rem;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &&:hover {
        cursor: pointer;
    }

    @media (max-width: 375px) {
        width: 65%;
    }
`;
