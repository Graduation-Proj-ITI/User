import React, { useRef } from "react";

import Sofa from "../../../public/images/categories/sofa.webp";
import Chair from "../../../public/images/categories/chair.png";
import Storage from "../../../public/images/categories/Storage-Unit.png";
import Table from "../../../public/images/categories/tables.png";
import Decoration from "../../../public/images/categories/decoration.webp";
import Shape from "../../../public/images/categories/shape.png";

const categories = [
  {
    id: 1,
    name: "Sofas",
    img: Sofa,
  },
  {
    id: 2,
    name: "Chairs",
    img: Chair,
  },
  {
    id: 3,
    name: "Storage",
    img: Storage,
  },
  {
    id: 4,
    name: "Tables",
    img: Table,
  },
  {
    id: 5,
    name: "Decoration",
    img: Decoration,
  },
  {
    id: 6,
    name: "Sofas",
    img: Sofa,
  },
  {
    id: 7,
    name: "Chairs",
    img: Chair,
  },
  {
    id: 8,
    name: "Storage",
    img: Storage,
  },
  {
    id: 9,
    name: "Tables",
    img: Table,
  },
];
const Categories = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log(ref.current.scrollLeft);
  };
  return (
    <section className="py-16 max-sm:py-5 sm:py-10">
      <div className="flex justify-between lg:mb-10 ">
        <h4 className="font-poppins max-sm:text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold text-primary">
          Shop by category
        </h4>

        <div className="flex gap-2">
          <button
            className="btn btn-circle btn-outline btn-sm border-secondary border-2 text-secondary hover:bg-secondary hover:border-secondary hover:text-white"
            onClick={() => scroll(-180)}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="btn btn-circle btn-outline btn-sm border-secondary border-2 text-secondary hover:bg-secondary hover:border-secondary hover:text-white"
            onClick={() => scroll(+180)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div
        className="carousel carousel-center w-full p-4 gap-6 max-sm:gap-1"
        ref={ref}
      >
        {categories.map((category) => (
          <div
            className="max-sm:w-28 w-40 carousel-item flex flex-col cursor-pointer group"
            key={category.id}
          >
            <div className="w-full h-24 flex align-items-center justify-center">
              {/* <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                {" "}
                <defs>
                  {" "}
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    {" "}
                    <stop
                      id="stop1"
                      stopColor="rgba(248, 250, 252, 1)"
                      offset="0%"
                    ></stop>{" "}
                    <stop
                      id="stop2"
                      stopColor="rgba(248, 250, 252, 1)"
                      offset="100%"
                    ></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <path
                  fill="url(#sw-gradient)"
                  d="M29.1,-20C33.2,-9.7,28.9,2.3,22.7,12.1C16.4,22,8.2,29.8,-0.6,30.1C-9.5,30.5,-19,23.5,-23.2,14.8C-27.4,6.1,-26.4,-4.3,-21.6,-15C-16.9,-25.7,-8.4,-36.7,2,-37.9C12.5,-39.1,25,-30.4,29.1,-20Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  style={{ transition: "all 0.3s ease 0s" }}
                  strokeWidth="0"
                  stroke="url(#sw-gradient)"
                ></path>{" "}
              </svg> */}
              <img
                src={category.img}
                alt={category.name}
                className="w-3/4  scale-100 transition-transform 0.5s ease-in-out  drop-shadow-sm group-hover:scale-110 object-contain "
              />
            </div>
            <h6 className="max-sm:mt-3 mt-6  text-center text-lg  capitalize text-primary font-medium  group-hover:font-semibold ">
              {category.name}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
