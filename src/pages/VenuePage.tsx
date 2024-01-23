import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Data } from "../data/VenueData";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import ImageModal from "../components/ImageModal";
import VenueForm from "../components/VenueForm";
import VenueFeatures from "../components/VenueFeatures";
import VenuePackages from "../components/VenuePackages";
import PackageModal from "../components/PackageModal";
import { PackageData } from "../components/VenuePackages";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
import { FAQs } from "../components/VendorFAQ";
import QuestionAnswer from "../components/QuestionAnswer";

interface VenueData {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests: number;
  short_description: string;
  img: string[];
  features: string[];
  packages: PackageData[];
  faqs: FAQs[];
}

const VenuePage = () => {
  const [data, setData] = useState<VenueData | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const venueData = Data.filter((x) => x.id === +id!);
    setData(venueData[0]);
  }, [id]);

  if (!data) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl sm:text-4xl mb-1 sm:mb-2">
          {data.name}
        </h1>
        <div className="flex gap-3 md:gap-6">
          <Link
            to={`mailto:${data.email}`}
            className="text-xl md:text-2xl border bg-primary text-white p-2 rounded-full cursor-pointer"
          >
            <MdOutlineMailOutline />
          </Link>
          <Link
            to={`tel:${data.phone}`}
            className="text-xl md:text-2xl border bg-primary text-white p-2 rounded-full cursor-pointer"
          >
            <MdOutlinePhoneEnabled />
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-500 text-md sm:text-lg mb-8">
          {data.location}
        </span>
        <div className="flex gap-2 justify-start items-center text-sm sm:text-base mb-4">
          <span>Starting from ${data.min_price} per person</span>
          <div className="bg-black h-[4px] w-[4px] rounded-full translate-y-[1px]"></div>
          <span className="flex justify-center items-center gap-1">
            <span className="text-yellow-500">
              <FaStar />
            </span>
            {data.rating.toFixed(1)} ({data.review_count.toLocaleString()})
          </span>
        </div>
      </div>
      <div className="flex relative mb-4">
        <img
          src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${data.img[0]}`}
          alt="Venue Image 1"
          className="w-full sm:w-2/3 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
        />
        <div>
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${data.img[1]}`}
            alt="Venue Image 1"
            className="w-full hidden sm:flex h-1/2 object-cover rounded-lg sm:rounded-none sm:rounded-tr-lg"
          />
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${data.img[2]}`}
            alt="Venue Image 1"
            className="w-full hidden sm:flex h-1/2 object-cover rounded-lg sm:rounded-none sm:rounded-br-lg"
          />
        </div>
        <button
          className="absolute bottom-2 right-2 bg-white border rounded"
          onClick={() => setShowImageModal(true)}
        >
          Show More
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
        <div className="w-full lg:w-2/3">
          {/* features */}
          <h3 className="font-semibold text-xl mb-4">Venue features</h3>
          <VenueFeatures features={data.features} />

          {/* description */}
          <h3 className="font-semibold text-xl mb-4 mt-8">About the venue</h3>
          {data.short_description.split("\n").map((x) => (
            <p className="text-sm sm:text-base mt-6">{x}</p>
          ))}

          {/* packages */}
          <h3 className="font-semibold text-xl mb-4 mt-8">Venue packages</h3>
          <VenuePackages
            packages={data.packages}
            setShowPackageModal={setShowPackageModal}
            setPackageData={setPackageData}
          />

          {/* FAQ */}
          <h3 className="font-semibold text-xl mb-4 mt-8">
            Frequenly asked questions
          </h3>
          <ul>
            {data.faqs.map((x) => (
              <QuestionAnswer question={x.question} answer={x.answer} />
            ))}
          </ul>
        </div>

        {/* form */}
        <div className="w-full lg:w-1/3">
          <VenueForm title={data.name} />
        </div>
      </div>

      {/* package modal */}
      <PackageModal
        showPackageModal={showPackageModal}
        setShowPackageModal={setShowPackageModal}
        packageData={packageData}
      />

      {/* image modal */}
      <ImageModal
        showModal={showImageModal}
        setShowModal={setShowImageModal}
        img={data.img}
      />
    </div>
  );
};

export default VenuePage;
