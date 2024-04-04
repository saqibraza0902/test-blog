// SwiperComponent.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { useEffect } from "react";
import { SwiperNavButtons } from "./Slides";
import { FaStar } from "react-icons/fa6";
SwiperCore.use([Navigation]);

const SwiperComponent = ({ swiperRef }: any) => {
  const breakpoints = {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      spaceBetween={30}
      ref={swiperRef}
      slidesPerView={1}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-full"
    >
      {[0, 2, 3, 4, 5, 5].map((item, i) => (
        <SwiperSlide key={i} className="h-full">
          <div className=" bg-black ml-10  mt-10 rounded-[60px]  h-[580px] 2xl:h-[500px]  relative ">
            <div className="w-full flex flex-col justify-center  gap-1 bg-brand_blue-300 p-5 h-full absolute -top-5 -left-5 rounded-[40px] ">
              <div className="flex items-center  gap-4">
                <p className="!text-black text-xl font-bold">5.0</p>
                <span className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <FaStar color="#FDC448" key={i} />
                  ))}
                </span>
              </div>
              <div className="h-[0.1px] my-6 w-full bg-white" />
              <div className="">
                <p className="text-lg dark:text-white font-bold ">
                  The client has learned to trust Halo Lab, thanks to their
                  significant knowledge in UI/UX design. The vendor has provided
                  valuable feedback by always being readily available for
                  communication. Moreover, they have a satisfying project
                  management process that makes their process smooth and
                  efficient.
                </p>
              </div>
              <div className="flex items-center mt-8 gap-3">
                <div className="h-12 w-12 bg-slate-400 rounded-full" />
                <div className="flex flex-col dark:text-white">
                  <span className="text-sm font-semibold">Atif Hussain</span>
                  <span className="text-xs font-medium dark:text-[#ccc]">
                    Co Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
