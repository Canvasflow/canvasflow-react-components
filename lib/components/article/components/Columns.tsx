import { ReactElement, ReactNode } from "react";
import styles from "../article.module.css";
import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";

// TODO Implement columns
export const Columns = (props: ColumnsProps): ReactElement | null => {
  const { id, children, devices } = props;
  const classNames = [styles["component"], styles["columns"]];
  applyDeviceVisibility(classNames, devices, styles);
  const css: Array<string> = [];
  return (
    <section id={id} className={classNames.join(" ")}>
      <div>{children}</div>
      {css.length ? <style>{css.join("")}</style> : null}
    </section>
  );
};

interface ColumnsProps extends Canvasflow.Component.Columns {
  children: ReactNode;
}

export default Columns;
