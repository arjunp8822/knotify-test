import { CiLocationOn } from "react-icons/ci";
import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  city: string;
  state: string;
  setShowCitySearch: (show: boolean) => void;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const CitySearchItem = ({
  city,
  state,
  setShowCitySearch,
  setFiltersSelected,
}: Props) => {
  const clickHandler = () => {
    setShowCitySearch(false);
    setFiltersSelected((prev) => ({
      ...prev,
      city,
      location: `${city}, ${state}`,
    }));
  };

  return (
    <li
      className="flex gap-4 items-center cursor-pointer"
      onClick={clickHandler}
    >
      <div className="text-2xl bg-gray-200 p-2 sm:p-3 rounded-lg font-semibold">
        <CiLocationOn />
      </div>
      <div className="text-sm sm:text-[15px]">{`${city}, ${state}`}</div>
    </li>
  );
};

export default CitySearchItem;
