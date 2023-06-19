import React from "react";

const Service = ({ icon, title, details }) => {
  return (
    <div className="bg-white rounded-lg shadow-base relative bottom-1/4 flex flex-col items-center justify-evenly">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="w-[180px] text-center text-bluegray-600 ">{details}</p>
    </div>
  );
};

export default Service;
