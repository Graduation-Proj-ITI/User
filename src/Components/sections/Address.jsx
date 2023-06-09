import { useState, useEffect } from "react";
import "../../form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const addresses = [
    {
      id: 1,
      name: "Home",
      address: "1234 Main St",
      city: "Boston",
      zip: "02101",
      country: "USA",
      phone: "617-555-1234",
      isDefault: true,
    },
    {
      id: 2,
      name: "Office",
      address: "5678 Main St",
      city: "Boston",
      zip: "02101",
      country: "USA",
      phone: "617-555-5678",
      isDefault: false,
    },
    {
      id: 3,
      name: "Vacation",
      address: "9012 Main St",
      city: "Boston",
      zip: "02101",
      country: "USA",
      phone: "617-555-5678",
      isDefault: false,
    },
  ];

  const [allAdresses, setAllAdresses] = useState(addresses);

  const [isDefault, setIsDefault] = useState(false);
  const toggleDefault = () => setIsDefault(!isDefault);

  // form state inputs value
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    country: "",
    isDefault: isDefault,
  });

  //error messages
  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    country: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  // handle change in input fields
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const isValidPhone = (phone) => {
    // Phone number validation logic (regex or other validation methods)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  // validation form
  const validateForm = () => {
    // Reset form errors
    setFormErrors({
      name: "",
      address: "",
      city: "",
      zip: "",
      phone: "",
      country: "",
      isDefault: "",
    });

    let isValid = true;

    if (formState.name.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "name of address is required ex. Home , Office",
      }));
      isValid = false;
    } else if (/\d/.test(formState.name)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "name cannot contain numbers",
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

    if (formState.address.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: "address is required ex. 1234 Main St",
      }));
      isValid = false;
    }

    if (formState.city.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        city: "city is required ex. Boston",
      }));
      isValid = false;
    }

    if (formState.country.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        country: "country is required ex. USA",
      }));
      isValid = false;
    }

    if (formState.zip.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        zip: "zip code is required ex. 02101",
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
          "<span style='color:green'>*</span>"
        );
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() && !isEdit) {
      submitForm();
    }
    if (validateForm() && isEdit) {
      editForm();
      setIsEdit(false);
    }
  };

  const submitForm = () => {
    if (isDefault) {
      allAdresses.forEach((address) => {
        address.isDefault = false;
      });

      setFormState({
        name: "",
        address: "",
        city: "",
        zip: "",
        phone: "",
        country: "",
        isDefault: false,
      });

      setAllAdresses([...allAdresses]);
    }

    formState.isDefault = isDefault;
    let newId = addresses.length + 1;
    setAllAdresses([...allAdresses, { id: newId, ...formState }]);
    toast.success("Your address added successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    console.log(formState);
    console.log(addresses);
  };

  const handleDelete = (id) => {
    const newAddresses = allAdresses.filter((address) => address.id !== id);
    setAllAdresses(newAddresses);
    toast.success("Your address deleted successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      color: "red",
    });
  };

  const handleEdit = (id) => {
    const address = allAdresses.find((address) => address.id === id);
    setFormState(address);
    setIsDefault(address.isDefault);
    setIsEdit(true);
  };

  const editForm = () => {
    if (isDefault) {
      allAdresses.forEach((address) => {
        address.isDefault = false;
      });
    }
    formState.isDefault = isDefault;
    const newAddresses = allAdresses.filter(
      (address) => address.id !== formState.id
    );
    setAllAdresses([...newAddresses, formState]);
    toast.success("Your address edited successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      color: "green",
    });
  };
  useEffect(() => {
    colorAstrisk();
  }, [handleChange, isDefault, allAdresses]);

  return (
    <div className="flex flex-col gap-5 content-center">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <h2 className="text-primary my-2">Address</h2>
          <p className="text-dark">
            Manage your saved addresses for fast and easy checkout across our
            marketplaces{" "}
          </p>
        </div>
        <label
          className="btn-primary py-2 px-10 text-[16px] text-white rounded-[26px] self-end cursor-pointer transition duration-500"
          onClick={() => {
            setFormState({
              name: "",
              address: "",
              city: "",
              zip: "",
              phone: "",
              country: "",
              isDefault: false,
            });
            setIsEdit(false);
          }}
          htmlFor="my-modal-3"
        >
          Add New Address
        </label>
      </div>

      {allAdresses
        .map((address, ind) => (
          <div
            className="flex  flex-col lg:flex-row gap-1 bg-bgColor px-5 w-full lg:px-10 py-7 rounded-[16px] shadow-gray "
            key={ind}
          >
            <div className="w-full">
              <div className="flex flex-row gap-1 justify-between">
                <h5 className="text-primary mb-2">Address</h5>

                <div className=" btns flex items-center gap-4">
                  <button className="btn-secondary px-0 py-0  text-[14px] text-white rounded-[6px] transition duration-500 ">
                    <label
                      onClick={() => {
                        handleEdit(address.id);
                      }}
                      className="block px-1 py-1 cursor-pointer"
                      htmlFor="my-modal-3"
                    >
                      <img
                        src="./icons/edit.svg"
                        alt="edit"
                        className=" invert"
                      />
                    </label>
                  </button>

                  <button
                    onClick={() => {
                      handleDelete(address.id);
                    }}
                    className="btn-error  px-1 py-1 text-[14px] text-white rounded-[6px] hover:bg-red-700 transition duration-500 "
                  >
                    <img
                      src="./icons/delete.svg"
                      alt="delete"
                      className=" invert"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col md:flex-row  gap-1 ">
                  <p className="text-dark">User Name: </p>
                  <p className="text-primary ">
                    {address.name}
                    {address.isDefault && "(Default)"}
                  </p>
                </div>
                <div className="w-full flex flex-col md:flex-row  gap-1 ">
                  <p className="text-dark"> Address: </p>
                  <p className="text-primary ">
                    {address.address} {address.city}, {address.country}{" "}
                    {address.zip}
                  </p>
                </div>
                <div className="w-full flex flex-col md:flex-row  gap-1">
                  <p className="text-dark">Phone Number: </p>
                  <p className="text-primary ">{address.phone} </p>
                </div>
              </div>
            </div>
          </div>
        ))
        .reverse()}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal z-100">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn text-error px-4 rounded-[6px] btn-sm btn-circle absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-4">
            You can {isEdit ? "edit" : "add"} new address here!
          </h3>

          <form onSubmit={handleSubmit} className="form flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="ex. Office"
                id="name"
                className={`${getInputColor(
                  "name"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.name}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="text-primary order-1">
                name*
              </label>

              {formErrors.name && (
                <span className="text-error order-2">{formErrors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="phone"
                placeholder="ex. 01087654321"
                id="phone"
                className={`${getInputColor(
                  "phone"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="text-primary order-1">
                Phone Number*
              </label>

              {formErrors.phone && (
                <span className="text-error order-2">{formErrors.phone}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="address"
                placeholder="ex. 123 st. Mt"
                id="address"
                className={`${getInputColor(
                  "address"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.address}
                onChange={handleChange}
              />
              <label htmlFor="address" className="text-primary order-1">
                Address*
              </label>

              {formErrors.address && (
                <span className="text-error order-2">{formErrors.address}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="city"
                placeholder="ex. Boston"
                id="city"
                className={`${getInputColor(
                  "city"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.city}
                onChange={handleChange}
              />
              <label htmlFor="city" className="text-primary order-1">
                City*
              </label>

              {formErrors.city && (
                <span className="text-error order-2">{formErrors.city}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="country"
                placeholder="ex. USA"
                id="country"
                className={`${getInputColor(
                  "country"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.country}
                onChange={handleChange}
              />
              <label htmlFor="country" className="text-primary order-1">
                Country*
              </label>

              {formErrors.country && (
                <span className="text-error order-2">{formErrors.country}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="zip"
                placeholder="ex. 029876"
                id="zip"
                className={`${getInputColor(
                  "zip"
                )} order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                value={formState.zip}
                onChange={handleChange}
              />
              <label htmlFor="zip" className="text-primary order-1">
                Zip*
              </label>

              {formErrors.zip && (
                <span className="text-error order-2">{formErrors.country}</span>
              )}
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="isDefault"
                id="isDefault"
                className="checkbox checkbox-primary text-white order-1"
                checked={isDefault}
                onChange={toggleDefault}
              />
              <label htmlFor="isDefault" className="text-primary order-2">
                is Default
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-[200px] py-0 mt-5 rounded-[8px] "
            >
              {isEdit ? "Edit Address" : "Add Address"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
