import { Canvasflow, isTextComponent } from "../../Canvasflow";

export class CSS {
  selector: string;
  properties: any;
  style: Canvasflow.Style;
  constructor(style: Canvasflow.Style, selector?: string) {
    this.properties = style.properties;
    this.selector = selector ?? `.style-${style.id}`;
    this.style = style;
  }

  get(): string {
    return Object.keys(this.properties)
      .map(this.mapProperty)
      .filter((i) => i)
      .join(" ");
  }

  mapProperty = (property: string): string | null => {
    const properties = this.properties[property];

    if (isTextComponent(property)) {
      return this.mapText(properties, property);
    }

    switch (property) {
      case "canvas":
        return this.mapCanvas(properties);
      case "spacer":
        return this.mapSpacer(properties);
      case "divider":
        return this.mapDivider(properties);
      case "dividers":
        return this.mapDividers(properties);
      case "container":
        return this.mapContainer(properties);
      case "anchor":
        return this.mapAnchor(properties);
      case "image":
        return this.mapImage(properties);
      case "bullet":
        return this.mapBullet(properties);
      case "buttons":
        return this.mapButtons(properties);
      case "gallery":
        return this.mapGallery(properties);
      default:
        console.error(`Property not supported: (${property})`, properties);
        return null;
    }
  };

  mapCanvas = (properties: any): string => {
    const response: Array<string> = [];
    const { background_color, body_color } = properties;

    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const border = getBorder(properties);
    const css = [margin, padding, border];
    if (background_color) {
      css.push(`background-color: #${background_color.replace("#", "")};`);
    }

    const filteredCSS = css.filter((i) => i).join("\n");
    if (filteredCSS.length) {
      response.push(`${this.selector} .canvas > :first-child {
                    ${filteredCSS}
                }`);
    }

    if (body_color) {
      response.push(`${this.selector} {
        background-color: #${body_color.replace("#", "")};
        }`);
    }

    response.push(this.mapBleed(properties));

    return response.join("\n");
  };

  mapSpacer = (properties: any): string => {
    const {
      vsmall_height,
      small_height,
      medium_height,
      large_height,
      vlarge_height,
      unit,
    } = properties;
    if (!unit) {
      return "";
    }

    const response = [];
    if (vsmall_height !== undefined && unit["vsmall_height"]) {
      response.push(`${this.selector} .spacer.v-small {
            height: ${vsmall_height}${unit["vsmall_height"]};
            }`);
    }

    if (small_height !== undefined && unit["small_height"]) {
      response.push(`${this.selector} .spacer.small {
            height: ${small_height}${unit["small_height"]};
            }`);
    }

    if (medium_height !== undefined && unit["medium_height"]) {
      response.push(`${this.selector} .spacer.medium {
            height: ${medium_height}${unit["medium_height"]};
            }`);
    }

    if (large_height !== undefined && unit["large_height"]) {
      response.push(`${this.selector} .spacer.large {
            height: ${large_height}${unit["large_height"]};
            }`);
    }

    if (vlarge_height !== undefined && unit["vlarge_height"]) {
      response.push(`${this.selector} .spacer.v-large {
            height: ${vlarge_height}${unit["vlarge_height"]};
            }`);
    }

    return response.join("\n");
  };

  // TODO Implement divider css
  mapDivider = (properties: any): string => {
    return "";
  };

  // TODO Implement dividers css
  mapDividers = (properties: any): string => {
    return "";
  };

  // TODO Implement container css
  mapContainer = (properties: any): string => {
    return "";
  };

  // TODO Implement anchor css
  mapAnchor = (properties: any): string => {
    return "";
  };

  mapImage = (properties: any): string => {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);

    const css = [margin, padding];
    const filteredCSS = css.filter((i) => i).join("\n");
    if (filteredCSS.length) {
      response.push(`${this.selector} .image {
                    ${filteredCSS}
                }`);
    }

