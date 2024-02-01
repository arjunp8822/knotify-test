import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  title: string;
}

const FilterFeatureContainer = ({ title }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`w-5 h-5 border border-gray-500 rounded text-[9px] justify-center pl-[4px] pt-[4px] ${
          clicked ? "bg-black text-white" : ""
        }`}
      >
        {clicked && <FaCheck />}
      </div>
      <h5 className="text-sm sm:text-base">{title}</h5>
    </div>
  );
};

export default FilterFeatureContainer;
