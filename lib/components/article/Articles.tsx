import { ReactElement, useState } from "react";
import { Virtual } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";

import { Canvasflow } from "../../Canvasflow";
import Article from "./Article";

import styles from "./article.module.css";
import { useStyles } from "./Articles.hooks";

export const Articles = (props: ArticlesProps) => {
  const { articles, lang = "en", onSwiper } = props;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const { css, isLoading, error } = useStyles({
    articles,
    styles: props.styles,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div className={styles["error"]}>{error.message}</div>;
  }
  return (
    <>
      <Swiper
        modules={[Virtual]}
        updateOnWindowResize={true}
        initialSlide={props.index}
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides={true}
        spaceBetween={0}
        direction="horizontal"
        maxBackfaceHiddenSlides={20}
        preventClicks={true}
        virtual
        onSwiper={(s: SwiperClass) => {
          setSwiper(s);
          if (onSwiper) {
            onSwiper(s);
          }
        }}
        scrollbar={{
          draggable: true,
        }}
      >
        {articles.map(mapArticle({ lang }))}
      </Swiper>
      <style>{css}</style>
    </>
  );
};

interface ArticlesProps {
  articles: Array<Canvasflow.Article>;
  styles: Array<Canvasflow.Style>;
  lang?: string;
  index?: number;
  onSwiper?: (swiper: SwiperClass) => void;
}

type ArticleType = Canvasflow.Article;

function mapArticle(
  args: MapArgs,
): (a: ArticleType, index: number) => ReactElement | null {
  const { lang } = args;
  const classNames = [styles["articles-virtual"], "articles-virtual"];
  return (article: ArticleType, index: number): ReactElement | null => {
    article.index = index;
    return (
      <span key={index}>
        <SwiperSlide virtualIndex={index} className={classNames.join(" ")}>
          <Article lang={lang} {...article} />
        </SwiperSlide>
      </span>
    );
  };
}

interface MapArgs {
  lang?: string;
}
