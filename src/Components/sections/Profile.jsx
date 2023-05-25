import { useState, useEffect } from "react";

import "../../form.css";

function Profile() {

  const userData = {
    userName: "John Doe",
    email: " john@gmail.com ",
    phone: " 0108765432",
  }

  const [formState, setFormState] = useState({
    userName: userData.userName,
    email: userData.email,
    phone: userData.phone,
  });

  const [formErrors, setFormErrors] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const isValidEmail = (email) => {
    // Email validation logic (regex or other validation methods)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Phone number validation logic (regex or other validation methods)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    // Reset form errors
    setFormErrors({
      userName: "",
      email: "",
      phone: "",
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

    if (formState.phone.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone is required",
      }));
      isValid = false;
    } else if (!isValidPhone(formState.phone.trim())) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number",
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitForm(event);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const getInputColor = (fieldName) => {
    return formState[fieldName] != "" && formErrors[fieldName] == ""
      ? "success"
      : "";
  };

  const colorAstrisk = () => {
    const labels = document.querySelectorAll("label");
    Array.from(labels).forEach((label) => {
      if (!label.previousElementSibling.classList.contains("success")) {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:red'>*</span>"
        );
      } else {
        label.innerHTML = label.innerHTML.replace(
          "*",
          "<span style='color:green'>*</span>"
        );
      }
    });
  };

  useEffect(() => {
    colorAstrisk();
  }, [handleChange]);

  return (
    <div className="flex flex-col gap-9 content-center">
      <div>
        <h1 className="text-primary mb-2">Profile</h1>
        <p className="text-dark">
          Manage your details, view your tier status and change your password
        </p>
      </div>

      <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
        <div className="w-full">
          <h2 className="text-primary mb-2">General Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-10 ">
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
{
                  formErrors.userName !== "" && (
                    <p className="text-red-500 text-sm order-3">{formErrors.userName}</p>
                  )
                  }
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
                {
                  formErrors.email !== "" && (
                    <p className="text-red-500 text-sm order-3">{formErrors.email}</p>
                  )
                  }
              </div>

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
                   {
                  formErrors.phone !== "" && (
                    <p className="text-red-500 text-sm order-3">{formErrors.phone}</p>
                  )
                  }
              </div>
            </div>

            <div className="btns flex flex-col md:flex-row gap-3 ">
              <button className="btn btn-primary md:w-[200px] py-0 mt-5 rounded-[8px] ">
                Update Info
              </button>
              <button className="btn btn-primary-outline py-0 mt-5 rounded-[8px] ">
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
