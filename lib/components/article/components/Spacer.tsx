import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";

export const Spacer = (
  props: Canvasflow.Component.Spacer,
): ReactElement | null => {
  const { id, bleed, margin } = props;
  const containerStyle: any = {
    clear: "both",
  };

  const className = ["spacer"];

  switch (margin) {
    case "margin-1":
      className.push("v-small");
      break;
    case "margin-20":
      className.push("small");
      break;
    case "margin-75":
      className.push("large");
      break;
    case "margin-100":
      className.push("v-large");
      break;
    default:
      className.push("medium");
      break;
  }

  if (bleed) {
    className.push("bleed");
  }

  return (
    <div id={id} className={className.join(" ")} style={containerStyle}>
      <br />
    </div>
  );
};

export default Spacer;
