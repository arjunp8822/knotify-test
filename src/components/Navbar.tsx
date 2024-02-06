import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItem from "./NavItem";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface Props {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
}

const navLinks = [
  { title: "Vendors", link: "/", button: false },
  // { title: "Blog", link: "/blog", button: false },
  { title: "List with us", link: "/list", button: true },
];

const Navbar = ({ openNav, setOpenNav }: Props) => {
  return (
    <nav className={`bg-white`}>
      <div className="navbar w-full  flex justify-between items-center sm:py-12">
        <div
          className={`font-marley text-3xl md:text-4xl text-primary ${
            openNav ? "blur-[2px]" : ""
          }`}
        >
          <Link to={"/"} onClick={() => setOpenNav(false)}>
            Knotify
          </Link>
        </div>
        <div
          className={`bg-white z-30 fixed h-full w-[80vw] top-0 right-0 transition-transform ${
            openNav ? "translate-x-0" : "translate-x-[100vw]"
          } sm:static sm:h-auto sm:w-auto sm:top-auto sm:right-auto sm:translate-x-0`}
        >
          <div
            className="flex justify-start items-center cursor-pointer h-[60px] sm:hidden text-3xl ml-2 mt-2 absolute z-10"
            onClick={() => setOpenNav(false)}
          >
            <IoIosClose />
          </div>
          <ul className="flex flex-col justify-center items-center gap-12 h-[100vh] sm:flex-row sm:h-auto font-semibold -translate-y-6 sm:translate-y-0">
            {navLinks.map((l) => (
              <NavItem
                key={l.title}
                title={l.title}
                link={l.link}
                button={l.button}
                setOpen={setOpenNav}
              />
            ))}
          </ul>
          <div className="absolute bottom-0 w-full h-[100px] flex justify-center items-center sm:hidden gap-8">
            <Link
              className="text-lg bg-gray-100 text-gray-700 p-2 rounded-full"
              to={"https://www.facebook.com/knotifyweddings/"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="text-lg bg-gray-100 text-gray-700 p-2 rounded-full"
              to={"https://www.instagram.com/knotifyweddings/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div
          className="flex cursor-pointer sm:hidden text-2xl mt-2"
          onClick={() => setOpenNav(true)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
