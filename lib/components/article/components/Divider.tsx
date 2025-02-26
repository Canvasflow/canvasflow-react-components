import { ReactElement } from "react";
import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import styles from "../article.module.css";

export const Divider = (
  props: Canvasflow.Component.Divider,
): ReactElement | null => {
  const { id, bleed, style, devices } = props;
  const classNames = ["divider", styles["divider"], styles["component"]];

  const containerStyle: any = {
    clear: "both",
  };

  if (style) {
    classNames.push(style);
  }
  if (bleed === "on") {
    classNames.push("bleed");
  }

  applyDeviceVisibility(classNames, devices, styles);

  const componentStyle: any = {};

  return (
    <div id={id} style={containerStyle} className={classNames.join(" ")}>
      <hr style={componentStyle} />
    </div>
  );
};

export default Divider;
