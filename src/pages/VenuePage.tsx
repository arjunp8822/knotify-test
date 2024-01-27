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
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import WorkWithCard from "../components/WorkWithCard";

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
  workWith: number[];
  facebook: string;
  instagram: string;
}

const VenuePage = () => {
  const [data, setData] = useState<VenueData | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [workWithData, setWorkWithData] = useState<VenueData[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const venueData = Data.filter((x) => x.id === +id!);
    setWorkWithData(Data.filter((x) => data?.workWith.includes(x.id)));
    setData(venueData[0]);
  }, [id, data]);

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
      </div>

      <div className="flex flex-col">
        <span className="text-gray-500 text-md sm:text-lg mb-8">
          {data.location}
        </span>
        <div className="flex gap-2 justify-start items-center text-sm sm:text-base mb-4">
          <span>${data.min_price} per person</span>
          <div className="bg-black h-[4px] w-[4px] rounded-full translate-y-[1px]"></div>
          <span>{data.max_guests} guests</span>
          <div className="bg-black h-[4px] w-[4px] rounded-full translate-y-[1px]"></div>
          <span className="flex justify-center items-center gap-1">
            <span className="text-yellow-500">
              <FaStar />
            </span>
            {data.rating.toFixed(1)} ({data.review_count.toLocaleString()})
          </span>
        </div>
      </div>
      <div className="flex relative mb-4" id="photos">
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
          className="absolute bottom-2 right-2 bg-white border rounded text-sm sm:text-base"
          onClick={() => setShowImageModal(true)}
        >
          Show More
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
        <div className="w-full lg:w-2/3">
          {/* nav */}
          <ul className="flex gap-4 sm:gap-8 sm:justify-center items-center overflow-x-scroll no-scrollbar mb-4 pb-4 sm:mb-8 sm:pb-8 border-b">
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#photos">Photos</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#features">Features</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#packages">Packages</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#faq">FAQ</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#contact">Contact</a>
            </li>
            <li className="cursor-pointer font-semibold hover:text-primary hover:underline">
              <a href="#related">Related</a>
            </li>
          </ul>
          {/* features */}
          <div className="mb-4 sm:mb-8 border-b pb-4 sm:pb-8" id="features">
            <h3 className="font-semibold text-xl mb-4">Venue features</h3>
            <VenueFeatures features={data.features} />
          </div>
          {/* description */}
          <div className="mb-4 pb-4 sm:mb-8 sm:pb-8 border-b" id="about">
            <h3 className="font-semibold text-xl mb-4">About the venue</h3>
            {data.short_description.split("\n").map((x) => (
              <p className="text-sm sm:text-base mt-6 text-gray-700">{x}</p>
            ))}
          </div>
          {/* packages */}
          <div className="mb-4 pb-4 sm:mb-8 sm:pb-8 border-b" id="packages">
            <h3 className="font-semibold text-xl mb-4">Venue packages</h3>
            <VenuePackages
              packages={data.packages}
              setShowPackageModal={setShowPackageModal}
              setPackageData={setPackageData}
            />
          </div>
          {/* FAQ */}
          <div className="mb-4 pb-4 sm:mb-4 sm:pb-4" id="faq">
            <h3 className="font-semibold text-xl mb-4">
              Frequenly asked questions
            </h3>
            <ul>
              {data.faqs.map((x) => (
                <QuestionAnswer question={x.question} answer={x.answer} />
              ))}
            </ul>
          </div>
          {/* Related */}
          <div className="sm:mb-4 sm:pb-4" id="related">
            <h3 className="font-semibold text-xl mb-4">
              Vendors we often work with
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {workWithData?.map((x) => (
                <WorkWithCard
                  img={x.img[0]}
                  name={x.name}
                  rating={x.rating}
                  reviews={x.review_count}
                  link={x.id.toString()}
                />
              ))}
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="w-full lg:w-1/3" id="contact">
          <h3 className="font-semibold text-xl mb-4 sm:mb-8">
            Contact {data.name}
          </h3>
          <div className="flex flex-col gap-4 sm:gap-8">
            <div>
              <h5 className="font-semibold sm:text-lg mb-4 mt-4">
                Get in touch with us directly
              </h5>
              <div className="flex flex-col gap-4">
                <Link
                  to={`mailto:${data.email}`}
                  className="flex items-center gap-2"
                >
                  <Link
                    className="text-lg bg-primary p-2 rounded-full text-white"
                    to={`mailto:${data.email}`}
                  >
                    <MdOutlineMailOutline />
                  </Link>
                  <Link
                    className="underline hover:text-primary"
                    to={`mailto:${data.email}`}
                  >
                    {data.email}
                  </Link>
                </Link>
                <Link
                  to={`tel:${data.phone}`}
                  className="flex items-center gap-2"
                >
                  <Link
                    className="text-lg bg-primary p-2 rounded-full text-white"
                    to={`tel:${data.phone}`}
                  >
                    <MdOutlinePhoneEnabled />
                  </Link>
                  <Link
                    className="underline hover:text-primary"
                    to={`tel:${data.phone}`}
                  >
                    {data.phone}
                  </Link>
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold sm:text-lg mb-4 mt-4">
                Visit our social media
              </h5>
              <div className="flex gap-3 items-center">
                <Link
                  className="bg-primary text-white p-2 rounded-full cursor-pointer"
                  to={data.facebook}
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="bg-primary text-white p-2 rounded-full cursor-pointer"
                  to={data.instagram}
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold sm:text-lg mb-4 mt-4">
                Send us an enquiry
              </h5>
              <VenueForm />
            </div>
          </div>
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
