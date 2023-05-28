import React from "react";
import team1 from "../../public/images/About/team1.jpg";
import vector from "../../public/images/About/Vector.png";
import cover from "../../public/images/About/cover.png";

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
                  <i className="fa-solid fa-house"></i>
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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-x-40 gap-y-10 sm:gap-x-120 md:gap-x-200 lg:gap-x-240 max-w-screen-lg mx-auto mt-10 sm:mt-16 mb-20 sm:mb-32">
        <div className="w-52 md:w-80">
          <h6 className="text-primary font-semibold text-lg md:text-xl mb-4 md:mb-6">
            We pick our team
          </h6>
          <p className="text-gray-700 font-inter leading-5 md:leading-7 text-sm md:text-lg">
            Our team is passionate about furniture, and we collaborate
            effectively to achieve your goals and deliver high-quality work.
            We're trying to go above and beyond to meet your expectations and
            deliver exceptional results to make your dream home true.
          </p>
        </div>
        <div>
          <img
            className="h-52 sm:h-52 md:h-80 object-contain"
            src={vector}
            alt="Live from space album cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center text-primary my-8">
          More About Us
        </h2>
        <div className="sm:flex-row w-7/12">
          <div className="flex justify-between w-full mx-auto my-9 shadow-md rounded-xl">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-xl"
              src={team1}
              alt="Live from space album cover"
            />
            <div className="flex flex-col justify-center mx-5">
              <h6 className="text-lg font-medium md:text-xl mb-3">
                This is how it's began
              </h6>
              <p className="text-md leading-normal text-gray-700 font-inter">
                From the initial stages of brainstorming and ideation to the
                final implementation, our team works hand in hand, pooling our
                collective talents and perspectives. We foster an environment
                that encourages open communication, creative thinking, and
                mutual respect.
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full mx-auto my-9 shadow-md rounded-xl">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-xl order-2"
              src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Live from space album cover"
            />
            <div className="flex flex-col justify-center mx-5 order-1">
              <h6 className="text-lg md:text-xl font-medium mb-3">
                Attention to details
              </h6>
              <p className="text-md leading-normal text-gray-700 font-inter">
                We are dedicated to provide our customers with the highest
                quality furniture that meets their lifestyle. Our team's
                commitment to meticulous craftsmanship, attention to detail, and
                a deep understanding of materials ensures that every piece we
                create reflects our passion for excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
