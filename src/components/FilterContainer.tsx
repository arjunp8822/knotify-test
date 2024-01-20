import beach from "/assets/categories/beach.png";
import country from "/assets/categories/garden.png";
import garden from "/assets/categories/luxury.png";
import luxury from "/assets/categories/country.png";
import water from "/assets/categories/water.png";
import wine from "/assets/categories/wine.png";
import CategoryContainer from "./CategoryContainer";
import { IoMdClose } from "react-icons/io";
import Slider from "./Slider";

interface Props {
  setShowFilterContainer: (show: boolean) => void;
}

const categories = [
  { icon: beach, title: "Beach" },
  { icon: country, title: "Garden" },
  { icon: garden, title: "Luxury" },
  { icon: luxury, title: "Country" },
  { icon: water, title: "Waterview" },
  { icon: wine, title: "Winery" },
];

const FilterContainer = ({ setShowFilterContainer }: Props) => {
  return (
    <form className="fixed bg-white shadow-xl p-4 sm:p-8 z-50 top-1/2 -translate-y-1/2 w-11/12 md:w-[600px] h-[80vh]">
      <div className="flex relative justify-center items-center py-3">
        <div
          className="flex justify-center items-center absolute left-0 sm:text-lg cursor-pointer"
          onClick={() => setShowFilterContainer(false)}
        >
          <IoMdClose />
        </div>
        <h1 className="sm:text-lg font-bold">Filters</h1>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:gap-6">
        <div>
          <h3 className="font-semibold mb-1 sm:mb-2">Location</h3>
          <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
            Search any location in Australia
          </p>
          <input
            type="text"
            placeholder="Enter location"
            className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4 rounded-lg"
          />
        </div>

        <div>
          <h3 className="font-semibold mb-1 sm:mb-2">Category</h3>
          <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
            Search by the most popular styles
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((c) => (
              <CategoryContainer icon={c.icon} title={c.title} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-1 sm:mb-2">Rating</h3>
          <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-4">
            Select your minimum rating
          </p>
          <Slider initial={3} min={0} max={5} step={0.1} />
        </div>

        {/* <div>
          <h3>Price</h3>
          <div>Price</div>
        </div>

        <div>
          <h3>Guests</h3>
          <div>Guests</div>
        </div>

        <div>
          <h3>Features</h3>
          <div>Features</div>
        </div> */}
      </div>
    </form>
  );
};

export default FilterContainer;
