import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [CartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [isCouponExist, setIsCouponExist] = useState(false);

  const RemoveCartItem = async (e, productId) => {
    e.preventDefault();

    console.log(localStorage.getItem("token"), productId);
    try {
      const { data } = await axios.delete(
        `https://furnival.onrender.com/cart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      setCartItems(data.data.cartItems);
      setPriceBeforeDiscount(data.data.totalCartPrice);
      if (!isCouponExist) {
        setPriceAfterDiscount(data.data.totalCartPrice);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const UpdateItemQuantity = async (quantity, productId) => {
    console.log(localStorage.getItem("token"), productId);
    try {
      const { data } = await axios.put(
        `https://furnival.onrender.com/cart/${productId}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      setCartItems(data.data.cartItems);
      setPriceBeforeDiscount(data.data.totalCartPrice);
      if (!isCouponExist) {
        setPriceAfterDiscount(data.data.totalCartPrice);
      }
      // toast.success("Product added to cart successfully", {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    } catch (e) {
      console.log(e);
    }
  };

  const ApplyCoupon = async (coupon) => {
    console.log(localStorage.getItem("token"), coupon);
    try {
      const { data } = await axios.put(
        "https://furnival.onrender.com/cart/applyCoupon",
        { coupon },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      setCartItems(data.data.cartItems);
      setPriceBeforeDiscount(data.data.totalCartPrice);
      setPriceAfterDiscount(data.data.totalPriceAfterDiscount);
      setIsCouponExist(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function getCartItems() {
      console.log(localStorage.getItem("token"));
      try {
        const { data } = await axios.get("https://furnival.onrender.com/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(data.data.cartItems);
        setCartItems(data.data.cartItems);
        setPriceBeforeDiscount(data.data.totalCartPrice);

        if (!isCouponExist) {
          setPriceAfterDiscount(data.data.totalCartPrice);
        }

        console.log(CartItems);
        // toast.success("Product added to cart successfully", {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        // });
      } catch (e) {
        console.log(e);
      }
    }

    getCartItems();
    return () => {
      console.log("effect clean");
    };
  }, []);

  return (
    <>
      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] py-24">
        <div className="flex gap-3 items-center pb-5">
          <h2 className="text-primary">Cart</h2>
          {/* <p>3 item(s)</p> */}
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col gap-5  w-2/3">
            {CartItems.map((item) => (
              <div
                className=" bg-gray-50 flex h-40 rounded-xl gap-5 pe-5 "
                key={item.product}
              >
                <figure className=" w-1/4  ">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80"
                    className="rounded-xl object-cover h-full"
                  />
                </figure>
                <div className="py-5 w-1/2 flex flex-col justify-between">
                  <h5 className=" text-primary">Product Name</h5>

                  <h6 className=" font-normal">55x54 cm</h6>
                  <div className="flex gap-1">
                    <p className="text-gray-700">Price per unit:</p>
                    <p>${item.price}</p>
                  </div>
                </div>

                <div className="py-5 w-1/4 flex flex-col items-end justify-between">
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
                  <h5 className=" text-primary">
                    ${item.price * item.quantity}
                  </h5>

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
            ))}
          </div>
          <div className="w-1/3 p-5 bg-gray-50 rounded-xl flex flex-col gap-3 h-fit">
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
                    -{(priceBeforeDiscount - priceAfterDiscount).toFixed(2)}
                  </h5>
                </div>
              ) : (
                ""
              )}

              <hr></hr>
              <div className="flex justify-between">
                <h6 className="font-normal text-gray-600 capitalize">total</h6>
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

            <button className=" btn-primary w-full py-2 rounded-xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
