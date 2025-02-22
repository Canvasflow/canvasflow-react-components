import { Canvasflow } from "../../Canvasflow";
import { mapComponent, MapArgs } from "./Article.utils";

export const Article = (props: ArticleProps) => {
  const { id, ArticleID, components, lang } = props;

  const mapArgs: MapArgs = {
    lang,
  };

  return (
    <article id={`article-${id}`} data-article-id={ArticleID}>
      {components.map(mapComponent(mapArgs))}
    </article>
  );
};

interface ArticleProps extends Canvasflow.Article {
  lang?: string;
}
