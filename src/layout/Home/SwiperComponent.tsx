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
  return (
    <Swiper
      spaceBetween={30}
      ref={swiperRef}
      slidesPerView={2}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {[0, 2, 3, 4, 5, 5].map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[#3719CA] relative h-full rounded-tr-[90px] rounded-xl w-full px-5 py-7">
            <div className="bg-brand_blue-600 absolute -right-16 -top-6  h-16 w-40 rotate-45" />
            <div className="flex items-center gap-4">
              <p className="text-white text-xl font-bold">5.0</p>
              <span className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <FaStar color="#FDC448" key={i} />
                ))}
              </span>
            </div>
            <div className="h-[0.1px] my-6 w-full bg-white" />
            <div className="">
              <p className="text-lg text-white font-bold ">
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
              <div className="flex flex-col text-white">
                <span className="text-sm font-semibold">Atif Hussain</span>
                <span className="text-xs font-medium text-[#ccc]">
                  Co Founder
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
