import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import Image from "next/image";

SwiperCore.use([Navigation, Autoplay]);
const HomeSwiper = ({ swiperRef }: any) => {
  const breakpoints = {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      spaceBetween={50}
      ref={swiperRef}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="h-full w-full"
    >
      {[0, 2, 3, 4, 5, 5].map((item, i) => (
        <SwiperSlide key={i} className="h-full">
          <div className=" bg-transparent   w-full h-full relative ">
            <Image
              src={"/test.jpg"}
              alt=""
              className="h-full object-center rounded-[40px] w-full"
              height={200}
              width={100}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSwiper;
