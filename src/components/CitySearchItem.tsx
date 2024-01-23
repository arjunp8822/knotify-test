import { CiLocationOn } from "react-icons/ci";

interface Props {
  city: string;
  state: string;
  setClickedCity: (city: string) => void;
  setShowCitySearch: (show: boolean) => void;
}

const CitySearchItem = ({
  city,
  state,
  setClickedCity,
  setShowCitySearch,
}: Props) => {
  const clickHandler = () => {
    setClickedCity(city);
    setShowCitySearch(false);
  };
  return (
    <li
      className="flex gap-4 items-center cursor-pointer"
      onClick={clickHandler}
    >
      <div className="text-2xl bg-gray-200 p-2 sm:p-3 rounded-lg font-semibold">
        <CiLocationOn />
      </div>
      <div className="text-sm sm:text-base">{`${city}, ${state}`}</div>
    </li>
  );
};

export default CitySearchItem;
