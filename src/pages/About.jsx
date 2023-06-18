import React from "react";

import vector from "../../public/images/About/Vector.png";
import cover from "../../public/images/About/cover.png";
import { Link } from "react-router-dom";

import Team from "../Components/sections/Team";
import Testimonials from "../Components/sections/Testimonials";
import AboutCard from "../Components/sections/AboutCard";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[45vh]"
          src={cover}
          alt="Cover"
          style={{ opacity: "0.8" }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          onClick={handleClick}
        >
          <h4 className="text-white font-semibold text-xl md:text-4xl mb-4 md:mb-6">
            About Us
          </h4>
          <div className="text-white font-inter text-sm md:text-lg">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a
                  href="/"
                  className="text-white hover:text-white flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
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
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span>About Us</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] py-16 w-full flex flex-col sm:flex-col sm:gap-10  max-sm:gap-10 md:gap-28 md:flex-row justify-center items-center ">
        <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
          <h6 className="text-primary font-semibold text-lg max-sm:text-center max-sm:text-2xl sm:text-center md:text-xl mb-4 md:mb-6 md:text-start">
            We pick our team
          </h6>
          <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
            Our team is passionate about furniture, and we collaborate
            effectively to achieve your goals and deliver high-quality work.
            We're trying to go above and beyond to meet your expectations and
            deliver exceptional results to make your dream home true.
          </p>
        </div>
        <div>
          <img
            className="h-52 sm:h-80 md:h-80 object-contain"
            src={vector}
            alt="Live from space album cover"
          />
        </div>
      </div>

      <AboutCard />
      <Testimonials />
      <Team />
    </div>
  );
};

export default About;
