import { format } from "@projectwallace/format-css";
import { Canvasflow } from "../../Canvasflow";
import { CSS } from "./CSS";
export const DEFAULT_UNIT = "px";

export enum Breakpoints {
  Tablet = 768,
  Desktop = 1024,
}

// 0 - 767 Phone
// 768 - 1023 Tablet
// 1024

export const MOBILE_QUERY = `
/* STYLES IN MOBILE */
@media only screen and (max-width: ${Breakpoints.Tablet - 1}px)`;
export const TABLET_QUERY = `
/* STYLES IN TABLET */
@media only screen and (min-width:${Breakpoints.Tablet}px) and (max-width:${Breakpoints.Desktop - 1}px)`;
export const DESKTOP_QUERY = `
/* STYLES IN DESKTOP */
@media only screen and (min-width: ${Breakpoints.Desktop}px)`;

export class Styles {
  static resolveInheritance(
    styles: Array<Canvasflow.Style>,
  ): Map<string, Canvasflow.Style> {
    const stylesMap: Map<string, Canvasflow.Style> = styles.reduce(
      Styles.mapStyles,
      new Map(),
    );
    for (const style of styles) {
      Styles.mergeParentProperties(style, stylesMap);
    }
    return stylesMap;
  }

  static mapStyles(
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

  static reduceStyles(
    acc: Canvasflow.Style | undefined,
    style: Canvasflow.Style,
  ): Canvasflow.Style {
    if (!acc) {
      return style;
    }
    acc.id = [acc.id, style.id].join(" ");
    acc.name = [acc.name, style.name].join(" ");
    acc.properties = Styles.overwriteProperties(
      acc.properties,
      style.properties,
    );

    return acc;
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

    // 2. Process styles in component
    this.processComponentStyles();

    // 2. Process all the styling based on devices
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
        this.devices.tablet.set(`.style-${styleId}`, [tabletStyle]);
      }
    }

    if (style.desktop) {
      const desktopStyle = this.styles.get(style.desktop);
      if (desktopStyle && !this.devices.desktop.get(styleId)) {
        this.devices.desktop.set(`.style-${styleId}`, [desktopStyle]);
      }
    }

    const css = new CSS(style);
    this.response.push(css.get());
  };

  processComponentStyles() {
    for (const article of this.articles) {
      processComponentStyles(article.components, this.styles, this.devices);
    }
  }

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
      if (!device.size) continue;
      let prefix: string = "";
      switch (k) {
        case "tablet":
          prefix = TABLET_QUERY;
          break;
        case "desktop":
          prefix = DESKTOP_QUERY;
          break;
        default:
          prefix = MOBILE_QUERY;
      }

      const styling = [];
      for (const [selector, styles] of device) {
        const reducedStyles = styles.reduce(Styles.reduceStyles);

        const css = new CSS(reducedStyles, selector);
        styling.push(css.get());
      }

      this.response.push([prefix, "{", styling.join(" "), "}"].join("\n"));
    }
  };
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

function processComponentStyles(
  components: Array<Canvasflow.Component.Type>,
  styles: Map<string, Canvasflow.Style>,
  devices: DeviceStyles,
  parent?: string,
) {
  for (const component of components) {
    const { id } = component;
    // CSS Selector for the style
    const selector: string = parent ? [parent, `#${id}`].join(" ") : `#${id}`;
    switch (component.component) {
      case "columns":
        // Activate the recursivity for the rest of components
        for (const column of component.columns) {
          processComponentStyles(column, styles, devices, selector);
        }

        // The column doesn't have any style so there is nothing to do
        if (!component.styles.length) {
          break;
        }

        processStylesInComponent(selector, component.styles, styles, devices);
        break;
      case "image":
        if (!component.styles) {
          break;
        }
        // The column doesn't have any style so there is nothing to do
        if (!component.styles.length) {
          break;
        }

        processStylesInComponent(selector, component.styles, styles, devices);
        break;
      default:
        continue;
    }
  }
}

function processStylesInComponent(
  selector: string,
  componentStyles: Array<number | `${number}`>,
  styles: Map<string, Canvasflow.Style>,
  devices: DeviceStyles,
) {
  // Map numeric styles to objects
  const imageStyles = componentStyles.map((s) => styles.get(`${s}`));

  for (const style of imageStyles) {
    // If the style doesn't exist in the map we ignore it
    if (!style) {
      continue;
    }
    // We get a list of the devices that are supported by this style
    // We use a set to confirm that the items do not repeat
    // `mobile`, `tablet`, `desktop`
    const supportedDevices = new Set([...style.supportedDevices]);

    // We iterate for evert device that is supported
    for (const device of supportedDevices) {
      const deviceStyles = devices[device];
      const styling = deviceStyles.get(selector);
      // There was already a style so we add it
      if (styling) {
        styling.push(style);
        deviceStyles.set(selector, styling);
        continue;
      }
      // There wasn't any style so we create it
      deviceStyles.set(selector, [style]);
    }
  }
}
