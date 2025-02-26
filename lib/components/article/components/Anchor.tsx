import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import styles from "../article.module.css";

export const Anchor = ({ name, devices }: Canvasflow.Component.Anchor) => {
  const classNames = [styles["anchor"]];
  applyDeviceVisibility(classNames, devices, styles);
  return <span id={name} className={classNames.join(" ")} />;
};

export default Anchor;
