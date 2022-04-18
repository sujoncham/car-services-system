import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '620px',
  height: '400px'
};

const center = {
  lat: 23.789611776530286,
  lng: 90.42533236394985
};

const GoogleMaping = ()=> {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDbdACvki6QHK412leCHCPax1jK9SLynqo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
       <Marker
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaping;