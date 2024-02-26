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
    <div className="mt-10 border-t pt-10 mb-20">
      <h3 className="text-gray-500 sm:text-lg">
        Hear from our couples and vendors
      </h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">Reviews</h2>
      <div className="relative">
        <div className="flex overflow-x-auto relative snap-mandatory snap-x no-scrollbar">
          <div
            className="w-full relative flex-shrink-0 snap-center flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 pb-20"
            ref={slideOneRef}
          >
            <img
              src={sampleImg}
              alt="Wedding Image"
              className="object-cover w-full md:w-1/2 mb-6 h-full"
            />
            <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
              <p className="text-gray-500 text-sm sm:text-base text-start font-light">
                "Our wedding day was nothing short of magical, and it wouldn't
                have been possible without Knotify! From finding the perfect
                venue to selecting the most talented vendors, every step was
                seamless. The platform's user-friendly interface made planning a
                breeze, and we were thrilled with the quality of services we
                received."
              </p>
              <h2 className="font-semibold text-lg sm:text-xl">
                Sarah and Michael
              </h2>
              <h5 className="font-semibold mb-6 text-sm sm:text-base">
                Sydney, Australia
              </h5>
              <button className="bg-primary text-white uppercase text-sm sm:text-base">
                Find Vendors
              </button>
            </div>
          </div>
          <div
            className="w-full relative flex-shrink-0 snap-center flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 pb-20"
            ref={slideTwoRef}
          >
            <img
              src={sampleImg}
              alt="Wedding Image"
              className="object-cover w-full md:w-1/2 mb-6 h-full"
            />
            <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
              <p className="text-gray-500 text-sm sm:text-base text-start font-light">
                "Knotify turned our wedding dreams into a reality! We were blown
                away by the variety of vendors available on the platform, and
                the ability to compare options made decision-making stress-free.
                The vendors we chose were professional, attentive, and truly
                went above and beyond to make our day special. Knotify's support
                team was also incredibly helpful throughout the process!"
              </p>
              <h2 className="font-semibold text-lg sm:text-xl">
                Emily and Jack
              </h2>
              <h5 className="font-semibold mb-6 text-sm sm:text-base">
                Melbourne, Australia
              </h5>
              <button className="bg-primary text-white uppercase text-sm sm:text-base">
                Find Vendors
              </button>
            </div>
          </div>
          <div
            className="w-full relative flex-shrink-0 snap-center flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 pb-20"
            ref={slideThreeRef}
          >
            <img
              src={sampleImg}
              alt="Wedding Image"
              className="object-cover w-full md:w-1/2 mb-6 h-full"
            />
            <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
              <p className="text-gray-500 text-sm sm:text-base text-start font-light">
                "Choosing Knotify was one of the best decisions we made for our
                wedding. The platform's extensive list of vendors allowed us to
                curate our dream team with ease. From florists to photographers,
                each vendor exceeded our expectations. Knotify's communication
                tools kept us organized and on track, ensuring everything ran
                smoothly on the big day."
              </p>
              <h2 className="font-semibold text-lg sm:text-xl">
                Lauren and David
              </h2>
              <h5 className="font-semibold mb-6 text-sm sm:text-base">
                Brisbane, Australia
              </h5>
              <button className="bg-primary text-white uppercase text-sm sm:text-base">
                Find Vendors
              </button>
            </div>
          </div>
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 hidden sm:flex p-2 bg-black text-white"
          onClick={handleLeftClick}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 hidden sm:flex p-2 bg-black text-white"
          onClick={handleRightClick}
        >
          <FaAngleRight />
        </button>
        <div className="flex gap-1 absolute bottom-8 left-1/2 -translate-x-1/2">
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
