import { format } from "@projectwallace/format-css";
import { Canvasflow } from "../../Canvasflow";

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

export class Builder {
  articles: Array<Canvasflow.Article>;
  styles: Map<string, Canvasflow.Style>;
  css: Array<string> = [];

  constructor(
    articles: Array<Canvasflow.Article>,
    styles: Array<Canvasflow.Style> | Map<string, Canvasflow.Style>,
  ) {
    this.articles = articles;
    if (Array.isArray(styles)) {
      this.styles = Styles.resolveInheritance(styles)
    } else {
      this.styles = styles;
    }
  }

  async build(): Promise<string> {
    this.css = [];
    // 1. Process article styles
    this.processArticleStyles();
    return this.pretty(this.css.join('\n'));
  }

  // TODO Format the css that comes in
  pretty(css: string) {
    return format(css);
  }

  processArticleStyles(): void {
    const { articles } = this;
    const articleStyleIds: Array<string> = [...new Set(articles.map(a => `${a.style}`))];
    for (const id of articleStyleIds) {
      this.processArticleStyle(id)
    }
  }

  processArticleStyle(styleId: string) {
    const style = this.styles.get(styleId);
    if (!style) {
      return;
    }
    // Canvas
    const { properties } = style;
    for (const property in properties) {
      const props = properties[property];
      switch (property) {
        case 'canvas':
          this.css.push(this.mapCanvas(`.style-${styleId}`, props));
          break;
        case 'spacer':
          this.css.push(this.mapSpacer(`.style-${styleId}`, props));
          break;
        case 'image':
          this.css.push(this.mapImage(`.style-${styleId}`, props));
          break;
        case 'gallery':
          this.css.push(this.mapGallery(`.style-${styleId}`, props));
          break;
      }
    }
  }

  mapCanvas(selector: string, properties: any): string {
    const response: Array<string> = [];
    const {
      background_color,
      body_color
    } = properties;

    const margin = getMargin(properties)
    const padding = getPadding(properties);
    const border = getBorder(properties)
    const css = [margin, padding, border];
    if (background_color) {
      css.push(`background-color: #${background_color.replace('#', '')};`);
    }

    const filteredCSS = css.filter((i) => i).join('\n');
    if (filteredCSS.length) {
      response.push(`${selector} .canvas > :first-child {
                ${filteredCSS}
            }`);
    }

    if (body_color) {
      response.push(`${selector} {
                background-color: #${body_color.replace('#', '')};
            }`);
    }

    response.push(this.mapBleed(selector, properties));


    return response.join('\n');
  }
  mapSpacer(selector: string, properties: any): string {
    const {
      vsmall_height,
      small_height,
      medium_height,
      large_height,
      vlarge_height,
      unit,
    } = properties;
    if (!unit) {
      return '';
    }

    const response = [];
    if (vsmall_height !== undefined && unit['vsmall_height']) {
      response.push(`${selector} .spacer.v-small {
        height: ${vsmall_height}${unit['vsmall_height']};
        }`)
    }

    if (small_height !== undefined && unit['small_height']) {
      response.push(`${selector} .spacer.small {
        height: ${small_height}${unit['small_height']};
        }`)
    }


    if (medium_height !== undefined && unit['medium_height']) {
      response.push(`${selector} .spacer.medium {
        height: ${medium_height}${unit['medium_height']};
        }`)
    }

    if (large_height !== undefined && unit['large_height']) {
      response.push(`${selector} .spacer.large {
        height: ${large_height}${unit['large_height']};
        }`)
    }


    if (vlarge_height !== undefined && unit['vlarge_height']) {
      response.push(`${selector} .spacer.v-large {
        height: ${vlarge_height}${unit['vlarge_height']};
        }`)
    }

    return response.join('\n');
  }

  // TODO Map Image properties
  mapImage(selector: string, properties: any): string {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);

    const css = [margin, padding];
    const filteredCSS = css.filter((i) => i).join('\n');
    if (filteredCSS.length) {
      response.push(`${selector} .image {
                ${filteredCSS}
            }`);
    }

