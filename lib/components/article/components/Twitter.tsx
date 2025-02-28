import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
import styles from "./../article.module.css";

import { Timeline, Tweet } from "react-twitter-widgets";

export const Twitter = (
  props: Canvasflow.Component.Twitter,
): ReactElement | null => {
  const { type } = props;
  if (type === "tweet") {
    return <TweetPost {...props} />;
  }
  return <TwitterTimeline {...props} />;
};

const TweetPost = (props: Canvasflow.Component.Twitter) => {
  const { id, bleed, height, fixedheight, tweetid } = props;
  const containerStyle: any = {};

  if (fixedheight && height) {
    containerStyle.height = height;
    containerStyle.minHeight = height;
    containerStyle.maxHeight = height;
  }

  const className = [styles["twitter"], "media", styles["tweet"]];
  if (bleed) {
    className.push("bleed");
  }

  return (
    <div id={id} style={containerStyle} className={className.join(" ")}>
      <Tweet tweetId={`${tweetid}`} />
    </div>
  );
};

export const TwitterTimeline = (props: Canvasflow.Component.Twitter) => {
  const { id, name, bleed, height, fixedheight } = props;
  const containerStyle: any = {};

  if (fixedheight && height) {
    containerStyle.height = height;
    containerStyle.minHeight = height;
    containerStyle.maxHeight = height;
  }

  const className = [styles["twitter"], "media"];
  if (bleed) {
    className.push("bleed");
  }

  return (
    <div id={id} style={containerStyle} className={className.join(" ")}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: name,
        }}
        options={{
          height: "100%",
        }}
      />
    </div>
  );
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
