import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderBtn from "../Components/Shared/LoaderBtn";
import logo from "../../public/images/logo.png";

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  async function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://furnival.onrender.com/auth/forgotPassword",
        {
          email,
        }
      );
      toast.success(data.message);

      setStep(2);
    } catch (e) {
      setLoading(true);
      console.log(e);
      toast.error(e.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://furnival.onrender.com/auth/verifyResetCode",
        {
          resetCode: code,
        }
      );
      toast.success(data.status);
      console.log(data);

      setStep(3);
    } catch (e) {
      setLoading(true);
      toast.error(e.response.data.message);
      console.log("Wrong code! check the code in your gmail");
    } finally {
      setLoading(false);
    }
  }

  async function editPassword(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.put(
        "https://furnival.onrender.com/auth/resetPassword",
        {
          email,
          newPassword,
        }
      );
      toast.success('password changed successfully');
      navigate("/Login");
    } catch (e) {
      setLoading(true);
      console.log("Something went wrong! try again later");
    toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

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
                {step === 1 && (
                  <form onSubmit={sendEmail}>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-gray-700 font-semibold text-[18px]"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        id="password"
                        required
                        className="input input-bordered w-full max-w-xs px-3"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {!loading ? (
                      <button className="btn  subbutton w-80">
                        <span>Send Code</span>{" "}
                      </button>
                    ) : (
                      <button className="btn  subbutton w-80">
                        <LoaderBtn />
                      </button>
                    )}
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={verifyCode}>
                    <div className="mb-4">
                      <label
                        htmlFor="code"
                        className="block mb-2 text-gray-700 font-semibold text-[18px]"
                      >
                        Code
                      </label>

                      <input
                        id="code"
                        type="text"
                        className="input input-bordered w-full max-w-xs px-3"
                        placeholder="Enter your code..."
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>

                    {!loading ? (
                      <button className="btn  subbutton w-80">
                        <span>Verify Code</span>{" "}
                      </button>
                    ) : (
                      <button className="btn  subbutton w-80">
                        <LoaderBtn />
                      </button>
                    )}
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={editPassword}>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-gray-700 font-semibold text-[18px]"
                      >
                        New Password
                      </label>

                      <input
                        id="password"
                        type="password"
                        className="input input-bordered w-full max-w-xs px-3"
                        placeholder="Enter your password..."
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>

                    {!loading ? (
                      <button className="btn  subbutton w-80">
                        <span> Update Password</span>{" "}
                      </button>
                    ) : (
                      <button className="btn  subbutton w-80">
                        <LoaderBtn />
                      </button>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
