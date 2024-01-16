import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoSortDesc } from "react-icons/go";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
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
      <div
        className="static sm:absolute right-0 text-2xl border border-gray-300 py-1 px-2 rounded-lg text-gray-500 cursor-pointer h-[38px] flex justify-center items-center"
        onClick={() => setShowSortContainer(!showSortContainer)}
      >
        <GoSortDesc />
      </div>
      {showSortContainer && (
        <ul className="absolute right-0 top-12 bg-white w-[120px] p-3 z-20 rounded-lg flex flex-col text-sm gap-2 shadow-2xl">
          <li
            className="cursor-pointer"
            onClick={() => setShowSortContainer(false)}
          >
            Price
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setShowSortContainer(false)}
          >
            Reviews
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setShowSortContainer(false)}
          >
            Rating
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setShowSortContainer(false)}
          >
            Guests
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
