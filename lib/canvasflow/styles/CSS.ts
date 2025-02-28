export const PT_TO_EM_FACTOR = 1 / 10.111;
export const PT_TO_EM_FACTOR_LINE_HEIGHT = 1 / 10.111;

import { Canvasflow } from "../../Canvasflow";
import { isTextComponent } from "../Component";
import { Logger } from "../Logger";

export class CSS {
  selector: string;
  properties: any;
  style: Canvasflow.Style;
  logger: Logger;
  constructor(style: Canvasflow.Style, selector?: string) {
    this.properties = style.properties;
    this.selector = selector ?? `.style-${style.id} `;
    this.style = style;
    this.logger = new Logger("CSS");
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
      case "styleblocks":
      case "video":
      case "tabs":
        return null;
      default:
        this.logger.error(`Property not supported: (${property})`, properties);
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

  mapDivider = (properties: any): string => {
    const id = properties.id ? `.${properties.id}` : "";
    const { style, align, unit } = properties;
    let { color, thickness, width } = properties;
    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const response = [];
    if (color === undefined) {
      color = "#000";
    } else {
      color = `#${color.replace("#", "")}`;
    }
    if (thickness === undefined) {
      thickness = "1px";
    } else {
      thickness = `${thickness}${unit?.["thickness"] || "px"}`;
    }

    if (width === undefined) {
      width = 100;
    }
    if (margin) {
      response.push(`${this.selector} .divider${id} {
                ${margin}
            }`);
    }
    if (padding) {
      response.push(`${this.selector} .divider${id} {
                ${padding}
            }`);
    }
    if (align) {
      if (align === "left") {
        response.push(`${this.selector} .divider${id} hr {
                    margin-left: 0px;
                }`);
      } else if (align === "right") {
        response.push(`${this.selector} .divider${id} hr {
                    margin-right: 0px;
                }`);
      }
    }
    if (width) {
      response.push(`${this.selector} .divider${id} hr {
                width: ${width}%;
		        box-sizing: content-box;
            }`);
    }
    switch (style) {
      case "blur":
        response.push(`${this.selector} .divider${id} hr {
					height: 0;
					box-shadow: 0 0 10px 1px ${color};
				}
				${this.selector} .divider hr:after{
					content: "\\00a0";
				}`);
        break;
      case "dashed":
        response.push(`${this.selector} .divider${id} hr {
					border-bottom: ${thickness} dashed ${color};
				}`);
        break;
      case "dotted":
        response.push(`${this.selector} .divider${id} hr {
				    border-bottom: ${thickness} dotted ${color};
			    }`);
        break;
      case "chapter":
        response.push(`${this.selector} .divider${id} hr {
						padding: 0;
						border-top: medium double ${color};
						color: ${color};
						text-align: center;
					}
					${this.selector} .divider${id} hr:after {
						content: "§";
						display: inline-block;
						position: relative;
						top: -0.7em;
						font-size: 1.5em;
						padding: 0 0.25em;
					}`);
        break;
      case "elegant":
        response.push(`${this.selector} .divider${id} hr {
					height: 20px;
					border-style: solid;
					border-color: ${color};
					border-width: 1px 0 0 0;
					border-radius: 20px;
				}
				${this.selector} .divider${id} hr:before {
					display: block;
					content: "";
					height: 20px;
					margin-top: -21px;
					border-style: solid;
					border-color: ${color};
					border-width: 0 0 1px 0;
					border-radius: 20px;
				}`);
        break;
      case "innerfade":
        response.push(`${this.selector} .divider${id} hr {
					height: 2px;
					background: ${color};
					background-image: -webkit-linear-gradient(left, #fff, ${color}, #fff);
					background-image: linear-gradient(left, #fff, ${color}, #fff);
				}`);
        break;
      case "inset":
        response.push(`${this.selector} .divider${id} hr {
					height: 0;
					border-top: 1px solid rgba(0, 0, 0, 0.1);
					border-bottom: 1px solid rgba(255, 255, 255, 0.3);
				}`);
        break;
      case "shadow":
        response.push(`${this.selector} .divider${id} hr {
					height: 12px;
					  box-shadow: inset 0 10px 12px -12px rgba(0,0,0,0.5);
				}`);
        break;
      default:
        response.push(`${this.selector} .divider${id} hr {
					border-bottom: ${thickness} solid ${color};
				}`);
    }
    return response.join("\n");
  };

  mapDividers = (properties: any): string => {
    if (!properties.length) {
      return "";
    }

    const dividers = properties.map((d: any) => this.mapDivider(d));

    return dividers.join("\n");
  };

  mapContainer = (properties: any): string => {
    const response = [];
    const { unit, background_color, border_radius } = properties;

    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const border = getBorder(properties);

    const css = [margin, padding, border];
    if (background_color) {
      css.push(`background-color: #${background_color.replace("#", "")};`);
    }

    if (border_radius && unit?.borderRadius) {
      css.push(`border-radius: ${border_radius}${unit?.borderRadius};`);
    }

    const filteredCSS = css.filter((i) => i).join("\n");
    if (filteredCSS.length) {
      response.push(`${this.selector} {
                ${filteredCSS}
            }`);
    }

    return response.join("\n");
  };

  mapAnchor = (properties: any): string => {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const border = getBorder(properties);
    const font = getFont(properties);
    const fontSize = getFontSize(properties);

    const css = [margin, padding, border, font, fontSize];

    const filteredCSS = css.filter((i) => i).join("\n");

    if (filteredCSS.length) {
      response.push(`${this.selector} a {
                ${filteredCSS}
            }`);
    }

    return response.join("\n");
  };

  mapImage = (properties: any): string => {
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);

    const css = [margin, padding];
    const filteredCSS = css.filter((i) => i).join("\n");
    if (filteredCSS.length) {
      response.push(`${this.selector}.image {
        ${filteredCSS}
      }`);
    }

    return response.join("\n");
  };

