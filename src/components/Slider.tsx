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
    <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      {value}
    </div>
  );
};

export default Slider;
