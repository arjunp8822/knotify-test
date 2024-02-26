import PackageImg from "/assets/venuePackage.png";
import { PackageData } from "./VenuePackages";
import { FaAngleRight } from "react-icons/fa";

interface Props {
  venuePackage: {
    title: string;
    name: string;
    duration?: number;
    days: string[];
    description: string;
    disclaimer: string;
    minGuests?: number;
    maxGuests?: number;
    priceStarting: number;
    venueInclusions?: string[];
    serviceInclusions?: string[];
    planningInclusions?: string[];
    diningInclusions?: string[];
    setupInclusions?: string[];
    ceremonyInclusions?: string[];
    receptionInclusions?: string[];
    deliveryInclusions?: string[];
    preWeddingInclusions?: string[];
    weddingDayInclusions?: string[];
    postWeddingInclusions?: string[];
    preOrderCakeInclusions?: string[];
    weddingDayCakeInclusions?: string[];
    postWeddingCakeInclusions?: string[];
    preEventCateringServices?: string[];
    eventDayCateringServices?: string[];
    postEventCateringServices?: string[];
    preHireServices?: string[];
    duringHireServices?: string[];
    postHireServices?: string[];
    preEventEntertainmentServices?: string[];
    duringEventEntertainmentServices?: string[];
    postEventEntertainmentServices?: string[];
    preEventMCServices?: string[];
    duringEventMCServices?: string[];
    postEventMCServices?: string[];
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
      className="flex flex-col text-sm sm:text-base justify-start gap-4 border p-4 "
      onClick={clickHandler}
    >
      <div className="flex items-center gap-4 text-gray-700">
        <img src={PackageImg} alt="Package Image" className="w-4" />
        <div>{venuePackage.title}</div>
      </div>
      <div className="font-semibold mb-4">{venuePackage.name}</div>
      <button className="border  border-primary flex gap-2 items-center">
        <span className="text-primary font-semibold">See More</span>
        <div className="text-[10px] text-primary mt-[2px]">
          <FaAngleRight />
        </div>
      </button>
    </li>
  );
};

export default VenuePackage;
