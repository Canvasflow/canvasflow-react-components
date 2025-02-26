import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
// TODO Implement video
export const Video = (
  props: Canvasflow.Component.Video,
): ReactElement | null => {
  console.log(props);
  return null;
};

export default Video;

/*
{
    "poster": {
        "imageurl": "/systemfiles/img/video-poster.jpg",
        "cacheparam": "1"
    },
    "aspectRatio": "16by9",
    "loop": "off",
    "expandfullwidth": "off",
    "bleed": "off",
    "caption": "",
    "controlsenabled": "on",
    "credit": "Credit Text",
    "linktype": "none",
    "posterenabled": "off",
    "language": "en",
    "captionenabled": "off",
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "moviepath": "",
    "weblink": "",
    "vidtype": "youtube",
    "pagelink": "none",
    "movietype": "online-movie",
    "explodefullwidth": "off",
    "creditenabled": "off",
    "youtubesuggest": "off",
    "autoplay": "off",
    "id": "Cf2167542071",
    "articleid": "406114",
    "vidid": "RIQqVqQs9Xs",
    "component": "video"
}
*/
