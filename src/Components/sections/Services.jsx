import React, { useEffect, useState } from "react";
import Shop from "../icons/Shop";
import Gift from "../icons/Gift";
import Support from "../icons/Support";
import Payment from "../icons/Payment";
import axios from "axios";

import useWindowSize from "../../Hooks/useWindowSize";

const Services = () => {
  const [services, setServices] = useState([]);
  const icons = [<Shop />, <Support />, <Gift />, <Payment />];
  const size = useWindowSize();

  useEffect(() => {
    try {
      const getService = async () => {
        // let i = 0;
        const res = await axios.get("http://localhost:3000/services");
        const data = res.data;
        setServices(data);
      };
      getService();
    } catch (error) {
      console.error("Error", err);
    }
  }, []);

  const Service = services.map((item) => (
    <div key={item.id}>
      <div className="w-[265px] h-[327px] bg-white rounded-[16px]  shadow-base relative bottom-20 flex flex-col items-center justify-evenly">
        {icons[item.id - 1]}
        <h3 className="text-xl text-[#133A5E] font-bold">{item.title}</h3>
        <p className="w-[180px] text-center text-bluegray-600 ">
          {item.details}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="mt-20  flex justify-center align-bottom flex-col bg-[#133A5E] 2xl:bg-white">
      <h2 className="text-[#133A5E] bg-white  mb-24 -mt-1  leading-8 text-center	text-4xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
        Services
      </h2>
      {size.width > 1535 ? (
        <>
          <div className="flex justify-center gap-8 w-full h-[683px] bg-[#133A5E] rounded-[40px]">
            {Service}
          </div>
        </>
      ) : (
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item  relative w-full">
            <div className="w-fit md:py-20 md:px-10 md:gap-10 p-8 m-auto bg-white rounded-[16px]  shadow-base flex flex-col items-center">
              <Shop />
              <h3 className="text-3xl text-[#133A5E] font-bold">
                Secure payment
              </h3>
              <p className="text-center text-xl text-bluegray-600 ">
                Safe & more secure way to pay online.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="w-fit md:py-20 md:px-10 md:gap-10 p-8 m-auto bg-white rounded-[16px]  shadow-base flex flex-col items-center">
              <Support />
              <h3 className="text-3xl text-[#133A5E] font-bold">
                Secure payment
              </h3>
              <p className="text-center text-xl text-bluegray-600 ">
                Safe & more secure way to pay online.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="w-fit md:py-20 md:px-10 md:gap-10 p-8 m-auto bg-white rounded-[16px]  shadow-base flex flex-col items-center">
              <Gift />
              <h3 className="text-3xl text-[#133A5E] font-bold">
                Secure payment
              </h3>
              <p className="text-center text-xl text-bluegray-600 ">
                Safe & more secure way to pay online.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="w-fit md:py-20 md:px-10 md:gap-10 p-8 m-auto bg-white rounded-[16px]  shadow-base flex flex-col items-center">
              <Payment />
              <h3 className="text-3xl text-[#133A5E] font-bold">
                Secure payment
              </h3>
              <p className="text-center text-xl text-bluegray-600 ">
                Safe & more secure way to pay online.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      )}
      <img
        src="/images/services.png"
        className="relative 2xl:bottom-80  w-[80%] m-auto"
      />
    </section>
  );
};

export default Services;
