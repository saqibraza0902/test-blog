"use client";
import { SERVICES_ARRAY } from "@/mock";
import {
  SliderLeftButton,
  SliderRightButton,
} from "@/ui/components/AnimatedButton";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { WorkContentSlider, WorkSlider } from "./SwiperComponent";
import { get_portfolios } from "@/utils/function";

const WorkSection = () => {
  const swiperRef = useRef<any>(null);
  const swiperRefs = useRef<any>(null);
  const [loading, setloading] = useState(false);
  const nextSlide = () => {
    // console.log(swiperRef.current, swiperRefs.current);
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRefs.current &&
      swiperRefs.current.swiper
    ) {
      swiperRef.current.swiper.slideNext();
      swiperRefs.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRefs.current &&
      swiperRefs.current.swiper
    ) {
      swiperRef.current.swiper.slidePrev();
      swiperRefs.current.swiper.slidePrev();
    }
  };
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     title: "This is another portfolio.",
  //     desc: "This is the desc",
  //     gallery: [
  //       {
  //         url: "https://firebasestorage.googleapis.com/v0/b/next-firebase-33c02.appspot.com/o/1711530077152Screenshot%20(1).png?alt=media&token=06ecae98-baa4-4cd3-beca-0d3043ef6553",
  //         alt: "https://firebasestorage.googleapis.com/v0/b/next-firebase-33c02.appspot.com/o/1711530077152Screenshot%20(1).png?alt=media&token=06ecae98-baa4-4cd3-beca-0d3043ef6553",
  //       },
  //     ],
  //   },
  //   {
  //     title: "This is another portfolio no 2.",
  //     desc: "This is the desc",
  //     gallery: [
  //       {
  //         url: "https://firebasestorage.googleapis.com/v0/b/next-firebase-33c02.appspot.com/o/1711530077152Screenshot%20(1).png?alt=media&token=06ecae98-baa4-4cd3-beca-0d3043ef6553",
  //         alt: "https://firebasestorage.googleapis.com/v0/b/next-firebase-33c02.appspot.com/o/1711530077152Screenshot%20(1).png?alt=media&token=06ecae98-baa4-4cd3-beca-0d3043ef6553",
  //       },
  //     ],
  //   },
  // ];
  useEffect(() => {
    const get_data = async () => {
      try {
        setloading(true);
        const newposts = await get_portfolios();
        console.log(newposts);
        setloading(false);
        setData(newposts);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    get_data();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="min-h-screen 2xl:min-h-[800px] h-full bg-none lg:bg-black rounded-[90px] relative">
      <div className="w-full h-full flex flex-col justify-center lg:h-full z-40 bg-none lg:bg-brand_blue-300 rounded-[70px] lg:absolute -top-5 -left-5">
        <div className="flex flex-col-reverse z-0  lg:flex-row relative p-5 lg:gap-5">
          <div className="lg:w-1/2 h-full flex 2xl:justify-end flex-col z-40  -mt-12 md:mt-0 gap-4">
            <h2 className="text-4xl hidden lg:flex w-1/12 lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black ">
              Our Works
            </h2>
            <div className=" bg-black flex p-3 flex-col w-full rounded-[40px] ">
              <div>
                <WorkContentSlider
                  data={data}
                  swiperRef={swiperRefs}
                  onNextSlide={nextSlide}
                  onPrevSlide={prevSlide}
                />
              </div>
              <div className="flex gap-10 ">
                <span onClick={prevSlide} className="cursor-pointer">
                  <SliderLeftButton />
                </span>
                <span onClick={nextSlide} className="cursor-pointer">
                  <SliderRightButton />
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full lg:pr-4 z-0">
            <h2 className="text-4xl flex lg:hidden w-1/12 lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black ">
              Our Works
            </h2>
            <WorkSlider
              data={data}
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
