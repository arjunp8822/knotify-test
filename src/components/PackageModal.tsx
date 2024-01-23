import { PackageData } from "./VenuePackages";
import { CiClock2, CiDollar, CiUser } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  showPackageModal: boolean;
  setShowPackageModal: (showModal: boolean) => void;
  packageData: PackageData | null;
}

const PackageModal = ({
  showPackageModal,
  setShowPackageModal,
  packageData,
}: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-full bg-white container transition-transform z-30 overflow-y-auto ${
        showPackageModal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-end">
        <div
          onClick={() => setShowPackageModal(false)}
          className="text-3xl cursor-pointer"
        >
          <IoIosCloseCircleOutline />
        </div>
      </div>

      {/* Package data */}
      {packageData && (
        <div>
          <h1 className="text-2xl sm:text-4xl font-semibold mb-8 text-center text-primary">
            {packageData?.name} Inclusions
          </h1>

          <h2 className="text-center mb-4 text-sm sm:text-base">
            {packageData?.description}
          </h2>
          {packageData?.disclaimer?.length > 0 && (
            <p className="text-center mb-12 text-[12px] sm:text-sm italic">
              *{packageData?.disclaimer}
            </p>
          )}
          <div className="flex flex-col lg:flex-row justify-center gap-2 mb-8 text-sm sm:text-base">
            <div className="flex gap-2 justify-center items-center w-full lg:w-72 border p-2 rounded-xl">
              <CiClock2 />
              <div>{packageData?.duration} hours</div>
            </div>
            <div className="flex gap-2 justify-center items-center w-full lg:w-72 border p-2 rounded-xl">
              <CiDollar />
              <div>From ${packageData?.priceStarting}pp</div>
            </div>
            <div className="flex gap-2 justify-center items-center w-full lg:w-72 border p-2 rounded-xl">
              <CiUser />
              <div>
                Between {packageData?.minGuests} and {packageData?.maxGuests}{" "}
                guests
              </div>
            </div>
          </div>
          {packageData?.venueInclusions.length > 0 && (
            <h3 className="font-semibold mb-6 text-center text-primary text-lg">
              Venue
            </h3>
          )}
          <ul className="mb-6 text-center text-sm sm:text-base">
            {packageData?.venueInclusions?.map((item) => (
              <li className="mb-2">{item}</li>
            ))}
          </ul>
          {packageData?.serviceInclusions.length > 0 && (
            <h3 className="font-semibold mb-6 text-center text-primary text-lg">
              Service
            </h3>
          )}
          <ul className="mb-6 text-center text-sm sm:text-base">
            {packageData?.serviceInclusions?.map((item) => (
              <li className="mb-2">{item}</li>
            ))}
          </ul>
          {packageData?.planningInclusions.length > 0 && (
            <h3 className="font-semibold mb-6 text-center text-primary text-lg">
              Planning
            </h3>
          )}
          <ul className="mb-6 text-center text-sm sm:text-base">
            {packageData?.planningInclusions?.map((item) => (
              <li className="mb-2">{item}</li>
            ))}
          </ul>
          {packageData?.diningInclusions.length > 0 && (
            <h3 className="font-semibold mb-6 text-center text-primary text-lg">
              Dining
            </h3>
          )}
          <ul className="mb-6 text-center text-sm sm:text-base">
            {packageData?.diningInclusions?.map((item) => (
              <li className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PackageModal;
