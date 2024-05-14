import { OFFERS, SERVICE_ARRAY } from "@/mock";
import Image from "next/image";
import React from "react";
import RatingSection from "../Home/RatingSection";
import { IHome } from "@/utils/types";
import { home_details } from "@/utils/function";
import Offers from "./Offers";
import Link from "next/link";
import { PUBLIC_URLS } from "@/utils/urls";
import { AnimatedHeroNav } from "@/ui/components/AnimatedButton";

const ServicesLayout = async () => {
  const home_detail: IHome = await home_details();
  return (
    <div className="h-full w-full">
      <section className="h-full pl-10 pr-4 lg:px-20 py-20 w-full">
        <div className="h-[55vh] lg:h-[80vh] w-full bg-black rounded-[60px] relative">
          <div className="h-full p-10 flex flex-col  justify-center w-full absolute -top-5 rounded-[40px] -left-5 bg-brand_blue-300">
            <div className="flex flex-col lg:flex-row lg:h-5/6 w-full items-center">
              <h1 className="text-4xl lg:text-[80px] lg:leading-[90px] font-semibold lg:w-4/6">
                PROFESSIONAL WEB DESIGN SERVICES
              </h1>
              <Image
                height={200}
                width={200}
                alt="Icon"
                className="lg:w-2/6"
                src={
                  "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/663ce9eccefecedc42c49523_service-hero_website-design-p-500.webp"
                }
              />
            </div>
            <div className="h-[0.5px]  w-full bg-brand_gray-100" />
            <div className="lg:w-4/6 lg:h-1/6 flex flex-col lg:flex-row lg:items-end pt-2">
              <div className="flex items-center gap-4">
                <p className="lg:text-5xl font-semibold">35%</p>
                <p className="lg:w-4/12 capitalize lg:text-xl font-semibold">
                  Boost in webtrafic
                </p>
              </div>
              <div className="w-[0.5px] h-full bg-brand_gray-100 mx-10" />
              <div className="flex items-center gap-4">
                <p className="lg:text-5xl font-semibold">20%</p>
                <p className="lg:w-6/12 capitalize lg:text-xl font-semibold">
                  growth in user engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen px-4 lg:p-20 flex justify-center items-center bg-brand_green-300">
        <div className="grid grid-cols-2 lg:grid-cols-3 ">
          {OFFERS.map((el, i) => (
            <Offers key={i} el={el} i={i} />
          ))}
        </div>
      </section>
      <section className="h-full bg-brand_blue-300 2xl:h-screen flex flex-col lg:flex-row  w-full pr-6 pl-3 lg:px-20 py-10">
        <RatingSection rating={home_detail.RatingSection} />
      </section>
      <section className="h-full bg-brand_blue-300 2xl:h-screen flex flex-col gap-10 w-full lg:px-20 py-10">
        <div className="pl-10 pr-4 lg:pr-0 lg:pl-0">
          <div className="h-[135vh] lg:h-[150vh] w-full bg-black rounded-[60px] relative">
            <div className="h-full p-10 w-full absolute -top-5 rounded-[40px] -left-5 bg-white">
              <div>
                <h3 className="w-1/3 text-black lg:text-7xl font-semibold">
                  DESIGN PROCESS
                </h3>
              </div>
              <div className="py-10 h-full space-y-5">
                {SERVICE_ARRAY.map((el, i) => (
                  <div
                    key={i}
                    className="bg-brand_white-200 flex flex-col lg:flex-row w-full h-max p-5 rounded-xl "
                  >
                    <div className="flex lg:w-1/2 items-center gap-3">
                      <Image src={el.icon} alt="" width={40} height={40} />
                      <div className="flex flex-col ">
                        <span className="text-black font-semibold text-xl">
                          {el.title}
                        </span>
                        <span className="text-black opacity-70 font-medium text-sm">
                          {el.time}
                        </span>
                      </div>
                    </div>

                    <div className="lg:w-1/2">
                      <p className="text-black opacity-70">{el.description}</p>
                      <span className="flex mt-4 items-center text-black w-full overflow-x-scroll lg:overflow-x-hidden gap-5">
                        <span className="text-sm opacity-70 ">
                          Deliverables:
                        </span>
                        {el.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="border-[#02021e4d] flex-nowrap text-nowrap border-[1px] rounded-full px-4 text-sm py-1 mr-3"
                          >
                            {item}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="border-[1px] border-[#02021e4d] flex flex-col lg:flex-row w-full h-max px-5 py-5 rounded-xl ">
                  <div className="flex lg:w-1/2 items-center gap-3">
                    <Image
                      src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/65675dd71d5898ca545c801f_icon-four.svg"
                      alt=""
                      height={40}
                      width={40}
                    />
                    <div className="flex flex-col ">
                      <span className="text-black font-semibold text-xl">
                        Next phases
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:w-1/2 gap-5 items-center">
                    <div className="h-full bg-brand_white-200 text-black gap-2 w-full flex flex-col rounded-lg p-3 ">
                      <span className="text-xl font-semibold">Development</span>
                      <span className="opacity-70 text-sm">
                        During development, our team turns visual elements into
                        a final product.
                      </span>
                    </div>
                    <div className="h-full bg-brand_white-200 gap-2 text-black w-full flex flex-col rounded-lg p-3 ">
                      <span className="text-xl font-semibold">
                        Growth & Care
                      </span>
                      <span className="opacity-70 text-sm">
                        Following the release, we offer you ongoing support and
                        product care.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border py-10 px-5 mx-5 rounded-xl">
          <h3 className="text-center text-xl font-semibold">
            Need it simpler and faster? We have a solution for you!
          </h3>
          <div className="flex justify-center ">
            <div className="bg-white min-w-36 w-min h-10 my-3 relative rounded-xl">
              <Link
                href={PUBLIC_URLS.CONTACT}
                className="absolute capitalize text-sm -top-1 -left-1"
              >
                <AnimatedHeroNav
                  className="bg-black h-10 min-w-36"
                  text="CONTACT US"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesLayout;
