import { useEffect, useState } from "react";
import Profile from "../sections/Profile";
import Orders from "../sections/Order";
import Address from "../sections/Address";
import Payment from "../sections/Payment";
import Wishlist from "../sections/Wishlist";
import axios from "axios";
import Loader from "../Shared/Loader";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [user, setUser] = useState({});

  const handleClickedLink = (index) => {
    setActiveLink(index);
  };
  let navLinks = [
    {
      title: "Profile",
      path: "#profile",
      icon: "./icons/user.svg",
      component: <Profile setUser={setUser} user={user} />,
    },
    {
      title: "Wishlist",
      path: "#wishlist",
      icon: "./icons/heart.svg",
      component: <Wishlist />,
    },
    {
      title: "Orders",
      path: "#order",
      icon: "./icons/orders.svg",
      component: <Orders />,
    },
    {
      title: "Addresses",
      path: "#address",
      icon: "./icons/address.svg",
      component: <Address />,
    },
    // {
    //   title: "Payment",
    //   path: "#payment",
    //   icon: "./icons/payment.svg",
    //   component: <Payment />,
    // },
  ];

  const handleFetchImg = (e) => {
    e.preventDefault();
    const userImg = {
      profileImg: selectedImage,
    };
    console.log(userImg);
    const formData = new FormData();
    formData.append("profileImg", userImg.profileImg, userImg.profileImg.name);
    setLoading(true);
    axios
      .put("https://furnival.onrender.com/users/updateMe", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(false);
        setUserImage(res?.data.data.profileImg);
        setChecked(false);
        toast.success("Your Picture updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        // console.log('post image',res.data);
      })
      .catch((err) => {
        setLoading(false);
        setChecked(false);
        toast.error("there is an error please,try again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        // console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://furnival.onrender.com/users/getMe", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(false);
        setUserImage(res?.data.data.profileImg);
        setUser(res?.data.data);
        // console.log('get data',res.data);
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.response.data.message);
      });
  }, [userImage]);

  return (
    <div className=" h-screen overflow-x-hidden ">
      {loading && <Loader />}
      <div className="flex w-full ">
        {/* Burger Menu */}
        {/* Left Menu */}
        <div
          className={`${
            isMenuOpen
              ? "-left-[200px] w-[100px] md:-left-[350px] md:w-[400px]"
              : "left-0 w-[250px] md:w-[400px]"
          }`}
        >
          <div className="relative flex items-center z-20 justify-end rounded-tr-xl">
            <div
              className={`h-[90%] pt-3 overflow-hidden fixed bottom-0 bg-bgColor rounded-tr-xl  duration-500 transition-left text-white  ${
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
                    isMenuOpen ? "-left-200 hidden  " : " opacity-100 left-0 "
                  } flex content-center transition-all duration-100 items-center flex-col gap-2 py-4 mb-2  border-b-2 border-[rgba(0,0,0,.1)]`}
                >
                  <figure className="relative w-[150px] h-[150px] rounded">
                    <img
                      src={userImage ?? "./profile/profile.jpg"}
                      alt="profile.jpg"
                      className="w-full h-full max-w-[100%] rounded-full object-cover "
                    />
                    <label className="icon w-[40px] h-[40px] absolute -bottom-0 right-1 text-white bg-secondary flex items-center content-center py-2 px-2 rounded-[50%] -pointer">
                      <img
                        src={"./icons/camera.svg"}
                        className="max-w-[100%] absolute z-[10] rounded-[50%] cursor-pointer"
                      />
                      <input
                        accept="image/*"
                        multiple
                        type="file"
                        className="absolute z-[20] opacity-0 w-[80%]  rounded-[50%] cursor-pointer"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setSelectedImage(file);
                          setChecked(true);
                          // console.log(isChecked)
                          // console.log('image',selectedImage)
                        }}
                      />
                    </label>
                  </figure>

                  <h4 className="text-primary">
                    Hi, <span>{user?.name}</span>
                  </h4>
                  <p className="text-dark-gray">{user?.email}</p>
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
        <div
          className={` ${
            isMenuOpen
              ? "-left-[20px] md:-left-[150px] lg:-left-[200px] ps-4 pe-0"
              : "left-[0px] md:left-[20px] ps-10 pe-6 md:pe-10"
          } relative z-10  w-full  py-20 h-screen transition-all duration-700`}
        >
          {navLinks[activeLink].component}
        </div>
      </div>

      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={isChecked}
        onChange={(e) => {
          setChecked(isChecked);
        }}
      />
      <div className="modal">
        <div className="modal-box relative z-50">
          <label
            onClick={() => {
              setChecked(false);
            }}
            htmlFor="my-modal-4"
            className="btn text-error px-4 rounded-full  btn-sm  border-error btn-outline btn-circle absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-4">confirm upload image</h3>

          <form
            onSubmit={(e) => {
              handleFetchImg(e);
            }}
            className="form flex flex-col gap-4"
          >
            <button
              type="submit"
              className="btn btn-primary w-[200px] py-0 mx-auto mt-5  rounded-[8px]"
            >
              confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
