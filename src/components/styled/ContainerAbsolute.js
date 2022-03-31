import styled from "styled-components";

export const ContainerAbsolute = styled.div`
    width: 85%;
    max-width: 500px;
    position: absolute;
    top: 175px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
    padding-bottom: 0rem;
    border-radius: 20px;
    z-index: 1;

    @media (min-width: 750px) {
        max-width: none;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        padding: 0;
        padding: 2.5rem 0;
        padding-right: 5rem;
        top: 220px;

        .container-output {
            max-width: 200px;
            padding-left: 1.75rem;
            border-left: solid 1px gray;
            min-height: 75px;
            margin-right: 15px;
        }
    }
`;
