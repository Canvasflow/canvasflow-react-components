/**
 * This is an object representing a Canvasflow Component. You can retrieve
 * it to see properties of the component that are sent by System
 */
export namespace Component {
  /**
   * This is type that group all the components supported by Canvasflow
   */
  export type Type =
    | Text
    | Image
    | Gallery
    | Map
    | Video
    | Audio
    | Button
    | Anchor
    | Advert
    | Custom
    | Twitter
    | Infogram
    | Instagram
    | Table
    | TikTok
    | Columns
    | Container
    | Spacer
    | Divider;

  /**
   * Represents if a property is enabled or not
   * @internal
   */
  export type OnOff = "on" | "off";

  /**
   * Represents if a property is left or right
   * @internal
   */
  export type LeftRight = "left" | "right";

  /**
   * This is an object that represent the devices that are supported by
   * a particular component
   */
  export interface Devices {
    tablet: OnOff;
    desktop: OnOff;
    phone: OnOff;
  }

  /**
   * This is an object that represent the properties that are shared across
   * all the components
   */
  export interface BaseComponent {
    id: string;
    devices?: Devices;
    bleed?: OnOff | LeftRight;
    expandfullwidth?: OnOff;
    imagemargin?: string | `${number}` | number;
    component: Component;
    unselectable?: OnOff;
    language?: string;
    PublicationID?: number | `${number}`;
    animation?: any;
    cacheparam?: `${number}` | number;
    articleid?: `${number}` | number;
    style?: any;
    htmlclass?: string;
  }

  /**
   * String type that represent all the component properties
   */
  export type Component =
    | TextComponent
    | "image"
    | "gallery"
    | "map"
    | "video"
    | "audio"
    | "button"
    | "anchor"
    | "advert"
    | "custom"
    | "twitter"
    | "infogram"
    | "instagram"
    | "table"
    | "tiktok"
    | "columns"
    | "container"
    | "spacer"
    | "divider";

  /**
   * ----------------------------------------------
   * TEXT
   * ----------------------------------------------
   */
  export interface Text extends BaseComponent {
    IMAGECAPTION?: string;
    text_lang?: any;
    dropcap?: OnOff;
    css?: string;
    text: string;
    imageenabled?: OnOff;
    imageurl?: string;
    imagefloat?: LeftRight;
    imagewidth?: `${number}` | number;
    component: TextComponent;
    linktype?: string;
    externallinktarget?: OnOff;
    imagelink?: string;
    channels?: any;
    pagelink?: string;
    tag?: string;
    displayname?: string;
    excludedchannels?: Array<any>;
    unit?: {
      imagewidth: "px" | "pt";
    };
  }

  /**
   * String type that represent all the available text components
   */
  export type TextComponent =
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

  /**
   * This value defines the maximum amount of `text{number}`components
   * that are supported
   */
  export const MAX_TEXT_COMPONENTS = 40;

  /**
   * Type that represent the range for text component.
   * From `text1` to `text40`
   */
  export type TextRange = NumericRange<CreateArrayWithLengthX<1>, 40>;

  /**
   * ----------------------------------------------
   * MEDIA
   * ----------------------------------------------
   */

  export interface Image extends BaseComponent {
    align?: LeftRight | "center" | "float-left" | "float-right";
    fullwidth?: OnOff;
    styles?: Array<number | `${number}`>;
    types?: Array<string>;
    fit?: string;
    externallinktarget?: string;
    caption?: { [key: string]: string } | string;
    captionenabled?: OnOff;
    captionposition?: string;
    height?: number;
    credit?: string;
    creditenabled?: OnOff;
    width?: number | null;
    fixedwidth?: OnOff;
    link?: string;
    url?: string;
    imageclip?:
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
    linktype?: string;
    lightbox?: OnOff;
    imageframestyle?: string;
    aspectratio?: string;
    style?: any;
    role?: string;
    alt?: string;
    rawimage?: string;
    imagefilter?: string;
    overflow?: string;
    hpadding?: number;
    language?: string;
    templateId?: number;
    cacheparam?: number;
    imgunselectable?: OnOff;
    title?: string;
    pagelink?: string;
    tag?: string;
    onlyShowCaptionInLightbox?: boolean;
    onlyShowCreditInLightbox?: boolean;
    component: "image";
    lang?: string;
    imageurl: string;
    imagelink?: string;
    behaviour?: any;
  }

  export interface Gallery extends BaseComponent {
    component: "gallery";
    role: "default" | "mosaic";
    animation: "fade" | "slide" | "cube" | "coverflow" | "flip";
    autoplay: OnOff;
    images: Array<GalleryImage>;
    caption?: { [key: string]: string } | string;
    captionenabled: OnOff;
    credit?: string;
    creditenabled: OnOff;
    direction: "horizontal" | "vertical";
    "control-speed": "slow" | "medium" | "fast" | "vfast";
  }

  export interface GalleryImage {
    imageurl: string;
    caption?: { [key: string]: string } | string;
  }

