import { SERVICES_ARRAY } from "@/mock";
import ContentBox from "@/ui/components/content-box";
import { IServices } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface IProp {
  services: IServices;
}
const Services = ({ services }: IProp) => {
  return (
    <div className="w-full h-full 2xl:h-full 2xl:w-[85%]">
      <ContentBox
        childClass="!bg-secondary"
        className="bg-primary px-0 h-full py-5 lg:p-10"
      >
        <h2 className="text-4xl w-1/12  lg:text-[70px] font-SuisseBold lg:leading-[65px] text-black px-10 ">
          {services?.title}
        </h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 content-start p-4 lg:p-10 gap-4 h-full ">
          {services?.services?.map((item, i) => (
            <div
              key={i}
              className="bg-black py-10 flex flex-col lg:flex-row items-center lg:items-start 2xl:h-80 gap-3 2xl:flex-col lg:p-5 rounded-3xl "
            >
              <div className="flex gap-5 lg:gap-0">
                <span className="">
                  <Image
                    className="h-14 w-14"
                    src={item.icon}
                    height={50}
                    width={50}
                    alt=""
                  />
                </span>
                ?
              </div>
              <div className="flex w-11/12 lg:w-10/12 flex-col gap-1 lg:gap-5">
                <h3 className="text-white text-2xl">{item?.title}</h3>
                <p className="text-white">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBox>
    </div>
  );
};

export default Services;