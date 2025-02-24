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

  private static reduceStyles(
    acc: Map<string, Canvasflow.Style>,
    style: Canvasflow.Style) {
    acc.set(`${style.id}`, style);
    return acc;
  }

  private static mergeParentProperties(
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

  private static overwriteProperties(
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

  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  private static mergeDeep(target: any, ...sources: any): any {
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
