import { AnimatedHeroButton } from "@/ui/components/AnimatedButton";
import HomeSwiper from "@/ui/components/HomeSwiper";
import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="h-screen lg:h-[80vh] 2xl:h-[60vh] flex flex-col lg:flex-row gap-14 w-full 2xl:w-[90%]">
        <div className="lg:w-10/12 bg-black dark:bg-white  rounded-[60px] h-full relative ">
          <div className="w-full flex gap-5  flex-col justify-center items-start bg-brand_blue-300 p-10 h-full absolute -top-5 -left-5 rounded-[40px] ">
            <p className="font-extrabold z-40 w-full text-center lg:text-left text-3xl lg:text-6xl font-SuisseBold xl:text-[80px] lg:leading-[100px] text-black uppercase ">
              Lets Build the next big thing
            </p>
            <div className="flex flex-col gap-5  lg:flex-row w-full justify-between lg:gap-0 items-center">
              <div className="hidden lg:flex text-black items-center w-5/6 justify-between">
                <span className=" w-1/4 font-SuisseBold lg:text-[50px]">
                  7Y
                </span>
                <span className="text-xl  w-3/4 font-SuisseMedium ">
                  OF TEST DRIVEN PRODUCTION DEVELOPMENT
                </span>
              </div>
              <div className="flex text-black lg:hidden">
                <span className="text-lg text-center  font-SuisseMedium ">
                  7Y OF TEST DRIVEN PRODUCTION DEVELOPMENT
                </span>
              </div>
              <div className="lg:w-1/6  text-black uppercase lg:mr-20 xl:mr-10">
                <AnimatedHeroButton text="LET'S TALK" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-4/12  bg-black dark:bg-white  rounded-[60px] h-full lg:h-full relative ">
          <div className="w-full flex  justify-center items-end gap-1  p-0 h-full absolute -top-5 -left-5 rounded-[40px] ">
            <HomeSwiper />
            {/* {[0, 1, 2].map((i) => (
              <div key={i} className="h-5 w-5 rounded-full bg-white"></div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
