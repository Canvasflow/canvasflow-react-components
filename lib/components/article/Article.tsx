import { Canvasflow } from "../../Canvasflow";
import { mapComponent, MapArgs } from "./Article.utils";
import styles from './article.module.css';

export const Article = (props: ArticleProps) => {
  const { id, ArticleID, components, lang, index } = props;

  const classNames = [styles['canvas'], 'canvas'];

  const mapArgs: MapArgs = {
    lang,
  };

  return (
    <article id={`article-${id}`} data-article-id={ArticleID} data-index={index}>
      <div className={classNames.join(' ')}>
        {components.map(mapComponent(mapArgs))}
      </div>
    </article>
  );
};

interface ArticleProps extends Canvasflow.Article {
  lang?: string;
  isSelected?: boolean;
}

export default Article;