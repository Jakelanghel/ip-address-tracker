import React from "react";

import { StyledMap } from "../components/styled/Styled.Map";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

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
                zoom={13}
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

// import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// const MapComponent = ({ center, error }) => {
//     console.log(center);
//     return (
//         <MapContainer
//             zoomControl={false}
//             center={error ? [0, 0] : center}
//             zoom={error ? 2 : 13}
//             className='map'
//         >
//             <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png' />
//             {/* {!error && <Marker position={center} icon={myIcon} />} */}
//         </MapContainer>
//     );
// };

// export default MapComponent;
