import { useState } from "react";
import Profile from "../sections/Profile";
import Orders from "../sections/Order";
import Address from "../sections/Address";
import Payment from "../sections/Payment";
import Wishlist from "../sections/Wishlist";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState(0);

  const handleClickedLink = (index) => {
    setActiveLink(index);
  };
  let navLinks = [
    { title: "Profile", path: "#profile", icon: "./icons/user.svg","component":<Profile/> },
    { title: "Wishlist", path: "#wishlist", icon: "./icons/heart.svg", "component":<Wishlist/>},
    { title: "Orders", path: "#order", icon: "./icons/orders.svg", "component":<Orders/> },
    { title: "Addresses", path: "#address", icon: "./icons/address.svg", "component":<Address/>},
    { title: "Payment", path: "#payment", icon: "./icons/payment.svg", "component":<Payment/> },
  ];


  return (
    <div className=" h-screen overflow-x-hidden ">
      <div className="flex w-full ">
        {/* Burger Menu */}
        {/* Left Menu */}
        <div className={`${isMenuOpen
              ? "-left-[200px] w-[100px] md:-left-[350px] md:w-[400px]"
              : "left-0 w-[250px] md:w-[400px]"}`}>
          <div className="relative flex items-center z-20 justify-end rounded-tr-xl">
          <div
          className={ `h-[90%] pt-3 overflow-hidden fixed bottom-0 bg-bgColor rounded-tr-xl  duration-500 transition-left text-white  ${
            isMenuOpen
              ? "-left-[200px] w-[250px] md:-left-[300px] md:w-[350px]"
              : "left-0 w-[300px] md:w-[350px]"
          }`}
        >

          <ul className="text-dark">
            <li>
              <div className="relative flex items-center justify-end rounded-tr-xl ">
                <button
                  onClick={toggleMenu}
                  className="flex items-center px-3 py-2 text-dark  hover:text-gray-500 "
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </li>

            <li
              className={`${
                isMenuOpen
                  ? "-left-200 hidden  "
                  : " opacity-100 left-0 "
              } flex content-center transition-all duration-100 items-center flex-col gap-2 py-4 mb-2  border-b-2 border-[rgba(0,0,0,.1)]`}
            >
              <div className="relative w-[150px] h-[150px] rounded">
                <img
                  src="./profile/profile.jpg"
                  alt="profile.jpg"
                  className="w-full h-full max-w-[100%] rounded-[50%] "
                />
                <div className="icon absolute -bottom-0 right-1 text-white bg-secondary flex items-center content-center py-2 px-2 rounded-[50%] cursor-pointer">
                  <img src="./icons/camera.svg" className="w-[100%]" />
                </div>
              </div>

              <h2 className="text-primary">
                Hi, <span>John Doe</span>
              </h2>
              <p className="text-dark-gray">example@gmail.com</p>
            </li>

            {/* Menu items */}
            {navLinks.map((link, ind) => (
              <li className="" key={ind}>
                <a
                  onClick={() => handleClickedLink(ind)}
                  href={link.path}
                  className={`${
                    activeLink === ind
                      ? "bg-primary hover:bg-primary text-white"
                      : "bg-bgColor hover:bg-secondary "
                  } flex items-center justify-between py-3 w-full ps-5 md:ps-20 transition-colors duration-300`}
                >
                  <span>
                    <img
                      src={link.icon}
                      alt="icon"
                      className={` inline-block w-5 h-5 mr-2  ${
                        activeLink === ind ? "invert" : "invert-[.3]"
                      } `}
                    />
                    <span
                      className={`${
                        isMenuOpen ? "opacity-0" : "opacity-1"
                      } transition duration-300 `}
                    >
                      {link.title}
                    </span>
                  </span>

                  <img
                    src={link.icon}
                    alt="icon"
                    className={`${
                      isMenuOpen ? "flex" : "opacity-0"
                    } transition duration-300 self-end w-5 h-5 mr-4  ${
                      activeLink === ind ? "invert" : "invert-[.3]"
                    } `}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      

        {/* Main Content */}
        <div className={` ${isMenuOpen
              ? "-left-[20px] md:-left-[150px] lg:-left-[200px] ps-4 pe-0"
              : "left-[0px] md:left-[20px] ps-10 pe-6 md:pe-10"} relative z-10  w-full  py-20 h-screen transition-all duration-700`} >
          {navLinks[activeLink].component} 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;