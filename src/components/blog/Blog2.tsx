import blog1 from "/assets/blogs/blog0201.jpg";
import blog2 from "/assets/blogs/blog0202.jpg";
import blog3 from "/assets/blogs/blog0203.jpg";
import blog4 from "/assets/blogs/blog0204.jpg";
import blog5 from "/assets/blogs/blog0205.jpg";

const Blog2 = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="text-sm sm:text-base text-gray-500 italic">
        26 February 2024
      </div>
      <h2 className="font-semibold text-lg sm:text-xl">
        10 On-the-Day Wedding Tips for Couples
      </h2>
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Your wedding day is one of the most significant moments in your life,
        filled with love, joy, and the promise of a lifetime together. However,
        amidst the excitement, it's easy for couples to feel overwhelmed by the
        myriad of details and responsibilities. To help alleviate stress and
        ensure a smooth and memorable day, here are ten on-the-day wedding tips
        for couples to consider.{" "}
      </p>
      <img src={blog1} alt="Wedding Image" className="max-w-[600px]" />

      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Start the Day with Relaxation:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Begin your wedding day with moments of relaxation and calm. Whether
          it's enjoying a quiet breakfast together, practicing mindfulness
          exercises, or taking a leisurely stroll, carving out time for
          yourselves will help set a positive tone for the day ahead.
        </p>
      </div>
      <img src={blog2} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Stick to the Timeline:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Creating a detailed timeline for the day's events is crucial for
          staying organized and ensuring everything runs smoothly. Communicate
          the timeline with your vendors, bridal party, and anyone else involved
          in the wedding to keep everyone on the same page and avoid unnecessary
          delays.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Delegate Responsibilities:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          While it's natural to want to oversee every aspect of your wedding
          day, delegating responsibilities to trusted friends or family members
          can help alleviate stress and allow you to focus on enjoying the
          moment. Assign tasks such as coordinating vendors, managing logistics,
          and troubleshooting any last-minute issues.
        </p>
      </div>
      <img src={blog3} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Have a Plan B:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          No matter how meticulously you plan, unexpected circumstances can
          arise on your wedding day. Be prepared by having a backup plan in
          place for outdoor ceremonies, transportation delays, or any other
          potential challenges. Knowing that you have a plan B will provide
          peace of mind and ensure that you can adapt to any situation with
          grace.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Stay Hydrated and Nourished:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          With all the excitement and activity of the day, it's essential to
          stay hydrated and nourished. Keep a water bottle and healthy snacks on
          hand to ensure you have the energy to enjoy every moment of your
          wedding day fully.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Take Moments to Connect: </h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Amidst the whirlwind of activity, take moments throughout the day to
          connect with your partner. Whether it's stealing a quiet moment alone
          together, sharing a meaningful glance during the ceremony, or hitting
          the dance floor hand in hand, these moments of connection will be
          cherished memories for years to come.
        </p>
      </div>
      <img src={blog4} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Trust Your Vendors:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          You've carefully selected a team of vendors to bring your wedding
          vision to life, so trust in their expertise and professionalism. Allow
          them to do their jobs without micromanaging, knowing that they have
          your best interests at heart and are committed to making your day
          unforgettable.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Embrace Imperfection:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Perfection is an unrealistic expectation, especially on a day as
          significant as your wedding. Embrace the inevitable imperfections and
          mishaps with humor and grace, knowing that these unexpected moments
          often become the most cherished memories.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Stay Present:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Amidst the excitement and whirlwind of the day, make a conscious
          effort to stay present and savor each moment as it unfolds. Take
          mental snapshots, soak in the love and joy surrounding you, and
          appreciate the significance of the occasion.
        </p>
      </div>
      <img src={blog5} alt="Wedding Image" className="max-w-[600px]" />
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold">Have Fun:</h4>
        <p className="text-gray-500 text-sm sm:text-base font-light">
          Above all, remember that your wedding day is a celebration of your
          love and commitment to each other. Let go of stress and expectations,
          and simply have fun! Dance, laugh, and revel in the joy of sharing
          this special day with your loved ones.
        </p>
      </div>
      <p className="text-gray-500 text-sm sm:text-base font-light">
        Your wedding day is a once-in-a-lifetime celebration, and by following
        these on-the-day tips, you can ensure that it's a day filled with love,
        laughter, and cherished memories. From staying relaxed and hydrated to
        embracing imperfection and staying present, these tips will help you
        navigate the day with ease and enjoy every moment to the fullest. So
        take a deep breath, hold hands with your partner, and let the magic of
        your wedding day unfold!
      </p>
    </div>
  );
};

export default Blog2;
