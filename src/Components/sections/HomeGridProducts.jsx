import React from "react";
import gImg1 from "../../../public/images/grid/555.webp";
import gImg2 from "../../../public/images/grid/4444.webp";
import gImg3 from "../../../public/images/grid/11.webp";
import gImg4 from "../../../public/images/grid/444.webp";
import gImg5 from "../../../public/images/grid/333.webp";

import { Link, Navigate, useNavigate } from "react-router-dom";

const GridProducts = () => {
  const naviagte = useNavigate();
  return (
    <section className="my-28 max-sm:my-12 sm:my-12 xl:my-28">
      <h2 className="text-primary capitalize max-sm:mb-5 sm:mb-5 md:mb-5 lg:mb-10 font-bold max-sm:text-2xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-2xl">
        modern home ideas
      </h2>
      <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 ">
        <figure className="relative col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 ">
          <img
            src={gImg1}
            className=" h-80 w-full lg:h-full rounded-xl object-cover"
          />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/3 left-1/2 "
              onClick={() => {
                naviagte("/product/details/649774b1d8fa44facec2a148");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

            <Link to={"/product/details/649774b1d8fa44facec2a148"}>
              <div className="absolute hidden bg-white bottom-[8%] left-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                <div className="flex justify-between ">
                  <p className=" text-orange-800  font-bold text-xs py-1">
                    New
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>

                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                Frink 71'' Upholstered Sofa
                </p>

                <p className=" text-slate-700  font-poppins text-xs">
                This mid-century modern sofa is...
                </p>
                <p className=" font-poppins font-semibold text-sm py-1">
                28999 LE
                </p>
              </div>
            </Link>
          </div>
        </figure>
        <figure className="relative col-span-1 max-sm:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <img
            src={gImg2}
            className=" h-80 w-full lg:h-full rounded-xl object-cover"
          />
          <div className="group">
            <button
             onClick={() => {
              naviagte("/product/details/64b4601f0fbb8a14d2cd6db6");
            }}
            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/2  left-3/4 ">
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>
            <Link to={"/product/details/64b4601f0fbb8a14d2cd6db6"}>
            <div className="absolute hidden bg-white bottom-24 left-[50%] cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
                <i className="fa-solid fa-angle-right"></i>
              </div>

              <p className=" text-primary font-poppins font-medium  text-sm py-1">
              Esmund Tufted Velvet...
              </p>

              <p className=" text-slate-700  font-poppins text-xs">
              Arriving as a 2-piece...
              </p>
              <p className=" font-poppins font-semibold text-sm py-1">
                $ 110 LE
              </p>
            </div>
            </Link>
          </div>
        </figure>
        <figure className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2">
          <img
            src={gImg4}
            className=" h-80 w-full lg:h-full rounded-xl object-cover"
          />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 top-[47%] left-1/2 "
              onClick={() => {
                naviagte("/product/details/64b460a90fbb8a14d2cd6dba");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

            <Link to={"/product/details/64b460a90fbb8a14d2cd6dba"}>
              <div className="absolute hidden bg-white top-1/2 left-1/3  cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                <div className="flex justify-between ">
                  <p className=" text-orange-800  font-bold text-xs py-1">
                    New
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>

                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                Euclid Upholstered Accent...
                </p>

                <p className=" text-slate-700  font-poppins text-xs">
                Add this side chair to your...
                </p>
                <p className=" font-poppins font-semibold text-sm py-1">
                110 LE                </p>
              </div>
            </Link>
          </div>
        </figure>
        <figure className="relative col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2">
          <img
            src={gImg3}
            className=" h-80 w-full lg:h-full rounded-xl object-cover"
          />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 right-1/4 bottom-[30%] "
              onClick={() => {
                naviagte("/product/details/6497738fd8fa44facec29e1d");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>
            {/* <Link to={}>
            </Link> */}
                        <Link to={"/product/details/6497738fd8fa44facec29e1d"}>

            <div
              className="absolute hidden bg-white bottom-36 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"
              onClick={() => {
                naviagte("/product/details/64977c8204ef60e20778ac5d");
              }}
            >
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
                <i className="fa-solid fa-angle-right"></i>
              </div>
              
              <p className=" text-primary font-poppins font-medium  text-sm py-1">
              12-pair-shoe-rack
              </p>
              <p className=" text-slate-700  font-poppins text-xs">
              Boots in the entryway, flats...
              </p>
              <p className=" font-poppins font-semibold text-sm py-1">
              8000 LE
              </p>
            </div>
</Link>
          </div>
        </figure>
        <figure className="relative col-span-1 2xl:col-span-1">
          <img
            src={gImg5}
            className="  h-80 w-full lg:h-full rounded-xl object-cover"
          />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/2 right-1/2 "
              onClick={() => {
                naviagte("/product/details/64977c3804ef60e20778ac27");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>
            <Link to={"/product/details/64977c3804ef60e20778ac27"}>

            <div
              className="absolute hidden bg-white bottom-24 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"
              onClick={() => {
                naviagte("/product/details/64977c3804ef60e20778ac27");
              }}
            >
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
                <i className="fa-solid fa-angle-right"></i>
              </div>

              <p className=" text-primary font-poppins font-medium  text-sm py-1">
              Karling dinning...              </p>

              <p className=" text-slate-700  font-poppins text-xs">
              Calling back to the stylish...
              </p>
              <p className=" font-poppins font-semibold text-sm py-1">
              7000 LE
              </p>
            </div>
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default GridProducts;
