import React from "react";
// import ProductCard from "../components/common/ProductCard";
import BestSelling from "../components/sections/BestSelling";
import Slider from "../Components/sections/HomeSlider";
import Categories from "../Components/sections/HomeCategories";
import GridProducts from "../Components/sections/HomeGridProducts";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem]">
        <Categories />
        <BestSelling />
        <GridProducts />
      </div>
    </div>
  );
};

export default Home;
