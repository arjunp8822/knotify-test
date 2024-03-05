interface Props {
  title: string;
  selectedCategories: string[];
  setSelectedCategories: (cat: string) => void;
}

const CategoryType = ({
  title,
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  const clickHandler = () => {
    setSelectedCategories(title);
  };

  return (
    <li
      className={`border cursor-pointer box-border p-3 font-semibold text-sm sm:text-base ${
        selectedCategories.includes(title) && "border-black bg-black text-white"
      }`}
      onClick={clickHandler}
    >
      {title}
    </li>
  );
};

export default CategoryType;
