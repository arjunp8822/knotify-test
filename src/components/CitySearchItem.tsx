import { CiLocationOn } from "react-icons/ci";

interface Props {
  city: string;
  state: string;
  setClickedCity: (city: string) => void;
}

const CitySearchItem = ({ city, state, setClickedCity }: Props) => {
  return (
    <li
      className="flex gap-4 items-center cursor-pointer"
      onClick={() => setClickedCity(city)}
    >
      <div className="text-2xl bg-gray-200 p-2 sm:p-3 rounded-lg font-semibold">
        <CiLocationOn />
      </div>
      <div className="text-sm sm:text-base">{`${city}, ${state}`}</div>
    </li>
  );
};

export default CitySearchItem;
