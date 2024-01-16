import VendorFeature from "./VendorFeature";
import SampleImg from "../assets/venues/black.png";

const features = [
  {
    comingSoon: false,
    reverse: false,
    title: "Your Personalised Listing",
    content:
      "With Knotify listings, your services are strategically showcased to thousands of couples actively seeking your expertise for their special day. Elevate your visibility within your local demographic through our comprehensive directory listing and tap into targeted searches with our geo-specific app features.",
    img: SampleImg,
  },
  {
    comingSoon: true,
    reverse: true,
    title: "Effortless Vendor Profile Management",
    content:
      "Revolutionise the way you manage your vendor presence with our user-friendly listing updates. Our vendor onboarding process has been redesigned to eliminate the need for manual entries, offering vendors a seamless and efficient solution for keeping their profiles up-to-date. Embrace simplicity as you effortlessly modify and enhance your vendor page, ensuring that you stay in sync with the dynamic needs of your business.",
    img: SampleImg,
  },
  {
    comingSoon: true,
    reverse: false,
    title: "Integrated Booking Experience",
    content:
      "Embark on a new era of efficiency with our expanded application, now equipped with an integrated booking system. Experience the convenience of managing all your bookings seamlessly within our platform, eliminating the need for third-party solutions.",
    img: SampleImg,
  },
  {
    comingSoon: true,
    reverse: true,
    title: "Live Chat With Couples",
    content:
      "Say goodbye to extensive phone calls and embrace a cost-effective, time-saving alternative. Studies show that over 70% of Gen-Z and millennials prefer digital channels for communication, making our live chat a pivotal tool for reaching your target audience effectively.",
    img: SampleImg,
  },
  {
    comingSoon: true,
    reverse: false,
    title: "Integrated CRM and Seamless File Management",
    content:
      "Empowering vendors to streamline their operations, our platform enables end-to-end customer interaction management within a singular, comprehensive solution. Say goodbye to scattered systems and welcome the simplicity of having your customer relationship management and file storage seamlessly integrated. From tracking interactions to securely managing files, our platform offers a centralized hub for enhancing productivity and organisation.",
    img: SampleImg,
  },
  {
    comingSoon: true,
    reverse: true,
    title: "Book Now Pay Later",
    content:
      "This groundbreaking feature not only facilitates improved cash flow but also transforms the payment process. Vendors can now receive payments in full upon contract signing, while couples gain the flexibility to pay in convenient instalments. Say goodbye to delayed payments and embrace a seamless financial experience that benefits both vendors and couples alike.",
    img: SampleImg,
  },
];

const VendorFeatures = () => {
  return (
    <div className="mt-8 mb-16 sm:mb-24">
      <h3 className="mb-12 text-2xl lg:text-3xl font-semibold">Our features</h3>
      <div className="flex flex-col gap-12 justify-center items-center">
        {features.map((f) => (
          <VendorFeature data={f} />
        ))}
      </div>
    </div>
  );
};

export default VendorFeatures;
