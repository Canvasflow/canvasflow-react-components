import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
// TODO Implement twitter
export const Twitter = (
  props: Canvasflow.Component.Twitter,
): ReactElement | null => {
  console.log(props);
  return null;
};

export default Twitter;

/*
{
    "height": 350,
    "language": "en",
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "fixedheight": "on",
    "bleed": "on",
    "name": "Canvasflow",
    "id": "Cf2695787154",
    "articleid": "406114",
    "type": "feed",
    "component": "twitter"
}
*/
