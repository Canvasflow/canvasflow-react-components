import { ReactElement } from "react";
import { Virtual } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";

import { Canvasflow } from "../../Canvasflow";
import Article from "./Article";

import styles from "./article.module.css";
import { useStyles } from "./Articles.hooks";

export const Articles = (props: ArticlesProps) => {
  const {
    articles,
    lang = "en",
    onSwiper,
    onArticleChange,
    onIndexChange,
  } = props;

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
    <div className={styles["articles"]}>
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
        onSlideChange={(swiper: SwiperClass) => {
          const { activeIndex } = swiper;
          if (onIndexChange) {
            onIndexChange(activeIndex);
          }

          if (!onArticleChange) {
            return;
          }
          const article = articles[activeIndex];
          if (!article) {
            return;
          }
          onArticleChange(article);
        }}
        virtual
        onSwiper={onSwiper}
        scrollbar={{
          draggable: true,
        }}
      >
        {articles.map(mapArticle({ lang }))}
      </Swiper>
      <style>{css}</style>
    </div>
  );
};

export default Articles;

interface ArticlesProps {
  articles: Array<Canvasflow.Article>;
  styles: Array<Canvasflow.Style>;
  lang?: string;
  index?: number;
  onSwiper?: (swiper: SwiperClass) => void;
  onArticleChange?: (article: Canvasflow.Article) => void;
  onIndexChange?: (index: number) => void;
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
      <SwiperSlide
        key={article.id}
        virtualIndex={index}
        className={classNames.join(" ")}
      >
        {({ isVisible }) => (
          <Article
            lang={lang}
            isSelected={isVisible}
            withStyle={false}
            {...article}
          />
        )}
      </SwiperSlide>
    );
  };
}

interface MapArgs {
  lang?: string;
}
