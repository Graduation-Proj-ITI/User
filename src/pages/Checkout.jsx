import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../form.css";
const Checkout = ({
  setItemsInCart,
  priceBeforeDiscount,
  priceAfterDiscount,
  promoCodeDiscount,
  coupon,
  setCoupon,
  ApplyCoupon,
  isCouponExist,
  setCurrentIndex,
  currentIndex,
  cartId,
}) => {
  let paymentMethod = [
    {
      id: "1",
      title: "Cash on delivery",
      icon: "./icons/cash.svg",
    },
    {
      id: "2",
      title: "Debit/Credit Card",
      icon: "./icons/payment.svg",
    },
  ];
  // const navigate = useNavigate();
  const [currPaymentMethod, setCurrPaymentMethod] = useState("");
  const [activeLink, setActiveLink] = useState(0);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [sessionLink, setsessionLink] = useState("");
  const [allAdresses, setAllAdresses] = useState([]);
  const [isDefault, setIsDefault] = useState(false);
  const [check, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rerend, setRerend] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState({});
  const [currAddress, setCurrAddress] = useState("");
  const [radio,setRadio] =useState(false);
  const [cities, setCities] = useState([
    {
      id: "0",
      governorate_name_ar: "null",
      governorate_name_en: "Select City",
    },
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ]);
  // form state inputs value
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    // country: "",
    default: false,
  });

  //error messages
  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    default: false,
    // country: "",
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
    const phoneRegex = /^\d{11}$/;
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
      // country: "",
      default: false,
    });

    let isValid = true;

    if (formState.name.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "name of address is required ex. Home , Office",
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
        city: "city is required ex. cairo",
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() && !isEdit) {
      submitForm();
    }
    if (validateForm() && isEdit) {
      editForm();
    }
  };
  const submitForm = () => {
    setChecked(true);

    if (isDefault) {
      // console.log(isDefault,'from submit')
      const newAddress = [];
      allAdresses.forEach((address) => {
        address.default = false;
        axios
          .put(
            `https://furnival.onrender.com/addresses/${address._id}`,
            address,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            newAddress.push(res.data.data);
            return res.data.data;
          })
          .catch((err) => {
            return err.data;
          });
      });
      // formState.default = isDefault;
      setAllAdresses([...newAddress, formState]);

      setFormState({
        name: "",
        address: "",
        zip: "",
        phone: "",
        default: isDefault,
        // country: "",
        city: "",
      });
    }

    setLoading(true);
    setIsEdit(false);
    setIsDefault(formState.default);
    axios
      .post(
        "https://furnival.onrender.com/addresses",
        {
          alias: formState.name,
          details: formState.address,
          phone: formState.phone,
          postalCode: formState.zip,
          city: formState.city,
          default: isDefault,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setLoading(false);
        setAllAdresses(res.data.data);
        setChecked(false);
        setRerend(true);
        // console.log(formState.default);
        // console.log(res.data.data);
        toast.success("Your address added successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        // setIsDefault(false);
      })
      .catch((err) => {
        setChecked(false);
        setLoading(false);
        // console.log(err.data)
      });
  };
  const handleClickedLink = (index) => {
    setActiveLink(index);
  };
  const getCurrentAddress = (currAddress) => {
    setDefaultAddress(
      allAdresses.find((address) => address._id === currAddress)
    );
  };

  const createOrder = async (defaultAddress, cartId) => {
    setLoading(true);
    console.log(localStorage.getItem("token"), cartId);
    try {
      const { data } = await axios.post(
        `https://furnival.onrender.com/orders/${cartId}`,
        {
          shippingAddress: {
            details: defaultAddress.details,
            postalCode: defaultAddress.postalCode,
            phone: defaultAddress.phone,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(data);
      setCurrentIndex(currentIndex + 1);

      setItemsInCart(0);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error(`${e.response.data.message}!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      console.log(e.response);
    }
  };

  const createSession = async (defaultAddress, cartId) => {
    setLoading(true);
    console.log(localStorage.getItem("token"), cartId);
    try {
      const { data } = await axios.get(
        `https://furnival.onrender.com/orders/checkout-session/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(data);
      setVisibleBtn(true);
      setLoading(false);
      setsessionLink(data.session.url);
      console.log(data.session.url, sessionLink);
      setCurrPaymentMethod(methodP.id);
    } catch (e) {
      toast.error(`${e.response.data.message}!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      setLoading(false);
      setVisibleBtn(false);
      // setCoupon("");
      console.log(e.response);
    }
  };

  useEffect(() => {
    const getAdresses = () => {
      axios
        .get("https://furnival.onrender.com/addresses", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          setLoading(false);
          setAllAdresses(response.data.data);
          console.log(response.data.data, allAdresses);
          if (response.data.data.length === 0) {
            setDefaultAddress(0);
            setRadio(false)

          } else {
            setDefaultAddress(response.data.data.find(add=> add.default == true));
            setCurrAddress(response.data.data.find(add=> add.default == true)._id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAdresses();

    return () => {
      console.log("effect clean checkout");
    };
  }, [isDefault, rerend]);

console.log(currAddress);
  return (
    <>
      <div className="">
        <title className="flex gap-3 items-center pb-5">
          <h4 className="text-primary">Shipping Address</h4>
        </title>
        <div className="flex gap-5 sm:flex-col max-sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          <div className="flex flex-col gap-5 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 sm:w-full max-sm:w-full ">
            <section>
              {!defaultAddress ? (
                ""
              ) : (
                <div className=" bg-gray-50 p-6 rounded-3xl flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <h5 className=" capitalize bg-green-600 text-white rounded-3xl px-3  text-sm">
                        ✓
                      </h5>
                      <h5 className=" capitalize ">{defaultAddress.alias}</h5>
                    </div>

                    <label
                      className="btn-sm btn btn-secondary-outline rounded-3xl px-2 bg-transparent"
                      htmlFor="change-address-modal"
                    >
                      change
                    </label>
                  </div>

                  <p className="flex gap-2 items-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 m-0 p-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {defaultAddress.details} {defaultAddress.postalCode}
                  </p>
                  <p className=" text-primary flex gap-2 items-center">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {defaultAddress.phone}
                  </p>
                </div>
              )}
              <div className="flex justify-center mt-5">
                <label
                  className="btn-primary py-2 px-10 text-[16px] text-white rounded-[26px] self-end cursor-pointer transition duration-500"
                  onClick={() => {
                    setIsDefault(false);
                    setFormState({
                      name: "",
                      address: "",
                      city: "",
                      zip: "",
                      phone: "",
                      // country: "",
                      default: false,
                    });
                    setChecked(true);
                    setIsEdit(false);
                  }}
                  htmlFor="my-modal-3"
                >
                  Add New Address
                </label>
              </div>{" "}
              <input
                type="checkbox"
                id="my-modal-3"
                className="modal-toggle"
                checked={check}
                onChange={(e) => setChecked(check)}
              />
              <div className="modal ">
                <div className="modal-box relative z-50">
                  <label
                    htmlFor="my-modal-3"
                    onClick={() => {
                      setChecked(false);
                    }}
                    className="btn text-error px-4  btn-sm  border-error btn-outline rounded-[6px] absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold pb-4">
                    You can add new address here!
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="form flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="ex. Office"
                        id="name"
                        className={`order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                        value={formState.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone" className="text-primary order-1">
                        name*
                      </label>

                      {formErrors.name && (
                        <span className="text-error order-2">
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="phone"
                        placeholder="ex. 01087654321"
                        id="phone"
                        className={`order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                        value={formState.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone" className="text-primary order-1">
                        Phone Number*
                      </label>

                      {formErrors.phone && (
                        <span className="text-error order-2">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="address"
                        placeholder="ex. 123 st. Mt"
                        id="address"
                        className={`order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                        value={formState.address}
                        onChange={handleChange}
                      />
                      <label htmlFor="address" className="text-primary order-1">
                        Address*
                      </label>

                      {formErrors.address && (
                        <span className="text-error order-2">
                          {formErrors.address}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <select
                        name="city"
                        id="city"
                        className={`text-primary order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                        value={formState.city}
                        onChange={handleChange}
                      >
                        <option
                          className="text-primary hover:text-white"
                          value="Select City"
                          hidden
                        >
                          {" "}
                          Select City
                        </option>
                        <option
                          className="text-primary hover:text-white"
                          value="Select City"
                          disabled
                          default={true}
                        >
                          {" "}
                          Select City
                        </option>
                        {cities.map((city, ind) => (
                          <option
                            key={ind}
                            className="text-primary hover:text-white"
                            value={city.governorate_name_en}
                          >
                            {city.governorate_name_en}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="city" className="text-primary order-1">
                        City*
                      </label>

                      {formErrors.city && (
                        <span className="text-error order-2">
                          {formErrors.city}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="zip"
                        placeholder="ex. 029876"
                        id="zip"
                        className={` order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
                        value={formState.zip}
                        onChange={handleChange}
                      />
                      <label htmlFor="zip" className="text-primary order-1">
                        Zip*
                      </label>

                      {formErrors.zip && (
                        <span className="text-error order-2">
                          {formErrors.zip}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row gap-2">
                      <input
                        type="checkbox"
                        name="isDefault"
                        id="isDefault"
                        className="checkbox checkbox-primaryC text-white order-1"
                        checked={isDefault}
                        onChange={(e) => {
                          setIsDefault(e.target.checked);
                        }}
                      />
                      <label
                        htmlFor="isDefault"
                        className="text-primary order-2"
                      >
                        is Default
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-[200px] py-0 mt-5 rounded-[8px]"
                    >
                      {isEdit ? "Edit Address" : "Add Address"}
                    </button>
                  </form>{" "}
                </div>
              </div>
              <input
                type="checkbox"
                id="change-address-modal"
                className="modal-toggle"
              />
              <div className="modal ">
                <div className="modal-box relative z-50">
                  <label
                    htmlFor="change-address-modal"
                    className="btn text-error px-4 rounded-full btn-sm border-error btn-outline btn-circle absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
                 
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold pb-4">ALL Address</h3>
                  <ul
                    onClick={(e) => {
                      console.log(e.target.value);
                      setCurrAddress(e.target.value);
                    }}
                  >
                    {allAdresses.map((address) => (
                      
                      <li
                        className={
                          " bg-gray-50 p-6 rounded-3xl flex flex-col gap-2 mb-3  border-2 " +
                          (address._id == currAddress 
                            ? " border-secondary"
                            : "")
                        }
                        key={address._id}
                      >
                        <div className="flex gap-2 justify-start">
                          <input
                            type="radio"
                            name="radio-1"
                            value={address._id}
                            className={`radio radio-gray ${address._id == currAddress?'radio-primary':'radio-gray'} text-primary`}
                            checked = {address._id == currAddress }    
                          />
                          
                          <h5 className=" capitalize ">{address.alias}</h5>
                        </div>

                        <p className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 m-0 p-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                          {address.details} {address.postalCode}
                        </p>
                        <p className=" text-primary flex gap-2 items-center">
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
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          {address.phone}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end">
                    <label
                      htmlFor="change-address-modal"
                      className="btn btn-primary rounded-2xl btn-sm "
                      onClick={() => {
                        getCurrentAddress(currAddress);
                      }}
                    >
                      Change
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <title className="flex gap-3 items-center py-5">
              <h4 className="text-primary">Payment</h4>
            </title>
            <section>
              <ul
                onClick={(e) => {
                  console.log(e.target.value);
                  setCurrPaymentMethod(e.target.value);
                  console.log(currPaymentMethod);
                  if (e.target.value === "2") {
                    createSession(defaultAddress, cartId);
                  }
                }}
              >
                {paymentMethod.map((methodP) => (
                  <li
                    className={
                      "bg-gray-50 p-6 rounded-3xl flex  gap-2 mb-3 border-2" +
                      (methodP.id === currPaymentMethod
                        ? " border-secondary"
                        : " ")
                    }
                    key={methodP.id}
                  >
                    <div className="flex justify-between w-full items-center px-2">
                      <div className="flex  gap-2">
                        <input
                          type="radio"
                          name="radio-methodP"
                          value={methodP.id}
                          className={
                            methodP.id === currPaymentMethod
                              ? " bg-secondary"
                              : " "
                          }
                        />
                        <img src={methodP.icon} alt="icon" />
                        <p>{methodP.title}</p>
                      </div>
                      {visibleBtn &&
                      currPaymentMethod === "2" &&
                      methodP.id === currPaymentMethod ? (
                        <Link
                          to={sessionLink}
                          // target="_blank"
                          onClick={() => {
                            setCurrPaymentMethod(methodP.id);
                          }}
                        >
                          <button className="btn btn-secondary btn-sm text-primary">
                            Add New Card
                          </button>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section className="p-5 bg-gray-50 rounded-xl flex flex-col gap-3 h-fit sm:w-full max-sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3">
            <h4 className=" capitalize">Order Summary</h4>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <h6 className="font-normal text-gray-600 capitalize">
                  Subtotal
                </h6>
                <h5 className="">${priceBeforeDiscount?.toFixed(2)}</h5>
              </div>
              {isCouponExist ? (
                <div className="flex justify-between">
                  <h6 className="font-normal text-gray-600 capitalize">
                    Promo Code Discount
                  </h6>
                  <h5 className=" font-normal text-green-700">
                    {
                    priceBeforeDiscount ?? priceAfterDiscount ?(
                    
                    -(priceBeforeDiscount - priceAfterDiscount).toFixed(2))
                    : ""}
                  </h5>
                </div>
              ) : (
                ""
              )}

              <hr></hr>
              <div className="flex justify-between">
                <h6 className="font-normal text-gray-600 capitalize">total</h6>
                <h5 className="">${priceAfterDiscount?.toFixed(2)}</h5>
              </div>
            </div>

            <button
              className={
                "  w-full py-2 rounded-xl " +
                (currPaymentMethod === "1" ? "btn-primary" : "btn-disabled")
              }
              onClick={() => {
                createOrder(defaultAddress, cartId);
              }}
            >
              Place order
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Checkout;
