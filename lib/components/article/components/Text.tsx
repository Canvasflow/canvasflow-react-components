import { ReactElement, useRef } from "react";

import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import styles from "./../article.module.css";

import { useComponentAnimation } from "../Articles.hooks";

export const Text = (props: TextProps): ReactElement | null => {
  const {
    id,
    bleed = "off",
    text,
    expandfullwidth = "off",
    component,
    dropcap = "off",
    style,
    imageurl,
    animation,
    imageenabled,
    IMAGECAPTION,
    devices,
    text_lang,
    lang,
    isSelected,
  } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation({
    ref,
    animation,
    isSelected,
  });

  const classNames: Array<string> = [
    styles["component"],
    "component",
    "text",
    component,
    ...animationClasses,
  ];

  applyDeviceVisibility(classNames, devices, styles);

  // Set text content base on language
  let content = text;
  if (lang && text_lang && text_lang[lang]) {
    content = text_lang[lang];
  }
  let image = "";
  let clearer = "";

  const componentStyle: any = {};

  if (expandfullwidth === "on") {
    componentStyle.minWidth = "100%";
    componentStyle.width = "100%";
  }

  if (style && style["unit"]) {
    const unit = style["unit"];
    if (style["margin_top"] && unit["margin_top"]) {
      componentStyle.marginTop = `${style["margin_top"]}${unit["margin_top"]}`;
    }
    if (style["margin_left"] && unit["margin_left"]) {
      componentStyle.marginLeft = `${style["margin_left"]}${unit["margin_left"]}`;
    }
    if (style["margin_right"] && unit["margin_right"]) {
      componentStyle.marginRight = `${style["margin_right"]}${unit["margin_right"]}`;
    }
    if (style["margin_bottom"] && unit["margin_bottom"]) {
      componentStyle.marginBottom = `${style["margin_bottom"]}${unit["margin_bottom"]}`;
    }
    if (style["padding_top"] && unit["padding_top"]) {
      componentStyle.paddingTop = `${style["padding_top"]}${unit["padding_top"]}`;
    }
    if (style["padding_left"] && unit["padding_left"]) {
      componentStyle.paddingLeft = `${style["padding_left"]}${unit["padding_left"]}`;
    }
    if (style["padding_right"] && unit["padding_right"]) {
      componentStyle.paddingRight = `${style["padding_right"]}${unit["padding_right"]}`;
    }
    if (style["padding_bottom"] && unit["padding_bottom"]) {
      componentStyle.paddingBottom = `${style["padding_bottom"]}${unit["padding_bottom"]}`;
    }
  }

  // Works if we want to embbed image in text component
  if (imageenabled === "on") {
    if (imageurl) {
      const caption = IMAGECAPTION
        ? `<figcaption>${IMAGECAPTION}</figcaption>`
        : "";
      componentStyle.display = "block";
      image = `<figure><img src="${imageurl}" />${caption}</figure>`;
      clearer = '<span style="display: block; clear: both;"></span>';
    }
  }

  if (bleed === "on") {
    classNames.push("bleed");
  }

  if (dropcap === "on") {
    classNames.push("dropcap");
  }

  return (
    <div
      id={id}
      ref={ref}
      style={componentStyle}
      className={classNames.map((c) => c?.trim()).join(" ")}
      dangerouslySetInnerHTML={{
        __html: `${image} ${content} ${clearer}`,
      }}
    />
  );
};

interface TextProps extends Canvasflow.Component.Text {
  lang?: string;
  isSelected?: boolean;
}

export default Text;
