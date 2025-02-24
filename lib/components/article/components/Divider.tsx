import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";

export const Divider = (
  props: Canvasflow.Component.Divider,
): ReactElement | null => {
  const { id, bleed, style } = props;
  const classNames = ["divider"];

  const containerStyle: any = {
    clear: "both",
  };

  if (style) {
    classNames.push(style);
  }
  if (bleed === "on") {
    classNames.push("bleed");
  }

  const componentStyle: any = {};

  return (
    <div id={id} style={containerStyle} className={classNames.join(" ")}>
      <hr style={componentStyle} />
    </div>
  );
};

export default Divider;
