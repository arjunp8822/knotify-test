import { useState } from "react";

interface Props {
  initial: number;
  min: number;
  max: number;
  step: number;
}

const Slider = ({ initial, min, max, step }: Props) => {
  const [value, setValue] = useState(initial.toPrecision(1));
  return (
    <div className="flex gap-4 justify-center items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="appearance-none border-none bg-gray-100 h-1 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
      />
      <span className="text-gray-500 text-sm sm:text-base">{value}</span>
    </div>
  );
};

export default Slider;
