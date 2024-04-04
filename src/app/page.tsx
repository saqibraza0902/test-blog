"use client";
import CommonLayout from "@/layout";
import React, { useRef, useState } from "react";
import ScrollText from "@/ui/components/ScrollText";
import AnimatedHoverLogo from "@/ui/components/AnimateHoverLogo";
import {
  AnimatedHeroButton,
  SliderLeftButton,
  SliderRightButton,
} from "@/ui/components/AnimatedButton";
import Services from "@/layout/Home/Services";
import SwiperComponent from "@/layout/Home/SwiperComponent";
import { useSwiper } from "swiper/react";
import { SwiperNavButtons } from "@/layout/Home/Slides";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const arr = [
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg",
    text: "Designing mobile concepts for a popular brand in electronic products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3096057f141c8ebcd_logo-jbl.svg",
    text: "Developing a full-stack application as part of the hi-end audio brand's marketing campaign.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39eb5682b005d667b_logo-creativemarket.svg",
    text: "Online marketplace that provides a platform for creators to buy and sell design assets.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3bff353f4da960f47_logo-seneca.svg",
    text: "Designing a powerful educational platform for effective learning..",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39174b67fc9938ad1_logo-auth0.svg",
    text: "Using our expertise to boost Auth0 processes.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3e925e907cbc11093_logo-corel.svg",
    text: "Showcasing a future vision for WinZip family products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
];

const Home = () => {
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
    <CommonLayout>
      <section className="bg-brand_blue-100 pl-10 pr-3 py-20 lg:mt-0 lg:px-28 h-full lg:h-screen flex flex-col justify-center items-center">
        <div className="h-screen lg:h-[480px] flex flex-col lg:flex-row gap-14 w-full">
          <div className="lg:w-10/12 bg-black  rounded-[60px] h-full relative ">
            <div className="w-full flex flex-col justify-center items-start bg-brand_blue-300 p-10 h-full absolute -top-5 -left-5 rounded-[40px] ">
              <p className="font-extrabold z-40 text-left font-SuisseBold lg:text-[80px] leading-[100px] text-black uppercase ">
                Lets Build the next big thing
              </p>
              <div className="flex flex-row w-full justify-between  gap-0 items-center">
                <p className="font-SuisseBold text-xl lg:text-[70px] text-black uppercase ">
                  7Y
                </p>
                <p className="font-bold w-3/6 text-xs lg:text-xl  2xl:text-center text-black uppercase ">
                  Of test driven production development
                </p>
                <p className="w-1/6  text-black uppercase mr-20 lg:mr-10">
                  <AnimatedHeroButton text="LET'S TALK" />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12  bg-black  rounded-[60px] h-screen lg:h-full relative ">
            <div className="w-full flex  justify-center items-end gap-1 bg-brand_blue-300 p-10 h-full absolute -top-5 -left-5 rounded-[40px] ">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-5 w-5 rounded-full bg-white"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-20 py-5 h-full lg:h-max flex flex-col justify-center items-center">
        <div className="h-full flex flex-col gap-10 justify-center items-center">
          <ScrollText />
        </div>
      </section>
      <section className="h-full bg-brand_blue-100 flex flex-col lg:flex-row w-full px-4 lg:px-20 py-10">
        <div className="w-full lg:w-1/3 flex flex-col justify-end text-white">
          <p className="text-4xl font-SuisseSemiBold text-black dark:text-white">
            4.9
          </p>
          <p className="text-lg text-black dark:text-white mt-4">
            Clutch average based on 70+ reviews. All chances are you’ll be
            impressed too.
          </p>
          <div className="flex gap-10 mt-6">
            <span onClick={prevSlide} className="cursor-pointer">
              <SliderLeftButton />
            </span>
            <span onClick={nextSlide} className="cursor-pointer">
              <SliderRightButton />
            </span>
          </div>
        </div>
        <div className="w-full lg:w-2/3 h-full">
          <SwiperComponent
            swiperRef={swiperRef}
            onNextSlide={nextSlide}
            onPrevSlide={prevSlide}
          />
        </div>
      </section>
      <section className="h-screen px-4 lg:p-20 flex justify-center items-center bg-brand_blue-600">
        <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4 grid-rows-2">
          {arr.map((item, index) => (
            <React.Fragment key={index}>
              <AnimatedHoverLogo
                imageSrc={item.img}
                index={index}
                textContent={item.text}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="h-max pl-7 pr-2  lg:px-20 py-10">
        <Services />
      </section>
    </CommonLayout>
  );
};

export default Home;
