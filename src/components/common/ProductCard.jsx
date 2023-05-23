import React, { useEffect, useState } from "react";
import axios from "axios";
import Star from "../icons/Star";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/products");
        const data = res.data;
        setProducts(data);
      };
      getProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);
  const renderProduct = products.map((item) => (
    <div className="card w-fit bg-transparent  " key={item.id}>
      {/* Card Image */}
      <figure>
        <img src={item.image} alt="Product" />
      </figure>
      {/* Card Content */}
      <div className="card-body pb-2 z-10 rounded-[20px] bg-gray-50 relative bottom-4 shadow-base">
        <h2 className="card-title text-lg 2xl:text-xl">{item.name}</h2>
        <div className="flex justify-between mt-5">
          {/* Reviews */}
          <div className="flex gap-2 ">
            <span className="badge flex justify-evenly relative font-bold text-[18px] border-none w-[80px] h-[30px] bg-[#8FC83D]">
              <Star /> <span className="relative left-3"></span>
              {item.rating}
            </span>
            <span className="text-[#8A8A8A]">({item.countReviews})</span>
          </div>
          {/* Prices */}
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-left">
              ${item.priceAfterDiscount}
            </span>
            <span className="text-lg line-through">${item.price}</span>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-3  lg:text-lg 2xl:grid-cols-4  ">
      {renderProduct}
    </div>
  );
};

export default ProductCard;
