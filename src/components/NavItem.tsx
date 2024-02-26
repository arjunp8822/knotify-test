import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  button: boolean;
  setOpen: (open: boolean) => void;
}

const NavItem = ({ title, link, button, setOpen }: Props) => {
  if (!button) {
    return (
      <li key={title} className="hover:text-primary transition-all uppercase">
        <Link to={link} onClick={() => setOpen(false)}>
          {title}
        </Link>
      </li>
    );
  } else {
    return (
      <li key={title}>
        <button className="bg-primary text-white w-fit hover:bg-white hover:text-primary border border-primary transition-all uppercase">
          <Link to={link} onClick={() => setOpen(false)}>
            {title}
          </Link>
        </button>
      </li>
    );
  }
};

export default NavItem;
