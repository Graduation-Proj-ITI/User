import React, { useEffect, useState } from "react";
import community from "../../public/images/community/community.png";
import "../App.css";
import axios from "axios";
import ReadMore from "../../src/Components/Shared/Readmore";
import { Link } from "react-router-dom";
// import Footer from "../Components/Shared/Footer";

const Blogs = () => {
  //   const [tabElements, setTabElements] = useState([
  //     {
  //       id: 0,
  //       title: "Home",
  //     },
  //     {
  //       id: 1,
  //       title: "My activity",
  //     },
  //   ]);

  const [blogs, setblogs] = useState([]);
  //   const [currenttab, setCurrenttab] = useState(0);
  const [comment, setComment] = React.useState([]);

  useEffect(() => {
    async function getAllblogs() {
      const { data } = await axios.get("https://furnival.onrender.com/blogs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data.data);

      setblogs(data.data);
    }

    getAllblogs();

    return () => {
      console.log("effect clean");
    };
  }, []);

  //   const blogsToRender =
  //     currenttab === 1 ? blogs.filter((blog) => blog.userID === 1) : blogs;
  return (
    <div className="">
      <div className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[45vh] bg-community bg-no-repeat bg-cover ">
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

      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] ">
        {/* <div className="tabs my-5 justify-center max-sm:mb-8 sm:mb-8 xl:mb-16">
          {tabElements.map((ele) => (
            <a
              className={
                "tab tab-lg tab-bordered capitalize w-1/4 max-sm:w-1/2 sm:w-1/3 " +
                (ele.id === currenttab
                  ? "border-secondary text-primary font-semibold max-sm:font-normal"
                  : "")
              }
              key={ele.id}
              onClick={() => {
                setCurrenttab(ele.id);
              }}
            >
              {ele.title}
              {ele.id === 1 ? (
                <span className="ms-2 badge bg-secondary text-primary border-0 ">
                  {blogs.filter((blog) => blog.userID === 1).length}
                </span>
              ) : (
                ""
              )}
            </a>
          ))}
        </div> */}

        <div className="grid gap-7 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mt-10">
          {blogs.map((blog) => (
            <div
              className="mx-auto group border-2 border-gray-100 shadow-sm rounded-xl w-full "
              key={blog._id}
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-60 shadow-sm scale-100 group-hover:scale-110 ease-in duration-300"
                />
              </figure>

              <div className="p-5">
                <h5 className="text-primary font-bold font-poppins text-base capitalize">
                  {blog.title}
                </h5>
                {/* <h6 className="text-slate-500 font-poppins text-sm pt-1 capitalize">
                  By: {blog.username}
                </h6> */}

                <div className="text-md text-gray-600 pt-3">
                  {blog.content.length > 160 ? (
                    <ReadMore>{blog.content}</ReadMore>
                  ) : (
                    blog.content
                  )}
                </div>

                {/* <div className="flex gap-5 pt-2 pb-2 ps-2">
                  <div className="text-gray-400 flex gap-2 items-center">
                    <label htmlFor={"comment" + blog.id}>
                      <i className="fa-solid fa-comment hover:text-secondary cursor-pointer"></i>
                    </label>

                    <p>{blog.comments.length}</p>
                  </div>
                  <div className="text-gray-400 flex gap-2 items-center">
                    <i
                      className="fa-solid fa-heart cursor-pointer"
                      id={"like" + blog.likes}
                    ></i>
                    <p>{blog.likes.length}</p>
                  </div>
                </div> */}

                {/* <input
                  type="checkbox"
                  id={"comment" + blog.id}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor={"comment" + blog.id}
                      className="btn btn-sm bg-secondary border-0 btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold text-primary font-poppins pb-5">
                      Comments
                    </h3>
                    {blog.comments.map((comment) => (
                      <div className="flex gap-2 mb-3" key={comment.id}>
                        <div className="avatar h-12">
                          <div className="w-12 rounded-full">
                            <img src={comment.userImg} />
                          </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <p className="text-base font-semibold capitalize">
                            {comment.username}
                          </p>
                          <div className=" text-gray-600 text-sm">
                            {" "}
                            {comment.comment.length > 160 ? (
                              <ReadMore>{comment.comment}</ReadMore>
                            ) : (
                              comment.comment
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* <div className="w-full flex gap-3 justify-between border-gray-600 rounded-lg shadow-sm py-2 pe-4 items-center ">
                  <input
                    type="text"
                    placeholder="Write comment"
                    className="input w-full max-w-xs input-sm focus:outline-none"
                    value={comment}
                    onChange={(e) => {
                      setComment(() => e.target.value);
                      console.log(comment);
                    }}
                  />
                  <i
                    className={
                      "fa-solid fa-paper-plane" +
                      (comment ? " text-secondary" : "  text-gray-400")
                    }
                  ></i>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <label
        htmlFor="AddNewblog"
        className="z-20 btn bg-secondary text-white btn-circle border-0 cursor-pointer bottom-12 right-10 px-0 shadow-md hover:bg-secondary fixed"
      >
        <i className="fa-solid fa-plus text-xl"></i>
      </label>

      <input type="checkbox" id="AddNewblog" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="AddNewblog"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary border-0 px-0 "
          >
            ✕
          </label>
          <h3 className="text-lg font-medium capitalize text-center">
            Ask blog
          </h3>
          <form className="py-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Add blog"
              className="input w-full max-w-xs input-md focus:outline-none my-2"
              value={comment}
              onChange={(e) => {
                setComment(() => e.target.value);
                console.log(comment);
              }}
            />
            <input
              type="text"
              placeholder="Add Description"
              className="input w-full max-w-xs input-md focus:outline-none my-2"
              value={comment}
              onChange={(e) => {
                setComment(() => e.target.value);
                console.log(comment);
              }}
            />

            <div className="flex gap-4 my-2">
              <label
                htmlFor="image"
                className="btn btn-outline text-primary  btn-sm  capitalize rounded-2xl px-4 gap-3 hover:bg-white hover:text-primary"
              >
                <i className="fa-solid fa-upload"></i>
                Upload Image
              </label>

              <input
                hidden
                accept="image/*"
                type="file"
                id="image"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log(file);
                }}
              />

              <button className=" capitalize btn btn-primary btn-sm rounded-2xl px-12 hover:bg-primary hover:text-white hover:border-primary">
                post
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Blogs;
