import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
// TODO Implement container
export const Container = (
  props: Canvasflow.Component.Container,
): ReactElement | null => {
  console.log(props);
  return null;
};

export default Container;

/*
{
    "language": "en",
    "styles": [],
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "role": "none",
    "direction": "vertical",
    "id": "Cf2825676669",
    "articleid": "406114",
    "component": "container",
    "components": [
        {
            "expandfullwidth": "off",
            "animation": {
                "type": "none",
                "params": {
                    "speed": "medium",
                    "delay": "1",
                    "repeat": "0"
                }
            },
            "IMAGECAPTION": "",
            "bleed": "off",
            "dropcap": "off",
            "linktype": "none",
            "imagefloat": "left",
            "externallinktarget": "off",
            "imageenabled": "off",
            "imagelink": "",
            "text_lang": {
                "en": "<p>Section name</p>"
            },
            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
            "language": "en",
            "text": "<p>Section name</p>",
            "cacheparam": 1,
            "devices": {
                "tablet": "on",
                "desktop": "on",
                "phone": "on"
            },
            "channels": {
                "applenews": {
                    "image": {
                        "enabled": "on"
                    }
                }
            },
            "pagelink": "nones",
            "tag": "",
            "displayname": "Section name",
            "excludedchannels": [],
            "htmlclass": "",
            "id": "Cf2436298626",
            "imagemargin": 5,
            "articleid": "406114",
            "unit": {
                "imagewidth": "px"
            },
            "component": "text4",
            "imagewidth": 250
        }
    ]

*/
