import { ReactElement, useRef } from "react";
import ReactHtmlParser from "html-react-parser";

import styles from "../article.module.css";

import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import { useComponentAnimation } from "./Component.hooks";

export const Custom = (props: CustomProps): ReactElement | null => {
  const { id, bleed = "off", content, devices, animation } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation(ref, animation);

  const classNames = [
    styles["component"],
    styles["custom"],
    ...animationClasses,
  ];
  if (bleed === "on") {
    classNames.push("bleed");
  }

  if (!content) {
    return null;
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div id={id} ref={ref} className={classNames.join(" ")}>
      {ReactHtmlParser(content)}
    </div>
  );
};

interface CustomProps extends Canvasflow.Component.Custom {
  isSelected?: boolean;
}

export default Custom;
