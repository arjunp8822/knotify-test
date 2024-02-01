import { useEffect, useState } from "react";
import { Data } from "../data/VenueData";
import VenueCard from "../components/venues/VenueCard";
import SearchBar from "../components/venues/SearchBar";
import { PackageData } from "../components/venuePage/VenuePackages";
import { FAQs } from "../components/list/VendorFAQ";
import CityData from "../data/CityData.json";

export interface VenueDataInterface {
  id: number;
  featured: boolean;
  name: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests: number;
  short_description: string;
  img: string[];
  features: string[];
  packages: PackageData[];
  faqs: FAQs[];
  workWith: number[];
  facebook: string;
  instagram: string;
  website: string;
}

export interface City {
  City: string;
  State: string;
}

export interface FiltersInterface {
  city: string | null;
  sort: string | null;
}

const Home = () => {
  const [data, setData] = useState<VenueDataInterface[]>(Data);

  // filter functionality

  const [filtersSelected, setFiltersSelected] = useState<FiltersInterface>({
    city: null,
    sort: "Best match",
  });

  useEffect(() => {
    // city search filter

    let filteredData;

    if (filtersSelected.city) {
      filteredData = Data.filter((x) => x.city === filtersSelected.city);
    } else {
      const cityList = CityData.map((cityObj) => cityObj.City);
      filteredData = Data.filter((x) => cityList.includes(x.city));
    }

    // sort

    if (filtersSelected.sort === "Best match") {
      filteredData = [...filteredData].sort((a, b) => a.id - b.id);
    }

    if (filtersSelected.sort === "Price - low to high") {
      filteredData = [...filteredData].sort(
        (a, b) => a.min_price - b.min_price
      );
    }

    if (filtersSelected.sort === "Price - high to low") {
      filteredData = [...filteredData].sort(
        (a, b) => b.min_price - a.min_price
      );
    }

    setData(filteredData);
  }, [filtersSelected]);

  // lazy load functionality

  const [visibleCards, setVisibleCards] = useState(12); // Set cards to show here

  const handleShowMore = () => {
    // Set cards to show here
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 12, data.length)
    );
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center mb-8 relative">
        <SearchBar setFiltersSelected={setFiltersSelected} />
      </div>
      <ul className="grid gap-x-5 sm:gap-x-10 gap-y-8 md:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, visibleCards).map((venue) => (
          <VenueCard
            key={venue.id}
            name={venue.name}
            link={venue.id.toString()}
            location={venue.location}
            rating={venue.rating}
            review_count={venue.review_count}
            min_price={venue.min_price}
            max_guests={venue.max_guests}
            img={venue.img}
          />
        ))}
      </ul>
      {data.length > visibleCards && (
        <div className="flex justify-center mt-12">
          <button
            className="border border-black text-sm"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
