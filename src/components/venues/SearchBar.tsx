import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import SortContainer from "./SortContainer";
import { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import CitySearch from "./CitySearch";
import { City, FiltersInterface } from "../../pages/Vendors";
import { MdFilterAlt } from "react-icons/md";
import CityData from "../../data/CityData.json";

interface Props {
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const SearchBar = ({ filtersSelected, setFiltersSelected }: Props) => {
  const toggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterClickHandler = () => {
    setOpenTest(true);
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
  const [filterButtonRed, setFilterButtonRed] = useState(false);

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
          className="border border-gray-300 text-sm sm:text-[15px] w-full sm:w-96 px-6 py-2 rounded-full h-[45px]"
          onChange={toggleChange}
          value={search}
        />
        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full flex justify-center items-center bg-black text-white">
          {search.length === 0 ? (
            <div>
              <IoSearch />
            </div>
          ) : (
            <div className="text-xl cursor-pointer" onClick={clearHandler}>
              <IoIosClose />
            </div>
          )}
        </div>
        {filtersSelected.city && (
          <div className="absolute top-0 left-2 h-[85%] flex items-center text-sm sm:text-[15px] px-4 py-2 translate-y-[10%] bg-white max-w-[80%] whitespace-nowrap overflow-hidden">
            {filtersSelected.location}
          </div>
        )}
      </div>
      <div className="static sm:absolute right-0 flex justify-center items-center gap-2 sm:gap-4">
        {/* test */}
        <button
          className={`border flex items-center gap-2 text-black px-3 h-[38px] ${
            filterButtonRed
              ? "border-green-500 text-green-500 bg-green-100"
              : ""
          }`}
          onClick={filterClickHandler}
        >
          <MdFilterAlt />
          <span className="hidden sm:flex">Filter</span>
        </button>

        {openTest && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 transition-all bg-black bg-opacity-50">
            <div className="transition-all relative translate-y-0">
              <FilterModal
                setOpenTest={setOpenTest}
                filtersSelected={filtersSelected}
                setFiltersSelected={setFiltersSelected}
                setFilterButtonRed={setFilterButtonRed}
              />
            </div>
          </div>
        )}
        {/* end test */}

        <div
          className="border border-gray-300 py-1 px-2 rounded text-black cursor-pointer h-[38px] flex justify-center items-center text-2xl"
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
