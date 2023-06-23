import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Shared/Loader";
import order from "../../../public/order.svg";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isChecked,setChecked]=useState(false);
  const [cancel, setCancel] = useState(false);
  const [restItems, setRestItems] = useState(false)
  const handleRate = (value) => {
    setRating(value);
    // console.log(rating)
  };
  
  const handleReview = (data) => {
    setProduct([data]);
    setChecked(true);
    setRating(0);
    setReview("");
    const getReviews = () => {
      axios
        .get(`https://furnival.onrender.com/products/${data[0]}/reviews`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        .then((response) => {
        
          // console.log(response.data.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    };
    getReviews();
    // console.log(...data);
  };

  const submitReview = (e,id) => {
   e.preventDefault();
   setChecked(true);
  //  console.log(id)
      axios
        .post(`https://furnival.onrender.com/products/${id}/reviews`,
        {
        "ratings":rating,
        "title":review
        }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        .then((response) => {
          // console.log('send',response.data.data);
          setChecked(false);
          toast.success('your review submitted successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        })
        .catch((error) => {
          // setChecked(false);
        // console.log(error.response.data.errors)
        error.response.data.errors.map((err) => {
          toast.error(err.msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        });
          // console.log(error);
        });
  // console.log('checked',isChecked)
  };
  
  
  
  const handleCancel = (id) => {
    setCancel(false);
    setLoading(true);
      axios.put(`https://furnival.onrender.com/orders/${id}/cancel`,{}, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((response) => {
      setCancel(true);
      setLoading(false);
      toast.success('your order canceled successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // console.log(response.data.data);
      })
      .catch((error) => {
        setCancel(false);
        setLoading(false);
        // console.log(error.response.data.message);
        ;});
  }

  useEffect(() => {
    const getOrders = () => {
      axios
        .get("https://furnival.onrender.com/orders", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          setLoading(false);
          // console.log(response.data.data);
          setAllOrders(response.data.data);
        })
        .catch((error) => {
          // console.log(error.response.data.message);
        });
    };

    getOrders();
  }, [cancel]);

  return (
    <div className="flex flex-col gap-5 content-center">
      {loading && <Loader />}
      <div className="mt-5">
        <h2 className="text-primary my-2 mt-0">Orders</h2>
        <p className="text-dark">
          View your order history and check the delivery status for items
        </p>
      </div>

     {allOrders.length ==0 && 
           <img src={order} alt="no-order" className="w-1/2 mx-auto mt-[-30px]" />
     }
      {allOrders.map((order, ind) => (
        <div
          className="flex flex-col lg:flex-row gap-1 bg-bgColor px-5 w-full lg:px-10 py-7 rounded-[16px] shadow-gray "
          key={ind}
        >
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row gap-1">
              
              <div className="w-full flex flex-row items-center gap-2">
                <p className="text-primary font-bold text-sm md:text-md"> {order._id} </p>
                <p
                  className={`${
                    order.status === "delivered"
                      ? "bg-green-600/60 "
                      : order.status === "pending"
                      ? "bg-secondary"
                      : "bg-error"
                  } text-sm text-white text-bold px-4 py-1 rounded-[6px]`}
                >
                  {" "}
                  {order.status}
                </p>
              </div>
              
              {order.status == 'pending' &&
              <button className="btn btn-error-outline my-0 py-0 text-sm " onClick={()=>{handleCancel(order._id)}} > Cancle Order </button>
              }
              </div>

              <div className="w-full mt-[-10px]">
                <p className="text-dark text-bold flex items-center align-top">
                  {" "}
                  <img
                    src="./icons/date.svg"
                    alt="date"
                    className="mr-1 invert-[0.4] inline-block"
                  />{" "}
                  placed on{" "}
                  {new Date(order.createdAt).toUTCString().slice(0, 17)}{" "}
                </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-40 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-gray-300 ">
                {order.cartItems.map(
                  (item, ind) =>
                    ind < 3 && (
                      <div
                        className="flex  first:pt-0 pt-7 lg:pt-0 lg:first:ps-0 lg:ps-8 flex-row gap-2 flex-wrap"
                        key={ind}
                      >
                        <img
                          src={`${item['product'].imageCover}`}
                          // src="./images/products/product2
                          // .jpg"
                          alt="product"
                          className="w-20 h-20 rounded-[8px]"
                        />
                        <div className="flex flex-col gap-1 text-[14px]">
                          <p className="text-black font-light">
                            {" "}
                            {item["product"]?.["title"]}{" "}
                          </p>
                          <p className="text-dark">
                            {" "}
                            Quantity:{" "}
                            <span className="text-black">
                              {item.quantity}
                            </span>{" "}
                          </p>
                          <label
                            htmlFor="my-modal-5"
                            className="text-primary font-semibold lg:hidden xl:flex w-[130px]  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary "
                            onClick={(e) => {
                              handleReview([
                                item["product"]._id,
                                item["product"].title,
                                item["product"].imageCover,
                                item.price / item.quantity,
                              ]);
                            }}
                          >
                            {" "}
                            Review Product{" "}
                          </label>
                        </div>
                        <label
                          htmlFor="my-modal-5"
                          className="text-primary font-semibold hidden lg:flex xl:hidden  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary"
                          onClick={(e) => {
                            handleReview([
                              item["product"]._id,
                              item["product"].title,
                              item["product"].imageCover,
                              item.price / item.quantity,
                            ]);
                          }}
                        >
                          {" "}
                          Review Product{" "}
                        </label>
                      </div>
                    )
                )}
              </div>

              
         <div className={`${restItems?"flex":"hidden"} flex w-full flex-col lg:flex-row gap-6 lg:gap-40 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-gray-300 `} >
          {(
          order.cartItems.map(
            (item, ind) =>
              ind >2 && (
                <div
                  className="flex  first:pt-0 pt-7 lg:pt-0 lg:first:ps-0 lg:ps-8 flex-row gap-2 flex-wrap"
                  key={ind}
                >
                  <img
                    src={`${item['product'].imageCover}`}
                    // src="./images/products/product2
                    // .jpg"
                    alt="product"
                    className="w-20 h-20 rounded-[8px]"
                  />
                  <div className="flex flex-col gap-1 text-[14px]">
                    <p className="text-black font-light">
                      {" "}
                      {item["product"]?.["title"]}{" "}
                    </p>
                    <p className="text-dark">
                      {" "}
                      Quantity:{" "}
                      <span className="text-black">
                        {item.quantity}
                      </span>{" "}
                    </p>
                    <label
                      htmlFor="my-modal-5"
                      className="text-primary font-semibold lg:hidden xl:flex w-[130px]  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary "
                      onClick={(e) => {
                        handleReview([
                          item["product"]._id,
                          item["product"].title,
                          item["product"].imageCover,
                          item.price / item.quantity,
                        ]);
                      }}
                    >
                      {" "}
                      Review Product{" "}
                    </label>
                  </div>
                  <label
                    htmlFor="my-modal-5"
                    className="text-primary font-semibold hidden lg:flex xl:hidden  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary"
                    onClick={(e) => {
                      handleReview([
                        item["product"]._id,
                        item["product"].title,
                        item["product"].imageCover,
                        item.price / item.quantity,
                      ]);
                    }}
                  >
                    {" "}
                    Review Product{" "}
                  </label>
                </div>
              )
          ))}
        </div>
        
        {order.cartItems.length > 3 && (
                <p className="text-black font-semibold text-md">
                  <label
                    // htmlFor="my-modal-3"
                    onClick={() => {
                      setId(order._id);
                      setRestItems(!restItems);
                      console.log(restItems);

                    }}
                    className="text-black font-semibold text-md cursor-pointer hover:text-primary transition duration-400 "
                  >
                    {restItems?'-':'+'}{order.cartItems.length - 3} more items
                  </label>
                </p>
              )}
              
            </div>
          </div>
        </div>
      ))}

      {/* <input type="checkbox" id="my-modal-3" className="modal-toggle"/>
      <div className="modal z-100 ">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-3"
            className="btn text-error px-4 rounded-[6px] btn-sm btn-circle absolute right-3 top-3 hover:bg-error hover:text-white hover:border-error"
          >
            ✕
          </label>

          {allOrders.map(
            (order, ind) =>
              order._id === id && (
                <div key={ind}>
                  <div className="w-full flex flex-row items-center  gap-4 pb-4 ">
                    <p className="text-primary font-bold "> {order._id} </p>
                    <p
                      className={`${
                        order.status == 'delivered'
                          ? "bg-green-600/60 "
                          : order.status == 'pending'
                          ? "bg-secondary"
                          : "bg-error"
                      } text-sm text-white text-bold px-4 py-1 rounded-[6px]`}
                    >
                      {order.status}
                    </p>
                  </div>

                  <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
                    <div className="w-full">
                      <div className="flex flex-col gap-4">
                        <div className="w-full mt-[-10px]">
                          <p className="text-dark text-bold flex items-center align-top">
                            {" "}
                            <img
                              src="./icons/date.svg"
                              alt="date"
                              className="mr-1 invert-[0.4] inline-block"
                            />{" "}
                            placed on{" "}
                            {new Date(order.createdAt)
                              .toUTCString()
                              .slice(0, 17)}{" "}
                          </p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-6 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-gray-300 ">
                          {order.cartItems.map((item, ind) => (
                            <div
                              className="flex  first:pt-0 pt-7 lg:pt-0 lg:first:ps-0 lg:ps-8 flex-row gap-2 flex-wrap"
                              key={ind}
                            >
                              <img
                                src={`${item['product'].imageCover}`}
                                // src="./images/products/product2.jpg"
                                alt="product"
                                className="w-20 h-20 rounded-[8px]"
                              />
                              <div className="flex flex-col gap-1 text-[14px]">
                                <p className="text-black font-light">
                                  {" "}
                                  {item.name}{" "}
                                </p>
                                <p className="text-dark">
                                  {" "}
                                  Quantity:{" "}
                                  <span className="text-black">
                                    {item.quantity}
                                  </span>{" "}
                                </p>
                                <button     onClick={(e) => {
                              handleReview([
                                item["product"]._id,
                                item["product"].title,
                                item["product"].imageCover,
                                item.price / item.quantity,
                              ]);
                            }} className="text-primary font-semibold lg:hidden w-[130px] xl:flex  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary ">
                                  {" "}
                                  Review Product{" "}
                                </button>
                              </div>
                              <button     onClick={(e) => {
                              handleReview([
                                item["product"]._id,
                                item["product"].title,
                                item["product"].imageCover,
                                item.price / item.quantity,
                              ]);
                            }} className="text-primary font-semibold hidden lg:flex xl:hidden  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary ">
                                {" "}
                                Review Product{" "}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between  gap-4 pt-2">
                    <p className="text-primary font-bold "> Total: </p>

                    <p className="text-secondary font-bold ">
                      {order.totalOrderPrice + "$"}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
 */}

<input type="checkbox" id="my-modal-3" className="modal-toggle"  />
      <div className="modal z-100 ">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-3"
            className="btn text-error px-4 rounded-[6px] btn-sm btn-circle absolute right-3 top-3 hover:bg-error hover:text-white hover:border-error"
          >
            ✕
          </label>

          {allOrders.map(
            (order, ind) =>
              order._id === id && (
                <div key={ind}>
                  <div className="w-full flex flex-row items-center  gap-4 pb-4 ">
                    <p className="text-primary font-bold "> {order._id} </p>
                    <p
                      className={`${
                        order.status == 'delivered'
                          ? "bg-green-600/60 "
                          : order.status == 'pending'
                          ? "bg-secondary"
                          : "bg-error"
                      } text-sm text-white text-bold px-4 py-1 rounded-[6px]`}
                    >
                      {order.status}
                    </p>
                  </div>

                  <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
                    <div className="w-full">
                      <div className="flex flex-col gap-4">
                        <div className="w-full mt-[-10px]">
                          <p className="text-dark text-bold flex items-center align-top">
                            {" "}
                            <img
                              src="./icons/date.svg"
                              alt="date"
                              className="mr-1 invert-[0.4] inline-block"
                            />{" "}
                            placed on{" "}
                            {new Date(order.createdAt)
                              .toUTCString()
                              .slice(0, 17)}{" "}
                          </p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-6 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-gray-300 ">
                          {order.cartItems.map((item, ind) => (
                            <div
                              className="flex  first:pt-0 pt-7 lg:pt-0 lg:first:ps-0 lg:ps-8 flex-row gap-2 flex-wrap"
                              key={ind}
                            >
                              <img
                                src={`${item['product'].imageCover}`}
                                // src="./images/products/product2.jpg"
                                alt="product"
                                className="w-20 h-20 rounded-[8px]"
                              />
                              <div className="flex flex-col gap-1 text-[14px]">
                                <p className="text-black font-light">
                                  {" "}
                                  {item.name}{" "}
                                </p>
                                <p className="text-dark">
                                  {" "}
                                  Quantity:{" "}
                                  <span className="text-black">
                                    {item.quantity}
                                  </span>{" "}
                                </p>
                                <button     onClick={(e) => {
                              handleReview([
                                item["product"]._id,
                                item["product"].title,
                                item["product"].imageCover,
                                item.price / item.quantity,
                              ]);
                            }} className="text-primary font-semibold lg:hidden w-[130px] xl:flex  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary ">
                                  {" "}
                                  Review Product{" "}
                                </button>
                              </div>
                              <button     onClick={(e) => {
                              handleReview([
                                item["product"]._id,
                                item["product"].title,
                                item["product"].imageCover,
                                item.price / item.quantity,
                              ]);
                            }} className="text-primary font-semibold hidden lg:flex xl:hidden  border-2 border-gray-300 px-2 py-1 transition duration-500 rounded-[8px] hover:bg-primary hover:text-white hover:border-primary ">
                                {" "}
                                Review Product{" "}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between  gap-4 pt-2">
                    <p className="text-primary font-bold "> Total: </p>

                    <p className="text-secondary font-bold ">
                      {order.totalOrderPrice + "$"}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>







      <input type="checkbox" id="my-modal-5" className="modal-toggle"  checked={isChecked}  onChange={(e)=>{setChecked(isChecked)}}  />
      <div className="modal z-100 ">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            onClick={()=>{setChecked(false)}}
            className="btn text-error px-4 rounded-[6px] btn-sm btn-circle absolute right-3 top-3 hover:bg-error hover:text-white hover:border-error"
          >
            ✕
          </label>

          {product.map((item, ind) => (
            <div key={ind}>
              <div className="w-full flex flex-row items-center  gap-4 pb-4 ">
                <p className="text-primary font-bold ">
                  share us your review about{" "}
                  <span className="font-bold text-secondary">{item[1]}</span>{" "}
                </p>
              </div>

              <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-4 rounded-[16px] shadow-gray ">
                <div className="w-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row gap-6 items-start justify-start ">
                      <img
                        src={`${item[2]}`}
                        // src="./images/products/product2.jpg"
                        alt="product"
                        className="w-full max-w-[350px] max-h-[300px] rounded-[8px] sm:m-auto m-0 "
                      />

                      <div className="flex flex-wrap gap-5 text-[14px] justify-between items-center w-full ">
                        <form className="flex flex-col gap-4 w-full">
                         <div className="flex flex-wrap items-center">
                         <p className="text-primary">Rate product from 1 - 5 :</p>
<div className="flex flex-row items-center justify-start">
                          <button
                            className={`text-3xl ${
                              rating >= 1 ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-400 transition duration-500  `}
                            onClick={() => handleRate(1)}
                          >
                            ★
                          </button>
                          <button
                            className={`text-3xl ${
                              rating >= 2 ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-400 transition duration-500 `}
                            onClick={() => handleRate(2)}
                          >
                            ★
                          </button>
                          <button
                            className={`text-3xl ${
                              rating >= 3 ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-400 transition duration-500  `}
                            onClick={() => handleRate(3)}
                          >
                            ★
                          </button>
                          <button
                            className={`text-3xl ${
                              rating >= 4 ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-400 transition duration-500 `}
                            onClick={() => handleRate(4)}
                          >
                            ★
                          </button>
                          <button
                            className={`text-3xl ${
                              rating >= 5 ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-400 transition duration-500 `}
                            onClick={() => handleRate(5)}
                          >
                            ★
                          </button>
                          </div>
                          </div>
                          <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="w-full min-h-[182px] rounded-[8px] border-2 border-gray-300 px-2 py-1 transition duration-500 hover:border-primary focus:border-primary focus:outline-none"
                            placeholder="write your review here"
                          ></textarea>
                          <button className="btn btn-primary" type="submit" onClick={(e)=>submitReview(e,item[0])}>
                             Send Review
                          </button>
                        </form>
                        {/* <p>{item[1]}</p> */}
                        {/* <p className="font-bold text-md text-primary ">{item[3]} $</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
