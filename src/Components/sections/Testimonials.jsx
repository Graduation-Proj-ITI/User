import quote from "../../../public/images/About/quote1.png";

import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const steps = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis deserunt labore saepe officia placeat hic voluptatibus porro alias minus, qui dolorem quam! Qui facere repellat, a omnis nihil sunt?",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Jenny Wilson",
      role: "Customer",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis deserunt labore saepe officia placeat hic voluptatibus porro alias minus, qui dolorem quam! Qui facere repellat, a omnis nihil sunt?.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Leslie Alexander",
      role: "Customer",
    },
    {
      id: 3,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis deserunt labore saepe officia placeat hic voluptatibus porro alias minus, qui dolorem quam! Qui facere repellat, a omnis nihil sunt?.`,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Wade Warren",
      role: "Customer",
    },
    {
      id: 4,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis deserunt labore saepe officia placeat hic voluptatibus porro alias minus, qui dolorem quam! Qui facere repellat, a omnis nihil sunt?`,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Wade Warren",
      role: "Customer",
    },
  ];
  return (
    <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] w-full bg-bgColor py-16">
      <h2 className="capitalize text-center text-3xl">Testimonials</h2>
      <h6 className="capitalize text-center text-lg font-normal pb-8 pt-2 text-gray-500 ">
        What people says?
      </h6>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          350: {
            width: 350,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="w-full p-5 mb-12">
              <div className="relative border-2 border-opacity-50  rounded-3xl border-dark-gray p-8 mb-5 max-sm:h-64 sm:h-72 md:h-56">
                <figure className="bg-bgColor absolute right-8 max-sm:bottom-56 max-sm:w-1/6 sm:bottom-60 sm:w-1/5 md:bottom-48 md:p-1 md:w-1/12">
                  <img src={quote} />
                </figure>
                <p className="text-xl text-primary max-sm:text-base sm:text-base md:text-lg ">
                  "{step.description}"
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <figure className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={step.img} />
                  </div>
                </figure>
                <div>
                  <h6 className="">{step.name}</h6>
                  <p className=" text-gray-500">{step.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
