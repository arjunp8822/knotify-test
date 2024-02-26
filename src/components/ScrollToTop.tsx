import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setShowScrollButton(false);
        }, 1000);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  if (showScrollButton) {
    return (
      <div className="fixed bottom-4 w-full mx-auto h-[30px] sm:h-[50px]">
        <div className="max-w-[1400px] mx-auto flex justify-end px-4 sm:px-8 md:px-12">
          <div
            className="-full bg-black text-white p-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ScrollToTop;
