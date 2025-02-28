import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
import styles from "./../article.module.css";
import { Caption } from "./Caption";

//import { MapContainer, TileLayer, Marker } from "react-leaflet";

// TODO check library
export const Map = (props: Canvasflow.Component.Map): ReactElement | null => {
  const {
    id = "",
    latitude,
    longitude,
    zoom = 5,
    caption = "",
    captionenabled = false,
    bleed,
    fullwidth,
  } = props;
  const className = [styles["map"], "media"];
  if (bleed && !fullwidth) {
    className.push("bleed");
  }
  return (
    <figure id={id} className={className.join(" ")}>
      {/* <MapContainer
      // center={[latitude, longitude]}
      // zoom={zoom}
      // scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} />
      </MapContainer> */}
      {captionenabled && caption ? <Caption content={caption} /> : null}
    </figure>
  );
};

export default Map;

/*
{
    "language": "en",
    "captionenabled": "off",
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "expandfullwidth": "off",
    "zoom": 17,
    "bleed": "off",
    "caption": "",
    "lat": "51.50072919999999",
    "lng": -0.1246254,
    "id": "Cf2943013946",
    "articleid": "406114",
    "mapstyle": "google",
    "marker": "on",
    "component": "map"
}
*/
