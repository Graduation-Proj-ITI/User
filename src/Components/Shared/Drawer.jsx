import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import "./../../index.css";

const Drawer = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);

  const [search, setsearch] = useState([]);
  return (
    <>
      <div className="drawer h-min overflow-hidden">
        <input id="sidemenu" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content h-full ">{children}</div>

        <div className="drawer-side h-screen hScroll overflow-hidden ">
          <label htmlFor="sidemenu" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-primary ">
            <li className="mx-auto">
              <Link to="/" className="flex gap-1">
                <img src={logo} className="w-9" />
                <h3 className=" text-white">Furnival</h3>
              </Link>
              {/* <div className=" bg-gray-100 flex items-center rounded-2xl justify-around w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-sm input-ghost w-4/6 max-w-xs  focus:outline-none border-0 "
                  value={search}
                  onChange={(e) => {
                    setsearch(() => e.target.value);
                    console.log(search);
                  }}
                />

                <button className="btn btn-ghost btn-sm p-0  hover:bg-transparent">
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
            </li>

            <li
              className={localStorage.getItem("token") ? "text-lg" : "hidden"}
            >
              {" "}
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-bold"
                    : "text-white text-lg hover:text-secondary  cursor-pointer"
                }
              >
                Profile
              </NavLink>
            </li>

            <li className=" text-lg">
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
            <li className=" text-lg">
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
            <li className=" text-lg">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  (isActive ? "text-secondary font-bold" : "text-white") +
                  " text-lg hover:text-secondary  cursor-pointer"
                }
              >
                Blog
              </NavLink>
            </li>
            {/* <li className=" text-lg">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-bold"
                    : "text-white text-lg hover:text-secondary  cursor-pointer"
                }
              >
                Blog
              </NavLink>
            </li> */}
            <li className=" text-lg">
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
            <li className=" text-lg">
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

            <li className={localStorage.getItem("token") ? "" : "hidden"}>
              <button
                className="text-white text-start mt-40"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/Login", { replace: true });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
