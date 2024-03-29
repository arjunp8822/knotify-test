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
  vendorType: string;
}

const PackageModal = ({
  showPackageModal,
  setShowPackageModal,
  packageData,
  vendorType,
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
            className="border -full p-2 border-black cursor-pointer"
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
              {vendorType === "Venues" && (
                <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                  <div className="bg-primary p-2 -full text-white">
                    <LuClock5 />
                  </div>
                  <div>{packageData?.duration} hours</div>
                </div>
              )}

              <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                <div className="bg-primary p-2 -full text-white">
                  <BiDollar />
                </div>
                <div>
                  {vendorType === "Venues" || vendorType === "Catering"
                    ? "$" + packageData?.priceStarting + "pp"
                    : "$" + packageData?.priceStarting}
                </div>
              </div>
              {vendorType === "Venues" && (
                <div className="flex gap-2 justify-center items-center sm:w-[140px]">
                  <div className="bg-primary p-2 -full text-white">
                    <FaUsers />
                  </div>
                  <div>
                    {packageData?.minGuests} to {packageData?.maxGuests}
                  </div>
                </div>
              )}
            </div>
            {/* Venue specific inclusions */}
            {packageData?.venueInclusions &&
              packageData?.venueInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Venue
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.venueInclusions &&
                packageData?.venueInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.serviceInclusions &&
              packageData?.serviceInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Service
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.serviceInclusions &&
                packageData?.serviceInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.planningInclusions &&
              packageData?.planningInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Planning
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.planningInclusions &&
                packageData?.planningInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.diningInclusions &&
              packageData?.diningInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Dining
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.diningInclusions &&
                packageData?.diningInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {/* Florist specific inclusions */}
            {packageData?.setupInclusions &&
              packageData?.setupInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Setup
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.setupInclusions &&
                packageData?.setupInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.ceremonyInclusions &&
              packageData?.ceremonyInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Ceremony
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.ceremonyInclusions &&
                packageData?.ceremonyInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.receptionInclusions &&
              packageData?.receptionInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Reception
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.receptionInclusions &&
                packageData?.receptionInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.deliveryInclusions &&
              packageData?.deliveryInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Delivery
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.deliveryInclusions?.map((item) => (
                <li className="mb-2">{item}</li>
              ))}
            </ul>
            {/* Photographer specific inclusions */}
            {packageData?.preWeddingInclusions &&
              packageData?.preWeddingInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preWeddingInclusions &&
                packageData?.preWeddingInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.weddingDayInclusions &&
              packageData?.weddingDayInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Wedding Day Coverage
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.weddingDayInclusions &&
                packageData?.weddingDayInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postWeddingInclusions &&
              packageData?.postWeddingInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postWeddingInclusions &&
                packageData?.postWeddingInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {/* Cake specific inclusions */}
            {packageData?.preOrderCakeInclusions &&
              packageData?.preOrderCakeInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preOrderCakeInclusions &&
                packageData?.preOrderCakeInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.weddingDayCakeInclusions &&
              packageData?.weddingDayCakeInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Wedding Day Coverage
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.weddingDayCakeInclusions &&
                packageData?.weddingDayCakeInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postWeddingCakeInclusions &&
              packageData?.postWeddingCakeInclusions?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postWeddingCakeInclusions &&
                packageData?.postWeddingCakeInclusions?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {/* Catering specific inclusions */}
            {packageData?.preEventCateringServices &&
              packageData?.preEventCateringServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preEventCateringServices &&
                packageData?.preEventCateringServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.eventDayCateringServices &&
              packageData?.eventDayCateringServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Wedding Day Coverage
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.eventDayCateringServices &&
                packageData?.eventDayCateringServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postEventCateringServices &&
              packageData?.postEventCateringServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Wedding Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postEventCateringServices &&
                packageData?.postEventCateringServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {/* Transportation specific inclusions */}
            {packageData?.preHireServices &&
              packageData?.preHireServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Hire Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preHireServices &&
                packageData?.preHireServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.duringHireServices &&
              packageData?.duringHireServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  During-Hire Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.duringHireServices &&
                packageData?.duringHireServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postHireServices &&
              packageData?.postHireServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Hire Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postHireServices &&
                packageData?.postHireServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>

            {/* Entertainment specific inclusions */}
            {packageData?.preEventEntertainmentServices &&
              packageData?.preEventEntertainmentServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preEventEntertainmentServices &&
                packageData?.preEventEntertainmentServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.duringEventEntertainmentServices &&
              packageData?.duringEventEntertainmentServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  During-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.duringEventEntertainmentServices &&
                packageData?.duringEventEntertainmentServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postEventEntertainmentServices &&
              packageData?.postEventEntertainmentServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postEventEntertainmentServices &&
                packageData?.postEventEntertainmentServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>

            {/* MC specific inclusions */}
            {packageData?.preEventMCServices &&
              packageData?.preEventMCServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Pre-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.preEventMCServices &&
                packageData?.preEventMCServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.duringEventMCServices &&
              packageData?.duringEventMCServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  During-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.duringEventMCServices &&
                packageData?.duringEventMCServices?.map((item) => (
                  <li className="mb-2">{item}</li>
                ))}
            </ul>
            {packageData?.postEventMCServices &&
              packageData?.postEventMCServices?.length > 0 && (
                <h3 className="font-semibold mb-6 text-center text-lg">
                  Post-Event Services
                </h3>
              )}
            <ul className="mb-6 text-center text-sm sm:text-base text-gray-500 font-light">
              {packageData?.postEventMCServices &&
                packageData?.postEventMCServices?.map((item) => (
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
