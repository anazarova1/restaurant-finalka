import { useEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react'
import styles from './map.module.scss'
import { HiOutlineLocationMarker } from "react-icons/hi"

let arrlatlng = [
    { lng: 42.767246, lat: 74.573006, title: "doni" },
    { lat: 42.8796540, lng: 74.6030155, title: "doni"},

    { lat: 42.767246, lng: 74.573006, title: "doni" },

]
export const MyMapComponent = () => {

    const renderMarkers = (map, maps) => {
        return arrlatlng.map(({ lat, lng, title }) => {
            return new maps.Marker({
                position: { lat, lng },
                map,
                title
            })
        });
    };

    const location = {
        address: '',
        lat: 42.87,
        lng: 74.59,
    }
    const LocationPin = ({ text }) => (
        <div className="pin">

            <p className="pin-text">{text}</p>
        </div>
    )
    return (<>
        <div className={styles.google_map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCKJ6oxE1eTBTjGfrIInoIev0x4F2J13WU' }}
                defaultCenter={location}
                defaultZoom={17}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>

        </div>
    </>);
}