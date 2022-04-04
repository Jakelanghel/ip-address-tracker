import styled from "styled-components";

export const StyledOutput = styled.div`
    text-align: center;

    h2 {
        font-size: 0.75rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.darkGray};
        padding-bottom: 0.5rem;
    }

    p {
        font-size: 1.15rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: capitalize;
        padding-bottom: 1.5rem;
    }

    @media (min-width: 750px) {
        p {
            padding-bottom: 0;
        }
    }
`;
