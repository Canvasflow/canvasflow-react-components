import { ReactElement, useRef } from "react";
import { Canvasflow } from "../../../Canvasflow";
import styles from "./../article.module.css";

import { InstagramEmbed } from "react-social-media-embed";
import { useComponentAnimation } from "./Component.hooks";

export const Instagram = (
  props: Canvasflow.Component.Instagram,
): ReactElement | null => {
  const ref = useRef(null);
  const { id, bleed, params, animation } = props;
  const { type, videoID } = params;

  const animationClasses = useComponentAnimation(ref, animation);

  const className = [
    styles["instagram"],
    "media",
    "instagram",
    ...animationClasses,
  ];

  if (bleed) {
    className.push("bleed");
  }

  if (!type || !videoID) {
    return null;
  }

  let url = "";
  switch (type) {
    case "tv":
    case "reel":
      url = `https://www.instagram.com/${type}/${videoID}/`;
      break;
    default:
      url = `https://www.instagram.com/p/${videoID}/`;
      break;
  }

  return (
    <div ref={ref} id={id} className={className.join(" ")}>
      <InstagramEmbed url={url} width={328} />
    </div>
  );
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
