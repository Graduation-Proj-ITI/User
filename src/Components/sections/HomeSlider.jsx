import React from "react";

import { Pagination, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import slide1 from "../../../public/images/categories/image1.webp";
import slide2 from "../../../public/images/categories/image2.webp";
import slide3 from "../../../public/images/categories/image3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, EffectFade, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt={slide1}
            className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[70vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt={slide2}
            className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[70vh] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slide3}
            alt={slide3}
            className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[70vh] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
