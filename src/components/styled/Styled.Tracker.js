import styled from "styled-components";

export const StyledTracker = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("https://jakelanghel.github.io/ip-address-tracker//images/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.darkGray};
    z-index: 0;
    padding: 2.5rem 0;

    label {
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: 2.5rem;
        color: ${({ theme }) => theme.colors.white};
    }

    .container-input {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2.5rem;
    }

    p {
        font-size: 0.75rem;
        letter-spacing: 1px;
        position: absolute;
        top: 160px;
        left: 48px;
        color: ${({ theme }) => theme.colors.errorRed};
    }

    .input-btn {
        border: none;
        padding: 1.5rem 2rem;
        /* margin-bottom: 8rem; */
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.veryDarkGray};
    }
`;
