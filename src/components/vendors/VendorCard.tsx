import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  vendorType: string;
  link: string;
  location: string;
  rating: number;
  review_count: number;
  min_price: number;
  max_guests?: number;
  img: string[];
}

const VenueCard = ({
  name,
  vendorType,
  link,
  location,
  rating,
  review_count,
  min_price,
  max_guests,
  img,
}: Props) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const toggleImgDown = () => {
    if (currentImg !== 0) {
      setCurrentImg(currentImg - 1);
    }
  };

  const toggleImgUp = () => {
    const l = img.length - 1;
    if (currentImg !== l) {
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <li>
      <div className="relative bg-red-50">
        <Link to={`/vendors/${link}`}>
          <img
            src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${img[currentImg]}`}
            alt={name}
            className="rounded mb-2 w-full h-[250px] object-cover"
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
          />
        </Link>
        <div>
          {currentImg > 0 && (
            <div
              className={`absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full flex justify-center items-center text-[8px] cursor-pointer transition-opacity ${
                showArrow ? "opacity-100" : "opacity-100 sm:opacity-0"
              }`}
              onClick={toggleImgDown}
              onMouseEnter={() => setShowArrow(true)}
              onMouseLeave={() => setShowArrow(false)}
            >
              <FaChevronLeft />
            </div>
          )}
          {currentImg < img.length - 1 && (
            <div
              className={`absolute top-1/2 right-2 -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full flex justify-center items-center text-[8px] cursor-pointer transition-opacity ${
                showArrow ? "opacity-100" : "opacity-100 sm:opacity-0"
              }`}
              onClick={toggleImgUp}
              onMouseEnter={() => setShowArrow(true)}
              onMouseLeave={() => setShowArrow(false)}
            >
              <FaChevronRight className="translate-x-[1px]" />
            </div>
          )}
        </div>
      </div>
      <Link to={`/venues/${link}`}>
        <div className="flex justify-between">
          <span className="text-sm sm:text-[15px] font-semibold">{name}</span>
          <div className="flex gap-1 justify-center items-center">
            <FaStar className="text-yellow-500" />
            <span className="text-sm sm:text-[15px]">{rating.toFixed(1)}</span>
            <span className="text-sm sm:text-[15px]">
              ({review_count.toLocaleString()})
            </span>
          </div>
        </div>
        <p className="mb-3 text-sm sm:text-[15px] text-gray-500">{location}</p>
        <div className="flex justify-between">
          <span className="text-sm sm:text-[15px] font-semibold">
            {vendorType === "Venues" || vendorType === "Catering"
              ? "Starting from $" + min_price.toLocaleString() + "pp"
              : "Packages from $" + min_price.toLocaleString()}
          </span>
          {vendorType === "Venues" && (
            <div className="flex gap-1 justify-center items-center">
              <IoMdPeople />
              <span className="text-sm sm:text-[15px]">{max_guests}</span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default VenueCard;
