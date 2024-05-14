import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { FaStar } from "react-icons/fa6";
SwiperCore.use([Navigation]);

export const RatingSwiper = ({ swiperRef, array }: any) => {
  const breakpoints = {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1536: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      spaceBetween={5}
      ref={swiperRef}
      slidesPerView={1}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-full 2xl:h-[600px]"
    >
      {array?.map((item: any, i: number) => (
        <SwiperSlide key={i} className="h-full">
          <div className=" bg-black ml-10 mt-10 rounded-[60px]  h-[500px] 2xl:h-[500px]  relative ">
            <div className="w-full flex flex-col justify-center  gap-1 bg-white p-5 h-full absolute -top-5 -left-5 rounded-[40px] ">
              <div className="flex items-center h-1/6 gap-4">
                <p className="!text-black text-xl font-bold">{item.rating}</p>
                <span className="flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <FaStar color="#FDC448" key={i} />
                  ))}
                </span>
              </div>
              <div className="h-[0.1px] my-6 w-full bg-white" />
              <div className="h-4/6">
                <p className="text-lg text-black font-bold ">{item.review}</p>
              </div>
              <div className="flex items-center h-1/6 mt-8 gap-3">
                <div className="h-12 w-12 bg-slate-400 rounded-full" />
                <div className="flex flex-col dark:text-white">
                  <span className="text-sm font-semibold text-black">
                    {item.clientName}
                  </span>
                  <span className="text-xs font-medium dark:text-[#ccc]">
                    {item.clientDescription}
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
