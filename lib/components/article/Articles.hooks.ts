import { useState, useMemo, RefObject, useEffect } from "react";
import { Canvasflow } from "../../Canvasflow";

export function useScrollTop(ref: RefObject<HTMLElement>, isSelected: boolean) {
  useEffect(() => {
    if (!ref) return;
    if (isSelected) return;
    const { current } = ref;
    if (!current) {
      return;
    }
    setTimeout(() => {
      current.scroll({ top: 0, behavior: "smooth" });
    }, 1000);
  }, [ref, isSelected]);
}

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

/**
 * React hook that checks if the component is in the viewport
 */
export function useIsInViewport(ref: RefObject<any>, hasAnimation: boolean) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      hasAnimation && ref
        ? new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          })
        : null,
    [hasAnimation, ref],
  );

  useEffect(() => {
    if (observer) {
      if (ref?.current instanceof Element) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, observer, hasAnimation]);

  return isIntersecting;
}
