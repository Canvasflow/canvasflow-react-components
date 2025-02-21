export namespace Canvasflow {
  export type OnOff = "on" | "off";
  export type LeftRight = "left" | "right";
  export interface Devices {
    tablet: OnOff;
    desktop: OnOff;
    phone: OnOff;
  }
  export interface Component {
    id: string;
    devices: Devices;
    bleed?: OnOff;
    expandfullwidth?: OnOff;
  }

  export interface Text extends Component {
    IMAGECAPTION?: string;
    text_lang?: any;
    unit?: any;
    dropcap: OnOff;
    css?: string;
    text: string;
    imageenabled?: OnOff;
    imageurl?: string;
    imagemargin?: string;
    imagefloat?: "left" | "right";
    imagewidth?: string | number;
    style?: any;
    component: string;
  }
}
