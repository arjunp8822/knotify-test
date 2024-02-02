interface Props {
  title: string;
  selectedType: string;
  setSelectedType: (selected: string) => void;
}

const VendorTypeCard = ({ title, selectedType, setSelectedType }: Props) => {
  return (
    <li
      className="flex flex-col justify-center items-center gap-2 rounded cursor-pointer"
      onClick={() => setSelectedType(title)}
    >
      <span
        className={`text-sm sm:text-[15px] pb-2 transition-opacity ${
          selectedType === title
            ? "font-semibold border-b-2 border-black text-black"
            : "opacity-60"
        }`}
      >
        {title}
      </span>
    </li>
  );
};

export default VendorTypeCard;