  export interface Map extends BaseComponent {
    component: "map";
    captionenabled?: OnOff;
    caption?: string;
    zoom: number;
    lat: `${number}` | number;
    lng: `${number}` | number;
    marker: OnOff;
    mapstyle:
      | "google"
      | "apple"
      | "greyscale"
      | "lightdream"
      | "midnight"
      | "navigation"
      | "oldtimer"
      | "paledawn"
      | "paper"
      | "retro"
      | "schoolmap"
      | "subtleblue";
  }

  export interface Video extends BaseComponent {
    component: "video";
    poster?: {
      imageurl: string;
      cacheparam: `${number}`;
    };
    aspectRatio: string;
    loop: OnOff;
    caption?: string;
    controlsenabled?: OnOff;
    credit?: string;
    linktype?: "none" | "web" | "page";
    posterenabled?: OnOff;
    language?: "en";
    captionenabled?: OnOff;
    moviepath?: string;
    weblink?: string;
    vidtype?: "youtube";
    pagelink?: string;
    movietype?: string;
    explodefullwidth?: OnOff;
    creditenabled?: OnOff;
    youtubesuggest?: OnOff;
    autoplay?: OnOff;
    articleid: `${number}`;
    vidid: string;
  }

  // TODO Implement component
  export interface Audio extends BaseComponent {
    component: "audio";
  }

  export interface Button extends BaseComponent {
    component: "button";
    text: string;
    pagetarget: "external" | "lightbox" | "internal";
    resource: "none" | "url" | "page";
    align: LeftRight | "center";
    style: "none" | string;
    size: "frontstyle" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    link: string;
    externallinktarget: OnOff;
    pageid?: `${number}` | number;
  }

  export interface Anchor extends BaseComponent {
    component: "anchor";
    name: string;
  }

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

  export interface Custom extends BaseComponent {
    component: "custom";
    content: string;
  }

  export interface Twitter extends BaseComponent {
    component: "twitter";
    height?: number | `${number}`;
    language?: string;
    fixedheight?: OnOff;
    name: string;
    articleid?: `${number}` | number;
    type: "feed" | "tweet";
  }

  // TODO Implement component
  export interface Infogram extends BaseComponent {
    component: "infogram";
  }

  export interface Instagram extends BaseComponent {
    component: "instagram";
    language?: string;
    params: {
      videoID: string;
      type: "reel";
    };
    articleid?: `${number}` | number;
  }

  // TODO Implement component
  export interface Table extends BaseComponent {
    component: "table";
  }

  export interface TikTok extends BaseComponent {
    component: "tiktok";
    language?: string;
    params: {
      username: string;
      videoID: string;
    };
    articleid?: `${number}` | number;
  }

  /**
   * ----------------------------------------------
   * LAYOUT
   * ----------------------------------------------
   */

  export interface Columns extends BaseComponent {
    component: "columns";
    columns: Array<Array<Type>>;
    styles: Array<`${number}` | number>;
    backgroundcolor?: string;
    width: `${number}` | number;
    verticalpadding: `${number}` | number;
    multicolwidth?: `${number}` | number;
    collapsetype?: string;
    gutter: number;
    contentmode: "default" | "multicol" | "flow";
    multicolcount?: number;
    backgroundimage: OnOff;
    imagepositionleft: number;
    imageurl?: string;
    columnorder: "default" | "invert";
    imageopacity: number;
    colsplit: string;
    colstyle?: string;
    background?: string;
    gradientangle?: number;
    imagepositiontop?: number;
    horizontalpadding?: number;
    align: string;
    video: {
      autoloop: boolean;
      poster: string;
      url: string;
      horizontalalignment?: LeftRight | "center";
      fillmode?: "fit" | "cover";
    };
  }

  export interface Container extends BaseComponent {
    component: "container";
    styles: Array<`${number}` | number>;
    role: string;
    direction: "vertical" | "horizontal";
    components: Array<Type>;
  }

  export interface Spacer extends BaseComponent {
    component: "spacer";
    margin: `margin-${1 | 20 | 50 | 75 | 100}`;
  }

  export interface Divider extends BaseComponent {
    component: "divider";
    style: "none" | string;
  }
}

export function isTextComponent(c: Component.Type | string): boolean {
  let component: string = "";
  if (typeof c === "string") {
    component = c;
  } else {
    component = c.component;
  }
  const textComponents = new Set([
    "headline",
    "title",
    "subtitle",
    "intro",
    "body",
    "crosshead",
    "byline",
    "blockquote",
    "footer",
    "imagecaption",
  ]);

  for (let i = 0; i < Component.MAX_TEXT_COMPONENTS; i++) {
    textComponents.add(`text${i + 1}`);
  }

  return textComponents.has(component);
}

export function applyDeviceVisibility(
  classNames: Array<string>,
  devices: Component.Devices = {
    phone: "on",
    tablet: "on",
    desktop: "on",
  },
  styles: {
    readonly [key: string]: string;
  },
): void {
  if (devices.phone === "off") {
    classNames.push(styles["hide-mobile"]);
  }

  if (devices.tablet === "off") {
    classNames.push(styles["hide-tablet"]);
  }

  if (devices.desktop === "off") {
    classNames.push(styles["hide-desktop"]);
  }
}

export default Component;

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
