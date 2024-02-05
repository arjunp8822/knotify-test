import { useState } from "react";
import { IoStar } from "react-icons/io5";

interface Props {
  minimumRating: number;
  setMinimumRating: (val: number) => void;
}

const RatingSlider = ({ minimumRating, setMinimumRating }: Props) => {
  const [hoveredNum, setHoveredNum] = useState(0);
  return (
    <div>
      <div className="flex gap-1 text-xl sm:text-2xl">
        <div
          className={`cursor-pointer transition-all ${
            hoveredNum < 1 && minimumRating < 1 ? "text-gray-300" : ""
          }`}
          onClick={() => setMinimumRating(1)}
          onMouseEnter={() => setHoveredNum(1)}
          onMouseLeave={() => setHoveredNum(0)}
        >
          <IoStar />
        </div>
        <div
          className={`cursor-pointer transition-all ${
            hoveredNum < 2 && minimumRating < 2 ? "text-gray-300" : ""
          }`}
          onClick={() => setMinimumRating(2)}
          onMouseEnter={() => setHoveredNum(2)}
          onMouseLeave={() => setHoveredNum(0)}
        >
          <IoStar />
        </div>
        <div
          className={`cursor-pointer transition-all ${
            hoveredNum < 3 && minimumRating < 3 ? "text-gray-300" : ""
          }`}
          onClick={() => setMinimumRating(3)}
          onMouseEnter={() => setHoveredNum(3)}
          onMouseLeave={() => setHoveredNum(0)}
        >
          <IoStar />
        </div>
        <div
          className={`cursor-pointer transition-all ${
            hoveredNum < 4 && minimumRating < 4 ? "text-gray-300" : ""
          }`}
          onClick={() => setMinimumRating(4)}
          onMouseEnter={() => setHoveredNum(4)}
          onMouseLeave={() => setHoveredNum(0)}
        >
          <IoStar />
        </div>
        <div
          className={`cursor-pointer transition-all ${
            hoveredNum < 5 && minimumRating < 5 ? "text-gray-300" : ""
          }`}
          onClick={() => setMinimumRating(5)}
          onMouseEnter={() => setHoveredNum(5)}
          onMouseLeave={() => setHoveredNum(0)}
        >
          <IoStar />
        </div>
      </div>
    </div>
  );
};

export default RatingSlider;
