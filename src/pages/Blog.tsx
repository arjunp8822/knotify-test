import { Link } from "react-router-dom";
import blog1 from "/assets/blogs/blog0101.jpg";
import blog2 from "/assets/blogs/blog0201.jpg";
import blog3 from "/assets/blogs/blog0301.jpg";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="h-[500px] sm:h-[600px] flex flex-col gap-4">
        <img
          src={blog1}
          alt="Wedding Blog"
          className="w-full object-cover h-[300px]"
        />
        <h2 className="sm:text-lg font-semibold pt-2 h-[60px] flex items-center">
          Navigating the Wedding Planning Maze
        </h2>
        <p className="text-sm sm:text-base text-gray-500 h-[150px] font-light overflow-hidden text-ellipsis">
          Embarking on the journey of planning your wedding can be both
          thrilling and daunting, especially for those who are new to the
          process. With countless decisions to make and endless details to
          consider, navigating the wedding planning maze can feel overwhelming.
        </p>
        <button className="bg-primary text-white text-sm sm:text-base uppercase">
          <Link to="/navigating-the-wedding-planning-maze">Read More</Link>
        </button>
      </div>
      <div className="h-[500px] sm:h-[600px] flex flex-col gap-4">
        <div className="h-[500px] sm:h-[600px] flex flex-col gap-4">
          <img
            src={blog2}
            alt="Wedding Blog"
            className="w-full object-cover h-[300px]"
          />
          <h2 className="sm:text-lg font-semibold pt-2 h-[60px] flex items-center">
            10 On-the-Day Wedding Tips for Couples
          </h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] font-light overflow-hidden text-ellipsis">
            Your wedding day is one of the most significant moments in your
            life, filled with love, joy, and the promise of a lifetime together.
            However, amidst the excitement, it's easy for couples to feel
            overwhelmed by the myriad of details and responsibilities.
          </p>
          <button className="bg-primary text-white text-sm sm:text-base uppercase">
            <Link to="/ten-on-the-day-wedding-tips">Read More</Link>
          </button>
        </div>
      </div>
      <div className="h-[500px] sm:h-[600px] flex flex-col gap-4">
        <div className="h-[500px] sm:h-[600px] flex flex-col gap-4">
          <img
            src={blog3}
            alt="Wedding Blog"
            className="w-full object-cover h-[300px]"
          />
          <h2 className="sm:text-lg font-semibold pt-2 h-[60px] flex items-center">
            5 Tips for a Stress-Free Celebration
          </h2>
          <p className="text-sm sm:text-base text-gray-500 h-[150px] font-light overflow-hidden text-ellipsis">
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
