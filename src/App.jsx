// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "normalize.css";
import Contact from "./pages/contact"
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


export default function App() {
  const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhkZDY5NjBkYmMyZGU4YTM2NzIzOGUiLCJpYXQiOjE2ODcwODY1OTUsImV4cCI6MTY5NDg2MjU5NX0.rZb9grqwpPBbX3IHxGFPOmkyJOfbpd3MF0ynFBWlTuY";
  localStorage.setItem("token", userToken);

  return (
    <>
    
      <BrowserRouter>

        <Drawer>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Shop />} /> */}
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<User />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="product/:productId" element={<ProductDetails/>}/>
          </Routes>
          <ToastContainer />
          <Footer />
        </Drawer>
      </BrowserRouter>

     
    </>
  );
}
