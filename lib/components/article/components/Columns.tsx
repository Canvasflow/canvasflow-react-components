import { ReactElement, ReactNode } from "react";
import { Canvasflow } from "../../../Canvasflow";

// TODO Implement columns
export const Columns = (props: ColumnsProps): ReactElement | null => {
  const { id, children } = props;
  const css: Array<string> = [];
  return (
    <section id={id}>
      <div>{children}</div>
      {css.length ? <style>{css.join("")}</style> : null}
    </section>
  );
};

interface ColumnsProps extends Canvasflow.Component.Columns {
  children: ReactNode;
}

export default Columns;
