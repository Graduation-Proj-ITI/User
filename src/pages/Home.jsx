import React from "react";

// import ProductCard from "../components/common/ProductCard";
import BestSelling from "../components/sections/BestSelling";
    import NewArrivals from "../components/sections/NewArrivals";
import Services from "../co mponents/sections/Services";
import Slider from "../Components/sections/HomeSlider";
import Categories from "../Components/sections/HomeCategories";
import GridProducts from "../Components/sections/HomeGridProducts";
import ScrollButton from "../Components/Shared/ScrollToTopButton";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem]">
        <Categories />
        <BestSelling />
        <NewArrivals />
       <Services />
        <GridProducts />
      </div>
      <ScrollButton />
    </div>
  );
};

export default Home;