  mapBullet = (properties: any): string => {
    const { listStyle } = properties;
    const response = [];
    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const border = getBorder(properties);
    const font = getFont(properties);
    const fontSize = getFontSize(properties);

    const css = [margin, padding, border, font, fontSize];
    if (listStyle) {
      css.push(`list-style: ${listStyle};`);
    }

    const filteredCSS = css.filter((i) => i).join("\n");

    if (filteredCSS.length) {
      response.push(`${this.selector} a {
                ${filteredCSS}
            }`);
    }

    return response.join("\n");
  };

  mapButtons = (buttonsProperties: any): string => {
    if (!buttonsProperties.length) {
      return "";
    }
    const response: Array<string> = [];

    for (const properties of buttonsProperties) {
      const { unit } = properties;
      let {
        align,
        background_color,
        color,
        font_family,
        font_size,
        letter_spacing,
        line_height,
        margin_bottom,
        margin_top,
      } = properties;

      align = align ? `text-align: ${align};` : "";
      background_color = background_color
        ? `background: #${background_color.replace("#", "")};`
        : "";
      font_family = font_family ? `font-family: ${font_family};` : "";
      if (font_size && unit && unit["font_size"] === "pt") {
        font_size = font_size
          ? `font-size: ${font_size * PT_TO_EM_FACTOR}em;`
          : "";
      } else {
        font_size = font_size
          ? `font-size: ${font_size}${unit["font_size"]};`
          : "";
      }
      color = color ? `color: #${color.replace("#", "")};` : "";
      if (line_height && unit && unit["line_height"]) {
        line_height =
          line_height !== undefined
            ? `line-height: ${line_height * PT_TO_EM_FACTOR}em;`
            : "";
      } else {
        line_height =
          line_height !== undefined
            ? `line-height: ${line_height}${unit["line_height"]};`
            : "";
      }

      letter_spacing =
        letter_spacing !== undefined
          ? `letter-spacing: ${parseFloat(letter_spacing)}${unit["letter_spacing"]
          };`
          : "";
      margin_top =
        margin_top !== undefined
          ? `margin-top: ${margin_top}${unit["margin_top"]};`
          : "";
      margin_bottom =
        margin_bottom !== undefined
          ? `margin-bottom: ${margin_bottom}${unit["margin_bottom"]};`
          : "";
      const textTransform = properties["case"]
        ? `text-transform: ${properties["case"]};`
        : "";

      const css = `${this.selector} button.${properties.id} {
                cursor: pointer;
                border: none;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 1px 1px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
                ${align}
                ${background_color}
                ${font_family}
                ${font_size}
                ${color}
                ${line_height}
                ${letter_spacing}
                ${margin_bottom}
                ${margin_top}
                ${textTransform}
            }`;

      response.push(css);
    }

    return response.join("\n");
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
    const { padding_left, padding_right, unit } = properties;
    if (!unit) {
      return "";
    }
    if (response.length) {
      response.unshift(`/* Bleed */`);
    }

    if (padding_left !== undefined) {
      response.push(`${this.selector} .canvas > div > .bleed-left {
                    margin-left: -${padding_left}${unit["paddingLeft"] ?? defaultUnit
        } !important;
                }`);
      response.push(`${this.selector} .canvas > div > .bleed {
                    margin-left: -${padding_left}${unit["paddingLeft"] ?? defaultUnit
        } !important;
                }`);
    }
    if (padding_right !== undefined) {
      response.push(`${this.selector} .canvas > div > .bleed-right {
                    margin-right: -${padding_right}${unit["paddingRight"] ?? defaultUnit
        } !important;
                }`);
      response.push(`${this.selector} .canvas > div > .bleed {
                    margin-right: -${padding_right}${unit["paddingRight"] ?? defaultUnit
        } !important;
                }`);
    }

    return response.join("\n");
  };

