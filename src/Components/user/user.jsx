import { useEffect } from "react";
import Sidebar from "../common/Sidebar";
import ScrollButton from "../Shared/ScrollToTopButton";

const User = ({
  setItemsInCart,
  itemInCart,
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
        itemsInWishlist={itemsInWishlist}
        setItemsInWishlist={setItemsInWishlist}
      />
      {/* <ScrollButton /> */}
    </div>
  );
};

export default User;
