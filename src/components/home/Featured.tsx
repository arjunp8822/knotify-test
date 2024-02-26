import { Link } from "react-router-dom";
import { Data } from "../../data/VenueData";

const Featured = () => {
  const featuredVendors = Data.filter((x) => x.featured === true);
  console.log(featuredVendors);

  return (
    <div className="mt-10 border-t pt-10">
      <h3 className="text-gray-500 sm:text-lg">
        Explore top rated services and products
      </h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">
        Featured Vendors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 md:row-span-2 md:col-span-2 h-[260px] md:h-full relative">
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${featuredVendors[1].img[0]}`}
            alt="Wedding Vendor"
            className="w-full h-full object-cover brightness-[60%]"
          />
          <Link
            to={`/vendors/${featuredVendors[1].id}`}
            className="bg-primary cursor-pointer text-white border border-primary shadow-lg  p-2 text-sm sm:text-base uppercase absolute top-2 right-2"
          >
            Explore
          </Link>
          <Link
            to={`/vendors/${featuredVendors[1].id}`}
            className="absolute bottom-6 left-6 text-lg sm:text-xl text-white italic"
          >
            {featuredVendors[1].name}
          </Link>
        </div>
        <div className="bg-red-50 h-[260px] md:h-[26vw] max-h-[350px] relative">
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${featuredVendors[0].img[0]}`}
            alt="Wedding Vendor"
            className="w-full h-full object-cover brightness-[60%]"
          />
          <Link
            to={`/vendors/${featuredVendors[0].id}`}
            className="bg-primary cursor-pointer text-white border border-primary shadow-lg  p-2 text-sm sm:text-base uppercase absolute top-2 right-2"
          >
            Explore
          </Link>
          <Link
            to={`/vendors/${featuredVendors[0].id}`}
            className="absolute bottom-6 left-6 text-lg sm:text-xl text-white italic"
          >
            {featuredVendors[0].name}
          </Link>
        </div>
        <div className="bg-red-50 h-[260px] md:h-[26vw] max-h-[350px] relative">
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${featuredVendors[2].img[0]}`}
            alt="Wedding Vendor"
            className="w-full h-full object-cover brightness-[60%]"
          />
          <Link
            to={`/vendors/${featuredVendors[2].id}`}
            className="bg-primary cursor-pointer text-white border border-primary shadow-lg  p-2 text-sm sm:text-base uppercase absolute top-2 right-2"
          >
            Explore
          </Link>
          <Link
            to={`/vendors/${featuredVendors[2].id}`}
            className="absolute bottom-6 left-6 text-lg sm:text-xl text-white italic"
          >
            {featuredVendors[2].name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
