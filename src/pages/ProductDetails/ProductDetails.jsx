/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      toast("Add to wish succesfully");
    } catch (e) {
      console.error(e);
      toast("error");
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
                    className="mt-5 hover:cursor-pointer object-fit-cover w-full h-[160px]"
                    src={singleImage}
                    alt="img1"
                    onClick={(e) => ShowImg(e.target.src)}
                  />
                );
              })}
            </div>
            <div className="shoeimf ms-3 lg:w-3/4 md:w-full h-[515px]">
              <img
                className="mt-5 object-fit-cover w-full h-full"
                src={imgarr ? imgarr : oneProduct?.images[0]}
              />
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
                </div> */}
                <button className="btn addToCart mt-6">Add to cart</button>
                <button onClick={addToWishList} className="btn addToCart mt-3">
                  Add To Favourite
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
                    <div className="stat-title text-gray-700 capitalize font-semibold">
                      {rate.user?.name}
                    </div>

                    <div className="stat-value text-primary capitalize">
                      <p>{rate?.title}</p>
                    </div>
                    <div className="text-black mb-3">
                      {moment(rate?.createdAt).fromNow()}
                    </div>

                    {rate?.ratings > 3.5 ? (
                      <div className="indicator-item badge btn-success p-4 ">
                        <i className="fa-solid fa-star mr-1"></i>

                        <span className="text-lg">{rate?.ratings}</span>
                      </div>
                    ) : (
                      <div className="indicator-item badge btn-secondary p-4 ">
                        <i className="fa-solid fa-star mr-1"></i>

                        <span className="text-lg">{rate?.ratings}</span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <h5>no Rating</h5>
            )}
          </div>
        </div>

        <div className="similarProduct">
          <p className="text-2xl text-blue-950">Similar Products</p>
          <div className="">
            <div className="productSm justify-between flex gap-10 ">
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
