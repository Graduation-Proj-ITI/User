import React, { useEffect, useState } from "react";

import "../App.css";
import axios from "axios";
import ReadMore from "../../src/Components/Shared/Readmore";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
// import Footer from "../Components/Shared/Footer";

const Blog = () => {
  window.scrollTo(0, 0);
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogById() {
      setLoading(true);
      const { data } = await axios.get(
        `https://furnival.onrender.com/blogs/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data.data);

      let blogDate = new Date(data.data.createdAt);
      data.data.createdAt = blogDate.toDateString();

      setBlog(data.data);
      setLoading(false);
    }

    getBlogById();

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
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span>Blog Details</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] pt-20">
          <h2 className=" text-center capitalize pb-2 max-sm:text-2xl">
            {blog.title}
          </h2>
          <h4 className="text-slate-500 font-poppins capitalize font-normal  text-center pb-8 max-sm:text-lg">
            {blog.createdAt}
          </h4>
          <img
            src={blog.image}
            className="h-72 lg:h-[70vh] w-full  lg:w-11/12 object-cover mx-auto rounded-2xl "
          />

          <p className=" text-lg text-gray-800 py-8 w-11/12 lg:w-10/12 mx-auto">
            {blog.content}
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
