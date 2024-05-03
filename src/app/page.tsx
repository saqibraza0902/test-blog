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
import HomeSection from "@/layout/Home/HomeSection";
import RatingSection from "@/layout/Home/RatingSection";
import PartnerSection from "@/layout/Home/PartnerSection";
import BlogSection from "@/layout/Home/BlogSection";
import WorkSection from "@/layout/Home/WorkSection";
import ScrollTextSection from "@/layout/Home/ScrollTextSection";

const Home = () => {
  return (
    <CommonLayout>
      <section className="bg-white dark:bg-black pl-10 pr-5 py-20 lg:mt-0 lg:px-28 h-full lg:h-full 2xl:h-screen flex  flex-col justify-center items-center">
        <HomeSection />
      </section>
      <section className="bg-pink-50 dark:bg-black pl-10 pr-5 py-20 lg:mt-0 lg:px-28 h-full lg:h-full 2xl:h-screen flex  flex-col justify-center items-center">
        <ScrollTextSection />
      </section>
      <section className="h-max 2xl:h-screen bg-brand_green-300 p-3  lg:p-20">
        <Services />
      </section>

      <section className="h-full bg-brand_blue-300 2xl:h-screen flex flex-col lg:flex-row  w-full pr-6 pl-3 lg:px-20 py-10">
        <RatingSection />
      </section>
      <section className="min-h-screen 2xl:h-screen  h-full lg:p-20 bg-brand_blue-100">
        <WorkSection />
      </section>
      <section className="h-screen px-4 lg:p-20 flex justify-center items-center bg-brand_green-300">
        <PartnerSection />
      </section>
      <section className="h-full min-h-screen bg-brand_blue-300 p-5 lg:p-20 ">
        <BlogSection />
      </section>
    </CommonLayout>
  );
};

export default Home;
