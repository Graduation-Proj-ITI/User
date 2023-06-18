import React from "react";

const ErrorPage = () => {

  const handleGoHomeClick = () => {
    window.history.pushState(null, null, '/'); // This is to remove the /error from the url
  };
  
      return (
      <div className="container mx-auto px-[60px] lg:px-[120px] max-w-[100%] sm:flex-col lg:flex-row flex items-center justify-center gap-[40px] lg:gap-[100px]">
      <img src="./error.png" className="max-w-[100%] w-[80%] flex ms-[-40px] " alt=""/>
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start justify-center">
          <h1 className="text-5xl font-bold text-primary mb-8 max-w-[600px]">Ooops, the page you’re looking for doesn’t exist</h1>
          <button className="btn-primary py-4 w-[300px] text-2xl px-10 flex justify-center items-center gap-[25px]" onClick={handleGoHomeClick}>
          <img src="./icons/Home.svg" className="w-[25px]" alt="home icon"/>
          <span>
          Go Home
          </span></button>
        </div>
        </div>
  )
};

export default ErrorPage;
