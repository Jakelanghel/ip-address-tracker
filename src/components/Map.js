import React from "react";

import { StyledMap } from "../components/styled/Styled.Map";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import * as L from "leaflet";
// import icon from "./images/icon-location.svg";

// const LeafIcon = L.Icon.extend({
//     options: {},
// });

// const greenIcon = new LeafIcon({
//     iconUrl: "../images/icon-location.svg",
// });

const Map = (props) => {
    function MyComponent() {
        const map = useMap();
        map.flyTo(props.cords);
        return null;
    }

    return (
        <StyledMap>
            <MapContainer
                center={props.cords}
                zoom={15}
                whenCreated={(map) => map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={props.cords}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <MyComponent />
            </MapContainer>
        </StyledMap>
    );
};

export default Map;
