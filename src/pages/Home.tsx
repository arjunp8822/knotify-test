import { useEffect, useState } from "react";
import { Data } from "../data/VenueData";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";
import CitySearch from "../components/CitySearch";
import CityData from "../data/CityData.json";
import { FilterData } from "../components/FilterContainer";

interface Data {
  id: number;
  name: string;
  location: string;
  city: string;
  state: string;
  category: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests: number;
  short_description: string;
  img: string[];
}

export interface City {
  City: string;
  State: string;
}

interface Props {
  showFilterContainer: boolean;
  setShowFilterContainer: (show: boolean) => void;
  filterButtonClicked: boolean;
  setFilterButtonClicked: (clicked: boolean) => void;
  filterData: FilterData;
}

const Home = ({
  showFilterContainer,
  setShowFilterContainer,
  filterButtonClicked,
  setFilterButtonClicked,
  filterData,
}: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [clickedCity, setClickedCity] = useState("");

  // set the original data

  useEffect(() => {
    setData(Data);
  }, [filterButtonClicked]);

  // filter by searched filter container

  useEffect(() => {
    const updateData = () => {
      const { categories, minimumRating, guests, budget, features } =
        filterData;
      let newData = Data;
      if (categories && categories.length > 0) {
        newData = Data.filter((x) => categories.includes(x.category));
      }
      if (minimumRating) {
        newData = newData.filter((x) => x.rating >= minimumRating);
      }
      if (guests) {
        newData = newData.filter((x) => x.max_guests >= guests);
      }
      if (budget) {
        if (!guests) {
          newData = newData.filter((x) => x.min_price <= budget / 80);
        } else {
          newData = newData.filter((x) => x.min_price <= budget / guests);
        }
      }
      if (features && features.length > 0) {
        newData = newData.filter((x) =>
          features.every((e) => x.features.includes(e))
        );
      }
      if (!categories && !minimumRating && !guests && !budget && !features) {
        newData = Data;
      }
      if (clickedCity.length > 0) {
        newData = newData.filter((x) =>
          x.city.toLowerCase().includes(clickedCity.toLowerCase())
        );
      }
      setData(newData);
    };

    updateData();
  }, [filterData, clickedCity]);

  // dropdown search for cities

  useEffect(() => {
    const setData = () => {
      if (search.length > 0) {
        const newData = CityData.filter((x) =>
          x.City.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5);
        setCityData(newData);
        setShowCitySearch(true);
      } else {
        setShowCitySearch(false);
        setCityData([]);
      }
    };
    setData();
  }, [search]);

  // reset filter if search gets cleared

  useEffect(() => {
    if (search.length === 0) {
      setSearch("");
      setData(Data);
    }
  }, [search]);

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center mb-8 relative">
        <SearchBar
          search={search}
          setSearch={setSearch}
          showFilterContainer={showFilterContainer}
          setShowFilterContainer={setShowFilterContainer}
          filterButtonClicked={filterButtonClicked}
          setFilterButtonClicked={setFilterButtonClicked}
        />
        {showCitySearch && (
          <CitySearch
            cityData={cityData}
            setClickedCity={setClickedCity}
            setShowCitySearch={setShowCitySearch}
          />
        )}
      </div>
      <ul className="grid gap-x-4 gap-y-8 md:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((venue) => (
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
    </div>
  );
};

export default Home;
