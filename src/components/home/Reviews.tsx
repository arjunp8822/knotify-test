import ReviewCard from "./ReviewCard";

const reviewData = [
  {
    name: "Ava and Liam",
    location: "Sydney, Australia",
    review:
      "I cannot express how grateful I am for Knotify! From planning to execution, this platform made our wedding journey seamless. The vendors were top-notch, and the payment process was a breeze. Knotify truly transformed our special day into a fairy tale. Highly recommend to all couples out there!",
    image: "",
  },
  {
    name: "Sophia and Sebastian",
    location: "Sydney, Australia",
    review:
      "Choosing Knotify was the best decision we made for our wedding. The convenience of planning, booking, and paying for everything in one place saved us so much time and stress. The vendors we found through the platform exceeded our expectations, and the entire process was smooth. Knotify turned our dream wedding into a reality!",
    image: "",
  },
  {
    name: "Isabella and Oliver",
    location: "Sydney, Australia",
    review:
      "Knotify is a game-changer for anyone planning a wedding. The variety of vendors available, coupled with the ease of navigating the platform, made the entire experience enjoyable. We appreciated the transparency in pricing and the ability to manage all aspects of our wedding in one location. Knotify truly simplified the wedding planning process for us!",
    image: "",
  },
];

const Reviews = () => {
  return (
    <div>
      <h2 className="mb-8 sm:mb-16 font-semibold text-lg lg:text-2xl">
        Couples love us
      </h2>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
