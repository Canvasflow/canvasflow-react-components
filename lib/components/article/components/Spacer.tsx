import { ReactElement } from "react";
import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import styles from "../article.module.css";

export const Spacer = (
  props: Canvasflow.Component.Spacer,
): ReactElement | null => {
  const { id, bleed, margin, devices } = props;
  const containerStyle: any = {
    clear: "both",
  };

  const classNames = ["spacer", styles["spacer"], styles["component"]];

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

  if (bleed) {
    classNames.push("bleed");
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div id={id} className={classNames.join(" ")} style={containerStyle}>
      <br />
    </div>
  );
};

export default Spacer;
