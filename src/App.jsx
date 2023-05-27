// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "normalize.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import NavBar from "./Components/Shared/NavBar";
import About from "./pages/About";
import User from "./Components/user/user"


     

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Home />
     <User/>
      <ToastContainer/>
      {/* <Community /> */}
      {/* <About /> */}
    </>
  )
}