import { Canvasflow } from "../../../Canvasflow";
import { applyDeviceVisibility } from "../../../canvasflow/Component";
import styles from "../article.module.css";

export const Anchor = ({ name, devices }: Canvasflow.Component.Anchor) => {
  const classNames = [styles["component"], styles["anchor"]];
  applyDeviceVisibility(classNames, devices, styles);
  return <span id={name} className={classNames.join(" ")} />;
};

export default Anchor;
