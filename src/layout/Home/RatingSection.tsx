import {
  SliderLeftButton,
  SliderRightButton,
} from "@/ui/components/AnimatedButton";
import React, { useRef } from "react";
import SwiperComponent from "./SwiperComponent";

const RatingSection = () => {
  const swiperRef = useRef<any>(null);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <div className="w-full mr-10 lg:w-3/12  flex flex-row justify-between items-center lg:items-start px-6 lg:px-0 lg:justify-end lg:flex-col 2xl:justify-center  text-white">
        <div className="w-1/2 flex flex-col">
          <span className="text-4xl font-SuisseBold text-white">4.9</span>
          <span className="text-3xl  text-white font-SuisseMedium">
            Overall Ratings
          </span>
        </div>
        <div className="flex gap-10 lg:mt-6">
          <span onClick={prevSlide} className="cursor-pointer">
            <SliderLeftButton />
          </span>
          <span onClick={nextSlide} className="cursor-pointer">
            <SliderRightButton />
          </span>
        </div>
      </div>
      <div className="w-full lg:w-9/12 flex items-center justify-center  h-full">
        <SwiperComponent
          swiperRef={swiperRef}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
        />
      </div>
    </>
  );
};

export default RatingSection;
