import { useState, useEffect } from "react";
import InnerHTML from "dangerously-set-html-content";

import { Canvasflow } from "../../../Canvasflow";

import styles from "../article.module.css";

export const TikTok = (props: Canvasflow.Component.TikTok) => {
  const { id, bleed, params } = props;
  const { username, videoID } = params;
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const className = [styles["component"], styles["tiktok"], "media", "tiktok"];

  if (bleed) {
    className.push("bleed");
  }

  useEffect(() => {
    if (content || !username || !videoID) return;
    const url = `https://www.tiktok.com/@${username}/video/${videoID}`;
    fetch(`https://www.tiktok.com/oembed?url=${url}`)
      .then((response) => response.json())
      .then(({ html }) => {
        setContent(html);
      })
      .catch((err) => setError(err.message));
  }, [content, username, videoID]);

  if (!username || !videoID) {
    return null;
  }

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

  if (!content) {
    return null;
  }
  return (
    <div id={id} className={className.join(" ")}>
      <InnerHTML html={content} />
    </div>
  );
};

export default TikTok;
