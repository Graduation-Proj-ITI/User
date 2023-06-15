import React, { useState } from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-footerBg bg-fixed relative mt-10 py-20 flex justify-between flex-wrap max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem]">
          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12  max-sm:flex max-sm:justify-center mt-5">
            <div className="space-y-5 mx-2 ">
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Flogo_light.png?alt=media&token=06f0238a-cb8c-4afe-8c04-aa4b40a04502"
                className="h-10 mr-3"
                alt="Flowbite Logo"
              /> */}
              <h1 className="text-white">Furnival</h1>
              <p className=" text-gray-300 text-base ">
                Lorem sit adipisicing elit. facere magni possimus molestiae,
                voluptas magnam. Minus dolorem quisquam!
              </p>

              <div className="flex space-x-1 ">
                <div className="rounded-md  bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100  group w-10 text-center">
                  <i className="fa-brands fa-facebook-f group-hover:animate-bounce"></i>
                </div>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100  group w-10 text-center">
                  <i className="fa-brands fa-twitter group-hover:animate-bounce"></i>
                </div>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100  group w-10 text-center">
                  <i className="fa-brands fa-instagram group-hover:animate-bounce"></i>
                </div>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100  group w-10 text-center">
                  <i className="fa-brands fa-whatsapp group-hover:animate-bounce"></i>
                </div>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100  group w-10 text-center">
                  <i className="fa-brands fa-pinterest-p group-hover:animate-bounce"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-2/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
            <h4 className="font text-white font-semibold text-xl">
              Quick Links
            </h4>
            <hr className=" w-14 "></hr>
            <ul className=" text-gray-300 font-semibold list-disc px-3">
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                About Us
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Blogs & Articles
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
            <h4 className="font text-white font-semibold text-xl">
              Categories
            </h4>
            <hr className=" w-14 "></hr>
            <ul className=" text-gray-300 font-semibold list-disc px-3 grid grid-cols-2">
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Sofas
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Lambs
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Chairs
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Tables
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Doors
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Drawers
              </li>
            </ul>
          </div>

          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 space-y-5 mt-5">
            <h4 className="font text-white font-semibold text-xl">Contact</h4>
            <hr className=" w-14 "></hr>

            <div className="flex space-x-2">
              <i className="fa-solid fa-location-dot text-gray-300 py-1"></i>
              <p className=" text-gray-300">
                121 King St, Melbourne den 3000, Australia
              </p>
            </div>
            <div className="group flex space-x-2 cursor-pointer">
              <i className="fa-solid fa-envelope text-gray-300 py-1  group-hover:text-gray-300 duration-300"></i>
              <p className=" text-gray-300  group-hover:text-secondary  duration-300">
                info@example.com
              </p>
            </div>
            <div className="group flex space-x-2 cursor-pointer">
              <i className="fa-solid fa-phone text-gray-300 py-1 group-hover:text-gray-300 duration-300"></i>
              <p className=" text-gray-300 group-hover:text-secondary  duration-300">
                +000 000 0000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-primary opacity-80 justify-around py-8 ">
          <div className="flex flex-wrap gap-5">
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer  ">
              Terms of Use
            </a>
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer ">
              Privacy Policy
            </a>
          </div>
          <div className=" text-gray-300">
            2023 © Furnival. All Rights are Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
