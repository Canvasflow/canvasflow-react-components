export namespace Canvasflow {
  export interface Style {
    id: string;
    name: string;
    description: string;
    properties: { [key: string]: any }
  }
  /**
   * This is an object representing a Canvasflow Article.
   */
  export interface Article {
    /**
     * Unique identifier for the article
     */
    id: `${number}`;

    /**
     * Identifier for the article in system
     */
    ArticleID: `${number}`;

    /**
     * Represents the article in a human readable format
     * @example
     * - `this-is-an-article`
     * - `another-article`
     */
    slug?: string;

    /**
     * List of features that are required by the user to read the article
     */
    features: Array<string>;

    /**
     * Order of the article
     */
    index: number;

    /**
     * Style used by the article
     */
    style: `${number}`;

    /**
     * List of {@link Component.Type} that compose the article
     */
    components: Array<Component.Type>;
  }

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
    type OnOff = "on" | "off";

    /**
     * Represents if a property is left or right
     * @internal
     */
    type LeftRight = "left" | "right";

    /**
     * This is an object that represent the devices that are supported by
     * a particular component
     */
    export interface Devices {
      tablet: OnOff;
      desktop: OnOff;
      phone: OnOff;
    }

    interface BaseComponent {
      id: string;
      devices: Devices;
      bleed?: OnOff | LeftRight;
      expandfullwidth?: OnOff;
      component: Component;
      unselectable: OnOff;
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
     * Type that represent the range for text component.
     * From `text1` to `text40`
     */
    type TextRange = NumericRange<CreateArrayWithLengthX<1>, 40>;

    /**
     * ----------------------------------------------
     * MEDIA
     * ----------------------------------------------
     */

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
      imageclip:
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

    interface GalleryImage {
      imageurl: string;
      caption?: { [key: string]: string } | string;
    }

    export interface Map extends BaseComponent {
      component: "map";
      captionenabled: OnOff;
      caption: string;
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

    // TODO Implement component
    export interface Video extends BaseComponent {
      component: "video";
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

    // TODO Implement component
    export interface Custom extends BaseComponent {
      component: "custom";
    }

    // TODO Implement component
    export interface Twitter extends BaseComponent {
      component: "twitter";
    }

    // TODO Implement component
    export interface Infogram extends BaseComponent {
      component: "infogram";
    }

    // TODO Implement component
    export interface Instagram extends BaseComponent {
      component: "instagram";
    }

    // TODO Implement component
    export interface Table extends BaseComponent {
      component: "table";
    }

    export interface TikTok extends BaseComponent {
      component: "tiktok";
      params: {
        username: string;
        videoID: string;
      };
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
      width: `${number}` | number;
      gutter: number;
      contentmode: "default" | "multicol" | "flow";
      multicolcount: number;
      backgroundimage: OnOff;
      imagepositionleft: number;
      columnorder: "default" | "invert";
      imageopacity: number;
      colsplit: string;
      video: {
        autoloop: boolean;
        poster: string;
        url: string;
        horizontalalignment: LeftRight | "center";
        fillmode: "fit" | "cover";
      };
    }

    // TODO Implement component
    export interface Container extends BaseComponent {
      component: "container";
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
}

export const isTextComponent = (c: Canvasflow.Component.Type): boolean => {
  const { component } = c;
  const MAX_COMPONENTS = 40;
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

  for (let i = 0; i < MAX_COMPONENTS; i++) {
    textComponents.add(`text${i + 1}`);
  }

  return textComponents.has(component);
};

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
