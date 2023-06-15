import React from "react";
import logo from "../../../public/images/logo/furnivalLogo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-white fixed z-20 shadow-md max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem]">
        <div className="navbar-start gap-5">
          <a className="normal-case text-xl">
            <img src={logo} className=" w-32" />
          </a>
          <div className=" bg-gray-50 flex justify-between items-center px-3 p-1 rounded-2xl w-72">
            <input
              type="search"
              placeholder="Search"
              className="input w-full input-sm max-w-xs bg-gray-50  focus:outline-none"
            />
            <i className="fa-solid fa-magnifying-glass text-gray-400 hover:text-primary hover:cursor-pointer btn btn-sm bg-transparent border-0 hover:bg-transparent"></i>
          </div>

          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                {" "}
                <div className="indicator">
                  <button className="btn btn-ghost btn-circle btn-sm group hover:bg-primary hover:border-0">
                    <i class="fa-solid fa-heart text-xl  text-primary group-hover:text-white "></i>
                  </button>

                  <span className="badge badge-sm badge-[#FF9934]  bg-secondary border-0 indicator-item">
                    1
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a>
                {" "}
                <div className="indicator">
                  <button className="btn btn-ghost btn-circle btn-sm group hover:bg-primary hover:border-0">
                    <i class="fa-solid fa-cart-shopping text-xl text-primary group-hover:text-white"></i>
                  </button>

                  <span className="badge badge-sm badge-[#FF9934]  bg-secondary border-0 indicator-item">
                    1
                  </span>
                </div>
              </a>
            </li>
            <li tabIndex={0}>
              <a>
                <p className=" text-primary">User Name </p>
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" />
                  </div>
                </div>

                {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg> */}
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>orders</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
