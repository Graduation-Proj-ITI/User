import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css";
import Navbar from "../../Components/navbar/Navbar";
import SingleProduct from "./SingleProduct";

const pageSize = 9;

function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [colors, setColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [search, setSearch] = useState("");
  let noOfPages = 1;
  /*--------------productd-------------*/
  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://furnival.onrender.com/products");
      setProducts(data.data);
      console.log(data.data);
    } catch {
      console.log("error");
    }
  };
  /*--------------category--------------*/
  const getCategory = async () => {
    try {
      const { data } = await axios.get("https://furnival.onrender.com/categories");
      setCategory(data);
    } catch {
      console.log("error");
    }
  };
  /*----------------------getProductInCategory--------*/
  const getProductInCategory=async (catname)=>{
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${catname}`);
      setProducts(data);
    } catch {
      console.log("error");
    }
  }
  /*-------------Color---------------------*/
  const getColors = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/colors");
      setColors(data);
    } catch {
      console.log("error");
    }
  };
/*----------------------------------------*/
  const changeCurrentCateegory = (id) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };
  const changeCurrentColor = (id) => {
    setCurrentColor(id);
    setCurrentPage(1);
  };
  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // let itemsToRender = products;
  // const filteration = (currentCategory, currentColor) => {
  //   if (currentCategory) {
  //     itemsToRender =
  //       currentCategory === 0
  //         ? products
  //         : products.filter((product) => product.category === currentCategory);
  //   } else if (currentColor) {
  //     itemsToRender =
  //       currentColor === 0
  //         ? products
  //         : products.filter((product) => product.color === currentColor);
  //   } else {
  //   }
  // };

  let itemsToRender =
    currentCategory === 0
      ? products
      : products.filter((product) => product.category === currentCategory);

  // itemsToRender=
  // currentColor===0
  // ?products
  // :products.filter((product)=>product.color=== currentColor);

  //pagination

  noOfPages = Math.ceil(itemsToRender?.length / pageSize);
  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;
  itemsToRender = itemsToRender.slice(start, end);

  useEffect(() => {
    getProducts();
    getCategory();
    // getColors();
  }, []);
  /*---------html and css--------*/
  return (
    <div div className="pb-44">
      <Navbar />
      <div className="welcome">
        <div className="overlay flex flex-col justify-center items-center text-black">
          <h1 className="text-white text-4xl">Shop</h1>
          <h3 className="text-white text-xl">Home &gt; Shop</h3>
        </div>
      </div>
      <div className="container m-auto">
        <div className="intro flex justify-center items-center">
          <div className="introcontent  text-center pt-20">
            <h1 className="text-2xl font-extrabold pb-10">
              Make your dream home true
            </h1>
            <p className="leading-8">
              Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquam
              feugiat nunc tortor. Elementum sit urna arcu velit. Blandit odio
              vestibulum id lacus. Pellentesque turpis vel sed mattis a et eget
              consectetur sit. Sed tincidunt aliquam feugiat nunc tortor.
              Elementum sit urna arcu velit. Blandit odio vestibulum id lacus.
              Pellentesque turpis vel sed mattis a et eget consectetur sit
            </p>
          </div>
        </div>

        <div className="AllProducts mt-24">
          <div className="grid grid-cols-4  gap-4">
            
            <div className=" lg:col-span-1 md:col-span-2">
              <div className="sidebar shadow-xl h-auto p-5">
                <div className="inputeSearch mb-5 mt-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="filterby ps-4 mb-4">
                  <h1 className="font-bold text-2xl">Filter By</h1>
                </div>

                <div className="filterPrice  ps-4 mb-8">
                  <h1 className="text-lg mb-4">Price</h1>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="40"
                    className="range range-xs"
                  />
                </div>
                <div className="filtercategory mb-4 ps-4">
                  <h1 className="text-2xl mb-4 font-bold">Categories</h1>
                  <div className=" flex justify-center flex-col ms-5">
                    {categories.data?.map((category) => {
                      return (
                        <h1
                          key={category.id}
                          className={`categorylink mb-4 ${
                            category.id === currentCategory
                              ? "categoryactive"
                              : ""
                          }`}
                          // onClick={() => changeCurrentCateegory(category.id)}
                          onClick={()=>getProductInCategory(category)}
                        >
                          {category.name}
                        </h1>
                      );
                    })}
                  </div>
                </div>

                <div className="filtercolor mb-4 ps-4">
                  <h1 className="text-2xl mb-4 font-bold">Colors</h1>
                  <div className=" flex justify-center flex-col ms-5">
                    {colors?.map((color) => {
                      return (
                        <div
                          style={{ display: "flex", gap: "8px" }}
                          key={color.id}
                        >
                          <span
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: color.name,
                            }}
                          ></span>
                          <h1
                            className={`categorylink mb-4 ${
                              color.id === currentColor ? "categoryactive" : ""
                            }`}
                            onClick={() => changeCurrentColor(color.id)}
                          >
                            {color.name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-3 md:col-span-2 ">
              <div className="cards  flex flex-wrap justify-evenly">
                {itemsToRender
                  .filter((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })
                  .map((product) => {
                    return <SingleProduct product={product} key={product._id} />;
                  })}
              </div>
              <div className="btn-group flex w-full justify-center items-center mt-10">
                {pages?.map((page) => (
                  <button
                    onClick={() => changeCurrentPage(page)}
                    key={page}
                    className={`btn ${
                      currentPage === page ? "btn-active" : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product;
