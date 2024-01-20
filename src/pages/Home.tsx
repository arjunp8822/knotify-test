import { useEffect, useState } from "react";
import { Data } from "../data/VenueData";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";

interface Data {
  id: number;
  name: string;
  location: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests: number;
  short_description: string;
  img: string[];
}

interface Props {
  showFilterContainer: boolean;
  setShowFilterContainer: (show: boolean) => void;
}

const Home = ({ showFilterContainer, setShowFilterContainer }: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(Data);
  }, []);

  useEffect(() => {
    const filterData = () => {
      const newData = Data.filter(
        (x) =>
          x.name.toLowerCase().includes(search.toLowerCase()) ||
          x.location.toLowerCase().includes(search.toLowerCase())
      );
      setData(newData);
    };

    filterData();
  }, [search]);

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center mb-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
          showFilterContainer={showFilterContainer}
          setShowFilterContainer={setShowFilterContainer}
        />
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
