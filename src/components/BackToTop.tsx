import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`BackToTop ${
        showButton ? "show" : ""
      } scroll-auto animate-bounce`}
      onClick={handleClick}
    >
      <i>
        <HiArrowSmUp />
      </i>
    </button>
  );
};

export default BackToTop;
