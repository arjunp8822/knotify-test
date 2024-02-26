import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface Props {
  setSubmitted: (submitted: boolean) => void;
}

const SubmitModal = ({ setSubmitted }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 transition-all bg-black bg-opacity-50">
      <div className="bg-white z-50 w-[85vw] sm:w-[600px] flex justify-center items-center flex-col gap-4  p-8">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-2">Thank you!</h1>
        <p className="text-center text-sm sm:text-base text-gray-500">
          A member of our team will get back to you within 24 hours. In the
          meantime please follow us.
        </p>
        <div className="flex text-lg gap-4">
          <div className="p-2 -full bg-primary text-white cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="p-2 -full bg-primary text-white cursor-pointer">
            <FaInstagram />
          </div>
        </div>
        <button
          className="font-semibold border p2 border-black mt-12"
          onClick={() => setSubmitted(false)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SubmitModal;
