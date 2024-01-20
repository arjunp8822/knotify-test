import { useState } from "react";

interface Props {
  initial: number;
  min: number;
  max: number;
  step: number;
}

const Slider = ({ initial, min, max, step }: Props) => {
  const [value, setValue] = useState(initial.toPrecision(1));
  return <div>{value}</div>;
};

export default Slider;
