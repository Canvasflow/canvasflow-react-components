import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
// TODO Implement map
export const Map = (props: Canvasflow.Component.Map): ReactElement | null => {
  console.log(props);
  return null;
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
