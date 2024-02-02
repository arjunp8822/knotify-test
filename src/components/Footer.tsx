import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container flex flex-col">
      <div className="py-6 md:py-8 mb-4 sm:mb-0">
        <h5 className="text-3xl md:text-3xl font-marley">Knotify</h5>
      </div>
      <div className="pb-12 flex flex-col md:flex-row gap-12 border-b border-gray-300">
        <form className="w-full md:w-1/3 flex flex-col">
          <h5 className="font-semibold md:text-lg mb-4">List With Us</h5>
          <input
            type="text"
            placeholder="Name"
            className="py-[6px] mb-3 border-none rounded text-sm sm:text-[15px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-[6px] mb-3 border-none rounded text-sm sm:text-[15px]"
          />
          <button className="text-black border border-black font-semibold mt-4 py-1 text-sm sm:text-[15px]">
            Join Now
          </button>
        </form>
        <div className="w-full md:w-1/3 flex flex-col md:items-center">
          <h5 className="font-semibold md:text-lg mb-4">Quick Links</h5>
          <ul className="flex flex-col gap-3 text-sm sm:text-[15px]">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Vendors
              </Link>
            </li>
            <li>
              <Link to="/list" className="hover:underline">
                List With Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex flex-col md:items-center">
          <div>
            <h5 className="mb-4 font-semibold md:text-lg">Get In Touch</h5>
            <div className="flex flex-col gap-4">
              <Link
                className="flex gap-2 items-center text-xl hover:text-primary transition-all"
                to="mailto:info@knotify.com.au"
              >
                <MdOutlineMailOutline />
                <p className="text-sm sm:text-[15px]">info@knotify.com.au</p>
              </Link>
              <Link
                className="flex gap-2 items-center text-xl hover:text-primary transition-all"
                to="tel:0424073944"
              >
                <MdOutlinePhoneEnabled />
                <p className="text-sm sm:text-[15px]">0424 073 944</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-8 flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between text-sm sm:text-[15px]">
        <ul className="flex gap-4 text-gray-500">
          <li>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <AiOutlineCopyrightCircle />
            <span>2024 Knotify Pty Ltd</span>
          </li>
        </ul>
        <div className="flex text-xl gap-4">
          <div className="hover:text-primary cursor-pointer transition-all">
            <FaInstagram />
          </div>
          <div className="hover:text-primary cursor-pointer transition-all">
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
