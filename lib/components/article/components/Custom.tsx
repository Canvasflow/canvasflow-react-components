import { ReactElement } from "react";
import InnerHTML from "dangerously-set-html-content";
import styles from "../article.module.css";

import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";

export const Custom = (
  props: Canvasflow.Component.Custom,
): ReactElement | null => {
  const { id, bleed = false, content, devices } = props;

  const classNames = [];
  if (bleed) {
    classNames.push("bleed");
  }

  if (!content) {
    return null;
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div id={id} className={classNames.join(" ")}>
      <InnerHTML html={content} />
    </div>
  );
};

export default Custom;
