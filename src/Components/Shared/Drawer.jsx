import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Drawer = ({ children }) => {
  const location = useLocation();
  // console.log(location.pathname);

  const [search, setsearch] = useState([]);
  return (
    <>
      <div className="drawer  h-full  overflow-y-hidden ">
        <input id="sidemenu" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col ">{children}</div>

        <div className="drawer-side  h-screen overflow-scroll   ">
          <label htmlFor="sidemenu" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-primary ">
            <li>
              <div className=" bg-gray-100 flex items-center rounded-2xl justify-around w-full">
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
              </div>
            </li>
            <li>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
