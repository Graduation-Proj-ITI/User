/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css";
import Navbar from "../../Components/navbar/Navbar";
import SingleProduct from "./SingleProduct";
import FilterMenu from "../../Components/Shared/FilterMenu";
import { Link, useParams } from "react-router-dom";
import ProductCardSkeleton from "../../Components/common/ProductSkeleton";
import ScrollButton from "../../Components/Shared/ScrollToTopButton";
const pageSize = 9;

function Product({ setItemsInCart, setItemsInWishlist }) {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [products, setProducts] = useState([]);
  let [itemsToRender, setItemsToRender] = useState([]);
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState([
    { name: "red", id: 1 },
    { name: "yellow", id: 2 },
    { name: "blue", id: 3 },
    { name: "green", id: 4 },
    { name: "brown", id: 5 },
    {name:"beige",id:6},
    {name:"black",id:7},
    {name:"gray",id:8},
    
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(10000);
  const [rate, setRate] = useState(3);
  let noOfPages = 1;
  /*--------------productd-------------*/
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://furnival.onrender.com/products"
      );
      setProducts(data.data);
      setItemsToRender(data.data);
      console.log(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
    } catch {
      console.log("error");
    }
  };

  const getProductsByCategoryId = async (categoryId) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://furnival.onrender.com/products?category=${categoryId}`
      );
      setProducts(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
      setItemsToRender(data.data);
      console.log(data.data);
    } catch {
      console.log("error");
    }
  };
  /*--------------category--------------*/
  const getCategory = async () => {
    setLoading(true)

    try {
      const { data } = await axios.get(
        "https://furnival.onrender.com/categories"
      );
      setCategory(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
      console.log(data.data);
    } catch {
      console.log("error");
    }
  };
  /*----------------------getProductInCategory--------*/
  const getProductInCategory = async (catname) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${catname}`
      );
      setProducts(data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
    } catch {
      console.log("error");
    }
  };
  /*-------------Color---------------------*/
  const getProductWirhColor = async (colorName) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        ` https://furnival.onrender.com/products?colors=${colorName}`
      );
      setItemsToRender(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
      console.log(itemsToRender);
    } catch {
      console.log("error");
    }
  };
  /*--------------price-------------------------*/
  const getProductWirhPrice = async (price) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        ` https://furnival.onrender.com/products?price[lte]=${price}`
      );
      setItemsToRender(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
      console.log(itemsToRender);
    } catch {
      console.log("error");
    }
  };
  /*--------------------product-with-rate----------*/
  const getProductWithRate = async (rate) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        ` https://furnival.onrender.com/products?rate[lte]=${rate}`
      );
      setItemsToRender(data.data);
      setTimeout(()=>{
        setLoading(false)
      },1000)
      console.log(itemsToRender);
    } catch {
      console.log("error");
    }
  };
  /*----------------------------------------*/
  const changeCurrentCateegory = (name) => {
  setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
    setCurrentCategory(name);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log(products);
    if (!currentCategory) {
      setItemsToRender(products);
      console.log(itemsToRender);
    } else {
      const filtersProduct = products.filter(
        (product) => product.category.name === currentCategory
      );
      setItemsToRender(filtersProduct);
      console.log(itemsToRender);
    }
  }, [currentCategory]);

  //pagination

  noOfPages = Math.ceil(itemsToRender?.length / pageSize);
  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;
  itemsToRender = itemsToRender.slice(start, end);

  useEffect(() => {
 
    if (!categoryId) {
      getProducts();
    } else {
      getProductsByCategoryId(categoryId);
    }

    getCategory();

    return () => {
      console.log("clean useEffect shop ");
    };
    
  }, []);

  /*---------html and css--------*/
  return (
    <div className="pb-20">
      {/* <Navbar /> */}
      <div className="bg-shop w-full h-[40vh] lg:h-[45vh] bg-no-repeat bg-cover ">
        <div className=" w-full h-full bg-gray-600/30 backdrop-brightness-75 flex flex-col justify-center items-center">
          <h1 className="text-white font-semibold text-xl md:text-4xl mb-4 md:mb-6">
            Shop
          </h1>
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a
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
              </a>
            </li>
            <li className="flex items-center text-white">
              <span className="mx-2">/</span>
              <span>Shop</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="mt-10 m-auto">
        <div className="intro flex justify-center items-center">
          <div className="introcontent  text-center pt-1">
            <h1 className="text-xl font-extrabold pb-3">
              Make your dream home true
            </h1>
            <p className="leading-8 text-gray-700">
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
                getProductWirhColor={getProductWirhColor}
                getProducts={getProducts}
                getProductWithRate={getProductWithRate}
                setRate={setRate}
                getProductWirhPrice={getProductWirhPrice}
                setPrice={setPrice}
                price={price}
                rate={rate}
                changeCurrentCateegory={changeCurrentCateegory}
              />
              <label htmlFor="filterMenu" className="btn bg-primary border-0  ">
                Apply
              </label>
            </div>
          </div>

          <div className="flex gap-16 sm:gap-4 md:gap-8 lg:gap-16 max-sm:gap-0 justify-evenly ">
            <div className=" lg:w-1/4  max-sm:hidden ">
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
                  getProductWirhColor={getProductWirhColor}
                  getProducts={getProducts}
                  getProductWithRate={getProductWithRate}
                  setRate={setRate}
                  getProductWirhPrice={getProductWirhPrice}
                  setPrice={setPrice}
                  price={price}
                  rate={rate}
                  changeCurrentCateegory={changeCurrentCateegory}
                />
              </div>
            </div>
            <div className=" w-full md:w-2/3  lg:w-3/4 ">
              <div className="grid max-sm:grid-cols-2 max-sm:gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-12 2xl:grid-cols-3 2xl:gap-8 ">
                {itemsToRender.length ? (
                  itemsToRender
                    .filter((product) => {
                      return product.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((product) => {
                      return (
                      loading? (<ProductCardSkeleton/>) :
                        <SingleProduct
                          product={product}
                          key={product._id}
                          setItemsInCart={setItemsInCart}
                          setItemsInWishlist={setItemsInWishlist}
                        />
                      
                      );
                    })
                ) : (
                  <div>
                    <h2 className="text-black text-center">
                      No Products Match
                    </h2>
                  </div>
                )}
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

      <ScrollButton />
    </div>
  );
}

export default Product;
