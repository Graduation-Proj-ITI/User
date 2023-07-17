import { useEffect, useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SuccessOrder from "./SuccessOrder";
import Loader from "../Components/Shared/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import ScrollButton from "../Components/Shared/ScrollToTopButton";

const CurrentOrder = ({ setItemsInCart }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [cartId, setCartId] = useState("");
  let [CartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [isCouponExist, setIsCouponExist] = useState(false);
  const [loading, setLoading] = useState(true);

  const [activeLink, setActiveLink] = useState(0);

  const handleClickedLink = (index) => {
    setActiveLink(index);
  };

  const RemoveCartItem = async (e, productId) => {
    e.preventDefault();
    setLoading(true);
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
      setItemsInCart(data.numberOfCartItems);
      setPriceBeforeDiscount(data.data.totalCartPrice);
      if (!isCouponExist) {
        setPriceAfterDiscount(data.data.totalCartPrice);
      } else {
        ApplyCoupon(coupon);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const UpdateItemQuantity = async (quantity, productId) => {
    setLoading(true);
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
      console.log(data.numberOfCartItems);
      setItemsInCart(data.numberOfCartItems);
      setCartItems(data.data.cartItems);
      setPriceBeforeDiscount(data.data.totalCartPrice);
      if (!isCouponExist) {
        setPriceAfterDiscount(data.data.totalCartPrice);
      } else {
        ApplyCoupon(coupon);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const ApplyCoupon = async (coupon) => {
    setLoading(true);
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
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error(`${e.response.data.message}!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      setCoupon("");
      console.log(e.response.data.message);
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
        setLoading(false);

        setCartId(data.data._id);

        console.log(data.data);
        console.log(data.data.cartItems);
        setCartItems(data.data.cartItems);
        // setCartItems();
        setPriceBeforeDiscount(data.data.totalCartPrice);

        if (!isCouponExist) {
          setPriceAfterDiscount(data.data.totalCartPrice);
        }
        console.log(CartItems);
        // setCartId(data.data._id);
        console.log("cartId", cartId);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    }

    getCartItems();
    return () => {
      console.log("effect clean cart");
    };
  }, []);

  const promoCodeDiscount = (priceBeforeDiscount, priceAfterDiscount) =>
    (priceBeforeDiscount - priceAfterDiscount).toFixed(2);

  let orderSteps = [
    {
      id: 1,
      title: "cart",
      component: (
        <Cart
          CartItems={CartItems}
          RemoveCartItem={RemoveCartItem}
          UpdateItemQuantity={UpdateItemQuantity}
          priceBeforeDiscount={priceBeforeDiscount}
          priceAfterDiscount={priceAfterDiscount}
          promoCodeDiscount={promoCodeDiscount}
          coupon={coupon}
          setCoupon={setCoupon}
          ApplyCoupon={ApplyCoupon}
          isCouponExist={isCouponExist}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      ),
      path: "#myCart",
    },
    {
      id: 2,
      title: "Shipping Address & payment Methods",
      component: (
        <Checkout
          setItemsInCart={setItemsInCart}
          priceBeforeDiscount={priceBeforeDiscount}
          priceAfterDiscount={priceAfterDiscount}
          promoCodeDiscount={promoCodeDiscount}
          coupon={coupon}
          setCoupon={setCoupon}
          ApplyCoupon={ApplyCoupon}
          isCouponExist={isCouponExist}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          setLoading={setLoading}
          cartId={cartId}
        />
      ),
      path: "#Checkout",
    },
    {
      id: 3,
      title: "Place Order",
      component: <SuccessOrder />,
      path: "#Place Order",
    },
  ];
  window.scrollTo(0, 0);
  return (
    <>
      {loading && <Loader />}
      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] py-24">
        <ul className="steps steps-vertical lg:steps-horizontal w-full mb-10">
          {orderSteps.map((step) => (
            <li
              className={
                "step " +
                (currentIndex >= step.id
                  ? "step-primary text-primary font-semibold capitalize "
                  : " text-gray-400")
              }
              key={step.id}
            >
              {step.title}
            </li>
          ))}
        </ul>
        {orderSteps.map((step) => (
          <div
            className={currentIndex !== step.id ? " hidden" : " "}
            key={step.id}
          >
            {step.component}
          </div>
        ))}
        {/* <ScrollButton /> */}
      </div>
    </>
  );
};

export default CurrentOrder;
