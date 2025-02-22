import { ReactElement } from "react";
import { Canvasflow, isTextComponent } from "../../Canvasflow";
import { Text } from "./components/Text";

export function mapComponent(args: Args) {
  const { lang } = args;
  return (component: Canvasflow.Component.Type): ReactElement | null => {
    if (isTextComponent(component)) {
      return <Text lang={lang} {...(component as Canvasflow.Component.Text)} />;
    }
    console.log(component);
    console.log(args);
    return null;
  };
}

export interface Args {
  lang?: string;
}
