import React from "react";
import gImg1 from "../../../public/images/grid/1.jpg";
import gImg2 from "../../../public/images/grid/2.jpg";
import gImg3 from "../../../public/images/grid/3.jpg";
import gImg4 from "../../../public/images/grid/4.jpg";
import gImg5 from "../../../public/images/grid/5.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";

const GridProducts = () => {
  const naviagte = useNavigate();
  return (
    <section className="my-28 max-sm:my-12 sm:my-12 xl:my-28">
      <h2 className="text-primary capitalize max-sm:mb-5 sm:mb-5 md:mb-5 lg:mb-10 font-bold max-sm:text-2xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-2xl">
        modern home ideas
      </h2>
      <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 ">
        <figure className="relative col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <img src={gImg1} className="h-full rounded-xl" />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/2 left-1/4 "
              onClick={() => {
                naviagte("/product/details/64977ace04ef60e20778ab81");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

            <div
              className="absolute hidden bg-white bottom-24 left-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"
              onClick={() => {
                naviagte("/product/details/64977ace04ef60e20778ab81");
              }}
            >
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
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
        <figure className="relative col-span-1 max-sm:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 ">
          <img src={gImg2} className=" h-full rounded-xl" />
          <div className="group">
            <button className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/4  left-2/4 ">
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

            <div className="absolute hidden bg-white bottom-24 left-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
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
        <figure className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2">
          <img src={gImg3} className=" h-full rounded-xl" />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 top-1/2 left-1/2 "
              onClick={() => {
                naviagte("/product/details/64977c3804ef60e20778ac27");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

            <div
              className="absolute hidden bg-white top-1/2 left-1/3  cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"
              onClick={() => {
                naviagte("/product/details/64977c3804ef60e20778ac27");
              }}
            >
              <div className="flex justify-between ">
                <p className=" text-orange-800  font-bold text-xs py-1">New</p>
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
        <figure className="relative col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2">
          <img src={gImg4} className=" h-full rounded-xl" />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 right-1/3 bottom-1/3 "
              onClick={() => {
                naviagte("/product/details/64977c8204ef60e20778ac5d");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>
            {/* <Link to={}>
            </Link> */}
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
        <figure className="relative col-span-1 2xl:col-span-1">
          <img src={gImg5} className=" h-full rounded-xl" />
          <div className="group">
            <button
              className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/3 right-1/3 "
              onClick={() => {
                naviagte("/product/details/64977c3804ef60e20778ac27");
              }}
            >
              <i className="fa-solid fa-circle text-white scale-75"></i>
            </button>

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
  );
};

export default GridProducts;
