import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    // console.log(ref.current.scrollLeft);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategory() {
      try {
        const { data } = await axios.get(
          "https://furnival.onrender.com/categories"
        );
        setCategories(data.data);
        console.log(data.data);
      } catch (e) {
        console.log(e);
      }
    }

    getCategory();

    return () => {
      // console.log("effect clean cart");
    };
  }, []);

  return (
    <section className="my-28 max-sm:my-12 sm:my-12 xl:my-28">
      <div className="flex justify-between lg:mb-10 ">
        <h4 className="font-poppins max-sm:text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold text-primary">
          Shop by category
        </h4>

        <div className="flex gap-2">
          <button
            className="btn btn-circle btn-sm btn-primary-outline bg-transparent hover:text-white px-0"
            onClick={() => scroll(-220)}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="btn btn-circle btn-sm btn-primary-outline bg-transparent hover:text-white px-0"
            onClick={() => scroll(+220)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div
        className="carousel carousel-center w-full py-4 gap-3 max-sm:gap-1"
        ref={ref}
      >
        {categories.map((category) => (
          <Link to={`/Product/${category._id}`} key={category._id}>
            {" "}
            <div
              className={
                "max-sm:w-36 max-sm:h-56 w-56 h-72 carousel-item flex flex-col cursor-pointer group bg-cover rounded-xl  relative"
              }
            >
              <img
                src={category.image}
                className=" absolute w-full h-full rounded-xl object-cover"
              />
              <div className="w-full h-full hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center group-hover:animate-wiggle group-hover:bg-primary group-hover:bg-opacity-50 rounded-xl">
                <img
                  src={category?.icon}
                  alt={category.name}
                  className="w-3/12 object-cover "
                />
                <h6 className="max-sm:mt-3 mt-6  text-center text-lg  capitalize text-white font-medium  ">
                  {category.name}
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
