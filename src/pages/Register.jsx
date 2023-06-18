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
        toast(`Create Account succsefully ${regiester.name} `);

        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        // setLoading(true);
        toast("please Try again");
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
                  <label className="label hidden">
                    <span className="label-text-alt ">Password *</span>
                  </label>
                </div>

                <div className="form-control m-auto max-w-xs ">
                  <label className="label pb-0 " htmlFor="password">
                    <span className="label-text text-black">password*</span>
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
                    <span className="label-text">confirm password*</span>
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

                <button className="btn mt-2 subbutton w-72">sign in</button>
                <br />
              </form>
              <button className="btn mt-2 googlebtn text-black w-72">
                <i className="fa-brands fa-google me-4 text-lg"></i>
                <p>Continue with Google</p>
              </button>

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
