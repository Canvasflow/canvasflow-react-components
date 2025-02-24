import { Canvasflow } from "../../Canvasflow";

export class Styles {
    static resolveInheritance(styles: Array<Canvasflow.Style>): Map<string, Canvasflow.Style> {
        const stylesMap = new Map<string, Canvasflow.Style>();
        console.log(`Styles`, styles);

        return stylesMap;
    }
}