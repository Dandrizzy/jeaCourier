import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";
import { useState } from "react";
import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

function UserMap() {
  const { alphaCode: ticketId } = useParams();
  const { getSpecific } = useGetSpecificApi({ key: 'position', ticketId });

  const { data = [], isFetching } = useGetSpecific({ key: ['position', ticketId], fn: getSpecific });
  const [mapPosition] = useState([data.data.lat, data.data.lng]);

  if (isFetching) return <Spinner />;

  return (
    <div className={styles.mapContainer + ' relative'}>
      <MapContainer
        center={mapPosition}
        zoom={4}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker
          position={mapPosition}
        >
          <Popup className=" bg-blue-200">
            <span>Current location</span>
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}


export default UserMap;
