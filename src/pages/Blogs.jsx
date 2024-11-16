import React, { useEffect, useRef, useState } from "react";
import community from "../../public/images/community/community.png";
import "../App.css";
import axios from "axios";
import ReadMore from "../../src/Components/Shared/Readmore";
import { Link } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import ScrollButton from "../Components/Shared/ScrollToTopButton";
// import Footer from "../Components/Shared/Footer";

const Blogs = () => {
  window.scrollTo(0, 0);

  // const [blogs, setblogs] = useState([]);
  const blogsRef = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllblogs() {
      setLoading(true);
      const { data } = await axios.get("https://furnival.onrender.com/blogs");
      console.log(data.data);

      blogsRef.current = data.data
        .map((blog) => {
          let blogDate = new Date(blog.createdAt);
          return { ...blog, createdAt: blogDate.toDateString() };
        })
        .reverse();
      setLoading(false);
    }

    getAllblogs();

    return () => {
      console.log("effect clean");
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <section>
        <div className="w-full h-[40vh] lg:h-[45vh] bg-community bg-no-repeat bg-cover ">
          <div className="w-full h-full bg-gray-600/30 backdrop-brightness-75 flex flex-col justify-center items-center">
            <h4 className="text-white font-semibold text-xl md:text-4xl mb-4 md:mb-6 ">
              Blogs
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
                  <span>Blogs</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div
          className={
            "max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] " +
            (loading ? "py-40" : "py-0")
          }
        >
          <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
            {blogsRef.current.map((blog) => (
              <div
                className="mx-auto group shadow-sm rounded-3xl w-full "
                key={blog._id}
              >
                <figure className="overflow-hidden rounded-t-3xl relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-60 lg:h-72 shadow-sm scale-100 group-hover:scale-110 ease-in duration-300"
                  />

                  <Link to={`/blog/${blog._id}`}>
                    <button className="btn btn-secondary absolute hidden right-0 top-1/4 px-5 rounded-s-3xl rounded-e-none group-hover:flex max-sm:flex ">
                      {" "}
                      Read more
                    </button>
                  </Link>
                </figure>

                <div className="p-5  border-2 border-gray-100 border-t-0 rounded-b-3xl ">
                  <h5 className="text-primary font-bold font-poppins text-xl capitalize">
                    {blog.title}
                  </h5>
                  <h6 className="text-slate-500 font-poppins text-sm pt-1 capitalize font-normal ">
                    {blog.createdAt}
                  </h6>

                  <div className="text-md text-gray-600 pt-3">
                    {blog.content.length > 160
                      ? blog.content.slice(0, 160) + "..."
                      : blog.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollButton />
      </section>
    </>
  );
};

export default Blogs;
