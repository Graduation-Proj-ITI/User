// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "normalize.css";
// import Home from "./pages/Home";
// import Community from "./pages/Community";
// import NavBar from "./Components/Shared/NavBar";
// import About from "./Components/pages/About";
import Contact from "./pages/contact"
import User from "./Components/user/user"
// import ErrorPage from './pages/error';


     

export default function App() {
  const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhkZDY5NjBkYmMyZGU4YTM2NzIzOGUiLCJpYXQiOjE2ODcwODY1OTUsImV4cCI6MTY5NDg2MjU5NX0.rZb9grqwpPBbX3IHxGFPOmkyJOfbpd3MF0ynFBWlTuY";
  localStorage.setItem("token", userToken);

  return (
    <>
     {/* <Contact/> */}
     {/* <ErrorPage/> */}
     <User/>
      <ToastContainer/>
      {/* <Community /> */}
      {/* <About /> */}
    </>
  )
}