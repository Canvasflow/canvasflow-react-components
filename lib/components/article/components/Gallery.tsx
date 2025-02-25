import { ReactElement, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Canvasflow } from "../../../Canvasflow";
import { Caption } from "./Caption";
import { Credit } from "./Credit";
export const Gallery = (props: GalleryProps): ReactElement | null => {
  const {
    id,
    role,
    images,
    captionenabled,
    caption,
    creditenabled,
    credit,
    bleed,
    direction,
    lang,
  } = props;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(props.index || 0);

  let containerStyle = {};

  const className = ["media", "gallery"];
  if (bleed === "on") {
    className.push("bleed");
  }

  const dependencies = [Navigation, Pagination];

  const onSlideChange = ({ realIndex }: SwiperClass) => {
    setIndex(realIndex);
  };

  let galleryCaptionText = "";
  if (typeof caption === "string") {
    galleryCaptionText = caption;
  } else if (typeof caption === "object" && lang) {
    galleryCaptionText = caption[lang];
  }

  return (
    <div id={id} style={containerStyle} className={className.join(" ")}>
      <Swiper
        modules={dependencies}
        navigation={true}
        slidesPerView={"auto"}
        updateOnWindowResize={true}
        direction={direction}
        pagination={{
          clickable: true,
        }}
        onSlideChange={onSlideChange}
        onSwiper={(s: SwiperClass) => {
          setSwiper(s);

          /*swiper.changeDirection(direction);
          setTimeout(() => {
            swiper.update();
          }, 1000);
          this.setState({
            swiper,
          });*/
        }}
      >
        {images.map((image, i) => {
          const { imageurl, caption } = image;
          // const slideClassesName = [galleryStyles["gallery-slider"]];
          const slideClassesName: Array<string> = [];
          /*if (i !== index) {
            slideClassesName.push();
          }*/

          let captionText = "";
          if (typeof caption === "string") {
            captionText = caption;
          } else if (typeof caption === "object" && lang) {
            captionText = caption[lang];
          }

          return (
            <SwiperSlide
              key={i}
              virtualIndex={i}
              className={slideClassesName.join(" ")}
            >
              <div>
                <img src={imageurl} alt={captionText} />
                <Caption content={captionText} />
                {creditenabled === "on" && credit ? (
                  <Credit content={credit} />
                ) : null}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {captionenabled === "on" && caption ? (
        <Caption content={galleryCaptionText} />
      ) : null}
    </div>
  );
};

interface GalleryProps extends Canvasflow.Component.Gallery {
  index?: number;
  lang?: string;
}

export default Gallery;
