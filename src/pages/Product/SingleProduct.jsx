/* eslint-disable react/prop-types */

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SingleProduct({ product, setItemsInCart }) {
  const navigate = useNavigate();
  const AddToCart = async (e, productId) => {
    e.preventDefault();

    console.log(localStorage.getItem("token"), productId);
    try {
      const { data } = await axios.post(
        "https://furnival.onrender.com/cart",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      toast.success("Product added to cart successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setItemsInCart(data.numberOfCartItems);
    } catch (e) {
      console.log(e);
    }
  };

  // const { product } = props;
  return (
    <>
      <div className="relative w-full shadow-lg mb-10 max-sm:h-60 sm:h-56 md:h-56 lg:h-60 xl:h-64 2xl:h-72 rounded-lg">
        <Link
          to={`/product/details/${product?._id}`}
          className="title leading-tight h-9 overflow-hidden text-ellipsis"
        >
          <div className="w-full h-full rounded-lg">
            <img
              src={product?.imageCover}
              alt="product-img"
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </Link>
        <div className="card-body absolute bg-white shadow-lg rounded-xl -bottom-9 left-3 right-3 2xl:left-3 2xl:right-3 max-sm:left-2 max-sm:right-2 max-sm:-bottom-10 xl:left-4 xl:right-4 ">
          <Link
            to={`/product/details/${product?._id}`}
            className="title leading-tight h-9 overflow-hidden text-ellipsis"
          >
            {product?.title}
          </Link>
          <div className="flex flex-row items-center max-sm:flex-col gap-2 ">
            <button
              className="btn text-sm py-0 w-1/2 max-sm:w-full bg-primary p-0 max-sm:order-2 max-sm:btn-sm md:w-2/3 lg:w-2/3 2xl:w-2/3 hover:bg-primary "
              onClick={(e) => {
                if (localStorage.getItem("token")) {
                  AddToCart(e, product?._id);
                } else {
                  navigate("/Login");
                }
              }}
            >
              Add to cart
            </button>
            <p className="text-end font-bold max-sm:order-1">
              ${product?.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
