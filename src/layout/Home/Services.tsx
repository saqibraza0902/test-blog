import { SERVICES_ARRAY } from "@/mock";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className="lg:h-[730px] 2xl:h-[85vh]  h-max bg-none lg:bg-black rounded-[90px] relative">
      <div className="w-full h-full flex flex-col justify-center lg:h-full z-40 bg-none lg:bg-brand_blue-300 rounded-[64px] lg:absolute -top-5 -left-5">
        <h2 className="text-4xl w-1/12 lg:mt-10 lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black px-10 pt-5">
          Our Services
        </h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 content-center p-4 lg:p-10 gap-4 h-full">
          {SERVICES_ARRAY.map((item, i) => (
            <div
              key={i}
              className="bg-black py-10 h-68 2xl:h-72 lg:h-52 xl:h-48 flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:p-5 rounded-3xl "
            >
              <div className="flex gap-5  lg:gap-0">
                <span className="">
                  <img src={item.icon} alt="" />
                </span>
                <span className="bg-white p-1 h-14 flex justify-center items-center w-14 rounded-full">
                  <GoArrowUpRight size={30} />
                </span>
              </div>
              <div className="flex w-11/12 lg:w-2/3 flex-col gap-1 lg:gap-5">
                <h3 className="text-white text-2xl">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
