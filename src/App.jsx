import "./App.css";
import "normalize.css";
import Product from "./pages/Product/Product";
// import Home from "./pages/Home";
import navbar from "./Components/navbar/Navbar";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="product/:productId" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
