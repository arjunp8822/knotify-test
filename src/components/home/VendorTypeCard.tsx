import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const VendorTypeCard = ({ title }: Props) => {
  return (
    <li className="text-sm sm:text-base text-center uppercase hover:text-primary transition-all font-semibold underline cursor-pointer box-border whitespace-nowrap">
      <Link to={"/vendors"}>{title}</Link>
    </li>
  );
};

export default VendorTypeCard;
