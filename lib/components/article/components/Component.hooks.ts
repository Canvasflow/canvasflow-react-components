import { RefObject, useEffect } from "react";

/*
Function use to handle internal links in components
*/
export function useInternalLinks(args: InternalLinksArgs) {
  const { ref, id, callbackfn, originArticle } = args;
  useEffect(() => {
    if (!ref) return;
    if (!ref.current) return;
    if (!id) return;

    const element = ref.current as HTMLElement;
    const anchors = element.querySelectorAll("a");
    Array.from(anchors).filter(filterInternalLink).forEach(
      addArticleListener({
        callbackfn,
        originArticle,
      }),
    );
  }, [ref, id, originArticle, callbackfn]);
}

interface InternalLinksArgs {
  id: string;
  ref: RefObject<any>;
  callbackfn?: OnSelectArticleFn;
  originArticle?: OriginArticle;
}

function addArticleListener(args: ListenerArgs) {
  const { callbackfn, originArticle } = args;
  return (el: HTMLAnchorElement) => {
    if (el.getAttribute("data-article-id")) {
      return;
    }

    const [, , targetArticleId] = el.href
      .replace("https://", "")
      .replace("http://", "")
      .replace(el.host, "")
      .replace(/#[A-Z0-9a-z-]*/gim, "")
      .split("/");

    if (!targetArticleId) {
      return;
    }

    let elementId: string | undefined = undefined;

    if (el.href.split("#").length > 1) {
      elementId = el.href.split("#")[1];
    }

    el.setAttribute("href", "#");
    // Origin data
    if (originArticle) {
      const { id, ArticleID } = originArticle;
      el.setAttribute("data-origin-id", id);
      el.setAttribute("data-origin-article-id", ArticleID);
    }

    // Target data
    el.setAttribute("data-target-article-id", targetArticleId);
    if (elementId) {
      el.setAttribute("data-target-element-id", elementId);
    }
    el.onclick = (e) => {
      e.preventDefault();
      if (!callbackfn) return;
      console.log(`TARGET ARTICLE: `, targetArticleId);
      console.log(`ELEMENT: `, elementId);
      callbackfn(targetArticleId, elementId);
    };
  };
}

interface ListenerArgs {
  callbackfn?: OnSelectArticleFn;
  originArticle?: OriginArticle;
}

export type OnSelectArticleFn = (
  article: string,
  hash: string | undefined,
) => void;

function filterInternalLink(element: HTMLAnchorElement) {
  if (element.getAttribute("data-article-id")) {
    return true;
  }

  const href = element.href
    .replace("https://", "")
    .replace("http://", "")
    .replace(element.host, "")
    .replace(/#[A-Z0-9a-z-]*/gim, "");
  return /\/article\/[0-9]/gim.test(href);
}

export type OriginArticle = {
  id: string;
  ArticleID: string;
};
