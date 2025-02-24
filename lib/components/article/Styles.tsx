import { Canvasflow } from "../../Canvasflow";

export class Styles {
    static resolveInheritance(styles: Array<Canvasflow.Style>): Map<string, Canvasflow.Style> {
        const stylesMap = new Map<string, Canvasflow.Style>();
        const stylesWithouParent = styles.filter(s => s.parent === null);
        for(const style of stylesWithouParent) {
            stylesMap.set(`${style.id}`, style);
        }
        const stylesWithParent = styles.filter(s => s.parent !== null);
        for(const style of stylesWithParent) {
            Styles.resolveStyleInheritance(style, stylesMap);   
        }
        return stylesMap;
    }

    static resolveStyleInheritance(style: Canvasflow.Style, stylesMap: Map<string, Canvasflow.Style>): void {
        console.log(style);
        console.log(stylesMap);
    }
}

