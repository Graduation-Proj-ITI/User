/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SingleProduct from "../Product/SingleProduct";
import moment from "moment/moment";
import { toast } from "react-toastify";
import Loader from "../../Components/Shared/Loader";
function ProductDetails({setItemsInCart,setItemsInWishlist,itemsInWishlist}) {
  const { productId } = useParams();
  const [wishlist, setWishlist] = useState([]);
  const [oneProduct, setOneProduct] = useState();
  const [counter, setCounter] = useState(0);
  const [productsSmilar, setProductsSmilar] = useState([]);
  const [imgarr, setImgArr] = useState();
  const [AllRate, setAllRate] = useState([]);
  const [allRateLoading, setAllRateLoading] = useState(true);
  const [isInFav,setIsInFav]=useState(false)
  const [loading, setLoading] = useState(true);

  // const [images, setImages] = useState([
  //   "/images/grid/1.png",
  //   "/images/grid/2.png",
  //   "/images/grid/3.png",
  // ]);
  
  const token=localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(productId)

  const AddToCart = async (e, productId) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);

    } catch (e) {
      console.log(e);
      setLoading(false);

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
    setLoading(true);

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
      toast.success("Your product Added to wishlist successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        color: "green",
      });      console.log(data.data.length);
      setItemsInWishlist(data.data.length);
      setIsInFav(true);
      setLoading(false);

    } catch (e) {
      console.error(e);
      setIsInFav(false)
      setLoading(false);
      toast("error");
    }
  };

  const ShowImg = (srcimg) => {
    setImgArr(srcimg);
  };
  
  const getOneProduct = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `https://furnival.onrender.com/products/${productId}`
      );
      setOneProduct(data.data);
      console.log(oneProduct.images.length);
      setLoading(false);

    } catch {
      setLoading(false);
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

  let wislistIds = [];

  const getWishlist = () => {
    axios
      .get("https://furnival.onrender.com/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {        
        setWishlist(response.data.data);
       response.data.data.map((item) => item._id).includes(productId) ? setIsInFav(true) : setIsInFav(false);
      })
      .catch((error) => {
        // console.log(error);
      });

  }; 
  useEffect(() => {
    getWishlist();
    getAllRate();
    getOneProduct();
    getProducts();
    ShowImg();
    console.log(wislistIds)
    // wislistIds.includes(productId) ? setIsInFav(true) : setIsInFav(false);
    console.log( wislistIds.includes(productId))
    window.scrollTo(0, 0);
  }, [isInFav]);
  

  const handleDelete = (id) => {
    // handleRemove(id)
    setLoading(true);
    axios
      .delete(`https://furnival.onrender.com/wishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setWishlist(wishlist.filter((item) => item._id !== id));
        toast.success("Your product deleted from wishlist successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          color: "green",
        });
        setItemsInWishlist(wishlist.length -1);
        setIsInFav(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsInFav(true);
        setLoading(false);

      });
  };

  return (
    <>
          {loading && <Loader />}

      <div className=" max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] mt-16 m-auto">
        <div className="flex flex-col  w-full md:flex-row ">
          <div className="flex max-sm:w-full md:w-full lg:w-2/3 lg:flex-row md:flex-row ">
            <div
              className="gallery lg:w-1/4 md:w-full sm:w-full "
              // style={{ height: "400px" }}
            >
              {oneProduct?.images.map((singleImage) => {
              { setId(oneProduct._id) }
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
                src={imgarr ? imgarr : oneProduct?.imageCover}
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
               {   
               !isInFav?
                <button onClick={addToWishList} className="btn addToCart mt-3">
                  Add To Favourite
                </button>
                :
                <button onClick={()=>handleDelete(oneProduct._id)} className="btn addToCart mt-3"> 
                Remove From Favourite
                </button>
}
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
