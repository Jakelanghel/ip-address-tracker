import React from "react";
import { ContainerAbsolute } from "./styled/ContainerAbsolute";
import { StyledOutput } from "./styled/Styled.Output";

const Output = (props) => {
    console.log(props.data);

    const location = props.data.location.city
        ? `${props.data.location.city} ${props.data.location.region}`
        : props.data.location.country;
    return (
        <StyledOutput>
            <ContainerAbsolute>
                <h2>ip address</h2>
                <p>{props.data.ip}</p>
                <h2>location</h2>
                <p>{location}</p>
                <h2>timezone</h2>
                <p>UTC {props.data.location.timezone}</p>
                <h2>isp</h2>
                <p>{props.data.isp}</p>
            </ContainerAbsolute>
        </StyledOutput>
    );
};

export default Output;
