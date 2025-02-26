import { useState } from "react";
import { Canvasflow } from "../../Canvasflow";

export function useStyles({ articles, styles }: StylesProps): Response {
  const [css, setCSS] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const builder = new Canvasflow.Styles.Builder(articles, styles);
  builder
    .build()
    .then((_css) => {
      setCSS(_css);
    })
    .catch(setError)
    .finally(() => {
      setIsLoading(false);
    });
  return {
    css,
    error,
    isLoading,
  };
}

interface StylesProps {
  articles: Array<Canvasflow.Article>;
  styles: Array<Canvasflow.Style>;
}

interface Response {
  isLoading: boolean;
  error: Error | null;
  css: string | null;
}
