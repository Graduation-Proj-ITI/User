import axios from "axios";
import { useEffect, useState } from "react";
import emptyCart from "../../public/icons/empty-cart.svg";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import { toast } from "react-toastify";

const Cart = ({
  CartItems,
  RemoveCartItem,
  UpdateItemQuantity,
  priceBeforeDiscount,
  priceAfterDiscount,
  promoCodeDiscount,
  coupon,
  setCoupon,
  ApplyCoupon,
  isCouponExist,
  setCurrentIndex,
  currentIndex,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {CartItems.length !== 0 ? (
          <div>
            {/* <title className="flex gap-3 items-center pb-5 ">
              <h2 className="text-primary">Cart</h2>
              {/* <p>3 item(s)</p> */}
            {/* </title> */}
            <div className="flex gap-5 sm:flex-col max-sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
              <section className="flex flex-col gap-5 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 sm:w-full max-sm:w-full">
                {CartItems.map((item) => (
                  <div
                    className=" bg-gray-50 flex h-40 rounded-xl gap-5 pe-5  max-sm:h-48 "
                    key={item._id}
                  >
                    <figure className="2xl:w-1/4 max-sm:w-1/2 sm:w-1/3  ">
                      <img
                        src={item.product?.imageCover}
                        alt="product img"
                        className="rounded-xl object-cover h-full"
                      />
                    </figure>
                    <div className="py-5 max-sm:w-1/2 sm:w-2/3 2xl:w-3/4 flex flex-col gap-2 max-sm:gap-1 ">
                      <div className="flex w-full justify-between items-start  ">
                        <h5 className=" text-primary max-sm:leading-4  overflow-hidden max-sm:text-base truncate ">
                          {item.product?.title}
                        </h5>
                        <button
                          className=" btn-circle btn-error-outline flex justify-center items-center transition duration-700 btn-sm "
                          onClick={(e) => {
                            RemoveCartItem(e, item._id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="w-full flex justify-between gap-10 max-sm:gap-0 max-sm:flex-col">
                        <h6 className=" font-normal leading-6  overflow-hidden truncate ">
                          {item.product?.description}
                        </h6>

                        <h5 className=" text-primary max-sm:font-normal max-sm:text-base">
                          ${(item.price * item.quantity).toFixed(2)}
                        </h5>
                      </div>

                      <div className="w-full flex justify-between items-end max-sm:gap-0 max-sm:flex-col max-sm:items-start">
                        <div className="flex gap-1">
                          <p className="text-gray-700">Price per unit:</p>
                          <p>${item.product?.price}</p>
                        </div>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) => {
                            UpdateItemQuantity(e.target.value, item._id);
                            // setQuantity(() => e.target.value);
                            console.log(e.target.value, item.quantity);
                          }}
                          className="w-20 p-2 border-primary border-opacity-50 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <section className="p-5 bg-gray-50 rounded-xl flex flex-col gap-3 h-fit sm:w-full max-sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                <h4 className=" capitalize">Order Summary </h4>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <h6 className="font-normal text-gray-600 capitalize">
                      Subtotal
                    </h6>
                    <h5 className="">${priceBeforeDiscount.toFixed(2)}</h5>
                  </div>
                  {isCouponExist ? (
                    <div className="flex justify-between">
                      <h6 className="font-normal text-gray-600 capitalize">
                        Promo Code Discount
                      </h6>
                      <h5 className=" font-normal text-green-700">
                        -
                        {promoCodeDiscount(
                          priceBeforeDiscount,
                          priceAfterDiscount
                        )}
                      </h5>
                    </div>
                  ) : (
                    ""
                  )}

                  <hr></hr>
                  <div className="flex justify-between">
                    <h6 className="font-normal text-gray-600 capitalize">
                      total
                    </h6>
                    <h5 className="">${priceAfterDiscount.toFixed(2)}</h5>
                  </div>
                </div>

                <div className="form-control ">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Add coupon or promo code"
                      className="input input-bordered w-full"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-square btn-secondary text-primary"
                      onClick={() => {
                        ApplyCoupon(coupon);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <button
                  // to="/checkout"
                  className=" btn-primary w-full py-2 rounded-xl flex justify-center  uppercase font-bold"
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                  }}
                >
                  Checkout
                </button>
              </section>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <figure className="">
              <img src={emptyCart} />
            </figure>
            <h3 className=" text-primary text-opacity-70 font-semibold">
              Your shopping cart looks empty
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
