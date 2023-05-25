import React, { useEffect, useState } from "react";
import community from "../../public/images/community/community.png";
import "../App.css";
import axios from "axios";
import ReadMore from "../../../../tailwind graduation/User/src/Components/Shared/Readmore";

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
                  ? "border-secondary text-black font-semibold max-sm:font-normal"
                  : "")
              }
              key={ele.id}
              onClick={() => {
                setCurrenttab(ele.id);
              }}
            >
              {ele.title}
              {ele.id === 1 ? (
                <span className="ms-2 badge bg-secondary border-0 ">
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
              className="mx-auto group border-2 border-gray-100 shadow-sm rounded-md p-5 w-fit "
              key={question.id}
            >
              <h5 className="text-primary font-medium font-poppins text-base">
                {question.title}
              </h5>
              <h6 className="text-slate-500 font-poppins text-sm pt-1 pb-3 capitalize">
                By: {question.username}
              </h6>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={question.image}
                  className="object-cover w-full h-60 shadow-sm scale-100 group-hover:scale-110 ease-in duration-300"
                />
              </div>

              <p className="text-[0.9rem] text-gray-600 pt-3">
                {question.description.length > 160 ? (
                  <ReadMore>{question.description}</ReadMore>
                ) : (
                  question.description
                )}
              </p>

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
                        <p className=" text-gray-600 text-sm">
                          {" "}
                          {comment.comment.length > 160 ? (
                            <ReadMore>{comment.comment}</ReadMore>
                          ) : (
                            comment.comment
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-between border-gray-600 rounded-lg shadow-sm py-2 pe-4 items-center ">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
