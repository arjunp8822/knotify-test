import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  initial: number;
  min: number;
  max: number;
  step: number;
  setMinimumRating: (val: number) => void;
}

const Slider = ({ initial, min, max, step, setMinimumRating }: Props) => {
  const [value, setValue] = useState(initial.toPrecision(1));

  const toggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setMinimumRating(parseFloat(e.target.value));
  };

  return (
    <div className="flex gap-4 justify-center items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={toggleChange}
        className="appearance-none border-none bg-gray-100 h-1 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
      />
      <div className="flex items-center gap-1">
        <span className="text-gray-500 text-sm sm:text-base">{value}</span>
        <FaStar />
      </div>
    </div>
  );
};

export default Slider;
