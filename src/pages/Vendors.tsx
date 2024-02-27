import { useEffect, useState } from "react";
import { Data } from "../data/VenueData";
import VenueCard from "../components/vendors/VendorCard";
import SearchBar from "../components/filter/SearchBar";
import { PackageData } from "../components/vendorPage/VenuePackages";
import { FAQs } from "../components/list/VendorFAQ";
import CityData from "../data/CityData.json";
import VendorType from "../components/vendors/VendorType";
import NoResults from "../components/vendors/NoResults";

export interface VenueDataInterface {
  id: number;
  featured: boolean;
  vendorType: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests?: number;
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
  location: string | null;
  sort: string | null;
  categories: string[] | null;
  rating: number;
  minGuests: number;
  maxGuests: number;
  minBudget: number;
  maxBudget: number;
  features: string[] | null;
  vendorType: string;
}

const Home = () => {
  const [data, setData] = useState<VenueDataInterface[]>(Data);
  const [triggerClear, setTriggerClear] = useState(false);

  const test = () => {
    setTriggerClear(!triggerClear);
  };

  // filter functionality

  const [filtersSelected, setFiltersSelected] = useState<FiltersInterface>({
    city: "",
    location: "",
    sort: "Best match",
    categories: [],
    rating: 0,
    minGuests: 20,
    maxGuests: 250,
    minBudget: 2000,
    maxBudget: 100000,
    features: [],
    vendorType: "Venues",
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

    // vendor type

    filteredData = filteredData.filter(
      (x) => x.vendorType === filtersSelected.vendorType
    );

    // other filters from filter container

    filteredData = filteredData.filter(
      (x) => x.rating > filtersSelected.rating
    );

    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE
    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE
    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE

    // VENUE SPECIFIC

    if (filtersSelected.vendorType === "Venues") {
      filteredData = filteredData.filter(
        (x) => x.max_guests! > filtersSelected.minGuests!
      );
    }

    if (filtersSelected.vendorType === "Venues") {
      filteredData = filteredData.filter(
        (x) =>
          x.min_price < filtersSelected.maxBudget! / filtersSelected.maxGuests
      );
    }

    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE
    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE
    // THESE FILTERS ARE CAUSING AN ISSUE DUE TO DIFFERENT VENDOR TYPE

    if (filtersSelected.categories && filtersSelected.categories.length > 0) {
      filteredData = filteredData.filter((x) =>
        filtersSelected.categories!.includes(x.category)
      );
    }

    if (filtersSelected.features && filtersSelected.features.length > 0) {
      filteredData = filteredData.filter((x) =>
        filtersSelected.features!.every((e) => x.features.includes(e))
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
        <SearchBar
          filtersSelected={filtersSelected}
          setFiltersSelected={setFiltersSelected}
          triggerClear={triggerClear}
        />
      </div>
      <div className="flex justify-center items-center">
        <VendorType
          filtersSelected={filtersSelected}
          setFiltersSelected={setFiltersSelected}
          test={test}
        />
      </div>
      {data.length > 0 ? (
        <ul className="grid gap-x-5 sm:gap-x-10 gap-y-8 md:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, visibleCards).map((venue) => (
            <VenueCard
              key={venue.id}
              name={venue.name}
              vendorType={venue.vendorType}
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
      ) : (
        <NoResults /> // change this to be not found card
      )}

      {data.length > visibleCards && (
        <div className="flex justify-center mt-12">
          <button
            className="border border-black text-sm sm:text-[15px] font-semibold uppercase"
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
