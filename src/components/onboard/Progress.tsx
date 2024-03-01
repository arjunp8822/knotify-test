interface Props {
  page: number;
  length: number;
}

const Progress = ({ page, length }: Props) => {
  const widthPercentage = `${(1 / length) * page * 100}%`;
  return (
    <div className="relative">
      <div className="bg-gray-200 w-full h-[5px] absolute top-0"></div>
      <div
        className="bg-black h-[5px] absolute top-0 transition-all"
        style={{ width: widthPercentage }}
      ></div>
    </div>
  );
};

export default Progress;
