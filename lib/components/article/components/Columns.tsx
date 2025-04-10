import { ReactElement, ReactNode, useRef } from "react";
import styles from "../article.module.css";
import { Canvasflow } from "../../../Canvasflow";
import { applyDeviceVisibility } from "../../../canvasflow/Component";
import { useComponentAnimation } from "./Component.hooks";

export const Columns = (props: ColumnsProps): ReactElement | null => {
  const {
    id,
    children,
    devices,
    animation,
    expandfullwidth,
    bleed,
    multicolcount,
    multicolwidth,
    contentmode,
    background,
    imageurl,
  } = props;
  const ref = useRef(null);
  const animationClasses = useComponentAnimation(ref, animation);

  const css: Array<string> = [];

  const classNames = [styles["columns"]];

  const classNamesContainer = [
    "columns",
    styles["component"],
    ...animationClasses,
  ];

  applyDeviceVisibility(classNames, devices, styles);

  if (expandfullwidth === "on") {
    classNamesContainer.push("row-full");
  }

  if (bleed === "on") {
    classNamesContainer.push("bleed");
  }
  if (multicolcount && multicolwidth && contentmode === "multicol") {
    css.push(`#${id} > div > div {
			columns: ${multicolcount} ${multicolwidth}px;
			column-rule: 1px dotted #ddd;
			column-gap: 2rem;
		}`);
  }

  if (background === "image" && imageurl) {
    css.push(`#${id} {
			background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url('${imageurl}');
			margin-left: auto;
			margin-right: auto;
			background-position: 50% 50%;
			justify-content: center;
		}`);
  }
  return (
    <section id={id} className={classNamesContainer.join(" ")}>
      <div className={classNames.join(" ")}>{children}</div>
      {css.length ? <style>{css.join("")}</style> : null}
    </section>
  );
};

interface ColumnsProps extends Canvasflow.Component.Columns {
  children: ReactNode;
  isSelected?: boolean;
}

export default Columns;

/*
{
    "colstyle": "none",
    "background": "none",
    "styles": [
        "22788"
    ],
    "gradientangle": 180,
    "imagepositiontop": 50,
    "horizontalpadding": 0,
    "align": "center",
    "expandfullwidth": "off",
    "style": {},
    "animation": {
        "type": "none"
    },
    "bleed": "on",
    "width": 100,
    "columns": [
        [
            {
                "expandfullwidth": "off",
                "style": {
                    "padding_top": 25,
                    "unit": {
                        "padding_top": "px",
                        "padding_bottom": "px",
                        "padding_left": "px",
                        "padding_right": "px",
                        "margin_bottom": "em"
                    },
                    "padding_bottom": 25,
                    "padding_left": 65,
                    "padding_right": 65,
                    "margin_bottom": 0
                },
                "animation": {
                    "type": "none",
                    "params": {
                        "speed": "medium",
                        "delay": "1",
                        "repeat": "0"
                    }
                },
                "IMAGECAPTION": "",
                "bleed": "off",
                "dropcap": "off",
                "linktype": "none",
                "imagefloat": "left",
                "externallinktarget": "off",
                "imageenabled": "off",
                "imagelink": "",
                "text_lang": {
                    "": "<p></p>",
                    "en": "<p style=\"text-align: center;\">Janez Kranjc erklärt seine Sicht auf die ureigenen Reize – und die Herausforderungen – des Eistauchens vor dem Hintergrund eines entsprechenden Fotoshootings in Österreich und Serbien</p>"
                },
                "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                "language": "",
                "text": "<p style=\"text-align: center;\">Janez Kranjc erklärt seine Sicht auf die ureigenen Reize – und die Herausforderungen – des Eistauchens vor dem Hintergrund eines entsprechenden Fotoshootings in Österreich und Serbien</p>",
                "cacheparam": 1,
                "devices": {
                    "tablet": "on",
                    "desktop": "on",
                    "phone": "on"
                },
                "channels": {
                    "applenews": {
                        "image": {
                            "enabled": "on"
                        }
                    }
                },
                "pagelink": "nones",
                "tag": "",
                "displayname": "Lead",
                "excludedchannels": [],
                "htmlclass": "",
                "id": "Comp-7018114",
                "imagemargin": 5,
                "articleid": "406114",
                "unit": {
                    "imagewidth": "px"
                },
                "component": "intro",
                "imagewidth": 250
            },
            {
                "expandfullwidth": "off",
                "style": {
                    "padding_left": 65,
                    "unit": {
                        "padding_left": "px",
                        "padding_right": "px",
                        "padding_top": "px",
                        "padding_bottom": "px",
                        "margin_bottom": "px"
                    },
                    "padding_right": 65,
                    "padding_top": 5,
                    "padding_bottom": 5,
                    "margin_bottom": 0
                },
                "animation": {
                    "type": "none",
                    "params": {
                        "speed": "medium",
                        "delay": "1",
                        "repeat": "0"
                    }
                },
                "IMAGECAPTION": "",
                "bleed": "off",
                "dropcap": "off",
                "linktype": "none",
                "imagefloat": "left",
                "externallinktarget": "off",
                "imageenabled": "off",
                "imagelink": "",
                "text_lang": {
                    "": "<p>byline</p>",
                    "en": "<p style=\"text-align: center;\">Fotos von Janez Kranjc und Ivana Orlovic</p>"
                },
                "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                "language": "",
                "text": "<p style=\"text-align: center;\">Fotos von Janez Kranjc und Ivana Orlovic</p>",
                "cacheparam": 1,
                "devices": {
                    "tablet": "on",
                    "desktop": "on",
                    "phone": "on"
                },
                "channels": {
                    "applenews": {
                        "image": {
                            "enabled": "on"
                        }
                    }
                },
                "pagelink": "nones",
                "tag": "",
                "displayname": "Byline",
                "excludedchannels": [],
                "htmlclass": "",
                "id": "Comp-9089289",
                "imagemargin": 5,
                "articleid": "406114",
                "unit": {
                    "imagewidth": "px"
                },
                "component": "byline",
                "imagewidth": 250
            }
        ]
    ],
    "gutter": 7.5,
    "imageopacity": 0,
    "backgroundcolor": "ffffff",
    "multicolwidth": 270,
    "collapsetype": "responsive",
    "verticalpadding": 0,
    "language": "",
    "devices": {
        "tablet": "on",
        "desktop": "on",
        "phone": "on"
    },
    "contentmode": "default",
    "backgroundimage": "off",
    "multicolcount": 3,
    "htmlclass": "",
    "id": "Col-7385939",
    "articleid": 406114,
    "columnorder": "default",
    "video": {
        "autoloop": true,
        "poster": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
        "url": " ",
        "horizontalalignment": "center",
        "fillmode": "cover"
    },
    "colsplit": "100",
    "component": "columns",
    "imagepositionleft": 50
}
*/
