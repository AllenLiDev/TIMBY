import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import styles from './GoogleMapsStyles.json';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={{ lat: props.lat ? props.lat : 49.282730, lng: props.lng ? props.lng : -123.1207351 }}
    defaultOptions={{
      fullscreenControl: false,
      styles: styles,
      disableDefaultUI: true
    }}
  >
    {props.markers.map(marker => {
      return (
        <Marker
          key={marker.key}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: props.activeCard === (marker.key - 1) ? process.env.PUBLIC_URL + '/icons/icon-48-selected.png' : process.env.PUBLIC_URL + '/icons/icon-48.png',
          }}
          onClick={() => props.changeCard(marker.key)}
        />
      )
    })}
  </GoogleMap>
))

export default MyMapComponent;
