// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from "./Components/user/user";
export default function App() {
  return (
    <>

      <User/>
      <ToastContainer />
    </>
  );
}
