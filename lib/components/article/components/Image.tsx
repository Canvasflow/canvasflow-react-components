import { OnOff } from "./Types";

export const Image = (props: ImageProps) => {
  const {
    id,
    fullwidth,
    align,
    bleed,
    fixedwidth,
    imageurl,
    htmlclass,
    imageclip,
    style,
    caption,
    width,
    component,
  } = props;

  let classNames = ["media", component];
  const containerStyle: any = {};
  const imageStyle: any = {
    pointerEvents: "none",
  };
  const captionStyle: any = {};

  if (htmlclass && htmlclass.length) {
    classNames = [...classNames, ...htmlclass];
  }

  switch (align) {
    case "left":
      containerStyle.textAlign = "left";
      // imageStyle['margin-right'] = 'auto';
      // containerStyle.alignItems = 'flex-start';
      break;
    case "right":
      containerStyle.textAlign = "right";
      // imageStyle['margin-left'] = 'auto';
      // containerStyle.alignItems = 'flex-end';
      break;
    case "float-left":
      //classNames.push(imageStyles['float-left'], 'float');
      break;
    case "float-right":
      //classNames.push(imageStyles['float-right'], 'float');
      break;
    default:
      containerStyle.textAlign = "center";
      /*imageStyle['margin-right'] = 'auto';
        imageStyle['margin-left'] = 'auto';*/
      break;
  }

  if (fixedwidth && width && !fullwidth) {
    imageStyle.width = width;
    captionStyle.width = width;
  }

  if (fullwidth) {
    imageStyle.maxWidth = "100%";
  }

  imageStyle.clipPath = getClipPath(imageclip);

  switch (bleed) {
    case "on":
      classNames.push("bleed");
      break;
    case "left":
    case "right":
      classNames.push(`bleed-${bleed}`);
      break;
    default:
      break;
  }

  if (style) {
    setImageInlineStyles(containerStyle, style);
  }

  const imageComponent = (
    <img
      src={`${imageurl.replace(/\\/g, "/")}`}
      alt={caption || ""}
      height={1000}
      style={imageStyle}
    />
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <figure
      id={id}
      className={classNames.join(" ")}
      style={containerStyle}
      //   onKeyDown={click}
      //   onClick={click}
    >
      {imageComponent}
      {/* {captionenabled && caption && !onlyShowCaptionInLightbox ? (
        <VirtualCaption style={captionStyle} content={caption} />
      ) : null}
      {creditEnabled && credit && !onlyShowCreditInLightbox ? (
        <Credit style={captionStyle} content={credit} />
      ) : null} */}
    </figure>
  );
};

interface ImageProps {
  id: string;
  align?: string;
  bleed?: OnOff | "left" | "right";
  style: any;
  fullwidth?: OnOff;
  expandfullwidth?: OnOff;
  externallinktarget?: string;
  caption?: string;
  captionenabled?: OnOff;
  captionposition?: string;
  credit?: string;
  animation?: any;
  creditenabled?: OnOff;
  width?: number | null;
  fixedwidth?: OnOff;
  link?: string;
  url: string;
  imageclip: string;
  linktype: string;
  lightbox: OnOff;
  htmlclass: Array<any>;
  onlyShowCaptionInLightbox: OnOff;
  onlyShowCreditInLightbox: OnOff;
  component: string;
  lang?: string;
  imageurl: string;
  imagelink: string;
}

function getClipPath(imageClip: string) {
  switch (imageClip) {
    case "circle":
      return "circle(50% at 50% 50%)";
    case "ellipse":
      return "ellipse(25% 40% at 50% 50%)";
    case "triangle":
      return "polygon(50% 0%, 0% 100%, 100% 100%)";
    case "trapezoid":
      return "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";
    case "parallelogram":
      return "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)";
    case "rhombus":
      return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    case "pentagon":
      return "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    case "hexagon":
      return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
    case "heptagon":
      return "polygon(50% 0%,90% 20%, 100% 60%,75% 100%, 25% 100%,0% 60%,10% 20%)";
    case "octagon":
      return "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    case "nonagon":
      return "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)";
    case "decogon":
      return "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)";
    case "bevel":
      return "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)";
    case "rabbet":
      return "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)";
    case "leftarrow":
      return "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)";
    case "rightarrow":
      return "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)";
    case "leftpoint":
      return "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)";
    case "rightpoint":
      return "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)";
    case "rightchevron":
      return "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)";
    case "leftchevron":
      return "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)";
    case "star":
      return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    case "close":
      return "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";
    default:
      return null;
  }
}

function setImageInlineStyles(containerStyle: any, style: any) {
  if (!style) {
    return;
  }

  if (!style.unit) {
    return;
  }

  const { unit } = style;

  const attributes: any = {
    margin_top: "marginTop",
    margin_right: "marginRight",
    margin_bottom: "marginBottom",
    margin_left: "marginLeft",
    padding_top: "paddingTop",
    padding_right: "paddingRight",
    padding_bottom: "paddingBottom",
    padding_left: "paddingLeft",
  };

  for (const attr in attributes) {
    if (style[attr] !== undefined && unit[attr]) {
      containerStyle[attributes[attr]] = `${style[attr]}${unit[attr]}`;
    }
  }
}

// {
//     "fullwidth": "off",
//     "onlyShowCaptionInLightbox": false,
//     "lightbox": "off",
//     "imageframestyle": "none",
//     "aspectratio": "free",
//     "align": "center",
//     "expandfullwidth": "off",
//     "onlyShowCreditInLightbox": false,
//     "animation": {
//       "type": "none",
//       "params": {
//         "speed": "medium",
//         "delay": "1",
//         "repeat": "0"
//       }
//     },
//     "bleed": "off",
//     "caption": "",
//     "role": "image",
//     "width": 300,
//     "linktype": "none",
//     "credit": "",
//     "alt": "",
//     "rawimage": "off",
//     "externallinktarget": "on",
//     "unselectable": "off",
//     "imagefilter": "none",
//     "imageclip": "none",
//     "hpadding": 0,
//     "imagelink": "",
//     "captionposition": "below",
//     "imageurl": "https://admin.cflowdev.com/usercontent/143476/611E08D7-9BF1-446E-AF18C84964F205BB.jpg",
//     "templateId": 143476,
//     "captionenabled": "off",
//     "cacheparam": 1,
//     "devices": {
//       "tablet": "on",
//       "desktop": "on",
//       "phone": "on"
//     },
//     "fixedwidth": "off",
//     "pagelink": "none",
//     "tag": "",
//     "creditenabled": "off",
//     "htmlclass": "",
//     "id": "Cf2-1565384310",
//     "articleid": 143476,
//     "imgunselectable": "off",
//     "title": "",
//     "component": "image",
//     "behaviour": {
//       "type": "none"
//     }
//   }
