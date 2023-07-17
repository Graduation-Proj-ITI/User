import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../../form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollButton from "../Components/Shared/ScrollToTopButton";
const Contact = () => {
  // window.scrollTo(0, 0);
  const handleClick = (event) => {
    // handle the logic for clicking the link
    event.preventDefault();
  };

  const cards = [
    {
      icon: "phone.svg",
      desc: "01234567890",
    },
    {
      icon: "email.svg",
      desc: "Furnival@gmail.com",
    },
    {
      icon: "location.svg",
      desc: "Ismailia, ITI",
    },
  ];

  const [formState, setFormState] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
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
      fName: "",
      lName: "",
      email: "",
      phone: "",
      message: "",
    });

    let isValid = true;

    // Set corresponding error messages if validation fails
    if (formState.fName.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        fName: "first Name is required",
      }));
      isValid = false;
    } else if (/\d/.test(formState.fName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        fName: "first Name cannot contain numbers",
      }));
      isValid = false;
    }

    if (formState.lName.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lName: "last Name is required",
      }));
      isValid = false;
    } else if (/\d/.test(formState.lName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lName: "last Name cannot contain numbers",
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

    if (formState.message.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: "message is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitForm(event);
      toast.success("Your message sent successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setFormState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        message: "",
      });
      // console.log(formState)
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
  };

  const getInputColor = (fieldName) => {
    if (formState[fieldName] != "" && formErrors[fieldName] == "") {
      document.getElementById(fieldName).parentElement.classList.add("success");
    }
    return formState[fieldName] != "" && formErrors[fieldName] == ""
      ? "green"
      : "";
  };

  const colorAstrisk = () => {
    const labels = document.querySelectorAll("label");

    Array.from(labels).forEach((label) => {
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

  //rememebr to fix success color in inputs when handle change
  return (
    <div>
      <header className="w-full h-[40vh] lg:h-[45vh] bg-[url('../contact/contact.png')] bg-no-repeat bg-cover ">
        <div className="w-full h-full bg-gray-600/30 backdrop-brightness-75 flex flex-col justify-center items-center">
          <h4 className="text-white font-semibold text-xl md:text-4xl mb-4 md:mb-6 ">
            Contact Us
          </h4>
          <div className="text-white font-inter text-sm md:text-lg">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="text-white hover:text-white flex items-start gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </li>
            </ol>
          </div>
        </div>
      </header>

      {/* cards contact */}

      <section className="card-contact text-white mb-[20px]">
        <div className="container mx-auto px-5 lg:px-[100px] ">
          <div className="grid items-center justify-center  grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-[30px] lg:gap-[80px]">
            {cards.map((card, ind) => (
              <div className="" key={ind}>
                <div
                  className="flex m-auto items-center justify-center text-center text-white gap-[50px] w-[90%] min-h-[140px] "
                  style={{
                    boxShadow: "0px 0px 20px rgba(185, 185, 185, 0.25)",
                    borderRadius: "16px",
                  }}
                >
                  <div className="w-full">
                    <div className="w-[55px] p-2 flex items-center justify-center bg-bgColor rounded-full m-auto relative top-[-60px]  transform translate-x-[-40%] left-[7%]">
                      <img
                        src={`./icons/${card.icon}`}
                        alt="card icon"
                        className="max-w-full w-full"
                      />
                    </div>
                    <div className="text-center text-primary font-bold mt-[-5] mb-[2]">
                      {card.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* form */}
      <section className="contact-form">
        <div className="container mx-auto px-5  lg:px-[40px] xl:px-[100px] mb-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[0px]">
            <img
              src="/contact/Vector.png"
              className="w-full m-auto md:w-3/4 max-w-[100%]"
            />

            <div className="self-center ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div className="flex w-full flex-col gap-1">
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      value={formState.fName}
                      onChange={handleChange}
                      className={`${getInputColor(
                        "fName"
                      )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                    />
                    <label htmlFor="fName" className="text-primary order-1">
                      First Name*
                    </label>

                    {formErrors.fName && (
                      <span className="text-error order-2">
                        {formErrors.fName}
                      </span>
                    )}
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      value={formState.lName}
                      onChange={handleChange}
                      className={`${getInputColor(
                        "lName"
                      )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                    />
                    <label htmlFor="lName" className="text-primary order-1">
                      Last Name*
                    </label>

                    {formErrors.lName && (
                      <span className="text-error order-2">
                        {formErrors.lName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between gap-4 md:gap-6 flex-col md:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`${getInputColor(
                        "email"
                      )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                    />
                    <label htmlFor="email" className="text-primary order-1">
                      Email*
                    </label>

                    {formErrors.email && (
                      <span className="text-error order-2">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`${getInputColor(
                        "phone"
                      )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                    />
                    <label htmlFor="phone" className="text-primary order-1">
                      Phone*
                    </label>

                    {formErrors.phone && (
                      <span className="text-error order-2">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex w-[100%] flex-col gap-1">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={`${getInputColor(
                      "message"
                    )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2 min-h-[140px]`}
                  ></textarea>
                  <label htmlFor="message" className="text-primary order-1">
                    Message*
                  </label>

                  {formErrors.message && (
                    <span className="text-error order-2">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary text-[17px] py-[8px] mt-2 w-full md:w-1/2 mx-auto "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ScrollButton />
    </div>
  );
};

export default Contact;
