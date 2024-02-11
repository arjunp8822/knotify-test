import QuestionAnswer from "../vendorPage/QuestionAnswer";
import WeddingRed from "/assets/weddingred.jpg";

export interface FAQs {
  id: number;
  question: string;
  answer: string;
}

const questionList = [
  {
    question: "How do I create a vendor listing on your platform?",
    answer:
      "To create a vendor listing, simply sign up as a vendor on our platform and navigate to your dashboard. From there, you can complete your profile by providing essential information about your services, including pricing, packages, and high-quality images. Our user-friendly interface ensures a smooth listing creation process.",
  },
  {
    question: "Can I update my vendor information after the initial setup?",
    answer:
      "Absolutely! You have full control over your vendor profile. Simply log in to your account, go to your dashboard, and select the 'Edit Profile' option. Make the necessary updates to keep your information current, ensuring that couples have the latest and most accurate details about your offerings.",
  },
  {
    question: "How does the integrated finance function work for vendors?",
    answer:
      "Our finance function is designed to offer vendors improved cash flow and flexibility. Upon contract signing, vendors receive payments in full, ensuring financial stability. Additionally, vendors can choose to offer couples the option to pay in instalments, providing a unique financial arrangement while guaranteeing the full amount on day one.",
  },
  {
    question: "Is there a cost associated with using the live chat feature?",
    answer:
      "No, the live chat feature is included as part of our comprehensive platform at no additional cost. It's a valuable tool to enhance communication with potential clients in real-time, providing a seamless and cost-effective way to connect with couples interested in your services.",
  },
  {
    question: "How do I troubleshoot issues with the in-app booking system?",
    answer:
      "If you encounter any issues with the in-app booking system, our support team is here to help. Simply reach out through our contact page or use the live chat feature for immediate assistance. We are committed to ensuring that your experience with our booking system is smooth and trouble-free.",
  },
];

const VendorFAQ = () => {
  return (
    <div className="mt-8 mb-16 sm:mb-24">
      <h4 className="text-2xl lg:text-3xl font-semibold mb-12">
        Frequently asked questions
      </h4>
      <ul className="mb-12">
        {questionList.map((q) => (
          <QuestionAnswer question={q.question} answer={q.answer} />
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <img
          src={WeddingRed}
          alt="Wedding Img"
          className="h-[300px] w-full sm:w-1/2 object-cover"
        />
        <div className="flex flex-col gap-4 w-full sm:w-1/2 justify-center">
          <h5 className="text-xl lg:text-2xl font-semibold">
            Still have questions?
          </h5>
          <p className="text-sm sm:text-lg text-gray-700">
            Reach out and a member of our team will get back to you within 24
            hours
          </p>
          <button className="bg-primary border border-primary text-white font-semibold mt-4 sm:mt-8 hover:bg-white hover:border hover:border-primary hover:text-primary transition-all">
            <a href="#contactform">Find Out More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorFAQ;
