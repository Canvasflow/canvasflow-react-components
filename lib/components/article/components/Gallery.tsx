import { ReactElement, useEffect, useState } from "react";
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
    role
  } = props;

  if(role === 'mosaic') {
    return <Mosaic {...props} />
  }

  return <Default {...props} />
};

const Default = (props: GalleryProps): ReactElement | null => {
  const {
    id,
    images,
    captionenabled,
    caption,
    autoplay,
    animation,
    creditenabled,
    credit,
    bleed,
    direction,
    lang,
  } = props;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(props.index || 0);

  const totalImages = images.length
  const controlSpeed = props['control-speed'];

  useEffect(() => {
    if(!swiper) return;
    if(autoplay === 'off') return;
    let speed = 0;
    
    switch (controlSpeed) {
      case 'slow':
        speed = 11000;
        break;
      case 'medium':
        speed = 7000;
        break;
      case 'fast':
        speed = 3000;
        break;
      case 'vfast':
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
    }, speed)
    return () => {
      if(interval) {
        clearInterval(interval)
      }
    }
  }, [swiper, autoplay, controlSpeed, totalImages]);

  const containerStyle: any = {};

  const className = ["media", "gallery"];
  if (bleed === "on") {
    className.push("bleed");
  }

  const dependencies = [Navigation, Pagination];
  if (animation === 'fade') {
    dependencies.push(EffectFade);
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
    <div id={id} style={containerStyle} className={className.join(" ")}>
      <Swiper
        modules={dependencies}
        navigation={true}
        initialSlide={index}
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
  lang
  } = props;
  const classNames = ['media', 'gallery'];
	let captionContent = '';
	if (caption && lang) {
		captionContent =
			typeof caption === 'string' ? caption : caption[`${lang}`];
	}

	if (bleed) {
		classNames.push('bleed');
	}

	if (!images.length) {
		return null;
	}

	return (
		<div id={id} className={classNames.join(' ')}>
			<div>
				{images.map(({ imageurl }) => (
					<MosaicTile key={imageurl} url={imageurl} />
				))}
			</div>
			{captionenabled === 'on' && caption ? (
				<Caption content={captionContent} />
			) : null}
			{creditenabled === 'on' && credit ? (
				<Credit content={credit} style={{}} />
			) : null}
		</div>
	);
}


function MosaicTile({ url, caption }: MosaicTileProps) {
	return (
		<div>
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
