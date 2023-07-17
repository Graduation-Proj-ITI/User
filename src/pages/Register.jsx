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
  const [existEmail, setExistEmail] = useState(false);

  const [regiester, setregister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState([
    {
      name: "",
    },
    {
      email: "",
    },
    {
      password: "",
    },
    {
      passwordConfirm: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Email validation logic (regex or other validation methods)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      name: "",
    }));
    let isValid = true;
    if (regiester.name.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "userName is required",
      }));
      isValid = false;
    } else if (regiester.name.trim().length <= 2) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "userName must be at least 3 characters long",
      }));
      isValid = false;
    } else if (regiester.name.trim().length >= 20) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "userName must be less than 20 characters long",
      }));
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
    let isValid = true;
    if (regiester.email.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!isValidEmail(regiester.email.trim())) {
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
    if (regiester.password.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (regiester.password.trim().length <= 5) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    } else if (regiester.password.trim().length >= 20) {
      setFormErrors({
        ...prevErrors,
        password: "Password must be less than 20 characters long",
      });

      isValid = false;
    }

    return isValid;
  };

  const validatePasswordConfirm = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      passwordConfirm: "",
    }));
    let isValid = true;
    if (regiester.passwordConfirm.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirm: "confirm Password is required",
      }));
      isValid = false;
    } else if (regiester.passwordConfirm.trim() !== regiester.password.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirm: "Password and confirm password must be the same",
      }));
      isValid = false;
    }
    return isValid;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("success true");
    setLoading(true);
    validateName();
    validateEmail();
    validatePassword();
    validatePasswordConfirm();
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
        setExistEmail(false);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 350);
      })
      .catch((e) => {
        console.log(e.response.data.errors);
        const errors = {};
        e.response.data.errors.forEach((err) => {
          if (err.param === "name") {
            errors.name = err.msg;
          } else if (err.param === "email") {
            errors.email = err.msg;
          } else if (err.param === "password") {
            errors.password = err.msg;
          } else if (err.param === "passwordConfirm") {
            errors.passwordConfirm = err.msg;
          }
        });

        if (errors.email === "E-mail already in used") {
          setExistEmail(true);
        }
        setLoading(true);
        console.log(regiester);
      })
      .finally(() => setLoading(false));
  };

  const handlechange = (e) => {
    setregister({ ...regiester, [e.target.name]: e.target.value });
  };

  console.log(formErrors);
  return (
    <>
      <div className=" bg-slide2 h-screen w-screen bg-cover  bg-no-repeat">
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
                        <form onSubmit={handlesubmit} autocomplete="off">
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
                              // required
                              className="input input-bordered w-full max-w-xs px-3"
                              onKeyUp={(e) => {
                                validateName();
                              }}
                            />
                            {formErrors.name && (
                              <p
                                className="text-red-900 text-left"
                                id="nameerror"
                              >
                                {formErrors.name}
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
                              // required
                              className="input input-bordered w-full max-w-xs px-3"
                              onKeyUp={(e) => {
                                validateEmail(e);
                              }}
                            />
                            {formErrors.email && (
                              <p
                                className="text-red-900 text-left"
                                id="emailerror"
                              >
                                {formErrors.email}
                              </p>
                            )}

                            {existEmail && (
                              <p className="text-red-900 text-left">
                                E-mail already in used
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
                              // required
                              className="input input-bordered w-full max-w-xs px-3"
                              onKeyUp={(e) => {
                                validatePassword(e);
                              }}
                            />
                            {formErrors.password && (
                              <p
                                className="text-red-900 text-left"
                                id="passworderror"
                              >
                                {formErrors.password}
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
                              // required
                              className="input input-bordered w-full max-w-xs px-3"
                              onKeyUp={(e) => {
                                validatePasswordConfirm(e);
                              }}
                            />
                            {formErrors.passwordConfirm && (
                              <p
                                className="text-red-900 text-left"
                                id="passworderror"
                              >
                                {formErrors.passwordConfirm}
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
