// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "normalize.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import About from "./pages/About";
import User from "./Components/user/user";
import Footer from "./Components/Shared/Footer";
import NavBar from "./Components/Shared/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./pages/contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Shop />} /> */}
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<User />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>

      {/* <Home /> */}
      {/* <User /> */}
      {/*<ToastContainer /> */}
      {/* <Community /> */}
      {/* <About /> */}
    </>
  );
}
