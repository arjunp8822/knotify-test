import { Link } from "react-router-dom";
import cake from "/assets/home/cake.jpg";
import dj from "/assets/home/dj.jpg";
import florist from "/assets/home/florist.jpg";
import photo from "/assets/home/photo.jpg";
import venue from "/assets/home/venue.jpg";

const vendorTypes = [
  {
    title: "Florists",
    img: florist,
    description: "Elevate your celebration",
    cta: "Coming Soon",
    link: "/",
    highlight: false,
  },
  {
    title: "Venues",
    img: venue,
    description: "Find the perfect backdrop",
    cta: "Discover Now",
    link: "/vendors",
    highlight: true,
  },
  {
    title: "Photographers",
    img: photo,
    description: "Capture every cherished moment",
    cta: "Coming Soon",
    link: "/",
    highlight: false,
  },
  {
    title: "Entertainment",
    img: dj,
    description: "Set the perfect soundtrack",
    cta: "Coming Soon",
    link: "/",
    highlight: false,
  },
  {
    title: "Cakes",
    img: cake,
    description: "Savor the sweetest moments",
    cta: "Coming Soon",
    link: "/",
    highlight: false,
  },
];

const Banner = () => {
  return (
    <div className="mb-16 sm:mb-24 mt-16 sm:mt-24 flex flex-col justify-center gap-4 sm:gap-8 md:gap-12">
      <div className="flex flex-col gap-8 sm:gap-16 h-[40vh] justify-center">
        <h1 className="text-3xl lg:text-6xl font-semibold">
          Plan, book and pay for your entire wedding in one place
        </h1>
        <h2 className="text-lg lg:text-2xl text-gray-700">
          Planning your dream wedding without the hassle
        </h2>
        <form>
          <h3 className="text-sm sm:text-base font-semibold pl-1">
            Subscibe to our newsletter
          </h3>
          <div className="flex flex-col sm:flex-row sm:w-1/2 gap-4 items-start sm:items-center mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-4 py-1.5"
            />
            <button className="bg-primary border border-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary transition-all w-fit sm:w-[120px] h-full cursor-pointer text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="mt-24">
        <h2 className="mb-8 sm:mb-16 font-semibold text-lg lg:text-2xl">
          Vendors for any budget, background and style
        </h2>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 relative">
          {vendorTypes.map((v) => (
            <li
              className={`relative flex flex-col gap-4 p-4 rounded text-white justify-center items-center ${
                v.highlight
                  ? "col-span-2 lg:col-span-1 lg:row-span-2 order-first lg:order-none min-h-[300px]"
                  : "min-h-[250px] sm:min-h-[300px]"
              }`}
            >
              <img
                src={v.img}
                alt={v.title}
                className="object-cover w-full h-full absolute top-0 left-0 brightness-[45%] rounded"
              />
              <h3 className="z-10 font-semibold text-lg sm:text-xl">
                {v.title}
              </h3>
              <p className="z-10 font-light text-sm sm:text-base text-center">
                {v.description}
              </p>
              <button className="z-10 border mt-10 cursor-pointer hover:bg-white hover:text-black transition-all font-semibold text-sm sm:text-base">
                <Link to={v.link}>{v.cta}</Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
