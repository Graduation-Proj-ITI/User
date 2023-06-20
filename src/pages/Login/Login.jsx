import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("true");
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

        toast.error("Try Again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container parentform m-auto text-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
          <div className="">
            <div className="logo">
              <img src="../../../public/images/logo.png" alt="" />
            </div>
            <div className="content text-center">
              <h2 className="text-3xl mb-4">sign in to your Account</h2>
              <span className="text-gray-700">
                prepare your dream house with one click
              </span>
            </div>
            <div className="forminput text-center">
              <form onSubmit={handleSubmit}>
                <div className="form-control m-auto max-w-xs">
                  <label className="label" htmlFor="username">
                    <span className="label-text">User name *</span>
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={login.email}
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
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password *</span>
                  </label>
                  <input
                    name="password"
                    onChange={handleChange}
                    value={login.password}
                    id="password"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt ">Password *</span>
                  </label>
                </div>
                <button className="btn mt-7 subbutton w-80">sign in</button>
                <br />
                <button className="btn mt-7 googlebtn w-80">
                  <i className="fa-brands fa-google me-4 text-lg"></i>Continue
                  with Google
                </button>
              </form>

              <p className="toregister mt-3 text-lg">
                Don’t have account,{" "}
                <Link to="/Register" className="">
                  sign up
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
export default Login;
