import {
  Styles as S,
  mergeDeep as _mergeDeep,
  Builder as _Builder,
  Breakpoints as _Breakpoints,
} from "./canvasflow/styles/Styles";
import _Style from "./canvasflow/styles/Style";
import _Article from "./canvasflow/Article";
import _Component, {
  applyDeviceVisibility as _applyDeviceVisibility,
  isTextComponent as _isTextComponent,
} from "./canvasflow/Component";
export namespace Canvasflow {
  /**
   * This is an object representing a Canvasflow Style
   */
  export type Style = _Style;
  /**
   * This is an object representing a Canvasflow Article.
   */
  export type Article = _Article;

  /**
   * This is an object handles canvasflow styling
   */
  export namespace Styles {
    export const resolveInheritance = S.resolveInheritance;
    export const reduceStyles = S.reduceStyles;
    export const mergeParentProperties = S.mergeParentProperties;
    export const overwriteProperties = S.overwriteProperties;
    export const mergeDeep = _mergeDeep;
    export const Builder = _Builder;
    export const Breakpoints = _Breakpoints;
  }

  /**
   * This is an object representing a Canvasflow Component. You can retrieve
   * it to see properties of the component that are sent by System
   */
  export namespace Component {
    export const MAX_TEXT_COMPONENTS = _Component.MAX_TEXT_COMPONENTS;
    export type Type = _Component.Type;
    export type OnOff = _Component.OnOff;
    export type LeftRight = _Component.LeftRight;
    export type Devices = _Component.Devices;
    export type BaseComponent = _Component.BaseComponent;
    export type Component = _Component.Component;
    export type TextComponent = _Component.TextComponent;
    // Components
    export type Text = _Component.Text;
    export type Image = _Component.Image;
    export type Gallery = _Component.Gallery;
    export type GalleryImage = _Component.GalleryImage;
    export type Map = _Component.Map;
    export type Video = _Component.Video;
    export type Audio = _Component.Audio;
    export type Button = _Component.Button;
    export type Anchor = _Component.Anchor;
    export type Advert = _Component.Advert;
    export type Custom = _Component.Custom;
    export type Infogram = _Component.Infogram;
    export type Instagram = _Component.Instagram;
    export type Table = _Component.Table;
    export type TikTok = _Component.TikTok;
    export type Columns = _Component.Columns;
    export type Container = _Component.Container;
    export type Spacer = _Component.Spacer;
    export type Divider = _Component.Divider;
    export type Twitter = _Component.Twitter;
  }
}

export default Canvasflow;

export const applyDeviceVisibility = _applyDeviceVisibility;
export const isTextComponent = _isTextComponent;
