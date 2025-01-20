import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set up map container style and default center and zoom level
const mapContainerStyle = {
    width: '100%',
    height: '400px',
};
const center = {
    lat: -1.192306,
    lng: 36.746222,
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyB158nnAv-UcRZ2Fzxlsw13w2N5bsjUd5A">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
            >
                {/* Add a marker at the center */}
                <Marker position={center} visible={true} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
