interface Props {
  setShowSortContainer: (show: boolean) => void;
}

const SortContainer = ({ setShowSortContainer }: Props) => {
  return (
    <ul className="absolute right-0 top-12 bg-white w-[120px] p-3 z-20 rounded-lg flex flex-col text-sm gap-2 shadow-2xl">
      <li
        className="cursor-pointer"
        onClick={() => setShowSortContainer(false)}
      >
        Price
      </li>
      <li
        className="cursor-pointer"
        onClick={() => setShowSortContainer(false)}
      >
        Reviews
      </li>
      <li
        className="cursor-pointer"
        onClick={() => setShowSortContainer(false)}
      >
        Rating
      </li>
      <li
        className="cursor-pointer"
        onClick={() => setShowSortContainer(false)}
      >
        Guests
      </li>
    </ul>
  );
};

export default SortContainer;
