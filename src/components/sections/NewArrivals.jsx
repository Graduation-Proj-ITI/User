import React from "react";
import ProductCard from "../common/ProductCard";

const NewArrivals = () => {
  return (
    <section className="mt-20">
      <h2 className="text-[#133A5E] w-96 my-10  leading-8	text-4xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl  ">
        New Arrivals
      </h2>
      <ProductCard
        news={<div className="badge border-none bg-[#8FC83D] ">NEW</div>}
      />
    </section>
  );
};

export default NewArrivals;
