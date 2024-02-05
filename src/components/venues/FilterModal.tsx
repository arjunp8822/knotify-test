import beach from "/assets/categories/beach.png";
import country from "/assets/categories/garden.png";
import garden from "/assets/categories/luxury.png";
import luxury from "/assets/categories/country.png";
import water from "/assets/categories/water.png";
import wine from "/assets/categories/wine.png";
import FilterCategoryContainer from "./FilterCategoryContainer";
import { IoMdClose } from "react-icons/io";
import FilterFeatureContainer from "./FilterFeatureContainer";
import { useState } from "react";
import { FiltersInterface } from "../../pages/Vendors";
import RatingSlider from "./RatingSlider";
import GuestSlider from "./GuestSlider";
import BudgetSlider from "./BudgetSlider";

export interface FilterData {
  categories: string[] | null;
  minimumRating: number | null;
  guests: number | null;
  budget: number | null;
  features: string[] | null;
}

const categories = [
  { icon: beach, title: "Beach" },
  { icon: country, title: "Garden" },
  { icon: garden, title: "Luxury" },
  { icon: luxury, title: "Country" },
  { icon: water, title: "Waterview" },
  { icon: wine, title: "Winery" },
];

const featureList = [
  "Ceremonies",
  "Receptions",
  "External Catering",
  "MC Services",
  "Amenities",
  "Accessible Location",
  "Outdoor",
  "Accommodation",
  "Parking",
  "Exceptional Menus",
  "Stunning Views",
  "Pet Friendly",
];

interface Props {
  setOpenTest: (open: boolean) => void;
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
  setFilterButtonRed: (red: boolean) => void;
}

const FilterModal = ({
  setOpenTest,
  filtersSelected,
  setFiltersSelected,
  setFilterButtonRed,
}: Props) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFiltersSelected((prev) => ({
      ...prev,
      rating: minimumRating,
      minGuests,
      maxGuests,
      minBudget,
      maxBudget,
      categories: selectedCategories,
      features: selectedFeatures,
    }));
    setFilterButtonRed(true);
    setOpenTest(false);
  };

  const clearFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedCategories([]);
    setMinimumRating(3);
    setMinGuests(20);
    setMaxGuests(500);
    setMinBudget(2000);
    setMaxBudget(50000);
    setSelectedFeatures([]);
    setFiltersSelected((prev) => ({
      ...prev,
      rating: 3,
      minGuests: 20,
      maxGuests: 500,
      minBudget: 2000,
      maxBudget: 50000,
      categories: [],
      features: [],
    }));
    setFilterButtonRed(false);
    setOpenTest(false);
  };

  // handle clicks of categories and features

  const clickCategoryHandler = (title: string) => {
    if (selectedCategories!.includes(title)) {
      setSelectedCategories(selectedCategories!.filter((x) => x !== title));
    } else {
      setSelectedCategories([...selectedCategories!, title]);
    }
  };

  const clickFeatureHandler = (title: string) => {
    if (selectedFeatures!.includes(title)) {
      setSelectedFeatures(selectedFeatures!.filter((x) => x !== title));
    } else {
      setSelectedFeatures([...selectedFeatures!, title]);
    }
  };

  return (
    <form
      className={`bg-white z-50 h-[80vh] w-[95vw] sm:w-[600px] relative rounded`}
      onSubmit={handleSubmit}
    >
      <div className="flex absolute w-full justify-center items-center py-4 px-6 sm:px-8 border-b h-[50px] sm:h-[70px]">
        <div
          className="flex justify-center items-center absolute left-4 sm:text-lg cursor-pointer"
          onClick={() => setOpenTest(false)}
        >
          <IoMdClose />
        </div>
        <h5 className="sm:text-lg font-semibold">Filters</h5>
      </div>

      <div className="h-[calc(100%-100px)] sm:h-[calc(100%-140px)] translate-y-[50px] sm:translate-y-[70px] p-4 sm:p-8 overflow-y-scroll">
        <div className="flex flex-col gap-3 sm:gap-6">
          <div>
            <h3 className="font-semibold mb-1 sm:mb-2">Categories</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              Select your favourite styles
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((c) => (
                <li onClick={() => clickCategoryHandler(c.title)}>
                  <FilterCategoryContainer
                    icon={c.icon}
                    title={c.title}
                    filtersSelected={filtersSelected}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1 sm:mb-2">Rating</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              What is the minimum rating you desire?
            </p>
            <RatingSlider
              minimumRating={minimumRating}
              setMinimumRating={setMinimumRating}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-1 sm:mb-2">Guests</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              How many guests do you think will attend?
            </p>
            <GuestSlider
              minGuests={minGuests}
              maxGuests={maxGuests}
              setMinGuests={setMinGuests}
              setMaxGuests={setMaxGuests}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-1 sm:mb-2">Budget</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              How much do you want to spend on the venue?
            </p>
            <BudgetSlider
              minBudget={minBudget}
              maxBudget={maxBudget}
              setMinBudget={setMinBudget}
              setMaxBudget={setMaxBudget}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-1 sm:mb-2">Features</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Select all your favourite features
            </p>
            <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-3">
              {featureList.map((f) => (
                <li onClick={() => clickFeatureHandler(f)}>
                  <FilterFeatureContainer
                    title={f}
                    filtersSelected={filtersSelected}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-between py-4 px-6 sm:px-8 border-t items-center text-sm sm:text-base h-[50px] sm:h-[70px]">
        <button
          className=" text-sm sm:text-base font-semibold px-0"
          onClick={clearFilters}
        >
          Clear All
        </button>
        <button className="bg-primary text-white font-bold rounded py-1 sm:py-auto text-sm sm:text-base ">
          Show
        </button>
      </div>
    </form>
  );
};

export default FilterModal;
