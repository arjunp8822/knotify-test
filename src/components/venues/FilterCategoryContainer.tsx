import { useState } from "react";
import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  icon: string;
  title: string;
  filtersSelected: FiltersInterface;
}

const CategoryContainer = ({ icon, title, filtersSelected }: Props) => {
  const [clicked, setClicked] = useState(
    filtersSelected.categories?.includes(title)
  );
  return (
    <div
      className={`flex rounded-lg justify-center items-center p-2 gap-4 cursor-pointer ${
        clicked ? "border border-black" : "border"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <img src={icon} alt={title} className="w-4" />
      <h5
        className={`text-sm sm:text-base ${
          clicked ? "font-normal" : "font-light"
        }`}
      >
        {title}
      </h5>
    </div>
  );
};

export default CategoryContainer;
