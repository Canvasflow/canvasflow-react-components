import { ReactElement, useRef } from "react";
import ReactHtmlParser from "html-react-parser";

import styles from "../article.module.css";
import { useComponentAnimation } from "../Articles.hooks";
import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";

export const Custom = (props: CustomProps): ReactElement | null => {
  const {
    id,
    bleed = "off",
    content,
    devices,
    animation,
    isSelected = true,
  } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation({
    ref,
    animation,
    isSelected,
  });

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