    return response.join('\n');
  }

  mapGallery(selector: string, properties: any): string {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);

    const css = [margin, padding];

    const filteredCSS = css.filter((i) => i).join('\n');

    if (filteredCSS.length) {
      response.push(`${selector} .gallery {
                ${filteredCSS}
            }`);
    }

    return response.join('\n');
  }

  mapBleed = (selector: string, properties: any): string => {
    const defaultUnit = 'px';
    const response: Array<string> = [];
    const { paddingLeft, paddingRight, unit } = properties;
    if (!unit) {
      return '';
    }
    if (response.length) {
      response.unshift(`/* Bleed */`);
    }

    if (paddingLeft !== undefined) {
      response.push(`${selector} .canvas > div > .bleed-left {
                margin-left: -${paddingLeft}${unit['paddingLeft'] ?? defaultUnit
        } !important;
            }`);
      response.push(`${selector} .canvas > div > .bleed {
                margin-left: -${paddingLeft}${unit['paddingLeft'] ?? defaultUnit
        } !important;
            }`);
    }
    if (paddingRight !== undefined) {
      response.push(`${selector} .canvas > div > .bleed-right {
                margin-right: -${paddingRight}${unit['paddingRight'] ?? defaultUnit
        } !important;
            }`);
      response.push(`${selector} .canvas > div > .bleed {
                margin-right: -${paddingRight}${unit['paddingRight'] ?? defaultUnit
        } !important;
            }`);
    }

    return response.join('\n');
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

function getPadding(properties: any): string {
  const defaultUnit = 'px';
  const response: Array<string> = [];
  const { padding_bottom, padding_top, padding_left, padding_right, unit } =
    properties;

  // If there isn't a unit i will not process it
  if (!unit) {
    return '';
  }

  if (padding_top !== undefined) {
    response.push(
      `padding-top: ${padding_top}${unit['padding_top'] ?? defaultUnit};`,
    );
  }
  if (padding_bottom !== undefined) {
    response.push(
      `padding-bottom: ${padding_bottom}${unit['padding_bottom'] ?? defaultUnit
      };`,
    );
  }
  if (padding_left !== undefined) {
    response.push(
      `padding-left: ${padding_left}${unit['padding_left'] ?? defaultUnit
      };`,
    );
  }
  if (padding_right !== undefined) {
    response.push(
      `padding-right: ${padding_right}${unit['padding_right'] ?? defaultUnit
      };`,
    );
  }

  if (response.length) {
    response.unshift(`/* Padding */`);
  }

  return response.join('\n');
}

function getMargin(properties: any): string {
  const defaultUnit = 'px';
  const response: Array<string> = [];
  const { margin_bottom, margin_top, margin_left, margin_right, unit } =
    properties;

  // If there isn't a unit i will not process it
  if (!unit) {
    return '';
  }

  if (margin_top !== undefined) {
    response.push(
      `margin-top: ${margin_top}${unit['margin_top'] ?? defaultUnit};`,
    );
  }
  if (margin_bottom !== undefined) {
    response.push(
      `margin-bottom: ${margin_bottom}${unit['margin_bottom'] ?? defaultUnit
      };`,
    );
  }
  if (margin_left !== undefined) {
    response.push(
      `margin-left: ${margin_left}${unit['margin_left'] ?? defaultUnit};`,
    );
  }
  if (margin_right !== undefined) {
    response.push(
      `margin-right: ${margin_right}${unit['margin_right'] ?? defaultUnit
      };`,
    );
  }

  if (response.length) {
    response.unshift(`/* Margin */`);
  }

  return response.join('\n');
}

function getBorder(properties: any): string {
  const defaultUnit = 'px';
  const response: Array<string> = [];
  const {
    border_width,
    border_color,
    border_edge,
    border_type,
    border_radius,
    border_radius_position,
    unit,
  } = properties;

  if (border_radius) {
    if (border_radius_position === 'all') {
      const borderRadiusCSS = `border-radius: ${border_radius}${unit?.border_radius ?? defaultUnit
        };`;
      response.push(borderRadiusCSS);
    } else {
      if (Array.isArray(border_radius_position)) {
        response.push(
          border_radius_position
            .map((edge: string) => {
              return `border-${edge}-radius: ${border_radius}${unit?.border_radius ?? defaultUnit
                };`;
            })
            .join('\n'),
        );
      }
    }
  }

  if (border_type === 'none') {
    response.push(`
        /* Border None*/
        border: 0px;
        `);
    response.unshift(`/* Border */`);
    return response.join('\n');
  }

  if (border_type) {
    response.push(`border-style: ${border_type};`);
  }

  if (border_edge) {
    if (border_edge === 'all') {
      response.push(
        `border: ${border_width || 1}${unit?.borderWidth ?? defaultUnit
        } ${border_type || 'solid'};`,
      );
    } else {
      response.push(
        border_edge
          .split('-')
          .map((edge: string) => {
            return `border-${edge}: ${border_width}${unit?.borderWidth ?? defaultUnit
              } ${border_type || 'solid'};`;
          })
          .join('\n'),
      );
    }
  }

  if (border_color) {
    response.push(`border-color: #${border_color.replace('#')};`);
  }

  /*if (borderWidth !== undefined) {
    response.push(`border-width: ${borderWidth}${unit?.borderWidth ?? defaultUnit};`)
  }*/

  if (response.length) {
    response.unshift(`/* Border */`);
  }

  return response.join('\n');
}