import { City } from "../pages/Home";
import CitySearchItem from "./CitySearchItem";

interface Props {
  cityData: City[];
  setClickedCity: (city: string) => void;
  setShowCitySearch: (show: boolean) => void;
}

const CitySearch = ({ cityData, setClickedCity, setShowCitySearch }: Props) => {
  return (
    <ul className="bg-white shadow-[0_35px_60px_10px_rgba(0,0,0,0.3)] absolute top-12 w-full sm:w-96 max-h-[400px] z-50 rounded-lg px-4 py-8 flex flex-col gap-4">
      {cityData.map((x) => (
        <CitySearchItem
          key={x.City}
          city={x.City}
          state={x.State}
          setClickedCity={setClickedCity}
          setShowCitySearch={setShowCitySearch}
        />
      ))}
    </ul>
  );
};

export default CitySearch;
