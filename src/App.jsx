// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import Profile from "./Components/pages/profile";
import Home from "./pages/Home";
import Community from "./pages/Community";
import User from "./Components/user/user";
export default function App() {
  return (
    <>
      <Home />
      <User />
      {/* <Community /> */}
    </>
  );
}
