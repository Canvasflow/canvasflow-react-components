import { ReactElement } from "react";
import { Canvasflow } from "../../../Canvasflow";

export const Button = (
  props: Canvasflow.Component.Button,
): ReactElement | null => {
  const {
    id,
    align = "center",
    size = "medium",
    link,
    text,
    style,
    resource,
    pageid,
    pagetarget,
  } = props;
  //const { navigateToArticle } = useContext(VirtualArticleContext);
  // const { onEventSend } = useContext(ArticleContext);
  const containerStyle: any = {
    display: "flex",
    width: "100%",
  };
  const componentStyle: any = {};

  let onClick = () => {};

  const attr: any = {};

  switch (resource) {
    case "url":
      if (link) {
        onClick = () => {
          // onEventSend({
          //   event: "external",
          //   data: {
          //     url: link,
          //     componentId: id,
          //     componentType: "button",
          //   },
          // });
          window.open(link, "_blank");
        };
      }
      break;
    case "page":
      if (pageid && pagetarget === "internal") {
        onClick = () => {
          // if (navigateToArticle) {
          //   navigateToArticle(parseInt(`${pageid}`, 10));
          // }
        };
      }
      break;
    default:
      attr["disabled"] = true;
      break;
  }

  // Alignment
  switch (align) {
    case "left":
      containerStyle.justifyContent = "flex-start";
      break;
    case "right":
      containerStyle.justifyContent = "flex-end";
      break;
    default:
      containerStyle.justifyContent = "center";
  }

  // Size
  switch (size) {
    case "xsmall":
      componentStyle.padding = "2px 5px";
      break;
    case "small":
      componentStyle.padding = `5px 10px`;
      break;
    case "medium":
      componentStyle.padding = `8px 18px`;
      break;
    case "large":
      componentStyle.padding = `12px 30px`;
      break;
    case "xlarge":
      componentStyle.padding = `14px 40px`;
      break;
  }

  return (
    <div id={id} style={containerStyle}>
      <button
        {...attr}
        className={style}
        style={componentStyle}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
