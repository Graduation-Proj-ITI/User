import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className=" ">
      {isReadMore ? text.slice(0, 120) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide cursor-pointer text-gray-400 "
      >
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </div>
  );
}
