import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
import styles from "./../article.module.css";
import { Caption } from "./Caption";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = (props: Canvasflow.Component.Map): ReactElement | null => {
  const {
    id = "",
    lat,
    lng,
    zoom = 5,
    caption = "",
    captionenabled = false,
    bleed,
    fullwidth,
  } = props;
  const className = [styles["map"], "media", styles["component"]];
  if (bleed && !fullwidth) {
    className.push("bleed");
  }

  const latitude: number = parseFloat(`${lat}`);
  const longitude: number = parseFloat(`${lng}`);

  return (
    <figure id={id} className={className.join(" ")}>
      <MapContainer
        zoom={zoom}
        scrollWheelZoom={false}
        center={[latitude, longitude]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          {captionenabled && caption ? (
            <Popup>{<Caption content={caption} />}</Popup>
          ) : null}
        </Marker>
      </MapContainer>
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
