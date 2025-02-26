export interface Style {
  id: string;
  name: string;
  description: string;
  properties: { [key: string]: any };
  supportedDevices: Array<"mobile" | "tablet" | "desktop">;
  type: "article" | "device" | "custom";
  parent: `${number}` | null;
  tablet: `${number}` | null;
  desktop: `${number}` | null;
  created: any;
  lastModified: any;
}

export default Style;
