import React, { useEffect, useState } from "react";
import community from "../../public/images/community/community.png";
import "../App.css";
import axios from "axios";
import ReadMore from "../../../../tailwind graduation/User/src/Components/Shared/Readmore";
import Footer from "../Components/Shared/Footer";

const Community = () => {
  const [tabElements, setTabElements] = useState([
    {
      id: 0,
      title: "Home",
    },
    {
      id: 1,
      title: "My activity",
    },
  ]);

  const [questions, setQuestions] = useState([]);
  const [currenttab, setCurrenttab] = useState(0);
  const [comment, setComment] = React.useState([]);

  useEffect(() => {
    async function getAllQuestions() {
      const { data } = await axios.get("http://localhost:3000/community");
      console.log(data);

      setQuestions(data);
    }

    getAllQuestions();

    return () => {
      console.log("effect clean");
    };
  }, []);

  const questionsToRender =
    currenttab === 1
      ? questions.filter((question) => question.userID === 1)
      : questions;
  return (
    <div className="">
      <div className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[45vh] bg-community bg-no-repeat bg-cover ">
        <div className="w-full h-full bg-gray-600/30 backdrop-brightness-75 flex flex-col justify-center items-center">
          <h4 className="text-white font-bold text-3xl font-poppins text-center ">
            Community
          </h4>
          <div className="text-white font-medium text-lg font-poppins text-center flex justify-center">
            <p className="text-gray-300">
              Home <i className="fa-solid fa-angle-right pe-3 ps-1"></i>
            </p>
            Community
          </div>
        </div>
      </div>

      <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] ">
        <div className="tabs my-5 justify-center max-sm:mb-8 sm:mb-8 xl:mb-16">
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
                  {questions.filter((question) => question.userID === 1).length}
                </span>
              ) : (
                ""
              )}
            </a>
          ))}
        </div>

        <div className="grid gap-7 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
          {questionsToRender.map((question) => (
            <div
              className="mx-auto group border-2 border-gray-100 shadow-sm rounded-xl w-fit "
              key={question.id}
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src={question.image}
                  className="object-cover w-full h-60 shadow-sm scale-100 group-hover:scale-110 ease-in duration-300"
                />
              </figure>

              <div className="p-5">
                <h5 className="text-primary font-medium font-poppins text-base">
                  {question.title}
                </h5>
                <h6 className="text-slate-500 font-poppins text-sm pt-1 capitalize">
                  By: {question.username}
                </h6>

                <div className="text-[0.9rem] text-gray-600 pt-3">
                  {question.description.length > 160 ? (
                    <ReadMore>{question.description}</ReadMore>
                  ) : (
                    question.description
                  )}
                </div>

                <div className="flex gap-5 pt-2 pb-2 ps-2">
                  <div className="text-gray-400 flex gap-2 items-center">
                    <label htmlFor={"comment" + question.id}>
                      <i className="fa-solid fa-comment hover:text-secondary cursor-pointer"></i>
                    </label>

                    <p>{question.comments.length}</p>
                  </div>
                  <div className="text-gray-400 flex gap-2 items-center">
                    <i
                      className="fa-solid fa-heart cursor-pointer"
                      id={"like" + question.likes}
                    ></i>
                    <p>{question.likes.length}</p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  id={"comment" + question.id}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor={"comment" + question.id}
                      className="btn btn-sm bg-secondary border-0 btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold text-primary font-poppins pb-5">
                      Comments
                    </h3>
                    {question.comments.map((comment) => (
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
                </div>

                <div className="w-full flex gap-3 justify-between border-gray-600 rounded-lg shadow-sm py-2 pe-4 items-center ">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <label
        htmlFor="AddNewQuestion"
        className="z-20 btn bg-secondary text-white btn-circle border-0 cursor-pointer bottom-12 right-10 px-0 shadow-md hover:bg-secondary fixed"
      >
        <i className="fa-solid fa-plus text-xl"></i>
      </label>

      <input type="checkbox" id="AddNewQuestion" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="AddNewQuestion"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary border-0 px-0 "
          >
            ✕
          </label>
          <h3 className="text-lg font-medium capitalize text-center">
            Ask question
          </h3>
          <form className="py-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Add Question"
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
      </div>
    </div>
  );
};

export default Community;
