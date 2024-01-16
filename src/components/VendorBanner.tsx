import VendorForm from "./VendorForm";
import VendorCompanies from "./VendorCompanies";

const VendorBanner = () => {
  return (
    <div className="mb-16 sm:mb-24">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 h-[60vh] justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-3xl lg:text-6xl font-semibold">
            Advertise on{" "}
            <span className="font-marley text-6xl lg:text-8xl text-primary font-normal">
              Knotify
            </span>
          </h1>
          <h3 className="text-lg lg:text-2xl">
            Capture the hearts of modern couples and boost your wedding bookings
            today!
          </h3>
        </div>
        <div className="w-full lg:w-1/2">
          <VendorForm />
        </div>
      </div>
      <VendorCompanies />
    </div>
  );
};

export default VendorBanner;
