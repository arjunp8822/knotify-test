import blog1 from "/assets/blogs/blog0101.jpg";
import blog2 from "/assets/blogs/blog0102.jpg";
import blog3 from "/assets/blogs/blog0103.jpg";

const Blog1 = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="text-sm sm:text-base text-gray-500 italic">
        26 February 2024
      </div>
      <h2 className="font-semibold text-lg sm:text-xl">
        Navigating the Wedding Planning Maze – A Beginner’s Guide
      </h2>
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Embarking on the journey of planning your wedding can be both thrilling
        and daunting, especially for those who are new to the process. With
        countless decisions to make and endless details to consider, navigating
        the wedding planning maze can feel overwhelming. However, with the right
        guidance and approach, you can streamline the process and ensure a
        smooth and enjoyable planning experience. Here is a beginner's guide to
        navigating the wedding planning maze.
      </p>
      <img src={blog1} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Establish Priorities</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Before diving into the details, take the time to sit down with your
          partner and establish your priorities for the wedding. Discuss what
          aspects of the day are most important to you, whether it's the venue,
          the food, the music, or something else entirely. By identifying your
          priorities early on, you can focus your time, energy, and budget on
          the elements that matter most to you.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Set a Budget</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          One of the first and most critical steps in wedding planning is
          setting a realistic budget. Determine how much you're willing and able
          to spend on your wedding, taking into account any contributions from
          family members or other sources. Be sure to allocate funds for each
          aspect of the wedding, including venue rental, catering, attire,
          decorations, and any additional expenses that may arise.
        </p>
      </div>
      <img src={blog2} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Do Your Research</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          With so many options available, from venues and vendors to themes and
          decor, it's essential to do your research before making any decisions.
          Take the time to explore different wedding venues, browse through
          portfolios of photographers and florists, and gather inspiration from
          bridal magazines, websites, and social media platforms. Gathering
          information and ideas will help you make informed choices that align
          with your vision for the day.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Stay Organised</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          As you begin the wedding planning process, it's crucial to stay
          organized to avoid feeling overwhelmed. Consider using a wedding
          planning binder, spreadsheet, or online planning tool to keep track of
          important details such as vendor contacts, contracts, timelines, and
          budgets. Having everything in one place will help you stay on top of
          tasks and ensure that nothing falls through the cracks.
        </p>
      </div>
      <img src={blog3} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Seek Support</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Planning a wedding can be a massive undertaking, so don't hesitate to
          seek support from friends, family, or professional wedding planners if
          needed. Whether it's asking for recommendations, bouncing ideas off
          someone else, or delegating tasks to trusted individuals, having a
          support system in place can help alleviate stress and make the
          planning process more enjoyable.
        </p>
      </div>
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Planning a wedding may seem like a daunting task, but with careful
        planning, organization, and support, you can navigate the wedding
        planning maze with confidence. By establishing priorities, setting a
        budget, doing your research, staying organized, and seeking support when
        needed, you can create the wedding of your dreams while enjoying the
        journey along the way. So take a deep breath, trust your instincts, and
        embrace the excitement of planning your special day!
      </p>
    </div>
  );
};

export default Blog1;
