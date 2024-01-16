import { Link } from "react-router-dom";
import NavItem from "./NavItem";

interface Props {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
}

const navLinks = [
  { title: "Venues", link: "/", button: false },
  // { title: "Blog", link: "/blog", button: false },
  { title: "List with us", link: "/vendors", button: true },
];

const Navbar = ({ openNav, setOpenNav }: Props) => {
  return (
    <nav className="navbar flex justify-between items-center sm:py-12">
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
          className="flex justify-start items-center cursor-pointer h-[60px] sm:hidden"
          onClick={() => setOpenNav(false)}
        >
          Close
        </div>
        <ul className="flex flex-col justify-center items-center gap-12 h-[calc(100vh-60px)] sm:flex-row sm:h-auto font-semibold text-gray-600">
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
      </div>
      <div
        className="flex cursor-pointer sm:hidden"
        onClick={() => setOpenNav(true)}
      >
        Open
      </div>
    </nav>
  );
};

export default Navbar;
