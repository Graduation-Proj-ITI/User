import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
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
              <form>
                <div className="form-control m-auto max-w-xs">
                  <label className="label" htmlFor="username">
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
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password *</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs px-3"
                  />
                  <label className="label hidden">
                    <span className="label-text-alt ">Password *</span>
                  </label>
                </div>

                <button className="btn mt-7 subbutton w-72">sign in</button>
     <br/>
                <button className="btn mt-7 googlebtn w-72"><i class="fa-brands fa-google me-4 text-lg"></i>Continue with Google</button>

              </form>
              <p className="toregister mt-3 text-lg">Don’t have account,  <Link to="/Register" className="">
              sign up
            </Link></p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
export default Login;
