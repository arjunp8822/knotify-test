import PackageImg from "/assets/venuePackage.png";
import { PackageData } from "./VenuePackages";
import { FaPlus } from "react-icons/fa6";

interface Props {
  venuePackage: {
    title: string;
    name: string;
    duration: number;
    days: string[];
    description: string;
    disclaimer: string;
    minGuests: number;
    maxGuests: number;
    priceStarting: number;
    venueInclusions: string[];
    serviceInclusions: string[];
    planningInclusions: string[];
    diningInclusions: string[];
  };
  setShowPackageModal: (showPackageModal: boolean) => void;
  setPackageData: (data: PackageData) => void;
}

const VenuePackage = ({
  venuePackage,
  setShowPackageModal,
  setPackageData,
}: Props) => {
  const clickHandler = () => {
    setPackageData(venuePackage);
    setShowPackageModal(true);
  };

  return (
    <li
      className="flex flex-col text-sm sm:text-base justify-start gap-4 border p-4 rounded-xl"
      onClick={clickHandler}
    >
      <div className="flex items-center gap-4 text-gray-700">
        <img src={PackageImg} alt="Package Image" className="w-4" />
        <div>{venuePackage.title}</div>
      </div>
      <div className="font-semibold mb-4">{venuePackage.name}</div>
      <button className="border rounded-xl border-primary flex gap-2 items-center">
        <span className="text-primary">See Package</span>
        <div className="text-[10px] bg-primary text-white p-1 rounded-full">
          <FaPlus />
        </div>
      </button>
    </li>
  );
};

export default VenuePackage;
