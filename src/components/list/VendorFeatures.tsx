import VendorFeature from "./VendorFeature";
import Listing from "/assets/Listing.png";
import Edit from "/assets/Edit.png";
import Bookings from "/assets/Bookings.png";
import LiveChat from "/assets/LiveChat.png";
import CRM from "/assets/CRM.png";
import BNPL from "/assets/BNPL.png";

const features = [
  {
    comingSoon: false,
    title: "Your Personalised Listing",
    content:
      "Elevate your venue's profile by showcasing its unique features and packages to a large audience of couples. Maximise bookings with our geo-specific app features, precisely connecting you with potential clients seeking the perfect location for their special day.",
    benefit: "100,000 unique users per month",
    img: Listing,
  },
  {
    comingSoon: true,
    title: "Effortless Vendor Profile Management",
    content:
      "Effortlessly update and enhance your wedding vendor page, ensuring your listings, profile, and packages are always in sync with your business needs. Embrace simplicity as you easily manage and customise your presence on our application.",
    benefit: "Spend 50% less time updating your listing",
    img: Edit,
  },
  {
    comingSoon: true,
    title: "Integrated Booking Experience",
    content:
      "Embark on a new era of efficiency with our integrated booking system. Experience the convenience of managing all your bookings seamlessly within our platform, eliminating the need for third-party solutions.",
    benefit: "Boost your booking efficiency by 30%",
    img: Bookings,
  },
  {
    comingSoon: true,
    title: "Live Chat With Couples",
    content:
      "Say goodbye to extensive phone calls and embrace a cost-effective, time-saving alternative. Studies show that over 70% of Gen-Z and millennials prefer digital channels for communication, making our live chat a pivotal tool for reaching your target audience effectively.",
    benefit: "Get back 60% of your time spent communicating with couples",
    img: LiveChat,
  },
  {
    comingSoon: true,
    title: "Integrated CRM",
    content:
      "Streamline your entire end-to-end couple interaction with our built-in CRM, allowing you to effortlessly send and manage files to couples. Simplify your workflow as you efficiently handle all aspects of couple management and communication on our platform.",
    benefit: "Up to $500 a month saved on a third-party CRM solution",
    img: CRM,
  },
  {
    comingSoon: true,
    title: "Get Paid Instantly",
    content:
      "Receive full payments upon contract signing and provide couples the flexibility of convenient instalments. Let us deal with payment delays and defaults, embracing a seamless process that enhances cash flow for both vendors and couples.",
    benefit: "Instant cash flow boost with couples spending 30% more",
    img: BNPL,
  },
];

const VendorFeatures = () => {
  return (
    <div className="mt-8 mb-16 sm:mb-24">
      <h3 className="mb-12 text-2xl lg:text-3xl font-semibold">Our features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((f) => (
          <VendorFeature data={f} />
        ))}
      </div>
    </div>
  );
};

export default VendorFeatures;
