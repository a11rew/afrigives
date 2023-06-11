/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import StockGirls from "../../assets/images/girls.jpg";
import StockKids from "../../assets/images/kids.jpg";
import StockTrad from "../../assets/images/trad.jpg";
import StockWomen from "../../assets/images/women.jpg";

const ImageCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={300}
      arrows={false}
      centerMode={false}
      className=""
      containerClass=""
      customTransition="all 30s linear"
      draggable={false}
      swipeable={false}
      ssr
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      transitionDuration={30000}
    >
      <div>
        <div className="mx-2">
          <img
            className="relative h-[392px] min-w-[60vw] overflow-hidden  object-cover sm:min-w-[27.5vw]"
            src={StockGirls.src}
            alt="Image of smiling kids"
          />
        </div>
      </div>
      <div>
        <div className="mx-2">
          <img
            className="relative h-[392px] min-w-[60vw] overflow-hidden  object-cover sm:min-w-[27.5vw]"
            src={StockKids.src}
            alt="Image of school kids in uniform"
          />
        </div>
      </div>
      <div>
        <div className="mx-2">
          <img
            className="relative h-[392px] min-w-[60vw] overflow-hidden  object-cover sm:min-w-[27.5vw]"
            src={StockTrad.src}
            alt="Image of celebrating women"
          />
        </div>
      </div>
      <div>
        <div className="mx-2">
          <img
            className="relative h-[392px] min-w-[60vw] overflow-hidden  object-cover sm:min-w-[27.5vw]"
            src={StockWomen.src}
            alt="Image of women in traditional garb"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
