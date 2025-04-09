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

export function useComponentAnimation({
  ref,
  animation,
  isSelected,
}: ComponentAnimationArgs) {
  const [classNames, setClassNames] = useState<Array<string>>([]);
  const hasAnimation = animation && animation.type !== "none";
  const isInViewport = useIsInViewport(ref, hasAnimation);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!ref) {
      return;
    }
    if (isInViewport) {
      setIsLoaded(true);
    }
  }, [isInViewport, ref]);

  useEffect(() => {
    if (!ref) {
      return;
    }
    if (!animation || !isSelected || !isLoaded || !hasAnimation) {
      setClassNames([]);
      return;
    }

    const { type, params } = animation;
    const classNames = [
      ...getAnimationName(type),
      ...getAnimationParams(ref.current, params),
    ];
    setClassNames(classNames);
  }, [isLoaded, isSelected, animation, hasAnimation, ref]);

  return classNames;
}

interface ComponentAnimationArgs {
  ref: React.MutableRefObject<any>;
  animation: any;
  isSelected?: boolean;
}

function getAnimationName(type: string) {
  const classNames = ["animate__animated"];
  classNames.push(`animate__${type}`);

  return classNames;
}

export function getAnimationParams(
  element: any,
  params: AnimationParams,
): Array<string> {
  const classNames: Array<string> = [];
  if (!params) {
    return classNames;
  }
  const { delay, speed } = params;
  let { repeat } = params;

  repeat = repeat === "infinite" ? "infinite" : parseInt(`${repeat}`);

  if (delay) {
    element.style.setProperty("--animate-delay", `${delay}s`);
    classNames.push(`animate__delay-1s`);
  }
  if (repeat) {
    element.style.setProperty("--animate-repeat", `${repeat}`);
    classNames.push(`animate__repeat-1`);
  }
  if (speed) {
    classNames.push(`animate__${speed}`);
  }
  return classNames;
}

interface AnimationParams {
  delay: number;
  repeat: string | number;
  speed: any;
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
