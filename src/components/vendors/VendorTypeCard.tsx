import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  title: string;
  filtersSelected: FiltersInterface;
  test: () => void;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const VendorTypeCard = ({
  title,
  test,
  filtersSelected,
  setFiltersSelected,
}: Props) => {
  const handleClick = () => {
    setFiltersSelected((prev) => ({
      ...prev,
      vendorType: title,
    }));
    test();
  };
  return (
    <li
      className="flex flex-col justify-center items-center gap-2 rounded cursor-pointer"
      onClick={handleClick}
    >
      <span
        className={`text-sm sm:text-[15px] pb-2 transition-opacity truncate ${
          filtersSelected.vendorType === title
            ? "font-semibold border-b-2 border-black text-black"
            : "opacity-60"
        }`}
      >
        {title}
      </span>
    </li>
  );
};

export default VendorTypeCard;
