interface Props {
  setShowSortContainer: (show: boolean) => void;
  setClickedSort: (set: string) => void;
}

const SortContainer = ({ setShowSortContainer, setClickedSort }: Props) => {
  const clickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setClickedSort(e.currentTarget.textContent!);
    setShowSortContainer(false);
  };
  return (
    <ul className="absolute right-0 top-12 bg-white p-4 z-20 rounded-lg flex flex-col text-sm gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <li className="cursor-pointer" onClick={clickHandler}>
        Best match
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        Price - low to high
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        Price - high to low
      </li>
    </ul>
  );
};

export default SortContainer;
