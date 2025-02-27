import { format } from "@projectwallace/format-css";
import { Canvasflow } from "../../Canvasflow";
import { CSS } from "./CSS";
export const DEFAULT_UNIT = "px";

export enum Breakpoints {
  Tablet = 767,
  Desktop = 1024,
}

export const MOBILE_QUERY = `
/* STYLES IN MOBILE */
@media only screen and (max-width: ${Breakpoints.Tablet - 1}px)`;
export const TABLET_QUERY = `
/* STYLES IN TABLET */
@media only screen and (min-width:${Breakpoints.Tablet}px) and (max-width:${Breakpoints.Desktop}px)`;
export const DESKTOP_QUERY = `
/* STYLES IN DESKTOP */
@media only screen and (min-width: ${Breakpoints.Desktop}px)`;

export class Styles {
  static resolveInheritance(
    styles: Array<Canvasflow.Style>,
  ): Map<string, Canvasflow.Style> {
    const stylesMap: Map<string, Canvasflow.Style> = styles.reduce(
      Styles.reduceStyles,
      new Map(),
    );
    for (const style of styles) {
      Styles.mergeParentProperties(style, stylesMap);
    }
    return stylesMap;
  }

  static reduceStyles(
    acc: Map<string, Canvasflow.Style>,
    style: Canvasflow.Style,
  ) {
    acc.set(`${style.id}`, style);
    return acc;
  }

  static mergeParentProperties(
    style: Canvasflow.Style,
    stylesMap: Map<string, Canvasflow.Style>,
  ): Canvasflow.Style {
    // I don't have parent so i return
    if (!style.parent) {
      return style;
    }

    // Search for parent
    const parentStyle = stylesMap.get(style.parent);

    // This happens if the parent style is missin (aka System Error)
    if (!parentStyle) {
      style.parent = null;
      stylesMap.set(style.id, style);
      return style;
    }

    // Avoid recalculation
    const parent = Styles.mergeParentProperties(parentStyle, stylesMap);
    parent.parent = null;
    stylesMap.set(`${parent.id}`, parent);

    // In here we overwrite the parents properties with the children style
    const properties = Styles.overwriteProperties(
      parent.properties,
      style.properties,
    );

    style.properties = properties;
    style.parent = null;

    stylesMap.set(style.id, style);

    return style;
  }

  static overwriteProperties(
    properties: { [key: string]: any },
    overwrite: { [key: string]: any },
  ) {
    const result = { ...properties };
    overwrite = { ...overwrite };

    for (const property in overwrite) {
      if (Array.isArray(overwrite[property])) {
        if (!result[property]) {
          result[property] = [];
        }

        result[property] = result[property].concat(overwrite[property]);
        continue;
      }

      if (!result[property]) {
        result[property] = {};
      }

      result[property] = mergeDeep(result[property], overwrite[property]);
    }

    // Hack for system
    if (result["divider"] && result["dividers"] && result["dividers"].length) {
      const { style, bleed, width, color, margin, thickness } =
        result["divider"];

      const dividers = result.dividers.map((props: any) =>
        mergeDeep(
          {
            style,
            bleed,
            width,
            color,
            margin,
            thickness,
          },
          props,
        ),
      );

      result["dividers"] = dividers;
    }

    return result;
  }
}

interface DeviceStyles {
  mobile: Map<string, Array<Canvasflow.Style>>;
  tablet: Map<string, Array<Canvasflow.Style>>;
  desktop: Map<string, Array<Canvasflow.Style>>;
}

export class Builder {
  articles: Array<Canvasflow.Article>;
  styles: Map<string, Canvasflow.Style>;
  devices: DeviceStyles;
  response: Array<string>;

  constructor(
    articles: Array<Canvasflow.Article>,
    styles: Array<Canvasflow.Style> | Map<string, Canvasflow.Style>,
  ) {
    this.articles = articles;
    if (Array.isArray(styles)) {
      this.styles = Styles.resolveInheritance(styles);
    } else {
      this.styles = styles;
    }
    this.devices = {
      mobile: new Map(),
      tablet: new Map(),
      desktop: new Map(),
    };
    this.response = [];
  }

  async build(): Promise<string> {
    this.response = [];
    // 1. Process article styles
    this.processArticleStyles();
    this.processDeviceStyles();
    return format(this.response.join("\n"));
  }

  processArticleStyles = () => {
    const { articles } = this;
    const articleStyleIds: Array<string> = [
      ...new Set(articles.map((a) => `${a.style}`)),
    ];
    for (const id of articleStyleIds) {
      this.processArticleStyle(id);
    }
  };

  processArticleStyle = (styleId: string) => {
    const style = this.styles.get(styleId);
    if (!style) {
      return;
    }
    if (style.tablet) {
      const tabletStyle = this.styles.get(style.tablet);
      if (tabletStyle && !this.devices.tablet.get(styleId)) {
        this.devices.tablet.set(styleId, [tabletStyle]);
      }
    }

    if (style.desktop) {
      const desktopStyle = this.styles.get(style.desktop);
      if (desktopStyle && !this.devices.desktop.get(styleId)) {
        this.devices.tablet.set(styleId, [desktopStyle]);
      }
    }

    const css = new CSS(style);
    this.response.push(css.get());
  };

  processAdStyle = () => {
    for (const { id, components } of this.articles) {
      if (!components) {
        continue;
      }
      const isAd = isArticleAnAd(components);
      if (isAd) {
        const css = [
          `#article-${id} .canvas {
                  overflow: hidden;
                  height: 100%;
                  max-height: 100%;
              }`,
        ];
        css.push(`#article-${id} .canvas > div {
                  height: 100%;
              }`);
        this.response.push(css.join("\n"));
      }
    }
  };

  processDeviceStyles = () => {
    const devices: any = this.devices;
    for (const k in devices) {
      const device = devices[k] as Map<string, Array<Canvasflow.Style>>;
      console.log(device);
    }
  }
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export function getColSplit(total: number, colSplit: any) {
  if (total === 1) {
    return "1fr";
  }

  return colSplit
    .split("-")
    .map((split: any) => `${split}fr`)
    .join(" ");
}

function isArticleAnAd(components: Array<Canvasflow.Component.Type>) {
  return components?.length === 1 && components[0].component === "advert";
}
