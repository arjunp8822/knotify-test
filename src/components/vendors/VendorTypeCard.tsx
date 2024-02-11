import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  title: string;
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const VendorTypeCard = ({
  title,
  filtersSelected,
  setFiltersSelected,
}: Props) => {
  return (
    <li
      className="flex flex-col justify-center items-center gap-2 rounded cursor-pointer"
      onClick={() =>
        setFiltersSelected((prev) => ({
          ...prev,
          vendorType: title,
        }))
      }
    >
      <span
        className={`text-sm sm:text-[15px] pb-2 transition-opacity ${
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
