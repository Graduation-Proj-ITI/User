import { useState, useEffect } from "react";
import "../../form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddressForm = ()=>{
    document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),2000);});
    const [allAdresses, setAllAdresses] = useState([]);
    const [isDefault, setIsDefault] = useState(false);
    const [check,setChecked] = useState(false);
    const [loading,setLoading]=useState(true);
    const[rerend,setRerend] = useState(false);
    
   const [cities,setCities] = useState([
   {"id":"0","governorate_name_ar":"null","governorate_name_en":"Select City"},
    {"id":"1","governorate_name_ar":"القاهرة","governorate_name_en":"Cairo"},
    {"id":"2","governorate_name_ar":"الجيزة","governorate_name_en":"Giza"},
    {"id":"3","governorate_name_ar":"الأسكندرية","governorate_name_en":"Alexandria"},
    {"id":"4","governorate_name_ar":"الدقهلية","governorate_name_en":"Dakahlia"},
    {"id":"5","governorate_name_ar":"البحر الأحمر","governorate_name_en":"Red Sea"},
    {"id":"6","governorate_name_ar":"البحيرة","governorate_name_en":"Beheira"},
    {"id":"7","governorate_name_ar":"الفيوم","governorate_name_en":"Fayoum"},
    {"id":"8","governorate_name_ar":"الغربية","governorate_name_en":"Gharbiya"},
    {"id":"9","governorate_name_ar":"الإسماعلية","governorate_name_en":"Ismailia"},
    {"id":"10","governorate_name_ar":"المنوفية","governorate_name_en":"Menofia"},
    {"id":"11","governorate_name_ar":"المنيا","governorate_name_en":"Minya"},
    {"id":"12","governorate_name_ar":"القليوبية","governorate_name_en":"Qaliubiya"},
    {"id":"13","governorate_name_ar":"الوادي الجديد","governorate_name_en":"New Valley"},
    {"id":"14","governorate_name_ar":"السويس","governorate_name_en":"Suez"},
    {"id":"15","governorate_name_ar":"اسوان","governorate_name_en":"Aswan"},
    {"id":"16","governorate_name_ar":"اسيوط","governorate_name_en":"Assiut"},
    {"id":"17","governorate_name_ar":"بني سويف","governorate_name_en":"Beni Suef"},
    {"id":"18","governorate_name_ar":"بورسعيد","governorate_name_en":"Port Said"},
    {"id":"19","governorate_name_ar":"دمياط","governorate_name_en":"Damietta"},
    {"id":"20","governorate_name_ar":"الشرقية","governorate_name_en":"Sharkia"},
    {"id":"21","governorate_name_ar":"جنوب سيناء","governorate_name_en":"South Sinai"},
    {"id":"22","governorate_name_ar":"كفر الشيخ","governorate_name_en":"Kafr Al sheikh"},
    {"id":"23","governorate_name_ar":"مطروح","governorate_name_en":"Matrouh"},
    {"id":"24","governorate_name_ar":"الأقصر","governorate_name_en":"Luxor"},
    {"id":"25","governorate_name_ar":"قنا","governorate_name_en":"Qena"},
    {"id":"26","governorate_name_ar":"شمال سيناء","governorate_name_en":"North Sinai"},
    {"id":"27","governorate_name_ar":"سوهاج","governorate_name_en":"Sohag"}
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
        default: false
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
  
      // if (formState.city.trim() === "") {
      //   setFormErrors((prevErrors) => ({
      //     ...prevErrors,
      //     city: "city is required ex. Boston",
      //   }));
      //   isValid = false;
      // }
  
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
            "<span style='color:red'>*</span>"
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
        // setIsEdit(false);
      }
    };
  
    const submitForm = () => {
      setChecked(true);
  
      if (isDefault) {
      // console.log(isDefault,'from submit')
      const newAddress = [];
     allAdresses.forEach( address => {
        address.default=false
          axios
         .put(`https://furnival.onrender.com/addresses/${address._id}`, address, {
           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
         }).then(res=>{newAddress.push(res.data.data); return res.data.data;}).catch(err=>{return err.data})
        });
      // formState.default = isDefault;
    setAllAdresses([...newAddress,formState]);
  
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
      axios.post("https://furnival.onrender.com/addresses",  {'alias':formState.name,'details':formState.address,'phone':formState.phone,'postalCode':formState.zip,    "city": formState.city,
      'default':isDefault},{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
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
  
    const handleDelete = (id) => {
      setLoading(true);
      axios
        .delete(`https://furnival.onrender.com/addresses/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((response) => {
          setLoading(false);
          setAllAdresses( allAdresses.filter((address) => address._id !== id));
          toast.success("Your address deleted successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            color: "green",
          });
        })
        .catch((error) => {
          // console.log(error);
        });
        
    };
  
  const [editId,setEditId]=useState('');
  const [currentAddress,setCurrentAddress]=useState(null);
  const [isE,setE]=useState(false);
    const handleEdit = (id) => {
      const address = allAdresses.find((address) => address._id === id);
      setFormState({
      name: address.alias,
      address: address.details,
      phone: address.phone,
      zip: address.postalCode,
      default: address.default,
      city: address.city,
      
      });
      setEditId(id);
      // console.log(id);
      // console.log(address)
      setCurrentAddress(address);
      setIsDefault(address.default);
      // console.log(currentAddress[currentAddress.length-1])
  
      setIsEdit(true);
      setChecked(true)
    };
  
    const editForm = () => {
      setLoading(true);
      const newAddress = [];
      if(isDefault){
      allAdresses.forEach( address => {
         address.default=false
           axios
          .put(`https://furnival.onrender.com/addresses/${address._id}`, address, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }).then(res=>{newAddress.push(res.data.data); return res.data.data;}).catch(err=>{return err.data})
         });
         setChecked(true);
       formState.default = isDefault;
     setAllAdresses([...newAddress]);
        }
      const newAddresses = allAdresses.filter(address=>address._id!==editId);
      axios.put(`https://furnival.onrender.com/addresses/${editId}`,  {'alias':formState.name,'details':formState.address,'phone':formState.phone,'postalCode':formState.zip,    'city': formState.city,
      'default':formState.default},{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
      formState.default = isDefault;
      setAllAdresses([...newAddresses,res.data.data]);
      setIsEdit(true);
      setLoading(false);
      setChecked(false);
  
      toast.success("Your address updated successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // console.log(res.data);
      })
      .catch((err) => {
        setChecked(false);
        setLoading(false);
        setIsEdit(true);
  
      // console.log(err.data)
      });
   
    };
    
    useEffect(() => {
        const  getAdresses=()=>{
          axios
          .get("https://furnival.onrender.com/addresses", {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          .then((response) => {
            setLoading(false);
            setAllAdresses(response.data.data);
          })
          .catch((error) => {
            // console.log(error);
          });
        }
      getAdresses();
      colorAstrisk();
    }, [isDefault,rerend]);
    
    return (
    
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
        
    <select name="city"
          id="city"    
          className={`${getInputColor(
            "city"
        
          )} text-primary order-2 border border-[rgba(0,0,0,.1)] rounded px-4 py-2`}
          value={formState.city}
          onChange={handleChange}>
{
cities.map((city,ind) => 

<option key={ind} className="text-primary hover:text-white" value={city.governorate_name_en}>{city.governorate_name_en}</option>
)
}                    
</select>
          <label htmlFor="city" className="text-primary order-1">
            City*
          </label>

          {formErrors.city && (
            <span className="text-error order-2">{formErrors.city}</span>
          )}
        </div>

        {/* <div className="flex flex-col gap-1">
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
        </div>*/
        }

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
            <span className="text-error order-2">{formErrors.zip}</span>
          )}
        </div>

        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            name="isDefault"
            id="isDefault"
            className="checkbox checkbox-primaryC text-white order-1"
            checked={isDefault}
            onChange={(e)=>{(setIsDefault(e.target.checked));}}
          />
          <label htmlFor="isDefault" className="text-primary order-2">
            is Default
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-[200px] py-0 mt-5 rounded-[8px]"
        >
          {isEdit ? "Edit Address" : "Add Address"}
        </button>
      </form>
      );

}

export default AddressForm;