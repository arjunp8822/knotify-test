import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoSortDesc } from "react-icons/go";
import { MdFilterAlt } from "react-icons/md";
import SortContainer from "./SortContainer";

interface Props {
  search: string;
  setSearch: (search: string) => void;
  showFilterContainer: boolean;
  setShowFilterContainer: (show: boolean) => void;
}

const SearchBar = ({
  search,
  setSearch,
  showFilterContainer,
  setShowFilterContainer,
}: Props) => {
  const [showSortContainer, setShowSortContainer] = useState(false);
  const toggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-full flex justify-center items-center gap-4 sm:gap-0">
      <div className="relative w-full sm:w-auto ">
        <input
          type="text"
          placeholder="Search by name or location"
          className="border border-gray-300 text-sm w-full sm:w-72 px-4 py-2 rounded-lg h-[38px]"
          onChange={toggleChange}
          value={search}
        />
        {search.length > 0 && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
            onClick={() => setSearch("")}
          >
            <IoIosClose />
          </div>
        )}
      </div>
      <div className="static sm:absolute right-0 flex justify-center items-center gap-4">
        <div
          className="flex gap-1 justify-center items-center border border-gray-300 py-1 px-2 rounded-lg text-gray-500 cursor-pointer h-[38px]"
          onClick={() => setShowFilterContainer(!showFilterContainer)}
        >
          <span>Filter</span>
          <MdFilterAlt />
        </div>
        <div
          className="border border-gray-300 py-1 px-2 rounded-lg text-gray-500 cursor-pointer h-[38px] flex justify-center items-center text-2xl"
          onClick={() => setShowSortContainer(!showSortContainer)}
        >
          <GoSortDesc />
        </div>
      </div>
      {showSortContainer && (
        <SortContainer setShowSortContainer={setShowSortContainer} />
      )}
    </div>
  );
};

export default SearchBar;
