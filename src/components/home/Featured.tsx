import { useEffect, useState } from "react";
import { VenueData } from "../../pages/Vendors";
import { Data } from "../../data/VenueData";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [data, setData] = useState<VenueData[]>([]);

  useEffect(() => {
    setData(Data.filter((x) => x.featured === true));
  }, []);

  return (
    <div className="mb-16 sm:mb-24">
      <h2 className="mb-8 sm:mb-16 font-semibold text-lg lg:text-2xl">
        Featured Vendors
      </h2>
      <div className="flex gap-8 overflow-x-auto custom-scrollbar pb-4 sm:pb-8">
        {data?.map((x) => (
          <FeaturedCard
            key={x.id}
            img={x.img[0]}
            name={x.name}
            rating={x.rating}
            reviews={x.review_count}
            link={x.id.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
