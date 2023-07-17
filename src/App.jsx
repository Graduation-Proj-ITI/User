// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
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
import ErrorPage from "./pages/error";
import Protected from "./Components/Shared/ProtectedRoute";
import Blog from "./pages/Blog";
import Loader from "./Components/Shared/Loader";
export default function App() {
  const [itemInCart, setItemsInCart] = useState(0);
  const [itemsInWishlist, setItemsInWishlist] = useState(0);
  const [isRemoved,setIsRemoved]=useState(false);
  const [isAdressAdded,setIsAdressAdded]=useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    window.onload=()=>{
  setTimeout(() => {
      setIsLoading(false);
    }, 1000);    
    }
  }, []);

  
  return (
    <>
 {isLoading && <Loader />}
 <BrowserRouter>
        <Drawer>
          <NavBar itemInCart={itemInCart} setItemsInCart={setItemsInCart} itemsInWishlist={itemsInWishlist} setItemsInWishlist={setItemsInWishlist} isRemoved={isRemoved}/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route 
              path="/Product/:categoryId?"
              element={<Product setItemsInCart={setItemsInCart} />}
            />
           <Route
              path="/product/details/:productId?"
              element={<ProductDetails setItemsInCart={setItemsInCart} itemsInWishlist={itemsInWishlist} setItemsInWishlist={setItemsInWishlist} />}
            />
            <Route
              path="/successOrder"
              element={
                <Protected>
                  <SuccessOrder />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <User itemsInWishlist={itemsInWishlist} setItemsInWishlist={setItemsInWishlist}  setItemsInCart={setItemsInCart} itemInCart={itemInCart}/>
                </Protected>
              }
            />
            <Route
              path="/wishlist"
              element={
                <Protected>
                  <Wishlist setItemsInCart={setItemsInCart} itemInCart={itemInCart} setItemsInWishlist={setItemsInWishlist} itemsInWishlist={itemsInWishlist} />
                </Protected>
              }
            />
            <Route
              path="/cart"
              element={
                <Protected>
                  <CurrentOrder setItemsInCart={setItemsInCart} />
                </Protected>
              }
            />
            <Route
              path="/checkout"
              element={
                <Protected>
                  <Checkout setItemsInCart={setItemsInCart} isAdressAdded={isAdressAdded} />
                </Protected>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <ToastContainer />
          <Footer />
        </Drawer>
      </BrowserRouter>
    </>
  );
}
