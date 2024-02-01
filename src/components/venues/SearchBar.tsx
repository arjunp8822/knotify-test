import { IoIosClose } from "react-icons/io";
import { GoSortDesc } from "react-icons/go";
import SortContainer from "./SortContainer";
import { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import CitySearch from "./CitySearch";
import { City, FiltersInterface } from "../../pages/Vendors";
import { MdFilterAlt } from "react-icons/md";
import CityData from "../../data/CityData.json";

interface Props {
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const SearchBar = ({ setFiltersSelected }: Props) => {
  const toggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearHandler = () => {
    setSearch("");
    setFiltersSelected((prev) => ({
      ...prev,
      city: null,
    }));
  };

  const [openTest, setOpenTest] = useState(false);
  const [search, setSearch] = useState("");
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [cityData, setCityData] = useState<City[]>([]);
  const [showSortContainer, setShowSortContainer] = useState(false);

  // toggle search bar on user input

  useEffect(() => {
    const updateData = () => {
      if (search.length > 0) {
        const cityList = CityData.filter((x) =>
          x.City.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5);
        setCityData(cityList);
        setShowCitySearch(true);
      } else {
        setShowCitySearch(false);
        setCityData([]);
      }
    };
    updateData();
  }, [search]);

  return (
    <div className="relative w-full flex justify-center items-center gap-4 sm:gap-0">
      {showCitySearch && (
        <CitySearch
          cityData={cityData}
          setShowCitySearch={setShowCitySearch}
          setFiltersSelected={setFiltersSelected}
        />
      )}
      <div className="relative w-full sm:w-auto ">
        <input
          type="text"
          placeholder="Search by any city"
          className="border border-gray-300 text-sm sm:text-[15px] w-full sm:w-96 px-4 py-2 rounded-lg h-[38px]"
          onChange={toggleChange}
          value={search}
        />
        {search.length > 0 && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
            onClick={clearHandler}
          >
            <IoIosClose />
          </div>
        )}
      </div>
      <div className="static sm:absolute right-0 flex justify-center items-center gap-4">
        {/* test */}
        <button
          className="border flex items-center gap-2 text-gray-500"
          onClick={() => setOpenTest(true)}
        >
          <MdFilterAlt />
          <span>Filter</span>
        </button>
        <div
          className={`${
            openTest
              ? "fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 transition-all bg-black bg-opacity-50"
              : ""
          }`}
        >
          <div
            className={`transition-all ${
              openTest ? "translate-y-0" : "translate-y-[100vh]"
            }`}
          >
            {openTest && <FilterModal setOpenTest={setOpenTest} />}
          </div>
        </div>
        {/* end test */}

        <div
          className="border border-gray-300 py-1 px-2 rounded text-gray-500 cursor-pointer h-[38px] flex justify-center items-center text-2xl"
          onClick={() => setShowSortContainer(!showSortContainer)}
        >
          <GoSortDesc />
        </div>
      </div>
      {showSortContainer && (
        <SortContainer
          setShowSortContainer={setShowSortContainer}
          setFiltersSelected={setFiltersSelected}
        />
      )}
    </div>
  );
};

export default SearchBar;
