import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  rating: number;
  reviews: number;
  link: string;
}

const FeaturedCard = ({ img, name, rating, reviews, link }: Props) => {
  return (
    <div className="w-full h-fit">
      <Link to={`/venues/${link}`}>
        <img
          src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${img}`}
          alt={name}
          className="rounded mb-2 w-full object-cover h-[300px]"
        />
      </Link>
      <div className="min-w-[300px]">
        <div className="flex justify-between">
          <span className="text-sm sm:text-base font-semibold">{name}</span>
          <div className="flex gap-1 justify-center items-center">
            <FaStar className="text-yellow-500" />
            <span className="text-sm">{rating.toFixed(1)}</span>
            <span className="text-sm">({reviews.toLocaleString()})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
