import React from "react";

import gImage1 from "../../../public/images/categories/gImage1.jpg";
import gImage2 from "../../../public/images/categories/gImage2.jpg";
import gImage3 from "../../../public/images/categories/gImage3.jpg";

const GridProducts = () => {
  return (
    <div>
      {" "}
      <section className="py-16 max-sm:py-4">
        <div className="carousel carousel-center w-full gap-3 max-sm:gap-2">
          <div className="carousel-item relative max-sm:w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
            <img src={gImage1} className="object-cover w-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-32 right-20 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white bottom-24 right-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                <div className="flex justify-between ">
                  <p className=" text-orange-800  font-bold text-xs py-1">
                    New
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>

                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                  Storage Unit
                </p>

                <p className=" text-slate-700  font-poppins text-xs">
                  short description...
                </p>
                <p className=" font-poppins font-semibold text-sm py-1">
                  $ 75.00
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative max-sm:w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
            <img src={gImage2} className="object-cover w-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-12 right-20 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white bottom-12 right-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                <div className="flex justify-between ">
                  <p className=" text-orange-800  font-bold text-xs py-1">
                    New
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>

                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                  Storage Unit
                </p>

                <p className=" text-slate-700  font-poppins text-xs">
                  short description...
                </p>
                <p className=" font-poppins font-semibold text-sm py-1">
                  $ 75.00
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative max-sm:w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
            <img src={gImage3} className="object-cover w-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 top-8 left-8">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white top-8 left-16 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                <div className="flex justify-between ">
                  <p className=" text-orange-800  font-bold text-xs py-1">
                    New
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>

                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                  Storage Unit
                </p>

                <p className=" text-slate-700  font-poppins text-xs">
                  short description...
                </p>
                <p className=" font-poppins font-semibold text-sm py-1">
                  $ 75.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridProducts;
