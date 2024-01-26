import VendorFeature from "./VendorFeature";
import Listing from "/assets/Listing.png";
import Edit from "/assets/Edit.png";
import Bookings from "/assets/Bookings.png";
import LiveChat from "/assets/LiveChat.png";
import CRM from "/assets/CRM.png";
import BNPL from "/assets/BNPL.png";
import cash from "/assets/benefits/cash.png";

const features = [
  {
    comingSoon: false,
    title: "Your Personalised Listing",
    content:
      "With Knotify listings, your services are strategically showcased to thousands of couples actively seeking your expertise for their special day. Elevate your visibility within your local demographic through our comprehensive directory listing and tap into targeted searches with our geo-specific app features.",
    benefit: "This is a test benefit",
    benefitIcon: cash,
    img: Listing,
  },
  {
    comingSoon: true,
    title: "Effortless Vendor Profile Management",
    content:
      "Revolutionise the way you manage your vendor presence with our user-friendly listing updates. Our vendor onboarding process has been redesigned to eliminate the need for manual entries, offering vendors a seamless and efficient solution for keeping their profiles up-to-date. Embrace simplicity as you effortlessly modify and enhance your vendor page, ensuring that you stay in sync with the dynamic needs of your business.",
    benefit: "",
    benefitIcon: "",
    img: Edit,
  },
  {
    comingSoon: true,
    title: "Integrated Booking Experience",
    content:
      "Embark on a new era of efficiency with our expanded application, now equipped with an integrated booking system. Experience the convenience of managing all your bookings seamlessly within our platform, eliminating the need for third-party solutions.",
    benefit: "",
    benefitIcon: "",
    img: Bookings,
  },
  {
    comingSoon: true,
    title: "Live Chat With Couples",
    content:
      "Say goodbye to extensive phone calls and embrace a cost-effective, time-saving alternative. Studies show that over 70% of Gen-Z and millennials prefer digital channels for communication, making our live chat a pivotal tool for reaching your target audience effectively.",
    benefit: "",
    benefitIcon: "",
    img: LiveChat,
  },
  {
    comingSoon: true,
    title: "Integrated CRM and Seamless File Management",
    content:
      "Empowering vendors to streamline their operations, our platform enables end-to-end customer interaction management within a singular, comprehensive solution. Say goodbye to scattered systems and welcome the simplicity of having your customer relationship management and file storage seamlessly integrated. From tracking interactions to securely managing files, our platform offers a centralized hub for enhancing productivity and organisation.",
    benefit: "",
    benefitIcon: "",
    img: CRM,
  },
  {
    comingSoon: true,
    title: "Book Now Pay Later",
    content:
      "This groundbreaking feature not only facilitates improved cash flow but also transforms the payment process. Vendors can now receive payments in full upon contract signing, while couples gain the flexibility to pay in convenient instalments. Say goodbye to delayed payments and embrace a seamless financial experience that benefits both vendors and couples alike.",
    benefit: "",
    benefitIcon: "",
    img: BNPL,
  },
];

const VendorFeatures = () => {
  return (
    <div className="mt-8 mb-16 sm:mb-24">
      <h3 className="mb-12 text-2xl lg:text-3xl font-semibold">Our features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <VendorFeature data={f} />
        ))}
      </div>
    </div>
  );
};

export default VendorFeatures;
