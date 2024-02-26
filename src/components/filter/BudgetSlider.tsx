import ReactSlider from "react-slider";

interface Props {
  minBudget: number;
  maxBudget: number;
  setMinBudget: (val: number) => void;
  setMaxBudget: (val: number) => void;
}

const BudgetSlider = ({
  minBudget,
  maxBudget,
  setMinBudget,
  setMaxBudget,
}: Props) => {
  const toggleChange = (v: number[]) => {
    setMinBudget(v[0]);
    setMaxBudget(v[1]);
  };
  return (
    <div>
      <ReactSlider
        className="horizontal-slider text-sm sm:text-base"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[minBudget, maxBudget]}
        min={2000}
        max={100000}
        onChange={(value) => toggleChange(value)}
        pearling
        minDistance={100}
      />
      <div className="flex gap-4">
        <div className="border  p-2 flex flex-col gap-1 w-full">
          <p className="text-[12px] sm:text-[14px] text-gray-500">Minimum</p>
          <span className="text-sm sm:text-base">
            ${minBudget.toLocaleString()}
          </span>
        </div>
        <div className="border  p-2 flex flex-col gap-1 w-full">
          <p className="text-[12px] sm:text-[14px] text-gray-500">Maximum</p>
          <span className="text-sm sm:text-base">
            ${maxBudget.toLocaleString()}
            {maxBudget === 100000 ? "+" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetSlider;
