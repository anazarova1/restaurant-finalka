import { useEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react'
import styles from './map.module.scss'
import { HiOutlineLocationMarker } from "react-icons/hi"

let arrlatlng = [
    {  lat:42.879117,lng:  74.60689,title: "Frunze Restaurant" },
    { lat: 42.876283, lng: 74.5955, title: "Cyclone" },
    { lat: 42.871496, lng:   74.604076, title: "Navigator" },
    { lat: 42.822756, lng: 74.615459  , title: "Usta Restaurant" },
    { lat: 42.818235, lng: 74.623956  , title: "Barashek" },
    { lat: 42.869262, lng:  74.603843 , title: "Bar 12" },
    { lat:42.854652 , lng:  74.637487 , title: "Dasmia" },
    { lat:42.873154 , lng:  74.60274 , title: "Niko" },
    { lat: 42.872879, lng:  74.602715 , title: "Nar" },


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
                defaultZoom={13}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>

        </div>
    </>);
}