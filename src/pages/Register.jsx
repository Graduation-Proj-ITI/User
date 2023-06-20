import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  // const [loading, setLoading] = useState(false);
  const [regiester, setregister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("success true");
    // setLoading(true);
    //call back end
    await axios
      .post("https://furnival.onrender.com/auth/signup", regiester)
      .then((res) => {
        localStorage.setItem("access_token", res.data.data.access_token);
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

        toast.error("please Try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        // setLoading(true);

        console.log(regiester);
      });
    // .finally(() => setLoading(false));
  };

  const handlechange = (e) => {
    setregister({ ...regiester, [e.target.name]: e.target.value });
  };

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
              <form onSubmit={handlesubmit}>
                <div className="form-control m-auto max-w-xs">
                  <label className="label pb-0" htmlFor="username">
                    <span className="label-text">User name *</span>
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
                    name="email"
                    type="email"
                    placeholder="EMAIL"
                    onChange={handlechange}
                    value={regiester.email}
                    id="email"
                    required
                    className="input input-bordered w-full max-w-xs px-3"
                  />
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
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handlechange}
                    value={regiester.password}
                    id="password"
                    required
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
                    name="passwordConfirm"
                    id="confirm"
                    type="password"
                    placeholder="password"
                    onChange={handlechange}
                    value={regiester.passwordConfirm}
                    required
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
