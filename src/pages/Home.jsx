import React from "react";
import BestSelling from "../components/sections/BestSelling";
import NewArrivals from "../components/sections/NewArrivals";
import Services from "../components/sections/Services";

const Home = () => {
  return (
    <div className="mx-[7.5rem]">
      <BestSelling />
      <NewArrivals />
      <Services />
    </div>
  );
};

export default Home;
