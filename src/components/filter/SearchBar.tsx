import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import SortContainer from "./SortContainer";
import { useCallback, useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import CitySearch from "./CitySearch";
import { City, FiltersInterface } from "../../pages/Vendors";
import { MdFilterAlt } from "react-icons/md";
import CityData from "../../data/CityData.json";

interface Props {
  filtersSelected: FiltersInterface;
  triggerClear: boolean;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const SearchBar = ({
  filtersSelected,
  setFiltersSelected,
  triggerClear,
}: Props) => {
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
  const [selectedCategories, setSelectedCategories] = useState<string[] | null>(
    filtersSelected.categories || null
  );
  const [minimumRating, setMinimumRating] = useState(filtersSelected.rating);
  const [minGuests, setMinGuests] = useState<number>(filtersSelected.minGuests);
  const [maxGuests, setMaxGuests] = useState<number>(filtersSelected.maxGuests);
  const [minBudget, setMinBudget] = useState<number>(filtersSelected.minBudget);
  const [maxBudget, setMaxBudget] = useState<number>(filtersSelected.maxBudget);
  const [selectedFeatures, setSelectedFeatures] = useState<string[] | null>(
    filtersSelected.features || null
  );

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    setMinimumRating(3);
    setMinGuests(20);
    setMaxGuests(250);
    setMinBudget(2000);
    setMaxBudget(100000);
    setSelectedFeatures([]);
    setFiltersSelected((prev) => ({
      ...prev,
      rating: 3,
      minGuests: 20,
      maxGuests: 250,
      minBudget: 2000,
      maxBudget: 100000,
      categories: [],
      features: [],
    }));
    setFilterButtonRed(false);
    setOpenTest(false);
  }, [setFiltersSelected]);

  useEffect(() => {
    clearFilters();
  }, [triggerClear, clearFilters]);

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
          className="border border-gray-300 text-sm sm:text-[15px] w-full sm:w-96 px-6 py-2 -full h-[45px]"
          onChange={toggleChange}
          value={search}
        />
        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 -full flex justify-center items-center bg-black text-white">
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
            filterButtonRed ? "border-black text-black bg-gray-100" : ""
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
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                minimumRating={minimumRating}
                setMinimumRating={setMinimumRating}
                minGuests={minGuests}
                setMinGuests={setMinGuests}
                maxGuests={maxGuests}
                setMaxGuests={setMaxGuests}
                minBudget={minBudget}
                setMinBudget={setMinBudget}
                maxBudget={maxBudget}
                setMaxBudget={setMaxBudget}
                selectedFeatures={selectedFeatures}
                setSelectedFeatures={setSelectedFeatures}
                clearFilters={clearFilters}
              />
            </div>
          </div>
        )}
        {/* end test */}

        <div
          className="border py-1 px-2  text-black cursor-pointer h-[38px] flex justify-center items-center text-2xl"
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
