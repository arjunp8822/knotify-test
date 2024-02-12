import VenuePackage from "./VenuePackage";

export interface PackageData {
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
}

interface Props {
  packages: PackageData[];
  setShowPackageModal: (showPackageModal: boolean) => void;
  setPackageData: (data: PackageData) => void;
}

const VenuePackages = ({
  packages,
  setShowPackageModal,
  setPackageData,
}: Props) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {packages.map((p) => (
        <VenuePackage
          venuePackage={p}
          setShowPackageModal={setShowPackageModal}
          setPackageData={setPackageData}
        />
      ))}
      {packages.length === 0 && (
        <li className="text-sm sm:text-base">No packages listed</li>
      )}
    </ul>
  );
};

export default VenuePackages;
