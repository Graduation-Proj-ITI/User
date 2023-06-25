import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Shared/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import empwishlist from "../../../public/wishlist.svg";
const Wishlist = () => {
  const token = localStorage.getItem("token");
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (id) => {
    setLoading(true);
    axios
      .post(
        "https://furnival.onrender.com/cart",
        { productId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setLoading(false);
        // console.log(id)
        toast.success("Your product added to cart successfully!", {
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
  const [wishPage, setWishPage] = useState(false);

  useEffect(() => {
    if(window.location.pathname === "/wishlist"){
        setWishPage(true)
    }else 
    {
    setWishPage(false)
    }
    const getWishlist = () => {
      axios
        .get("https://furnival.onrender.com/wishlist", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setLoading(false);
          setWishlist(response.data.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    };
    getWishlist();
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`https://furnival.onrender.com/wishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setLoading(false);
        setWishlist(wishlist.filter((item) => item._id !== id));
        toast.success("Your product deleted from wishlist successfully!", {
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

  // console.log(wishlist);

  return (
    <div className={`flex flex-col gap-9 content-center ${wishPage?'w-[90%] m-auto mt-[80px]':''}`}>
      {loading && <Loader />}
      <div className="flex flex-col gap-4 md:flex-row justify-between mt-5">
        <div>
          <h2 className="text-primary my-2">Wishlist</h2>
          <p className="text-dark">{wishlist.length} items in your wishlist</p>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <img
          src={empwishlist}
          alt="wishlist"
          className="w-1/2 mx-auto mt-[-30px]"
        />
      ) : (
        <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
          <div className="w-full">
            <div className="flex flex-row gap-3 flex-wrap justify-start">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-12 w-full bg-transparent p-5 rounded-[16px] justify-items-center justify-center">
                {wishlist.map((item, ind) => (
                  <div
                    className="flex relative h-[270px] flex-col gap-3 min-w-[200px] max-w-[250px] "
                    key={ind}
                  >
                    <figure className="relative h-[90%]">
                      <img
                        src={item.imageCover}
                        // src="./images/products/product1.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-[8px]"
                      />

                      <div className="absolute bg-secondary items-center justify-center rounded-[50px] top-2 right-2 flex flex-col gap-2 p-3 hover:opacity-[.7] transition duration-300">
                        <button
                          className="btn-icon"
                          onClick={() => handleDelete(item._id)}
                        >
                          <img src="./icons/filledheart.svg" alt="" />
                        </button>
                      </div>
                    </figure>
                    <div className="flex flex-col absolute -bottom-3 w-[90%] mx-auto self-center bg-white px-4 py-4 rounded-[8px] h-auto gap-2 ">
                      <p className="text-black truncate">{item.title}</p>
                      <div className="flex flex-row justify-between items-center content-center gap-2">
                        <button
                          className="btn-primary text-sm"
                          onClick={() => {
                            handleAddToCart(item._id);
                          }}
                        >
                          Add to cart
                        </button>
                        <p className="text-black text-sm font-bold self-end">
                          {item.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
