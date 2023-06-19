/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css";
import Navbar from "../../Components/navbar/Navbar";
import SingleProduct from "./SingleProduct";
import FilterMenu from "../../Components/Shared/FilterMenu";

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
      const { data } = await axios.get(
        "https://furnival.onrender.com/products"
      );
      setProducts(data.data);
      console.log(data.data);
    } catch {
      console.log("error");
    }
  };
  /*--------------category--------------*/
  const getCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://furnival.onrender.com/categories"
      );
      setCategory(data);
    } catch {
      console.log("error");
    }
  };
  /*----------------------getProductInCategory--------*/
  const getProductInCategory = async (catname) => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${catname}`
      );
      setProducts(data);
    } catch {
      console.log("error");
    }
  };
  /*-------------Color---------------------*/
  // const getColors = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:4000/colors");
  //     setColors(data);
  //   } catch {
  //     console.log("error");
  //   }
  // };
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

    <div className="pb-20">
      {/* <Navbar /> */}
      <div className="bg-shop w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[45vh] bg-no-repeat bg-cover ">
        <div className=" w-full h-full bg-gray-600/30 backdrop-brightness-75 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl">Shop</h1>
          <h3 className="text-white text-xl">Home &gt; Shop</h3>
        </div>
      </div>
      <div className="mt-10 m-auto">
        <div className="intro flex justify-center items-center">
          <div className="introcontent  text-center pt-1">
            <h1 className="text-xl font-extrabold pb-3">
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

        <div className="AllProducts mt-16 max-sm:mx-[1rem] sm:mx-[1rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[9rem]">
          {/* <div className="grid grid-cols-4 gap-4">
            <div className=" lg:col-span-1 md:col-span-2">
              <div className="sidebar shadow-xl rounded-tr-2xl rounded-br-2xl  h-auto p-5">
                <div className="inputeSearch mb-5 mt-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="filterby ps-4 mb-4">
                  <h1 className="font-bold text-xl">Filter By</h1>
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
                  <h1 className="text-xl mb-4 font-bold">Categories</h1>
                  <div className=" flex justify-center flex-col ms-5">
                    {categories.data?.map((category) => {
                      return (
                        <h1
                          key={category.id}
                          className={
                            "text-primary text-lg py-1 cursor-pointer capitalize font-medium hover:text-secondary " +
                            (category.id === currentCategory
                              ? "text-secondary"
                              : "")
                          }
                          // onClick={() => changeCurrentCateegory(category.id)}
                          onClick={() => {
                            getProductInCategory(category);
                            // changeCurrentCateegory(category.id);
                            console.log(currentCategory, category.id);
                          }}
                        >
                          {category.name}
                        </h1>
                      );
                    })}
                  </div>
                </div>

                <div className="filtercolor mb-4 ps-4">
                  <h1 className="text-xl mb-4 font-bold">Colors</h1>
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
              <div className="cards  flex flex-wrap gap-5 justify-evenly">
                {itemsToRender
                  .filter((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })
                  .map((product) => {
                    return (
                      <SingleProduct product={product} key={product._id} />
                    );
                  })}
              </div>
              <div className=" flex w-full justify-center items-center mt-5 gap-1 ">
                {pages?.map((page) => (
                  <button
                    onClick={() => changeCurrentPage(page)}
                    key={page}
                    className={
                      "btn btn-circle p-0  btn-outline  hover:bg-secondary hover:border-secondary hover:text-primary " +
                      (currentPage === page
                        ? "bg-primary border-primary text-white"
                        : "text-primary border-primary")
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div> */}
          <div className=" justify-center hidden max-sm:flex max-sm:mb-10 ">
            <label
              htmlFor="filterMenu"
              className=" capitalize btn bg-secondary text-primary border-0 cursor-pointer bottom-12 right-10  "
            >
              Show filter
            </label>
          </div>

          <input type="checkbox" id="filterMenu" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="filterMenu"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary border-0 px-0 "
              >
                ✕
              </label>
              <h3 className="font-bold text-xl capitalize text-center">
                Filter By
              </h3>
              <div className="inputeSearch mb-5 mt-5">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <FilterMenu
                categories={categories}
                currentCategory={currentCategory}
                getProductInCategory={getProductInCategory}
                colors={colors}
                currentColor={currentColor}
                changeCurrentColor={changeCurrentColor}
              />
              <label htmlFor="filterMenu" className="btn bg-primary border-0  ">
                Apply
              </label>
            </div>
          </div>
          <div className="flex gap-16 sm:gap-4 md:gap-8 lg:gap-4 max-sm:gap-0 justify-evenly ">
            <div className="2xl:w-1/4 xl:w-1/5 lg:w-1/4 md:w-1/3  max-sm:hidden ">
              <div className="sidebar shadow-xl rounded-tr-2xl rounded-br-2xl  h-auto p-5">
                <div className="inputeSearch mb-5 mt-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="filterby ps-4 mb-4">
                  <h1 className="font-bold text-xl">Filter By</h1>
                </div>

                <FilterMenu
                  categories={categories}
                  currentCategory={currentCategory}
                  getProductInCategory={getProductInCategory}
                  colors={colors}
                  currentColor={currentColor}
                  changeCurrentColor={changeCurrentColor}
                />
              </div>
            </div>
            <div className="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-2/3 sm:w-full max-sm:w-full ">
              <div className="grid max-sm:grid-cols-2 max-sm:gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-12 2xl:grid-cols-3 2xl:gap-8 ">
                {itemsToRender
                  .filter((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })
                  .map((product) => {
                    return (
                      <SingleProduct product={product} key={product._id} />
                    );
                  })}
              </div>
              <div className=" flex w-full justify-center items-center mt-5 gap-1 ">
                {pages?.map((page) => (
                  <button
                    onClick={() => changeCurrentPage(page)}
                    key={page}
                    className={
                      "btn btn-circle p-0  btn-outline  hover:bg-secondary hover:border-secondary hover:text-primary " +
                      (currentPage === page
                        ? "bg-primary border-primary text-white"
                        : "text-primary border-primary")
                    }
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
