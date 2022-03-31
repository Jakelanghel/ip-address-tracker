import styled from "styled-components";

export const StyledTracker = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url("https://jakelanghel.github.io/ip-address-tracker//images/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.darkGray};
    z-index: 0;

    label {
        font-size: 1.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
        padding: 1.5rem 0;
    }

    .container-input {
        width: 85%;
        max-width: 500px;
        display: 0flex;
        justify-content: center;
        align-items: center;
        /* margin-bottom: 8rem; */
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
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.veryDarkGray};
    }

    .input-btn:hover {
        cursor: pointer;
    }

    .input-btn:hover,
    .input-btn:focus {
        opacity: 0.8;
    }

    @media (min-width: 750px) {
        height: 40vh;

        label {
            padding: 2rem 0;
        }
    }
`;
