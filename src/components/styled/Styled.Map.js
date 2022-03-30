import styled from "styled-components";

export const StyledMap = styled.div`
    .leaflet-container {
        height: 50vh;
        z-index: 0;
    }

    @media (min-width: 750px) {
        .leaflet-container {
            height: 56vh;
        }
    }
`;
