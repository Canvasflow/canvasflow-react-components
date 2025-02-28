import { ReactElement } from "react";
import { isTextComponent } from "../../canvasflow/Component";
import { Canvasflow } from "../../Canvasflow";
import Text from "./components/Text";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Button from "./components/Button";
import Anchor from "./components/Anchor";
import Advert from "./components/Advert";
import Custom from "./components/Custom";
import Twitter from "./components/Twitter";
import Infogram from "./components/Infogram";
import Instagram from "./components/Instagram";
import Table from "./components/Table";
// import TikTok from "./components/TikTok";
import Columns from "./components/Columns";
import Container from "./components/Container";
import Spacer from "./components/Spacer";
import Divider from "./components/Divider";

import { OnSelectArticleFn, OriginArticle } from "./components/Component.hooks";

type Type = Canvasflow.Component.Type;

export function mapComponent(args: MapArgs): (c: Type) => ReactElement | null {
  const { lang, originArticle, onSelectArticle } = args;
  return (c: Type): ReactElement | null => {
    const { id, component } = c;
    const key = id;
    if (isTextComponent(c)) {
      return (
        <Text
          lang={lang}
          originArticle={originArticle}
          onSelectArticle={onSelectArticle}
          {...(c as Canvasflow.Component.Text)}
        />
      );
    }
    switch (component) {
      case "image":
        return (
          <Image key={key} lang={lang} {...(c as Canvasflow.Component.Image)} />
        );
      case "gallery":
        return <Gallery key={key} {...(c as Canvasflow.Component.Gallery)} />;
      case "map":
        return <Map key={key} {...(c as Canvasflow.Component.Map)} />;
      case "video":
        return <Video key={key} {...(c as Canvasflow.Component.Video)} />;
      case "audio":
        return <Audio key={key} {...(c as Canvasflow.Component.Audio)} />;
      case "button":
        return <Button key={key} {...(c as Canvasflow.Component.Button)} />;
      case "anchor":
        return <Anchor key={key} {...(c as Canvasflow.Component.Anchor)} />;
      case "advert":
        return <Advert key={key} {...(c as Canvasflow.Component.Advert)} />;
      case "custom":
        return <Custom key={key} {...(c as Canvasflow.Component.Custom)} />;
      case "twitter":
        return <Twitter key={key} {...(c as Canvasflow.Component.Twitter)} />;
      case "infogram":
        return <Infogram key={key} {...(c as Canvasflow.Component.Infogram)} />;
      case "instagram":
        return (
          <Instagram key={key} {...(c as Canvasflow.Component.Instagram)} />
        );
      case "table":
        return <Table {...(c as Canvasflow.Component.Table)} />;
      case "columns":
        const columns = c as Canvasflow.Component.Columns;
        return (
          <Columns key={key} {...columns}>
            {columns.columns.map((comp: Array<Type>, index: number) => (
              <div key={`${key}-columns-${index}`}>
                {comp.map(mapComponent(args))}
              </div>
            ))}
          </Columns>
        );
      /*case "tiktok":
          return <TikTok {...(c as Canvasflow.Component.TikTok)} />;*/
      case "container":
        return <Container {...(c as Canvasflow.Component.Container)} />;
      case "spacer":
        return <Spacer {...(c as Canvasflow.Component.Spacer)} />;
      case "divider":
        return <Divider {...(c as Canvasflow.Component.Divider)} />;
      default:
        return null;
    }
  };
}

export interface MapArgs {
  lang?: string;
  originArticle?: OriginArticle;
  onSelectArticle?: OnSelectArticleFn;
}
