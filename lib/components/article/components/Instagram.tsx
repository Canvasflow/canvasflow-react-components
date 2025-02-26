import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
// TODO Implement instagram
export const Instagram = (
  props: Canvasflow.Component.Instagram,
): ReactElement | null => {
  console.log(props);
  return null;
};

export default Instagram;

/*
{
    "language": "en",
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "params": {
        "videoID": "Cqva6aOM8Fp",
        "type": "reel"
    },
    "id": "Cf2189763163",
    "articleid": "406114",
    "component": "instagram"
}
*/
