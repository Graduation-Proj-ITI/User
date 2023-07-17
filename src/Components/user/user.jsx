import { useEffect } from "react";
import Sidebar from "../common/Sidebar";
import ScrollButton from "../Shared/ScrollToTopButton";

const User = ({
  setItemsInCart,
  itemInCart,
  cart,
  setCart,
  itemsInWishlist,
  setItemsInWishlist,
}) => {
  useEffect(() => {
    console.log("user,", itemInCart);
  });
  return (
    <div className="container-fluid grid">
      <Sidebar
        setItemsInCart={setItemsInCart}
        itemInCart={itemInCart}
        cart={cart}
        setCart={setCart}
        itemsInWishlist={itemsInWishlist}
        setItemsInWishlist={setItemsInWishlist}
      />
      {/* <ScrollButton /> */}
    </div>
  );
};

export default User;
