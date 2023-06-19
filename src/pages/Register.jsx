import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <>
      <div className="container parentform m-auto text-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
          <div className="">
            <div className="headReg flex ">
              <div className="logo">
                <img src="../../../public/images/logo.png" alt="" />
              </div>
              <div className="content text-center pt-9 pl-4">
                <h2 className="text-3xl mb-4">Create Account</h2>
                <span className="text-gray-700">
                  prepare your dream house with one click
                </span>
              </div>
            </div>

            <div className="forminput text-center">
              <form>
                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="username">
                    <span className="label-text">User name *</span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt">Bottom Left label</span>
                  </label>
                </div>

                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="Email">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    id="Email"
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt ">Password *</span>
                  </label>
                </div>
                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="Phone">
                    <span className="label-text">Phone *</span>
                  </label>
                  <input
                    id="Phone"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt">Bottom Left label</span>
                  </label>
                </div>
                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="password">
                    <span className="label-text">password *</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt">Bottom Left label</span>
                  </label>
                </div>

                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="confirm">
                    <span className="label-text">confirm password *</span>
                  </label>
                  <input
                    id="confirm"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt">Bottom Left label</span>
                  </label>
                </div>

                <button className="btn mt-2 subbutton w-80">sign in</button>
                <br />
                <button className="btn mt-2 googlebtn w-80">
                  <i class="fa-brands fa-google me-4 text-lg"></i>Continue with
                  Google
                </button>
              </form>
              <p className="toregister  text-lg">
                Already have account,
                <Link to="/Login" className="">
                  sign in
                </Link>
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Register;
