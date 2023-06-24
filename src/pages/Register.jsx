import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderBtn from "../Components/Shared/LoaderBtn";
import logo from "../../public/images/logo.png";

function Register() {
  // const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [regiester, setregister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("success true");
    setLoading(true);

    // setLoading(true);
    //call back end
    await axios
      .post("https://furnival.onrender.com/auth/signup", regiester)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data);

        toast.success(`Welcome ${regiester.name}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });

        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);

        toast.error("please Check your information", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setLoading(true);

        // setLoading(true);

        console.log(regiester);
      })
      .finally(() => setLoading(false));
  };

  const handlechange = (e) => {
    setregister({ ...regiester, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className=" bg-slide2 h-full w-full bg-cover  bg-no-repeat">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center">
          <div className=" m-auto text-center bg-white w-full md:w-fit lg:w-fit p-10 lg:px-14 lg:py-7 flex justify-center rounded-3xl animate-wiggle ">
            <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
              <div className="">
                <Link
                  to="/"
                  className="flex flex-col gap-1 justify-center items-center"
                >
                  <img src={logo} className="w-20" />
                  {/* <h3 className=" text-primary">Furnival</h3> */}
                </Link>
                <div className=" text-center">
                  <h2 className="text-2xl mb-3 capitalize font-bold">
                    Create Account
                  </h2>
                  {/* <span className="text-gray-700">
                    prepare your dream house with one click
                  </span> */}
                </div>
                <div className=" m-auto text-center">
                  <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <div className="">
                      <div className="forminput text-center">
                        <form onSubmit={handlesubmit}>
                          <div className="form-control m-auto max-w-xs">
                            <label className="label pb-0" htmlFor="username">
                              <span className="label-text text-black text-lg">
                                User name{" "}
                                <span className="text-red-800">*</span>
                              </span>
                            </label>
                            <input
                              name="name"
                              type="text"
                              placeholder="name"
                              onChange={handlechange}
                              value={regiester.name}
                              id="username"
                              required
                              className="input input-bordered w-full max-w-xs px-3"
                              onInput={(e) => {
                                setNameError(
                                  e.target.value.length >= 3 ? false : true
                                );
                              }}
                              onBlur={(e) => {
                                setNameError(
                                  e.target.value.length ? false : true
                                );
                              }}
                            />

                            {nameError && (
                              <p
                                className="text-red-900 text-left"
                                id="nameerror"
                              >
                                invalid name
                              </p>
                            )}
                          </div>

                          <div className="form-control m-auto max-w-xs">
                            <label className="label pb-0" htmlFor="email">
                              <span className="label-text text-black text-lg">
                                Email <span className="text-red-800">*</span>
                              </span>
                            </label>
                            <input
                              name="email"
                              type="email"
                              placeholder="EMAIL"
                              onChange={handlechange}
                              value={regiester.email}
                              id="email"
                              required
                              className="input input-bordered w-full max-w-xs px-3"
                              onInput={(e) => {
                                setEmailError(
                                  e.target.value.length >= 6 ? false : true
                                );
                              }}
                              onBlur={(e) => {
                                setEmailError(
                                  e.target.value.length >= 6 ? false : true
                                );
                              }}
                            />
                            {emailError && (
                              <p
                                className="text-red-900 text-left"
                                id="emailerror"
                              >
                                invalid email
                              </p>
                            )}
                          </div>

                          <div className="form-control m-auto max-w-xs ">
                            <label className="label pb-0 " htmlFor="password">
                              <span className="label-text text-black text-lg">
                                password<span className="text-red-800">*</span>
                              </span>
                            </label>
                            <input
                              name="password"
                              type="password"
                              placeholder="password"
                              onChange={handlechange}
                              value={regiester.password}
                              id="password"
                              required
                              className="input input-bordered w-full max-w-xs px-3"
                              onInput={(e) => {
                                setPasswordError(
                                  e.target.value.length >= 8 ? false : true
                                );
                              }}
                              onBlur={(e) => {
                                setPasswordError(
                                  e.target.value.length >= 8 ? false : true
                                );
                              }}
                            />
                            {PasswordError && (
                              <p
                                className="text-red-900 text-left"
                                id="passworderror"
                              >
                                invalid
                              </p>
                            )}
                          </div>

                          <div className="form-control m-auto max-w-xs">
                            <label className="label pb-0" htmlFor="confirm">
                              <span className="label-text text-black text-lg">
                                confirm password
                                <span className="text-red-800">*</span>
                              </span>
                            </label>
                            <input
                              name="passwordConfirm"
                              id="confirm"
                              type="password"
                              placeholder="password"
                              onChange={handlechange}
                              value={regiester.passwordConfirm}
                              required
                              className="input input-bordered w-full max-w-xs px-3"
                              onInput={(e) => {
                                setconfirmPasswordError(
                                  e.target.value.length >= 8 ||
                                    e.target.value === regiester.password
                                    ? false
                                    : true
                                );
                              }}
                              onBlur={(e) => {
                                setconfirmPasswordError(
                                  e.target.value.length >= 8 ||
                                    e.target.value === regiester.password
                                    ? false
                                    : true
                                );
                              }}
                            />
                            {confirmPasswordError && (
                              <p
                                className="text-red-900 text-left"
                                id="confirmerror"
                              >
                                Two passwords not match
                              </p>
                            )}
                          </div>

                          {!loading ? (
                            <button className="btn mt-7 subbutton w-80">
                              <span>Sign-Up</span>{" "}
                            </button>
                          ) : (
                            <button className="btn mt-7 subbutton w-80">
                              <LoaderBtn />
                            </button>
                          )}
                          <br />
                        </form>

                        <p className="toregister mt-4 text-lg text-blue-950">
                          Already have account,
                          <Link to="/Login" className="">
                            sign in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
