import blog1 from "/assets/blogs/blog0101.jpg";
import blog2 from "/assets/blogs/blog0201.jpg";
import blog3 from "/assets/blogs/blog0301.jpg";

const Blog = () => {
  return (
    <div className="mt-20">
      <h3 className="text-gray-500 sm:text-lg">Get inspired and informed</h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">Blog</h2>
      <div className="flex gap-4 sm:gap-8 relative overflow-x-auto">
        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <img
            src={blog1}
            alt="Wedding Blog"
            className="w-full object-cover h-[300px]"
          />
          <h2 className="sm:text-lg font-semibold pt-2">Title</h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Prepare for your wedding week with ease by finalizing details early,
            delegating tasks to loved ones, and prioritizing self-care amidst
            the excitement. Embrace the imperfections as part of your unique
            journey, and focus on the love that brings you and your partner
            together.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            Read More
          </button>
        </div>

        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <img
            src={blog2}
            alt="Wedding Blog"
            className="w-full object-cover h-[300px]"
          />
          <h2 className="sm:text-lg font-semibold pt-2">Title</h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Prepare for your wedding week with ease by finalizing details early,
            delegating tasks to loved ones, and prioritizing self-care amidst
            the excitement. Embrace the imperfections as part of your unique
            journey, and focus on the love that brings you and your partner
            together.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            Read More
          </button>
        </div>
        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <img
            src={blog3}
            alt="Wedding Blog"
            className="w-full object-cover h-[300px]"
          />
          <h2 className="sm:text-lg font-semibold pt-2">Title</h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Prepare for your wedding week with ease by finalizing details early,
            delegating tasks to loved ones, and prioritizing self-care amidst
            the excitement. Embrace the imperfections as part of your unique
            journey, and focus on the love that brings you and your partner
            together.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