  mapText = (properties: any, component: string): string => {
    const response = [];
    const {
      background_color,
      font_family_bold,
      font_family_bold_italic,
      font_family_italic,
      paragraph_spacing,
      anchor_color,
      anchor_text_decoration,
      anchor_text_decoration_color,
      text_align,
      width,
      unit,
    } = properties;
    const margin = getMargin(properties);
    const padding = getPadding(properties);
    const border = getBorder(properties);
    const font = getFont(properties);
    const fontSize = getFontSize(properties);
    const dropcapFont = getDropcapFont(properties);

    const container = [margin, padding, border];
    const paragraphs = [font];

    if (paragraph_spacing !== undefined && unit?.paragraph_spacing) {
      response.push(`${this.selector} .${component} p:not(:last-child),
                ${this.selector} .${component} ul:not(:last-child),
                ${this.selector} .${component} ol:not(:last-child),
                ${this.selector} .${component} > div:not(:last-child) {
                /* Paragraph Spacing */
                margin-bottom: ${paragraph_spacing}${unit.paragraph_spacing};
            }`);
    }

    const containerCSS = container.filter((i) => i).join("\n");
    const paragraphCSS = paragraphs.filter((i) => i).join("\n");

    if (dropcapFont) {
      response.push(`${this.selector} .${component}.dropcap > :first-child::first-letter  {
                float: left;
                ${dropcapFont}
            }`);
    }

    if (background_color) {
      response.push(`${this.selector} .${component} {
                background: #${background_color.replace("#", "")};
            }`);
    }

    if (anchor_text_decoration && anchor_text_decoration !== "inherit") {
      response.push(`${this.selector} .${component} a {
                text-decoration: ${anchor_text_decoration};
            }`);
    }

    if (anchor_text_decoration_color) {
      response.push(`${this.selector} .${component} a {
                text-decoration-color: #${anchor_text_decoration_color.replace(
        "#",
        "",
      )};
            }`);
    }

    if (text_align) {
      response.push(`${this.selector} .${component} {
                text-align: ${text_align};
            }`);
    }

    if (anchor_color) {
      response.push(`${this.selector} .${component} a {
                color: #${anchor_color.replace("#", "")};
            }`);
    }

    if (containerCSS.length) {
      response.push(`${this.selector} .${component} {
                ${containerCSS}
            }`);
    }

    if (paragraphCSS.length) {
      response.push(`${this.selector} .${component} p,
                ${this.selector} .${component} ul,
                ${this.selector} .${component} ol,
                ${this.selector} cite.${component},
                ${this.selector} .${component} > div {
                ${paragraphCSS}
            }`);
    }

    if (fontSize.length) {
      response.push(`${this.selector} .${component} > p,
                ${this.selector} .${component} > div,
                ${this.selector} .${component} > ul,
                ${this.selector} cite.${component},
                ${this.selector} .${component} > ol {
                ${fontSize}
            }`);
    }

    if (font_family_bold) {
      response.push(`${this.selector} .${component} b,
            ${this.selector} .${component} strong {
                font-family: ${font_family_bold};
                font-weight: normal;
            }`);
    }

    if (font_family_italic) {
      response.push(`${this.selector} .${component} em,
            ${this.selector} .${component} i {
                font-family: ${font_family_italic};
                font-weight: normal;
            }`);
    }

    if (font_family_bold_italic) {
      response.push(`${this.selector} .${component} b i,
            ${this.selector} .${component} b em,
            ${this.selector} .${component} strong i,
            ${this.selector} .${component} strong em,
            ${this.selector} .${component} i strong,
            ${this.selector} .${component} em strong,
            ${this.selector} .${component} i b,
            ${this.selector} .${component} em b {
                font-family: ${font_family_bold_italic};
                font-weight: normal;
                font-style: normal;
            }`);
    }

    if (width) {
      response.push(`${this.selector} .${component} {
            width: ${width}%;
                }`);
    }

    return response.join("\n");
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
      `padding-bottom: ${padding_bottom}${unit["padding_bottom"] ?? defaultUnit
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
        `border: ${border_width || 1}${unit?.border_width ?? defaultUnit
        } ${border_type || "solid"};`,
      );
    } else {
      response.push(
        border_edge
          .split("-")
          .map((edge: string) => {
            return `border-${edge}: ${border_width}${unit?.border_width ?? defaultUnit
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

function getFont(properties: any): string {
  const {
    color,
    font_family,
    font_style,
    letter_spacing,
    text_align,
    text_decoration,
    text_indent,
    text_transform,
    unit,
  } = properties;

  const response: Array<string> = [];

  if (color) {
    response.push(`color: #${color.replace("#", "")};`);
  }

  if (font_family) {
    response.push(`font-family: ${font_family};`);
  }

  if (font_style) {
    response.push(`font-style: ${font_style};`);
  }

  if (letter_spacing !== undefined && unit?.letter_spacing) {
    if (unit.letter_spacing === "pt") {
      response.push(
        `letter-spacing: ${parseFloat(`${letter_spacing}`) * PT_TO_EM_FACTOR
        }em;`,
      );
    } else {
      response.push(`letter-spacing: ${letter_spacing}${unit.letter_spacing};`);
    }
  }

  if (text_align) {
    response.push(`text-align: ${text_align};`);
  }

  if (text_decoration) {
    response.push(`text-decoration: ${text_decoration};`);
  }

  if (text_indent !== undefined && unit?.text_indent) {
    response.push(`text-indent: ${text_indent}${unit.text_indent};`);
  }

  if (text_transform) {
    response.push(`text-transform: ${text_transform};`);
  }

  if (response.length) {
    response.unshift(`/* Fonts */`);
  }

  return response.join("\n");
}

function getFontSize(properties: any): string {
  const { font_size, line_height, unit } = properties;
  const response: Array<string> = [];

  if (font_size !== undefined && unit?.font_size) {
    if (unit.font_size === "pt") {
      response.push(
        `font-size: ${parseFloat(`${font_size}`) * PT_TO_EM_FACTOR}em;`,
      );
    } else {
      response.push(`font-size: ${font_size}${unit.font_size};`);
    }
  }

  if (line_height !== undefined && unit?.line_height) {
    if (unit.line_height === "pt") {
      response.push(
        `line-height: ${(parseFloat(`${line_height}`) * PT_TO_EM_FACTOR_LINE_HEIGHT) / 1.6
        }rem;`,
      );
    } else {
      response.push(`line-height: ${line_height}${unit.line_height};`);
    }
  }

  if (response.length) {
    response.unshift(`/* Fonts Size */`);
  }

  return response.join("\n");
}

function getDropcapFont(properties: any): string {
  const {
    dropcap_font_size,
    dropcap_line_height,
    dropcap_color,
    dropcap_background_color,
    dropcap_font_family,
    dropcap_padding_right,
    dropcap_padding_left,
    dropcap_padding_top,
    dropcap_padding_bottom,
    dropcap_margin_top,
    dropcap_margin_bottom,
    dropcap_margin_left,
    dropcap_margin_right,
    unit,
  } = properties;
  const response: Array<string> = [];

  if (dropcap_font_size !== undefined && unit?.dropcap_font_size === "pt") {
    response.push(`font-size: ${parseFloat(dropcap_font_size)}pt;`);
  } else {
    response.push(
      dropcap_font_size
        ? `font-size: ${parseFloat(`${dropcap_font_size}`)}${unit["dropcap_font_size"]
        };`
        : `font-size: 4em;`,
    );
  }

  if (dropcap_line_height !== undefined) {
    response.push(
      `line-height: ${dropcap_line_height}${unit["dropcap_line_height"]};`,
    );
  }

  if (dropcap_font_family !== undefined) {
    response.push(`font-family: ${dropcap_font_family};`);
  }

  if (dropcap_color !== undefined) {
    response.push(`color: #${dropcap_color.replace("#", "")};`);
  }

  if (dropcap_background_color !== undefined) {
    response.push(`background: #${dropcap_background_color.replace("#", "")};`);
  }

  /* Margin */

  if (dropcap_margin_top !== undefined && unit?.["dropcap_margin_top"]) {
    response.push(
      `margin-top: ${dropcap_margin_top}${unit["dropcap_margin_top"]};`,
    );
  }

  if (dropcap_margin_bottom !== undefined && unit?.["dropcap_margin_bottom"]) {
    response.push(
      `margin-bottom: ${dropcap_margin_bottom}${unit["dropcap_margin_bottom"]};`,
    );
  }

  if (dropcap_margin_left !== undefined && unit?.["dropcap_margin_left"]) {
    response.push(
      `margin-left: ${dropcap_margin_left}${unit["dropcap_margin_left"]};`,
    );
  }

  if (dropcap_margin_right !== undefined && unit?.["dropcap_margin_right"]) {
    response.push(
      `margin-right: ${dropcap_margin_right}${unit["dropcap_margin_right"]};`,
    );
  }

  /* Padding */

  if (dropcap_padding_top !== undefined && unit?.["dropcap_padding_top"]) {
    response.push(
      `padding-top: ${dropcap_padding_top}${unit["dropcap_padding_top"]};`,
    );
  }

  if (
    dropcap_padding_bottom !== undefined &&
    unit?.["dropcap_padding_bottom"]
  ) {
    response.push(
      `padding-bottom: ${dropcap_padding_bottom}${unit["dropcap_padding_bottom"]};`,
    );
  }

  if (dropcap_padding_left !== undefined && unit?.["dropcap_padding_left"]) {
    response.push(
      `padding-left: ${dropcap_padding_left}${unit["dropcap_padding_left"]};`,
    );
  }

  if (dropcap_padding_right !== undefined && unit?.["dropcap_padding_right"]) {
    response.push(
      `padding-right: ${dropcap_padding_right}${unit["dropcap_padding_right"]};`,
    );
  }

  if (response.length) {
    response.unshift(`/* Dropcap */`);
  }
  return response.join("\n");
}
