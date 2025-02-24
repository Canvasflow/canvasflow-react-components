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

  static reduceStyles(acc: Map<string, Canvasflow.Style>, style: Canvasflow.Style) {
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
    const parent = Styles.mergeParentProperties(
      parentStyle,
      stylesMap,
    );
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

      result[property] = Styles.mergeDeep(
        result[property],
        overwrite[property],
      );
    }

    // Hack for system
    if (result["divider"] && result["dividers"] && result["dividers"].length) {
      const { style, bleed, width, color, margin, thickness } =
        result["divider"];

      const dividers = result.dividers.map((props: any) =>
        Styles.mergeDeep(
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

  /*
    22705 -> 22351
    22705 {
        properties: {
            'canvas': {
                "background_color": "000000",
                "body_color": "ffffff"
            }
        }
    }

    22351 {
        properties: {
            canvas: {
                "body_color": "ffffff",
                "component_margin_bottom": 20,
                "mobile_font_size": 62.5,
                "tablet_font_size": 62.5,
                "desktop_font_size": 62.5,
                "background_color": "ffffff",
                "padding_top": 0,
                "padding_bottom": 2,
                "padding_left": 20,
                "padding_right": 20,
                "border_type": "none",
                "border_edge": "bottom",
                "border_width": 3,
                "border_radius": 0,
                "border_color": "000",
                "margin_left": 0,
                "margin_right": 0,
                "margin_top": 0,
                "margin_bottom": 0,
                "unit": {
                "padding_bottom": "%",
                "padding_right": "px",
                "border_width": "px",
                "padding_top": "%",
                "padding_left": "px",
                "margin_right": "px",
                "margin_left": "px",
                "margin_bottom": "px",
                "border_radius": "px",
                "margin_top": "px"
                }
            }
        }
    }

    27777 -> 22351
  */

  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  static mergeDeep(target: any, ...sources: any): any {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          Styles.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return Styles.mergeDeep(target, ...sources);
  }
}

function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}
