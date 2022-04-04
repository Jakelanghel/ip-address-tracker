import React from "react";

import { StyledMap } from "../components/styled/Styled.Map";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = (props) => {
    function MyComponent() {
        const map = useMap();
        map.flyTo(props.cords);
        map.removeControl(map.zoomControl);
        // map.setCenter();
        return null;
    }

    // 40.894453, -80.327816;
    // 40.890333, -80.327773;

    return (
        <StyledMap>
            <MapContainer
                center={props.center}
                zoom={15}
                whenCreated={(map) => map}
                zoomControl='false'
                className='map-container'
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
