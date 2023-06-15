import { useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 270) {
      setVisible(true);
    } else if (scrolled <= 270) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="flex flex-row ">
        <button
          className={
            "z-20 btn bg-secondary text-white btn-circle border-0 cursor-pointer bottom-12 right-10 px-0 shadow-md hover:bg-secondary " +
            (visible ? " fixed" : " none")
          }
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-angle-up text-xl"></i>
        </button>
      </div>
    </>
  );
}
