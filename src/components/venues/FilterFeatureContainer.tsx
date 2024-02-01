import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  title: string;
  filtersSelected: FiltersInterface;
}

const FilterFeatureContainer = ({ title, filtersSelected }: Props) => {
  const [clicked, setClicked] = useState(
    filtersSelected.features?.includes(title)
  );
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
