import React, { useEffect, useState } from "react";
import Shop from "../icons/Shop";
import Gift from "../icons/Gift";
import Support from "../icons/Support";
import Payment from "../icons/Payment";
import axios from "axios";

import useWindowSize from "../../Hooks/useWindowSize";
import { Pagination, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: "1",
      icon: "<Shop />",
      title: "Fast Shipping",
      details: "Free delivery for order over $100.00",
    },
    {
      id: "2",
      icon: "<Support />",
      title: "Online Support",
      details: "Feel Free to call us & get best support.",
    },
    {
      id: "3",
      icon: "<Gift />",
      title: "gift voucher",
      details: "Refer a friend & get a surprise gifts.",
    },
    {
      id: "4",
      icon: "<Payment />",
      title: "Secure payment",
      details: "Safe & more secure way to pay online.",
    },
  ]);
  const icons = [<Shop />, <Support />, <Gift />, <Payment />];
  const size = useWindowSize();

  // useEffect(() => {
  //   try {
  //     const getService = async () => {
  //       // let i = 0;
  //       const res = await axios.get("http://localhost:3000/services");
  //       const data = res.data;
  //       setServices(data);
  //       console.log(services);
  //     };
  //     getService();
  //   } catch (error) {
  //     console.error("Error", err);
  //   }
  // }, []);

  // const Service = services.map((item) => (
  //   <div key={item.id}>
  //     <div className="w-full md:h-3/5 xl:h-3/5 lg:h-3/5 2xl:h-3/5 bg-white p-5 rounded-2xl shadow-base relative md:bottom-20 lg:bottom-20 xl:bottom-20 2xl:bottom-20 sm:bottom-0 sm:h-full flex flex-col items-center justify-evenly">
  //       {icons[item.id - 1]}
  //       <h3 className="text-xl text-primary font-bold ">{item.title}</h3>
  //       <p className="w-[180px]  text-center text-bluegray-600 ">
  //         {item.details}
  //       </p>
  //     </div>
  //   </div>
  // ));

  const Service = services.map((item) => (
    <div key={item.id} className="relative top-1/4">
      <div className="w-full h-full bg-white p-5 py-10 rounded-2xl shadow-base flex flex-col gap-3 items-center justify-evenly ">
        {icons[item.id - 1]}
        <h3 className="text-xl text-primary font-bold ">{item.title}</h3>
        <p className="w-[180px]  text-center text-bluegray-600 ">
          {item.details}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="flex flex-col my-28 max-sm:my-12 sm:my-12 xl:my-28 lg:my-20 2xl:my-28">
      <h2 className="text-primary max-sm:mb-5 sm:mb-5 lg:mb-16 md:pb-5 text-center font-bold max-sm:text-2xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-3xl">
        Services
      </h2>
      {size.width > 1023 ? (
        <div className="bg-primary relative h-96  rounded-3xl">
          <div className=" flex flex-row justify-center gap-3 rounded-3xl mb-5 absolute 2xl:right-28 2xl:left-28 2xl:-top-12 xl:right-20 xl:-top-12 xl:left-20 lg:right-12 lg:left-12 lg:-top-12 ">
            {Service}
          </div>
          <img
            src="/images/services.png"
            className="absolute w-[80%] md:top-2/3 md:right-20 2xl:top-1/3 2xl:right-28 2xl:left-28 max-sm:hidden xl:top-1/3 xl:right-20 xl:left-20 lg:right-24 lg:left-24 lg:top-32"
          />
        </div>
      ) : (
        <div className="pt-5 bg-primary rounded-3xl relative h-96">
          <Swiper
            modules={[Pagination, A11y, Navigation]}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            navigation={true}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id} className="">
                <div className="relative w-6/12 max-sm:w-7/12  max-sm:h-5/6  mx-auto bg-white p-5 rounded-2xl shadow-base flex flex-col items-center justify-evenly">
                  <Shop />
                  <h3 className="text-xl text-primary text-center font-bold md:text-base max-sm:py-5">
                    {item.title}
                  </h3>
                  <p className="w-[180px] md:w-[120px] text-center text-bluegray-600 md:text-sm">
                    {item.details}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src="/images/services.png"
            className="absolute w-[80%] max-sm:w-full max-sm:right-0 max-sm:left-0 right-20 left-20 -bottom-12 z-20 md:right-16 md:left-16  sm:right-12 sm:left-12  "
          />
        </div>
      )}
    </section>
  );
};

export default Services;
