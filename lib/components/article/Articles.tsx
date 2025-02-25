import { ReactElement } from "react";
import { Virtual } from 'swiper/modules';
import { SwiperSlide, Swiper } from "swiper/react";

import { Canvasflow } from "../../Canvasflow"
import { StyleBuilder } from "./Styles";
import Article from "./Article";

import articleStyles from './article.module.css';

export const Articles = (props: ArticlesProps) => {
    const {
        articles,
        styles,
        lang = 'en',
    } = props;
    const builder = new StyleBuilder(articles, styles);
    const css = builder.build();

    return <>
        <Swiper modules={[Virtual]}
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
				scrollbar={{
					draggable: true,
				}}>
            {articles.map(mapArticle({lang}))}
        </Swiper>
        <style>{css}</style>
    </>
}



interface ArticlesProps {
    articles: Array<Canvasflow.Article>;
    styles: Array<Canvasflow.Style>;
    lang?: string;
    index?: number;
}

type ArticleType = Canvasflow.Article;

function mapArticle(args: MapArgs): (a: ArticleType, index: number) => ReactElement | null {
    const {lang} = args;
    const classNames = [
        articleStyles['articles-virtual'],
        'articles-virtual',
    ];
    return (article: ArticleType, index: number): ReactElement | null =>  {
        article.index = index;
        return <span key={index}>
            <SwiperSlide virtualIndex={index} className={classNames.join(' ')}>
            <Article 
            lang={lang}
            {...article}
        />
            </SwiperSlide>
            
            </span>
    }
}

interface MapArgs {
    lang?: string;
}