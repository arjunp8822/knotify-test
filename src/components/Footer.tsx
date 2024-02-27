import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
import logo from "/assets/logo.png";
import { useRef, useState } from "react";
import SubmitModal from "./SubmitModal";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_mmx23ii",
        "template_96ksz7p",
        form.current!,
        "twcfsdyMRI2RLLHE1"
      );
      setName("");
      setEmail("");
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {submitted && <SubmitModal setSubmitted={setSubmitted} />}

      <div className="container flex flex-col">
        <div className="py-6 md:py-8 mb-4 sm:mb-0">
          <Link to={"/"}>
            <img src={logo} alt="Knotify" className="w-[100px] sm:w-[120px]" />
          </Link>
        </div>
        <div className="pb-12 flex flex-col md:flex-row gap-12 border-b border-gray-300">
          <form
            className="w-full md:w-1/3 flex flex-col"
            onSubmit={submitHandler}
            ref={form}
            name="form"
          >
            <h5 className="font-semibold md:text-lg mb-4">List With Us</h5>
            <input
              type="text"
              placeholder="Name"
              className="py-[6px] mb-3 border-none  text-sm sm:text-[15px]"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="py-[6px] mb-3 border-none  text-sm sm:text-[15px]"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="text-black border border-black font-semibold mt-4 py-1 text-sm sm:text-[15px] hover:bg-black hover:text-white transition-all">
              Join Now
            </button>
          </form>
          <div className="w-full md:w-1/3 flex flex-col md:items-center">
            <div>
              <h5 className="font-semibold md:text-lg mb-4">Quick Links</h5>
              <ul className="flex flex-col gap-3 text-sm sm:text-[15px]">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/vendors" className="hover:underline">
                    Vendors
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/list" className="hover:underline">
                    List With Us
                  </Link>
                </li>
              </ul>
            </div>
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
          <ul className="flex gap-4 text-gray-500 flex-wrap">
            <li className="flex items-center gap-1">
              <AiOutlineCopyrightCircle />
              <span>2024 Knotify Pty Ltd</span>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
          </ul>
          <div className="flex text-xl gap-4">
            <Link
              to={"https://www.facebook.com/knotifyweddings/"}
              className="hover:text-primary cursor-pointer transition-all"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"https://www.instagram.com/knotifyweddings/"}
              className="hover:text-primary cursor-pointer transition-all"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
