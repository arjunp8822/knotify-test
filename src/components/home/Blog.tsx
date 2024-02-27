import { Link } from "react-router-dom";
import blog1 from "/assets/blogs/blog0101.jpg";
import blog2 from "/assets/blogs/blog0201.jpg";
import blog3 from "/assets/blogs/blog0301.jpg";

const Blog = () => {
  return (
    <div className="mt-10 border-t pt-10">
      <h3 className="text-gray-500 sm:text-lg">Get inspired and informed</h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">Blog</h2>
      <div className="flex gap-4 sm:gap-8 relative overflow-x-auto">
        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <Link to="/navigating-the-wedding-planning-maze">
            <img
              src={blog1}
              alt="Wedding Blog"
              className="w-full object-cover h-[300px]"
            />
          </Link>
          <h2 className="sm:text-lg font-semibold pt-2 h-[70px] flex items-center">
            Navigating the Wedding Planning Maze
          </h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Embarking on the journey of planning your wedding can be both
            thrilling and daunting, especially for those who are new to the
            process. With countless decisions to make and endless details to
            consider, navigating the wedding planning maze can feel
            overwhelming.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            <Link to="/navigating-the-wedding-planning-maze">Read More</Link>
          </button>
        </div>

        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <Link to="/ten-on-the-day-wedding-tips">
            <img
              src={blog2}
              alt="Wedding Blog"
              className="w-full object-cover h-[300px]"
            />
          </Link>
          <h2 className="sm:text-lg font-semibold pt-2 h-[70px] flex items-center">
            10 On-the-Day Wedding Tips for Couples
          </h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Your wedding day is one of the most significant moments in your
            life, filled with love, joy, and the promise of a lifetime together.
            However, amidst the excitement, it's easy for couples to feel
            overwhelmed by the myriad of details and responsibilities.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            <Link to="/ten-on-the-day-wedding-tips">Read More</Link>
          </button>
        </div>
        <div className="h-[550px] w-[90%] sm:w-full relative flex-shrink-0 sm:flex-shrink flex flex-col justify-between min-w-[300px]">
          <Link to="/tips-for-a-stress-free-celebration">
            <img
              src={blog3}
              alt="Wedding Blog"
              className="w-full object-cover h-[300px]"
            />
          </Link>
          <h2 className="sm:text-lg font-semibold pt-2 h-[70px] flex items-center">
            5 Tips for a Stress-Free Celebration
          </h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] mb-4 overflow-hidden text-ellipsis font-light">
            Celebrations mark significant moments in our lives, offering
            opportunities to create lasting memories with loved ones. However,
            the pressure of planning and executing a flawless event can often
            lead to unnecessary stress.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            <Link to="/tips-for-a-stress-free-celebration">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
