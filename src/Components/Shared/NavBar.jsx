import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
// import logo from "../../../public/images/logo/furnivalLogo.png";

const NavBar = ({ itemInCart }) => {
  const [visible, setVisible] = React.useState(false);

  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <nav
        className={
          "navbar fixed z-50 px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] w-full py-2 justify-between " +
          (visible ||
          location.pathname === "/profile" ||
          location.pathname === "/cart" ||
          location.pathname === "/checkout" ||
          location.pathname === "/successOrder" ||
          location.pathname === "/wishlist" ||
          location.pathname.includes("/product/details/")
            ? " animate-wiggle bg-primary "
            : " bg-transparent ") +
          (location.pathname === "/Register" ||
          location.pathname === "/Login" ||
          location.pathname === "/forget-password"||
          location.pathname === "/reset-password"||
          location.pathname === "/*"
            ? " hidden"
            : " ")
        }
      >
        <div className="lg:hidden">
          <label
            htmlFor="sidemenu"
            className="btn btn-square btn-ghost px-0 text-white"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </label>
        </div>

        <Link to="/" className="flex gap-1">
          <img src={logo} className="w-9" />
          <h3 className=" text-white">Furnival</h3>
        </Link>

        {/* <div className="max-sm:hidden sm:hidden bg-gray-100 lg:flex md:hidden items-center rounded-3xl justify-around w-1/4 sm:w-1/5 py-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm input-ghost w-4/6 max-w-xs rounded-2xl focus:outline-none border-0 "
          />

          <button className="btn btn-ghost btn-sm p-0 hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-primary "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div> */}

        <ul className="max-sm:hidden sm:hidden lg:flex md:hidden justify-center gap-5 items-center">
          <li className=" text-lg p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "text-white text-lg hover:text-secondary  cursor-pointer"
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" text-lg p-2">
            <NavLink
              to="/Product"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "text-white  text-lg hover:text-secondary  cursor-pointer"
              }
            >
              Shop
            </NavLink>
          </li>
          {/* <li className=" text-lg p-2">
            <NavLink
              to="/community"
              className={({ isActive }) =>
                (isActive ? "text-secondary font-bold" : "text-white") +
                " text-lg hover:text-secondary  cursor-pointer"
              }
            >
              Community
            </NavLink>
          </li> */}
          <li className=" text-lg p-2">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "text-white text-lg hover:text-secondary  cursor-pointer"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className=" text-lg p-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "text-white  text-lg hover:text-secondary  cursor-pointer"
              }
            >
              About
            </NavLink>
          </li>
          <li className=" text-lg p-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "text-white text-lg hover:text-secondary  cursor-pointer"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {localStorage.getItem("token") ? (
          <ul className=" menu menu-horizontal px-1 ">
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-bold"
                    : "text-white text-lg hover:text-secondary  cursor-pointer"
                }
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span
                    className={
                      "badge badge-sm badge-white  bg-secondary text-primary border-0 indicator-item " +
                      (!itemInCart ? " hidden" : "")
                    }
                  >
                    {itemInCart}
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="max-sm:hidden sm:hidden lg:inline md:hidden">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-bold"
                    : "text-white text-lg hover:text-secondary  cursor-pointer"
                }
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>

                  {/* <span className="badge badge-sm badge-white bg-secondary text-primary border-0 indicator-item">
                    0
                  </span> */}
                </div>
              </NavLink>
            </li>
            <li
              tabIndex={0}
              className="max-sm:hidden sm:hidden lg:inline md:hidden"
            >
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-bold"
                    : "text-white text-lg hover:text-secondary  cursor-pointer"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </NavLink>

              <ul className="p-2 bg-base-100">
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/Login", { replace: true });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          <button className=" text-primary btn  rounded-3xl btn-sm btn-secondary px-5  ">
            <NavLink to="/Login">Login</NavLink>
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
