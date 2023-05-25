import { useState, useEffect } from "react";

function Profile() {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    phone: "",
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
        lName: "user Name is required",
      }));
      isValid = false;
    } else if (/\d/.test(formState.lName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lName: "userName cannot contain numbers",
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
      submitForm();
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
  };

  const getInputColor = (fieldName) => {
    return formState[fieldName] != "" && formErrors[fieldName] == ""
      ? "success"
      : "";
  };

  const colorAstrisk = () => {
    const labels = document.querySelectorAll("label");
    Array.from(labels).forEach((label) => {
      console.log(label.parentElement.classList.contains("success"));
      if (!label.parentElement.classList.contains("success")) {
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
                <label htmlFor="userName" className="text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="name"
                  className={`${getInputColor(
                    "userName"
                  )} border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.userName}
                  onChange={handleChange}
                  error={formErrors.userName !== ""}
                  helperText={formErrors.userName}
                />
              </div>
              <div className="flex flex-col gap-1 flex-auto">
                <label htmlFor="email" className="text-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${getInputColor(
                    "userName"
                  )} border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.email}
                  onChange={handleChange}
                  error={formErrors.email !== ""}
                  helperText={formErrors.email}
                />
              </div>

              <div className="flex flex-col gap-1 flex-auto">
                <label htmlFor="phone" className="text-primary">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className={`${getInputColor(
                    "userName"
                  )} border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                  value={formState.userName}
                  onChange={handleChange}
                  error={formErrors.phone !== ""}
                  helperText={formErrors.phone}
                />
              </div>
            </div>

            <div className="btns flex flex-col md:flex-row gap-3 ">
              <button className="btn btn-primary md:w-[200px] py-0 mt-5 rounded-[8px] ">
                Save
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
