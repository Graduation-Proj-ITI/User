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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [iserr, setIsErr] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    // Email validation logic (regex or other validation methods)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmail = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
    let isValid = true;
    if (formState.email.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!isValidEmail(formState.email.trim())) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }
    return isValid;
  };

  const validatePassword = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      password: "",
    }));
    let isValid = false;
    if (formState.password.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (formState.password.trim().length <= 5) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    } else if (formState.password.trim().length >= 20) {
      setFormErrors({
        ...prevErrors,
        password: "Password must be less than 20 characters long",
      });

      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("true");
    setLoading(true);
    validateEmail();
    validatePassword();
    await axios
      .post("https://furnival.onrender.com/auth/login", formState)
      .then((res) => {
        setFormErrors({
          email: "",
          password: "",
        });
        toast.success("Login Succesufully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setIsErr(false);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 500);
        localStorage.setItem("token", res.data.token);
      })
      .catch((e) => {
        setErr(e.response.data.message);
        setIsErr(true);
        setLoading(true);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className=" bg-slide2 h-screen w-screen bg-cover bg-no-repeat">
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
                      <label className="label" htmlFor="email">
                        <span className="label-text text-black text-lg">
                          Email <span className="text-red-800">*</span>
                        </span>
                      </label>
                      <input
                        name="email"
                        onChange={handleChange}
                        value={formState.email}
                        id="email"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full px-3 text-black"
                        onKeyUp={(e) => {
                          validateEmail();
                        }}
                      />

                      {formErrors.email && (
                        <span className="text-red-800 text-left">
                          {formErrors.email}
                        </span>
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
                        value={formState.password}
                        id="password"
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full  px-3 "
                        onKeyUp={(e) => {
                          validatePassword();
                        }}
                      />

                      {formErrors.password && (
                        <span className="text-red-800 text-left">
                          {formErrors.password}
                        </span>
                      )}
                      {iserr && (
                        <span className="text-red-800 text-left">{err}</span>
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
