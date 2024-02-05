import ReactSlider from "react-slider";

interface Props {
  minGuests: number;
  maxGuests: number;
  setMinGuests: (val: number) => void;
  setMaxGuests: (val: number) => void;
}

const GuestSlider = ({
  minGuests,
  maxGuests,
  setMinGuests,
  setMaxGuests,
}: Props) => {
  const toggleChange = (v: number[]) => {
    setMinGuests(v[0]);
    setMaxGuests(v[1]);
  };
  return (
    <div>
      <ReactSlider
        className="horizontal-slider text-sm sm:text-base"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[minGuests, maxGuests]}
        min={20}
        max={250}
        onChange={(value) => toggleChange(value)}
        pearling
        minDistance={10}
      />
      <div className="flex gap-4">
        <div className="border rounded p-2 flex flex-col gap-1 w-full">
          <p className="text-[12px] sm:text-[14px] text-gray-500">Minimum</p>
          <span className="text-sm sm:text-base">{minGuests}</span>
        </div>
        <div className="border rounded p-2 flex flex-col gap-1 w-full">
          <p className="text-[12px] sm:text-[14px] text-gray-500">Maximum</p>
          <span className="text-sm sm:text-base">
            {maxGuests}
            {maxGuests === 250 ? "+" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuestSlider;
