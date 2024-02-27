import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import sampleImg from "/assets/blogs/blog0101.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <div className="mt-10 border-t pt-10 mb-20">
      <h3 className="text-gray-500 sm:text-lg">
        Hear from our couples and vendors
      </h3>
      <h2 className="font-semibold text-xl sm:text-2xl mb-8">Reviews</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        speed={800}
        slidesPerView={1}
        loop={true}
        className="myswiper h-full"
      >
        <SwiperSlide className="swiperslide flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 mb-16 sm:mb-12 md:h-[500px]">
          <div className="w-full md:w-1/2 flex-shrink-0 h-full">
            <img
              src={sampleImg}
              alt="Wedding Image"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
            <p className="text-gray-500 text-sm sm:text-base text-start font-light md:pr-20">
              "Our wedding day was nothing short of magical, and it wouldn't
              have been possible without Knotify! From finding the perfect venue
              to selecting the most talented vendors, every step was seamless.
              The platform's user-friendly interface made planning a breeze, and
              we were thrilled with the quality of services we received."
            </p>
            <h2 className="font-semibold text-lg sm:text-xl">
              Sarah and Michael
            </h2>
            <h5 className="font-semibold mb-6 text-sm sm:text-base">
              Sydney, Australia
            </h5>
            <button className="bg-primary text-white uppercase text-sm sm:text-base">
              Find Vendors
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 mb-16 sm:mb-12 md:h-[500px]">
          <img
            src={sampleImg}
            alt="Wedding Image"
            className="object-cover w-full md:w-1/2 h-full"
          />
          <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
            <p className="text-gray-500 text-sm sm:text-base text-start font-light md:pr-20">
              "Choosing Knotify was one of the best decisions we made for our
              wedding. The platform's extensive list of vendors allowed us to
              curate our dream team with ease. From florists to photographers,
              each vendor exceeded our expectations. Knotify's communication
              tools kept us organized and on track, ensuring everything ran
              smoothly on the big day."
            </p>
            <h2 className="font-semibold text-lg sm:text-xl">
              Lauren and David
            </h2>
            <h5 className="font-semibold mb-6 text-sm sm:text-base">
              Brisbane, Australia
            </h5>
            <button className="bg-primary text-white uppercase text-sm sm:text-base">
              Find Vendors
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 mb-16 sm:mb-12 md:h-[500px]">
          <img
            src={sampleImg}
            alt="Wedding Image"
            className="object-cover w-full md:w-1/2 h-full"
          />
          <div className="flex flex-col gap-4 justify-center h-full items-start w-full md:w-1/2">
            <p className="text-gray-500 text-sm sm:text-base text-start font-light md:pr-20">
              "Knotify turned our wedding dreams into a reality! We were blown
              away by the variety of vendors available on the platform, and the
              ability to compare options made decision-making stress-free. The
              vendors we chose were professional, attentive, and truly went
              above and beyond to make our day special. Knotify's support team
              was also incredibly helpful throughout the process!"
            </p>
            <h2 className="font-semibold text-lg sm:text-xl">Emily and Jack</h2>
            <h5 className="font-semibold mb-6 text-sm sm:text-base">
              Melbourne, Australia
            </h5>
            <button className="bg-primary text-white uppercase text-sm sm:text-base">
              Find Vendors
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
