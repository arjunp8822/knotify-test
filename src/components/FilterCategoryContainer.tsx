import { useState } from "react";

interface Props {
  icon: string;
  title: string;
}

const CategoryContainer = ({ icon, title }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <li
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
    </li>
  );
};

export default CategoryContainer;
