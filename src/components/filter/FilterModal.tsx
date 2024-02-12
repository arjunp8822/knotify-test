import FilterCategoryContainer from "./FilterCategoryContainer";
import { IoMdClose } from "react-icons/io";
import FilterFeatureContainer from "./FilterFeatureContainer";
import { FiltersInterface } from "../../pages/Vendors";
import RatingSlider from "./RatingSlider";
import GuestSlider from "./GuestSlider";
import BudgetSlider from "./BudgetSlider";
import { categories, features } from "./FilterModalData";

export interface FilterData {
  categories: string[] | null;
  minimumRating: number | null;
  guests: number | null;
  budget: number | null;
  features: string[] | null;
}

interface Props {
  setOpenTest: (open: boolean) => void;
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
  setFilterButtonRed: (red: boolean) => void;
  selectedCategories: string[] | null;
  setSelectedCategories: (arr: string[]) => void;
  minimumRating: number;
  setMinimumRating: (num: number) => void;
  minGuests: number;
  setMinGuests: (num: number) => void;
  maxGuests: number;
  setMaxGuests: (num: number) => void;
  minBudget: number;
  setMinBudget: (num: number) => void;
  maxBudget: number;
  setMaxBudget: (num: number) => void;
  selectedFeatures: string[] | null;
  setSelectedFeatures: (arr: string[]) => void;
  clearFilters: () => void;
}

const FilterModal = ({
  setOpenTest,
  filtersSelected,
  setFiltersSelected,
  setFilterButtonRed,
  selectedCategories,
  setSelectedCategories,
  minimumRating,
  setMinimumRating,
  minGuests,
  setMinGuests,
  maxGuests,
  setMaxGuests,
  minBudget,
  setMinBudget,
  maxBudget,
  setMaxBudget,
  selectedFeatures,
  setSelectedFeatures,
  clearFilters,
}: Props) => {
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
          <div className="border-b pb-8 mb-2 sm:mb-0">
            <h3 className="font-semibold mb-1 sm:mb-2">Categories</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              Select your favourite styles
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories[
                filtersSelected.vendorType as keyof typeof categories
              ].map((c) => (
                <li onClick={() => clickCategoryHandler(c)}>
                  <FilterCategoryContainer
                    title={c}
                    filtersSelected={filtersSelected}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b pb-8 mb-2 sm:mb-0">
            <h3 className="font-semibold mb-1 sm:mb-2">Rating</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
              What is the minimum rating you desire?
            </p>
            <RatingSlider
              minimumRating={minimumRating}
              setMinimumRating={setMinimumRating}
            />
          </div>

          <div className="border-b pb-8 mb-2 sm:mb-0">
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

          <div className="border-b pb-8 mb-2 sm:mb-0">
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
              {features[
                filtersSelected.vendorType as keyof typeof features
              ].map((f) => (
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
