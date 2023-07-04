/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SingleProduct from "../Product/SingleProduct";
import moment from "moment/moment";
import { toast } from "react-toastify";

function ProductDetails() {
  const { productId } = useParams();

  const [oneProduct, setOneProduct] = useState();
  const [counter, setCounter] = useState(0);
  const [productsSmilar, setProductsSmilar] = useState([]);
  const [imgarr, setImgArr] = useState();
  const [AllRate, setAllRate] = useState([]);
  const [allRateLoading, setAllRateLoading] = useState(true);
  // const [images, setImages] = useState([
  //   "/images/grid/1.png",
  //   "/images/grid/2.png",
  //   "/images/grid/3.png",
  // ]);

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
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://furnival.onrender.com/products"
      );
      setProductsSmilar(data.data);
      // setImgArr(oneProduct?.images[0]);
    } catch {
      console.log("error");
    }
  };

  const addToWishList = async () => {
    try {
      const { data } = await axios.post(
        "https://furnival.onrender.com/wishlist",
        { productId: oneProduct?._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Add to wish succesfully");
      console.log(data);
    } catch (e) {
      console.error(e);
      toast.error("error");
    }
  };

  const ShowImg = (srcimg) => {
    setImgArr(srcimg);
  };

  const getOneProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://furnival.onrender.com/products/${productId}`
      );
      setOneProduct(data.data);
      console.log(oneProduct.images.length);
    } catch {
      console.log("error");
    }
  };

  const getAllRate = async () => {
    setAllRateLoading(true);

    try {
      const { data } = await axios.get(
        `https://furnival.onrender.com/products/${productId}/reviews`
      );
      if (data.data.length) {
        setAllRate(data.data);
      }
    } catch {
      console.log("error");
    } finally {
      setAllRateLoading(false);
    }
  };

  useEffect(() => {
    getAllRate();
    getOneProduct();
    getProducts();
    ShowImg();

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] mt-16 m-auto">
        <div className="flex flex-col  w-full md:flex-row ">
          <div className="flex max-sm:w-full md:w-full lg:w-2/3 lg:flex-row md:flex-row ">
            <div
              className="gallery lg:w-1/4 md:w-full sm:w-full "
              // style={{ height: "400px" }}
            >
              {oneProduct?.images.map((singleImage) => {
                return (
                  <img
                    key={singleImage}
                    className="mt-5 hover:cursor-pointer object-fit-cover w-full h-[160px] rounded-2xl "
                    src={singleImage}
                    alt="img1"
                    onClick={(e) => ShowImg(e.target.src)}
                  />
                );
              })}
            </div>
            <div className="relative shoeimf ms-3 lg:w-3/4 md:w-full h-[515px] ">
              <img
                className=" mt-5 object-cover w-full h-full rounded-2xl"
                src={imgarr ? imgarr : oneProduct?.imageCover}
              />
              <button
                onClick={addToWishList}
                className="btn btn-circle btn-secondary  px-0 mt-3 absolute right-4 top-6 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="Alldetails lg:w-1/3 sm:w-full md:w-full  ">
            <div className=" text-lg p-8">
              <h4 className="text-blue-900">{oneProduct?.title}</h4>
              <p className="text-blue-900 text-2xl">{oneProduct?.price} LE</p>
              <p className="text-blue-900">{oneProduct?.description}</p>
              <div className="list text-black text-xl flex flex-col  mt-7">
                <div className="listDetails1 ">
                  <ul>
                    <li className="text-blue-950">
                      Color :
                      <span className="text-black">
                        {oneProduct?.colors[0]}
                      </span>
                    </li>
                    {/* <li className="text-blue-950">
                      Height in cm : <span className="text-black">50</span>
                    </li>
                    <li className="text-blue-950">
                      Width in cm :<span className="text-black">160</span>
                    </li>
                    <li className="text-blue-950">
                      Depth in cm:<span className="text-black">170</span>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="listDetails2">
                  <ul>
                    <li className="text-blue-950">
                      Base Material :<span className="text-black"> MDF</span>
                    </li>
                    <li className="text-blue-950">
                      Surface Material :
                      <span className="text-black">White</span>
                    </li>
                    <li className="text-blue-950">
                      Finish :
                      <span className="text-black">Protective layer</span>
                    </li>
                    <li className="text-blue-950">
                      Country of origin :{" "}
                      <span className="text-black">Egypt</span>
                    </li>
                  </ul>

                </div>
                */}
                <button
                  className="btn addToCart mt-6"
                  onClick={(e) => {
                    if (localStorage.getItem("token")) {
                      AddToCart(e, productId);
                    } else {
                      navigate("/Login");
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 mt-16">
          <h2 className="text-center mb-8">Rating</h2>
          <div className="ratinguser justify-evenly flex flex-wrap gap-10">
            {AllRate.length ? (
              AllRate?.map((rate) => {
                return (
                  <div
                    key={rate._id}
                    className="stat w-64 rounded-2xl shadow-md relative"
                  >
                    <div className="stat-title text-primary  capitalize font-semibold">
                      {rate.user?.name}
                    </div>
                    <div className="text-gray-700 mb-1 text-sm">
                      {moment(rate?.createdAt).fromNow()}
                    </div>

                    <div className="  capitalize mb-3">
                      <p>{rate?.title}</p>
                    </div>

                    {rate?.ratings > 3.5 ? (
                      <span className="badge badge-lg relative gap-2 font-medium text-base  border-none bg-[#8FC83D] max-sm:badge-sm max-sm:py-3 flex items-center">
                        <i className="fa-solid fa-star text-sm"></i>
                        {rate?.ratings}
                      </span>
                    ) : (
                      <span className="badge badge-lg relative gap-2 font-medium text-base  border-none  bg-secondary  max-sm:badge-sm max-sm:py-3 flex items-center">
                        <i className="fa-solid fa-star text-sm"></i>
                        {rate?.ratings}
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              <h5>no Rating</h5>
            )}
          </div>
        </div>

        <div className="w-full">
          <h3 className=" text-blue-950 mb-4">Similar Products</h3>
          <div className=" ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-4 ">
              {Array.from(Array(4)).map((e, i) => (
                <SingleProduct key={i} product={productsSmilar[i]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
