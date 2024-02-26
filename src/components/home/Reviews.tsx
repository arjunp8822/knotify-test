import { useEffect, useRef, useState } from "react";
import sampleImg from "/assets/blogs/blog0101.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Reviews = () => {
  const [slide, setSlide] = useState(1);
  const slideOneRef = useRef<HTMLDivElement>(null);
  const slideTwoRef = useRef<HTMLDivElement>(null);
  const slideThreeRef = useRef<HTMLDivElement>(null);

  const handleLeftClick = () => {
    if (slide === 1) {
      setSlide(3);
    } else {
      setSlide(slide - 1);
    }
  };

  const handleRightClick = () => {
    if (slide === 3) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  useEffect(() => {
    if (slide === 1) {
      slideOneRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    if (slide === 2) {
      slideTwoRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    if (slide === 3) {
      slideThreeRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [slide]);

  return (
    <div className="mt-20 mb-20">
      <h3 className="text-gray-500 sm:text-lg">
        Hear from our couples and vendors
      </h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">Reviews</h2>
      <div className="relative">
        <div className="flex overflow-x-auto relative snap-mandatory snap-x no-scrollbar">
          <div
            className="md:h-[36vw] min-h-[550px] max-h-[600px] w-full relative flex-shrink-0 snap-center flex flex-col border-t border-b justify-center items-center gap-4 p-8 sm:p-32"
            ref={slideOneRef}
          >
            <img
              src={sampleImg}
              alt="Wedding Image"
              className="object-cover rounded-full h-32 w-32 mb-6"
            />
            <p className="text-gray-500 text-sm sm:text-base text-center font-light">
              "Our wedding day was nothing short of magical, and it wouldn't
              have been possible without Knotify! From finding the perfect venue
              to selecting the most talented vendors, every step was seamless.
              The platform's user-friendly interface made planning a breeze, and
              we were thrilled with the quality of services we received."
            </p>
            <h2 className="font-semibold text-lg sm:text-xl">
              Sarah and Michael
            </h2>
            <h5 className="font-semibold mb-6 text-sm sm:text-base">
              Sydney, Australia
            </h5>
            <button className="bg-primary text-white uppercase text-sm sm:text-base mb-6">
              Find Vendors
            </button>
          </div>
          <div
            className="bg-green-50 h-[260px] md:h-[36vw] max-h-[550px] w-full relative flex-shrink-0 snap-center"
            ref={slideTwoRef}
          >
            Review 2
          </div>
          <div
            className="bg-red-50 h-[260px] md:h-[36vw] max-h-[550px] w-full relative flex-shrink-0 snap-center"
            ref={slideThreeRef}
          >
            Review 3
          </div>
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 hidden sm:flex p-2 rounded-full bg-black text-white"
          onClick={handleLeftClick}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 hidden sm:flex p-2 rounded-full bg-black text-white"
          onClick={handleRightClick}
        >
          <FaAngleRight />
        </button>
        <div className="flex gap-1 absolute bottom-6 left-1/2 -translate-x-1/2">
          <div
            className={`h-2 w-2 rounded-full transition-all ${
              slide === 1 ? "bg-black" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full transition-all ${
              slide === 2 ? "bg-black" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full transition-all ${
              slide === 3 ? "bg-black" : "bg-gray-200"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
