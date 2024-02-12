import { useState } from "react";
import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  title: string;
  filtersSelected: FiltersInterface;
}

const CategoryContainer = ({ title, filtersSelected }: Props) => {
  const [clicked, setClicked] = useState(
    filtersSelected.categories?.includes(title)
  );
  return (
    <div
      className={`flex rounded justify-center items-center p-2 gap-4 cursor-pointer border box-border ${
        clicked ? "border-2 border-black" : ""
      }`}
      onClick={() => setClicked(!clicked)}
      style={{ padding: clicked ? "13px" : "14px" }}
    >
      <h5
        className={`text-sm sm:text-base ${
          clicked ? "text-black font-semibold" : ""
        }`}
      >
        {title}
      </h5>
    </div>
  );
};

export default CategoryContainer;
