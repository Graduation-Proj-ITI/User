import React from "react";
import gImg1 from "../../../public/images/grid/1.png";
import gImg2 from "../../../public/images/grid/2.png";
import gImg3 from "../../../public/images/grid/3.png";
import gImg4 from "../../../public/images/grid/4.png";
import gImg5 from "../../../public/images/grid/5.png";

const GridProducts = () => {
  return (
    <div>
      <section className="py-16 max-sm:py-4">
        <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-0 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 ">
          <figure className="relative col-span-1 sm:w-full">
            <img src={gImg1} className="h-full " />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-40 left-20 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white bottom-24 left-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
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
          </figure>
          <figure className="relative col-span-1 max-sm:col-span-2 sm:col-span-2  md:col-span-1">
            <img src={gImg2} className=" h-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-24 left-28 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white bottom-24 left-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
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
          </figure>
          <figure className="relative col-span-1 row-span-2">
            <img src={gImg3} className=" h-full" />
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
          </figure>
          <figure className="relative col-span-2 row-span-2">
            <img src={gImg4} className=" h-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-48 md:right-60 max-sm:bottom-20 max-sm:right-20 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>
              <div className="absolute hidden bg-white bottom-24 right-32 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
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
          </figure>
          <figure className="relative col-span-1">
            <img src={gImg5} className=" h-full" />
            <div className="group">
              <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-32 right-28 ">
                <i className="fa-solid fa-circle text-white scale-75"></i>
              </button>

              <div className="absolute hidden bg-white bottom-24 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
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
          </figure>
        </div>
      </section>

      {/* <section className="py-16 max-sm:py-4">
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
      </section> */}
      {/* <section className="py-16 max-sm:py-4">
        <div className="grid grid-cols-3 grid-flow-row gap-3 max-sm:gap-2">
          <div className="relative col-span-1 row-span-2">
            <img src={gImg1} className="object-cover w-full" />
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
          <div className="relative col-span-1 row-span-2">
            <img src={gImg2} className="object-cover w-full" />
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
          <div className="relative col-span-1 row-span-2">
            <img src={gImg3} className="object-cover w-full" />
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
          <div className="relative col-span-2 row-span-4">
            <img src={gImg4} className="object-cover w-full" />
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
          <div className="relative col-span-1 row-span-2 ">
            <img src={gImg5} className="object-cover w-full" />
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
        </div>
      </section> */}
    </div>
  );
};

export default GridProducts;
