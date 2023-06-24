import { useState, useEffect } from "react";
import "../../form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../Shared/Loader";


const Profile = ({user,setUser}) => {
  //test data
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  // const [user,setUser] = useState({});
  const [check,setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleTogglePassword2 = () => {
  setShowPassword2(!showPassword2);
  }
  // {
  //   userName: "John Doe",
  //   email: " john@gmail.com ",
  //   phone: " 0108765432",
  //   password: "12345678",
  // };

  const [formState, setFormState] = useState({
    userName: userData.name,
    email: userData.email,
    // phone: userData.phone,
  });

  const [passwordChange, setPasswordChange] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  //error messages
  const [formErrors, setFormErrors] = useState({
    userName: "",
    email: "",
    // phone: "",
  });

  const [passwordChangeErrors, setPasswordChangeErrors] = useState({
    // oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // handle change in input fields
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  //handle change in password fields
  const handlePasswordChange = (event) => {
    setPasswordChange({
      ...passwordChange,
      [event.target.name]: event.target.value,
    });
  };

  const isValidEmail = (email) => {
    // Email validation logic (regex or other validation methods)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const isValidPhone = (phone) => {
  //   // Phone number validation logic (regex or other validation methods)
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(phone);
  // };

  // validation form
  const validateForm = () => {
    // Reset form errors
    setFormErrors({
      userName: "",
      email: "",
      // phone: "",
      // password: "",
      // confirmPassword: "",
    });

    let isValid = true;

    // Set corresponding error messages if validation fails

    if (formState.userName.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        userName: "user Name is required",
      }));
      isValid = false;
    } else if (/\d/.test(formState.userName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        userName: "userName cannot contain numbers",
      }));
      isValid = false;
    }

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

    // if (formState.phone.trim() === "") {
    //   setFormErrors((prevErrors) => ({
    //     ...prevErrors,
    //     phone: "Phone is required",
    //   }));
    //   isValid = false;
    // } else if (!isValidPhone(formState.phone.trim())) {
    //   setFormErrors((prevErrors) => ({
    //     ...prevErrors,
    //     phone: "Invalid phone number",
    //   }));
    //   isValid = false;
    // }

    return isValid;
  };

  // validation form
  const validationPasswordForm = () => {
    // Reset form errors
    setPasswordChangeErrors({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    let isValid = true;

    if (passwordChange.oldPassword.trim() === "") {
      setPasswordChangeErrors((prevErrors) => ({
        ...prevErrors,
        oldPassword: " current Password is required",
      }));
      isValid = false;
    }

    if (passwordChange.newPassword.trim() === "") {
      setPasswordChangeErrors((prevErrors) => ({
        ...prevErrors,
        newPassword: "Password is required",
      }));
      isValid = false;
    } else if (passwordChange.newPassword.trim().length < 6) {
      setPasswordChangeErrors((prevErrors) => ({
        ...prevErrors,
        newPassword: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    if (passwordChange.confirmPassword.trim() === "") {
      setPasswordChangeErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Confirm Password is required",
      }));
      isValid = false;
    } else if (
      passwordChange.confirmPassword.trim() !==
      passwordChange.newPassword.trim()
    ) {
      setPasswordChangeErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      isValid = false;
    }

    return isValid;
  };

  //handle color of input fields and border with validation
  const getInputColor = (fieldName) => {
    return formState[fieldName] != "" && formErrors[fieldName] == ""
      ? "success"
      : "";
  };

  //handle color of input fields and border with validation
  const getPasswordInput = (fieldName) => {
    return passwordChange[fieldName] != "" &&
      passwordChangeErrors[fieldName] == ""
      ? "success"
      : "";
  };

  // change color of asterisk with validation
  const colorAstrisk = () => {
    const labels = document.querySelectorAll(".form div>label");
    Array.from(labels).forEach((label) => {
      if (!label.previousElementSibling.classList.contains("success")) {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:red'>*</span>"
        );
      } else {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:red'>*</span>"
        );
      }
    });
  };

  const colorAsteriskPassword = () => {
    const labels = document.querySelectorAll("#passwordForm label");
    Array.from(labels).forEach((label) => {
      if (!label.previousElementSibling.classList.contains("success")) {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:red'>*</span>"
        );
      } else {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:red'>*</span>"
        );
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitForm();
    }
  };
  const handlePasswordSubmit = (event) => {
   setCheck(true);
    event.preventDefault();
    if (validationPasswordForm()) {
      setLoading(true);
      axios
        .put(
          "https://furnival.onrender.com/users/changeMyPassword",
          {
            currentPassword: passwordChange.oldPassword,
            password: passwordChange.newPassword,
            passwordConfirm: passwordChange.confirmPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          toast.success("Your password updated successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });

          localStorage.setItem('token', response.data.token);
          setCheck(false);
          passwordChange.oldPassword = "";
          passwordChange.newPassword = "";
          passwordChange.confirmPassword = "";

        })
        .catch((error) => {
          error.response.data.errors.forEach((err) => {
            toast.error(`${err.msg}!`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          });
          setLoading(false);
          // console.log(error.response.data.errors);
        });
    } 
  };

  const submitForm = () => {
    setLoading(true);
    let formData = {};
    if (formState.email.trim() == user.email.trim())
    {
    formData = {
    name: formState.userName
    }}else 
    { 
    formData = {
      name: formState.userName,
      email: formState.email,
    }
    }
    axios
      .put(
        "https://furnival.onrender.com/users/updateMe",

        formData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }

      )
      .then((response) => {
        setLoading(false);
        setUser(response.data.data)
        toast.success("Your profile updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        // console.log("User updated successfully");
      })
      .catch((error) => {
        toast.error(`${error.response.data.errors[0].msg}!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setLoading(false);
      });
  };
  
  // console.log('user',user.email)
  // console.log('formState',formState.email)


  useEffect(() => {
    const getUser = () => {
      axios
        .get("https://furnival.onrender.com/users/getMe", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          setLoading(false);
          setUser(response.data.data)
          //  console.log(response.data.data);
          setFormState({
            userName: response.data.data.name,
            email: response.data.data.email,
          });
          setUserData(response.data.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    };
    getUser();
    colorAstrisk();
    colorAsteriskPassword();
  }, []);

  return (
    <div className="flex flex-col gap-5 content-center">
      {loading && <Loader />}
      <div>
        <h2 className="text-primary my-2 ">Profile</h2>
        <p className="text-dark">
          Manage your details, view your tier status and change your password
        </p>
      </div>

      <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-7 rounded-[16px] shadow-gray ">
        <div className="w-full form">
          <h4 className="text-primary mb-2">General Info</h4>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-3 md:gap-10 ">
              <div className="flex flex-col gap-1 flex-auto">
                <input
                  type="text"
                  name="userName"
                  id="name"
                  className={`${getInputColor(
                    "userName"
                  )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.userName}
                  onChange={handleChange}
                />
                <label htmlFor="userName" className="text-primary order-1">
                  User Name*
                </label>
                {formErrors.userName !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {formErrors.userName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 flex-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${getInputColor(
                    "email"
                  )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.email}
                  onChange={handleChange}
                />

                <label htmlFor="email" className="text-primary order-1">
                  Email*
                </label>
                {formErrors.email !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {formErrors.email}
                  </p>
                )}
              </div>
              {/* 
              <div className="flex flex-col gap-1 flex-auto">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className={`${getInputColor(
                    "phone"
                  )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="text-primary order-1">
                  Phone*
                </label>
                {formErrors.phone !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {formErrors.phone}
                  </p>
                )}
              </div> */}
            </div>

            <div className="btns flex flex-col md:flex-row gap-1 md:gap-3 ">
              <button className="btn btn-primary md:w-[200px] py-0 mt-5 rounded-[8px] ">
                Update Info
              </button>
              <label
                htmlFor="my-modal-3"
                onClick={() =>setCheck(true)}
                className="btn btn-primary-outline  mt-1 md:mt-5 block  py-4 px-6 cursor-pointer text-capitalize "
              >
                Change password
              </label>
            </div>
          </form>
        </div>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" onChange={(e)=>{setCheck(check)}}  checked={check} />
        <div className="modal z-100">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              onClick={()=>{setCheck(false)}}
              className="btn text-error px-4 rounded-[6px] btn-sm btn-circle absolute right-2 top-2 hover:bg-error hover:text-white hover:border-error"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold pb-4">
              You can change your password here !
            </h3>

            <form
              onSubmit={handlePasswordSubmit}
              id="passwordForm"
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="oldPassword"
                  id="oldPassword"
                  className="border border-[rgba(0,0,0,.1)] rounded px-4 py-2 order-2 "
                  value={passwordChange.oldPassword}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="oldPasssword" className="text-primary order-1">
                  Current Password*
                </label>
                {passwordChangeErrors.oldPassword !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {passwordChangeErrors.oldPassword}
                  </p>
                )}
              </div>

              <div className=" flex flex-col gap-1">
              <div className="relative w-full min-h-[40px] order-2">
              <input
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  id="newPassword"
                  className={`${getPasswordInput(
                    "newPassword"
                  )} order-2 border border-[rgba(0,0,0,.1)] w-full rounded px-4 py-2 absolute z-10 top-0 left-0`}
                  value={passwordChange.newPassword}
                  onChange={handlePasswordChange}
                />
                 <span onClick={handleTogglePassword} className="cursor-pointer absolute top-2 right-3 z-20">
        {showPassword ? <img src="./eye-hide.png" alt="hide password" />: <img src="./eye-show.png" alt="show password" />} 
      </span>  
              </div>
            
                <label htmlFor="newPasssword" className="relative text-primary order-1">
                  New Password*
                </label>
                {passwordChangeErrors.newPassword !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {passwordChangeErrors.newPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
              <div className="relative w-full min-h-[40px] order-2">
              <input
                  type={showPassword2 ? 'text' : 'password'}
                  name="confirmPassword"
                  id="confirmPassword"
                  className={`${getPasswordInput(
                    "confirmPassword"
                  )} order-2 border border-[rgba(0,0,0,.1)]  w-full rounded px-4 py-2`}
                  value={passwordChange.confirmPassword}
                  onChange={handlePasswordChange}
                />
                 <span onClick={handleTogglePassword2} className="cursor-pointer absolute top-2 right-3 z-20">
                 {showPassword2 ? <img src="./eye-hide.png" alt="hide password" />: <img src="./eye-show.png" alt="show password" />} 
      </span>  
              </div>
              
                <label
                  htmlFor="confirmPassword"
                  className="text-primary order-1"
                >
                  Confirm Password*
                </label>
                {passwordChangeErrors.confirmPassword !== "" && (
                  <p className="text-red-500 text-sm order-3">
                    {passwordChangeErrors.confirmPassword}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-[200px] py-0 mt-5 rounded-[8px] "
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
