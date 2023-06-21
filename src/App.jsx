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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Drawer>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<User />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/contact" element={<Contact />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route path="product/:productId" element={<ProductDetails />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Drawer>
      </BrowserRouter>
    </>
  );
}
