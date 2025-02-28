import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";
import InnerHTML from "dangerously-set-html-content";

import styles from "./../article.module.css";

export const Video = (
  props: Canvasflow.Component.Video,
): ReactElement | null => {
  const {
    id,
    hostedurl,
    // margintop, //CHECK THIS
    // marginbottom, //CHECK THIS
    bleed,
    fullwidth,
    expandfullwidth,
    caption,
    captionenabled,
    credit,
    creditenabled,
    moviepath,
    autoplay,
    loop,
    aspectRatio,
    controlsenabled,
    linktype,
    weblink,
    params,
    vidtype,
    vidid,
    hostedplaceholderurl, //CHECK THIS
    posterenabled,
    movietype,
  } = props;
  let component = null;
  const type = vidtype;
  const className = [styles["video"], "media", "video"];
  const containerStyle: any = {
    // marginTop,
    // marginBottom,
  };
  const componentStyle: any = {};
  if (fullwidth) {
    containerStyle.minWidth = "100%";
    containerStyle.width = "100%";
  }

  if (expandfullwidth === "on") {
    componentStyle.minWidth = "100%";
    componentStyle.width = "100%";
  }

  switch (type) {
    case "youtube":
      className.push(styles["youtube-video"]);
      component = (
        <iframe
          title={"Video"}
          style={componentStyle}
          src={`https://www.youtube.com/embed/${vidid}?rel=0&enablejsapi=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
      break;
    case "vimeo":
      component = (
        <iframe
          title={"Video"}
          src={`https://player.vimeo.com/video/${vidid}`}
          width="100%"
          height="480"
          style={componentStyle}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      );
      break;
    case "brightcove":
      if (params?.accountID && params?.videoID) {
        component = (
          <iframe
            title="Brightcove video"
            src={`https://players.brightcove.net/${params.accountID}/default_default/index.html?videoId=${params.videoID}`}
            allowFullScreen
            className={styles["brightcove"]}
            allow="encrypted-media"
          />
        );
      }
      break;
    case "tiktok":
      component = (
        <TikTok username={params?.username} videoID={params?.videoID} />
      );
      break;
    case "hosted":
    case "movie":
      component = (
        <Movie
          autoplay={autoplay === "on"}
          loop={loop === "on"}
          posterEnabled={posterenabled === "on"}
          posterUrl={hostedplaceholderurl}
          controls={controlsenabled === "on"}
          style={componentStyle}
          url={type === "hosted" ? hostedurl : moviepath}
        />
      );
      break;
    default:
      component = null;
  }

  if (movietype === "stn") component = <STN id={vidid} />;

  if (bleed === "on" && !fullwidth) {
    className.push("bleed");
  }

  if (aspectRatio === "auto") {
    className.push(styles["auto"]);
  }

  if ((linktype === "web" || linktype === "page") && weblink) {
    return (
      <div id={id} className={className.join(" ")} style={containerStyle}>
        <a href={weblink}>{component}</a>
        {creditenabled === "on" && credit ? <Credit content={credit} /> : null}
        {captionenabled === "on" && caption ? (
          <Caption content={caption} />
        ) : null}
      </div>
    );
  }

  return (
    <div id={id} className={className.join(" ")} style={containerStyle}>
      {component}
      {creditenabled === "on" && credit ? <Credit content={credit} /> : null}
      {captionenabled === "on" && caption ? (
        <Caption content={caption} />
      ) : null}
    </div>
  );
};

interface CaptionProps {
  content: string;
  style?: any;
}

const Caption = ({ content = "" }: CaptionProps) => {
  return <figcaption dangerouslySetInnerHTML={{ __html: content }} />;
};

const Credit = ({ content = "" }: CreditProps) => {
  return (
    <cite
      className={styles["credit"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

interface CreditProps {
  content: string;
}

const Movie = (props: MovieProps) => {
  const { url, autoplay, loop, controls, style, posterEnabled, posterUrl } =
    props;
  const [opts, setOpts] = useState({});
  useEffect(() => {
    const attributes: any = {};

    if (autoplay) {
      attributes.autoPlay = true;
      attributes.muted = true;
      attributes.playsInline = true;
      attributes.preload = "meta";
    }
    if (controls) {
      attributes.controls = true;
    }
    if (loop) {
      attributes.loop = true;
    }
    if (posterEnabled && posterUrl) {
      attributes.poster = posterUrl;
    }
    setOpts(attributes);
  }, [url, autoplay, loop, controls]);

  if (!url) {
    return null;
  }

  const extension = url.split(".").pop();
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video {...opts} style={style}>
      <source src={url} type={`video/${extension}`} />
      Sorry, your browser does not support embedded videos.
    </video>
  );
};

interface MovieProps {
  url?: string;
  autoplay: boolean;
  loop: boolean;
  controls: boolean;
  style: any;
  posterEnabled?: boolean;
  posterUrl?: string;
}

function TikTok(props: TikTokProps) {
  const { username, videoID } = props;
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (content || !username || !videoID) return;
    const url = `https://www.tiktok.com/@${username}/video/${videoID}`;
    fetch(`https://www.tiktok.com/oembed?url=${url}`)
      .then((response) => response.json())
      .then(({ html }) => {
        setContent(html);
      })
      .catch((err) => setError(err.message));
  }, [content]);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          background: "rgba(255,69,58,1)",
          padding: 20,
          fontWeight: "bold",
        }}
      >
        {error}
      </div>
    );
  }

  if (content) {
    return <InnerHTML html={content} />;
  }

  return null;
}

interface TikTokProps {
  username: string;
  videoID: string;
}

function STN({ id }: STNProps) {
  useExternalScripts({
    async: true,
    url: `https://embed.sendtonews.com/player3/embedcode.js?SC=${id}`,
    attributes: {
      "data-type": "s2nScript",
    },
  });
  if (id === undefined) {
    return null;
  }
  return (
    <>
      <div className={`s2nPlayer k-${id}`} data-type="float" />
    </>
  );
}

interface STNProps {
  id?: string;
}

function useExternalScripts({ async, url, attributes }: ExternalScriptArgs) {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    if (async) {
      script.setAttribute("async", "");
    }

    for (const attribute in attributes) {
      script.setAttribute(attribute, attributes[attribute]);
    }
    if (head) {
      head.appendChild(script);
    }

    return () => {
      if (head) {
        head.removeChild(script);
      }
    };
  }, [url]);
}

interface ExternalScriptArgs {
  async: boolean;
  url: string;
  attributes: any;
}

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
