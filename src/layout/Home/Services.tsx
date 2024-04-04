import { SERVICES_ARRAY } from "@/mock";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className="lg:h-screen h-[1400px] bg-black rounded-[90px] relative">
      <div className="w-full h-full lg:h-full z-40 bg-brand_blue-300 rounded-[64px] absolute -top-5 -left-5">
        <h2 className="text-[50px] font-extrabold px-10 pt-5">Our Services</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 content-start  p-10 gap-4 h-full">
          {SERVICES_ARRAY.map((item, i) => (
            <div
              key={i}
              className="bg-black py-10 h-68 lg:h-48 flex lg:gap-3 lg:p-3 rounded-3xl "
            >
              <span className="">
                <img src={item.icon} alt="" />
              </span>
              <span className="bg-white p-1 h-14 flex justify-center items-center w-14 rounded-full">
                <GoArrowUpRight size={30} />
              </span>
              <div className="flex w-2/3 flex-col gap-5">
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
