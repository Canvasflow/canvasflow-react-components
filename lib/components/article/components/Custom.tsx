import { ReactElement } from "react";
import InnerHTML from "dangerously-set-html-content";

import { Canvasflow } from "../../../Canvasflow";

export const Custom = (
  props: Canvasflow.Component.Custom,
): ReactElement | null => {
  const { id, bleed = false, content } = props;

  const classNames = [];
  if (bleed) {
    classNames.push("bleed");
  }

  if (!content) {
    return null;
  }

  return (
    <div id={id} className={classNames.join(" ")}>
      <InnerHTML html={content} />
    </div>
  );
};

export default Custom;
