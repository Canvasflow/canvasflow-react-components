import { ReactElement, useRef } from "react";

import styles from "../article.module.css";

import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import { useComponentAnimation } from "./Component.hooks";

export const Divider = (props: DividerProps): ReactElement | null => {
  const { id, bleed, style, devices, animation, expandfullwidth } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation(ref, animation);

  const classNames = [
    "divider",
    styles["divider"],
    styles["component"],
    ...animationClasses,
  ];

  const containerStyle: any = {
    clear: "both",
  };

  const componentStyle: any = {};

  if (expandfullwidth === "on") {
    componentStyle.minWidth = "100%";
    componentStyle.width = "100%";
  }

  if (style) {
    classNames.push(style);
  }
  if (bleed === "on") {
    classNames.push("bleed");
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div
      id={id}
      ref={ref}
      style={containerStyle}
      className={classNames.join(" ")}
    >
      <hr style={componentStyle} />
    </div>
  );
};

interface DividerProps extends Canvasflow.Component.Divider {
  isSelected?: boolean;
}

export default Divider;
