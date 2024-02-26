import blog1 from "/assets/blogs/blog0301.jpg";
import blog2 from "/assets/blogs/blog0302.jpg";
import blog3 from "/assets/blogs/blog0303.jpg";

const Blog3 = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="text-sm sm:text-base text-gray-500 italic">
        26 February 2024
      </div>
      <h2 className="font-semibold text-lg sm:text-xl">
        5 Tips for a Stress-Free Celebration
      </h2>
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Celebrations mark significant moments in our lives, offering
        opportunities to create lasting memories with loved ones. However, the
        pressure of planning and executing a flawless event can often lead to
        unnecessary stress. Fortunately, with some thoughtful preparation and a
        focus on what truly matters, you can ensure that your next celebration
        is not only memorable but also stress-free. Here are five tips to help
        you achieve just that.
      </p>
      <img src={blog1} alt="Wedding Image" className="max-w-[600px]" />

      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Plan Ahead:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          The key to a stress-free celebration lies in thorough planning. Start
          by establishing a clear vision for the event and creating a detailed
          timeline outlining tasks and deadlines. Whether it's a birthday party,
          anniversary dinner, or holiday gathering, having a well-organized plan
          in place will help you stay on track and avoid last-minute rushes.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Keep It Simple:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          In the midst of planning, it's easy to get caught up in elaborate
          decorations, extravagant menus, and intricate details. However,
          simplicity is often the key to reducing stress and enjoying the
          celebration to the fullest. Focus on the essentials that align with
          the purpose of the event, and don't be afraid to scale back on
          non-essential elements. Remember, it's the company and the shared
          experiences that truly make a celebration special.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Delegate Tasks:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          You don't have to tackle every aspect of planning and preparation on
          your own. Enlist the help of friends, family members, or trusted
          professionals to share the workload and alleviate stress. Whether it's
          assigning someone to handle decorations, food preparation, or guest
          coordination, delegating tasks allows you to focus on enjoying the
          celebration without feeling overwhelmed.
        </p>
      </div>
      <img src={blog2} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Stay Flexible:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          No matter how well you plan, unexpected challenges or changes may
          arise during the celebration. Instead of letting these moments derail
          your mood, embrace them with flexibility and adaptability. Approach
          any hiccups with a sense of humor and creativity, and don't be afraid
          to deviate from the original plan if necessary. Remember, it's often
          the unplanned moments that become the most cherished memories.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Be Present:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Amidst the hustle and bustle of the celebration, make a conscious
          effort to be fully present in the moment. Put down your phone, engage
          in meaningful conversations, and take time to soak in the joy and
          camaraderie of the occasion. By focusing on the present moment and
          appreciating the company of your loved ones, you'll find that stress
          naturally melts away, leaving you free to enjoy the celebration to its
          fullest.
        </p>
      </div>
      <img src={blog3} alt="Wedding Image" className="max-w-[600px]" />
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Celebrations are meant to be joyous occasions filled with laughter,
        love, and cherished memories. By following these five tips—planning
        ahead, keeping it simple, delegating tasks, staying flexible, and being
        present—you can ensure that your next celebration is not only
        stress-free but also truly meaningful. So take a deep breath, relax, and
        let the festivities begin!
      </p>
    </div>
  );
};

export default Blog3;
