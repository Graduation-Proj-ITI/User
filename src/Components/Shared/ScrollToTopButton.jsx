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
      <button
        className={
          "z-20 btn btn-secondary btn-circle cursor-pointer bottom-12 right-10 px-0 shadow-md    " +
          (visible ? " fixed  " : " none")
        }
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-angle-up text-xl"></i>
      </button>
    </>
  );
}
