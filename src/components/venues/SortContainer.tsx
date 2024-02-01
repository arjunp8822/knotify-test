import { FiltersInterface } from "../../pages/Vendors";

interface Props {
  setShowSortContainer: (show: boolean) => void;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const SortContainer = ({ setShowSortContainer, setFiltersSelected }: Props) => {
  const clickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setShowSortContainer(false);
    setFiltersSelected((prev) => ({
      ...prev,
      sort: e.currentTarget.textContent,
    }));
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
