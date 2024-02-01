import { useState } from "react";

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

const ReviewCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleClick = () => {
    if (currentIdx === 2) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <div>
      <ul className="bg-red-50 min-h-[300px] flex justify-center items-center relative overflow-hidden">
        <li
          className={`bg-red-500 w-full min-h-[300px] absolute transition-all flex flex-col justify-center items-center gap-4 p-8 ${
            currentIdx === 0 ? "translate-x-[0]" : "translate-x-[100%]"
          }`}
        >
          <img
            src={reviewData[0].image}
            alt={reviewData[0].name}
            className="h-24 w-24 bg-blue-500 rounded-full"
          />
          <p>{reviewData[0].review}</p>
          <h3>{reviewData[0].name}</h3>
          <h5>{reviewData[0].location}</h5>
        </li>
        <li
          className={`bg-yellow-300 w-full min-h-[200px] absolute transition-all ${
            currentIdx === 1 ? "translate-x-[0]" : "translate-x-[100%]"
          }`}
        ></li>
        <li
          className={`bg-green-500 w-full min-h-[200px] absolute transition-all ${
            currentIdx === 2 ? "translate-x-[0]" : "translate-x-[100%]"
          }`}
        ></li>
      </ul>
      <div className="flex justify-center items-center mt-4 gap-2">
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            currentIdx === 0 ? "bg-primary" : "bg-gray-100"
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            currentIdx === 1 ? "bg-primary" : "bg-gray-100"
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            currentIdx === 2 ? "bg-primary" : "bg-gray-100"
          }`}
        ></div>
      </div>
      <button className="bg-red-500 text-white mt-8" onClick={handleClick}>
        Next
      </button>
    </div>
  );
};

export default ReviewCard;