    return response.join("\n");
  };

  // TODO Implement bullet css
  mapBullet = (properties: any): string => {
    return "";
  };

  // TODO Implement buttons css
  mapButtons = (properties: any): string => {
    return "";
  };

  mapGallery = (properties: any): string => {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);

    const css = [margin, padding];

    const filteredCSS = css.filter((i) => i).join("\n");

    if (filteredCSS.length) {
      response.push(`${this.selector} .gallery {
                    ${filteredCSS}
                }`);
    }

    return response.join("\n");
  };

  mapBleed = (properties: any): string => {
    const defaultUnit = "px";
    const response: Array<string> = [];
    const { paddingLeft, paddingRight, unit } = properties;
    if (!unit) {
      return "";
    }
    if (response.length) {
      response.unshift(`/* Bleed */`);
    }

    if (paddingLeft !== undefined) {
      response.push(`${this.selector} .canvas > div > .bleed-left {
                    margin-left: -${paddingLeft}${
                      unit["paddingLeft"] ?? defaultUnit
                    } !important;
                }`);
      response.push(`${this.selector} .canvas > div > .bleed {
                    margin-left: -${paddingLeft}${
                      unit["paddingLeft"] ?? defaultUnit
                    } !important;
                }`);
    }
    if (paddingRight !== undefined) {
      response.push(`${this.selector} .canvas > div > .bleed-right {
                    margin-right: -${paddingRight}${
                      unit["paddingRight"] ?? defaultUnit
                    } !important;
                }`);
      response.push(`${this.selector} .canvas > div > .bleed {
                    margin-right: -${paddingRight}${
                      unit["paddingRight"] ?? defaultUnit
                    } !important;
                }`);
    }

    return response.join("\n");
  };

  // TODO Implement buttons css
  mapText = (properties: any, property: string): string => {
    return "";
  };
}

function getPadding(properties: any): string {
  const defaultUnit = "px";
  const response: Array<string> = [];
  const { padding_bottom, padding_top, padding_left, padding_right, unit } =
    properties;

  // If there isn't a unit i will not process it
  if (!unit) {
    return "";
  }

  if (padding_top !== undefined) {
    response.push(
      `padding-top: ${padding_top}${unit["padding_top"] ?? defaultUnit};`,
    );
  }
  if (padding_bottom !== undefined) {
    response.push(
      `padding-bottom: ${padding_bottom}${
        unit["padding_bottom"] ?? defaultUnit
      };`,
    );
  }
  if (padding_left !== undefined) {
    response.push(
      `padding-left: ${padding_left}${unit["padding_left"] ?? defaultUnit};`,
    );
  }
  if (padding_right !== undefined) {
    response.push(
      `padding-right: ${padding_right}${unit["padding_right"] ?? defaultUnit};`,
    );
  }

  if (response.length) {
    response.unshift(`/* Padding */`);
  }

  return response.join("\n");
}

function getMargin(properties: any): string {
  const defaultUnit = "px";
  const response: Array<string> = [];
  const { margin_bottom, margin_top, margin_left, margin_right, unit } =
    properties;

  // If there isn't a unit i will not process it
  if (!unit) {
    return "";
  }

  if (margin_top !== undefined) {
    response.push(
      `margin-top: ${margin_top}${unit["margin_top"] ?? defaultUnit};`,
    );
  }
  if (margin_bottom !== undefined) {
    response.push(
      `margin-bottom: ${margin_bottom}${unit["margin_bottom"] ?? defaultUnit};`,
    );
  }
  if (margin_left !== undefined) {
    response.push(
      `margin-left: ${margin_left}${unit["margin_left"] ?? defaultUnit};`,
    );
  }
  if (margin_right !== undefined) {
    response.push(
      `margin-right: ${margin_right}${unit["margin_right"] ?? defaultUnit};`,
    );
  }

  if (response.length) {
    response.unshift(`/* Margin */`);
  }

  return response.join("\n");
}

function getBorder(properties: any): string {
  const defaultUnit = "px";
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
    if (border_radius_position === "all") {
      const borderRadiusCSS = `border-radius: ${border_radius}${
        unit?.border_radius ?? defaultUnit
      };`;
      response.push(borderRadiusCSS);
    } else {
      if (Array.isArray(border_radius_position)) {
        response.push(
          border_radius_position
            .map((edge: string) => {
              return `border-${edge}-radius: ${border_radius}${
                unit?.border_radius ?? defaultUnit
              };`;
            })
            .join("\n"),
        );
      }
    }
  }

  if (border_type === "none") {
    response.push(`
          /* Border None*/
          border: 0px;
          `);
    response.unshift(`/* Border */`);
    return response.join("\n");
  }

  if (border_type) {
    response.push(`border-style: ${border_type};`);
  }

  if (border_edge) {
    if (border_edge === "all") {
      response.push(
        `border: ${border_width || 1}${
          unit?.borderWidth ?? defaultUnit
        } ${border_type || "solid"};`,
      );
    } else {
      response.push(
        border_edge
          .split("-")
          .map((edge: string) => {
            return `border-${edge}: ${border_width}${
              unit?.borderWidth ?? defaultUnit
            } ${border_type || "solid"};`;
          })
          .join("\n"),
      );
    }
  }

  if (border_color) {
    response.push(`border-color: #${border_color.replace("#")};`);
  }

  /*if (borderWidth !== undefined) {
      response.push(`border-width: ${borderWidth}${unit?.borderWidth ?? defaultUnit};`)
    }*/

  if (response.length) {
    response.unshift(`/* Border */`);
  }

  return response.join("\n");
}
