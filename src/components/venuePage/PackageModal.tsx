import { PackageData } from "./VenuePackages";
import { FaAngleDown } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import bow from "/assets/bow.png";

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
      className={`fixed top-0 left-0 right-0 h-full bg-white transition-transform z-30 overflow-y-auto ${
        showPackageModal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-4 sm:px-8 sm:py-8 md:px-12 md:py-12">
        <div className="flex justify-end">
          <div
            onClick={() => setShowPackageModal(false)}
            className="border rounded-full p-2 border-black cursor-pointer"
          >
            <FaAngleDown className="translate-y-[1px]" />
          </div>
        </div>

        {/* Package data */}
        {packageData && (
          <div>
            <h1 className="text-2xl sm:text-4xl font-semibold mb-8 text-center mt-12">
              {packageData?.name} Inclusions
            </h1>

            <h2 className="text-center mb-4 text-sm sm:text-base">
              {packageData?.description}
            </h2>
            {packageData?.disclaimer?.length > 0 && (
              <p className="text-center mb-12 text-[12px] sm:text-sm italic text-gray-500">
                *{packageData?.disclaimer}
              </p>
            )}
            <div className="mb-12 flex justify-center items-center">
              <img src={bow} alt="Ribbon" className="w-[150px] sm:w-[200px]" />
            </div>
            <div className="flex justify-center gap-6 sm:gap-2 mb-16 text-sm sm:text-base flex-wrap">
              <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                <div className="bg-primary p-2 rounded-full text-white">
                  <LuClock5 />
                </div>
                <div>{packageData?.duration} hours</div>
              </div>
              <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                <div className="bg-primary p-2 rounded-full text-white">
                  <BiDollar />
                </div>
                <div>${packageData?.priceStarting}pp</div>
              </div>
              <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                <div className="bg-primary p-2 rounded-full text-white">
                  <FaUsers />
                </div>
                <div>
                  {packageData?.minGuests} to {packageData?.maxGuests}
                </div>
              </div>
            </div>
            {packageData?.venueInclusions.length > 0 && (
              <h3 className="font-semibold mb-6 text-center text-lg">Venue</h3>
            )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.venueInclusions?.map((item) => (
                <li className="mb-2">{item}</li>
              ))}
            </ul>
            {packageData?.serviceInclusions.length > 0 && (
              <h3 className="font-semibold mb-6 text-center text-lg">
                Service
              </h3>
            )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.serviceInclusions?.map((item) => (
                <li className="mb-2">{item}</li>
              ))}
            </ul>
            {packageData?.planningInclusions.length > 0 && (
              <h3 className="font-semibold mb-6 text-center text-lg">
                Planning
              </h3>
            )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.planningInclusions?.map((item) => (
                <li className="mb-2">{item}</li>
              ))}
            </ul>
            {packageData?.diningInclusions.length > 0 && (
              <h3 className="font-semibold mb-6 text-center text-lg">Dining</h3>
            )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.diningInclusions?.map((item) => (
                <li className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageModal;
