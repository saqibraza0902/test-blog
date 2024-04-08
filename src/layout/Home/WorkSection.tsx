import { SERVICES_ARRAY } from "@/mock";
import {
  SliderLeftButton,
  SliderRightButton,
} from "@/ui/components/AnimatedButton";
import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { WorkSlider } from "./SwiperComponent";

const WorkSection = () => {
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
    <div className="lg:h-screen h-max bg-none lg:bg-black rounded-[90px] relative">
      <div className="w-full h-full flex flex-col justify-center lg:h-full z-40 bg-none lg:bg-brand_blue-300 rounded-[64px] lg:absolute -top-5 -left-5">
        <div className="flex flex-col-reverse lg:flex-row p-5 gap-5">
          <div className="w-full h-full flex flex-col gap-4">
            <h2 className="text-4xl hidden lg:flex w-1/12 lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black ">
              Our Works
            </h2>
            <div className=" bg-black text-white flex flex-col gap-2 p-3 rounded-xl">
              <h3 className="text-xl  font-SuisseSemiBold">
                This is the project title which exists here
              </h3>
              <p>
                To lay a solid foundation for the creative process that follows,
                we begin our journey with the discovery phase.To lay a solid
                foundation for the creative process that follows, we begin our
                journey with the discovery phase.
              </p>
              <div>
                <div className="flex gap-10 lg:mt-6">
                  <span onClick={prevSlide} className="cursor-pointer">
                    <SliderLeftButton />
                  </span>
                  <span onClick={nextSlide} className="cursor-pointer">
                    <SliderRightButton />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full ">
            <h2 className="text-4xl flex lg:hidden w-1/12 lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black ">
              Our Works
            </h2>
            <WorkSlider
              swiperRef={swiperRef}
              onNextSlide={nextSlide}
              onPrevSlide={prevSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
