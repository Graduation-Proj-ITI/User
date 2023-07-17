import { useEffect, useState } from "react";
import axios from "axios";
import Star from "../icons/Star";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "./ProductSkeleton";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await axios.get(
          "https://furnival.onrender.com/products?sort=-sold"
        );
        const data = res.data;

        console.log(data.data);
        setProducts(data.data);
        
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      };
      getProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);
  
 
  const renderProduct = products.slice(0, 4).map((item) => (

    <Link to={`/product/details/${item._id}`} key={item._id}>
        {
  isLoading ? <ProductCardSkeleton />
  :
      <div className=" w-8/9 bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16">
        {/* Card Image */}
        <figure className="overflow-hidden rounded-xl h-full w-full ">
          <img
            src={item.imageCover}
            alt={item.title}
            className="object-cover h-full w-full  scale-100 group-hover:scale-110 ease-in duration-300"
          />
        </figure>
        {/* Card Content */}
        <div className="card-body py-3 z-10 rounded-xl bg-white relative bottom-10  shadow-md px-3  w-11/12 mx-auto h-1/3 max-sm:h-1/2">
          <h2 className="card-title text-[14px] font-normal leading-tight h-9 overflow-hidden text-ellipsis flex items-start text-primary">
            {item.title}
          </h2>
          <div className="flex justify-between mt-1 max-sm:mt-0">
            {/* Reviews */}
            <div className="flex gap-2  max-sm:gap-0.5  items-center">
              <span className="badge badge-lg relative gap-2 font-medium  border-none bg-[#8FC83D] text-sm max-sm:badge-sm max-sm:py-3 text-white">
                <i className="fa-solid fa-star text-sm"></i>
                {item.ratingsAverage}
              </span>
              <span className="text-[#8A8A8A] text-sm  max-sm:text-xs">
                ({item.ratingQuantity})
              </span>
            </div>
            {/* Prices */}
            <div className="flex flex-col items-end">
              <span className="font-semibold text-base leading-tight text-black">
                ${item.price}
              </span>
              <span className="text-sm line-through text-gray-700 leading-tight">
                ${item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
}
    </Link>
  ));
  return (
    <div className="grid lg:text-lg gap-7 max-sm:grid-cols-2 max-sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 ">
      {renderProduct}
    </div>
  );
};

export default ProductCard;
