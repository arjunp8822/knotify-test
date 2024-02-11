import { TbMoodSad } from "react-icons/tb";

const NoResults = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[40vh] mb-12">
      <div className="text-[60px] sm:text-[100px]">
        <TbMoodSad />
      </div>
      <h5 className="font-semibold text-xl sm:text-3xl">No Result Found</h5>
      <p className="text-gray-500 text-sm sm:text-base text-center">
        We can't find any vendors matching your search, but we are adding more
        every day!
      </p>
    </div>
  );
};

export default NoResults;
