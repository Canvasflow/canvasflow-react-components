import { useState } from "react";
import { Canvasflow } from "../../Canvasflow";
import { mapComponent, MapArgs } from "./Article.utils";
import styles from "./article.module.css";

export const Article = (props: ArticleProps) => {
  const { id, ArticleID, components, lang, index } = props;

  const { css, error, isLoading } = useStyle(props);

  const mapArgs: MapArgs = {
    lang,
  };

  if (isLoading && styles) {
    return <div>Loading</div>;
  }
  if (error && styles) {
    return <div className={styles["error"]}>{error.message}</div>;
  }

  return (
    <article
      id={`article-${id}`}
      data-article-id={ArticleID}
      data-index={index}
      className={styles["article"]}
    >
      <div className={[styles["canvas"], "canvas"].join(" ")}>
        {components.map(mapComponent(mapArgs))}
      </div>
      {css ? <style>{css}</style> : null}
    </article>
  );
};

interface ArticleProps extends Canvasflow.Article {
  lang?: string;
  isSelected?: boolean;
  styles?: Array<Canvasflow.Style>;
}

function useStyle(props: ArticleProps): Response {
  const { id, ArticleID, style, styles, components } = props;
  const article: Canvasflow.Article = {
    id,
    ArticleID,
    style,
    components,
  };
  const [css, setCSS] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(!!styles);
  const [error, setError] = useState<Error | null>(null);
  if (styles) {
    const builder = new Canvasflow.Styles.Builder([article], styles);
    builder
      .build()
      .then((_css) => {
        setCSS(_css);
      })
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    css,
    error,
    isLoading,
  };
}

interface Response {
  isLoading: boolean;
  error: Error | null;
  css: string | null;
}

export default Article;
