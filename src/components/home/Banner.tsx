import bow from "/public/assets/bow-banner.png";
import bow2 from "/public/assets/bow-banner-2.png";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-76px)] max-h-[800px] flex flex-col lg:flex-row relative">
      <img
        src={bow}
        alt="Knotify"
        className="absolute w-16 lg:w-24 top-1/2 left-1/2 -translate-x-[31%] -translate-y-1/2 hidden lg:flex"
      />
      <img
        src={bow2}
        alt="Knotify"
        className="absolute w-16 lg:w-24 top-1/2 left-1/2 -translate-x-[31%] -translate-y-[46%] flex lg:hidden"
      />
      <div className="bg-white w-full h-full">
        <div className="flex flex-col justify-center h-full pr-20 pl-8 gap-4">
          <h5 className="font-semibold text-2xl sm:text-4xl">Couples</h5>
          <p className="text-sm sm:text-base text-gray-500">
            Welcome to Knotify, your go-to destination for Australia's top
            wedding vendors! Say goodbye to endless research and upfront costs.
            With us, planning your dream wedding is a breeze.
          </p>
          <button className="bg-primary text-white font-semibold mt-4 sm:mt-6">
            Find Vendors
          </button>
        </div>
      </div>
      <div className="bg-primary w-full h-full text-white ">
        <div className="flex flex-col justify-center items-end h-full pl-20 pr-8 gap-4">
          <h5 className="font-semibold text-2xl sm:text-4xl">Vendors</h5>
          <p className="text-end text-sm sm:text-base text-gray-200">
            With 50,000 monthly visitors, your business is set to soar to new
            heights. Seamlessly manage bookings, foster relationships with
            couples, handle paperwork effortlessly, all with upfront payments on
            one platform.
          </p>
          <button className="bg-white text-primary font-semibold mt-4 sm:mt-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
