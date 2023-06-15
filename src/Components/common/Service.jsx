import React from "react";

const Service = ({ icon, title, details }) => {
  return (
    <div className="w-[265px] h-[327px] bg-white rounded-[16px]  shadow-base relative bottom-20 flex flex-col items-center justify-evenly">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="w-[180px] text-center text-bluegray-600 ">{details}</p>
    </div>
  );
};

export default Service;
