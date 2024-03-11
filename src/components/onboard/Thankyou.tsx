import { FaCheck } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Props {
  setThankYouModal: (a: boolean) => void;
}

const Thankyou = ({ setThankYouModal }: Props) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    setThankYouModal(false);
    navigate("/");
  };
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 h-screen w-screen z-[200] flex justify-center items-center">
      <div className="bg-black opacity-25 h-screen w-screen z-[200]"></div>
      <div className="bg-white overflow-y-auto h-[80%] w-[90%] max-w-[600px] sm:h-[65%] sm:w-[80%] absolute z-[250] opacity-100 pt-4 pl-4 pr-4 sm:pt-8 sm:pl-8 sm:pr-8 flex flex-col justify-center items-center rounded gap-8">
        <div className="w-full h-full flex flex-col justify-center items-center rounded gap-8 relative">
          <div className="text-[60px] sm:text-[100px] border-8 border-green-500 rounded-full p-4 text-green-500">
            <FaCheck />
          </div>
          <h1 className="font-semibold text-2xl sm:text-4xl">Thank You</h1>
          <p className="text-sm sm:text-base text-gray-500">
            Your submission has been received and we will be contacting you
            shortly to follow up. If you would like to get in touch please email{" "}
            <a
              href="mailto:info@knotify.com.au"
              target="_blank"
              className="text-black font-semibold underline"
            >
              info@knotify.com.au
            </a>
            .
          </p>
          <div className="flex gap-4 text-[20px]">
            <a
              className="rounded-full border p-2"
              href="https://www.facebook.com/knotifyweddings/"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="rounded-full border p-2"
              href="https://www.instagram.com/knotifyweddings/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
          <div
            className="text-[28px] absolute top-0 right-0 cursor-pointer"
            onClick={closeHandler}
          >
            <IoClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
