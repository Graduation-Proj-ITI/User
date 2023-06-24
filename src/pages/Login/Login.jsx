/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoaderBtn from "../../Components/Shared/LoaderBtn";
import logo from "../../../public/images/logo.png";
// import login from "/public/images/community/Mobile login-rafiki.png";

function Login() {
  const navigate = useNavigate();
  const [emailError, setemailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("true");
    setLoading(true);

    await axios
      .post("https://furnival.onrender.com/auth/login", login)
      .then((res) => {
        toast.success("Login Succesufully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        navigate("/", { replace: true });
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Incorrect email or password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });

        setLoading(true);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className=" bg-slide2 h-full w-full bg-cover bg-no-repeat">
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center">
          <div className=" m-auto text-center bg-white w-full md:w-fit lg:w-fit p-10 lg:p-14 flex justify-center rounded-3xl animate-wiggle ">
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
                  <h2 className="text-3xl mb-4 capitalize font-bold">Login</h2>
                  {/* <span className="text-gray-700">
                    prepare your dream house with one click
                  </span> */}
                </div>
                <div className="forminput text-center">
                  <form onSubmit={handleSubmit}>
                    <div className="form-control m-auto max-w-xs">
                      <label className="label" htmlFor="username">
                        <span className="label-text text-black text-lg">
                          Username <span className="text-red-800">*</span>
                        </span>
                      </label>
                      <input
                        name="email"
                        onChange={handleChange}
                        value={login.email}
                        id="username"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full px-3 text-black"
                        onInput={(e) => {
                          setemailError(
                            e.target.value.length >= 6 ? false : true
                          );
                        }}
                        onBlur={(e) => {
                          setemailError(e.target.value.length ? false : true);
                        }}
                      />

                      {emailError && (
                        <p className="text-red-900 text-left" id="nameerror">
                          invalid name
                        </p>
                      )}
                    </div>

                    <div className="form-control m-auto max-w-xs">
                      <label className="label" htmlFor="password">
                        <span className="label-text text-black text-lg">
                          Password <span className="text-red-800">*</span>
                        </span>
                      </label>
                      <input
                        name="password"
                        onChange={handleChange}
                        value={login.password}
                        id="password"
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full  px-3 "
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
                      {passwordError && (
                        <p
                          className=" text-red-900 text-left"
                          id="passworderror"
                        >
                          password at least 8 char
                        </p>
                      )}
                    </div>

                    {!loading ? (
                      <button className="btn mt-7 subbutton w-80">
                        <span>Sign in</span>{" "}
                      </button>
                    ) : (
                      <button className="btn mt-7 subbutton w-80">
                        <LoaderBtn />
                      </button>
                    )}
                    <br />
                  </form>
                  <p className="toregister mt-3 text-lg text-blue-950">
                    <Link to="/forget-password" className="hover:underline">
                      forget password ?
                    </Link>
                  </p>

                  <p className="toregister mt-3 text-lg text-blue-950">
                    Don’t have account,{" "}
                    <Link to="/Register" className=" capitalize">
                      sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
