import CommonLayout from "@/layout";
import React from "react";
import Services from "@/layout/Home/Services";
import HomeSection from "@/layout/Home/HomeSection";
import RatingSection from "@/layout/Home/RatingSection";
import PartnerSection from "@/layout/Home/PartnerSection";
import BlogSection from "@/layout/Home/BlogSection";
import WorkSection from "@/layout/Home/WorkSection";
import ScrollTextSection from "@/layout/Home/ScrollTextSection";
import { home_details } from "@/utils/function";
import { IHome } from "@/utils/types";

const Home = async () => {
  const home_detail: IHome = await home_details();
  return (
    <CommonLayout>
      <section className="bg-white dark:bg-black pl-10 pr-5 py-20 lg:mt-0 lg:px-28 h-full lg:h-full 2xl:h-screen flex  flex-col justify-center items-center">
        <HomeSection hero={home_detail.HeroSection} />
      </section>
      <section className="bg-pink-50 dark:bg-black pl-10 pr-5 py-20 lg:mt-0 lg:px-28 h-full lg:h-full 2xl:h-screen flex  flex-col justify-center items-center">
        <ScrollTextSection text={home_detail.ScrollText} />
      </section>
      <section className="h-max 2xl:h-screen bg-brand_green-300 p-3  lg:p-20">
        <Services services={home_detail.ServicesPage} />
      </section>

      <section className="h-full bg-brand_blue-300 2xl:h-screen flex flex-col lg:flex-row  w-full pr-6 pl-3 lg:px-20 py-10">
        <RatingSection rating={home_detail.RatingSection} />
      </section>
      <section className="min-h-screen 2xl:h-screen  h-full lg:p-20 bg-brand_blue-100">
        <WorkSection title={home_detail.WorksSection.title} />
      </section>
      <section className="h-screen px-4 lg:p-20 flex justify-center items-center bg-brand_green-300">
        <PartnerSection partners={home_detail.PartnersSection} />
      </section>
      <section className="h-full min-h-screen bg-brand_blue-300 p-5 lg:p-20 ">
        <BlogSection mydata={home_detail.BlogSection} />
      </section>
    </CommonLayout>
  );
};

export default Home;
