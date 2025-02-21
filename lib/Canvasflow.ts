export namespace Canvasflow {
  type OnOff = "on" | "off";
  type LeftRight = "left" | "right";
  export type Component = Text | Image | Advert;

  export interface Devices {
    tablet: OnOff;
    desktop: OnOff;
    phone: OnOff;
  }

  export interface BaseComponent {
    id: string;
    devices: Devices;
    bleed?: OnOff | LeftRight;
    expandfullwidth?: OnOff;
    component: TextComponent | "image" | "advert";
    unselectable: OnOff;
  }

  export interface Text extends BaseComponent {
    IMAGECAPTION?: string;
    text_lang?: any;
    unit?: any;
    dropcap: OnOff;
    css?: string;
    text: string;
    imageenabled?: OnOff;
    imageurl?: string;
    imagemargin?: string;
    imagefloat?: LeftRight;
    imagewidth?: string | number;
    style?: any;
    component: TextComponent;
  }

  type TextComponent =
    | "headline"
    | "title"
    | "subtitle"
    | "intro"
    | "body"
    | "crosshead"
    | "byline"
    | "blockquote"
    | "footer"
    | "imagecaption"
    | `text${TextRange}`;

  export interface Image extends BaseComponent {
    align?: LeftRight | "center" | "float-left" | "float-right";
    fullwidth?: OnOff;
    expandfullwidth?: OnOff;
    externallinktarget?: string;
    caption?: { [key: string]: string } | string;
    captionenabled?: OnOff;
    captionposition?: string;
    credit?: string;
    animation?: any;
    creditenabled?: OnOff;
    width?: number | null;
    fixedwidth?: OnOff;
    link?: string;
    url: string;
    imageclip: ImageClip;
    linktype: string;
    lightbox: OnOff;
    style?: any;
    htmlclass: Array<any>;
    onlyShowCaptionInLightbox: OnOff;
    onlyShowCreditInLightbox: OnOff;
    component: "image";
    lang?: string;
    imageurl: string;
    imagelink: string;
  }

  type ImageClip =
    | "none"
    | "circle"
    | "ellipse"
    | "triangle"
    | "trapezoid"
    | "parallelogram"
    | "rhombus"
    | "pentagon"
    | "hexagon"
    | "heptagon"
    | "octagon"
    | "nonagon"
    | "decogon"
    | "bevel"
    | "rabbet"
    | "leftarrow"
    | "rightarrow"
    | "leftpoint"
    | "rightpoint"
    | "rightchevron"
    | "leftchevron"
    | "star"
    | "close";

  export interface Advert extends BaseComponent {
    component: "advert";
    imageurl: string;
    height: number;
    width: number;
    linktype: "none" | "web" | "page";
    imagelink?: string;
    externallinktarget: OnOff;
    advertlink?: `/article/${number}`;
    pagelink?: number;
    unselectable: OnOff;
    imgunselectable: OnOff;
    fit: "fit-width" | "fit-height";
  }
}

type TextRange = NumericRange<CreateArrayWithLengthX<1>, 40>;

type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = [],
> = ACC["length"] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>;

type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never,
> = START_ARR["length"] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR["length"]>;
