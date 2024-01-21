import { useEffect, useState } from "react";
import { Data } from "../data/VenueData";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";
import CitySearch from "../components/CitySearch";
import CityData from "../data/CityData.json";

interface Data {
  id: number;
  name: string;
  location: string;
  city: string;
  state: string;
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
}

const Home = ({ showFilterContainer, setShowFilterContainer }: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [clickedCity, setClickedCity] = useState("");

  useEffect(() => {
    setData(Data);
  }, []);

  useEffect(() => {
    const filterData = () => {
      const newData = Data.filter((x) =>
        x.city.toLowerCase().includes(clickedCity.toLowerCase())
      );
      setData(newData);
      setShowCitySearch(false);
    };

    filterData();
  }, [clickedCity]);

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

  useEffect(() => {
    if (search.length === 0) {
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
        />
        {showCitySearch && (
          <CitySearch cityData={cityData} setClickedCity={setClickedCity} />
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
