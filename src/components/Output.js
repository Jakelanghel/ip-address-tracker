import React from "react";
import { ContainerAbsolute } from "./styled/ContainerAbsolute";
import { StyledOutput } from "./styled/Styled.Output";

const Output = (props) => {
    const location = props.data.location.city
        ? `${props.data.location.city}, ${props.data.location.region}`
        : props.data.location.country;

    return (
        <StyledOutput>
            <ContainerAbsolute className='box-shadow'>
                <div className='container-output'>
                    <h2>ip address</h2>
                    <p>{props.data.ip}</p>
                </div>

                <div className='container-output'>
                    <h2>location</h2>
                    <p>{location}</p>
                </div>

                <div className='container-output'>
                    <h2>timezone</h2>
                    <p>UTC {props.data.location.timezone}</p>
                </div>

                <div className='container-output'>
                    <h2>isp</h2>
                    <p>{props.data.isp}</p>
                </div>
            </ContainerAbsolute>
        </StyledOutput>
    );
};

export default Output;
