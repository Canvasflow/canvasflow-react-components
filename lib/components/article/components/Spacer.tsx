import { ReactElement, useRef } from "react";
import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import styles from "../article.module.css";

import { useComponentAnimation } from "./Component.hooks";

export const Spacer = (props: SpacerProps): ReactElement | null => {
  const { id, bleed, margin, devices, animation } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation(ref, animation);

  const containerStyle: any = {
    clear: "both",
  };

  const classNames = [
    "component",
    styles["component"],
    "spacer",
    styles["spacer"],
    ...animationClasses,
  ];

  switch (margin) {
    case "margin-1":
      classNames.push("v-small");
      break;
    case "margin-20":
      classNames.push("small");
      break;
    case "margin-75":
      classNames.push("large");
      break;
    case "margin-100":
      classNames.push("v-large");
      break;
    default:
      classNames.push("medium");
      break;
  }

  if (bleed === "on") {
    classNames.push("bleed");
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div
      id={id}
      ref={ref}
      className={classNames.join(" ")}
      style={containerStyle}
    >
      <br />
    </div>
  );
};

interface SpacerProps extends Canvasflow.Component.Spacer {
  isSelected?: boolean;
}

export default Spacer;
