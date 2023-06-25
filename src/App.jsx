// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "normalize.css";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Community from "./pages/Community";
import About from "./pages/About";
import User from "./Components/user/user";
import Footer from "./Components/Shared/Footer";
import NavBar from "./Components/Shared/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./Components/Shared/Drawer";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import SuccessOrder from "./pages/SuccessOrder";
import CurrentOrder from "./pages/CurrentOrder";
import Blogs from "./pages/Blogs";
import Wishlist from "./Components/sections/Wishlist";
import ForgetPassword from "./pages/ForgetPassword";
export default function App() {
  const [itemInCart, setItemsInCart] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Drawer>
          <NavBar itemInCart={itemInCart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Product/:categoryId?"
              element={<Product setItemsInCart={setItemsInCart} />}
            />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<User />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<ErrorPage />} />

            <Route
              path="/cart"
              element={<CurrentOrder setItemsInCart={setItemsInCart} />}
            />
            <Route
              path="/checkout"
              element={<Checkout setItemsInCart={setItemsInCart} />}
            />
            <Route path="/successOrder" element={<SuccessOrder />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/product/details/:productId"
              element={<ProductDetails />}
            />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Drawer>
      </BrowserRouter>
    </>
  );
}
