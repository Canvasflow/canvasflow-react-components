import { ReactElement, useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
} from "swiper/modules";

import { Canvasflow, applyDeviceVisibility } from "../../../Canvasflow";
import { Caption } from "./Caption";
import { Credit } from "./Credit";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../article.module.css";

export const Gallery = (props: GalleryProps): ReactElement | null => {
  const { role = "default" } = props;

  if (role === "mosaic") {
    return <Mosaic {...props} />;
  }

  return <Default {...props} />;
};

const Default = (props: GalleryProps): ReactElement | null => {
  const {
    id,
    images,
    captionenabled = "on",
    caption,
    autoplay = "on",
    animation,
    creditenabled = "on",
    credit,
    bleed,
    direction,
    devices,
    lang,
  } = props;

  useEffect(() => {
    document.documentElement.style.cssText = "--swiper-pagination-bottom: 0px";
  }, []);

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(props.index || 0);

  useEffect(() => {
    if (!swiper) return;
    swiper.changeDirection(direction);
  }, [swiper, direction]);

  useAutoPlay({
    swiper,
    autoplay: autoplay === "on",
    controlSpeed: props["control-speed"],
    images,
  });

  const containerStyle: any = {};

  const classNames = [
    styles["component"],
    "media",
    "gallery",
    styles["gallery"],
  ];
  if (bleed === "on") {
    classNames.push("bleed");
  }

  applyDeviceVisibility(classNames, devices, styles);

  const dependencies = [Navigation, Pagination];
  switch (animation) {
    case "fade":
      dependencies.push(EffectFade);
      break;
    case "cube":
      dependencies.push(EffectCube);
      break;
    case "coverflow":
      dependencies.push(EffectCoverflow);
      break;
    case "flip":
      dependencies.push(EffectFlip);
      break;
  }

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
    <div id={id} style={containerStyle} className={classNames.join(" ")}>
      <Swiper
        navigation={true}
        modules={dependencies}
        updateOnWindowResize={true}
        direction={direction}
        initialSlide={index}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        onSlideChange={onSlideChange}
        onSwiper={(s: SwiperClass) => {
          setSwiper(s);
        }}
      >
        {images.map((image, i) => {
          const { imageurl, caption } = image;
          const slideClassesName = [styles["gallery-slider"]];

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
              <figure className={styles["gallery-image"]}>
                <img src={imageurl} alt={captionText} />
                {captionenabled === "on" ? (
                  <Caption content={captionText} />
                ) : null}
                {creditenabled === "on" && credit ? (
                  <Credit content={credit} />
                ) : null}
              </figure>
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

function useAutoPlay({ swiper, autoplay, controlSpeed, images }: AutoPlayArgs) {
  const totalImages = images.length;
  useEffect(() => {
    if (!swiper) return;
    if (!autoplay) return;
    let speed = 0;

    switch (controlSpeed) {
      case "slow":
        speed = 11000;
        break;
      case "medium":
        speed = 7000;
        break;
      case "fast":
        speed = 3000;
        break;
      case "vfast":
        speed = 1500;
        break;
      default:
        speed = 5000;
        break;
    }

    const interval = setInterval(() => {
      if (swiper.activeIndex >= totalImages) {
        swiper.slideTo(0, 200);
        return;
      }
      swiper.slideNext(200);
    }, speed);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [swiper, autoplay, controlSpeed, totalImages]);
}

interface AutoPlayArgs {
  swiper: SwiperClass | null;
  autoplay: boolean;
  controlSpeed: string;
  images: Array<Canvasflow.Component.GalleryImage>;
}

const Mosaic = (props: GalleryProps): ReactElement | null => {
  const {
    id,
    images,
    captionenabled,
    caption,
    bleed,
    credit,
    creditenabled,
    devices,
    lang,
  } = props;
  const classNames = ["media", "gallery", styles["gallery"]];
  let captionContent = "";
  if (caption) {
    if (typeof caption === "string") {
      captionContent = caption;
    } else {
      if (lang) {
        captionContent = caption[`${lang}`];
      }
    }
  }

  if (bleed) {
    classNames.push("bleed");
  }

  if (!images.length) {
    return null;
  }

  applyDeviceVisibility(classNames, devices, styles);

  return (
    <div id={id} className={classNames.join(" ")}>
      <div className={styles["mosaic"]}>
        {images.map(({ imageurl }) => (
          <MosaicTile key={imageurl} url={imageurl} />
        ))}
      </div>
      {captionenabled === "on" && captionContent ? (
        <Caption content={captionContent} />
      ) : null}
      {creditenabled === "on" && credit ? (
        <Credit content={credit} style={{}} />
      ) : null}
    </div>
  );
};

function MosaicTile({ url, caption }: MosaicTileProps) {
  return (
    <div className={styles["tile"]}>
      <img src={url} alt={caption} />
    </div>
  );
}

interface MosaicTileProps {
  url: string;
  caption?: string;
}

interface GalleryProps extends Canvasflow.Component.Gallery {
  index?: number;
  lang?: string;
}

export default Gallery;
